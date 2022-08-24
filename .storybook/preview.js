export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "grey",
    values: [
      {
        name: "grey",
        value: "#cacaca",
      },
      {
        name: "facebook",
        value: "#3b5998",
      },
    ],
  },
};
