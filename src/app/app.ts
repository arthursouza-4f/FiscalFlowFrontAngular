import { Component, HostBinding, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeToggleComponent } from './theme/theme-toggle/theme-toggle.component';
import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';
import { MetronicInitService } from '../core/services/metronic-init.service';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeToggleComponent, SidebarComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
	@HostBinding('class') bodyClass = 'flex grow';
	private metronicInitService = inject(MetronicInitService);

	ngAfterViewInit(): void {
		this.metronicInitService.init();
	}
}
