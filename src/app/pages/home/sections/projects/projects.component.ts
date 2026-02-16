import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../../shared/i18n/translate.pipe';

export interface Project {
  id: number;
  title: string;
  descriptionKey: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Join',
      descriptionKey: 'projects.items.join',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      liveUrl: 'https://join.dimit.cc/',
      githubUrl: 'https://github.com/Asim-taskin/Join.git',
      imageUrl: 'assets/projects/join-kanban.png',
    },
    {
      id: 2,
      title: 'El Pollo Loco',
      descriptionKey: 'projects.items.pollo',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://pollo.dimit.cc/',
      githubUrl: 'https://github.com/milosdimi/el_pollo_final',
      imageUrl: 'assets/projects/el-pollo-loco-game.png',
    },
    {
      id: 3,
      title: 'Pokedex',
      descriptionKey: 'projects.items.pokedex',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://dex.dimit.cc/',
      githubUrl: 'https://github.com/milosdimi/pokedex',
      imageUrl: 'assets/projects/pokedex.png',
    },
  ];

  hoveredProjectId: number | null = null;
  selectedProject: Project | null = null;
  techIconMap: Record<string, string> = {
    HTML: 'html.svg',
    CSS: 'css.svg',
    JavaScript: 'js.svg',
    TypeScript: 'ts.svg',
    Angular: 'angular.svg',
    Firebase: 'fb.svg',
    Git: 'git.svg',
    'REST-API': 'api.svg',
    Scrum: 'scrum.svg',
  };

  trackById(_: number, p: Project): number {
    return p.id;
  }

  setHover(projectId: number | null): void {
    this.hoveredProjectId = projectId;
  }

  openProject(project: Project): void {
    this.selectedProject = project;
    this.hoveredProjectId = null;
    document.body.classList.add('no-scroll');
  }

  closeProject(): void {
    this.selectedProject = null;
    document.body.classList.remove('no-scroll');
  }

  nextProject(): void {
    if (!this.selectedProject) return;

    const idx = this.projects.findIndex(
      (p) => p.id === this.selectedProject!.id,
    );
    const next = this.projects[(idx + 1) % this.projects.length];
    this.selectedProject = next;
    this.hoveredProjectId = null;
  }

  getProjectNumber(id: number): string {
    return id.toString().padStart(2, '0');
  }

  getTechIcon(tech: string): string | null {
    const icon = this.techIconMap[tech];
    return icon ? `assets/icons/${icon}` : null;
  }

  get previewProject(): Project | null {
    if (this.selectedProject) return this.selectedProject;
    if (this.hoveredProjectId == null) return null;
    return this.projects.find((p) => p.id === this.hoveredProjectId) ?? null;
  }

  @HostListener('window:keydown.escape')
  onEsc(): void {
    if (this.selectedProject) {
      this.closeProject();
    }
  }
}
