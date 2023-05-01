import SearchBar from "@/components/search-bar";
import VacanciesList from "@/components/vacancies-list";
import { getVacancies } from "@/requests";
import { VacancyType } from "@/types";
import { Container } from "@mantine/core";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

const DEFAULT_PAGE_SIZE = 4;

const Vacancies = ({ vacancies }: { vacancies: VacancyType[] }) => {
  const router = useRouter();

  const updateRoute = (query: { [key: string]: string }) => {
    const newRouteState = {
      pathname: router.route,
      query: { ...router.query, ...query },
    };
    router.push(newRouteState);
  };

  const onSearchClick = (keyword: string) => {
    updateRoute({ keyword });
  };

  return (
    <Container bg="grey.1" maw="unset" pt={40}>
      <div className="centered">
        <SearchBar
          onSearchClick={onSearchClick}
          intialValue={router.query.keyword}
        />
        <VacanciesList vacancies={vacancies} />
      </div>
    </Container>
  );
};

export default Vacancies;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const response = await getVacancies({
    ...query,
    count: DEFAULT_PAGE_SIZE,
    page: Number(query.page) || 1,
  });

  const { data: { objects = [] } = {} } = response;

  return {
    props: {
      vacancies: objects,
    },
  };
};
