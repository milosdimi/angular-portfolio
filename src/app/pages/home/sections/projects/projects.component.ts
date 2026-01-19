import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Join',
      description: 'Task manager inspired by the Kanban System',
      detailedDescription: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      imageUrl: 'assets/img/projects/join.jpg',
      liveUrl: 'https://join.milosdimi.de',
      githubUrl: 'https://github.com/milosdimi/join',
      featured: true
    },
    {
      id: 2,
      title: 'El Pollo Loco',
      description: 'Jump, run and throw game',
      detailedDescription: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      imageUrl: 'assets/img/projects/el-pollo-loco.jpg',
      liveUrl: 'https://el-pollo-loco.milosdimi.de',
      githubUrl: 'https://github.com/milosdimi/el-pollo-loco',
      featured: true
    },
    {
      id: 3,
      title: 'DA Bubble',
      description: 'Slack Clone App for team communication',
      detailedDescription: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      imageUrl: 'assets/img/projects/da-bubble.jpg',
      liveUrl: 'https://da-bubble.milosdimi.de',
      githubUrl: 'https://github.com/milosdimi/da-bubble',
      featured: true
    }
  ];

  selectedProject: Project | null = null;
  showDetailView = false;

  selectProject(project: Project): void {
    this.selectedProject = project;
    this.showDetailView = true;
    // Scroll zum Anfang der Sektion
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }

  closeDetailView(): void {
    this.showDetailView = false;
    this.selectedProject = null;
  }

  nextProject(): void {
    if (!this.selectedProject) return;
    
    const currentIndex = this.projects.findIndex(p => p.id === this.selectedProject!.id);
    const nextIndex = (currentIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[nextIndex];
  }

  getProjectNumber(id: number): string {
    return id.toString().padStart(2, '0');
  }
}