/**
  *@module ApplicationManager
  */
define(function () {

  /**
  * ApplicationManager is an implementation of managers in the project
  *@alias module:ApplicationManager
  *@class
  */

  function ApplicationManager(){
    /**@member {object} applicationManagerInstance Contains instance of application manager*/
    this.applicationManagerInstance= null;
    this.applicationMode = null;
    this.actionSheetObject = null;
    if(kony.os.deviceInfo().name === "thinclient") {
      this.numberOfAsyncForPreAppInit=2;
    } else {
      this.numberOfAsyncForPreAppInit=3;	
    }
  }
  
  /**
  * returns NavigationManager object
  * @returns {object} value gives NavigationManager object
  */
  ApplicationManager.prototype.getNavigationManager = function() {
    return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule({"moduleName" : "NavigationManager", "appName" : "CommonMA"}).businessController;
  };

  /**
  * returns the presentationController corresponding to the specified Module and attribute.
  * @param {String}  moduleName - represents the Module name.
  * @param {String} attribute - represents the attribute.
  */
  ApplicationManager.prototype.getModulesPresentationController = function(moduleName){
    return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule(moduleName, applicationManager.getConfigurationManager().getDeploymentGeography()).presentationController;
  };

  /**
   * Method to get MultiEntityManager object
   * @returns {object} MultiEntityManager object
   */
  ApplicationManager.prototype.validateEntersektNumber = function () {
    return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule({ moduleName: "EntersektManager", appName: "CommonsMA" }).businessController;
  };

  return ApplicationManager;
});