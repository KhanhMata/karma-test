import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-inline',
  templateUrl: './banner-inline.component.html',
  styleUrls: ['./banner-inline.component.css']
})
export class BannerInlineComponent implements OnInit {

  title = "Banner";
  htmlSnippet = 'Template <script>alert("abc")</script> <b>Syntax</b>';

  constructor() { }

  ngOnInit() {
  }

}
