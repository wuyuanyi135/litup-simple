let DataStore = require ("nedb");
let db = new DataStore({
  filename: 'nedb.db',
  autoload: true
});

let newDb = new DataStore({
  filename: 'nedb_new.db',
  autoload: true
});


db.find({}).exec((err, doc) => {
  const convertedDataset = doc.map((v, i) => ({
    title: v.title,
    citation: v.citation,
    year: v._content.citations.citation.year,
    target: v.target
  }));

  newDb.insert(convertedDataset, err => {
    if (err) console.log(err); else console.log('Succeed!');
  });
});
