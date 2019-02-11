package threads1;

import java.util.Stack;

public class Generator implements Runnable {

	private  MyStack stack;
	
	public Generator(MyStack stack) {
		super();
		this.stack = stack;
	}


	@Override
	public void run() {
		
			for(int i=0;i<10 ;i++) {
				stack.push(i);
				
			}
			}

}
