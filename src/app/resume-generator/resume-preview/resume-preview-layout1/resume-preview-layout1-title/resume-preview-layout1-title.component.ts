import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'yur-resume-preview-layout1-title',
  templateUrl: './resume-preview-layout1-title.component.html',
  styleUrls: ['./resume-preview-layout1-title.component.scss']
})
export class ResumePreviewLayout1TitleComponent implements OnInit {
  @Input() icon: {
    fontSet: string;
    fontIcon: string;
    isMaterial: boolean;
  };
  @Input() title: string;
  constructor() {}

  ngOnInit(): void {}
}
