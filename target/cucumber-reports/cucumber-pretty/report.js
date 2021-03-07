$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("flight.feature");
formatter.feature({
  "line": 1,
  "name": "Flights booking and search",
  "description": "",
  "id": "flights-booking-and-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11502436400,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Car booking test",
  "description": "",
  "id": "flights-booking-and-search;car-booking-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I Navigate to \"Contact\" Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I fill the page with following data",
  "rows": [
    {
      "cells": [
        "First Name",
        "Email",
        "Company Name",
        "Phone Number"
      ],
      "line": 6
    },
    {
      "cells": [
        "1",
        "2",
        "3",
        "4"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select \"Australia\" from dropdown \"Country\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \"Digital Asset Management\" from dropdown \"Product Package\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I check the checkbox \"Terms And Conditions\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
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
  "duration": 1995820100,
  "status": "passed"
});
formatter.match({
  "location": "ActionSteps.i_fill_the_page_with_following_data(DataTable)"
});
formatter.result({
  "duration": 1589610600,
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
  "duration": 436688800,
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
  "duration": 405773500,
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
  "duration": 322097300,
  "status": "passed"
});
formatter.match({
  "location": "ActionSteps.i_take_the_screenshot()"
});
formatter.result({
  "duration": 705851300,
  "status": "passed"
});
formatter.after({
  "duration": 747118700,
  "status": "passed"
});
});