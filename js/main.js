/*global require*/
'use strict';

require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    }
  },
  paths: {
    jquery: './vendor/jquery/jquery',
    backbone: './vendor/backbone/backbone',
    underscore: './vendor/underscore/underscore',
    text: './vendor/requirejs-text/text'
  }
});

require([
  'backbone',
  'jquery',
  'routes/instagram'
], function (Backbone, $, InstagramRouter) {
  $(document.body).ready(function() {
    new InstagramRouter();
    Backbone.history.start();
  });
});
