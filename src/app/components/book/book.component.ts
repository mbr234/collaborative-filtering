import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public author: String;
  public name: String;
  public rating: String;

  constructor() { }

  ngOnInit() {
    this.author = "Jo Nesbo"
    this.name = "Kralovstvo";
  }

}
