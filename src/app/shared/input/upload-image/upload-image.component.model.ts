export interface UploadImageOptions {
  defaultSrc?: string; // will show when src is null
  defaultText?: string; // will show when src and defaultSrc is null
  isIconPreview?: boolean; // if true use icon preview mode that circle preview box or else rectangle
  disabled?: boolean; // if true will disable upload input, vice versa
  limitSize?: number; // limit upload images size
  limitSizeDecimalPosition?: number;
  aspectRatio?: number; // for customize preview ratio
  isShowClearIconInHoverImage?: boolean; // hover image will show clear icon
  isUseAspectRatioTool?: boolean;
}
