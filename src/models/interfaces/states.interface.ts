import { Pagination } from "../pagination";
import { Plan } from "./plan.interface";

export interface PlansState {
  plans: Plan[];
  plansTotalAmount: number;
  searchTerm: string;
  pagination: Pagination;
  isLoading: boolean;
  selectedTrainees: string[]
}
