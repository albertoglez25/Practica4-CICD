import { Component, Input } from '@angular/core';
import { PipelineStage } from '../../services/pipeline.service';

@Component({
  selector: 'app-pipeline',
  standalone: true,
  template: `
    <section class="pipeline" aria-label="Etapas de la pipeline">
      @for (stage of stages; track stage.title) {
        <article class="pipeline-step" [class.completed]="stage.state === 'done'" [class.current]="stage.state === 'active'">
          <h3>{{ stage.title }}</h3>
          <span>{{ stage.state === 'done' ? 'Completado' : stage.state === 'active' ? 'En curso' : 'Pendiente' }}</span>
          <p>{{ stage.description }}</p>
          <code>{{ stage.command }}</code>
        </article>
      }
    </section>
  `
})
export class PipelineComponent {
  @Input() stages: PipelineStage[] = [];
}
