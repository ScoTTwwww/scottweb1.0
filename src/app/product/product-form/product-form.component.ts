import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Input() dataLists: any;
  @Input() dataList: any;
  @Input() buttonType: any;
  @Output() create = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() cancel = new EventEmitter();

  data = [{ 'item': '書籍' },
  { 'item': '文具' },
  { 'item': '家電' },
  { 'item': '玩具' }]

  form: FormGroup;

  constructor(private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      item: new FormControl(null, Validators.required),
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    if (!this.dataList._id || this.buttonType == "add") {
      this.dataList = {
        item: null,
        name: null,
        price: null,
        text: null
      }
    } else {
      this.form.controls['item'].setValue(this.dataList.item);
      this.form.controls['name'].setValue(this.dataList.name);
      this.form.controls['price'].setValue(this.dataList.price);
      this.form.controls['text'].setValue(this.dataList.text);

    }
  }

  save(dataList) {
    this.create.emit(dataList);
  }

  editAndSave() {
    var json = {
      id: this.dataList._id,
      dataList: this.form.value
    }
    this.edit.emit(json)
  }
  
}
