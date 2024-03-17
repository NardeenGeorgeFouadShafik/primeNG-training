import { Component } from '@angular/core';
import { NodeService } from '../../services/node.service';
import { TreeSelectModule } from 'primeng/treeselect';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tree-select',
  standalone: true,
  imports: [TreeSelectModule, FormsModule],
  templateUrl: './tree-select.component.html',
  styleUrl: './tree-select.component.scss',
})
export class TreeSelectComponent {
  nodes!: any[];

  selectedNodes: any;

  constructor(private nodeService: NodeService) {
    this.nodes = this.nodeService.getFiles();
  }
}
