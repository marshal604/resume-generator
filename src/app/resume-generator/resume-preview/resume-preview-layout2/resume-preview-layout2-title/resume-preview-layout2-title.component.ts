import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yur-resume-preview-layout2-title',
  templateUrl: './resume-preview-layout2-title.component.html',
  styleUrls: ['./resume-preview-layout2-title.component.scss']
})
export class ResumePreviewLayout2TitleComponent implements OnInit {
  @Input() icon: {
    fontSet: string;
    fontIcon: string;
    isMaterial: boolean;
  };
  @Input() title: string;
  constructor() {}

  ngOnInit(): void {}
}
