import { Button, Card, Group, Title } from "@mantine/core";
import CloseButtunSvg from "/public/icons/close.svg";
import CatalogueFilter, { CatalogueFilterProps } from "./catalogue-filter";

type FilterProps = CatalogueFilterProps;

const Filters = (props: FilterProps) => {
  return (
    <Card p={20} radius="md" maw={315} w="100%" sx={{ overflow: "visible" }}>
      <Group p={0} mb="32px" position="apart">
        <Title order={2} variant="groupHeading">
          Фильтры
        </Title>
        <Button
          rightIcon={<CloseButtunSvg />}
          variant="transparent"
          compact={true}
        >
          Сбросить все
        </Button>
      </Group>
      <CatalogueFilter
        catalogues={props.catalogues}
        onChangeCatalogue={props.onChangeCatalogue}
        catalogueInitialValue={props.catalogueInitialValue}
      />
    </Card>
  );
};

export default Filters;
