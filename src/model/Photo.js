export class Photo {
  constructor(options = {}) {
    this.id = options.id ? options.id : "";
    this.imgUrlSq = options.imgUrlSq ? options.imgUrlSq : "";
    this.imgUrlLg = options.imgUrlLg ? options.imgUrlLg : "";
    this.title = options.title ? options.title : "";
    this.tags = options.tags ? options.tags : "";
  }
}
