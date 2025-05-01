export default class Film {
  constructor(
    public name: string,
    public genre: string,
    public blurb: string
  ) {}

  toString() {
    return `${this.name} [${this.genre}], ${this.blurb}`;
  }
}
