package com.mahendra;

@FunctionalInterface
public interface InterestCalculator {
	double calc(double principal, float rate, int duration);
}
