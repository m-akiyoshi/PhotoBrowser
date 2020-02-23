export class Photo {
  constructor(options = {}) {
    this.imgUrlSq = options.imgUrlSq ? options.imgUrlSq : "";
    this.imgUrlLg = options.imgUrlLg ? options.imgUrlLg : "";
    this.title = options.title ? options.title : "";
  }
}
