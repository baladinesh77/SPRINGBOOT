package com.example.demo;

import java.util.logging.Logger;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggerAspect {

	static Logger log = Logger.getLogger("LoggerAspect");
	
	@Before("execution (* com.example.demo.controllers.*.*(..) )")
	public void logIt(JoinPoint pt) {
		log.info("Calling method: "+pt.getSignature().getName());
	}
	
	@After("execution (* com.example.demo.controllers.*.*(..) )")
	public void logAfter(JoinPoint pt) {
		log.info("After method: "+pt.getSignature().getName());
	}
	
}
