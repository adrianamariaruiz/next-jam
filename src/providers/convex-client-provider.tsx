"use client"

import {ClerkProvider} from "@clerk/nextjs";
import { useAuth } from "@clerk/clerk-react";
import {ConvexProviderWithClerk} from "convex/react-clerk";
import {Authenticated, AuthLoading, ConvexReactClient, Unauthenticated} from "convex/react";

import { SignInButton } from "@clerk/nextjs";
import { Loading } from "@/components/auth/loading";

interface ConvexProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({children}: ConvexProviderProps) => {

  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
      
        <AuthLoading>
          <Loading/>
        </AuthLoading>
        
        <Authenticated>
          {children}
        </Authenticated>

        <Unauthenticated>
            <SignInButton />
        </Unauthenticated>

      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
};