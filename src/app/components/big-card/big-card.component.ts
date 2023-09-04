import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  @Input()
  photoCover: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription: string =
    'Minato Namikaze, também conhecido como "Quarto Hokage," é um personagem da série de anime e mangá "Naruto." Ele é amplamente reconhecido como um dos ninjas mais poderosos e habilidosos do universo Naruto, e isso sedeve a várias razões:';

  constructor() {}
}
