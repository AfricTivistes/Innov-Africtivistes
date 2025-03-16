export interface Event {
  id: number
  title: string
  slug: string
  description: string
  category: string
  image: string
  startDate: string
  endDate: string
  location: string
  address: string
  virtual: boolean
  participants: number
  featured?: boolean
  status: "À venir" | "En cours" | "Terminé"
  registrationOpen: boolean
}
