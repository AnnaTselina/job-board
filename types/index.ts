export type VacanciesParamsType = {
  count?: number;
  page?: number;
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
  payment_to: number | null;
  payment_from: number | null;
  currency: string;
};
