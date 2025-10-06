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
import DialogReact from "./pages/dialog/DialogReact";
import DialogVue from "./pages/dialog/DialogVue";
import DialogSvelte from "./pages/dialog/DialogSvelte";
import DialogVanilla from "./pages/dialog/DialogVanilla";
import DrawerReact from "./pages/drawer/DrawerReact";
import DrawerVue from "./pages/drawer/DrawerVue";
import DrawerSvelte from "./pages/drawer/DrawerSvelte";
import DrawerVanilla from "./pages/drawer/DrawerVanilla";
import ToggleReact from "./pages/toggle/ToggleReact";
import ToggleVue from "./pages/toggle/ToggleVue";
import ToggleSvelte from "./pages/toggle/ToggleSvelte";
import ToggleVanilla from "./pages/toggle/ToggleVanilla";
import TooltipReact from "./pages/tooltip/TooltipReact";
import TooltipVue from "./pages/tooltip/TooltipVue";
import TooltipSvelte from "./pages/tooltip/TooltipSvelte";
import TooltipVanilla from "./pages/tooltip/TooltipVanilla";

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
          <Route path="/dialog/react" element={<DialogReact />} />
          <Route path="/dialog/vue" element={<DialogVue />} />
          <Route path="/dialog/svelte" element={<DialogSvelte />} />
          <Route path="/dialog/vanilla" element={<DialogVanilla />} />
          <Route path="/drawer/react" element={<DrawerReact />} />
          <Route path="/drawer/vue" element={<DrawerVue />} />
          <Route path="/drawer/svelte" element={<DrawerSvelte />} />
          <Route path="/drawer/vanilla" element={<DrawerVanilla />} />
          <Route path="/toggle/react" element={<ToggleReact />} />
          <Route path="/toggle/vue" element={<ToggleVue />} />
          <Route path="/toggle/svelte" element={<ToggleSvelte />} />
          <Route path="/toggle/vanilla" element={<ToggleVanilla />} />
          <Route path="/tooltip/react" element={<TooltipReact />} />
          <Route path="/tooltip/vue" element={<TooltipVue />} />
          <Route path="/tooltip/svelte" element={<TooltipSvelte />} />
          <Route path="/tooltip/vanilla" element={<TooltipVanilla />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
