import { Component, OnInit } from '@angular/core';
import { ChartModule } from "primeng/chart";

@Component({
  selector: "app-chart",
  standalone: true,
  imports: [ChartModule],
  templateUrl: "./chart.component.html",
  styleUrl: "./chart.component.scss",
})
export class ChartComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    this.data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          type: "line",
          label: "Dataset 1",
          borderColor: documentStyle.getPropertyValue("--indigo-500"),
          borderWidth: 1,
          fill: false,
          tension: 0.7,
          data: [50, 25, 12, 48, 56, 76, 42],
        },
        {
          type: "bar",
          label: "Dataset 2",
          backgroundColor: documentStyle.getPropertyValue("--green-500"),
          data: [21, 84, 24, 75, 37, 65, 34],
          borderColor: "black",
          borderWidth: 2,
        },
        {
          type: "bar",
          label: "Dataset 3",
          backgroundColor: documentStyle.getPropertyValue("--yellow-500"),
          data: [41, 52, 24, 74, 23, 21, 32],
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };
  }
}
