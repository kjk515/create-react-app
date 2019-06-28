export default class PostViewModel {

  id;
  title;
  contents;
  date;

  constructor(postApiModel) {
    Object.assign(this, postApiModel);
  }
}
