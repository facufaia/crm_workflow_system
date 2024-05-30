"use client";
import { useSearchParams, useRouter } from "next/navigation";

const acceptedUsers = [
  { username: "martin", password: "1234" },
  { username: "user", password: "1234" },
];

export default function LoginPage() {
  const searchParams = useSearchParams();
  const Router = useRouter();

  const redirectURL = searchParams.get("redirect")
    ? searchParams.get("redirect")
    : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    const user = acceptedUsers.find(
      (user) => user.username === username && user.password === password
    );
    console.log(redirectURL);
    if (user) {
      alert("login successful");
      Router.push(redirectURL);
      return;
    }

    alert("login failed");
  };

  return (
    <main className="w-full h-screen grid grid-cols-8 items-center justify-center">
      <section className="col-start-3 col-end-7 bg-blue-800 flex flex-col gap-6 p-6">
        <h1 className="col-span-4 bg-red-800 w-full text-2xl">Login</h1>
        <form
          onSubmit={submitHandler}
          className="col-span-4 text-black bg-red-800 flex flex-col gap-6 w-full items-center justify-center h-full"
        >
          <input
            type="text"
            name="username"
            placeholder="username"
            required
            className="px-2 py-2 rounded-md w-96"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            className="px-2 py-2 rounded-md w-96"
          />
          <button
            type="submit"
            className="p-2 bg-white text-black rounded-md w-96"
          >
            LOGIN
          </button>
        </form>
      </section>
    </main>
  );
}
