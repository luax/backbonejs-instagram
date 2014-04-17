/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/picture.html',
], function ($, _, Backbone, PictureTemplate) {
  'use strict';

  var PictureView = Backbone.View.extend({
    template: _.template(PictureTemplate),
    tagName: 'div',
    className: 'col-sm-3 col-md-3',

    render: function() {
      var attr = this.model.toJSON(),
          caption = attr.caption;
      if (caption && caption.text) {
        caption.text = caption.text.match(/.{1,120}/g)[0];
      }
      this.$el.html(this.template(attr));
      return this;
    }

  });

  return PictureView;
});
