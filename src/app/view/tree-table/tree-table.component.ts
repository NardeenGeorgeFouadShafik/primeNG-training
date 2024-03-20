import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeTableModule } from "primeng/treetable";
import { Column } from '../../models/car.model';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: "app-tree-table",
  standalone: true,
  imports: [TreeTableModule, CommonModule, ButtonModule],
  templateUrl: "./tree-table.component.html",
  styleUrl: "./tree-table.component.scss",
})
export class TreeTableComponent implements OnInit {
  files!: TreeNode[];

  cols: Column[] = [];

  ngOnInit() {
    this.files = [];
    for (let i = 0; i < 50; i++) {
      let node = {
        data: {
          name: "Item " + i,
          size: Math.floor(Math.random() * 1000) + 1 + "kb",
          type: "Type " + i,
        },
        children: [
          {
            data: {
              name: "Item " + i + " - 0",
              size: Math.floor(Math.random() * 1000) + 1 + "kb",
              type: "Type " + i,
            },
          },
        ],
      };

      this.files.push(node);
    }

    this.cols = [
      { field: "name", header: "Name" },
      { field: "size", header: "Size" },
      { field: "type", header: "Type" },
    ];
  }
}

