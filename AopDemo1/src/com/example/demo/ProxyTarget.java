package com.example.demo;

public class ProxyTarget implements Service {
private TargetClass original;
private Aspect aspect;
public ProxyTarget(TargetClass original, Aspect aspect) {
	super();
	this.original = original;
	this.aspect = aspect;
}

@Override
public void hello() {
	
	original.hello();
	aspect.log();
}


}
