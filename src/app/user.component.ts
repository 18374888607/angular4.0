import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceBaseService } from './http.service';


interface Address {
  province: string;
  city: string;
}

@Component({
  selector: 'sl-user',
  providers: [ ServiceBaseService ],
  template: `
    <h2>大家好，我是{{name}}</h2>
    <p>我来自<strong>{{address.province}}</strong>省,
      <strong>{{address.city}}</strong>市
    </p>
    <button (click)="toggleSkills()">
        {{ showSkills ? "隐藏技能" : "显示技能" }}
    </button>
    <button (click)="testGetData()">
      http接口请求测试
    </button>
    <div *ngIf="showSkills">
        <h3>我的技能</h3>
        <ul>
            <li *ngFor="let skill of skills">
                {{skill}}
            </li>
        </ul>
        <form (submit)="addSkill(skill.value)">
            <label>添加技能</label>
            <input type="text" #skill>
        </form>
    </div>
  `
})
export class UserComponent implements OnInit, OnChanges,
  AfterContentInit, DoCheck,
  AfterContentChecked, AfterViewChecked,
  AfterViewInit, OnDestroy {
  name: string;
  address: Address;
  showSkills: boolean;
  skills: string[];
  params: any;
  url: string;
  param: Object;

  constructor( private routeInfo: ActivatedRoute, private ServiceBaseService: ServiceBaseService ) {
    // 获取参数值
    // this.name = this.routeInfo.snapshot.params['name'];
    this.name = this.routeInfo.snapshot.queryParams['name'];
    this.address = {
      province: '湖南',
      city: '永州'
    };
    this.showSkills = true;
    this.skills = ['AngularJS 1.x', 'Angular 2.x', 'Angular 4.x'];
    this.params = [];
  }
  ngOnInit() {
  }

  ngOnChanges() {

    console.log('On changes');
  }
  // 脏值检测器被调用后调用
  ngDoCheck() {
    console.log('Do check');
  }
  // 组件销毁之前
  ngOnDestroy() {
    console.log('Destroy');
  }
  // 组件-内容-初始化完成 PS：指的是ContentChild或者Contentchildren
  ngAfterContentInit() {
    console.log('After content init');
  }
  // 组件内容脏检查完成
  ngAfterContentChecked() {
    console.log('After content checked');
  }
  // 组件视图初始化完成 PS：指的是ViewChild或者ViewChildren
  ngAfterViewInit() {
    console.log('After view init');
  }
  // 组件视图脏检查完成之后
  ngAfterViewChecked() {
    console.log('After view checked');
  }

  addSkill(skill: string) {
    let skillStr = skill.trim();
    if (this.skills.indexOf(skillStr) === -1) {
      this.skills.push(skillStr);
    }
  }

  toggleSkills() {
    this.showSkills = !this.showSkills;
  }

  testGetData() {
    this.url = 'http://xxxx';
    this.param = {'Appid': 'xxx', 'Appsecret': 'xxx'};
    this.ServiceBaseService.postData(this.url, this.param).subscribe({
      next: function(value) {
        console.log(value);
      },
      error: function(error) {
        console.log('Throw Error: ' + error);
      }
    });
  }
}
