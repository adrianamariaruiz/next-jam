"use client"

import { Button } from "@/components/ui/button";
import { SignInButton, useAuth, UserButton } from '@clerk/clerk-react'
import { Authenticated, AuthLoading, Unauthenticated, useConvexAuth } from "convex/react";


export default function Home() {

  const { isLoading, isAuthenticated } = useConvexAuth();

  console.log('Auth isAuthenticated:', isAuthenticated);
  console.log('isLoading: ', isLoading);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <div className="">
          <p className="font-bold text-2xl">
            Your logged
          </p>
          <UserButton/>
        </div>

    </main>
  );
}
