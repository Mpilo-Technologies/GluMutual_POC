define(function () {
  return {
    sliderConfig: function () {
      const sliderConfig = [
        {
          product: "Life Cover",
          minValue: R100000,
          maxValue: R25000000,
          currentValue: R100000,
          step: 50000,
        },
        {
          product: "Disability Cover",
          minValue: R100000,
          maxValue: R20000000,
          currentValue: R100000,
          step: 50000,
        },
        {
          product: "Critical Illness Cover",
          minValue: R100000,
          maxValue: R6000000,
          currentValue: R100000,
          step: 10000,
        },
        {
          product: "Income Protection",
          minValue: R2000,
          maxValue: R150000,
          currentValue: R2000,
          step: 500,
        },
      ];
      return sliderConfig;
    },

    covers: function () {
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
    },
  };
});
