"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function RedirectUrl({ params }: { params: { slug: string } }) {
  const router = useRouter();
  useEffect(() => {
    const redirectToUrl = async (slug: string) => {
      try {
        const response = await fetch(`/api/redirectUrl?redirectSlug=${slug}`);
        const result = await response.json();
        // console.log(result);
        return router.push(result?.url)
      } catch (error) {
        const err = error as Error;
        console.log(`Something went wrong. Please try again. :${err?.message}`);
      }
    };
    redirectToUrl(params?.slug);
  }, [params, router]);
}
