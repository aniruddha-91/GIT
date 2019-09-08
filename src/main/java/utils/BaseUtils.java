package utils;

//import com.relevantcodes.extentreports.ExtentTest;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.actions.HomePageActions;
import java.util.concurrent.TimeUnit;

public class BaseUtils {

    public static WebDriver driver;
    public static WebDriverWait wait;

    public BaseUtils() {

    }
    public static HomePageActions homePageActions = new HomePageActions(DriverManager.getDriver());

    public static void waitTillVisibilityOfElement(WebDriver driver, WebElement element) {
        wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.visibilityOf(element));

    }

    public static void waitTillElementIsClickable(WebDriver driver, WebElement element) {
        wait = new WebDriverWait(driver, 20);
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    public static void waitImplicitly(WebDriver driver) {
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
    }



}
