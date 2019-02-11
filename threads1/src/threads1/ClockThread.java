package threads1;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class ClockThread implements Runnable {

	private String format;
	
	public ClockThread(String format) {
		this.format = format;	
	}
	
	public void run() {
		while(true) {
			LocalDateTime time = LocalDateTime.now();
			String now = time.format(DateTimeFormatter.ofPattern(format));
			System.out.println(now);
			try {
			Thread.sleep(1000);
			}catch(InterruptedException ex) {}
		}
	}
}
