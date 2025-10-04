import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ButtonReact from "./pages/button/ButtonReact";
import ButtonVue from "./pages/button/ButtonVue";
import ButtonSvelte from "./pages/button/ButtonSvelte";
import ButtonVanilla from "./pages/button/ButtonVanilla";
import AccordionReact from "./pages/accordion/AccordionReact";
import AccordionVue from "./pages/accordion/AccordionVue";
import AccordionSvelte from "./pages/accordion/AccordionSvelte";
import AccordionVanilla from "./pages/accordion/AccordionVanilla";
import BreadcrumbReact from "./pages/breadcrumb/BreadcrumbReact";
import BreadcrumbVue from "./pages/breadcrumb/BreadcrumbVue";
import BreadcrumbSvelte from "./pages/breadcrumb/BreadcrumbSvelte";
import BreadcrumbVanilla from "./pages/breadcrumb/BreadcrumbVanilla";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/button/react" element={<ButtonReact />} />
          <Route path="/button/vue" element={<ButtonVue />} />
          <Route path="/button/svelte" element={<ButtonSvelte />} />
          <Route path="/button/vanilla" element={<ButtonVanilla />} />
          <Route path="/accordion/react" element={<AccordionReact />} />
          <Route path="/accordion/vue" element={<AccordionVue />} />
          <Route path="/accordion/svelte" element={<AccordionSvelte />} />
          <Route path="/accordion/vanilla" element={<AccordionVanilla />} />
          <Route path="/breadcrumb/react" element={<BreadcrumbReact />} />
          <Route path="/breadcrumb/vue" element={<BreadcrumbVue />} />
          <Route path="/breadcrumb/svelte" element={<BreadcrumbSvelte />} />
          <Route path="/breadcrumb/vanilla" element={<BreadcrumbVanilla />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
