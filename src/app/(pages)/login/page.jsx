"use client";
import { useSearchParams, useRouter } from "next/navigation";

const acceptedUsers = [
  { user_id: "Martin", username: "martin", password: "1234" },
  { user_id: "Ezequiel", username: "ezequiel", password: "1234" },
  { user_id: "Fabricio", username: "fabricio", password: "1234" },
  { user_id: "Javier", username: "javier", password: "1234" },
  { user_id: "Marcelo", username: "marcelo", password: "1234" },
  { user_id: "AMI", username: "ami", password: "1234" },
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
      // Establecer una cookie que expire en 1 día
      const d = new Date();
      d.setTime(d.getTime() + 10 * 60 * 1000); // 10m en milisegundos
      const expires = "expires=" + d.toUTCString();
      document.cookie = "loggedIn=true; " + expires + "; path=/";
      document.cookie = "user_id=" + user.user_id + "; " + expires + "; path=/"; // Guardar user_id en otra cookie

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
