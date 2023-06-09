import Link from "next/link";
import { Anchor } from "@mantine/core";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const paths = [
  { id: "path-1", href: "/vacancies", name: "поиск вакансий" },
  { id: "path-2", href: "/saved", name: "избранное" },
];

const NavBar = () => {
  const { pathname } = useRouter();

  return (
    <div className={styles.nav}>
      {paths.map((item) => (
        <Anchor
          key={item.id}
          component={Link}
          href={item.href}
          variant={pathname.includes(item.href) ? "active" : "default"}
        >
          {item.name}
        </Anchor>
      ))}
    </div>
  );
};

export default NavBar;
