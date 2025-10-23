import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Users, Target, Heart } from "lucide-react";

const pledges = [
  { icon: CheckCircle2, text: "Reduce single-use plastics", count: "12,453" },
  { icon: CheckCircle2, text: "Plant a tree this month", count: "8,721" },
  { icon: CheckCircle2, text: "Use public transport weekly", count: "15,892" },
  { icon: CheckCircle2, text: "Go vegetarian one day/week", count: "9,334" },
];

const TakeAction = () => {
  const [email, setEmail] = useState("");
  const [selectedPledges, setSelectedPledges] = useState<number[]>([]);
  const { toast } = useToast();

  const togglePledge = (index: number) => {
    setSelectedPledges(prev =>
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email to join our community.",
        variant: "destructive",
      });
      return;
    }

    if (selectedPledges.length === 0) {
      toast({
        title: "Select a Pledge",
        description: "Choose at least one action you commit to taking.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Welcome to the Movement! 🌱",
      description: `You've joined ${selectedPledges.length} pledge${selectedPledges.length > 1 ? 's' : ''}. Together we make a difference!`,
    });

    setEmail("");
    setSelectedPledges([]);
  };

  return (
    <section id="take-action" className="py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Join the Movement</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Take Your Green Pledge Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a global community committed to environmental action
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center border-2">
              <Users className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">47,892+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </Card>
            
            <Card className="p-6 text-center border-2 border-primary bg-primary/5">
              <Target className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">156,342</div>
              <div className="text-sm text-muted-foreground">Pledges Made</div>
            </Card>
            
            <Card className="p-6 text-center border-2">
              <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">89%</div>
              <div className="text-sm text-muted-foreground">Pledge Completion</div>
            </Card>
          </div>

          <Card className="p-8 border-2">
            <form onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold mb-6">Select Your Commitments</h3>
              
              <div className="space-y-3 mb-8">
                {pledges.map((pledge, index) => (
                  <div
                    key={index}
                    onClick={() => togglePledge(index)}
                    className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      selectedPledges.includes(index)
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedPledges.includes(index)
                          ? "bg-primary border-primary"
                          : "border-muted-foreground"
                      }`}>
                        {selectedPledges.includes(index) && (
                          <pledge.icon className="h-4 w-4 text-primary-foreground" />
                        )}
                      </div>
                      <span className="font-medium">{pledge.text}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{pledge.count} joined</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-lg py-6"
                />
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg py-6"
                >
                  Join & Make a Pledge
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TakeAction;
