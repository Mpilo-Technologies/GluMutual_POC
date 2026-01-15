define(["ApplicationManager"], function (applicationManager) {
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
      this.view.lstOccupation.onSelection = this.isValidData.bind(this);
      this.view.lstIncome.onSelection = this.isValidData.bind(this);
      this.view.lstEducation.onSelection = this.isValidData.bind(this);
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
          this.view.lstOccupation.selectedKeyValue[1]
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
        occupation: this.view.lstOccupation.selectedKeyValue[1],
        icomerange: this.view.lstIncome.selectedKeyValue[1],
        levelofeducation: this.view.lstEducation.selectedKeyValue[1],
      };
      return basicInfo;
    },
  };
});
