define({
  // Type your controller code here

  onTestNavigation: function () {
    var homePageModule = kony.mvc.MDAApplication.getSharedInstance()
      .getModuleManager()
      .getModule({
        appName: "HomePageMA",
        moduleName: "HomePageUIModule",
      });
    homePageModule.presentationController.goToNextPage("Hello, World");
  },

  postShow: function () {
    var covers = [];
    var coverRangesModule = kony.mvc.MDAApplication.getSharedInstance()
      .getModuleManager()
      .getModule({
        appName: "CommonMA",
        moduleName: "CoverRanges",
      });
    covers = coverRangesModule.covers();
    this.setProducts(covers);
  },

  setProducts: function (products) {
    products = products || [];
    var segData = [];
    for (var i = 0; i < products.length; i += 2) {
      var left = products[i];
      var right = i + 1 < products.length ? products[i + 1] : null;
      var row = {
        lblLeftId: left.id,
        lblLeftTitle: left.title,
        lblLeftDesc: left.description,
        imgLeft: { src: left.image },
        btnLeftSelect: { text: "Select" },
      };
      if (right) {
        row.lblRightId = right.id;
        row.lblRightTitle = right.title;
        row.lblRightDesc = right.description;
        row.imgRight = { src: right.image };
        row.btnRightSelect = { text: "Select" };
        row.flxCardRight = { isVisible: true };
      } else {
        row.lblRightId = "";
        row.lblRightTitle = "";
        row.lblRightDesc = "";
        row.imgRight = { src: "" };
        row.btnRightSelect = { text: "" };
        row.flxCardRight = { isVisible: false };
      }
      segData.push(row);
    }
    this.view.segCoverList.widgetDataMap = {
      btnLeftSelect: "btnLeftSelect",
      btnRightSelect: "btnRightSelect",
      flx2CardRow: "flx2CardRow",
      flxCardLeft: "flxCardLeft",
      flxCardRight: "flxCardRight",
      imgLeft: "imgLeft",
      imgRight: "imgRight",
      lblLeftDesc: "lblLeftDesc",
      lblLeftTitle: "lblLeftTitle",
      lblRightDesc: "lblRightDesc",
      lblRightTitle: "lblRightTitle",
      lblLeftId: "lblLeftId",
      lblRightId: "lblRightId"
    };

    this.view.segCoverList.setData(segData);
  },
});
