import { Injectable } from '@angular/core';
import { Restaurant } from 'src/app/shared/models/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }
  getAll():Restaurant[]{
    
    return[
     {
      id:1,
      name:"TONTON",
      imageUrl:'assets/img/gallery/gallery-5.jpg',
      address:" centre ville sfax ",
      phone:22023456,
     },
      
     {
      id:2,
      name:"PRINGLESS",
      imageUrl:'assets/img/gallery/gallery-8.jpg',
      address:"  cite nasria sfax ",
      phone:23023666,
     },
     
     {
      id:3,
      name:"MECHMECHA",
      imageUrl:'assets/img/gallery/gallery-3.jpg',
      address:"  pres de lyceé hedi souissi sfax ",
      phone:55023555,
     },

     {
      id:4,
      name:"BON PLAN",
      imageUrl:'assets/img/gallery/gallery-2.jpg',
      address:"  route gremda 5km sfax ",
      phone:57023776,
     },
     
     

    ]
  }
}
