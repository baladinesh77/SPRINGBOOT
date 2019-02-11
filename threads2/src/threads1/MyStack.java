package threads1;

import java.util.Stack;

public class MyStack {
	private Stack<Integer> stack;
	
	public MyStack(Stack<Integer> stack) {
		this.stack = stack;
	}
	
	public synchronized void push(int n) {
		System.out.println(Thread.currentThread().getName()+ " Adding "+n);
		delay();
		stack.push(n);
		delay();
		System.out.println(Thread.currentThread().getName()+" Added "+n);
	}
	
	private void delay() {
	try {
		Thread.sleep(100);
	} catch (InterruptedException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	}
	
	public Stack<Integer> getStack(){
		return stack;
	}
}
