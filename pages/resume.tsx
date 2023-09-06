/* eslint-disable @next/next/no-img-element */
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Resume } from "@/components/Resume";

const resume = () => {
  return (
    <div className="min-h-full">
      <Header />
      <Resume />
      <Footer />
    </div>
  );
};

export default resume;
