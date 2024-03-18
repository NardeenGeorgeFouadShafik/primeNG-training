import { Component } from "@angular/core";
import { PaginatorModule } from "primeng/paginator";
import { PageEvent } from "../../models/page-event.model";
import { DividerModule } from "primeng/divider";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { SliderModule } from "primeng/slider";

@Component({
  selector: "app-pagination",
  standalone: true,
  imports: [
    PaginatorModule,
    DividerModule,
    ButtonModule,
    DropdownModule,
    SliderModule,
  ],
  templateUrl: "./pagination.component.html",
  styleUrl: "./pagination.component.scss",
})
export class PaginationComponent {
  first: number = 0;

  rows: number = 10;

  first1: number = 0;

  rows1: number = 10;

  first2: number = 2;

  rows2: number = 20;

  first3: number = 1;

  rows3: number = 30;

  totalRecords: number = 120;

  options = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 120, value: 120 },
  ];

  onPageChange1(event: any) {
    this.first1 = event.first;
    this.rows1 = event.rows;
  }

  onPageChange2(event: any) {
    this.first2 = event.first;
    this.rows2 = event.rows;
  }

  onPageChange3(event: any) {
    this.first3 = event.first;
    this.rows3 = event.rows;
  }
  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
