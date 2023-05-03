import { Card, Group, Title } from "@mantine/core";

const Filters = () => {
  return (
    <Card padding="md" radius="md" maw={315} w="100%">
      <Group p={0} mb="32px">
        <Title order={2} variant="groupHeading">
          Фильтры
        </Title>
      </Group>
    </Card>
  );
};

export default Filters;
