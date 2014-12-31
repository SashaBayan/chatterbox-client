var app = Backbone.Model.extend({
  initialize: function(message, username, room){
    if(message && username && room){
      this.set({
        message: message,
        username: username,
        room: room
      })
    }
  }
})

var newApp = new app('yo', 'yeah', 'uh-huh');

var Commentsview = Backbone.View.extend({
  initialize: function(){
    this.modle.on('change:message', this.render, this);
  },
  render: function(){
    var html = [
      '<ul>',
      '<li class="messages">',
      this.model.get('user'),
      this.model.get('message'),
      '</li>',
      '</ul>'
    ].join('');

    var yeah = this.$el.html(html);
    this.$el.find('body').append(yeah);
  }
})

var myComments = Commentsview();
