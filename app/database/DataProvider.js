// @flow
import DataStore from 'nedb';

const db = new DataStore({
  filename: 'app/database/nedb.db',
  autoload: true
});

export type RecordType = {
  year: string,
  citation: string,
  title: string,
  url: string,
  target: {
    type: string,
    url: string
  }
};

type returnType = Promise<Array<RecordType>>;
export async function getData(count: number = 20): returnType {
  const result = new Promise((resolve, reject) => {
    db.find({}).sort({ year: -1 }).limit(count).exec((err, doc) => {
      if (err) reject(err); else resolve(doc);
    });
  });
  return result;
}

