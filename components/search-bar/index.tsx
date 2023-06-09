import { Button, TextInput } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import SearchSvg from "public/icons/search.svg";

type SearchBarPropsType = {
  onSearchClick: (keyword: string) => void;
  intialValue?: string;
};

const SearchBar = ({ intialValue = "", onSearchClick }: SearchBarPropsType) => {
  const [value, setValue] = useState(intialValue);
  const ref = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    onSearchClick(value);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.onkeydown = (event) => {
        if (event.key === "Enter") {
          handleSearch();
        }
      };
    }
  }, [handleSearch]);

  return (
    <TextInput
      value={value}
      ref={ref}
      onChange={(event) => setValue(event.currentTarget.value)}
      icon={<SearchSvg />}
      placeholder="Введите название вакансии"
      radius={8}
      size="md"
      mb={16}
      rightSection={
        <Button variant="primary" onClick={handleSearch}>
          Поиск
        </Button>
      }
      rightSectionWidth={104}
    />
  );
};

export default SearchBar;
