import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ResumeEditFormData } from './resume-edit.component.model';
@Component({
  selector: 'yur-resume-edit',
  templateUrl: './resume-edit.component.html',
  styleUrls: ['./resume-edit.component.scss']
})
export class ResumeEditComponent implements OnInit, OnDestroy {
  @Output() valueChange = new EventEmitter<ResumeEditFormData>();
  @ViewChild('downloadRef') downloadRef: ElementRef<HTMLElement>;
  form: FormGroup;
  subscription: Subscription;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.subscription = new Subscription();
    this.initForm();
    this.subscribeFilePathFromUrl();
    this.subscription.add(
      this.form.valueChanges.subscribe((val: ResumeEditFormData) => {
        this.valueChange.emit(val);
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
      experience: this.fb.control(''),
      portfolio: this.fb.control('')
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
        this.updateJsonToForm(e.target.result.toString());
      } catch (error) {
        alert('content format incorrect.');
      }
    };

    reader.readAsText(file);
  }

  subscribeFilePathFromUrl() {
    const filePath = this.route.snapshot.queryParams.path;
    if (!filePath) {
      return;
    }
    this.subscription.add(
      this.http.get(`assets/resume-edit/${filePath}`).subscribe(data => {
        try {
          this.updateJsonToForm(JSON.stringify(data));
        } catch (error) {
          alert('content format incorrect');
        }
      })
    );
  }

  updateJsonToForm(text: string) {
    let jsonData: ResumeEditFormData = JSON.parse(text);
    jsonData = {
      aboutMe: {
        jobTitle: jsonData?.aboutMe?.jobTitle || '',
        chineseName: jsonData?.aboutMe?.chineseName || '',
        englishName: jsonData?.aboutMe?.englishName || '',
        photo: jsonData?.aboutMe?.photo || '',
        age: jsonData?.aboutMe?.age || '',
        blog: jsonData?.aboutMe?.blog || '',
        email: jsonData?.aboutMe?.email || '',
        phone: jsonData?.aboutMe?.phone || '',
        github: jsonData?.aboutMe?.github || '',
        codePen: jsonData?.aboutMe?.codePen || ''
      },
      education: {
        education: (jsonData?.education?.education || []).map(item => ({
          school: item?.school,
          department: item?.department,
          period: item?.period
        }))
      },
      profile: {
        profile: jsonData?.profile?.profile || ''
      },
      experience: {
        experience: (jsonData?.experience?.experience || []).map(item => ({
          period: item?.period,
          company: item?.company,
          jobTitle: item?.jobTitle,
          skillTags: item?.skillTags,
          jobDescription: item?.jobDescription
        }))
      },
      portfolio: {
        portfolio: (jsonData?.portfolio?.portfolio || []).map(item => ({
          photoCount: item?.photoCount,
          photos: item?.photos,
          description: item?.description
        }))
      }
    };
    this.form.setValue(jsonData);
  }
}
