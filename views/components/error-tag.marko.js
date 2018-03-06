// Compiled using marko@4.9.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodeauth$0.0.0/views/components/error-tag.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_forEachProp = require("marko/src/runtime/helper-forEachProperty"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  marko_forEachProp(input.errorData, function(error_name, error_value) {
    out.w("<ul><li>" +
      marko_escapeXml(error_value.msg) +
      "</li></ul>");
  });
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodeauth$0.0.0/views/components/error-tag.marko"
  };
