import { VacancyType } from "@/types";
import VacancyCard from "../vacancy-card";

const VacanciesList = ({ vacancies }: { vacancies: VacancyType[] }) => {
  return (
    <>
      {vacancies.map((vacancy) => (
        <VacancyCard vacancy={vacancy} key={vacancy.id} />
      ))}
    </>
  );
};

export default VacanciesList;
