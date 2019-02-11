package threads1;

import java.util.Stack;

public class MyStack {
	private Stack<Integer> stack;
	
	public MyStack(Stack<Integer> stack) {
		this.stack = stack;
	}
	
	public void push(int n) {
		System.out.println(Thread.currentThread().getName()+ " Adding "+n);
		stack.push(n);
		System.out.println(Thread.currentThread().getName()+" Added "+n);
	}
	
	public Stack<Integer> getStack(){
		return stack;
	}
}
