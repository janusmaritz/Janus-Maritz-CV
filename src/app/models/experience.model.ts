export interface Responsibility {
  focus: string;
  detail: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  responsibilities: Responsibility[];
  technologies: string[];
}
