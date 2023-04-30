import { URL_PATHS } from "@/helpers/constants";
import { VacanciesParamsType } from "@/types";
import axios from "axios";

const DEFAULT_PAGE_SIZE = 4;
const DEFAULT_PAGE = 1;

export const getVacancies = ({ count, page, keyword }: VacanciesParamsType) => {
  let url = `${process.env.API_HOST}${URL_PATHS.vacancies}/?`;

  const parameters = [
    `count=${count || DEFAULT_PAGE_SIZE}`,
    `page=${page || DEFAULT_PAGE}`,
    `published=1`,
  ];

  if (keyword) {
    parameters.push(`keyword=${keyword}`);
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
