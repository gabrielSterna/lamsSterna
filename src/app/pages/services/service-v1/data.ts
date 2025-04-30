import { SafeHtml } from '@angular/platform-browser'
import {
  serviceIcon,
  serviceIcon2,
  serviceIcon3,
  serviceIcon4,
  serviceIcon5,
  serviceIcon6,
} from '../../../components/icons'

export type ServiceGridType = {
  description: string
  icons: string
  sanitizedIcon?: SafeHtml
  title: string
}
export type BenefitType = {
  description: string
  title: string
  number?: SafeHtml
}

export type ServiceTestimonialType = {
  name: string
  avatar: string
  position: string
  description: string
  isSecond?: boolean
}[][]

export const serviceGrid: ServiceGridType[] = [
  {
    title: 'Talent-Opportunity Alignment',
    icons: serviceIcon6,
    description:
      'LAMS connects the right people with the right international opportunities.',
  },
  {
    title: 'Specialized in Filipino Talent',
    icons: serviceIcon2,
    description:
      'We focus on skilled Filipino professionals, known for their dedication and work ethic.',
  },
  //
  {
    title: 'Global Reach',
    icons: serviceIcon3,
    description:
      'We partner with companies around the world to meet diverse labor needs.',
  },
  //
  {
    title: 'Skills-Based Matching',
    icons: serviceIcon4,
    description:
      'Our recruitment process is centered on matching the right skills to each role.',
  },
  {
    title: 'Emphasis on Reliability and Commitment',
    icons: serviceIcon5,
    description:
      'We work with employers who value trust, consistency, and heart.',
  },
  {
    title: 'Ethical Recruitment Philosophy',
    icons: serviceIcon6,
    description:
      'LAMS promotes fair, respectful, and impact-driven hiring practices.',
  },
]

export const benefits: BenefitType[] = [
  {
    number: '01',
    title: 'Client-Centric Approach',
    description:
      'We view every client as a partner, tailoring ourservices to your specific business goals and workforce needs.',
  },
  //
  
  {
    number: '02',
    title: 'Proactive Communication',
    description:
      'We maintain open and frequent communication, keeping you updated at every stage of the recruitment process.',
  },
  {
    number: '03',
    title: 'Candidate Care and Welfare',
    description:
      'Our support for candidates extends beyond deployment, fostering satisfaction and retention.',
  },
]
export const servicesTestimonial: ServiceTestimonialType = [
  [
    {
      name: 'Jane Cooper',
      avatar: 'assets/img/avatar/22.jpg',
      position: 'Medical Assistant',
      description:
        'Sit risus metus, vel neque eu lectus duis. Vulputate facilisi at feugiat mi aenean nunc enim faucibus arcu. Diam id accumsan sit.',
      isSecond: true,
    },
    {
      name: 'Cameron Williamson',
      avatar: 'assets/img/avatar/25.jpg',
      position: 'Marketing Coordinator',
      description:
        'Nam convallis maecenas leo sapien interdum id. Facilisi dictum lacinia in phasellus. Nullam id sed tempor, volutpat blandit urna sagittis, commodo vestibulum. Adipiscing dictumst nunc enim massa lacus lobortis.',
    },
  ],
  [
    {
      name: 'Wade Warren',
      avatar: 'assets/img/avatar/23.jpg',
      position: 'President of Sales',
      description:
        'Vitae tempor morbi tellus pulvinar. Ut iaculis sit tristique in turpis volutpat quam nec. Pretium eu nulla egestas ultrices. Donec in pulvinar ut fermentum a, nunc, aliquam. Integer dui dui ornare sed lacinia.',
      isSecond: true,
    },
    {
      name: 'Leslie Alexander',
      avatar: 'assets/img/avatar/26.jpg',
      position: 'CEO, Divi',
      description:
        'Malesuada at ullamcorper adipiscing lobortis vestibulum. Aliquet lobortis justo arcu ut auctor porttitor amet, tortor. Justo.',
    },
  ],
  [
    {
      name: 'Esther Howard',
      avatar: 'assets/img/avatar/24.jpg',
      position: 'CEO, Slack',
      description:
        'Ante turpis leo dictum adipiscing nisl magnis elementum eu. Integer consequat sed ipsum massa egestas integer proin id.',
      isSecond: true,
    },
    {
      name: 'Brooklyn Simmons',
      avatar: 'assets/img/avatar/27.jpg',
      position: 'Marketing Coordinator',
      description:
        'In quisque dolor, aliquam faucibus. Gravida diam ornare egestas proin quis odio suspendisse pellentesque. Condimentum risus, rutrum curabitur faucibus mi a turpis morbi. Nulla euismod dolor quis amet sed.',
    },
  ],
  [
    {
      name: 'Fannie Summers',
      avatar: 'assets/img/avatar/28.jpg',
      position: 'VP of Sales',
      description:
        'In et dui amet amet elementum urna, dictum. Eget leo ornare bibendum a fermentum. Rutrum pellentesque ipsum cras purus ac a ullamcorper. Elit ac amet quam tellus euismod ac aliquam pharetra lectus.',
      isSecond: true,
    },
    {
      name: 'Robert Fox',
      avatar: 'assets/img/avatar/29.jpg',
      position: 'Marketing Coordinator',
      description:
        'At felis non consequat neque in ultrices tortor purus dui. At sed fermentum, egestas amet et donec euismod risus. Nulla mauris.',
    },
  ],
]
