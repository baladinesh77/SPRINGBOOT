/**
 * GreetingsLocator.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package com.mahendra.services;

public class GreetingsLocator extends org.apache.axis.client.Service implements com.mahendra.services.Greetings {

    public GreetingsLocator() {
    }


    public GreetingsLocator(org.apache.axis.EngineConfiguration config) {
        super(config);
    }

    public GreetingsLocator(java.lang.String wsdlLoc, javax.xml.namespace.QName sName) throws javax.xml.rpc.ServiceException {
        super(wsdlLoc, sName);
    }

    // Use to get a proxy class for GreetingServicePort
    private java.lang.String GreetingServicePort_address = "http://localhost:8080/services/greetings";

    public java.lang.String getGreetingServicePortAddress() {
        return GreetingServicePort_address;
    }

    // The WSDD service name defaults to the port name.
    private java.lang.String GreetingServicePortWSDDServiceName = "GreetingServicePort";

    public java.lang.String getGreetingServicePortWSDDServiceName() {
        return GreetingServicePortWSDDServiceName;
    }

    public void setGreetingServicePortWSDDServiceName(java.lang.String name) {
        GreetingServicePortWSDDServiceName = name;
    }

    public com.mahendra.services.GreetingService getGreetingServicePort() throws javax.xml.rpc.ServiceException {
       java.net.URL endpoint;
        try {
            endpoint = new java.net.URL(GreetingServicePort_address);
        }
        catch (java.net.MalformedURLException e) {
            throw new javax.xml.rpc.ServiceException(e);
        }
        return getGreetingServicePort(endpoint);
    }

    public com.mahendra.services.GreetingService getGreetingServicePort(java.net.URL portAddress) throws javax.xml.rpc.ServiceException {
        try {
            com.mahendra.services.GreetingsSoapBindingStub _stub = new com.mahendra.services.GreetingsSoapBindingStub(portAddress, this);
            _stub.setPortName(getGreetingServicePortWSDDServiceName());
            return _stub;
        }
        catch (org.apache.axis.AxisFault e) {
            return null;
        }
    }

    public void setGreetingServicePortEndpointAddress(java.lang.String address) {
        GreetingServicePort_address = address;
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        try {
            if (com.mahendra.services.GreetingService.class.isAssignableFrom(serviceEndpointInterface)) {
                com.mahendra.services.GreetingsSoapBindingStub _stub = new com.mahendra.services.GreetingsSoapBindingStub(new java.net.URL(GreetingServicePort_address), this);
                _stub.setPortName(getGreetingServicePortWSDDServiceName());
                return _stub;
            }
        }
        catch (java.lang.Throwable t) {
            throw new javax.xml.rpc.ServiceException(t);
        }
        throw new javax.xml.rpc.ServiceException("There is no stub implementation for the interface:  " + (serviceEndpointInterface == null ? "null" : serviceEndpointInterface.getName()));
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(javax.xml.namespace.QName portName, Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        if (portName == null) {
            return getPort(serviceEndpointInterface);
        }
        java.lang.String inputPortName = portName.getLocalPart();
        if ("GreetingServicePort".equals(inputPortName)) {
            return getGreetingServicePort();
        }
        else  {
            java.rmi.Remote _stub = getPort(serviceEndpointInterface);
            ((org.apache.axis.client.Stub) _stub).setPortName(portName);
            return _stub;
        }
    }

    public javax.xml.namespace.QName getServiceName() {
        return new javax.xml.namespace.QName("http://services.mahendra.com/", "greetings");
    }

    private java.util.HashSet ports = null;

    public java.util.Iterator getPorts() {
        if (ports == null) {
            ports = new java.util.HashSet();
            ports.add(new javax.xml.namespace.QName("http://services.mahendra.com/", "GreetingServicePort"));
        }
        return ports.iterator();
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(java.lang.String portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        
if ("GreetingServicePort".equals(portName)) {
            setGreetingServicePortEndpointAddress(address);
        }
        else 
{ // Unknown Port Name
            throw new javax.xml.rpc.ServiceException(" Cannot set Endpoint Address for Unknown Port" + portName);
        }
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(javax.xml.namespace.QName portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        setEndpointAddress(portName.getLocalPart(), address);
    }

}
