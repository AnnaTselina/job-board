import SearchBar from "@/components/search-bar";
import VacanciesList from "@/components/vacancies-list";
import { getVacancies } from "@/requests";
import { VacancyType } from "@/types";
import { GetServerSideProps } from "next";
import Head from "next/head";
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
    <>
      <Head>
        <title>Вакансии</title>
      </Head>
      <SearchBar
        onSearchClick={onSearchClick}
        intialValue={
          Array.isArray(router.query.keyword)
            ? router.query.keyword.join("")
            : router.query.keyword
        }
      />
      <VacanciesList vacancies={vacancies} />
    </>
  );
};

export default Vacancies;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query,
    req: {
      cookies: { access_token },
    },
  } = context;

  const response = await getVacancies(
    {
      ...query,
      count: DEFAULT_PAGE_SIZE,
      page: Number(query.page) || 0,
    },
    access_token
  );

  const data = await response.json();
  const { objects = [] } = data;

  return {
    props: {
      vacancies: objects,
    },
  };
};
