import { Component } from '@angular/core';

import {Product} from "./models/product.model";

//import {Product} from "./product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imgParent="https://okdiario.com/img/2021/08/05/gallina.jpg";

  products:Product[]=[
    {
      id:"1",
      name: "El mejor juguete",
      price: 565,
      image:"./assets/images/gallina-1.jpg",
    },
    {
      id:"2",
      name: "El mejor juguete 2",
      price: 565,
      image:"./assets/images/gallina-2.jpg"
    },
    {
      id:"3",
      name: "El mejor juguete 3",
      price: 565,
      image:"./assets/images/gallina-3.jpg"
    },
    {
      id:"4",
      name: "El mejor juguete 4",
      price: 565,
      image:"./assets/images/gallina-4.jpg"
    },
    {
      id:"5",
      name: "El mejor juguete 4",
      price: 565,
      image:"./assets/images/gallina-4.jpg"
    },
  ];

  onLoaded(img:string){
    console.log("Log padre",img);
  }


/*
  widthImg=10;
  name = 'Fredy';
  age = 37;
  img="https://www.gallinaponedora.com/wp-content/uploads/2021/11/Gallina-Isa-brown-caracteristicas.jpg";
  btnDisabled=true;
  //
  register={
    name:"",
    email:"",
    password:"",
  }
  //
  person={
    name:"Fredy Papa",
    age:37,
    avatar:"https://www.gallinaponedora.com/wp-content/uploads/2021/11/Gallina-Isa-brown-caracteristicas.jpg"
  }

  names:string[] = ["Fredy","Magda","Magda Tula"];
  newName="";
  box={
    width:100,
    height:100,
    background:'red',
  }
  products:Product[]=[
    {
      name: "El mejor juguete",
      price: 565,
      image:"./assets/images/gallina-1.jpg",
      category:"all",
    },
    {
      name: "El mejor juguete 2",
      price: 565,
      image:"./assets/images/gallina-2.jpg"
    },
    {
      name: "El mejor juguete 3",
      price: 565,
      image:"./assets/images/gallina-3.jpg"
    },
    {
      name: "El mejor juguete 4",
      price: 565,
      image:"./assets/images/gallina-4.jpg"
    },
    {
      name: "El mejor juguete 4",
      price: 565,
      image:"./assets/images/gallina-4.jpg"
    },
    {
      name: "El mejor juguete 4",
      price: 565,
      image:"./assets/images/gallina-4.jpg"
    },
  ];

  toogleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age+=1;
  }

  onScroll(event:Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
    
  }

  changeName(event:Event){
    const element = event.target as HTMLInputElement
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName="";
  }

  deleteName(index:number){
    //console.log(index);
    this.names.splice(index,1);
  }

  onRegister(){
    console.log(this.register);
    
  }
  */
}
