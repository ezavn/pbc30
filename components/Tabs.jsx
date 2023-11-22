import React, { useState } from "react";
import Tab from "./Tab";
import { motion } from "framer-motion";
import { day1, day2, day3 } from "@/data";
import Image from "next/image";

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const tabContentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="w-full">
      <div className="relative flex items-center gap-3 md:gap-5">
        <Tab
          label="Ngày 1"
          isActive={activeTab === 1}
          onClick={() => changeTab(1)}
        />
        <Tab
          label="Ngày 2"
          isActive={activeTab === 2}
          onClick={() => changeTab(2)}
        />
        <Tab
          label="Ngày 3"
          isActive={activeTab === 3}
          onClick={() => changeTab(3)}
        />
        <div className="hidden lg:block absolute -top-[60px] left-[530px]">
          <Image
            width={281}
            height={126}
            src="/images/agenda-click.svg"
            alt=""
          />
        </div>
      </div>
      <motion.div
        className="mt-8 md:mt-11"
        variants={tabContentVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        {activeTab === 1 && (
          <div className="border-t border-t-white">
            {day1.map((item) => {
              return (
                <div key={item.id}>
                  <AgendaContent agenda={item} />
                </div>
              );
            })}
          </div>
        )}
        {activeTab === 2 && (
          <div className="border-t border-t-white">
            {day2.map((item) => {
              return (
                <div key={item.id}>
                  <AgendaContent agenda={item} />
                </div>
              );
            })}
          </div>
        )}
        {activeTab === 3 && (
          <div className="border-t border-t-white">
            {day3.map((item) => {
              return (
                <div key={item.id}>
                  <AgendaContent agenda={item} />
                </div>
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  );
}

const AgendaContent = ({ agenda }) => {
  return (
    <div className="flex items-center gap-5 px-2 py-2 text-white border-b md:py-4 lg:gap-11 border-b-white">
      <h3 className="text-base md:text-xl font-bold w-[110px] md:w-[140px] flex-shrink-0">
        {agenda.time}
      </h3>
      <p className="flex-1 text-base">{agenda.content}</p>
    </div>
  );
};

export default Tabs;
