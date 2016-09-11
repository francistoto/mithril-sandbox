const m = require('mithril');

const FirstComponent = module.exports;

FirstComponent.controller = function() {
  const ctrl = this;
  ctrl.name = 'Frank';
  ctrl.condition = 'Mithril Sandbox';
};

FirstComponent.view = function(ctrl) {
  return m('.greeting', [
    m('h1', `Hello, my name is ${ctrl.name}`),
    m('h2', `and this is my ${ctrl.condition}`),
    m('.user-input', [
      m('input.name[type="text"]' , {oninput: function(e) {ctrl.name = e.currentTarget.value;}}),
      m('input.username[type="text"]' , {oninput: function(e) {ctrl.condition = e.currentTarget.value;}})
    ])
  ]);
}