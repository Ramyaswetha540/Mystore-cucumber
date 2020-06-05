$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/14388/eclipse-workspace/Mystore_Cucumber/src/main/java/com/features/signin.feature");
formatter.feature({
  "line": 1,
  "name": "Mystore Signin Test",
  "description": "",
  "id": "mystore-signin-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Create new account",
  "description": "",
  "id": "mystore-signin-test;create-new-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user opens browser and user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on siginlink",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user enter emailaddress in create new account",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on create an account",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enter following details",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Email",
        "Password",
        "firstname",
        "lastname",
        "Address",
        "City",
        "Zip",
        "Mobilenum",
        "Alias"
      ],
      "line": 9
    },
    {
      "cells": [
        "micky",
        "mouse",
        "bluesky@gmail.com",
        "micky",
        "minne",
        "mouse",
        "1850",
        "Edison",
        "08803",
        "7345567892",
        "Newyork"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on registration button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signinstepdefination.user_opens_browser_and_user_is_on_homepage()"
});
formatter.result({
  "duration": 10638484400,
  "status": "passed"
});
formatter.match({
  "location": "Signinstepdefination.user_clicks_on_siginlink()"
});
formatter.result({
  "duration": 789620600,
  "status": "passed"
});
formatter.match({
  "location": "Signinstepdefination.user_enter_emailaddress_in_create_new_account()"
});
formatter.result({
  "duration": 375595400,
  "status": "passed"
});
formatter.match({
  "location": "Signinstepdefination.user_clicks_on_create_an_account()"
});
formatter.result({
  "duration": 40139400,
  "status": "passed"
});
formatter.match({
  "location": "Signinstepdefination.user_enter_following_details(DataTable)"
});
formatter.result({
  "duration": 3326659000,
  "status": "passed"
});
formatter.match({
  "location": "Signinstepdefination.user_clicks_on_registration_button()"
});
formatter.result({
  "duration": 1633101500,
  "status": "passed"
});
});