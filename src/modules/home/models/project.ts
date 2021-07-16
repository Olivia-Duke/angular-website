export interface Project {
  title: string;
  slug: string;
  description: string;
  sections: Section[];
}

export interface Section {
  image: string;
  description: string;
}
