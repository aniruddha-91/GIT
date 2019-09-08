Feature: Smoke Testing features
@login
  Scenario: SmokeTest_TC_001

    Given Application under test is launched in desired browser
    When user clicks on Home button
    And user clicks on flights button
    Then Flight booking page should be displayed
@smoke
  Scenario Outline: SmokeTest_TC_002

    When user fills up data for booking flight as "<from>", "<to>", "<departing>", "<returning>"
    And user clicks on submit booking button
    Then application should be navigated to the desired page
    Examples:
      | from                                   | to                                                      | departing  | returning  |
      | Delhi, India (DEL-Indira Gandhi Intl.) | Seattle, WA, United States (SEA-Seattle - Tacoma Intl.) | 12-12-2019 | 29/12/2019 |