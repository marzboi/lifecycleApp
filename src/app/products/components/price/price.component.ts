import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  price: number = 0;

  ngOnInit(): void {
    console.log('Componente hijo: ngOnInit');

    interval(1000).subscribe((value) => {
      console.log(`$ticks: ${value}`);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente HIJO: OnChanges');
    console.log({ changes });
  }

  ngOnDestroy(): void {
    console.log('Componente HIJO: OnDestroy');
  }
}
