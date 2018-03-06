// Compiled using marko@4.9.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodeauth$0.0.0/views/pages/login.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<form method=\"post\" action=\"/users/login\"><div class=\"form-group\"><label for=\"username\">Username</label><input type=\"username\" name=\"username\" class=\"form-control\" id=\"username\"></div><div class=\"form-group\"><label for=\"password\">Password</label><input type=\"password\" name=\"password\" class=\"form-control\" id=\"password\"></div><button type=\"submit\" class=\"btn btn-default\">Submit</button></form>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodeauth$0.0.0/views/pages/login.marko"
  };
