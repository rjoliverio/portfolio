export interface IPortfolio {
  id: number
  title: string
  description: string
  image: string
  github_link: ILink
  output_link: ILink
  start_date: string
  finished_date: string
}

export interface ILink {
  type: string
  link: string
}
