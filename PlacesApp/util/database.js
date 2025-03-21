import * as SQLite from 'expo-sqlite';

let database = null;

export const init = async () => {
  try {
    // Open database and log what methods are available
    database = await SQLite.openDatabaseAsync('places.db');
    console.log('Database object methods:', Object.keys(database));

    // Try using the exec method instead of transaction
    await database.execAsync(
      `CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      imageUri TEXT NOT NULL,
      address TEXT NOT NULL,
      lat REAL NOT NULL,
      lng REAL NOT NULL
      )`,
    );

    return Promise.resolve();
  } catch (error) {
    console.log('Database initialization error:', error);
    return Promise.reject(error);
  }
};

export const insertPlace = async place => {K/+
  console.log(place);
  if (!database) {
    return Promise.reject('Database not initialized');
  }

  try {
    const result = await database.execAsync(
      `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
      [place.title, place.imageUri, place.address, place.location.lat, place.location.lng],
    );

    console.log('Insert result:', result);
    return Promise.resolve(result);
  } catch (error) {
    console.log('Insert error:', error);
    return Promise.reject(error);
  }
};
