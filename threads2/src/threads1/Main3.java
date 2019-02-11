package threads1;

import java.util.Stack;

public class Main3 {

	public static void main(String[] args) {
		MyStack stack = new MyStack(new Stack<Integer>());
		Generator g1 = new Generator(stack);
		Generator g2 = new Generator(stack);
		Degenerator d1 = new Degenerator(stack);
		Degenerator d2 = new Degenerator(stack);
		
		new Thread(g1).start();
		new Thread(g2).start();
		new Thread(d1).start();
		new Thread(d2).start();
	}

}
