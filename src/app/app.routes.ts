import { Routes } from '@angular/router';
import { AutoCompleteComponent } from './view/auto-complete/auto-complete.component';
import { AppComponent } from './app.component';
import { CalendarComponent } from './view/calendar/calendar.component';
import { CascadeSelectComponent } from './view/cascade-select/cascade-select.component';
import { DropdownComponent } from './view/dropdown/dropdown.component';
import { InputsComponent } from './view/inputs/inputs.component';
import { KnopComponent } from './view/knop/knop.component';
import { RatingComponent } from './view/rating/rating.component';
import { MultipleComponentsComponent } from './view/multiple-components/multiple-components.component';
import { TreeSelectComponent } from './view/tree-select/tree-select.component';
import { ButtonsComponent } from './view/buttons/buttons.component';
import { DataViewComponent } from './view/data-view/data-view.component';
import { OrderListComponent } from './view/order-list/order-list.component';

export const routes: Routes = [
  { path: 'auto-complete', component: AutoCompleteComponent },
  { path: 'calender', component: CalendarComponent },
  { path: 'cascade-select', component: CascadeSelectComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'inputs', component: InputsComponent },
  { path: 'knop', component: KnopComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'multi-components', component: MultipleComponentsComponent },
  { path: 'tree-select', component: TreeSelectComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'data-view', component: DataViewComponent },
  { path: 'order-list', component: OrderListComponent },

  { path: '', component: AppComponent },
];
