import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product.model";
import { ProductService } from "../../services/product.service";
import { Table, TableModule } from "primeng/table";
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
import { Customer, Representative } from "../../models/customer.model";
import { InputTextModule } from "primeng/inputtext";
import { LazyLoadEvent, MessageService, SelectItem } from "primeng/api";
import { ToastModule } from "primeng/toast";
import { ToggleButtonModule } from "primeng/togglebutton";

@Component({
  selector: "app-table",
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
  ],
  templateUrl: "./table.component.html",
  styleUrl: "./table.component.scss",
})
export class TableComponent implements OnInit {
  products!: Product[];
  customers!: Customer[];
  selectedProduct!: Product;
  balanceFrozen: boolean = false;

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  productWithOrders = this.productService.getProductsWithOrdersSmall();

  clonedProducts: { [s: string]: Product } = {};
  totalRecords!: number;

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    private messageService: MessageService
  ) {
    this.statuses = [
      { label: "In Stock", value: "INSTOCK" },
      { label: "Low Stock", value: "LOWSTOCK" },
      { label: "Out of Stock", value: "OUTOFSTOCK" },
    ];
  }

  ngOnInit() {
    this.products = this.productService.getProductsSmall();
    this.customerService.getCustomersLarge().then((customers) => {
      this.customers = customers;
      this.loading = false;

      this.customers.forEach(
        (customer) => (customer.date = new Date(<Date>customer.date))
      );
    });

    this.representatives = [
      { name: "Amy Elsner", image: "amyelsner.png" },
      { name: "Anna Fali", image: "annafali.png" },
      { name: "Asiya Javayant", image: "asiyajavayant.png" },
      { name: "Bernardo Dominic", image: "bernardodominic.png" },
      { name: "Elwin Sharvill", image: "elwinsharvill.png" },
      { name: "Ioni Bowcher", image: "ionibowcher.png" },
      { name: "Ivan Magalhaes", image: "ivanmagalhaes.png" },
      { name: "Onyama Limba", image: "onyamalimba.png" },
      { name: "Stephen Shaw", image: "stephenshaw.png" },
      { name: "Xuxue Feng", image: "xuxuefeng.png" },
    ];

    this.statuses = [
      { label: "Unqualified", value: "unqualified" },
      { label: "Qualified", value: "qualified" },
      { label: "New", value: "new" },
      { label: "Negotiation", value: "negotiation" },
      { label: "Renewal", value: "renewal" },
      { label: "Proposal", value: "proposal" },
    ];
  }
  clear(table: Table) {
    table.clear();
  }

  getCustomerSeverity(status: any) {
    switch (status.toLowerCase()) {
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

  getSeverity(status: string) {
    switch (status) {
      case "INSTOCK":
        return "success";
      case "LOWSTOCK":
        return "warning";
      case "OUTOFSTOCK":
        return "danger";
      default:
        return undefined;
    }
  }

  onRowSelect(event: any) {
    this.messageService.add({
      severity: "warn",
      summary: "Product Selected",
      detail: event.data.name,
    });
  }

  onRowUnselect(event: any) {
    this.messageService.add({
      severity: "info",
      summary: "Product Unselected",
      detail: event.data.name,
    });
  }

  getStatusSeverity(status: string) {
    switch (status) {
      case "PENDING":
        return "warning";
      case "DELIVERED":
        return "success";
      case "CANCELLED":
        return "danger";
      default:
        return undefined;
    }
  }
  onRowEditInit(product: Product) {
    this.clonedProducts[product.id as string] = { ...product };
  }

  onRowEditSave(product: Product) {
    if (product.price && product.price > 0) {
      delete this.clonedProducts[product.id as string];
      this.messageService.add({
        severity: "success",
        summary: "Success",
        detail: "Product is updated",
      });
    } else {
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "Invalid Price",
      });
    }
  }

  onRowEditCancel(product: Product, index: number) {
    this.products[index] = this.clonedProducts[product.id as string];
    delete this.clonedProducts[product.id as string];
  }
  loadCustomers(event: any) {
    this.loading = true;

    setTimeout(() => {
      this.customerService
        .getCustomers({ lazyEvent: JSON.stringify(event) })
        .then((res) => {
          this.customers = res.customers;
          this.totalRecords = res.totalRecords;
          this.loading = false;
        });
    }, 1000);
  }

  formatCurrency(value: number) {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
}
