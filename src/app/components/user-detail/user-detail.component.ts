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
    // Animation for expanding and collapsing additional information
    trigger('detailExpand', [
      state('collapsed', style({
        height: '0',
        opacity: '0',
        transform: 'translateY(-10px)',
        overflow: 'hidden'
      })),
      state('expanded', style({
        height: '*',  // Allow full height when expanded
        opacity: '1',
        transform: 'translateY(0)'
      })),
      transition('collapsed => expanded', [
        // Animation for expanding the section
        animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)', keyframes([
          style({ height: 0, opacity: 0, transform: 'translateY(-10px)', offset: 0 }),
          style({ height: '*', opacity: 0.5, transform: 'translateY(-5px)', offset: 0.5 }),
          style({ height: '*', opacity: 1, transform: 'translateY(0)', offset: 1 })
        ]))
      ]),
      transition('expanded => collapsed', [
        // Animation for collapsing the section
        animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)', keyframes([
          style({ height: '*', opacity: 1, transform: 'translateY(0)', offset: 0 }),
          style({ height: '*', opacity: 0.5, transform: 'translateY(-5px)', offset: 0.5 }),
          style({ height: '0', opacity: 0, transform: 'translateY(-10px)', offset: 1 })
        ]))
      ])
    ]),
    // Animation for button ripple effect
    trigger('buttonRipple', [
      transition('* => *', [
        animate('300ms ease', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),  // Initial scale
          style({ transform: 'scale(0.95)', offset: 0.5 }),  // Scale down
          style({ transform: 'scale(1)', offset: 1 })  // Scale back to original
        ]))
      ])
    ])
  ]
})
export class UserDetailComponent implements OnInit {
  user: any;  // User details object
  showMore = false;  // Flag to toggle additional information visibility
  buttonClicked = false;  // Flag for button ripple animation

  constructor(
    private route: ActivatedRoute,  // To access route parameters
    private userService: UserService  // Service to fetch user details
  ) {}

  ngOnInit() {
    // Get user ID from route parameter and fetch user details
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.userService.getUserById(id);

    // Initially hide content during page load for better visual experience
    document.body.style.visibility = 'hidden';

    // Apply a delay to ensure content is fully loaded before making the page visible
    setTimeout(() => {
      document.body.style.visibility = 'visible';
    }, 1);  // Adjust the delay if necessary
  }

  // Toggle function for expanding and collapsing additional user info
  toggleShowMore() {
    this.showMore = !this.showMore;
    this.buttonClicked = !this.buttonClicked;  // Trigger button animation
  }
}
