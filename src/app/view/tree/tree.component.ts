import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';
import { TreeModule } from "primeng/tree";
import { NodeService } from '../../services/node.service';
import { ButtonModule } from "primeng/button";
import { CommonModule } from '@angular/common';
import { InputSwitchModule } from "primeng/inputswitch";
import { FormsModule } from '@angular/forms';
import { ToastModule } from "primeng/toast";

@Component({
  selector: "app-tree",
  standalone: true,
  imports: [
    TreeModule,
    ButtonModule,
    CommonModule,
    InputSwitchModule,
    FormsModule,
    ToastModule,
  ],
  templateUrl: "./tree.component.html",
  styleUrl: "./tree.component.scss",
})
export class TreeComponent implements OnInit {
  files!: TreeNode[];
  selectedFile!: TreeNode;
  metaKeySelection: boolean = false;
  selectedFiles!: TreeNode[];
  loading: boolean = false;

  nodes!: TreeNode[];
  constructor(
    private nodeService: NodeService,
    private messageService: MessageService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.files = this.nodeService.getFiles();
    this.loading = true;
    setTimeout(() => {
      this.nodes = this.initiateNodes();
      this.loading = false;
      this.cd.markForCheck();
    }, 2000);
  }

  expandAll() {
    this.files.forEach((node) => {
      this.expandRecursive(node, true);
    });
  }

  collapseAll() {
    this.files.forEach((node) => {
      this.expandRecursive(node, false);
    });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach((childNode) => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }

  nodeExpand(event: any) {
    this.messageService.add({
      severity: "success",
      summary: "Node Expanded",
      detail: event.node.label,
    });
  }

  nodeCollapse(event: any) {
    this.messageService.add({
      severity: "warn",
      summary: "Node Collapsed",
      detail: event.node.label,
    });
  }

  nodeSelect(event: any) {
    this.messageService.add({
      severity: "info",
      summary: "Node Selected",
      detail: event.node.label,
    });
  }

  nodeUnselect(event: any) {
    this.messageService.add({
      severity: "info",
      summary: "Node Unselected",
      detail: event.node.label,
    });
  }
  initiateNodes(): TreeNode[] {
    return [
      {
        key: "0",
        label: "Node 0",
        leaf: false,
      },
      {
        key: "1",
        label: "Node 1",
        leaf: false,
      },
      {
        key: "2",
        label: "Node 2",
        leaf: false,
      },
    ];
  }

  lazyNodeExpand(event: any) {
    if (!event.node.children) {
      this.loading = true;
      setTimeout(() => {
        event.node.children = [];
        for (let i = 0; i < 3; i++) {
          event.node.children.push({
            key: event.node.key + "-" + i,
            label: "Node " + event.node.key + "-" + i,
            leaf: false,
          });
        }
        this.loading = false;
        this.cd.markForCheck();
      }, 500);
    }
  }
}
