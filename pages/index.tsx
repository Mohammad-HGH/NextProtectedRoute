import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

export default function Home() {
  const router = useRouter();
  const token = "sdfmsdkfmslknafsljndfasklndfsjklndf"
  const logIn = (e: any) => {
    e.preventDefault();
    Cookies.set("loggedin", token);
    router.push("/dashboard");
  };

  return (
    <div>
      <Link href="/">
        <nav>
          <h1>Home</h1>
        </nav>
      </Link>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={(e) => logIn(e)}>
          <h1>Log In</h1>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}
