"use client";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { PopupProvider } from "@/context/popupContext";
import VideoPopup from "@/components/VideoPopup";
import Mission from "@/components/Mission";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dream from "@/components/Dream";
import Welcome from "@/components/Welcome";
import Journey from "@/components/Journey";
import Place from "@/components/Place";
import Benefit from "@/components/Benefit";
import Process from "@/components/Process";
import Active from "@/components/Active";
import Ticket from "@/components/Ticket";
import RegisterPopup from "@/components/RegisterPopup";
import Footer from "@/components/Footer";
import Collections from "@/components/Collections";
import Testi from "@/components/Testi";
import Coach from "@/components/Coach";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <PopupProvider>
            <Header />
            <Hero />
            <About />
            <VideoPopup />
            <Mission />
            <Dream />
            <Welcome />
            <Journey />
            <Place />
            <Benefit />
            <Process />
            <Active />
            <Coach />
            <Testi />
            <Ticket />
            <Collections />
            <RegisterPopup />
            <Footer />
          </PopupProvider>
        </>
      )}
    </AnimatePresence>
  );
}
