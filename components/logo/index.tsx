import { Text } from "@mantine/core";
import styles from "./styles.module.scss";
import LogoSvg from "public/logo.svg";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <LogoSvg />
      <Text variant="logo">Jobored</Text>
    </div>
  );
};

export default Logo;
