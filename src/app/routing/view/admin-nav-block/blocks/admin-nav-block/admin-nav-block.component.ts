import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { initMenu } from 'src/app/store/admin-menu-store/store/admin-menu.actions';
import { NestedTreeNode } from 'src/app/store/admin-menu-store/store/admin-menu.reducer';

const TREE_DATA: NestedTreeNode[] = [
  {
    name: 'Contents',
    children: [
      {
        name: 'Pages',
        href: '/admin/grid/content/pages',
      },
      {
        name: 'Posts',
        href: '/admin/grid/content/posts',
      },
      {
        name: 'Comments',
        href: '/admin/grid/content/comments',
      },
    ],
  },
  {
    name: 'Accounts',
    icon: 'perm_identity',
    children: [
      {
        name: 'Admins',
        icon: 'manage_accounts',
        href: '/admin/grid/account/admins',
      },
      {
        name: 'Users',
        icon: 'face',
        href: '/admin/grid/account/users',
      },
    ],
  },
  {
    name: 'Settings',
    icon: 'settings',
    children: [
      {
        name: 'General',
        href: '/admin/form/settings/general',
      },
      {
        name: 'Catalog',
        href: '/admin/form/settings/catalog',
      },
    ],
  },
];

@Component({
  selector: 'app-admin-nav-block',
  templateUrl: './admin-nav-block.component.html',
  styleUrls: ['./admin-nav-block.component.scss'],
})
export class AdminNavBlockComponent implements OnInit {
  data: Observable<NestedTreeNode[]> = of<NestedTreeNode[]>(TREE_DATA).pipe(
    delay(500)
  );

  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.store$.dispatch(initMenu())
  }
}
