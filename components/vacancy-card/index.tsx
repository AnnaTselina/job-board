import { URL_PATHS } from "@/helpers/constants";
import { VacancyType } from "@/types";
import { Card, Text, Group, Indicator, ActionIcon } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const VacancyCard = ({ vacancy }: { vacancy: VacancyType }) => {
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

  return (
    <Card padding="md" radius="md" withBorder>
      <Group position="apart">
        <Text
          component={Link}
          href={`${URL_PATHS.vacancies}/${vacancy.id}`}
          variant="heading"
        >
          {vacancy.profession}
        </Text>
        <ActionIcon variant="transparent">
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
      <Group spacing="xs">
        <Image
          src="/icons/location.svg"
          alt="location"
          width={16}
          height={19}
        />
        <Text>{vacancy.town.title}</Text>
      </Group>
    </Card>
  );
};

export default VacancyCard;
