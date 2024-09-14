import dynamic from "next/dynamic";
import CallToAction from "./_components/call-to-action";
import DashboardSnippet from "./_components/dashboard-snippet";
import Blackhole from "./_components/blackhole";

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
        <main className="flex flex-col h-full w-full">
            <div className=" flex flex-col relative -mt-40 z-20">            
                <Blackhole />
                </ div>
                <div className="relative -mt-80 z-20">
                <CallToAction />
                <DashboardSnippet />
            </div>
            <PricingSection />
        </main>
    )
}

