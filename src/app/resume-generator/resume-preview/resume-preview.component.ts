import { Component, OnInit, Input } from '@angular/core';

import { ResumePreviewData } from './resume-preview.component.model';

@Component({
  selector: 'yur-resume-preview',
  templateUrl: './resume-preview.component.html',
  styleUrls: ['./resume-preview.component.scss']
})
export class ResumePreviewComponent implements OnInit {
  @Input() data: ResumePreviewData;
  constructor() {}

  ngOnInit() {}
}
