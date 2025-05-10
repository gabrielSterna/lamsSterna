export type ContactCategoryType = {
  category: string
  phone: string
  link: string
}

export type ContactTimingType = {
  day: string
  opening_hours: {
    start: string
    end: string
  }
}
export const contactCategory: ContactCategoryType[] = [
  {
    category: 'Phone 1',
    phone: '+632-8294-0490',
    link: 'tel:+63282940490',
    
  },
  {
    category: 'Phone 2',
    phone: '+63-998-990-0756',
    link: 'tel:+63282940490',
  },
  
]

export const contactTiming: ContactTimingType[] = [
  {
    day: 'Mon - Thu',
    opening_hours: {
      start: '10:00',
      end: '22:00',
    },
  },
  {
    day: 'Fri - Sat',
    opening_hours: {
      start: '10:00',
      end: '20:00',
    },
  },
  {
    day: 'Sun',
    opening_hours: {
      start: '12:00',
      end: '16:00',
    },
  },
]
