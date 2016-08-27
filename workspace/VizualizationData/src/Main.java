import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.Random;

public class Main {
	  public static void main(String args[]){
		  PrintWriter writer = null;
		try {
		  writer = new PrintWriter("E:/CS/Vizualization/workspace/VizualizationData/src/ProducedData.txt", "UTF-8");
	  
		  int value = 1;
		  //Categories enumInstance = Categories.values()[value];
		  //writer.println(enumInstance);
		  
		  //writer.println("[");
		  for(int i = 0; i< 160000; i++)
		  {
			String month = randomMonth();
			String day = randomDay();
			Categories enumInstance1 = randomCategory();
			Categories enumInstance2 = randomCategory();
			Categories enumInstance3 = randomCategory();
			if(!((month.equals("3")) || (month.equals("4"))))
			{
				writer.println("  " + "{" + "\n" +
					  "    " + "\"date\": \"2016-" + month + "-" + day + "T00:00:00Z\"," + "\n" +
					  "    " +  "\"category\": [" + "\n" + 
					  "      " + "{ \"term\": \"" + enumInstance1 +"\" }," + "\n" +
					  "      " + "{ \"term\": \"" + enumInstance2 +"\" }," + "\n" +
					  "      " + "{ \"term\": \"" + enumInstance3 +"\" }" + "\n" +
					  "    " +  "]" + "\n" +
					 "  " +  "},");
			}
			
		  }
		 //writer.println("]");
		  
		} catch (FileNotFoundException | UnsupportedEncodingException e) {
			e.printStackTrace();
		}  finally {
			writer.close();
		}
	       
	   }

	private static String randomMonth() {
		Random random = new Random();
		int max = 8;
		int min = 1;
		int r = random.nextInt(1000000);
		//return Integer.toString(random.nextInt(max - min + 1) + min);
		if(r%9 != 0)
		{
			return Integer.toString(r%9);
		}
		return Integer.toString(1);
	}

	private static Categories randomCategory() {
		Random random = new Random();
		int max = 188;
		int min = 0;
		int r = random.nextInt(100000000);
		//return Categories.values()[random.nextInt(max - min + 1) + min];
		
		return Categories.values()[r%189];
		
	}

	private static String randomDay() {
		Random random = new Random();
		int max = 30;
		int min = 1;
		int r = random.nextInt(1000000000);
		//return Integer.toString(random.nextInt(max - min + 1) + min);
		if(r%31 != 0)
		{
			return Integer.toString(r%31);
		}
		return Integer.toString(6);
	}
}
