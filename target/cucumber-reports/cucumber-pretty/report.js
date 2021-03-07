$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ContactFormFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Contact form",
  "description": "",
  "id": "contact-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12900973800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Contact form screenshot",
  "description": "",
  "id": "contact-form;contact-form-screenshot",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I Navigate to \"Contact\" Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I fill the page with following data",
  "rows": [
    {
      "cells": [
        "First Name",
        "Email",
        "Company Name",
        "Phone Number"
      ],
      "line": 7
    },
    {
      "cells": [
        "1",
        "2",
        "3",
        "4"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select \"Australia\" from dropdown \"Country\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select \"Digital Asset Management\" from dropdown \"Product Package\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I check the checkbox \"Terms And Conditions\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I take the screenshot",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Contact",
      "offset": 15
    }
  ],
  "location": "ActionSteps.i_Navigate_to_Page(String)"
});
formatter.result({
  "duration": 4279235700,
  "status": "passed"
});
formatter.match({
  "location": "ActionSteps.i_fill_the_page_with_following_data(DataTable)"
});
formatter.result({
  "duration": 1226082600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 10
    },
    {
      "val": "Country",
      "offset": 36
    }
  ],
  "location": "ActionSteps.i_select_from_dropdown(String,String)"
});
formatter.result({
  "duration": 416756000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital Asset Management",
      "offset": 10
    },
    {
      "val": "Product Package",
      "offset": 51
    }
  ],
  "location": "ActionSteps.i_select_from_dropdown(String,String)"
});
formatter.result({
  "duration": 348823400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Terms And Conditions",
      "offset": 22
    }
  ],
  "location": "ActionSteps.i_check_the_checkbox(String)"
});
formatter.result({
  "duration": 452529800,
  "status": "passed"
});
formatter.match({
  "location": "ActionSteps.i_take_the_screenshot()"
});
formatter.result({
  "duration": 583260400,
  "status": "passed"
});
formatter.after({
  "duration": 799075500,
  "status": "passed"
});
});