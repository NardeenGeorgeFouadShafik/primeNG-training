import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { OrderListModule } from "primeng/orderlist";

@Component({
  selector: "app-order-list",
  standalone: true,
  imports: [OrderListModule],
  templateUrl: "./order-list.component.html",
  styleUrl: "./order-list.component.scss",
})
export class OrderListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProductsSmall();
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
}
