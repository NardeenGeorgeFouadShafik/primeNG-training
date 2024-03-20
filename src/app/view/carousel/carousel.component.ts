import { Component, OnInit } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CarouselModule } from "primeng/carousel";
import { TagModule } from "primeng/tag";
import { Product } from "../../models/product.model";
import { ProductService } from "../../services/product.service";
import { GalleriaModule } from "primeng/galleria";

@Component({
  selector: "app-carousel",
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, GalleriaModule],
  templateUrl: "./carousel.component.html",
  styleUrl: "./carousel.component.scss",
})
export class CarouselComponent implements OnInit {
  products: Product[] = [];

  responsiveOptions: any[] | undefined;
  images: any[] = [];

  imagesResponsiveOptions: any[] = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProductsSmall();

    this.responsiveOptions = [
      {
        breakpoint: "1199px",
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: "991px",
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "767px",
        numVisible: 1,
        numScroll: 1,
      },
    ];
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
