package threads1;

public class Degenerator implements Runnable {

	private MyStack stack;
	
	public Degenerator(MyStack stack) {
		super();
		this.stack = stack;
	}



	@Override
	public void run() {
		while(true) {
			System.out.println("Attempting POP");
		
			if(stack.isEmpty()) {
				try {
					stack.wait();
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				System.out.println("Stack is empty, retrying");			
			}else {
			stack.pop();
			
			}
		}

	}

}
