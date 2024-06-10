import { NextResponse } from "next/server";
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
    const searchParams = req.nextUrl.searchParams;
    let user_idParam = searchParams.get("user_id");
    let is_confirmedParam = searchParams.get("is_confirmed");

    const data = await getSales({
      user_id: user_idParam,
      is_confirmed: is_confirmedParam,
    });
    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}

export async function PATCH(req, res) {
  try {
    const searchParams = req.nextUrl.searchParams;
    let order_id = searchParams.get("order_id");
    console.log(order_id);
    const data = await confirmOrder({ order_id });
    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}

async function getSales({ user_id, is_confirmed }) {
  try {
    let sql = "SELECT * FROM orders";
    let conditions = [];

    if (user_id) {
      conditions.push(`commercial_in_charge = '${user_id}'`);
    }

    if (is_confirmed != "") {
      conditions.push(`is_confirmed = '${is_confirmed}'`);
    }

    if (conditions.length > 0) {
      sql += " WHERE " + conditions.join(" AND ");
    }
    console.log(sql);
    const sales = await db.query({
      sql,
      timeout: 10000,
    });

    console.log(sales);
    return sales;
  } catch (error) {
    console.log(error);
  }
}

async function confirmOrder({ order_id }) {
  try {
    const result = await db.query({
      sql: "UPDATE orders SET is_confirmed = 'YES' WHERE matrix_id = ?",
      values: [order_id],
      timeout: 10000,
    });

    if (result.affectedRows == 1) {
      return { message: "Order confirmed" };
    }

    return { message: "Order not found" };
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
