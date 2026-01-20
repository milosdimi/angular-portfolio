import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;

  // neu: preview / modal image
  imageUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      liveUrl: 'https://join.milosdimi.de',
      githubUrl: 'https://github.com/milosdimi/join',
      imageUrl: 'assets/img/projects/join.png',
    },
    {
      id: 2,
      title: 'El Pollo Loco',
      description: 'Jump, run and throw game based on an object-oriented approach. Help Pepe to find coins and tabasco salsa.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://pollo.dimit.cc/',
      githubUrl: 'https://github.com/milosdimi/el_pollo_final',
      imageUrl: 'assets/projects/el-pollo-loco-game.png',
    },
    {
      id: 3,
      title: 'DA Bubble',
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface and real-time messaging.',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      liveUrl: 'https://da-bubble.milosdimi.de',
      githubUrl: 'https://github.com/milosdimi/da-bubble',
      imageUrl: 'assets/img/projects/da-bubble.png',
    },
  ];

  hoveredProjectId: number | null = null;
  selectedProject: Project | null = null;

  trackById(_: number, p: Project) {
    return p.id;
  }

  setHover(projectId: number | null) {
    this.hoveredProjectId = projectId;
  }

  openProject(project: Project) {
    this.selectedProject = project;
  }

  closeProject() {
    this.selectedProject = null;
  }

  nextProject() {
    if (!this.selectedProject) return;

    const idx = this.projects.findIndex(p => p.id === this.selectedProject!.id);
    const next = this.projects[(idx + 1) % this.projects.length];
    this.selectedProject = next;
  }

  getProjectNumber(id: number): string {
    return id.toString().padStart(2, '0');
  }

  get previewProject(): Project | null {
    if (this.selectedProject) return this.selectedProject;
    if (this.hoveredProjectId == null) return null;
    return this.projects.find(p => p.id === this.hoveredProjectId) ?? null;
  }

  @HostListener('window:keydown.escape')
  onEsc() {
    this.closeProject();
  }
}
