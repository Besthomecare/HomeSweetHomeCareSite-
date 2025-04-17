import React from "react";
import { Link } from "wouter";
import { Brain, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AIFeatureCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-accent">
      <div className="bg-gradient-to-r from-accent to-accent/80 p-6 text-white">
        <div className="flex items-center">
          <Brain className="w-10 h-10 mr-4" />
          <h3 className="font-heading text-2xl font-bold">AI Companionship Technology</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-lg mb-4">
          Our innovative AI Companionship technology provides 24/7 engagement, conversation, 
          and personalized interaction through voice or tablet-based solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold text-accent mb-2">Memory Support</h4>
            <p>AI provides gentle reminders and memory assistance throughout the day</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold text-accent mb-2">Personalized Experience</h4>
            <p>Interaction becomes more tailored with each conversation</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold text-accent mb-2">Continuous Presence</h4>
            <p>Available 24/7 to provide companionship and reduce isolation</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold text-accent mb-2">Easy Integration</h4>
            <p>Accessible via smart speakers or tablets for convenience</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="font-medium text-accent">Technology with heart that sets us apart</p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-white">
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AIFeatureCard;