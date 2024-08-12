import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/lib/auth';
import { ChildrenProps } from '@/types/childrenprops';
const AuthProviders: React.FC<ChildrenProps> = async ({ children }) => {
  const session = await auth();
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProviders;
