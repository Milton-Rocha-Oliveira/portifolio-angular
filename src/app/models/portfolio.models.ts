export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  category: string;
  year: string;
  technologies: Technology[];
}

export interface Technology {
  name: string;
  iconUrl: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  imageUrl: string;
  date: string;
  certificateUrl?: string;
  technologies: Technology[];
}
