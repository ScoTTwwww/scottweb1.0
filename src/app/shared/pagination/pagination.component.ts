import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { PaginationService, PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit {
  @Input() id: string;
  @Input() itemsPerPages: Array<number> = [25, 50, 100];  
  @Input() maxSize: number = 7;
  @Input() directionLinks: boolean = true;
  @Input() autoHide: boolean = true;
  @Output() pageChange = new EventEmitter();
  @Output() itemsPerPageChange = new EventEmitter();  

  constructor(
    private paginationService: PaginationService,
  ) { }

  ngOnInit() {
  }

  get config(): PaginationInstance {
    return this.paginationService.getInstance(this.id);
  }

}
