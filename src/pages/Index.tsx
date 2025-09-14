import Hero from "@/components/Hero";
import About from "@/components/About";
import SessionTypes from "@/components/SessionTypes";
import FAQ from "@/components/FAQ";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Hero />
      <About />
      <SessionTypes />
      <FAQ />
      <WaitlistForm />
      <Footer />
    </div>
  );
};

export default Index;
