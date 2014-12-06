Template.accountItem.helpers({
  description: function() {
    var a = document.createElement('a');
    a.href = this.description;
    return this.description;
  }
});