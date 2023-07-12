// import { mockData } from "../../utils/mockData/mock";
import { HttpClientService } from "./httpAdapter";

let baseUrl: string = process.env.REACT_APP_SERVER_BASE_URL!;
// let baseUrl: string = 'https://frozen-atoll-86414.herokuapp.com/api/v1/';

export class ApiAdapter extends HttpClientService {
  // Home Page
  // TODO fix any
  async getPlans(
    skip: number = 0,
    limit: number,
    sortBy?: string,
    sortOrder?: number,
    searchTerm?: string
  ): Promise<any> {
    return this.get(baseUrl + `plan`, {
      // params: { skip, limit, searchTerm, sortBy, sortOrder },
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async getOverview(): Promise<any> {
    return this.get(baseUrl + `project/overview`, { params: {} })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });
  }

  // Single Project Page
  async getSelectedProject(project_id: string): Promise<any> {
    return this.get(baseUrl + `project/getProject`, {
      params: { project_id: project_id },
    })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });
  }

  async getProjectData(project_id: string): Promise<any> {
    return this.get(baseUrl + `action/getByProjId`, { params: { project_id } })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });
  }

  async getStepDetails(
    stepName: string,
    project_id: string,
    expId: string
  ): Promise<any> {
    return this.get(baseUrl + `action/getStepDetails/${stepName}`, {
      params: { project_id, exp_id: expId },
    })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });
  }

  // OTHERS
  async getCSVData(
    skip: number = 0,
    limit: number,
    sortBy: string,
    sortOrder: number
  ): Promise<any> {
    return this.get(baseUrl + `project/getCsv`, {
      params: { skip, limit, sortBy, sortOrder },
    })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });
  }
}

export const apiAdapter = new ApiAdapter();
