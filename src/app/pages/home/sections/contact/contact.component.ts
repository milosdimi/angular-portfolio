import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe } from '../../../../shared/i18n/translate.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  isSubmitting = false;
  submitState: 'idle' | 'success' | 'error' = 'idle';
  private readonly emailTldPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailTldPattern)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacy: [false, [Validators.requiredTrue]],
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  isInvalid(field: 'name' | 'email' | 'message' | 'privacy') {
    const ctrl = this.form.get(field);
    return !!ctrl && ctrl.invalid && (ctrl.touched || ctrl.dirty);
  }

  async submit() {
    this.form.patchValue({
      name: this.form.value.name?.trim() ?? '',
      email: this.form.value.email?.trim() ?? '',
      message: this.form.value.message?.trim() ?? '',
    });

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitState = 'idle';

    const payload = {
      name: this.form.value.name,
      email: this.form.value.email,
      message: this.form.value.message,
    };

    this.http.post<{ ok: boolean }>('https://dimit.cc/api/sendMail.php', payload)
      .subscribe({
        next: (res) => {
          if (res?.ok) {
            this.submitState = 'success';
            this.form.reset({ privacy: false });
          } else {
            this.submitState = 'error';
          }
          this.isSubmitting = false;
        },
        error: () => {
          this.submitState = 'error';
          this.isSubmitting = false;
        }
      });
  }
}
