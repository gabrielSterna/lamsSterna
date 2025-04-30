import { AfterViewInit, Component } from '@angular/core'
import { toolsData, ToolsType } from '../../data'
import { initAOS } from 'src/app/utils/init-aos'

@Component({
  selector: 'marketing-agency-whoweare',
  standalone: true,
  imports: [],
  templateUrl: './whoweare.component.html',
  styles: ``,
})
export class WhoWeAreComponent implements AfterViewInit {
  toolList: ToolsType[] = toolsData

  ngAfterViewInit(): void {
    initAOS()
  }
}
