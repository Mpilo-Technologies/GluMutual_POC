define({
    toggleSmokerSwitch: function () {
        var showingNo = this.view.flxSmokerNo.isVisible;
        this.view.flxSmokerNo.isVisible = !showingNo;
        this.view.flxSmokerYes.isVisible = showingNo;
    }
});
