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
    blue: ["#3B7CD3", "#5E96FC", "#92C1FF", "#B7D6FF", "#C9E0FF", "#DEECFF"],
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
            color: theme.colors.blue[1],
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
            backgroundColor: theme.colors.blue[1],
            padding: "4px 20px",
            color: theme.colors.grey[0],
            borderRadius: "8px",
            fontWeight: 500,

            ":hover": {
              backgroundColor: theme.colors.blue[2],
            },
            ":focus": {
              backgroundColor: theme.colors.blue[0],
            },
          },
        }),
        transparent: (theme) => ({
          root: {
            backgroundColor: "transparent",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: 500,
            color: theme.colors.grey[4],
            padding: 0,

            "span:last-child": {
              marginLeft: "4px",
            },

            ":hover": {
              color: theme.colors.blue[2],
              svg: {
                stroke: theme.colors.blue[2],
              },
            },

            ":focus": {
              color: theme.colors.blue[1],
              svg: {
                stroke: theme.colors.blue[1],
              },
            },
          },
        }),
      },
    },
    TextInput: {
      styles: (theme) => ({
        input: {
          fontSize: "14px",
          lineHeight: "21px",
          height: "48px",
          paddingLeft: "36px",
          borderColor: theme.colors.grey[2],
          ":hover": {
            borderColor: theme.colors.blue[1],
          },
          ":focus": {
            borderColor: theme.colors.blue[1],
            caretColor: theme.colors.blue[1],
          },
        },
      }),
    },
    Container: {
      variants: {
        centered: () => ({
          root: {
            maxWidth: "1120px",
            margin: "0 auto",
            padding: 0,
          },
        }),
      },
    },
    Title: {
      variants: {
        cardHeading: () => ({
          root: {
            fontSize: "28px",
            lineHeight: "33.89px",
            marginBottom: "16px",
          },
        }),
        cardHeadingLink: (theme) => ({
          root: {
            fontSize: "20px",
            lineHeight: "24.2px",
            fontWeight: 600,
            color: theme.colors.blue[1],
            marginBottom: "12.5px",
          },
        }),
        groupHeading: () => ({
          root: {
            fontSize: "20px",
            lineHeight: "20px",
            fontWeight: 600,
          },
        }),
      },
    },
    Select: {
      styles: (theme) => ({
        input: {
          borderRadius: "8px",
          height: "42px",
          borderColor: theme.colors.grey[3],
          ":hover": {
            borderColor: theme.colors.blue[1],
          },
          ":focus": {
            borderColor: theme.colors.blue[1],
          },
        },
        label: {
          fontSize: "16px",
          lineHeight: "19.36px",
          fontWeight: 700,
          marginBottom: "8px",
        },
        dropdown: {
          borderRadius: "8px",
          boxShadow: "none",

          ".mantine-ScrollArea-thumb": {
            backgroundColor: theme.colors.grey[4],
            borderRadius: "20px",
            maxWidth: "4px",
            right: "-2px",
          },
        },
        item: {
          borderRadius: "8px",
          padding: "8px",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "20px",
          whiteSpace: "initial",

          "&[data-hovered]": {
            backgroundColor: theme.colors.blue[5],
          },
          "&[data-selected]": {
            backgroundColor: theme.colors.blue[1],
          },
        },
        itemsWrapper: {
          maxHeight: "188px",
        },
      }),
    },
    ActionIcon: {
      variants: {
        "svg-transition": (theme) => ({
          root: {
            svg: {
              ":hover": {
                stroke: theme.colors.blue[1],
              },
            },
          },
        }),
        "svg-active": (theme) => ({
          root: {
            svg: {
              stroke: theme.colors.blue[1],
              fill: theme.colors.blue[1],
            },
          },
        }),
      },
    },
  },
};
