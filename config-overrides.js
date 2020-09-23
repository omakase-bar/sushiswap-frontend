const { override, addWebpackModuleRule } = require("customize-cra");
const MangleCssClassPlugin = require("mangle-css-class-webpack-plugin");

const addMyPlugin = (config) => {
  config.plugins.push(
    new MangleCssClassPlugin({
      classNameRegExp:
        "((hover|focus|active|disabled|visited|first|last|odd|even|group-hover|focus-within|xs|sm|md|lg|xl)[\\\\]*:)*sushi-[a-zA-Z0-9_-]*([\\\\]*/[0-9]*)?",
      ignorePrefixRegExp:
        "((hover|focus|active|disabled|visited|first|last|odd|even|group-hover|focus-within|xs|sm|md||lg|xl)[\\\\]*:)*",
      log: true,
    })
  );
  return config;
};

module.exports = override(
  addMyPlugin
);
