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
      if (session?.user.error) {
        await signOut({ redirect: false });
        const message = encodeURIComponent(
          session?.user.error.includes("refresh token") ? "Vui lòng đăng nhập." : "Invalid token.",
        );
        router.push(`/auth/login?msg=${message}&callbackUrl=${pathname}`);
      }
    };

    handleCheckToken();
  }, [session, pathname, router]);
  return null;
}
