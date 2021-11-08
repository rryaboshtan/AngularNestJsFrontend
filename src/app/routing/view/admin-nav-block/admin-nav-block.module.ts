import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavBlockComponent } from './blocks/admin-nav-block/admin-nav-block.component';
import { NestedTreeUiComponent } from './ui/nested-tree-ui/nested-tree-ui.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AdminNavBlockComponent,
    NestedTreeUiComponent
  ],
  imports: [
    CommonModule,
    MatTreeModule,
    MatIconModule,
  ],
  exports: [
    AdminNavBlockComponent,
    NestedTreeUiComponent,
  ]
})
export class AdminNavBlockModule { }
