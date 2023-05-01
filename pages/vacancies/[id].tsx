import { getVacancies, getVacancy } from "@/requests";
import { VacancyType, IVacancyParams } from "@/types";
import { GetStaticProps } from "next";

const Vacancy = ({ vacancy }: { vacancy: VacancyType }) => {
  return <h1>Vacancy page</h1>;
};

export default Vacancy;

export const getStaticPaths = async () => {
  const response = await getVacancies({});
  const { data: { objects = [] } = {} } = response;

  const paths = objects.map(({ id }: { id: string }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IVacancyParams;
  const response = await getVacancy(id);

  const { data } = response;

  return {
    props: {
      vacancy: data,
    },
  };
};
