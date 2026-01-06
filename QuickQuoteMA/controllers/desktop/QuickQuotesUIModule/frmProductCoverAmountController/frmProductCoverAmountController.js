define(['CoverRanges'], function (CoverRanges) {
    return {
        
        //Type your controller code here 
        postShow: function() {    
            var sliderConfig = CoverRanges.sliderConfig();
            setupSegment.call(this, sliderConfig);
        },

        setupSegment: function(sliderConfig) {
            // Define the mapping between JSON and Template Widget IDs
            this.view.segCovers.widgetDataMap = {
                lblTitle: "product",
                sldCover: "sliderData",
                txtAmount: "displayAmount"
            };
        
             const segData = sliderConfig.map(item => {
                return {
                    product: item.product,
                    displayAmount: item.min,
                    sliderData: {
                        minValue: item.min,
                        maxValue: item.max,
                        step: item.step,
                    selectedValue: item.min
                    }
                };
            });
            this.view.segCovers.setData(segData);
        }
    }
 });