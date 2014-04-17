/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'models/instagram',
  'collections/instagram',
  'views/picture',
], function ($, _, Backbone, InstagramModel, InstagramCollection, PictureView) {
  'use strict';

  var InstagramView = Backbone.View.extend({
    el: '#instagram',

    events: {
      'click #fetch' : 'fetch',
      'click #paginate' : 'paginate',
      'click #poll' : 'poll'
    },

    picturesToFetch: 8,
    pollingInterval: 10000,

    $pictures: $('#pictures'),

    initialize: function() {
      this.collection = new InstagramCollection();
    
      this.listenTo(this.collection, 'add', this.addPicture);
      this.polling(this);
    },

    addPicture: function(picture, collection, options) {
      var pictureView = new PictureView({ model: picture });
      if(options.prepend) {
        this.$pictures.prepend(pictureView.render().el);
      } else {
        this.$pictures.append(pictureView.render().el);
      }
    },

    paginate: function() {
      this.collection.fetch({
        data: {
          max_tag_id: this.collection.getMaxId(),
          count: this.picturesToFetch
        },
        add: true,
        merge: true,
        remove: false
      });
    },

    fetch: function() {
      this.collection.fetch({
        data: {
          count: this.picturesToFetch
        }
      });
    },

    polling: function(self) {
      setInterval(function() { self.poll(); }, this.pollingInterval);
    },

    poll: function() {
      this.collection.fetch({
        data: {
          count: this.picturesToFetch
        },
        add: true,
        merge: true,
        remove: false,
        prepend: true
      });
    }

  });

  return InstagramView;
});
