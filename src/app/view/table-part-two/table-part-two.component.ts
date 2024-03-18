import { Component, OnInit } from "@angular/core";
import { TableModule } from "primeng/table";
import { RatingModule } from "primeng/rating";
import { TagModule } from "primeng/tag";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MultiSelectModule } from "primeng/multiselect";
import { DropdownModule } from "primeng/dropdown";
import { SliderModule } from "primeng/slider";
import { ProgressBarModule } from "primeng/progressbar";
import { CustomerService } from "../../services/customer.service";
import { Customer } from "../../models/customer.model";
import { InputTextModule } from "primeng/inputtext";
import { ToastModule } from "primeng/toast";
import { ToggleButtonModule } from "primeng/togglebutton";
import { SkeletonModule } from "primeng/skeleton";
import { Car, Column } from "../../models/car.model";
import { CarService } from "../../services/car.service";
import { Product } from "../../models/product.model";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-table-part-two",
  standalone: true,
  imports: [
    TableModule,
    RatingModule,
    TagModule,
    ButtonModule,
    FormsModule,
    CommonModule,
    MultiSelectModule,
    DropdownModule,
    SliderModule,
    ProgressBarModule,
    InputTextModule,
    ToastModule,
    ToggleButtonModule,
    SkeletonModule,
  ],
  templateUrl: "./table-part-two.component.html",
  styleUrl: "./table-part-two.component.scss",
})
export class TablePartTwoComponent implements OnInit {
  customers!: Customer[];
  cars: any[] = [];

  virtualCars!: any[];

  cols!: any[];
  cols2!: any[];

  selectedColumns!: Column[];
  products!: Product[];

  constructor(
    private customerService: CustomerService,
    private carService: CarService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.customerService.getCustomersMedium().then((data) => {
      this.customers = data;
    });
    this.cols = [
      { field: "id", header: "Id" },
      { field: "vin", header: "Vin" },
      { field: "year", header: "Year" },
      { field: "brand", header: "Brand" },
      { field: "color", header: "Color" },
    ];

    this.cars = Array.from({ length: 20000 }).map((_, i) =>
      this.carService.generateCar(i + 1)
    );
    this.virtualCars = Array.from({ length: 10000 });
    this.products = this.productService.getProductsMini();
    this.cols2 = [
      { field: "name", header: "Name" },
      { field: "category", header: "Category" },
      { field: "quantity", header: "Quantity" },
    ];
    this.selectedColumns = this.cols2;
  }

  calculateCustomerTotal(name: string) {
    let total = 0;

    if (this.customers) {
      for (let customer of this.customers) {
        if (customer.representative?.name === name) {
          total++;
        }
      }
    }

    return total;
  }

  getSeverity(status: string) {
    switch (status) {
      case "unqualified":
        return "danger";

      case "qualified":
        return "success";

      case "new":
        return "info";

      case "negotiation":
        return "warning";

      case "renewal":
        return "";
      default:
        return undefined;
    }
  }
  loadCarsLazy(event: any) {
    //simulate remote connection with a timeout
    setTimeout(() => {
      //load data of required page
      let loadedCars = this.cars.slice(event.first, event.first + event.rows);

      //populate page of virtual cars

      Array.prototype.splice.apply(this.virtualCars, [
        event.first,
        event.rows,
        ...loadedCars,
      ]);

      //trigger change detection
      event.forceUpdate();
    }, Math.random() * 1000 + 250);
  }
}
