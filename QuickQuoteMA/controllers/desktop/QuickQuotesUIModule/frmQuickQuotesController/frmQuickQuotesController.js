define({ 

 //Type your controller code here 
        onNavigate: function(segData){
            this.segData = segData
        },
        
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