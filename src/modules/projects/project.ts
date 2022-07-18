export interface Project {
  title: string;
  dateStart: SimpleDate;
  dateEnd: SimpleDate;
  isCurrent: boolean;
  notableTechnologies: string[];
  slug: string;
  description: string;
  sections: Section[];
}

export interface Section {
  image: string;
  description: string;
}

export interface SimpleDate {
  year: number;
  month: number;
}
