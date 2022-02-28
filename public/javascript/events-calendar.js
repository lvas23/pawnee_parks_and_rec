// Get the button that opens the modal
var btn = document.querySelectorAll('p.modal-button');
// Get the modal
var modals = document.querySelectorAll('.modal');
// Get the span element that closes the modal
var close = document.getElementsByClassName('close');

// When the user clicks on the date, open the modal
for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute('href'));
    modal.style.display = 'block';
  };
}

// When the user clicks on the X, close the modal
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined')
        modals[index].style.display = 'none';
    }
  };
}

// When user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined')
        modals[index].style.display = 'none';
    }
  }
};

var app = {
  settings: {
    container: $('.calendar'),
    calendar: $('.front'),
    days: $('.weeks span'),
    form: $('.back'),
    input: $('.back input'),
    buttons: $('.back button'),
  },

  init: function () {
    instance = this;
    settings = this.settings;
    this.bindUIActions();
  },

  swap: function (currentSide, desiredSide) {
    settings.container.toggleClass('flip');

    currentSide.fadeOut(900);
    currentSide.hide();
    desiredSide.show();
  },

  bindUIActions: function () {
    settings.days.on('click', function () {
      instance.swap(settings.calendar, settings.form);
      settings.input.focus();
    });

    settings.buttons.on('click', function () {
      instance.swap(settings.form, settings.calendar);
    });
  },
};

app.init();
