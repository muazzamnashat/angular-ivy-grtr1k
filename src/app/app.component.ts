import { Component, OnInit } from '@angular/core';
import { of, from, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ';
  arr = [];
  ngOnInit(): void {
    of(1, 2, 3)
      .pipe(tap(item => item * 2))
      .subscribe(data => {
        console.log(data);
        this.arr.push(data);
      });

    from(['nashat', 'is', 'awesome'])
      .pipe(map(item => item + '  added extra'))
      .subscribe(
        next => console.log(typeof next),
        error => console.log('The error is', error),
        () => console.log('It is completed')
      );

    console.log(this.arr);
  }
}
