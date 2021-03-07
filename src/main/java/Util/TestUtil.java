package Util;

import java.io.File;
import java.io.IOException;

/*
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
*/

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.io.FileHandler;

import TestBase.TestBase;

public class TestUtil extends TestBase {

	public static long PageTimout= 40;
	public static long ImplicitWAiT= 40;
	
	public static void takeScreenshotAtEndOfTest() {
		// TODO Auto-generated method stub
		File scrFile= ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		  //now copy the screenshot to desired location using copy file method
		String currentDir = System.getProperty("user.dir");
		//FileUtils.copyFile(scrFile, new File(currentDir + "/screenshots/" + System.currentTimeMillis() + ".png"));
		try {
			FileHandler.copy(scrFile, new File(currentDir + "/screenshots/" + System.currentTimeMillis() + ".png"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	
	
}
