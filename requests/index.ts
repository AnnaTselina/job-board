import { URL_PATHS } from "@/helpers/constants";
import { VacanciesParamsType, VacanciesParamsTypeParsed } from "@/types";

const requestHeaders: HeadersInit = new Headers();
requestHeaders.set("x-secret-key", `${process.env.X_SECRET_KEY}`);
requestHeaders.set("x-api-app-id", `${process.env.CLIENT_SECRET}`);

export const getVacancies = (
  { count, page, keyword }: VacanciesParamsType,
  token?: string
) => {
  const parameters: VacanciesParamsTypeParsed = { published: "1" };

  //TODO: move to helpers

  if (typeof count === "number") {
    parameters.count = count.toString();
  }

  if (keyword) {
    parameters.keyword = keyword;
  }

  if (typeof page === "number") {
    parameters.page = page.toString();
  }

  let url = `${process.env.API_HOST}${
    URL_PATHS.vacancies
  }/?${new URLSearchParams(parameters)}`;

  if (token) {
    requestHeaders.set("Authorization", `Bearer ${token}`);
  }

  return fetch(url, {
    method: "GET",
    headers: requestHeaders,
  });
};

export const getVacancy = (id: string, token?: string) => {
  let url = `${process.env.API_HOST}${URL_PATHS.vacancies}/${id}`;

  if (token) {
    requestHeaders.set("Authorization", `Bearer ${token}`);
  }

  return fetch(url, {
    method: "GET",
    headers: requestHeaders,
  });
};

export const getAccessToken = () => {
  const params = {
    login: `${process.env.AUTHORIZATION_LOGIN}`,
    password: `${process.env.AUTHORIZATION_PASSWORD}`,
    client_id: `${process.env.AUTHORIZATION_CLIENT_ID}`,
    client_secret: `${process.env.CLIENT_SECRET}`,
    hr: "0",
  };

  let url = `${process.env.API_HOST}/oauth2/password/?${new URLSearchParams(
    params
  )}`;

  return fetch(url, {
    method: "GET",
    headers: requestHeaders,
  });
};
