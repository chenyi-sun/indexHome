this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["App"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loading\">\r\n    <a>\r\n        give me some allowance\r\n    </a>\r\n</div>";
},"useData":true});
this["MyApp"]["templates"]["Loading"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<link href=\"css/loading.css\" rel=\"stylesheet\" type=\"text/css\"/>\r\n<div class=\"loading\">\r\n    <div class=\"loading_box\"></div>\r\n    <a>\r\n        give me some allowance\r\n    </a>\r\n</div>";
},"useData":true});