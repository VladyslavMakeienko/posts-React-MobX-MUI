import { action, observable, computed, makeObservable } from "mobx";

export class FrontEndStore {
  comments = [
    "Привет, Верунь! Это моя новая работа, оцени)",
    "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?",
    "Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?",
    "Чем отличаются гении от природы и гении от себя?",
    "Вероника, здравствуйте! Есть такой вопрос: Нужно ли вкладывать в Bitcoin? Если нет - почему?",
    "Вероника, привет! Есть такой вопрос: Нужно ли покупать акции Tesla?",
  ];
  likesCount = 131;
  likeClick = false;

  constructor() {
    this.likesCount = JSON.parse(localStorage.getItem("likesCount"));
    this.likeClick = JSON.parse(localStorage.getItem("likeClick"));
    this.comments =
      JSON.parse(localStorage.getItem("comments")) || this.comments;
    makeObservable(this, {
      comments: observable,
      likesCount: observable,
      likeClick: observable,

      commentsCount: computed,

      postComment: action.bound,
      updateCount: action.bound,
      clearCount: action.bound,
    });
  }

  updateCount() {
    this.likesCount = 132;
    this.likeClick = true;
    localStorage.setItem("likesCount", JSON.stringify(this.likesCount));
    localStorage.setItem("likeClick", JSON.stringify(this.likeClick));
  }

  clearCount() {
    this.likesCount = 131;
    this.likeClick = false;
    localStorage.setItem("likesCount", JSON.stringify(this.likesCount));
    localStorage.setItem("likeClick", JSON.stringify(this.likeClick));
  }

  postComment(comment) {
    this.comments.push(comment);
    localStorage.setItem("comments", JSON.stringify(this.comments));
  }

  get commentsCount() {
    return this.comments.length;
  }
}
