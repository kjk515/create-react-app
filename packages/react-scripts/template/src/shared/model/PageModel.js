export default class PageModel {

  offset;
  limit;
  count;
  page;
  totalPages;

  constructor(offset, limit) {
    this.offset = offset;
    this.limit = limit;
    this.count = 0;
    this.page = 1;
    this.totalPages = 1;
  }
}
