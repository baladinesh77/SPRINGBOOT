package thread5;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

public class Main {

	public static void main(String[] args) {
		Factorial fact4 = new Factorial(4);
		Factorial fact5 = new Factorial(5);
		
		ExecutorService service = Executors.newFixedThreadPool(2);
		Future<Long> result =  service.submit(fact4);
		Future<Long> result2 = service.submit(fact5);
		try {
			Long ans = result.get(2, TimeUnit.SECONDS);
			Long ans2 = result2.get(2,TimeUnit.SECONDS);
			System.out.println("Ans: "+ans);
			System.out.println("Ans: "+ans2);
		} catch (InterruptedException | ExecutionException | TimeoutException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		service.shutdown();
	}

}
