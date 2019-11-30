import { Component } from '@angular/core';
import {Flower} from './flower';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // to initialize the flowers
  private static names: string[] = ['aster', 'carnation', 'daffodil', 'orchid', 'rose'];
  // all flower objects
  public flowers: Flower[];
  // the selected flower
  public flower: Flower;
  // noinspection JSMismatchedCollectionQueryUpdate
  private images: HTMLImageElement[];
  public title = 'Flower 1 Ng';
  constructor() {
    this.flowers = [];
    this.images = [];
    this.makeFlowers();
    this.preloadImages();
    this.selectFlower(0);
  }
  // make flower objects
  private makeFlowers() {
    AppComponent.names.forEach(name => {
      this.flowers.push(new Flower(name));
    });
  }
  // preload the images from the server
  private preloadImages() {
    this.flowers.forEach(flower => {
      const image: HTMLImageElement = new Image();
      image.src = flower.imgSrc;
      this.images.push(image);
    });
  }
  // show the flower by the index
  public selectFlower(index) {
    this.flower = this.flowers[index];
  }
}
