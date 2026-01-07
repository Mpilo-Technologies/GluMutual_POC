define({ 

 //Type your controller code here 
     postShow: function() {  
      this.view.flxRow.sldCover.onSlide = this.editAmountOnSlide.bind(this);
      this.view.flxRow.txtAmount.onTextChange = this.editAmountOnTextChange.bind(this);    

    },

    editAmountOnSlide: function() {
      var currForm = voltmx.application.getCurrentForm();
      var index = currForm.segCovers.selectedRowIndex[0];
      var coverData = this.view.segCovers.data[index];
      var selectedValue = this.view.flxRow.sldCover.selectedValue;
      coverData.displayAmount = selectedValue;
      this.view.segCovers.setDataAt(coverData, index);
    },

    editAmountOnTextChange: function() {
      var currForm = voltmx.application.getCurrentForm();
      var index = currForm.segCovers.selectedRowIndex[0];
      var coverData = this.view.segCovers.data[index];
      var enteredValue = this.view.flxRow.txtAmount.text;
      coverData.sliderData.selectedValue = enteredValue;
      this.view.segCovers.setDataAt(coverData, index);
    }

 });