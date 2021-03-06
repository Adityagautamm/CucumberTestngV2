package Steps;

import java.util.List;

import org.openqa.selenium.WebElement;

import Pages.AllPageBase;
import Util.TestUtil;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class ActionSteps extends AllPageBase {

	@Given("^I Navigate to \"([^\"]*)\" Page$")
	public void i_Navigate_to_Page(String pageName) throws Throwable {

        // setting the object
        BasicSteps.SetObject(pageName);

        // Getting the object and directing to the URL
        BasicSteps.NavigateToUrl(BasicSteps.GetStoredPageUrl());
	}

	@When("^I clicks on \"(.*)\" (?:link|button|element)$")
	public void user_clicks_on(String elementName) throws Exception  {

		BasicSteps.click(driver.findElement(BasicSteps.GetWebElement(elementName)));
					
	} 

	@When("^I save the value of element \"([^\"]*)\" as alias \"([^\"]*)\"$")
	public void i_save_the_value_of_element_as_alias(String elementName, String aliasName) throws Throwable {
	    
		// getting web element value
		String value= BasicSteps.getText(driver.findElement(BasicSteps.GetWebElement(elementName)));
		
		// storing the value in context
		scenarioContext.setContext(aliasName, value);		
	}

	@Given("^user enters \"([^\"]*)\" on \"([^\"]*)\" textbox$")
	public void user_enters_on_textbox(String text, String element) throws Exception  {

		
	}

	@When("^I fill the page with following data$")
	public void i_fill_the_page_with_following_data(DataTable dataTable) throws Throwable {

	List<List<String>> dataList = dataTable.asLists(String.class);
	
	List<String> headerList = dataList.get(0);
	List<String> valueList = dataList.get(1);
	
	//Webelement list to store all the page elements as per Header
	List<WebElement> headerElements =BasicSteps.GetWebELementList(headerList);
	
	for(int i=0; i<valueList.size(); i++)
	{
	  BasicSteps.enterText(	headerElements.get(i), valueList.get(i));
	}
	
	
	}
	
	
	@When("^I select \"([^\"]*)\" from dropdown \"([^\"]*)\"$")
	public void i_select_from_dropdown(String value, String elementName) throws Throwable {
     BasicSteps.selectDropdown(value, elementName);
	}

	@When("^I check the checkbox \"([^\"]*)\"$")
	public void i_check_the_checkbox(String elementName) throws Throwable {
		WebElement  element= driver.findElement(BasicSteps.GetWebElement(elementName));
		BasicSteps.selectCheckBox(element);

	}

	@When("^I take the screenshot$")
	public void i_take_the_screenshot() throws Throwable {

	    TestUtil.takeScreenshotAtEndOfTest();
	}
	
	}

