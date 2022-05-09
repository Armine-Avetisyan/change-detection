import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input() data!: any;
  number: number = 0;
  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.data.subscribe((data: number) => {
      this.number = data;
      this.cdRef.detach()
    })
  }

}
