import { Button, TextInput } from "@mantine/core";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type SearchBarPropsType = {
  onSearchClick: (keyword: string) => void;
  intialValue?: string;
};

const SearchBar = ({ intialValue = "", onSearchClick }: SearchBarPropsType) => {
  const [value, setValue] = useState(intialValue);
  const ref = useRef<HTMLInputElement>(null);

  const handleSearch = useCallback(() => {
    onSearchClick(value);
  }, [value]);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.fontSize = "14px";
      ref.current.style.height = "48px";
      ref.current.style.paddingLeft = "36px";
    }
  }, []);

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
      icon={
        <Image src="/icons/search.svg" alt="search" width={12} height={12} />
      }
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