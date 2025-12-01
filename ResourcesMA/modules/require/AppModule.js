define([], function () {
  var isValidModule = function (moduleLoaderObject) {
    // if (moduleLoaderObject && moduleLoaderObject.target && moduleLoaderObject.target.name && moduleLoaderObject.target.type) {
    //     return true;
    // } else {
    //     return false;
    // }
  };

  var loadForm = function (moduleLoaderObject) {
    applicationManager.getNavigationManager().navigateTo(moduleLoaderObject.target.name, moduleLoaderObject.context);
  };

  var loadModule = function(appName, moduleName, context, parent, callback) {
    var presentationController = kony.mvc.MDAApplication.getSharedInstance()
    .getModuleManager()
    .getModule({"appName" : appName , "moduleName": moduleName}).presentationController;
    if (parent) {
      presentationController.parent = parent;
    } else if (callback) {
      presentationController.callback = callback;
    }
    context.currentModuleName = moduleName;
    presentationController.onLaunchModule(context);
  };


  var exitForm = function (parent, context) {
    parent.onModuleExit(context);
  };


  return {
    launchModule: function (appName, moduleName, context, parent) {
      if (!moduleName) {
        throw "Invalid module object. Module must contain a name";
      }
      if (!appName) {
        throw "Invalid app Name.";
      }
      if (!context) {
        context = {};
      }
      if (parent) {
        parent.currentModule = moduleName;
      }
      loadModule.call(this, appName, moduleName, context, parent);
    },

    launchForm: function (appName, formName, context, parent) {
      if (context.lastEditedFormName !== undefined && context.lastEditedFormName !== null && context.lastEditedFormName !== "") {
        formName = context.lastEditedFormName;
        delete context.lastEditedFormName;
      }
      if (context.launchSpecificScreenInModule !== undefined && context.launchSpecificScreenInModule !== null && context.launchSpecificScreenInModule !== "") {
        formName = context.launchSpecificScreenInModule;
        delete context.launchSpecificScreenInModule;
      }
      context.currentAppName = appName;
      context.currentFormName = formName;
      var ntf = new kony.mvc.Navigation({ "appName": appName, "friendlyName": formName });
      ntf.navigate(context);
    },

    fetchCurrentSection: function (context) {
      return context.currentAppName + "|" +context.currentModuleName + "|" + context.currentFormName;
    }
  };
});