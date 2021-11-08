import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNavBlockComponent } from './blocks/admin-nav-block/admin-nav-block.component';
import { NestedTreeUiComponent } from './ui/nested-tree-ui/nested-tree-ui.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AdminNavBlockComponent,
    NestedTreeUiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatTreeModule,
    MatIconModule,
  ],
  exports: [
    AdminNavBlockComponent,
    NestedTreeUiComponent,
  ]
})
export class AdminNavBlockModule { }
