/**
 *@module ApplicationManager
 */
define(['ServiceResponseHandler', 'HashTable'], function (ServiceResponseHandler, HashTable) {
  /**
   * ApplicationManager is an implementation of managers in the project
   *@alias module:ApplicationManager
   *@class
   */
  function ApplicationManager() {
    /**@member {object} applicationManagerInstance Contains instance of application manager*/
    /**@member {object} HashTable Contains instance of Hashtable*/
    /**@member {object} serviceResponseHandler Contains instance of serviceResponseHandler*/
    this.applicationManagerInstance = null;
    this.applicationMode = null;
    this.HashTable = null;
    this.actionSheetObject = null;
    this.serviceResponseHandler = null;
    /**   numberOfAsyncForPreAppInit
     *  1.getApplicationProperties
     *  2.getProducts
     */
    if (kony.os.deviceInfo().name === "thinclient") {
      this.numberOfAsyncForPreAppInit = 2;
    } else {
      this.numberOfAsyncForPreAppInit = 3;
    }
  };

  /**
   * returns the presentationController corresponding to the specified Module and attribute.
   * @param {String}  moduleName - represents the Module name.
   * @param {String} attribute - represents the attribute.
   */
  ApplicationManager.prototype.getModulesPresentationController = function (moduleName) {
    return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule(moduleName, applicationManager.getConfigurationManager().getDeploymentGeography()).presentationController;
  };
  /**
   * Returns ApplicationManager object, creates new if doesn't exist.
   * @returns {object} value gives PresentationFormUtility object 
   */
  ApplicationManager.getApplicationManager = function () {
    if (!this.applicationManagerInstance)
      this.applicationManagerInstance = new ApplicationManager();
    return this.applicationManagerInstance;
  };


  ApplicationManager.prototype.getServiceResponseHandler = function () {
    if (!this.serviceResponseHandler) {
      this.serviceResponseHandler = new ServiceResponseHandler();
    }
    return this.serviceResponseHandler;
  };

  ApplicationManager.prototype.getNavigationManager = function () {
    return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule({
      "moduleName": "NavigationManager",
      "appName": "CommonMA"
    }).businessController;
  };

  ApplicationManager.prototype.getConfigurationManager = function () {
    return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule({
      "moduleName": "ConfigurationManager",
      "appName": "CommonMA"
    }).businessController;
  };

  ApplicationManager.prototype.getHashTable = function () {
    if (!this.HashTable) {
      this.HashTable = new HashTable();
    }
    return this.HashTable;
  };

  ApplicationManager.prototype.getStorageManager = function () {
    return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule({
      "moduleName": "StorageManager",
      "appName": "CommonMA"
    }).businessController;
  };

  return ApplicationManager;
});