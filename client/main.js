// MUST REQUIRE LANGUAGE EXTENSIONS IF YOU ARE NOT INCLUDING THE LIBRARY IN INDEX.HTML!!!
// require('../ext');
window.m = require('mithril');

const FirstComponent = require('./components/FirstComponent');

m.route(document.getElementById('app'), '/', {
  '/': {
    view: function() {
      return FirstComponent;
    }
  },
});
