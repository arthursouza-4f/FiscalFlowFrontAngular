import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  imports: [],
  templateUrl: './sidebar-menu.component.html',
})
export class SidebarMenuComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    if (window && (window as any).KTMenu && typeof (window as any).KTMenu.init === 'function') {
      (window as any).KTMenu.init();
    }
  }

}
