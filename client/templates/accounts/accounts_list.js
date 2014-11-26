var accountsData = [
  {
    name: 'Introducing Telescope',
    description: 'http://sachagreif.com/introducing-telescope/'
  }, 
  {
    name: 'Meteor',
    description: 'http://meteor.com'
  }, 
  {
    name: 'The Meteor Book',
    description: 'http://themeteorbook.com'
  }
];
Template.accountsList.helpers({
  accounts: accountsData
});