import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover: string =
    'https://tm.ibxk.com.br/2021/11/11/11185008794612.jpg?ims=352x208';
  @Input()
  contentCover: string = 'Minha notícia';
  @Input()
  contentDescription: string = 'Evan Joseph';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => console.log(value.get("id")));
  }
}
