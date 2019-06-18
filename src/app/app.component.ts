import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
  <nav>
    <a routerLink="/">首页</a>
    <a [routerLink]="['/user', username]">我的</a>
    <!--或者方式2-->
    <!--<a [routerLink]="['/user']" [queryParams]="{name:'凉雨啊'}">我的</a>-->
    <!--<a routerLink="/user" (click)="toggleSkills()">我的</a>-->
    <button (click)="goUser()">
      跳转
    </button>
  </nav>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  {
  name = 'Angular';
  username: string;
  constructor(
    private router: Router,   // 这里需要注入Router模块
  ) {
    this.username = '凉雨a';
  };

  goUser() {
    this.router.navigate(['/user'], {
      queryParams: {
        name: '另一个凉雨'
      }
    });
  }
}
