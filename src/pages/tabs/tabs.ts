import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
  name: 'tabs'
})
@Component({
  templateUrl: 'tabs.html',
})
export class Tabs {
  homeRoot: string = 'home';
  constructor() {}
}
