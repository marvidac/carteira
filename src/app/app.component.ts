import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carteirav4';

  items: MenuItem[];

  ngOnInit() {
    this.items = [{
        label: 'File',
        items: [
            {label: 'New', icon: 'pi pi-fw pi-plus'},
            {label: 'Download', icon: 'pi pi-fw pi-download'}
        ]
    },
    {
        label: 'Edit',
        items: [
            {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
            {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
        ]
    }];
}
}
