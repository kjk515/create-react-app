import { observable, action } from 'mobx';
import { boundMethod } from 'autobind-decorator';

import postApi from '../apiclient/postApi';

class PostService {
  @observable
  posts = [];

  @observable
  post = {};

  @boundMethod
  @action
  async findPosts(pageSet) {
    if (!pageSet) return;

    this.posts = await postApi.findPosts(pageSet.offset, pageSet.limit);
  }

  async countPosts() {
    const posts = await postApi.countPosts();
    // json-server don't provider total count route. returned total all Posts.
    return posts.length;
  }

  @boundMethod
  @action
  changePostProp(prop, value) {
    this.post = { ...this.post, [prop]: value };
  }

  registerPost(post) {
    return postApi.registerPost(post);
  }

  @boundMethod
  @action
  async findPost(postId) {
    this.post = await postApi.findPost(postId);
  }

  removePost(postId) {
    return postApi.removePost(postId);
  }
}

export default new PostService();
