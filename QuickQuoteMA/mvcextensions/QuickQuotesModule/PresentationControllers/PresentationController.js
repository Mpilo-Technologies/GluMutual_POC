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

    PresentationController.prototype.getAccessToken = function() {
        var businessController = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("QuickQuotesManager").businessController;
        businessController.getAccessToken(this.getAccessTokenSuccess.bind(this), this.getAccessTokenFailure.bind(this));
    }

    PresentationController.prototype.getAccessTokenSuccess = function(data) {
        alert(JSON.stringify(data));
    };

    PresentationController.prototype.getAccessTokenFailure = function(error) {
        // applicationManager.getPresentationManager().getAccessTokenFailure(error);
        alert(JSON.stringify(error));
    };

    return PresentationController;
});