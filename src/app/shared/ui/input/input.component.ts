import { Component, input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  readonly id = input('app-input');
  readonly label = input('');
  readonly placeholder = input('');
  readonly type = input('text');
  readonly disabled = input(false);
}
