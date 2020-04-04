import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Subscription } from 'rxjs';

import { ResumeEditFormData } from './resume-edit.component.model';

@Component({
  selector: 'yur-resume-edit',
  templateUrl: './resume-edit.component.html',
  styleUrls: ['./resume-edit.component.scss']
})
export class ResumeEditComponent implements OnInit, OnDestroy {
  @ViewChild('downloadRef') downloadRef: ElementRef<HTMLElement>;
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
      education: this.fb.control(''),
      experience: this.fb.control('')
    });
  }

  onDownloadFile() {
    if (!this.downloadRef) {
      return;
    }
    const file = new Blob([JSON.stringify(this.form.getRawValue())], { type: 'text/plain' });
    const fileName = 'resume-edit-form';
    const url = window.URL.createObjectURL(file);
    this.downloadRef.nativeElement.setAttribute('href', url);
    this.downloadRef.nativeElement.setAttribute('download', fileName);
    this.downloadRef.nativeElement.click();
  }

  onUploadFile(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      try {
        this.form.setValue(JSON.parse(e.target.result.toString()));
      } catch (error) {
        alert('content format incorrect.');
      }
    };

    reader.readAsText(file);
  }
}
