type SearchBarPropsType = {
  onSearchClick: (keyword: string) => void;
};

const SearchBar = ({ onSearchClick }: SearchBarPropsType) => {
  return (
    <button
      onClick={() => {
        onSearchClick("хранитель");
      }}
    >
      Click
    </button>
  );
};

export default SearchBar;
