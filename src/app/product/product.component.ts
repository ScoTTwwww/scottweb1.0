import { Component, OnInit, ViewContainerRef, ViewChild, TemplateRef } from '@angular/core';
import { ProductService } from './shared/product.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "../auth/shared/auth.service";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastService, ModalService } from '../shared/';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  dataLists$: Observable<any>;
  dataList$: Observable<any>;
  @ViewChild('templateRef') templateRef: TemplateRef<any>;
  dialogRef: any;
  filter: any;
  buttonType: any = "list";
  data = [{ 'item': '書籍' },
  { 'item': '文具' },
  { 'item': '家電' },
  { 'item': '玩具' }];

  config = {
    id: 'account-book',
    itemsPerPage: 10,
    currentPage: 1,
    rankType: true
  };

  constructor(
    private toastr_original: ToastsManager,
    private productService: ProductService,
    private toastService: ToastService,
    public modalService: ModalService,
    private vRef: ViewContainerRef,
  ) {
    this.toastr_original.setRootViewContainerRef(vRef);
    this.dataLists$ = this.productService.dataLists$;
    this.dataList$ = this.productService.dataList$;
    this.productService.getPosts().subscribe(data => {
      this.productService.load(data);
    })
  }

  ngOnInit() {
    this.filter = '';
  }

  create(dataList) {
    this.modalService.confirm('是否確定新增？', "訊息").then((result) => {
      if (result) {
        this.productService.createAPI(dataList).subscribe(data => {
          this.buttonType = "list";
          this.productService.create(data);
          // this.dialogRef.dismiss();
          this.toastService.success("新增成功!");
        })
      }
    });
  }

  edit(json) {
    this.modalService.confirm('是否確定編輯？', "訊息").then((result) => {
      if (result) {
        this.productService.editAPI(json.id, json.dataList).subscribe(data => {
          this.productService.edit(json);
          this.buttonType = "list";
          this.toastService.success("編輯成功!");
        })
      }
    });

  }

  delete(id) {
    this.modalService.confirm('是否確定刪除？', "訊息").then((result) => {
      if (result) {
        this.productService.deleteAPI(id).subscribe(data => {
          var json = JSON.parse(data._body);
          this.productService.delete(json._id);
          this.toastService.success("刪除成功!");
        })
      }
    });
  }

  getById(id) {
    this.productService.getByIdAPI(id).subscribe(data => {
      var json = JSON.parse(data._body);
      this.productService.getById(json._id);
      this.buttonType = "edit";
    })

  }
  fn() {
    //this.modalService.alert("施工中", "訊息")
    this.modalService.open(this.templateRef, { isBlocking: false, dialogClass: 'modal-dialog' }).then(dialog => {
      this.dialogRef = dialog;
    });
  }

  cancel() {
    this.buttonType = 'list';
  }

  xxx() {
    this.config.itemsPerPage = 3
  }

  itemsPerPage(config) {
    if (this.config.itemsPerPage != config.item) {
      this.config.itemsPerPage = config.item;
      this.toastService.info("每頁設定為" + config.item + "筆顯示!", "系統更變");
    }

    if (this.config.rankType != config.rank) {
      this.config.rankType = config.rank;
      if(config.rank){
          this.toastService.info("總和表單設定為開啟!", "系統更變");
      }else {
        this.toastService.info("總和表單設定為隱藏!", "系統更變");
      }
       
    }

    this.dialogRef.dismiss();
  }
  cancelModal() {
    this.dialogRef.dismiss();
  }
}
