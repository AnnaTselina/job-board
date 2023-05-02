import { URL_PATHS } from "@/helpers/constants";
import { VacanciesParamsType, VacanciesParamsTypeParsed } from "@/types";

export class JoboaredAPI {
  private defaultHeaders = {
    "x-secret-key": `${process.env.X_SECRET_KEY}`,
    "x-api-app-id": `${process.env.CLIENT_SECRET}`,
  };

  private authParams = {
    login: `${process.env.AUTHORIZATION_LOGIN}`,
    password: `${process.env.AUTHORIZATION_PASSWORD}`,
    client_id: `${process.env.AUTHORIZATION_CLIENT_ID}`,
    client_secret: `${process.env.CLIENT_SECRET}`,
    hr: "0",
  };

  getVacancies(params: VacanciesParamsType, token?: string) {
    const validatedParameters = this.validateSearchParams(params);
    let headers = new Headers(this.defaultHeaders);

    let url = `${process.env.API_HOST}${
      URL_PATHS.vacancies
    }/?${new URLSearchParams(validatedParameters)}`;

    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }

    return fetch(url, {
      method: "GET",
      headers: headers,
    });
  }

  getVacancy(id: string, token?: string) {
    let headers = new Headers(this.defaultHeaders);

    let url = `${process.env.API_HOST}${URL_PATHS.vacancies}/${id}`;

    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }

    return fetch(url, {
      method: "GET",
      headers: headers,
    });
  }

  getAccessToken() {
    let url = `${process.env.API_HOST}/oauth2/password/?${new URLSearchParams(
      this.authParams
    )}`;

    return fetch(url, {
      method: "GET",
      headers: new Headers(this.defaultHeaders),
    });
  }

  validateSearchParams(params: VacanciesParamsType) {
    const { count, page, keyword } = params;

    const validatedParameters: VacanciesParamsTypeParsed = { published: "1" };

    if (typeof count === "number") {
      validatedParameters.count = count.toString();
    }

    if (keyword) {
      validatedParameters.keyword = keyword;
    }

    if (typeof page === "number") {
      validatedParameters.page = page.toString();
    }

    return validatedParameters;
  }
}

const vacanciesAPI = new JoboaredAPI();

export default vacanciesAPI;
