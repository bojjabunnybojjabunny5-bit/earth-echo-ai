import { Card } from "@/components/ui/card";
import { 
  Recycle, 
  ShoppingBag, 
  Lightbulb, 
  Bike, 
  Home, 
  Utensils 
} from "lucide-react";

const tips = [
  {
    icon: Recycle,
    title: "Reduce, Reuse, Recycle",
    description: "Sort waste properly, compost organic materials, and recycle paper, plastic, and glass to minimize landfill waste.",
  },
  {
    icon: ShoppingBag,
    title: "Sustainable Shopping",
    description: "Choose reusable bags, buy local products, and support eco-friendly brands that prioritize sustainability.",
  },
  {
    icon: Lightbulb,
    title: "Conserve Energy",
    description: "Switch to LED bulbs, unplug unused devices, and use energy-efficient appliances to reduce consumption.",
  },
  {
    icon: Bike,
    title: "Green Transportation",
    description: "Walk, bike, or use public transport when possible. Carpool to reduce carbon emissions significantly.",
  },
  {
    icon: Home,
    title: "Water Conservation",
    description: "Fix leaks, take shorter showers, and collect rainwater for gardens to preserve precious water resources.",
  },
  {
    icon: Utensils,
    title: "Eat Sustainably",
    description: "Reduce meat consumption, avoid food waste, and choose organic, locally-sourced produce when available.",
  },
];

const EcoTips = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple Steps for a Greener Life
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Small changes in daily habits can create powerful environmental impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary group"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <tip.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {tip.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoTips;
