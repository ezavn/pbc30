import Link from "next/link";
import { React, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/data";
import Image from "next/image";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = ({ isActive }) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div className="page-container max-w-7xl">
      <nav className="flex items-center justify-between px-5">
        <Link href="/">
          {isActive ? (
            <Image
              width={150}
              height={44}
              src={`/images/cbd-logo-footer.png`}
              alt="actioncoachCBD"
            ></Image>
          ) : (
            <Image
              width={150}
              height={44}
              src={`/images/cbd-logo.png`}
              alt="actioncoachCBD"
            ></Image>
          )}
        </Link>
        <div
          className={`${
            isActive ? "text-white font-semibold" : "text-blue font-bold"
          } lg:flex hidden items-center gap-3 xl:gap-10 font-sans uppercase text-center`}
        >
          <Link href="#">Lợi ích</Link>
          <Link href="#">
            HOẠT ĐỘNG <br />
            NỔI BẬT
          </Link>
          <Link href="#">DIỄN GIẢ</Link>
          <Link href="#">
            NỘI DUNG <br />
            CHƯƠNG TRÌNH
          </Link>
          <Link href="#">
            GIỚI THIỆU VỀ <br />
            ACTIONCOACH CBD FIRM
          </Link>
        </div>
        <button className="hidden font-bold text-white capitalize w-[220px] h-[44px] px-[16px] lg:flex items-center justify-center cursor-pointer rounded-[46px] bg-gradient-to-r from-[#FF1F4C] to-[#FF5E35]">
          hotline: 1800 8087
        </button>
        <FaBars
          className={`${
            isActive ? "text-white" : "text-blue"
          } cursor-pointer lg:hidden`}
          onClick={toggleMenu}
          size={25}
        ></FaBars>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-0 left-0 z-50 w-full h-screen p-10 text-black origin-top bg-blue"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between">
                <Link href="/">
                  <Image
                    width={150}
                    height={44}
                    src={`/images/cbd-logo.png`}
                    alt="actioncoachCBD"
                  ></Image>
                </Link>
                <FaTimes
                  className="text-white cursor-pointer"
                  onClick={toggleMenu}
                  size={30}
                ></FaTimes>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col items-center justify-center h-full gap-4 font-lora "
              >
                {navLinks.map((link) => {
                  return (
                    <div className="overflow-hidden" key={link.id}>
                      <MobileNavLink
                        key={link.id}
                        title={link.name}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-xl text-center text-white uppercase md:text-4xl"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
