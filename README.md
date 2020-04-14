# ResumeGenerator

## DEMO

[Resume Generator Demo](https://marshal604.github.io/resume-generator/dist)

## Overview

之前有自己在 Word 做履歷，但是版面都要調整有點麻煩，因此想要做個自己的客製化的履歷，目前的樣式只有一個，後續如果有想到喜歡或是看到不錯的模板，都會在添加進來。

另外，[CakeResume](<[Cakeresume.com](https://www.cakeresume.com/dashboard)>)本身就是很棒的履歷建構網站囉。

## Feature

- 客製化履歷
- 可上傳檔案更新履歷
- 可下載檔案，下次要用時在更新履歷
- 可 fork 下來，在 asset 中存放檔案，並在 route 加上?file=<filename>即可導入檔案，例如:`resume/generator?path=sample.txt`
- 支援在 Chrome 上列印履歷為 PDF

## 3th-Party

- `Angular`
- `Jest`
- `cropperjs`
- `@fortawesome/fontawesome-free`
