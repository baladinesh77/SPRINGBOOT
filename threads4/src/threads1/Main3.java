package threads1;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Stack;

public class Main3 {

	public static void main(String[] args) {
		//Thread Unsafe
		List<Integer> list1 = new LinkedList<>();
		
		//Thread safe list using elements from Thread Unsafe 
		List<Integer> list2 = Collections.synchronizedList(list1);
		
	}

}
