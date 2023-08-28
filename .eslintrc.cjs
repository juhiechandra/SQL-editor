module.exports = {
  extends: ["react-app"],
  rules: {},
  overrides: [
    {
      files: ["**/*.js?(x)"],
      rules: {
        // ******** add ignore rules here *********
        "react/no-unescaped-entities": "off",
        "react/display-name": "on",
        "react/prop-types": "on",
      },
    },
  ],
};
