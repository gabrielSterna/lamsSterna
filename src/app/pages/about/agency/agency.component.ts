import { Component } from '@angular/core'
import { NavigationBarComponent } from '@components/navigation-bars'
import { AboutComponent } from './component/about/about.component'
import { MissionComponent } from './component/mission/mission.component'
import { StepsComponent } from './component/steps/steps.component'
import { TeamComponent } from './component/team/team.component'
import { TestimonialComponent } from './component/testimonial/testimonial.component'
import { LocationComponent } from './component/location/location.component'
import { ServiceComponent } from './component/service/service.component'
import { RouterModule } from '@angular/router'
import { FooterComponent as FooterComponent } from "../../landings/marketing-agency/components/footer/footer.component";
import { CTAComponent } from "../../services/service-v1/component/cta/cta.component";


@Component({
  selector: 'about-agency',
  standalone: true,
  imports: [
    NavigationBarComponent,
    AboutComponent,
    MissionComponent,
    StepsComponent,
    TeamComponent,
    TestimonialComponent,
    LocationComponent,
    ServiceComponent,
    RouterModule,
    FooterComponent,
    CTAComponent
],
  templateUrl: './agency.component.html',
  styles: ``,
})
export class AgencyComponent {}
