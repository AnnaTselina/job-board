import { MantineThemeOverride } from "@mantine/core";

export const myTheme: MantineThemeOverride = {
  fontFamily: "Inter, sans-serif",
  colors: {
    grey: [
      "#FFFFFF",
      "#F5F5F6",
      "#EAEBED",
      "#D5D6DC",
      "#ACADB9",
      "#7B7C88",
      "#232134",
    ],
    blue: ["#5E96FC", "#5E96FC", "#92C1FF", "#B7D6FF", "#C9E0FF", "#DEECFF"],
  },
  components: {
    Anchor: {
      styles: (theme) => ({
        root: {
          fontSize: "16px",
          lineHeight: "20px",
          textTransform: "capitalize",
          display: "inline-block",
          padding: "0 30px",
          ...theme.fn.hover({ textDecoration: "none" }),
        },
      }),
      variants: {
        default: (theme) => ({
          root: {
            fontWeight: 400,
            color: theme.colors.grey[6],
          },
        }),
        active: (theme) => ({
          root: {
            fontWeight: 500,
            color: theme.colors.blue[0],
          },
        }),
      },
    },
  },
};
