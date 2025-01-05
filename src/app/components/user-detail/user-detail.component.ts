// user-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({
        height: '0',
        opacity: '0',
        transform: 'translateY(-10px)',
        overflow: 'hidden'
      })),
      state('expanded', style({
        height: '*',
        opacity: '1',
        transform: 'translateY(0)'
      })),
      transition('collapsed => expanded', [
        animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)', keyframes([
          style({ height: 0, opacity: 0, transform: 'translateY(-10px)', offset: 0 }),
          style({ height: '*', opacity: 0.5, transform: 'translateY(-5px)', offset: 0.5 }),
          style({ height: '*', opacity: 1, transform: 'translateY(0)', offset: 1 })
        ]))
      ]),
      transition('expanded => collapsed', [
        animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)', keyframes([
          style({ height: '*', opacity: 1, transform: 'translateY(0)', offset: 0 }),
          style({ height: '*', opacity: 0.5, transform: 'translateY(-5px)', offset: 0.5 }),
          style({ height: '0', opacity: 0, transform: 'translateY(-10px)', offset: 1 })
        ]))
      ])
    ]),
    // Add a ripple animation for the button
    trigger('buttonRipple', [
      transition('* => *', [
        animate('300ms ease', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(0.95)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class UserDetailComponent implements OnInit {
  user: any;
  showMore = false;
  buttonClicked = false; // For button animation

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.userService.getUserById(id);
  }

  toggleShowMore() {
    this.showMore = !this.showMore;
    this.buttonClicked = !this.buttonClicked; // Toggle for button animation
  }
}
