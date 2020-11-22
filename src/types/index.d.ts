export type WebsiteInfo = {
  websiteKey: string
  name: string
  url: string
  imgSrc: string
}

export type SectionInfo = {
  icon: string
  sectionTitle: string
  items: WebsiteInfo[]
}

export type AuthData = {
  userID: number
}
