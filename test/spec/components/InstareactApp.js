'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var InstareactApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    InstareactApp = require('../../../src/scripts/components/InstareactApp.js');
    component = React.createElement(InstareactApp);
  });

  it('should create a new instance of InstareactApp', function () {
    expect(component).toBeDefined();
  });
});
