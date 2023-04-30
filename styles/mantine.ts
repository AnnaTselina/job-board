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
  spacing: { md: "24px" },
  radius: { md: "12px" },
  lineHeight: "20px",
  components: {
    Anchor: {
      styles: (theme) => ({
        root: {
          fontSize: "16px",
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
    Card: {
      styles: (theme) => ({
        root: {
          border: `1px solid ${theme.colors.grey[2]}`,
          marginBottom: "16px",
        },
      }),
    },
    Text: {
      variants: {
        heading: (theme) => ({
          root: {
            fontSize: "20px",
            lineHeight: "24.2px",
            fontWeight: 600,
            color: theme.colors.blue[0],
            marginBottom: "12.5px",
          },
        }),
        logo: (theme) => ({
          root: {
            fontFamily: "Poppins",
            fontSize: "24px",
            lineHeight: "36px",
            marginLeft: "8px",
          },
        }),
      },
    },
    Button: {
      variants: {
        primary: (theme) => ({
          root: {
            backgroundColor: theme.colors.blue[0],
            padding: "4px 20px",
            color: theme.colors.grey[0],
            borderRadius: "8px",
            fontWeight: 500,
          },
        }),
      },
    },
    TextInput: {
      styles: (theme) => ({
        input: {
          fontSize: "14px",
          height: "48px",
          paddingLeft: "36px",
          borderColor: theme.colors.grey[2],
        },
      }),
    },
  },
};
