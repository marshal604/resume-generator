import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ResumeEditFormData } from './resume-edit.component.model';

@Component({
  selector: 'yur-resume-edit',
  templateUrl: './resume-edit.component.html',
  styleUrls: ['./resume-edit.component.scss']
})
export class ResumeEditComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscription: Subscription;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.subscription = new Subscription();
    this.initForm();
    this.subscription.add(
      this.form.valueChanges.subscribe((val: ResumeEditFormData) => {
        console.log(val);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initForm() {
    this.form = this.fb.group({
      aboutMe: this.fb.control(''),
      profile: this.fb.control(''),
      education: this.fb.control('')
    });
  }
}
