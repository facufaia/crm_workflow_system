export async function confirmOrder({ order_id }) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/orders?order_id=${order_id}`,
      {
        method: "PATCH",
        cache: "no-store",
      }
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteOrder({ order_id }) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/orders?order_id=${order_id}`,
      {
        method: "DELETE",
        cache: "no-store",
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function editOrder({ order_id }) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/orders?order_id=${order_id}`,
      {
        method: "PATCH",
        cache: "no-store",
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
}
