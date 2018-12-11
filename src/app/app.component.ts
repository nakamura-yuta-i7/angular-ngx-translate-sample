import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  param = {
    value: 'world',
    me: 'yuta'
  };
  
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('ja');
    // translate.setTranslation('en', {
    //   HELLO: 'hello {{value}}'
    // });
    // translate.get('HELLO', {value: 'world'}).subscribe((res: string) => {
    //   console.log(res);
    //   //=> 'hello world'
    // });
  }
}
