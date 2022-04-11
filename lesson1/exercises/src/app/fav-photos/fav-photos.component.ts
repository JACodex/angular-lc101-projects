import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Gallery of Photos';
  image1 = 'https://cdn.pixabay.com/photo/2022/01/12/14/46/dusky-leaf-monkeys-6933043_960_720.jpg';
  image2 = 'https://cdn.pixabay.com/photo/2019/03/05/05/45/man-4035612_960_720.jpg';
  image3 = 'https://cdn.pixabay.com/photo/2022/01/12/14/46/dusky-leaf-monkeys-6933043_960_720.jpg';

  constructor() { }

  ngOnInit() {
  }

}