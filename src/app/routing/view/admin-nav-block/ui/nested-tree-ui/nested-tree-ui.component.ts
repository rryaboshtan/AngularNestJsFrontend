import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeNode } from '../../models/nested-tree-node';

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'app-nested-tree-ui',
  templateUrl: './nested-tree-ui.component.html',
  styleUrls: ['./nested-tree-ui.component.scss'],
})
export class NestedTreeUiComponent implements OnInit {
  @Input() nodes: any = [];

  treeControl = new NestedTreeControl<NestedTreeNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<NestedTreeNode>();

  @Input() set data(nodes: any) {
    this.dataSource.data = nodes;
    
  }

  constructor() {}

  ngOnInit(): void {
    this.dataSource.data = this.nodes;
  }
  hasChild = (_: number, node: NestedTreeNode) =>
    !!node.children && node.children.length > 0;
}
