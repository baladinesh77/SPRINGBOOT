package com.mahendra.services;

public class GreetingServiceProxy implements com.mahendra.services.GreetingService {
  private String _endpoint = null;
  private com.mahendra.services.GreetingService greetingService = null;
  
  public GreetingServiceProxy() {
    _initGreetingServiceProxy();
  }
  
  public GreetingServiceProxy(String endpoint) {
    _endpoint = endpoint;
    _initGreetingServiceProxy();
  }
  
  private void _initGreetingServiceProxy() {
    try {
      greetingService = (new com.mahendra.services.GreetingsLocator()).getGreetingServicePort();
      if (greetingService != null) {
        if (_endpoint != null)
          ((javax.xml.rpc.Stub)greetingService)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
        else
          _endpoint = (String)((javax.xml.rpc.Stub)greetingService)._getProperty("javax.xml.rpc.service.endpoint.address");
      }
      
    }
    catch (javax.xml.rpc.ServiceException serviceException) {}
  }
  
  public String getEndpoint() {
    return _endpoint;
  }
  
  public void setEndpoint(String endpoint) {
    _endpoint = endpoint;
    if (greetingService != null)
      ((javax.xml.rpc.Stub)greetingService)._setProperty("javax.xml.rpc.service.endpoint.address", _endpoint);
    
  }
  
  public com.mahendra.services.GreetingService getGreetingService() {
    if (greetingService == null)
      _initGreetingServiceProxy();
    return greetingService;
  }
  
  public java.lang.String greet() throws java.rmi.RemoteException{
    if (greetingService == null)
      _initGreetingServiceProxy();
    return greetingService.greet();
  }
  
  
}