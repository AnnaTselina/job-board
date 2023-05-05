import { CatalogueType } from "@/types";
import { Select } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";
import IconDownSvg from "/public/icons/down.svg";

export type CatalogueFilterProps = {
  catalogues: CatalogueType[];
  onChangeCatalogue: (id: string) => void;
  catalogueInitialValue?: string;
};

const CatalogueFilter = (props: CatalogueFilterProps) => {
  const { catalogues, onChangeCatalogue, catalogueInitialValue } = props;

  const { ref, focused } = useFocusWithin();

  return (
    <Select
      ref={ref}
      label="Отрасль"
      placeholder="Выберите отрасль"
      rightSection={<IconDownSvg />}
      rightSectionWidth={42}
      styles={{ rightSection: { pointerEvents: "none" } }}
      data={catalogues.map((catalogue) => ({
        value: catalogue.key.toString(),
        label: catalogue.title,
      }))}
      defaultValue={catalogueInitialValue}
      dropdownPosition="flip"
      onChange={(value) => {
        if (value) {
          onChangeCatalogue(value);
        }
      }}
      sx={(theme) =>
        focused
          ? {
              ".mantine-Select-rightSection": {
                svg: {
                  stroke: theme.colors.blue[1],
                  transform: "rotate(180deg)",
                },
              },
            }
          : {}
      }
    />
  );
};

export default CatalogueFilter;
