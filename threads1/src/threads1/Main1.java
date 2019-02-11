package threads1;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Main1 {

	public static void main(String[] args) {
		ClockThread t1 = new ClockThread("dd MM YYYY, hh:mm:ss");
		
		ClockThread t2 = new ClockThread("hh 'hours and ' mm 'minutes, ' ss 'seconds'. ");
		
	/*	Newer Approach (Using ThreadPools)
	 * 	ExecutorService service = Executors.newCachedThreadPool();
		service.execute(t1);
		service.execute(t2);
*/
		//Older Approach
		new Thread(t1).start();
		new Thread(t2).start();
	}

}
