define({
    toggleSmokerSwitch: function () {
        var showingNo = this.view.flxSmokerNo.isVisible;
        this.view.flxSmokerNo.setVisibility(!showingNo);
        this.view.flxSmokerYes.setVisibility(showingNo);
    },

    postShow: function () {
        this.view.txtDob.placeholder = "DD/MM/YYYY";
        this.view.flxSmokerNo.isVisible = true;
        this.view.flxSmokerYes.isVisible = false;
        this.view.lstGender.selectedKey = "Select";
        this.view.lstProvince.selectedKey = "Select";
        this.view.lstOccupation.selectedKey = "Select";
        this.view.lstIncome.selectedKey = "Select";
        this.view.lstEducation.selectedKey = "Select";

        this.view.btnSmokerYes.onClick = this.toggleSmokerSwitch.bind(this);
        this.view.btnSmokerNo.onClick = this.toggleSmokerSwitch.bind(this);

        this.view.btnNext.onClick = function () {
            var basicInfo = this.userBasicInfo();
            var navManager = applicationManager.getNavigationManager();
            navManager.setCustomInfo("basicInfo", basicInfo);
            navManager.navigateTo({
                "appName": "HomePageMA",
                "friendlyName": "frmDashboard"
            });
        }.bind(this);
    },

    userBasicInfo: function () {
        var basicInfo = {
            "dateOfBirth": this.view.txtDob.text,
            "smokerStatus": this.view.flxSmokerYes.isVisible ? "Yes" : "No",
            "gender": this.view.lstGender.selectedKey,
            "provience": this.view.lstProvince.selectedKey,
            "occupation": this.view.lstOccupation.selectedKey,
            "icomerange": this.view.lstIncome.selectedKey,
            "levelofeducation": this.view.lstEducation.selectedKey
        };
        return basicInfo;
    },
    
});
