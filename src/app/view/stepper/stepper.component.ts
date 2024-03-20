import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { StepsModule } from "primeng/steps";
import { Subscription } from 'rxjs';
import { TicketService } from '../../services/ticket.service';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: "app-stepper",
  standalone: true,
  imports: [StepsModule, ToastModule],
  templateUrl: "./stepper.component.html",
  styleUrl: "./stepper.component.scss",
})
export class StepperComponent implements  OnInit {
    items: MenuItem[]=[];

    subscription!: Subscription;

    constructor(public messageService: MessageService, public ticketService: TicketService) {}

    ngOnInit() {
        this.items = [
          {
            label: "inputs",
            router: "steps/inputs",
          },
          {
            label: "table",
            routerLink: "tables",
          },
          {
            label: "orderlist",
            routerLink: "order-list",
          },
          {
            label: "chart",
            routerLink: "organization-chart",
          },
        ];

        this.subscription = this.ticketService.paymentComplete$.subscribe((personalInformation) => {
            this.messageService.add({ severity: 'success', summary: 'Order submitted', detail: 'Dear, ' + personalInformation.firstname + ' ' + personalInformation.lastname + ' your order completed.' });
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
