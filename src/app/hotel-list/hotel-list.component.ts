import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ihotel } from './hotel';
import { StarRatingComponent} from '../shared/components/star-rating/star-rating/star-rating.component';
import { HotelListService } from './hotel-list.service';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule,FormsModule,StarRatingComponent],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css'
})
export class HotelListComponent implements OnInit{


  // property
  title : string = "liste d'hotel";
  showBadge : boolean = true;
  showBadgeText : string = "Hide";
  icon : string = "visibility_off"
  filtre : string = "mot";
  receivedRating : string;
  hotels : Ihotel[] = [];

  constructor (private hotelListService : HotelListService){}
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

  receivedRatingClicked(message : string) {
    this.receivedRating = message;
  }

  ngOnInit(): void {
    this.hotels = this.hotelListService.getHotels();
    console.log('le cycle est initialiser');
  }
}
