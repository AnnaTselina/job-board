import { Container, Group } from "@mantine/core";
import Logo from "../logo";
import NavBar from "../navbar";

const Header = () => {
  return (
    <header>
      <Container variant="centered">
        <Group
          align="center"
          p={24}
          sx={{ "> :last-child ": { flexBasis: "70%" } }}
        >
          <Logo />
          <NavBar />
        </Group>
      </Container>
    </header>
  );
};

export default Header;
