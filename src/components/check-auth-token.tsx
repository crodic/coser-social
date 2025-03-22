"use client";

import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CheckAuthToken() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const handleCheckToken = async () => {
      console.log(">>> CALL HANDLE CHECK TOKEN", session?.error);
      if (session?.error) {
        await signOut({ redirect: false });
        router.push(`/auth/login?callbackUrl=${pathname}`);
      }
    };

    handleCheckToken();
  }, [session, pathname, router]);
  return null;
}
