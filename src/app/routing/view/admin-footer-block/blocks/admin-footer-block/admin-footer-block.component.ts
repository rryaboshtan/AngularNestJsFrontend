import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-footer-block',
  templateUrl: './admin-footer-block.component.html',
  styleUrls: ['./admin-footer-block.component.scss'],
})
export class AdminFooterBlockComponent implements OnInit {
  date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
