import { Component, OnInit } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ';

  ngOnInit(): void {
    of(1, 2, 3).subscribe(data => console.log(data));

    from(['nashat', 'is', 'awesome']).subscribe(
      next => console.log(next),
      error => console.log('The error is', error),
      () => console.log('It is completed')
    );
  }
}
