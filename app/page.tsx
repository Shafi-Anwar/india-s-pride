import Header from "@/components/Header";
import "./globals.css";
import Image from "next/image";
import Features from "@/components/features";

export default function Home() {
  return (
    <>
      <div
        className="hero"
      >
<p className="hero-text">Let's make Our India Intelligent</p>

      </div>
      <div>
        <h1 className="text-[4rem] text-center font-extrabold font-['PP_Neue_Machina']">India: Leading in Innovation and Technology
        </h1>
        <Features />
</div>
    </>
  );
}
