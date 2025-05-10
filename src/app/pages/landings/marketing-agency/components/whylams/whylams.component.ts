import { Component } from '@angular/core'
import { ServicesType, lamsServices } from '../../data'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'marketing-agency-whylams',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './whylams.component.html',
  styles: ``,
})
export class WhylamsComponent {
  marketingAgecyData: ServicesType = lamsServices

  reasonsLamsList = [
    'Extensive Industry Experience',
    'Customized Recruitment Solutions',
    'Reliable, Prequalified Workforce',
    'End-to-End Support from Screening to Deployment',
  
  ]
}
