/*global define*/

define([
  'underscore',
  'backbone',
  'models/instagram'
], function (_, Backbone, InstagramModel) {
  'use strict';

  var InstagramCollection = Backbone.Collection.extend({
    model: InstagramModel,
    initialize: function() {
      this.endpoint = 'https://api.instagram.com/v1';
    },

    url: function() {
      return this.endpoint + '/tags/' + $('#tag').val() + '/media/recent?client_id=' + $('#id').val() + '&callback=?';
    },

    parse: function(response) {
      this.pagination = response.pagination;
      return response.data;
    },

    getMaxId: function() {
      return this.pagination.next_max_tag_id;
    }

  });

  return InstagramCollection;
});
