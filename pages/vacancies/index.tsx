import Filters from "@/components/filters";
import SearchBar from "@/components/search-bar";
import VacanciesList from "@/components/vacancies-list";
import { parseHeader } from "@/helpers/parse-header";
import vacanciesAPI from "@/requests";
import { CatalogueType, VacancyType } from "@/types";
import { Container, Group } from "@mantine/core";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

const DEFAULT_PAGE_SIZE = 4;

const Vacancies = ({
  vacancies,
  catalogues,
}: {
  vacancies: VacancyType[];
  catalogues: CatalogueType[];
}) => {
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
  const onChangeCatalogue = (id: string) => {
    // updateRoute({ catalogues: id });
  };

  return (
    <>
      <Head>
        <title>Вакансии</title>
      </Head>
      <Group align="start" position="apart">
        <Filters
          catalogues={catalogues}
          onChangeCatalogue={onChangeCatalogue}
          catalogueInitialValue={
            Array.isArray(router.query.catalogues)
              ? router.query.catalogues.join("")
              : router.query.catalogues
          }
        />
        <Container m={0} p={0} maw={773} w="100%">
          <SearchBar
            onSearchClick={onSearchClick}
            intialValue={
              Array.isArray(router.query.keyword)
                ? router.query.keyword.join("")
                : router.query.keyword
            }
          />
          <VacanciesList vacancies={vacancies} />
        </Container>
      </Group>
    </>
  );
};

export default Vacancies;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { query, req, res } = context;

    let access_token = req.cookies.access_token;

    if (!access_token) {
      access_token = parseHeader(res.req.headers["set-cookie"]);
    }

    //TODO: use Promise.allsettled()

    const vacanciesResponse = await vacanciesAPI.getVacancies(
      {
        ...query,
        count: DEFAULT_PAGE_SIZE,
        page: Number(query.page) || 0,
      },
      access_token
    );

    const vacanciesData = await vacanciesResponse.json();
    const { objects = [] } = vacanciesData;

    if (!objects.length) {
      throw Error();
    }

    const cataloguesResponse = await vacanciesAPI.getCatalogues(access_token);
    const cataloguesData = await cataloguesResponse.json();

    return {
      props: {
        vacancies: objects,
        catalogues: cataloguesData,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
