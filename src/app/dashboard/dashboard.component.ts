import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userForm: any = {
    email: '',
    password: '',
  };

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {}

  submit(): void {
    if (this.userForm.email && this.userForm.password) {
      this.heroService.submit(this.userForm).subscribe((response) => {
        alert(response);
      });
    } else {
      alert('Please enter correct details!');
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
