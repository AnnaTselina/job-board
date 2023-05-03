import {
  ActionIcon,
  Button,
  Card,
  CloseButton,
  Group,
  Select,
  Title,
} from "@mantine/core";
import Image from "next/image";

const Filters = () => {
  return (
    <Card p={20} radius="md" maw={315} w="100%" sx={{ overflow: "visible" }}>
      <Group p={0} mb="32px" position="apart">
        <Title order={2} variant="groupHeading">
          Фильтры
        </Title>
        <Button
          rightIcon={
            <Image src="icons/close.svg" alt="close" width={16} height={16} />
          }
          variant="white"
          fz={14}
          fw={500}
          p={0}
          color="grey.4"
          compact={true}
          sx={{
            "span:last-child": {
              marginLeft: "6px",
            },
          }}
        >
          Сбросить все
        </Button>
      </Group>
      <Select
        label="Отрасль"
        placeholder="Выберите отрасль"
        rightSection={
          <Image src="icons/down.svg" alt="down" width={24} height={24} />
        }
        rightSectionWidth={42}
        styles={{ rightSection: { pointerEvents: "none" } }}
        data={[
          "React",
          "Angular",
          "Svelte",
          "Vue",
          "React",
          "Angular",
          "Svelte",
          "Vue",
        ]}
        dropdownPosition="flip"
      />
    </Card>
  );
};

export default Filters;
