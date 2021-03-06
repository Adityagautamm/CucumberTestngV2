package Pages;

import org.openqa.selenium.By;

public class ContactPage extends AllPageBase  {

	// page URL
    public String url = "https://www.intelligencebank.com/contact";
    
    public By FirstName = By.xpath("//input[contains(@id, 'firstname') ]");
    
    public By Email = By.xpath("//input[contains(@id, 'email') ]");
    
    public By CompanyName = By.xpath("//input[contains(@id, 'company') ]");
    
    public By PhoneNumber = By.xpath("//input[contains(@id, 'phone') ]");
    
    public By Country = By.xpath("//select[contains(@id, 'country') ]");
    
    public By ProductPackage = By.xpath("//select[contains(@id, 'product_family') ]");
    
    public By TermsAndConditions = By.xpath("//span[contains(@data-reactid, 'i_agree_to_terms_and_conditions_privacy_policy') ]");







}
