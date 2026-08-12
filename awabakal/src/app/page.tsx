import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import OurValues from "@/components/OurValues";
import WeEmpower from "@/components/WeEmpower";
import StrongerTogether from "@/components/StrongerTogether";
import Donation from "@/components/Donation";
import Moments from "@/components/Moments";
import FormsLinks from "@/components/FormsLinks";
import FAQ from "@/components/FAQ";
import ConnectTeam from "@/components/ConnectTeam";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <OurValues />
      <WeEmpower />
      <StrongerTogether />
      <Donation />
      <Moments />
      <FormsLinks />
      {/* FAQ and the CTA banner share one wash — the gradient lives here so it
          runs unbroken across both instead of restarting at the seam */}
      <div
        className="relative isolate overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, #fdf3ee 0%, #ffffff 18%, #ffffff 48%, #f6ecf6 78%, #f3e6f4 100%)",
        }}
      >
        {/* Figma "Ellipse 143031" / "Ellipse 143030" — brand purple at 30%
            with a 307 layer blur. They sit on the wrapper rather than inside
            FAQ so the blur is never cut off at the section boundary. */}
        <span
          aria-hidden
          className="pointer-events-none absolute -left-[274px] top-[34%] -z-10 hidden size-[670px] rounded-full bg-brand/30 blur-[307px] lg:block"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -right-[307px] top-[52%] -z-10 hidden size-[576px] rounded-full bg-brand/30 blur-[307px] lg:block"
        />

        <FAQ />
        <ConnectTeam />
      </div>
    </>
  );
}
