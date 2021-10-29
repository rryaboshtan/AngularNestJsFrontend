import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderBlockComponent } from './blocks/admin-header-block/admin-header-block.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AdminHeaderBlockComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  exports: [AdminHeaderBlockComponent],
})
export class AdminHeaderBlockModule {}
