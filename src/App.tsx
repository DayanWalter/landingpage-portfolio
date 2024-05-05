import CtaSection from "./components/cta-section";
import FaqSection from "./components/faq-section";
import FeaturesSection from "./components/features-section";
import HeroSection from "./components/hero-section";
import MetricsSection from "./components/metrics-section";
import { ModeToggle } from "./components/mode-toggle";
import QuoteSection from "./components/quote-section";
import SocialProofSection from "./components/social-proof-section";
import DesktopDivider from "./components/ui/desktop-devider";
import Divider from "./components/ui/divider";
// Dark Mode
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="orange" storageKey="vite-ui-theme">
        <ModeToggle />
        <HeroSection />
        <DesktopDivider />
        <SocialProofSection />
        <Divider />
        <FeaturesSection />
        <QuoteSection />
        <FaqSection />
        <Divider />
        <MetricsSection />
        <CtaSection />
      </ThemeProvider>
    </>
  );
}

export default App;
