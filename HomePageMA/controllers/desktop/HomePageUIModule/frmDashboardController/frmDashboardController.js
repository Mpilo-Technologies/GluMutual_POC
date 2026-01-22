define(["CoverRanges", "ApplicationManager"], function (
  coverRanges,
  applicationManager,
) {
  return {
    // Type your controller code here

    selected: [],

    onClickContinue: function () {
      if (this.selected.length === 0) {
        alert("Please select at least one cover to proceed.");
        return;
      } else {
        var navManager = applicationManager
          .getApplicationManager()
          .getNavigationManager();
        navManager.setCustomInfo("selectedCovers", this.selected);
        navManager.navigateTo({
          appName: "QuickQuoteMA",
          friendlyName: "frmProductCoverAmount",
        });
      }
    },

    postShow: function () {
      var covers = [];
      this.selected = [];
      covers = coverRanges.covers();
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
          btnLeftSelect: {
            text: "Select",
            onClick: this.selectCoverLeft.bind(this),
          },
        };
        if (right) {
          row.lblRightId = right.id;
          row.lblRightTitle = right.title;
          row.lblRightDesc = right.description;
          row.imgRight = { src: right.image };
          row.btnRightSelect = {
            text: "Select",
            onClick: this.selectCoverRight.bind(this),
          };
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
        lblRightId: "lblRightId",
      };

      this.view.segCoverList.setData(segData);
    },

    selectCoverLeft: function () {
      var currForm = voltmx.application.getCurrentForm();
      var rowIndex = currForm.segCoverList.selectedRowIndex[1];
      var row = this.view.segCoverList.data[rowIndex];
      var id = row.lblLeftId;
      var title = row.lblLeftTitle;
      var foundIdCover = -1;

      for (var i = 0; i < this.selected.length; i++) {
        if (this.selected[i].id === id) {
          foundIdCover = i;
          break;
        }
      }
      if (foundIdCover === -1) {
        this.selected.push({ id: id, title: title });
        row.btnLeftSelect = {
          text: "Unselected",
          onClick: this.selectCoverLeft.bind(this),
          skin: "sknBtnGhost",
        };
      } else {
        this.selected.splice(foundIdCover, 1);
        row.btnLeftSelect = {
          text: "Select",
          onClick: this.selectCoverLeft.bind(this),
          skin: "sknBtnPrimary",
        };
      }

      this.view.segCoverList.setDataAt(row, rowIndex);
    },

    selectCoverRight: function () {
      var currForm = voltmx.application.getCurrentForm();
      var rowIndex = currForm.segCoverList.selectedRowIndex[1];
      var row = this.view.segCoverList.data[rowIndex];
      var id = row.lblRightId;
      var title = row.lblRightTitle;
      var foundIdCover = -1;

      for (var i = 0; i < this.selected.length; i++) {
        if (this.selected[i].id === id) {
          foundIdCover = i;
          break;
        }
      }
      if (foundIdCover === -1) {
        this.selected.push({ id: id, title: title });
        row.btnRightSelect = {
          text: "Unselected",
          onClick: this.selectCoverRight.bind(this),
          skin: "sknBtnGhost",
        };
      } else {
        this.selected.splice(foundIdCover, 1);
        row.btnRightSelect = {
          text: "Select",
          onClick: this.selectCoverRight.bind(this),
          skin: "sknBtnPrimary",
        };
      }

      this.view.segCoverList.setDataAt(row, rowIndex);
    },
  };
});
