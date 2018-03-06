// Compiled using marko@4.9.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodeauth$0.0.0/views/pages/register.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    error_tag_template = marko_loadTemplate(require.resolve("../components/error-tag.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    error_tag_tag = marko_loadTag(error_tag_template),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  error_tag_tag({
      errorData: input.errorData
    }, out, __component, "0");

  var renderData = input.reRenderData;

  out.w("<form method=\"post\" action=\"/users/register\"><div class=\"form-group\"><label for=\"name\">Name</label><input type=\"text\" name=\"name\" class=\"form-control\" id=\"name\"" +
    marko_attr("value", renderData && renderData.name) +
    "></div><div class=\"form-group\"><label for=\"email\">Email</label><input type=\"email\" name=\"email\" class=\"form-control\" id=\"email\"" +
    marko_attr("value", renderData && renderData.email) +
    "></div><div class=\"form-group\"><label for=\"username\">Username</label><input type=\"text\" name=\"username\" class=\"form-control\" id=\"username\"" +
    marko_attr("value", renderData && renderData.username) +
    "></div><div class=\"form-group\"><label for=\"password\">Password</label><input type=\"password\" name=\"password\" class=\"form-control\" id=\"password\"></div><div class=\"form-group\"><label for=\"cnfpassword\">Confirm Password</label><input type=\"password\" name=\"cnfpassword\" class=\"form-control\" id=\"cnfpassword\"></div><div class=\"form-group\"><label for=\"profImage\">Profile Image</label><input type=\"file\" name=\"profImage\" class=\"form-control\" id=\"profImage\"></div><button type=\"submit\" class=\"btn btn-default\">Registe</button></form>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodeauth$0.0.0/views/pages/register.marko",
    tags: [
      "../components/error-tag.marko"
    ]
  };
