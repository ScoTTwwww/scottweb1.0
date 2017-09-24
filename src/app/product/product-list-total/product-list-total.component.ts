import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-list-total',
  templateUrl: './product-list-total.component.html',
  styleUrls: ['./product-list-total.component.css']
})
export class ProductListTotalComponent implements OnInit {
  @Input() dataLists: any;
  @Input() config: any;
  @Input() filter: any;
  constructor() { }

  ngOnInit() {
  }

  total(one, total) {
    return one / total
  }
}
