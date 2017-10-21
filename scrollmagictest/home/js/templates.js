this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["App"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loading\">\r\n    <a>\r\n        give me some allowance\r\n    </a>\r\n</div>";
},"useData":true});
this["MyApp"]["templates"]["Loading"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<link href=\"css/loading.css\" rel=\"stylesheet\" type=\"text/css\"/>\r\n<div class=\"loading\">\r\n    <div class=\"loading_box\">\r\n        <div class=\"svg-box\">\r\n            <object data=\"css/svg/line2.svg\" style=\"position:absolute; top: 6px;left: -10px;\"\r\n                type=\"image/svg+xml\"\r\n                codebase=\"http://www.adobe.com/svg/viewer/install/\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"useData":true});