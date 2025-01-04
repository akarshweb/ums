import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  animations: [
    // Animation for expanding/collapsing additional info
    trigger('detailExpand', [
      state('collapsed', style({ height: '0', opacity: '0' })),
      state('expanded', style({ height: '*', opacity: '1' })),
      transition('expanded <=> collapsed', animate('300ms ease-in-out'))
    ]),
    // Fade-in animation for basic info section
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class UserDetailComponent implements OnInit {
  user: any;
  showMore = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.userService.getUserById(id);
    console.log('User:', this.user); // Debugging line to check user data
  }

  // Toggle the 'showMore' flag for expanding/collapsing the additional info
  toggleShowMore() {
    console.log('Toggling showMore:', this.showMore); // Debugging line
    this.showMore = !this.showMore;
  }
}