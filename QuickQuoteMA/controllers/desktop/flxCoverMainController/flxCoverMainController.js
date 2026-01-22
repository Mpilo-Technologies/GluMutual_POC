define([], function () {
  return {
    //Type your controller code here
    editAmountOnSlide: function () {
      var currForm = voltmx.application.getCurrentForm();
      var index = currForm.segCovers.selectedRowIndex[1];
      var coverData = currForm.segCovers.data[index];
      var selectedValue = coverData.sliderData.maxValue * (this.view.sldCover.selectedValue / 100);
      coverData.displayAmount = selectedValue;
      currForm.segCovers.setDataAt(coverData, index);
    },

    editAmountOnTextChange: function () {
      var currForm = voltmx.application.getCurrentForm();
      var index = currForm.segCovers.selectedRowIndex[1];
      var coverData = currForm.segCovers.data[index];
      var enteredValue = this.view.txtAmount.text;
      coverData.sliderData.selectedValue = (enteredValue / coverData.sliderData.maxValue) * 100;
      currForm.segCovers.setDataAt(coverData, index);
    },
  };
});
