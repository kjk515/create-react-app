
export default class PostApiModel {
  id;
  title;
  contents;
  date;

  constructor(postViewModel) {
    Object.assign(this, postViewModel);
  }
}
