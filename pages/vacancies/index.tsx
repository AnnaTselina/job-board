import SearchBar from "@/components/search-bar";
import VacanciesList from "@/components/vacancies-list";
import { getVacancies } from "@/requests";
import { VacancyType } from "@/types";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

const Vacancies = ({ vacancies }: { vacancies: VacancyType[] }) => {
  const router = useRouter();

  const onSearchClick = (keyword: string) => {
    router.push({
      pathname: router.route,
      query: { ...router.query, keyword },
    });
  };

  return (
    <div className="centered">
      <SearchBar onSearchClick={onSearchClick} />
      <VacanciesList vacancies={vacancies} />
    </div>
  );
};

export default Vacancies;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await getVacancies({ ...query });

  const { data: { objects = [] } = {} } = response;

  return {
    props: {
      vacancies: objects,
    },
  };
};
