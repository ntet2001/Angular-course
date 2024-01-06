import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css',
})
export class StarRatingComponent implements OnChanges {

  public starWidth : number;

  @Input()
  public rating : number = 2;

  @Output()
  public starRatingClicked : EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = (this.rating * 125) / 5 ;
  }

  public sendRating() {
    this.starRatingClicked.emit(`la note est de ${this.rating}`)
  }
}
