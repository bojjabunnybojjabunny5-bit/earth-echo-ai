import Hero from "@/components/Hero";
import EnvironmentalIssues from "@/components/EnvironmentalIssues";
import EcoTips from "@/components/EcoTips";
import TakeAction from "@/components/TakeAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EnvironmentalIssues />
      <EcoTips />
      <TakeAction />
      <Footer />
    </div>
  );
};

export default Index;
