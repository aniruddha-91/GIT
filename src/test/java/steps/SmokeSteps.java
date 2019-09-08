package steps;

import com.cucumber.listener.Reporter;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


import org.testng.Assert;
import pages.actions.HomePageActions;
import utils.DriverManager;

public class SmokeSteps {

    @Given("^Application under test is launched in desired browser$")
    public void application_under_test_is_launched_in_desired_browser() throws Throwable {
        DriverManager.initDriver();

    }

    @When("^user clicks on Home button$")
    public void user_clicks_on_Home_button() throws Throwable {
        HomePageActions.clickOnHomeBtn();

    }

    @When("^user clicks on flights button$")
    public void user_clicks_on_flights_button() throws Throwable {
        HomePageActions.clickOnFlight();

    }

    @Then("^Flight booking page should be displayed$")
    public void flight_booking_page_should_be_displayed() throws Throwable {

        boolean result = HomePageActions.isFlightBookingPageDisplayed();

        Assert.assertEquals(result, true);
        Reporter.addStepLog("Flight booking page is displayed");

    }

    @When("^user fills up data for booking flight as \"(.*?)\", \"(.*?)\", \"(.*?)\", \"(.*?)\"$")
    public void user_fills_up_data_for_booking_flight_as(String from, String to, String fromDate, String toDate) throws Throwable {
        HomePageActions.bookAFlight(from, to, fromDate, toDate);
    }

    @When("^user clicks on submit booking button$")
    public void user_clicks_on_submit_booking_button() throws Throwable {

        HomePageActions.clickOnBookFlightButton();
    }

    @Then("^application should be navigated to the desired page$")
    public void application_should_be_navigated_to_the_desired_page() throws Throwable {
        boolean result = HomePageActions.isSortPriceButtonDisplayed();

        Assert.assertEquals(result, true);
        Reporter.addStepLog("Flight booking is successful");

    }

}
