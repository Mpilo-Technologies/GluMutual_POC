define(function () {
    
    var _sliderConfig = function() {
        
        const sliderConfig = [
            {
                id: "30100",
                product: "Life Cover",
                minValue: 100000,
                maxValue: 25000000,
                currentValue: 100000,
                step: 50000
            },
            {     
                id: "20200",
                product: "Disability Cover",
                minValue: 100000,
                maxValue: 20000000,
                currentValue: 100000,
                step: 50000
            },
            { 
                id: "30103", 
                product: "Critical Illness Cover",
                minValue: 100000,
                maxValue: 6000000,
                currentValue: 100000,
                step: 10000
             },
             {
                id: "30300",
                product: "Income Protection",
                minValue: 2000,
                maxValue: 150000,
                currentValue: 2000,
                step: 500
            }
            ];
            return sliderConfig;
        };

    var covers = function () {
      var covers = [
        {
          id: "30100",
          title: "Life Cover",
          image: "lifecover.png",
          description: "Lump-sum payout to your beneficiaries.",
        },
        {
          id: "20200",
          title: "Disability Cover",
          image: "disabilitycover.png",
          description: "Income replacement if you become disabled.",
        },
        {
          id: "30103",
          title: "Critical Illness Cover",
          image: "criticalillness.png",
          description: "Lump-sum payout for critical illnesses.",
        },
        {
          id: "30300",
          title: "Income Protection",
          image: "incomeprotection.png",
          description: "Monthly income replacement when unable to work.",
        },
      ];
      return covers;
    };
    return {
        sliderConfig: _sliderConfig,
        covers: covers
  };
});
