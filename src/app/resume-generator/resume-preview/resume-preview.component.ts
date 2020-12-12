import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnChanges,
  SimpleChanges,
  AfterViewInit
} from '@angular/core';

import { MatSelectChange } from '@angular/material/select';
import { FormControl } from '@angular/forms';

import { OptionItem } from '@shared/model/option.model';
import { ResumePreviewData, ResumePreviewTemplate } from './resume-preview.component.model';

@Component({
  selector: 'yur-resume-preview',
  templateUrl: './resume-preview.component.html',
  styleUrls: ['./resume-preview.component.scss']
})
export class ResumePreviewComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() data: ResumePreviewData;

  @ViewChild('templateContainer', {
    read: ViewContainerRef
  })
  templateContainerRef: ViewContainerRef;
  templateOption: OptionItem<ResumePreviewTemplate>[];
  templateCtrl: FormControl;

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.data.isFirstChange() && changes.data.currentValue) {
      this.loadComponent(this.templateCtrl.value);
    }
  }

  ngOnInit() {
    this.templateCtrl = new FormControl(ResumePreviewTemplate.Layout1);
    this.initTemplateOption();
  }

  ngAfterViewInit() {
    this.loadComponent(this.templateCtrl.value);
  }

  onSelectionChange(event: MatSelectChange) {
    this.loadComponent(event.value);
  }

  onPrintPdf() {
    window.print();
  }

  loadComponent(template: ResumePreviewTemplate) {
    if (!this.templateContainerRef || !this.data) {
      return;
    }

    this.templateContainerRef.clear();

    switch (template) {
      case ResumePreviewTemplate.Layout1:
        this.loadLayout1Component();
        break;
      case ResumePreviewTemplate.Layout2:
        this.loadLayout2Component();
        break;
    }
  }

  async loadLayout1Component() {
    const { ResumePreviewLayout1Component } = await import('./resume-preview-layout1/resume-preview-layout1.component');
    const templateFactory = this.cfr.resolveComponentFactory(ResumePreviewLayout1Component);

    const { instance } = this.templateContainerRef.createComponent(templateFactory, null);
    instance.data = this.data;
  }

  async loadLayout2Component() {
    const { ResumePreviewLayout2Component } = await import('./resume-preview-layout2/resume-preview-layout2.component');
    const templateFactory = this.cfr.resolveComponentFactory(ResumePreviewLayout2Component);

    const { instance } = this.templateContainerRef.createComponent(templateFactory, null);
    instance.data = this.data;
  }

  private initTemplateOption() {
    this.templateOption = [
      {
        id: ResumePreviewTemplate.Layout1,
        name: 'Layout 1'
      },
      {
        id: ResumePreviewTemplate.Layout2,
        name: 'Layout 2'
      }
    ];
  }
}
