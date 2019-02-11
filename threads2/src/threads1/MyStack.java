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
		this.notifyAll();
		System.out.println(Thread.currentThread().getName()+" Added "+n);
	}
	
	public boolean isEmpty() {
		return stack.isEmpty();
	}
	
	public synchronized void pop() {
		try {
			this.wait();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(Thread.currentThread().getName()+"Deleting ");
		int n = stack.pop();
		System.out.println(Thread.currentThread().getName()+ "Deleted "+n);
	}
	
	private void delay() {

	}
	
	public Stack<Integer> getStack(){
		return stack;
	}
}
