/*global define*/

define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  'use strict';

  var InstagramModel = Backbone.Model.extend({
    defaults: {
    },

    initialize: function(data) {
      this.size = 'low_resolution';
      this.set({'image_link' : this.imageLink(data)});
    },

    imageLink: function(data) {
      if(this.size === 'low_resolution') {
        return data.images.low_resolution.url;
      } else if(this.size === 'standard_resolution') {
        return data.images.standard_resolution.url;
      } else if(this.size === 'thumbnail') {
        return data.images.thumbnail.url;
      }
    }
  });

  return InstagramModel;
});
