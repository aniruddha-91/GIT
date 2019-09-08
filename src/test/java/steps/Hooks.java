package steps;

import com.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static utils.DriverManager.driver;


public class Hooks {
    Scenario scenario;
    String className = this.getClass().getSimpleName();

    @Before
    public void fetchScenarioName(Scenario scenario) {
        this.scenario = scenario;
    }

    @After
    public void takesScreenshot(Scenario scenario) throws IOException {
        this.scenario = scenario;
        String date = new SimpleDateFormat("yyyy_MM_dd_hh_mm_ss").format(new Date());
        File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        File dest = new File(System.getProperty("user.dir") + "\\target\\Screenshots\\" + this.scenario.getName() + "_" + date + "_" + "capture.png");
        FileUtils.copyFile(src, dest);

        if(scenario.isFailed())
        {
            Reporter.addScreenCaptureFromPath(dest.toString());
        }
    }
}
