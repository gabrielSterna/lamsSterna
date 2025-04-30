export type MenuItemType = {
  key: string
  label: string
  image?: string
  isMega?: boolean
  isNew?: boolean
  url?: string
  parentKey?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  children?: MenuItemType[]
}

export const MENU_ITEMS: MenuItemType[] = [
  
  {
    key: 'about',
    label: 'About Us',
    url: '/about',
    isMega: false,
    
  },
  {
    key: 'services',
    label: 'Services',
    url: '/services',
    isMega: false,
  },
  
 
]
