import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { PaginationService } from 'ngx-pagination';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  @Input() dataLists: any;
  @Input() config: any;
  @Input() filter: any;
  @Output() delete = new EventEmitter();
  @Output() getById = new EventEmitter();

  constructor(
    private productService: ProductService,
    private paginationService: PaginationService,
  ) { }

  ngOnInit() {

  }
  ngOnChanges(changes: any) {
    if (this.filter) {
      this.config.itemsPerPage = this.paginationService.getInstance(this.config.id).itemsPerPage || 25;
      this.config.currentPage = this.paginationService.getInstance(this.config.id).currentPage || 1;
    }
  }
}
