import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dasnboard',
  templateUrl: './admin-dasnboard.component.html',
  styleUrls: ['./admin-dasnboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDasnboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
