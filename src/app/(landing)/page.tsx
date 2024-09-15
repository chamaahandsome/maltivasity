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
        <main >
            <div className=" -mt-40">            
                <Blackhole />
                </ div>
                <div className=" -mt-80">
                <CallToAction />
                <DashboardSnippet />
            </div>
            <PricingSection />
        </main>
    )
}

