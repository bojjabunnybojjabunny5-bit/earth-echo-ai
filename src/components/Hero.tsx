import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-earth.jpg";

const Hero = () => {
  const scrollToAction = () => {
    document.getElementById("take-action")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background/95" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary-foreground/20">
          <Leaf className="h-4 w-4 text-primary-foreground" />
          <span className="text-sm font-medium text-primary-foreground">Our Planet Needs You</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Protect Our Home,<br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Preserve Our Future
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
          Join millions in taking action against climate change, pollution, and environmental destruction. 
          Every small step creates lasting impact.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={scrollToAction}
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 shadow-2xl hover:shadow-primary/50"
          >
            Take Action Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 border-2 border-primary-foreground/30 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground backdrop-blur-sm transition-all duration-300"
            onClick={() => document.getElementById("learn-more")?.scrollIntoView({ behavior: "smooth" })}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
