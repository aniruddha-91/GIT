$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Smoke.feature");
formatter.feature({
  "line": 1,
  "name": "Smoke Testing features",
  "description": "",
  "id": "smoke-testing-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "SmokeTest_TC_002",
  "description": "",
  "id": "smoke-testing-features;smoketest-tc-002",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user fills up data for booking flight as \"\u003cfrom\u003e\", \"\u003cto\u003e\", \"\u003cdeparting\u003e\", \"\u003creturning\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user clicks on submit booking button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "application should be navigated to the desired page",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "smoke-testing-features;smoketest-tc-002;",
  "rows": [
    {
      "cells": [
        "from",
        "to",
        "departing",
        "returning"
      ],
      "line": 16,
      "id": "smoke-testing-features;smoketest-tc-002;;1"
    },
    {
      "cells": [
        "Delhi, India (DEL-Indira Gandhi Intl.)",
        "Seattle, WA, United States (SEA-Seattle - Tacoma Intl.)",
        "12-12-2019",
        "29/12/2019"
      ],
      "line": 17,
      "id": "smoke-testing-features;smoketest-tc-002;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 167700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "SmokeTest_TC_002",
  "description": "",
  "id": "smoke-testing-features;smoketest-tc-002;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user fills up data for booking flight as \"Delhi, India (DEL-Indira Gandhi Intl.)\", \"Seattle, WA, United States (SEA-Seattle - Tacoma Intl.)\", \"12-12-2019\", \"29/12/2019\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user clicks on submit booking button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "application should be navigated to the desired page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Delhi, India (DEL-Indira Gandhi Intl.)",
      "offset": 42
    },
    {
      "val": "Seattle, WA, United States (SEA-Seattle - Tacoma Intl.)",
      "offset": 84
    },
    {
      "val": "12-12-2019",
      "offset": 143
    },
    {
      "val": "29/12/2019",
      "offset": 157
    }
  ],
  "location": "SmokeSteps.user_fills_up_data_for_booking_flight_as(String,String,String,String)"
});
formatter.result({
  "duration": 2645944400,
  "error_message": "java.lang.NullPointerException\r\n\tat pages.actions.HomePageActions.bookAFlight(HomePageActions.java:46)\r\n\tat steps.SmokeSteps.user_fills_up_data_for_booking_flight_as(SmokeSteps.java:44)\r\n\tat ✽.When user fills up data for booking flight as \"Delhi, India (DEL-Indira Gandhi Intl.)\", \"Seattle, WA, United States (SEA-Seattle - Tacoma Intl.)\", \"12-12-2019\", \"29/12/2019\"(src/test/resources/features/Smoke.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SmokeSteps.user_clicks_on_submit_booking_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SmokeSteps.application_should_be_navigated_to_the_desired_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 11536400,
  "error_message": "java.lang.NullPointerException\r\n\tat steps.Hooks.takesScreenshot(Hooks.java:31)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:204)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:50)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:138)\r\n\tat org.testng.junit.JUnit4TestRunner.start(JUnit4TestRunner.java:81)\r\n\tat org.testng.junit.JUnit4TestRunner.run(JUnit4TestRunner.java:69)\r\n\tat org.testng.TestRunner$1.run(TestRunner.java:697)\r\n\tat org.testng.TestRunner.runJUnitWorkers(TestRunner.java:1004)\r\n\tat org.testng.TestRunner.privateRunJUnit(TestRunner.java:728)\r\n\tat org.testng.TestRunner.run(TestRunner.java:629)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:115)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeSingleClass(TestNGDirectoryTestSuite.java:129)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:113)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:111)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\n",
  "status": "failed"
});
});