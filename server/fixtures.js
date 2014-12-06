if (Accounts.find().count() === 0) {
  Accounts.insert({
    name: 'Consors',
    description: 'Consors Account'
  });

  Accounts.insert({
    name: 'Volksbank',
    description: 'Volksbank Michael'
  });

  Accounts.insert({
    name: 'IngDiba',
    description: 'Ing Diba Account'
  });
}