export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  imageUrl: any
  githubUrl?: string
  liveUrl?: string
}

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
}