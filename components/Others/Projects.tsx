"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectSchema } from "@/helpers";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (id: number) => {
    setActiveTab(id);
  };

  const tabs: ProjectSchema[] = [
    {
      title: "Attest Protocol",
      des: "Attest Protocol is a blockchain-based attestation infrastructure that enables verifiable, composable, and trustless identity and reputation proofs on-chain.",
      id: 0,
    },
    {
      title: "SorobanByExamples",
      des: "An AI-powered education tool to help developers learn Soroban (Stellar’s smart contract platform) through usable code examples.",
      id: 1,
    },
    {
      title: "Ralli",
      des: "Ralli is a smart web app that lets users create dynamic, personalized digital feeds based on their interactions, interests, and data. Think of it as a blend of an AI agent and a life dashboard—where updates, tasks, memories, and insights are all served interactively and in real time.",
      id: 2,
    },
   
    {
      title: "Zeek KYC",
      des: "Zeek is your streamlined solution for Know Your Customer (KYC) in the Web3 world—built with speed, simplicity, and blockchain-native principles at its core.",
      id: 3,
    },
      {
        title: "BuymePizza",
        des: "BuyMePizza is a simple web app that lets users receive tips or small donations—specifically to “buy them pizza”—through seamless blockchain payments. Built with integrated Request Network for invoice creation and payment handling",
        id: 4,
    },
   
  ];

  return (
    <section className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-[family-name:var(--font-romanesco)] text-3xl">
          Projects
        </h2>
        <p>shipping, teaching, and experiments I&apos;ve been part of 🍕</p>
      </div>

      {/* Content */}
      <div className="flex gap-5 items-start flex-col md:flex-row">
        <div className="md:w-[27%] w-full grid grid-cols-2 md:block gap-3 md:space-y-3 font-medium">
          {tabs.map((tab, index) => (
            <motion.button
              key={index}
              className={`w-full bg-secondary rounded-lg p-2 flex justify-between ${
                activeTab === tab.id ? "" : "opacity-50"
              } cursor-pointer transition-all duration-500`}
              onClick={() => handleTabChange(tab.id)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{tab.title}</span>

              {activeTab == tab.id && <p>🌈</p>}
            </motion.button>
          ))}
        </div>

        <div className="w-full md:w-[73%] h-[350px] md:h-[405px] rounded-xl bg-secondary space-y-10">
          {/* header */}
          <div className="flex items-center justify-between bg-[#E6E6E6] py-3 px-5 rounded-tl-xl rounded-tr-xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#D9D9D9]"></div>
              <div className="w-3 h-3 rounded-full bg-[#D9D9D9]"></div>
              <div className="w-3 h-3 rounded-full bg-[#D9D9D9]"></div>
            </div>
            <div className="w-5 h-5 rounded-full bg-[#D9D9D9]"></div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2 px-5">
                <h3 className="text-4xl font-medium">
                  {tabs[activeTab].title}
                </h3>
                <p>{tabs[activeTab].des}</p>
              </div>
              {/* {tab === "home" && <HomeComponent />} */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
