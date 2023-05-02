import { URL_PATHS } from "@/helpers/constants";
import { VacanciesParamsType } from "@/types";
import axios from "axios";

export const getVacancies = ({ count, page, keyword }: VacanciesParamsType) => {
  let url = `${process.env.API_HOST}${URL_PATHS.vacancies}/?`;

  const parameters = [`published=1`];

  if (typeof count === "number") {
    parameters.push(`count=${count}`);
  }

  if (keyword) {
    parameters.push(`keyword=${keyword}`);
  }

  if (typeof page === "number") {
    parameters.push(`page=${page}`);
  }

  url += parameters.join("&");

  return axios({
    method: "get",
    url,
    headers: {
      "x-secret-key": process.env.X_SECRET_KEY,
      "x-api-app-id": process.env.X_API_APP_ID,
    },
  });
};

export const getVacancy = (id: string) => {
  let url = `${process.env.API_HOST}${URL_PATHS.vacancies}/${id}`;

  return axios({
    method: "get",
    url,
    headers: {
      "x-secret-key": process.env.X_SECRET_KEY,
      "x-api-app-id": process.env.X_API_APP_ID,
    },
  });
};
