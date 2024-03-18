import { ChangeDetectorRef, Component, OnInit, OnDestroy } from "@angular/core";
import { PickListModule } from "primeng/picklist";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-pick-list",
  standalone: true,
  imports: [PickListModule, ButtonModule],
  templateUrl: "./pick-list.component.html",
  styleUrl: "./pick-list.component.scss",
})
export class PickListComponent implements OnInit, OnDestroy {
  sourceProducts: Product[] = [];

  targetProducts: Product[] = [];
  loading: boolean = false;
  timeoutID: any;
  constructor(
    private carService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.sourceProducts = this.carService.getProductsSmall();
    this.targetProducts = [];
  }

  save() {
    this.loading = true;
    this.timeoutID = setTimeout(() => {
      console.log(this.targetProducts);
      this.loading = false;
    }, 3000);
  }
  ngOnDestroy(): void {
    clearTimeout(this.timeoutID);
  }
}
