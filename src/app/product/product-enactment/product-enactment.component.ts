import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-enactment',
  templateUrl: './product-enactment.component.html',
  styleUrls: ['./product-enactment.component.css']
})
export class ProductEnactmentComponent implements OnInit {
  @Input() config: any;
  @Output() itemsPerPage = new EventEmitter();
  @Output() cancel = new EventEmitter();
  form: FormGroup;
  data = [5, 10, 15, 20]
  rankType = [ {type: true,name: "開啟"}, {type: false ,name: "隱藏"}];
  constructor(private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      item: new FormControl(null, Validators.required),
      rank: new FormControl(true, Validators.required),
    });
  }

  ngOnInit() {
     this.form.controls['item'].setValue(this.config.itemsPerPage);
     this.form.controls['rank'].setValue(this.config.rankType);
  }

  save() {
    this.itemsPerPage.emit(this.form.value);
  }
}
