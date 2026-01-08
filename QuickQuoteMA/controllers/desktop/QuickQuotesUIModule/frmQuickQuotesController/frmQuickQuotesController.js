define({ 

 //Type your controller code here 
        postShow: function() {
            this.setSelectedQuote();
        },

        setSelectedQuote: function() {
            this.view.segCoverList.widgetDataMap = {
                lblTitle: "product",
                lblAmount: "displayAmount",
            };
            
            this.view.segCoverList.setData(this.segData);
        },
 });