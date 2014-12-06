Template.accountsList.helpers({
	accounts: function() {
		return Accounts.find();
	}
});