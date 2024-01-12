import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelListService } from '../hotel-list.service';
import { Ihotel } from '../hotel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.css'
})
export class HotelDetailComponent {

  hotels: Ihotel[] = [];
  tmp: Ihotel[] = [];
  hotel: Ihotel;
  id: number;

  constructor(private route : ActivatedRoute, private service : HotelListService) {}

  ngOnInit (){
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getHotelDetails(this.id);
  }

  getHotelDetails(id : number)
  {
    this.hotels = this.service.getHotels();
    this.tmp = this.hotels.filter(value => value.id == id);
    this.hotel = this.tmp[0];
  }

}
