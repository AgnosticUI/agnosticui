import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ButtonReact from "./pages/button/ButtonReact";
import ButtonVue from "./pages/button/ButtonVue";
import ButtonSvelte from "./pages/button/ButtonSvelte";
// import ButtonVanilla from "./pages/button/ButtonVanilla";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/button/react" element={<ButtonReact />} />
          <Route path="/button/vue" element={<ButtonVue />} />
          <Route path="/button/svelte" element={<ButtonSvelte />} />
          {/* <Route path="/button/vanilla" element={<ButtonVanilla />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
