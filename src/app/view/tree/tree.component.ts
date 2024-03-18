import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeModule } from "primeng/tree";
import { NodeService } from '../../services/node.service';
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-tree",
  standalone: true,
  imports: [TreeModule, ButtonModule],
  templateUrl: "./tree.component.html",
  styleUrl: "./tree.component.scss",
})
export class TreeComponent implements OnInit {
  files!: TreeNode[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.files = this.nodeService.getFiles();
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
}
