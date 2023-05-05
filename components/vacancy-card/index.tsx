import { URL_PATHS } from "@/helpers/constants";
import { VacancyType } from "@/types";
import { Card, Text, Group, Indicator, ActionIcon, Title } from "@mantine/core";
import LocationSvg from "/public/icons/location.svg";
import StarSvg from "/public/icons/star.svg";
import Link from "next/link";

const VacancyCard = ({
  vacancy,
  showAsLink = true,
}: {
  vacancy: VacancyType;
  showAsLink?: boolean;
}) => {
  const getSalary = (vacancy: VacancyType) => {
    const { payment_from, payment_to, currency } = vacancy;

    if (payment_from && payment_to) {
      if (payment_from === payment_to) {
        return `з/п ${payment_from} ${currency}`;
      } else {
        return `з/п ${payment_from} - ${payment_to} ${currency}`;
      }
    } else if (!payment_from && payment_to) {
      return `з/п до ${payment_to} ${currency}`;
    } else if (payment_from && !payment_to) {
      return `з/п от ${payment_from} ${currency}`;
    } else {
      return "";
    }
  };

  const onAddToSaved = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <Card
      padding="md"
      radius="md"
      href={`${URL_PATHS.vacancies}/${vacancy.id}`}
      {...(showAsLink ? { component: Link } : { mb: 20 })}
    >
      <Group position="apart" align="flex-start">
        <Title
          order={1}
          variant={showAsLink ? "cardHeadingLink" : "cardHeading"}
          maw={"90%"}
        >
          {vacancy.profession}
        </Title>
        <ActionIcon variant="svg-transition" onClick={onAddToSaved}>
          <StarSvg />
        </ActionIcon>
      </Group>
      <Group sx={{ marginBottom: "13px" }}>
        {!!(vacancy.payment_from || vacancy.payment_to) && (
          <Indicator position="middle-end" color="grey.5" offset={-12} size={5}>
            <Text weight={600} sx={{ lineHeight: "20px" }}>
              {getSalary(vacancy)}
            </Text>
          </Indicator>
        )}
        <Text>{vacancy.type_of_work.title}</Text>
      </Group>
      <Group spacing={0}>
        <LocationSvg />
        <Text sx={{ marginLeft: "8px" }}>{vacancy.town.title}</Text>
      </Group>
    </Card>
  );
};

export default VacancyCard;
