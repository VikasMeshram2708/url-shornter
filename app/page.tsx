import { UrlInput } from "@/components/UrlInput";

export default function Home() {
  return (
    <main className="min-h-screen font-Poppins">
      <div>
        <h1 className="text-blue-500 text-6xl text-center mt-10 font-[500]">
          Free Url Shortener!
        </h1>
        <p className="text-center mt-5 text-xl">Shorten your URLs with ease</p>
      </div>

      {/* Url Input */}
      <UrlInput />
    </main>
  );
}
