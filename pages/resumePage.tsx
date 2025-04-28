/* eslint-disable @next/next/no-img-element */
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Resume } from "@/components/Resume";

const ResumePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-esteban_blue">
      <Header />
      <main className="flex-grow">
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default ResumePage;