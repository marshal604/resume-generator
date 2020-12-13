import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';

import Cropper from 'cropperjs';
import { TranslateService } from '@ngx-translate/core';

import { UploadImageOptions } from './upload-image.component.model';
@Component({
  selector: 'yur-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  @ViewChild('previewImage') previewImage: ElementRef<HTMLImageElement>;
  @ViewChild('previewImageContainer', { static: true }) previewImageContainer: TemplateRef<HTMLElement>;
  @Input() src: string; // display preview image
  @Input() options: UploadImageOptions; // upload image options
  @Output() srcChange = new EventEmitter<string>(); // emit after src change

  inputId = new Date().getTime();
  srcFile: File;
  overlayRef: OverlayRef;
  previewSrc: string;
  aspectRatioList: string[];
  private cropper: Cropper;
  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef, private translateService: TranslateService) {}

  ngOnInit() {
    this.initOverlay();
    this.initAspectRatioList();
  }

  onFileChange(event: HTMLInputElement) {
    const file: File = event.files[0];
    this.srcFile = file;
    // avoid doesn't fire event when choose the same file
    event.value = '';
    if (!file) {
      return;
    }

    if (this.options && this.options.limitSize && file.size > this.options.limitSize) {
      alert(this.translateService.instant('Editing.Message.UploadSizeIsLargeThan', { value: this.transformSize(this.options.limitSize) }));
      return;
    }
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      this.previewSrc = e.target.result.toString();
      this.openDialog(true);
      // next tick
      setTimeout(() => {
        const aspectRatio = this.options ? (this.options.isIconPreview ? 1 : this.options.aspectRatio || 4 / 3) : 4 / 3;
        this.cropper = new Cropper(this.previewImage.nativeElement, {
          zoomable: true,
          scalable: true,
          background: true,
          center: true,
          checkCrossOrigin: true,
          checkOrientation: true,
          highlight: true,
          aspectRatio,
          responsive: true
        });
      });
    };
    reader.readAsDataURL(file);
  }

  onClearImage() {
    this.src = null;
    this.srcChange.emit(this.src);
  }

  onSetAspectRatio(ratio: string) {
    const [wRatio, hRatio] = ratio.split(':');
    this.cropper.setAspectRatio(Number(wRatio) / Number(hRatio));
  }

  onFinishPreview() {
    this.detachDialog();
    const canvas = this.cropper.getCroppedCanvas();
    this.src = canvas.toDataURL(this.srcFile.type);

    this.srcChange.emit(this.src);
  }

  onCancelPreview() {
    this.detachDialog();
  }

  onZoomIn() {
    this.cropper.zoom(0.1);
  }

  onZoomOut() {
    this.cropper.zoom(-0.1);
  }

  private initOverlay() {
    const strategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
    this.overlayRef = this.overlay.create({
      positionStrategy: strategy,
      hasBackdrop: true
    });
  }

  private attachDialog() {
    this.overlayRef.attach(new TemplatePortal(this.previewImageContainer, this.viewContainerRef));
  }

  private detachDialog() {
    if (!this.hasAttached()) {
      return;
    }
    this.overlayRef.detach();
  }

  private hasAttached() {
    return this.overlayRef && this.overlayRef.hasAttached();
  }

  private openDialog(isOpen: boolean) {
    if (isOpen) {
      this.attachDialog();
    } else {
      this.detachDialog();
    }
  }

  private transformSize(size: number): string {
    const K = 1_024;
    const M = 1_024 * 1_024;
    const G = 1_024 * 1_024 * 1_024;
    const limitSizeDecimalPosition = this.options ? this.options.limitSizeDecimalPosition || 0 : 0;
    if (size < K) {
      return size.toFixed(limitSizeDecimalPosition) + 'B';
    } else if (size / K < 1_000) {
      return (size / K).toFixed(limitSizeDecimalPosition) + 'KB';
    } else if (size / M < 1_000) {
      return (size / M).toFixed(limitSizeDecimalPosition) + 'MB';
    } else {
      return (size / G).toFixed(limitSizeDecimalPosition) + 'GB';
    }
  }

  private initAspectRatioList() {
    this.aspectRatioList = ['5:3', '5:2', '3:1'];
  }
}
