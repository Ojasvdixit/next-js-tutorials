//! In Next.js (App Router), a Route Group is a way to organize your routes into folders without affecting the URL path. 

//@ 👉 Basically, it’s a folder inside the app/ directory wrapped in parentheses ( ), and Next.js ignores the folder name when building routes.

import { inter } from "@/app/ui/fonts";
export default function LoginPage() { 
  return <div className= {inter.className}>Login Page</div>;
}