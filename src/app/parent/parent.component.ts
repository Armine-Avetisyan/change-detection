import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],

})
export class ParentComponent implements OnInit {

  obs$ = interval(500);
  constructor() { }

  ngOnInit(): void {
  }

}
