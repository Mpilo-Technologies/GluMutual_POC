define(["ApplicationManager", 
        "CoverRanges"], function (applicationManager, CoverRanges) {
  //Type your controller code here
  var isValid = false;

  return {
    toggleSmokerSwitch: function () {
      var showingNo = this.view.flxSmokerNo.isVisible;
      this.view.flxSmokerNo.setVisibility(!showingNo);
      this.view.flxSmokerYes.setVisibility(showingNo);
    },

    postShow: function () {
      this.view.txtDob.placeholder = "DD/MM/YYYY";
      this.view.flxSmokerNo.isVisible = true;
      this.view.flxSmokerYes.isVisible = false;
      this.view.lstGender.selectedKeyValue[1] = "Select";
      this.view.lstProvince.selectedKeyValue[1] = "Select";
      this.view.lstOccupation.selectedKeyValue[1] = "Select";
      this.view.lstIncome.selectedKeyValue[1] = "Select";
      this.view.lstEducation.selectedKeyValue[1] = "Select";

      this.view.flxSmokerYes.onClick = this.toggleSmokerSwitch.bind(this);
      this.view.flxSmokerNo.onClick = this.toggleSmokerSwitch.bind(this);

      this.view.btnCalculate.setEnabled(false);
      this.view.btnCalculate.onClick = this.onClickBtnNext.bind(this);

      this.view.txtDob.onTextChange = this.isValidData.bind(this);
      this.view.lstGender.onSelection = this.isValidData.bind(this);
      this.view.lstProvince.onSelection = this.isValidData.bind(this);
      this.view.txtOccupation.onTextChange = this.isValidData.bind(this);
      this.view.lstIncome.onSelection = this.isValidData.bind(this);
      this.view.lstEducation.onSelection = this.isValidData.bind(this);
      this.populateSegData();
      this.view.txtOccupation.onKeyUp = this.filterOccupationData;
      this.view.segOccupation.onRowClick = this.occupationRowClicked;
    },

    populateSegData: function () {
      this.view.segOccupation.widgetDataMap = {
        lblTitle: "occ_name",
        lblCode: "occupation_code",
      };
      
      this.occupationData = CoverRanges.occupations();
      
      this.view.segOccupation.setData(this.occupationData);
    },

    isValidData: function () {
      //Add validation logic here and return false if any validation fails

      if (
        !this.isValidDate(this.view.txtDob.text) ||
        !this.isEmptyNullUndefinedSelect(
          this.view.lstGender.selectedKeyValue[1]
        ) ||
        !this.isEmptyNullUndefinedSelect(
          this.view.lstProvince.selectedKeyValue[1]
        ) ||
        !this.isEmptyNullUndefinedSelect(
          this.view.txtOccupation.text
        ) ||
        !this.isEmptyNullUndefinedSelect(
          this.view.lstIncome.selectedKeyValue[1]
        ) ||
        !this.isEmptyNullUndefinedSelect(
          this.view.lstEducation.selectedKeyValue[1]
        )
      ) {
        this.view.btnCalculate.setEnabled(false);
      } else {
        this.view.btnCalculate.setEnabled(true);
      }
    },

    isEmptyNullUndefinedSelect: function (data) {
      var isValid = true;
      if (
        data === null ||
        data === undefined ||
        data === "" ||
        data === "Select"
      ) {
        isValid = false;
      }
      return isValid;
    },

    isValidDate: function (dateString) {
      var matches = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(dateString);
      if (matches == null) return false;

      var day = parseInt(matches[1], 10);
      var month = parseInt(matches[2], 10) - 1; // Month is 0-indexed in JS Date object (0-11)
      var year = parseInt(matches[3], 10);

      var composedDate = new Date(year, month, day);

      return (
        composedDate.getDate() == day &&
        composedDate.getMonth() == month &&
        composedDate.getFullYear() == year
      );
    },

    onClickBtnNext: function () {
      var basicInfo = this.userBasicInfo();
      var navManager = applicationManager
        .getApplicationManager()
        .getNavigationManager();
      navManager.setCustomInfo("basicInfo", basicInfo);
      navManager.navigateTo({
        appName: "HomePageMA",
        friendlyName: "frmDashboard",
      });
    },

    userBasicInfo: function () {
      var basicInfo = {
        dateOfBirth: this.view.txtDob.text,
        smokerStatus: this.view.flxSmokerYes.isVisible ? "Yes" : "No",
        gender: this.view.lstGender.selectedKeyValue[1],
        provience: this.view.lstProvince.selectedKeyValue[1],
        occupation: this.view.segOccupation.data[1].occupation_code,
        icomerange: this.view.lstIncome.selectedKey,
        levelofeducation: this.view.lstEducation.selectedKeyValue[1],
      };
      return basicInfo;
    },
    orderData: function(data, codeKey, input) {
      if(data.length == 0) return data;
      var resultData = [];
      var ignoreIndex = [];
      for (var i=0; i<data.length; i++) {
        if (data[i][codeKey].toLowerCase() === input.toLowerCase()) {
          resultData.push(data[i]);
          ignoreIndex.push(true);
        } else {
          ignoreIndex.push(false);
        }
      }

      for (var i=0; i<ignoreIndex.length; i++) {
        if(!ignoreIndex[i]) {
          resultData.push(data[i]);
        }
      }
      return resultData;
    },
    filterOccupationData: function () {
      var input = this.view.txtOccupation.text.toLowerCase();
      if (input.length < 1) {
        this.view.flxDropDownOccupation.setVisibility(false);
        this.view.segOccupation.setData([]);
        return;
      }
      this.view.flxDropDownOccupation.setVisibility(true);
      var reg = new RegExp(input);
      var data = this.occupationData.filter(function (occupation) {
        return occupation.occ_name.toLowerCase().startsWith(input);
      });
      data = this.orderData(data, "occ_name", input);
      this.view.segOccupation.setData(data);
      if (data.length > 0) {
        if (data.length === 1) {
          this.view.flxDropDownOccupation.height = "40dp";
        } else if (data.length === 2) {
          this.view.flxDropDownOccupation.height = "80dp";
        } else if (data.length === 3) {
          this.view.flxDropDownOccupation.height = "120dp";
        } else if (data.length === 4) {
          this.view.flxDropDownOccupation.height = "160dp";
        } else {
          this.view.flxDropDownOccupation.height = "220dp";
        }
        //errorComp.hideError();
        this.view.segOccupation.setVisibility(true);
      } else {
        this.view.flxDropDownOccupation.height = "220dp";
        this.view.flxDropDownOccupation.setVisibility(false);
      }
      this.view.forceLayout();
    },
    occupationRowClicked: function () {
      var selRow = this.view.segOccupation.selectedRowItems[0];
      this.view.txtOccupation.text = selRow.occ_name;
      this.view.flxDropDownOccupation.setVisibility(false);
    },
  };
});
