import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { BackToTopComponent } from '@components/back-to-top/back-to-top.component'
import { CustomizerComponent } from '@components/customizer/customizer.component'
import { PreloaderComponent } from '@components/preloader/preloader.component'
import { TitleService } from '@core/services/title.service'
import { MarketingAgencyComponent } from "./pages/landings/marketing-agency/marketing-agency.component";
import { NavigationBarComponent } from "./components/navigation-bars/navigation-bar-1/navigation-bar.component";
import { AboutComponent } from "./pages/landings/marketing-agency/components/about/about.component";
import { FooterComponent } from "./pages/landings/marketing-agency/components/footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PreloaderComponent,
    BackToTopComponent,
    CustomizerComponent,
    MarketingAgencyComponent,
    NavigationBarComponent,
    AboutComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.init()
  }
}
