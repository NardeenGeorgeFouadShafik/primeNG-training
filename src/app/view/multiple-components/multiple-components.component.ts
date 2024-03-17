import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
  selector: 'app-multiple-components',
  standalone: true,
  imports: [
    SelectButtonModule,
    FormsModule,
    SliderModule,
    TriStateCheckboxModule,
    ReactiveFormsModule,
    ToggleButtonModule,
  ],
  templateUrl: './multiple-components.component.html',
  styleUrl: './multiple-components.component.scss',
})
export class MultipleComponentsComponent implements OnInit {
  options: any[] = [
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
    { name: 'Option 3', value: 3 },
  ];
  value?: number[] = [2];
  justifyOptions: any[] = [
    { icon: 'pi pi-align-left', justify: 'Left' },
    { icon: 'pi pi-align-right', justify: 'Right' },
    { icon: 'pi pi-align-center', justify: 'Center' },
    { icon: 'pi pi-align-justify', justify: 'Justify' },
  ];
  rangeValues: number[] = [20, 80];
  formGroup!: FormGroup;
  checked: boolean = false;

  ngOnInit() {
    this.formGroup = new FormGroup({
      checked: new FormControl<boolean | null>(true),
    });
  }
}
