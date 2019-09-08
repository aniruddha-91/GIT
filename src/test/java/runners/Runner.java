package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/resources/features/Smoke.feature"},
        glue = {"steps"},
        plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target\\ExtentReports\\report.html",
                "rerun:rerun/failed-scenarios.txt"},
        tags = {"@login,@smoke"}
)
public class Runner {

}
