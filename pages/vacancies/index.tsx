import VacanciesList from "@/components/vacancies-list";
import { getVacancies } from "@/requests";
import { VacancyType } from "@/types";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await getVacancies({});

  const { data: { objects = [] } = {} } = response;

  return {
    props: {
      vacancies: objects,
    },
  };
};

const Vacancies = ({ vacancies }: { vacancies: VacancyType[] }) => {
  return <VacanciesList vacancies={vacancies} />;
};

export default Vacancies;
