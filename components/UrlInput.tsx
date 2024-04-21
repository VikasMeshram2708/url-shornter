"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { URL } from "@/interfaces/Url";
import { Copy, Trash2 } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "./ui/use-toast";

export function UrlInput() {
  const [url, setUrl] = useState("");
  const [allUrls, setAllUrls] = useState<URL[]>([]);

  useEffect(() => {
    const previousTinyUrls = localStorage.getItem("tinyUrls");
    if (previousTinyUrls) {
      setAllUrls(JSON.parse(previousTinyUrls as string));
    }
  }, []);

  // Handle the submission form
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/shortUrl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    const result = await response.json();
    // console.log(result);
    // toast({
    //   title: result?.message,
    // });
    const newUrl: { id: number; url: string } = {
      id: Date.now(),
      // http://localhost:3000/api/redirectUrl?redirectSlug=esnwt-g
      url: `${window.location.origin}/api/redirectUrl?redirectSlug=${result?.uniqueSlug}`,
    };

    setAllUrls([...allUrls, newUrl]);
    localStorage.setItem("tinyUrls", JSON.stringify([...allUrls, newUrl]));
    setUrl("");
    console.log({ url });
  };

  // Handle Copy
  const handleCopy = (url: string) => {
    try {
      window.navigator.clipboard.writeText(url as string);
      return toast({
        title: "Link Copied",
      });
    } catch (error) {
      const err = error as Error;
      return toast({
        title: err?.message,
      });
    }
  };

  // Handle Delete
  const handleDelete = (id: number) => {
    try {
      const filteredTinyUrls = allUrls.filter((item) => item?.id !== id);
      setAllUrls(filteredTinyUrls);
      localStorage.setItem("tinyUrls", JSON.stringify(filteredTinyUrls));
    } catch (error) {
      const err = error as Error;
      return toast({
        title: err?.message,
      });
    }
  };
  return (
    <section>
      <form
        onSubmit={handleFormSubmit}
        className="container mx-auto mt-10 flex w-full max-w-lg items-center space-x-2"
      >
        <Input
          autoFocus
          value={url}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUrl(e?.target?.value)
          }
          type="text"
          name="urlInput"
          placeholder="Enter URL here..."
          className="w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Shorten
        </Button>
      </form>

      <ul className="max-w-3xl mx-auto mt-10 grid gap-3">
        {allUrls
          ?.map((item) => (
            <div
              key={item?.id}
              className="flex items-center justify-between bg-secondary py-2 px-4 rounded-md"
            >
              <li>{item?.url}</li>
              <div className="flex items-center gap-3 flex-wrap">
                <Copy
                  className="cursor-pointer hover:text-green-500"
                  onClick={() => handleCopy(item?.url)}
                />
                <Trash2
                  className="cursor-pointer hover:text-red-500"
                  onClick={() => handleDelete(item?.id)}
                />
              </div>
            </div>
          ))
          .reverse()}
      </ul>
    </section>
  );
}
