import Hero from "@/components/Hero";
import About from "@/components/About";
import SessionTypes from "@/components/SessionTypes";
import UpcomingSessions from "@/components/UpcomingSessions";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Hero />
      <About />
      <SessionTypes />
      <UpcomingSessions />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
