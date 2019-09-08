package utils;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.IOException;

public class DriverManager {
    public static WebDriver driver;
    public static WebDriverWait wait;
    public static Logger log = LogManager.getLogger();
    public static Constants cons;

    public DriverManager() {

    }

    public static void initDriver() throws IOException {
        cons = new Constants();
        if (cons.getBrowser().equalsIgnoreCase("IE")) {
            System.setProperty("webdriver.ie.driver", System.getProperty("user.dir") + "\\src\\test\\resources\\drivers\\IEDriverServer.exe");
            driver = new InternetExplorerDriver();
            log.debug("------------------------------Launching IE-----------------------------");
        } else if (cons.getBrowser().equalsIgnoreCase("Chrome")) {
            System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\src\\test\\resources\\drivers\\chromedriver.exe");
            driver = new ChromeDriver();
            log.debug("------------------------------Launching Chrome-----------------------------");
        } else if (cons.getBrowser().equalsIgnoreCase("Firefox")) {
            System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir") + "\\src\\test\\resources\\drivers\\geckodriver.exe");
            driver = new FirefoxDriver();
            log.debug("------------------------------Launching Firefox-----------------------------");

        }

        driver.manage().deleteAllCookies();
        driver.manage().window().maximize();
        BaseUtils.waitImplicitly(driver);
        driver.get(cons.getUrl());


    }

    public static WebDriver getDriver() {
        return driver;
    }

}
