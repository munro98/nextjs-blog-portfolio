import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("rgb(213, 214, 219)", "#202023")(props),
    },
  }),
};
const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#2d6aed", "#ff63c3")(props),

      textUnderlineOffset: 3,
      borderTopLeftRadius: "10",
      borderTopRightRadius: "10",
      borderBottomRightRadius: "10",
      borderBottomLeftRadius: "10",
    }),
  },
  NextLink: {
    textDecoration: "underline",
  },
};
const fonts = {
  heading: "'Titillium Web'",
};
const colors = {};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});

export default theme;
