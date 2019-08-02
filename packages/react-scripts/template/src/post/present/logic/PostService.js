import { observable, action } from 'mobx';
import autobind from 'autobind-decorator';

import { instance } from '../../../shared';
import PostApi from '../apiclient/PostApi';


@autobind
class PostService {

  @instance
  static instance;

  @observable
  posts = [];

  @observable
  post = {};

  @action
  async findPosts(pageSet) {
    if (!pageSet) return;

    this.posts = await PostApi.instance.findPosts(pageSet.offset, pageSet.limit);
  }

  async countPosts() {
    const posts = await PostApi.instance.countPosts();
    // json-server doesn't provider total count route. returned total all Posts.
    return posts.length;
  }

  @action
  changePostProp(prop, value) {
    this.post = { ...this.post, [prop]: value };
  }

  registerPost() {
    this.post.date = new Date().toISOString().slice(0, 10);
    return PostApi.instance.registerPost(this.post);
  }

  @action
  async findPost(postId) {
    this.post = await PostApi.instance.findPost(postId);
  }

  removePost(postId) {
    return PostApi.instance.removePost(postId);
  }

  @action
  initPost() {
    this.post = {};
  }
}

export default PostService;
