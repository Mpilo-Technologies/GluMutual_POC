define([], function() {
    /**
     * User defined presentation controller
     * @constructor
     * @extends kony.mvc.Presentation.BasePresenter
     */
    function PresentationController() {
        kony.mvc.Presentation.BasePresenter.call(this);
    }

    inheritsFrom(PresentationController, kony.mvc.Presentation.BasePresenter);

    /**
     * Overridden Method of kony.mvc.Presentation.BasePresenter
     * This method gets called when presentation controller gets initialized
     * @method
     */
    PresentationController.prototype.initializePresentationController = function() {
        
    };
  
  PresentationController.prototype.goToNextPage =  function(context){
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo({"appName": "QuickQuoteMA", "friendlyName" : "AuthUIModule/frmQuickQuotes"});
    if (context) {
      navManager.updateForm(context);
    }
  }

    return PresentationController;
});