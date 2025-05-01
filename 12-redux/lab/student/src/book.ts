export default class Book {
  constructor(public title: string, public author: string) {}

  toString() {
    return `${this.title}, by ${this.author}`;
  }
}
