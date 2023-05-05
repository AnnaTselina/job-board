import { ParsedUrlQuery } from "querystring";

export type VacanciesParamsType = {
  count?: number;
  page?: number;
  keyword?: string;
  catalogues?: string;
};

export type VacanciesParamsTypeParsed = {
  count?: string;
  page?: string;
  keyword?: string;
  published: string;
  catalogues?: string;
};

export type VacancyType = {
  id: string;
  profession: string;
  town: {
    title: string;
  };
  type_of_work: {
    title: string;
  };
  payment_to?: number;
  payment_from?: number;
  currency: string;
  vacancyRichText?: string;
};

export interface IVacancyParams extends ParsedUrlQuery {
  id: string;
}

export type CatalogueType = {
  key: number;
  title: string;
};
