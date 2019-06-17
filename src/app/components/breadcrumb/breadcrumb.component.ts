import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  // 接受伏组件传递过来的数据
  @ Input() crumbstitle: any;
  @ Input() text: any;
  constructor() { }

  ngOnInit() {
  }

}
