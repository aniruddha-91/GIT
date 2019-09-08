package pages.actions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import pages.locators.HomePageLocators;
import utils.BaseUtils;
import utils.DriverManager;

public class HomePageActions extends DriverManager {

    public static HomePageLocators homePageLocator;
    public static WebDriver driver;

    public HomePageActions(WebDriver driver) {
        this.driver = driver;
        this.homePageLocator = new HomePageLocators();
        PageFactory.initElements(DriverManager.getDriver(), this.homePageLocator);
    }

    public static void clickOnHomeBtn() {
        BaseUtils.waitTillElementIsClickable(driver, homePageLocator.homeTab);
        homePageLocator.homeTab.click();
    }

    public static void clickOnHotels() {
        BaseUtils.waitTillElementIsClickable(driver, homePageLocator.hotelsBtn);
        homePageLocator.hotelsBtn.click();
    }

    public static void clickOnFlight() {
        BaseUtils.waitTillElementIsClickable(driver, homePageLocator.flightBtn);
        homePageLocator.flightBtn.click();
    }

    public static boolean isFlightBookingPageDisplayed()
    {
        BaseUtils.waitTillVisibilityOfElement(driver,homePageLocator.flyingFromSpan);
        if(homePageLocator.flyingFromSpan.isDisplayed())
            return true;
        else
            return false;
    }

    public static void bookAFlight(String from, String to, String departing, String returning) {

        homePageLocator.fromTxt.sendKeys(from);
        homePageLocator.toTxt.sendKeys(to);
        homePageLocator.departureDate.sendKeys(departing);
        homePageLocator.returnDate.sendKeys(returning);

    }

    public static void clickOnBookFlightButton()
    {
        homePageLocator.flightSearchBtn.click();
    }

    public static boolean isSortPriceButtonDisplayed()
    {
        BaseUtils.waitTillVisibilityOfElement(driver,homePageLocator.sortPriceBtn);
        if(homePageLocator.sortPriceBtn.isDisplayed())
            return true;
        else
            return false;
    }

}
