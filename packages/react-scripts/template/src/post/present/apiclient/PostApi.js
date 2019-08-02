import axios from 'axios';

import PostViewModel from '../../ui/model/PostViewModel';
import PostApiModel from '../model/PostApiModel';
import { instance } from '../../../shared';

class PostApi {

  @instance
  static instance;

  rootURL = process.env.REACT_APP_API_URL;

  findPosts(offset, limit) {
    return axios.get(this.rootURL + '/posts', { params: { offset, limit }})
      .then(response => response.data.map(post => new PostViewModel(post)));
  }

  countPosts() {
    return axios.get(this.rootURL + '/posts/count')
      .then(response => response.data);
  }

  registerPost(post) {
    return axios.post(this.rootURL + '/posts', new PostApiModel(post));
  }

  findPost(postId) {
    return axios.get(this.rootURL + `/posts/${postId}`)
      .then(response => new PostViewModel(response.data));
  }

  removePost(postId) {
    return axios.delete(this.rootURL + `/posts/${postId}`);
  }
}

export default PostApi;
