import { observable, action } from 'mobx';
import autobind from 'autobind-decorator';

import postApi from '../apiclient/postApi';

@autobind
class PostService {

  @observable
  posts = [];

  @observable
  post = {};

  @action
  async findPosts(pageSet) {
    if (!pageSet) return;

    this.posts = await postApi.findPosts(pageSet.offset, pageSet.limit);
  }

  async countPosts() {
    const posts = await postApi.countPosts();
    // json-server doesn't provider total count route. returned total all Posts.
    return posts.length;
  }

  @action
  changePostProp(prop, value) {
    this.post = { ...this.post, [prop]: value };
  }

  registerPost() {
    this.post.date = new Date().toISOString().slice(0, 10);
    return postApi.registerPost(this.post);
  }

  @action
  async findPost(postId) {
    this.post = await postApi.findPost(postId);
  }

  removePost(postId) {
    return postApi.removePost(postId);
  }

  @action
  initPost() {
    this.post = {};
  }
}

export default new PostService();
