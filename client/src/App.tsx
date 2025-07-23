import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { HelmetProvider } from "react-helmet-async";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Faq from "@/pages/faq";
import Contact from "@/pages/contact";
import Careers from "@/pages/careers";
import Privacy from "@/pages/privacy";
import NotFound from "@/pages/not-found";

function Router() {
  // This hook will automatically scroll to top when route changes
  useScrollToTop();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/faq" component={Faq} />
      <Route path="/contact" component={Contact} />
      <Route path="/careers" component={Careers} />
      <Route path="/privacy" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <div className="flex flex-col min-h-screen">
          <SiteHeader />
          <main className="flex-grow">
            <Router />
          </main>
          <SiteFooter />
        </div>
        <Toaster />
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
