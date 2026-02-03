define([], function () { 
    
    /**
     * User defined business controller
     * @constructor
     * @extends kony.mvc.Business.Delegator
     */
    function BusinessController() { 

        kony.mvc.Business.Delegator.call(this); 

    } 

    inheritsFrom(BusinessController, kony.mvc.Business.Delegator); 

    BusinessController.prototype.initializeBusinessController = function() { 
        // add business controller initialization code here 
    },

    BusinessController.prototype.getAccessToken = function(getAccessTokenSuccess,getAccessTokenFailure) {

       var anonymousQuotesModel = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("QuotesObject");
        anonymousQuotesModel.customVerb('getAccessToken', {}, getAllCompletionCallback);
        function getAllCompletionCallback(status,  data,  error) {
            var srh = applicationManager.getServiceResponseHandler();
            var obj = srh.manageResponse(status, data, error);
            if (obj["status"] === true) {
                getAccessTokenSuccess(obj["data"]);
            } else {
                getAccessTokenFailure(obj["errmsg"]);
            }
        }
    };

    return BusinessController;

});