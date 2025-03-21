import * as SQLite from 'expo-sqlite';
import Place from '../models/place';

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

export const insertPlace = async place => {
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

export const fetchPlaces = () => {
  const promise = new Promise((resolve, reject) => {
    database.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM places',
        [],
        (_, result) => {
          const places = [];

          result.rows_array.forEach(row => {
            places.push(
              new Place(
                row.title,
                row.imageUri,
                {
                  address: row.address,
                  lat: row.lat,
                  lng: row.lng,
                },
                row.id,
              ),
            );
          });

          resolve(places);
        },
        (_, error) => {
          reject(error);
        },
      );
    });
  });
};
