import Image from "next/image";
import React, { useState } from "react";
import Tabs from "./Tabs";

function Agenda() {
  return (
    <section className="md:py-section py-sectionMB bg-[url(/images/bg-gradient.png)] bg-center bg-cover">
      <div className="page-container max-w-[1200px] flex gap-7 lg:gap-16">
        <div className="hidden md:block w-[130px] lg:w-[260px] flex-shrink-0">
          <div>
            <Image
              width={221}
              height={122}
              src="/images/agenda-heading1.svg"
              alt=""
            />
          </div>
          <div>
            <Image
              width={260}
              height={737}
              src="/images/agenda-heading2.svg"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1">
          <Tabs />
        </div>
      </div>
    </section>
  );
}

export default Agenda;
