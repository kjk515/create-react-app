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
  changeModal(key: string, value: boolean) {
    this.modalMap.set(key, value);
  }

  @boundMethod
  @action
  setPageMap(key: string, offset: number, limit: number) {

    this.pageMap.set(key, new PageModel(offset, limit));
  }

  @boundMethod
  @action
  initPageMap(key: string) {
    if (Array.isArray(key)) {
      key.forEach(mapKey => this.pageMap.delete(mapKey));
    } else {
      this.pageMap.delete(key);
    }
  }

  @boundMethod
  @action
  initModalMap(key: string) {
    if (Array.isArray(key)) {
      key.forEach(mapKey => this.modalMap.delete(mapKey));
    } else {
      this.modalMap.delete(key);
    }
  }

  @boundMethod
  @action
  setCount(key: string, count: number) {
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
  setPage(key: string, page: number) {
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
