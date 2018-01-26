import { Component, OnInit } from '@angular/core';
import { TwainService } from '../twain.service';

@Component({
  selector: 'app-twain',
  templateUrl: './twain.component.html',
  styleUrls: ['./twain.component.css']
})
export class TwainComponent implements OnInit {

  quote = '...';

  constructor(private twainService: TwainService) { }

  ngOnInit(): void {
    this.twainService.getQuote().subscribe(quote => this.quote = quote);
  }

}
