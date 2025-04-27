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
    key: 'home',
    label: 'Home',
    isMega: true,
    children: [],
  },
  {
    key: 'aboutUs',
    label: 'About Us',
    children: [],
  },
  {
    key: 'apply',
    label: 'Aplication',
    children: [],
  },
  {
    key: 'news',
    label: 'News',
    children: [],
  }
]
