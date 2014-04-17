/*global define*/

define([
  'jquery',
  'backbone',
  'views/instagram'
], function ($, Backbone, InstagramView) {
  'use strict';

  var InstagramRouter = Backbone.Router.extend({
    routes: {
      '' : 'index'
    },

    index: function() {
      new InstagramView();
    },

  });

  return InstagramRouter;
});
