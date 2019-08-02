import { observable, action } from 'mobx';
import autobind from 'autobind-decorator';

import instance from './instance';
import PageModel from '../model/PageModel';

@autobind
class SharedService {

  @instance
  static instance;

  @observable
  modalMap = new Map();

  @observable
  pageMap = new Map();

  @action
  changeModal(key, value) {
    this.modalMap.set(key, value);
  }

  @action
  setPageMap(key, offset, limit) {
    this.pageMap.set(key, new PageModel(offset, limit));
  }

  @action
  initPageMap(key) {
    if (Array.isArray(key)) {
      key.forEach(mapKey => this.pageMap.delete(mapKey));
    } else {
      this.pageMap.delete(key);
    }
  }

  @action
  initModalMap(key) {
    if (Array.isArray(key)) {
      key.forEach(mapKey => this.modalMap.delete(mapKey));
    } else {
      this.modalMap.delete(key);
    }
  }

  @action
  setCount(key, count) {
    const pageSet = { ...this.pageMap.get(key) };
    if (!pageSet) {
      return;
    }

    pageSet.count = count;
    pageSet.totalPages = Math.ceil(count / pageSet.limit);

    this.pageMap.set(key, pageSet);
  }

  @action
  setPage(key, page) {
    const pageSet = { ...this.pageMap.get(key) };
    if (!pageSet) {
      return;
    }

    pageSet.offset = (page - 1) * pageSet.limit;
    pageSet.page = page;

    this.pageMap.set(key, pageSet);
  }
}

export default SharedService;
