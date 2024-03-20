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
import { OrganizationChart } from 'primeng/organizationchart';
import { OrganizationChartComponent } from './view/organization-chart/organization-chart.component';
import { PaginationComponent } from './view/pagination/pagination.component';
import { PickListComponent } from './view/pick-list/pick-list.component';
import { TableComponent } from './view/table/table.component';
import { TablePartTwoComponent } from './view/table-part-two/table-part-two.component';
import { TimelineComponent } from './view/timeline/timeline.component';
import { TreeComponent } from './view/tree/tree.component';
import { TreeTableComponent } from './view/tree-table/tree-table.component';
import { UploadFilesComponent } from './view/upload-files/upload-files.component';
import { MenusComponent } from './view/menus/menus.component';
import { StepperComponent } from './view/stepper/stepper.component';
import { ChartComponent } from './view/chart/chart.component';
import { CarouselComponent } from './view/carousel/carousel.component';

export const routes: Routes = [
  { path: "auto-complete", component: AutoCompleteComponent },
  { path: "calender", component: CalendarComponent },
  { path: "cascade-select", component: CascadeSelectComponent },
  { path: "dropdown", component: DropdownComponent },
  { path: "inputs", component: InputsComponent },
  { path: "knop", component: KnopComponent },
  { path: "rating", component: RatingComponent },
  { path: "multi-components", component: MultipleComponentsComponent },
  { path: "tree-select", component: TreeSelectComponent },
  { path: "buttons", component: ButtonsComponent },
  { path: "data-view", component: DataViewComponent },
  { path: "order-list", component: OrderListComponent },
  { path: "organization-chart", component: OrganizationChartComponent },
  { path: "pagination", component: PaginationComponent },
  { path: "pick-list", component: PickListComponent },
  { path: "tables", component: TableComponent },
  { path: "tables-part2", component: TablePartTwoComponent },
  { path: "timeline", component: TimelineComponent },
  { path: "tree", component: TreeComponent },
  { path: "tree-table", component: TreeTableComponent },
  { path: "upload-files", component: UploadFilesComponent },
  { path: "menus", component: MenusComponent },
  {
    path: "steps",
    component: StepperComponent,
    children: [
      { path: "inputs", component: InputsComponent },
      { path: "tables", component: TableComponent },
      { path: "order-list", component: OrderListComponent },
      { path: "organization-chart", component: OrganizationChartComponent },
    ],
  },
  { path: "chart", component: ChartComponent },
  { path: "carousel", component: CarouselComponent },

  { path: "", component: AppComponent },
];
