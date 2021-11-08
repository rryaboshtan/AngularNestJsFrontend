import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { initMenu } from 'src/app/store/admin-menu-store/store/admin-menu.actions';
import { NestedTreeNode } from 'src/app/store/admin-menu-store/store/admin-menu.reducer';
import { getMenuData } from 'src/app/store/admin-menu-store/store/admin-menu.selectors';

@Component({
  selector: 'app-admin-nav-block',
  templateUrl: './admin-nav-block.component.html',
  styleUrls: ['./admin-nav-block.component.scss'],
})
export class AdminNavBlockComponent implements OnInit {
  data$: Observable<NestedTreeNode[] | null> = this.store$.pipe(
    select(getMenuData)
  );

  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.store$.dispatch(initMenu());
  }
}
