/**
 * Greetings.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.mahendra.services;

public interface Greetings extends javax.xml.rpc.Service {
    public java.lang.String getGreetingServicePortAddress();

    public com.mahendra.services.GreetingService getGreetingServicePort() throws javax.xml.rpc.ServiceException;

    public com.mahendra.services.GreetingService getGreetingServicePort(java.net.URL portAddress) throws javax.xml.rpc.ServiceException;
}
