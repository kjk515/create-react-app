import { observable, action } from 'mobx';
import { boundMethod } from 'autobind-decorator';

import PageModel from '../model/PageModel';

export class SharedService {

  @observable
  modalMap = new Map();

  @observable
  pageMap = new Map();

  @boundMethod
  @action
  changeModal(key, value) {
    this.modalMap.set(key, value);
  }

  @boundMethod
  @action
  setPageMap(key, offset, limit) {

    this.pageMap.set(key, new PageModel(offset, limit));
  }

  @boundMethod
  @action
  initPageMap(key) {
    if (Array.isArray(key)) {
      key.forEach(mapKey => this.pageMap.delete(mapKey));
    } else {
      this.pageMap.delete(key);
    }
  }

  @boundMethod
  @action
  initModalMap(key) {
    if (Array.isArray(key)) {
      key.forEach(mapKey => this.modalMap.delete(mapKey));
    } else {
      this.modalMap.delete(key);
    }
  }

  @boundMethod
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

  @boundMethod
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

export default new SharedService();
