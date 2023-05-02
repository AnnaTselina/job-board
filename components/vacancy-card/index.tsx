import { URL_PATHS } from "@/helpers/constants";
import { VacancyType } from "@/types";
import { Card, Text, Group, Indicator, ActionIcon, Title } from "@mantine/core";
import Image from "next/image";
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
        {showAsLink ? (
          <Text variant="heading" maw={"90%"}>
            {vacancy.profession}
          </Text>
        ) : (
          <Title size={28} lh="33.89px" mb={16} maw={"90%"}>
            {vacancy.profession}
          </Title>
        )}
        <ActionIcon variant="transparent" onClick={onAddToSaved}>
          <Image src="/icons/star.svg" alt="star" width={22} height={22} />
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
        <Image
          src="/icons/location.svg"
          alt="location"
          width={16}
          height={19}
        />
        <Text sx={{ marginLeft: "12px" }}>{vacancy.town.title}</Text>
      </Group>
    </Card>
  );
};

export default VacancyCard;
