import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css'
})
export class HotelListComponent {
  // property
  title : string = "liste d'hotel";
  showBadge : boolean = true;
  showBadgeText : string = "Hide";
  icon : string = "visibility_off"
  hotels : any [] = [{
    id: 1,
    name: "Krystal palace",
    description: "discover our suites,lounches and palaces",
    imageUrl: "assets/img/hotel-room.jpg"
  },{
    id: 2,
    name: "Makepe palace",
    description: "discover our suites,lounches and palaces",
    imageUrl: "assets/img/indoors.jpg"
  },{
    id: 3,
    name: "Akwa palace",
    description: "discover our suites,lounches and palaces",
    imageUrl: "assets/img/the-interior.jpg"
  },{
    id: 4,
    name: "Paul palace",
    description: "discover our suites,lounches and palaces",
    imageUrl: "assets/img/window.jpg"
  }];

  /**
   * toggleShowBadge
   */
  public toggleShowBadge() {
    this.showBadge = !this.showBadge;
    if (this.showBadge) {
      this.showBadgeText = "Hide"
      this.icon = "visibility_off";
    } else{
      this.showBadgeText = "View";
      this.icon = "visibility";
    }
  }
}
