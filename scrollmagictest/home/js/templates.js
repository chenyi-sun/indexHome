this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["App"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loading\">\r\n    <a>\r\n        give me some allowance\r\n    </a>\r\n</div>";
},"useData":true});
this["MyApp"]["templates"]["Head"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<link href=\"css/head.css\" rel=\"stylesheet\" type=\"text/css\"/>\r\n<div class=\"head\">\r\n    \r\n</div>";
},"useData":true});
this["MyApp"]["templates"]["Loading"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<link href=\"css/loading.css\" rel=\"stylesheet\" type=\"text/css\"/>\r\n<div class=\"loading\">\r\n    <div class=\"loading_box\">\r\n        <div class=\"text\">20%</div>\r\n    </div>\r\n    <div class=\"loading_box_copy\">\r\n        <div class=\"svg-box\" style=\"position:absolute; top: 6px;left: -10px;\">\r\n            <?xml version=\"1.0\" standalone=\"no\"?>\r\n            <!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \r\n            \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\r\n\r\n            <svg width=\"100%\" height=\"100%\" version=\"1.1\"\r\n            xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 80 80\">\r\n            <polygon points=\"40, 69.282, 0, 0, 80 ,0\"\r\n                style=\"fill:rgba(0,0,0,0);\r\n                stroke:#000000;stroke-width:1\"/>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";
},"useData":true});