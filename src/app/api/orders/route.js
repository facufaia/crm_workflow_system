import { NextResponse } from "next/server";
import XlsxPopulate from "xlsx-populate";
import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "root",
    port: "3306",
    database: "matrix",
  },
});

export async function GET(req, res) {
  try {
    const data = await getSales();
    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}

async function getSales() {
  try {
    const sales = await db.query({
      sql: "SELECT * FROM orders",
      timeout: 10000,
    });
    console.log(sales);
    return sales;
  } catch (error) {
    console.log(error);
  }
}

function getPM(workbook) {
  const pm = workbook.sheet("ORDERS").range("A1:W1634").value();
  return pm;
}

function getCN(workbook) {
  const cn = workbook.sheet("ORDERS").range("A1:W1634").value();
  return cn;
}

function getPurchases(workbook) {
  const purchases = workbook.sheet("ORDERS").range("A1:W1634").value();
  return purchases;
}

// async function insertData(data) {
//   for (const row of data) {
//     const query = `INSERT INTO orders VALUES (${row
//       .map((value) => `'${value}'`)
//       .join(", ")})`;
//     console.log(query);
//     await db.query(query);
//   }
// }
