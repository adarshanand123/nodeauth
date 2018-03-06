// Compiled using marko@4.9.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/nodeauth$0.0.0/views/components/header-tag.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_classAttr = marko_helpers.ca;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<nav class=\"navbar navbar-expand-md navbar-light fixed-top\" style=\"background-color: #e3f2fd;\"><a class=\"navbar-brand\" href=\"#\">NodeAuth</a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\"><ul class=\"navbar-nav mr-auto\">");

  if (input.user) {
    out.w("<li" +
      marko_classAttr({
        "nav-item": true,
        active: input.title === "members"
      }) +
      "><a class=\"nav-link\" href=\"/\">Members<span class=\"sr-only\">(current)</span></a></li>");
  }

  if (!input.user) {
    out.w("<li" +
      marko_classAttr({
        "nav-item": true,
        active: input.title === "register"
      }) +
      "><a class=\"nav-link\" href=\"/users/register\">Register</a></li>");
  }

  if (!input.user) {
    out.w("<li" +
      marko_classAttr({
        "nav-item": true,
        active: input.title === "login"
      }) +
      "><a class=\"nav-link\" href=\"/users/login\">Log In</a></li>");
  }

  out.w("</ul>");

  if (input.user) {
    out.w("<ul class=\"navbar-nav \" style=\"float:right\"><li" +
      marko_classAttr({
        "nav-item": true,
        active: input.title === "logout"
      }) +
      "><a class=\"nav-link\" href=\"/users/logout\">Log Out</a></li></ul>");
  }

  out.w("</div></nav>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/nodeauth$0.0.0/views/components/header-tag.marko"
  };
