import { Container } from "@mantine/core";
import Header from "../header";

const MainLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <Container
        bg="grey.1"
        maw="unset"
        pt={40}
        pb={44}
        mih="calc(100vh - 84px)"
      >
        <div className="centered">{children}</div>
      </Container>
    </>
  );
};

export default MainLayout;
