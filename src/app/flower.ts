export class Flower {
  public label: string;
  public imgSrc: string;
  constructor(name) {
    this.label = Flower.capitalizeFirstLetter(name);
    this.imgSrc = `assets/images/flowers/${name}_large.jpeg`;
  }

  // make the first letter capital
  private static capitalizeFirstLetter( /* string */ str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
