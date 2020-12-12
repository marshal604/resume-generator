import { Component, Input, OnInit } from '@angular/core';

import { ResumePreviewData } from '../resume-preview.component.model';

@Component({
  selector: 'yur-resume-preview-layout2',
  templateUrl: './resume-preview-layout2.component.html',
  styleUrls: ['./resume-preview-layout2.component.scss', './resume-preview-layout2.component.print.scss']
})
export class ResumePreviewLayout2Component implements OnInit {
  @Input() data: ResumePreviewData;

  constructor() {}

  ngOnInit(): void {}
}
