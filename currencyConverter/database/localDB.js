// import SQLite from 'react-native-sqlite-storage';

// // Open the database
// const db = SQLite.openDatabase({ name: 'myApp.db', location: 'default' });

// // Create a table
// export const createTable = () => {
//     db.transaction(tx => {
//     tx.executeSql(
//         'CREATE TABLE IF NOT EXISTS currencies (id INTEGER PRIMARY KEY AUTOINCREMENT, symbol TEXT, name TEXT)',
//         [],
//         (_, error) => {
//         if (error) {
//             console.error('Error creating table:', error);
//         }
//         }
//     );
//     });

// };
// // Insert currency data
// export const insertCurrency = (symbol, name) => {
//   db.transaction(tx => {
//     tx.executeSql(
//       'INSERT INTO currencies (symbol, name) VALUES (?, ?) ORDER BY name ASC',
//       [symbol, name],
//       (_, error) => {
//         if (error) {
//           console.error('Error inserting currency:', error);
//         }
//       }
//     );
//   });
// };

// // Get all currencies
// export const getAllCurrencies = callback => {
//   db.transaction(tx => {
//     tx.executeSql(
//       'SELECT * FROM currencies',
//       [],
//       (_, { rows }) => {
//         callback(rows._array);
//       },
//       (_, error) => {
//         console.error('Error fetching currencies:', error);
//       }
//     );
//   });
// };