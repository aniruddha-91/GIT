package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"@rerun/failed-scenarios.txt"},
        glue = {"steps"},
        plugin = {"pretty", "html:target/cucumber-report/single",
                "com.cucumber.listener.ExtentCucumberFormatter:target\\ExtentReports\\report.html"}
)
public class FailedRunner {


}
