import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { OnInit, Provider, forwardRef, Type } from '@angular/core';

export abstract class CvaBase<T> implements ControlValueAccessor, OnInit {
  form: FormGroup;
  onChange: (data: T) => void;
  onTouched: any;
  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  writeValue(obj: T) {
    if (!obj) {
      return;
    }
    this.form.setValue(obj, { emitEvent: false });
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  abstract initForm();
}

export function createValueAccessor(comp: Type<any>): Provider {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => comp),
    multi: true
  };
}
