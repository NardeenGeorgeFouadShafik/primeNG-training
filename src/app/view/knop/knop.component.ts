import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';

@Component({
  selector: 'app-knop',
  standalone: true,
  imports: [KnobModule, FormsModule],
  templateUrl: './knop.component.html',
  styleUrl: './knop.component.scss',
})
export class KnopComponent {
  value: number = 10;
  value1: number = 80;
}
