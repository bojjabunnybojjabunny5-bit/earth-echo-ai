import { Card } from "@/components/ui/card";
import { TreeDeciduous, Droplets, Wind, Factory } from "lucide-react";
import forestImage from "@/assets/forest-conservation.jpg";
import oceanImage from "@/assets/ocean-life.jpg";
import renewableImage from "@/assets/renewable-energy.jpg";

const issues = [
  {
    icon: TreeDeciduous,
    title: "Deforestation",
    description: "Every minute, forests the size of 40 football fields are destroyed. We've lost 80% of our original forests.",
    image: forestImage,
    stat: "10 billion trees cut annually",
  },
  {
    icon: Droplets,
    title: "Ocean Pollution",
    description: "Over 8 million tons of plastic enter our oceans yearly, threatening marine ecosystems and biodiversity.",
    image: oceanImage,
    stat: "1 million marine animals die yearly",
  },
  {
    icon: Wind,
    title: "Climate Change",
    description: "Global temperatures have risen 1.1°C since pre-industrial times, causing extreme weather and ecosystem disruption.",
    image: renewableImage,
    stat: "CO2 levels at 420 ppm",
  },
  {
    icon: Factory,
    title: "Air Pollution",
    description: "Air pollution causes 7 million premature deaths annually, affecting both human health and environmental quality.",
    image: forestImage,
    stat: "91% breathe polluted air",
  },
];

const EnvironmentalIssues = () => {
  return (
    <section id="learn-more" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Critical Environmental Challenges
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding these issues is the first step toward meaningful change
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {issues.map((issue, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-2 hover:border-primary transition-all duration-500 hover:shadow-xl bg-card"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={issue.image} 
                  alt={issue.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground p-3 rounded-full">
                  <issue.icon className="h-6 w-6" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{issue.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {issue.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-destructive">
                  <div className="h-1 w-1 rounded-full bg-destructive" />
                  {issue.stat}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalIssues;
