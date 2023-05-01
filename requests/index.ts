import { URL_PATHS } from "@/helpers/constants";
import { VacanciesParamsType } from "@/types";
import axios from "axios";

export const getVacancies = ({ count, page, keyword }: VacanciesParamsType) => {
  let url = `${process.env.API_HOST}${URL_PATHS.vacancies}/?`;

  const parameters = [`published=1`];

  //TODO: add typechecking

  if (count) {
    parameters.push(`count=${count}`);
  }

  if (keyword) {
    parameters.push(`keyword=${keyword}`);
  }

  if (page) {
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
