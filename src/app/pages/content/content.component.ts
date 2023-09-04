import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  @Input()
  photoCover: string = 'https://tm.ibxk.com.br/2021/11/11/11185008794612.jpg?ims=352x208';
  @Input()
  contentCover: string = 'Minha notícia';
  @Input()
  contentDescription: string = 'Evan Joseph';
}
