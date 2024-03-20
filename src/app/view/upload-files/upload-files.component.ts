import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUploadModule, UploadEvent } from "primeng/fileupload";
import { ToastModule } from "primeng/toast";

@Component({
  selector: "app-upload-files",
  standalone: true,
  imports: [FileUploadModule, ToastModule],
  templateUrl: "./upload-files.component.html",
  styleUrl: "./upload-files.component.scss",
})
export class UploadFilesComponent {
  constructor(private messageService: MessageService) {}
  onUpload(event: UploadEvent) {
    this.messageService.add({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded with Basic Mode",
    });

    console.log(event)
  }
}
