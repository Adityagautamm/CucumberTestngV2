package Pages;

import java.util.HashMap;

import TestBase.TestBase;



public class AllPageBase extends TestBase {
	
	public static AllPageBase theObject;

	
	public static HashMap<String, AllPageBase> pageStorage;
	 
	 public static void LoadAllPages() {
		 pageStorage =  new HashMap<String, AllPageBase>();
		 pageStorage.put("Contact", new ContactPage());

   }
}
