import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { OnInit, Provider, forwardRef, Type, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export abstract class CvaBase<T> implements ControlValueAccessor, OnInit, OnDestroy {
  form: FormGroup;
  onChange: (data: T) => void;
  onTouched: any;
  subscription: Subscription;
  constructor() {}

  ngOnInit() {
    this.subscription = new Subscription();
    this.initForm();
    this.subscription.add(
      this.form.valueChanges.subscribe(() => {
        this.onChange(this.form.getRawValue());
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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
