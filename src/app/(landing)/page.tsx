import dynamic from "next/dynamic";
import CallToAction from "./_components/call-to-action";
import DashboardSnippet from "./_components/dashboard-snippet";
import Blackhole from "@/components/blackhole";

const PricingSection = dynamic(
    () =>
      import("./_components/pricing").then(
        (component) => component.PricingSection,
      ),
    { ssr: true },
  )

export default function Home() {
    return (
        // <main className="md:px-10 py-20 flex flex-col gap-36">
        <main className="h-full w-full">
            <div className="flex flex-col h-[850p] gap-20">
              
                <Blackhole />
          
                <CallToAction />
                <DashboardSnippet />
            </div>
            <PricingSection />
        </main>
    )
}

