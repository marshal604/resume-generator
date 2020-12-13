import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';

import { CvaBase, createValueAccessor } from '@shared/base/cva.base';
import {
  ResumeEditPortfolioFormData,
  ResumeEditPortfolioFormProperties,
  ResumeEditPortfolioFormArrayProperties
} from './resume-edit-portfolio.component.model';

@Component({
  selector: 'yur-resume-edit-portfolio',
  templateUrl: './resume-edit-portfolio.component.html',
  styleUrls: ['./resume-edit-portfolio.component.scss'],
  providers: [createValueAccessor(ResumeEditPortfolioComponent)]
})
export class ResumeEditPortfolioComponent extends CvaBase<ResumeEditPortfolioFormData> {
  formProp = ResumeEditPortfolioFormProperties;
  formArrayProp = ResumeEditPortfolioFormArrayProperties;
  constructor(private fb: FormBuilder) {
    super();
  }

  get portfolioFormArrayItem(): FormGroup {
    return this.fb.group({
      [ResumeEditPortfolioFormArrayProperties.PhotoCount]: 1,
      [ResumeEditPortfolioFormArrayProperties.Photos]: [[null]],
      [ResumeEditPortfolioFormArrayProperties.Title]: '',
      [ResumeEditPortfolioFormArrayProperties.SkillTags]: '',
      [ResumeEditPortfolioFormArrayProperties.Description]: ''
    });
  }

  onPhotoCountChange(form: FormGroup, event: MatRadioChange) {
    let sources = form.get(ResumeEditPortfolioFormArrayProperties.Photos).value;
    for (let i = 0; i < event.value; i++) {
      if (sources.length < i + 1) {
        sources.push(null);
      }
    }
    sources = sources.slice(0, event.value);
    form.patchValue({
      [ResumeEditPortfolioFormArrayProperties.Photos]: sources
    });
  }

  onSrcChange(form: FormGroup, src: string, index: number) {
    // avoid first and second photo have the same src in first change.
    const sources = form.get(ResumeEditPortfolioFormArrayProperties.Photos).value.map((val, pos) => (index === pos ? src : val || ''));
    form.patchValue({
      [ResumeEditPortfolioFormArrayProperties.Photos]: sources
    });
  }

  getAspectRatio(photoCount: number): number {
    if (photoCount === 1) {
      return 4 / 3;
    } else {
      return 3 / 4;
    }
  }

  writeValue(val: ResumeEditPortfolioFormData) {
    if (!val) {
      return;
    }
    const formArrayLength = (this.form.get(ResumeEditPortfolioFormProperties.Portfolio) as FormArray).length;
    const parentFormArrayLength = val.portfolio.length;
    if (formArrayLength !== parentFormArrayLength) {
      this.form.setControl(
        ResumeEditPortfolioFormProperties.Portfolio,
        this.fb.array(val.portfolio.map(() => this.portfolioFormArrayItem))
      );
      this.form.setValue(val, { emitEvent: true });
      return;
    }

    this.form.setValue(val, { emitEvent: false });
  }

  initForm() {
    this.form = this.fb.group({
      [ResumeEditPortfolioFormProperties.Portfolio]: this.fb.array([this.portfolioFormArrayItem, this.portfolioFormArrayItem])
    });
  }

  onAddPortfolio() {
    (this.form.get(ResumeEditPortfolioFormProperties.Portfolio) as FormArray).push(this.portfolioFormArrayItem);
  }

  onRemovePortfolio(index: number) {
    (this.form.get(ResumeEditPortfolioFormProperties.Portfolio) as FormArray).removeAt(index);
  }
}
