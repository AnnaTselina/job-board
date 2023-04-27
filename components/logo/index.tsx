import Image from "next/image";
import { Text } from "@mantine/core";
import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src="/logo.svg" width={30} height={30} alt="jobored" />
      <Text
        sx={{
          fontFamily: "Poppins",
          fontSize: "24px",
          lineHeight: "36px",
          marginLeft: "8px",
        }}
      >
        Jobored
      </Text>
    </div>
  );
};

export default Logo;
