import { Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { AccountLayoutComponent } from './layouts/account-layout.component'

export const routes: Routes = [
{
  path: '',
  component: AppComponent,
  children: [
    {
      path: '',
      loadComponent:() =>
        import('./pages/landings/marketing-agency/marketing-agency.component').then(
          (m) => m.MarketingAgencyComponent
        ),
      title: 'LAMS'
    },
    {
      path:'about',
      loadComponent:() =>
        import('./pages/about/agency/agency.component').then(
          (m) => m.AgencyComponent
        ),
        title: 'About us'
    },
    {
      path:'services',
      loadComponent:() =>
        import('./pages/services/service-v1/service-v1.component').then(
          (m) => m.ServiceV1Component
        ),
        title: 'Services'
    },
    {
      path:'contact',
      loadComponent:() =>
        import('./pages/contacts/contact-v3/contact-v3.component').then(
          (m) => m.ContactV3Component
        ),
        title: 'Contact'
    },
  ]
} 
]
