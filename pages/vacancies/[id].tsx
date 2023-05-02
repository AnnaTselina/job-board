import VacancyCard from "@/components/vacancy-card";
import { getVacancies, getVacancy } from "@/requests";
import { VacancyType, IVacancyParams } from "@/types";
import { Card, Container, Title } from "@mantine/core";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import parse, { Element, domToReact } from "html-react-parser";

const Vacancy = ({ vacancy }: { vacancy: VacancyType }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading.....</div>;
  }

  return (
    <Container maw={773} p={0}>
      <VacancyCard vacancy={vacancy} showAsLink={false} />
      {!!vacancy.vacancyRichText && (
        <Card padding="md" radius="md">
          {parse(vacancy.vacancyRichText)}
        </Card>
      )}
    </Container>
  );
};

export default Vacancy;

// Из документации:
// Максимальное количество сущностей, выдаваемых API равно 500.
// Максимальное число результатов - 100 (в одном запросе).
//
// Делаем 5 запросов (500/100) для получение id сущностей для генерации страниц вакансий (возможно наиболее вероятны в выдаче).
// В случае если страница не была создана при билде, страница генериться в рантайме и помещается в /pages.
// Страницы перегенерируются 1 раз день, либо добавляются по запросу.

// From documentation:
// The maximum number of entities returned by the API is 500.
// The maximum number of results is 100 (in one request).
//
// Making 5 requests (500/100) to get entity ids to generate vacancy pages (probably the most likely to be in the search results).
// If the page was not created during the build, the page is generated at runtime and put in /pages.
// Pages are regenerated once a day, or added upon request.

//TODO: refactor
export const getStaticPaths = async () => {
  const paths = [];

  for (let i = 1; i <= 5; i++) {
    const response = await getVacancies({ page: i, count: 100 });
    const { data: { objects = [] } = {} } = response;

    const newPaths = objects.map(({ id }: { id: string }) => ({
      params: { id: id.toString() },
    }));

    paths.push(...newPaths);
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { id } = context.params as IVacancyParams;
    const response = await getVacancy(id);

    const { data } = response;

    if (!data) {
      throw Error();
    }

    return {
      props: {
        vacancy: data,
        revalidate: 86400, //every day
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};
