

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



export default function Home() {
  return ( 
    <div className="w-full min-h-screen relative flex flex-col items-center  bg-black  overflow-hidden">
             
      {/* <Header /> */}

      <HeroSection />

      <main 
      style={{
        backgroundColor:"#001e1b",
         background: "linear-gradient(rgb(0, 30, 27), #00311840, #1e00314a, #00102d4d, black, black)"
        
      }}
      
      className="main w-full pt-28 ">


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
        <section>
          <Beforeourupcomingcall/>
        </section>
        {/* bg-[#00d492] */}
        <section id="section_step_2" className="w-full h-fit flex justify-center pt-20 ">
            <Step2 />
        </section>
      </main>

      <Footer />


    </div>
  );
}
