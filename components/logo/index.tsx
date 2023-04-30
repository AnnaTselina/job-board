import Image from "next/image";
import { Text } from "@mantine/core";
import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src="/logo.svg" width={30} height={30} alt="jobored" />
      <Text variant="logo">Jobored</Text>
    </div>
  );
};

export default Logo;
