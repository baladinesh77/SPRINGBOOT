package threads1;

import java.util.Stack;
import java.util.concurrent.locks.ReentrantReadWriteLock;

public class MyStack {
	private Stack<Integer> stack;
	private ReentrantReadWriteLock lock = new ReentrantReadWriteLock();
	public MyStack(Stack<Integer> stack) {
		this.stack = stack;
	}
	
	public void push(int n) {
		lock.writeLock().lock();
		System.out.println(Thread.currentThread().getName()+ " Adding "+n);
		delay();
		stack.push(n);
		lock.writeLock().unlock();
		System.out.println(Thread.currentThread().getName()+" Added "+n);
	}
	
	public boolean isEmpty() {
		return stack.isEmpty();
	}
	
	public void pop() {
		
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
