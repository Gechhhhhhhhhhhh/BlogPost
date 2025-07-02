import Link from "next/link";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "../ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log("User info:", user);
  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Blog<span className="text-blue-500">GECH</span>
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-blue-500 transition-all"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium hover:text-blue-500 transition-all"
          >
            Dashboard
          </Link>
        </div>
      </div>
      {user ? (
        <div className="flex items-center gap-5">
          <p>{user.family_name}</p>
          <LogoutLink className={buttonVariants()}>Logout</LogoutLink>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <LoginLink className={buttonVariants()}>Login</LoginLink>

          <RegisterLink className={buttonVariants({ variant: "secondary" })}>
            Sign up
          </RegisterLink>
        </div>
      )}
    </nav>
  );
}
