import VacanciesList from "@/components/vacancies-list";
import { getVacancies } from "@/requests";
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

const Vacancies = () => {
  return (
    <div>
      <VacanciesList />
    </div>
  );
};

export default Vacancies;
