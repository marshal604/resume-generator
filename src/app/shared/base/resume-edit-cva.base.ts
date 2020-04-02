import { OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CvaBase } from './cva.base';
export enum DataType {
  Category = 1,
  Text,
  File
}

export interface DataChildItem {
  id: string;
  type: DataType.File | DataType.Text;
  label: string;
  value: string;
  hint?: string;
  placeholder?: string;
}

export interface DataItem {
  type: DataType.Category;
  label: string;
  children?: DataChildItem[];
}
export abstract class ResumeEditCVABase<FormDataModel> extends CvaBase<FormDataModel> implements OnInit, OnDestroy {
  dataType = DataType;
  formMappingList: Array<DataItem>;
  subscription: Subscription;
  constructor() {
    super();
  }

  abstract initMappingList();

  ngOnInit() {
    super.ngOnInit();
    this.subscription = new Subscription();
    this.initMappingList();
    this.subscription.add(
      this.form.valueChanges.subscribe(() => {
        this.onChange(this.form.getRawValue());
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
