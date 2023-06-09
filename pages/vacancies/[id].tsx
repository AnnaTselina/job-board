import VacancyCard from "@/components/vacancy-card";
import vacanciesAPI from "@/requests";
import { VacancyType, IVacancyParams } from "@/types";
import { Card, Container } from "@mantine/core";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import Head from "next/head";

const Vacancy = ({ vacancy }: { vacancy: VacancyType }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading.....</div>;
  }

  return (
    <>
      <Head>
        <title>{vacancy.profession}</title>
      </Head>
      <Container p={0}>
        <VacancyCard vacancy={vacancy} showAsLink={false} />
        {!!vacancy.vacancyRichText && (
          <Card padding="md" radius="md">
            {parse(vacancy.vacancyRichText)}
          </Card>
        )}
      </Container>
    </>
  );
};

export default Vacancy;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const {
      params,
      req: {
        cookies: { access_token },
      },
    } = context;

    const { id } = params as IVacancyParams;
    const response = await vacanciesAPI.getVacancy(id, access_token);
    const data = await response.json();

    if (!data) {
      throw Error();
    }

    return {
      props: {
        vacancy: data,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
