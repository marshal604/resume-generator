import { Component, Input } from '@angular/core';

import { ResumePreviewData } from '../resume-preview.component.model';

@Component({
  selector: 'yur-resume-preview-layout1',
  templateUrl: './resume-preview-layout1.component.html',
  styleUrls: ['./resume-preview-layout1.component.scss']
})
export class ResumePreviewLayout1Component {
  @Input() data: ResumePreviewData;
  constructor() {}
}
