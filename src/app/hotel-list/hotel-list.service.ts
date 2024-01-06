import { Injectable } from '@angular/core';
import { Ihotel } from './hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelListService {

  // constructor() { }

  /**
   * getHotels
   */
  public getHotels() : Ihotel[] {
    return [{
      id: 1,
      name: "Krystal palace",
      description: "discover our suites,lounches and palaces",
      imageUrl: "assets/img/hotel-room.jpg",
      price : 1000,
      ratings : 3.5
    },{
      id: 2,
      name: "Makepe palace",
      description: "discover our suites,lounches and palaces",
      imageUrl: "assets/img/indoors.jpg",
      price : 1000,
      ratings : 5
    },{
      id: 3,
      name: "Akwa palace",
      description: "discover our suites,lounches and palaces",
      imageUrl: "assets/img/the-interior.jpg",
      price : 1000.20,
      ratings : 4
    },{
      id: 4,
      name: "Paul palace",
      description: "discover our suites,lounches and palaces",
      imageUrl: "assets/img/window.jpg",
      price : 1000.234,
      ratings : 2.5
    }];
  }
}
