import { AfterViewInit, Component } from '@angular/core'
import { SpecialistType, specialistsData } from '../../data'
import { initAOS } from 'src/app/utils/init-aos'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'marketing-agency-about',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styles: ``,
})
export class AboutComponent implements AfterViewInit {
  aboutData: SpecialistType[] = specialistsData

  ngAfterViewInit(): void {
    initAOS()
  }
}
