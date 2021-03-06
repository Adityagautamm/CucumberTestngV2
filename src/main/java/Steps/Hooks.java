package Steps;

import Pages.AllPageBase;
import TestBase.TestBase;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends AllPageBase {

	@Before
	public static void setup() {
		TestBase.initialization();
		AllPageBase.LoadAllPages();
		scenarioContext.resetContext();
		
	}
	
	@After
	public static void tearDown() {
		
		TestBase.tearDown();
		
	}
	
}
