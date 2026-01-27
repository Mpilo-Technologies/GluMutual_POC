define({
  //Initialize form data
  postShow: function () {
    this.selectedRating = null;
    this.resetRatingButtons();
    this.attachRatingButtonHandlers();
  },

  onSelectRate: function (rating) {
    this.selectedRating = rating;
    this.updateRatingButtonsUI(rating);
  },

  updateRatingButtonsUI: function (selectedRating) {
    for (var i = 0; i <= 10; i++) {
      var buttonId = "btnRating" + i;
      var button = this.view[buttonId];

      if (button) {
        if (i <= selectedRating) {
          button.skin = "defBtnPressed";
        } else {
          button.skin = "sknBtnGhost";
        }
      }
    }
  },

  resetRatingButtons: function () {
    for (var i = 0; i <= 10; i++) {
      var buttonId = "btnRating" + i;
      var button = this.view[buttonId];

      if (button) {
        button.skin = "sknBtnGhost";
      }
    }
    this.selectedRating = null;
  },

  getSelectedRating: function () {
    return this.selectedRating;
  },

  attachRatingButtonHandlers: function () {
    var self = this;

    for (var i = 0; i <= 10; i++) {
      (function (rating) {
        var buttonId = "btnRating" + rating;
        var button = self.view[buttonId];

        if (button) {
          button.onClick = function () {
            self.onSelectRate(rating);
          };
        }
      })(i);
    }
  },
});
