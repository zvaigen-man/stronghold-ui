export interface Plan {
  trainee: string;
  id: string;
  assignedDate: string;
  exercises: Excersise[];
}
export interface Excersise {
  weight: number;
  sets: number;
  _id: string;
  id: string;
  label: string;
  muscles: string[];
}
