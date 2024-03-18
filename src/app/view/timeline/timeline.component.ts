import { Component } from '@angular/core';
import { TimelineModule } from "primeng/timeline";
import { EventItem } from '../../models/event-item.model';
import { CommonModule } from '@angular/common';
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-timeline",
  standalone: true,
  imports: [TimelineModule, CommonModule, CardModule, ButtonModule],
  templateUrl: "./timeline.component.html",
  styleUrl: "./timeline.component.scss",
})
export class TimelineComponent {
  events: EventItem[];

  constructor() {
    this.events = [
      {
        status: "Ordered",
        date: "15/10/2020 10:30",
        icon: "pi pi-shopping-cart",
        color: "#9C27B0",
        image: "game-controller.jpg",
      },
      {
        status: "Processing",
        date: "15/10/2020 14:00",
        icon: "pi pi-cog",
        color: "#673AB7",
      },
      {
        status: "Shipped",
        date: "15/10/2020 16:15",
        icon: "pi pi-shopping-cart",
        color: "#FF9800",
      },
      {
        status: "Delivered",
        date: "16/10/2020 10:00",
        icon: "pi pi-check",
        color: "#607D8B",
      },
    ];
  }
}
