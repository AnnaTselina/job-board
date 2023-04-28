import Logo from "../logo";
import NavBar from "../navbar";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={`${styles.header} centered`}>
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
