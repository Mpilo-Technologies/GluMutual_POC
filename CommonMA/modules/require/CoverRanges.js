define(function () {
    
    var _sliderConfig = function() {
        
        const sliderConfig = [
            {
                product: "Life Cover",
                minValue: R100000,
                maxValue: R25000000,
                currentValue: R100000,
                step: 50000
            },
            {     
                product: "Disability Cover",
                minValue: R100000,
                maxValue: R20000000,
                currentValue: R100000,
                step: 50000
            },
            {   
                product: "Critical Illness Cover",
                minValue: R100000,
                maxValue: R6000000,
                currentValue: R100000,
                step: 10000
             },
             {
                product: "Income Protection",
                minValue: R2000,
                maxValue: R150000,
                currentValue: R2000,
                step: 500
            }
            ];R
            return sliderConfig;
        }

        return {
            sliderConfig: _sliderConfig
        }
});