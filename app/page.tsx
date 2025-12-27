

import {
  // Header,
  HeroSection,
  // Process,
  // FAQs,
  // About,
  // CaseStudies,
  // Forecast,
  Footer,
  // Months,
  // DownloadList
} from "@/components/index";
import Beforeourupcomingcall from "@/components/beforeourupcomingcall";
import Step2 from "@/components/step2";
import OurProgram from "@/components/ourprogram";



export default function Home() {
  return (
    <div className="w-full h-full min-h-screen relative flex flex-col items-center  bg-black  overflow-hidden">

      {/* <Header /> */}

      <HeroSection />

      <main
        className="w-full h-full"
      >


        {/* <section id="process" className="flex w-full justify-center items-center max-w-5xl mx-auto scroll-mt-[130px] -mt-20">
          <Process />
        </section> */}

        {/* <section id="months" className="flex w-full justify-center items-center max-w-5xl mx-auto scroll-mt-[130px]">
          <Months />
        </section> */}

        {/* <section id="case-studies" className="flex w-full justify-center items-center max-w-5xl mx-auto scroll-mt-[130px]">
          <CaseStudies />
        </section> */}

        {/* <section id="forecast" className="flex w-full justify-center items-center max-w-7xl mx-auto scroll-mt-[130px]">
          <Forecast />
        </section> */}

        {/* <section id="sales" className="flex w-full justify-center items-center max-w-7xl mx-auto scroll-mt-[130px]">
          <Sales />
        </section> */}

        {/* <section id="about" className="flex w-full justify-center items-center max-w-5xl mx-auto scroll-mt-[130px]">
          <About />
        </section> */}

        {/* <section id="faqs" className="flex w-full justify-center items-center max-w-5xl mx-auto scroll-mt-[130px]">
          <FAQs />
        </section> */}

        {/* <section id="download" className="flex w-full justify-center items-center max-w-5xl mx-auto scroll-mt-[130px]">
          <DownloadList />
        </section> */}

        <section id="section_step_2" className="w-full h-fit flex justify-center py-12 bg-gradient-to-b from-[rgb(2,30,27)] to-black
        bg-cover bg-center bg-no-repeat">
          <Step2 />
        </section>

        <section>
          <OurProgram />
        </section>
        <section>
          <Beforeourupcomingcall />
        </section>
        {/* bg-[#00d492] */}

      </main>

      <Footer />


    </div>
  );
}
