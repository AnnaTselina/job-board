import { VacanciesParamsType } from "@/types";
import axios from "axios";

const URL_PATHS = {
  vacancies: "/vacancies",
};

const DEFAULT_PAGE_SIZE = 4;
const DEFAULT_PAGE = 1;

export const getVacancies = ({ count, page }: VacanciesParamsType) => {
  let url = `${process.env.API_HOST}${URL_PATHS.vacancies}/?`;

  const parameters = [
    `count=${count || DEFAULT_PAGE_SIZE}`,
    `page=${page || DEFAULT_PAGE}`,
  ];

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