import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img:string="Valor inicial";
  @Output() loaded = new EventEmitter<string>();
  imageDefault="./assets/images/gallina-3.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log("log hijo");
    this.loaded.emit(this.img);
  }

}
