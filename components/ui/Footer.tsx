"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

import clsx from "clsx";
import darkLogo from "@/public/Web/png/Black-logo-no-background.png";
import lightLogo from "@/public/Web/png/White-logo-no-background.png";
import logo from "@/public/images/coffee/logos/logo.png";
import { useTheme } from "next-themes";
import { GoLocation } from "react-icons/go";
import Container from "./Container";

const Footer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <footer
      className={clsx(
        "overflow-hidden bg-slate-900 pb-8 pt-20 sm:pb-12 sm:pt-14 lg:pt-16"
      )}
    >
      <div className="flex flex-col lg:flex-row mx-auto w-full px-4 pb-6 pt-16 sm:px-6 lg:px-8">
        <Container className="">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <Link
                href="/public"
                aria-label="Home"
                className="flex flex-shrink-0 items-center"
              >
                {theme === "dark" ? (
                  <Image
                    src={logo}
                    alt="dark mode logo"
                    width={80}
                    height={80}
                    className="h-15 w-auto sm:h-20  lg:h-20"
                  />
                ) : (
                  <Image
                    src={logo}
                    alt="light mode logo"
                    width={80}
                    height={80}
                    className="h-15 w-auto sm:h-20  lg:h-20"
                  />
                )}
              </Link>
            </div>

            <p className="mt-8 max-w-1/2 text-center  text-xl md:text-2xl leading-relaxed  sm:text-left lg:mt-0">
              Your Experts in Coffee Events
            </p>
          </div>

          <div className="max-w-full ">
            <div className=" ml-auto w-full m-12 md:mt-16 grid aut-cols-max auto-rows-max grid-cols-1 gap-4 border-t border-gray-100 pt-16 lg:grid-cols-2 md:gap-2 ">
              <div className="text-center  text-lg md:text-xl space-y-4  sm:text-left ">
                <h3>Nairobi Kenya</h3>
                <h3> Kenya</h3>
              </div>
              <div className="max-w-full   mt-8 md:mt-0 grid  grid-cols-1 sm:grid-cols-2 gap-8   lg:grid-cols-3 ">
                <div className="text-2xl md:text-3xl  w-full text-center sm:text-left">
                  <h2 className=" text-xl md:text-2xl font-semibold ">About Us</h2>

                  <ul className="mt-8  text-lg md:text-xl space-y-4">
                    <li>
                      <Link
                        className="transition hover:text-gray-700/75"
                        href="/public"
                      >
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="transition hover:text-gray-700/75"
                        href="/news"
                      >
                        News
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="transition hover:text-gray-700/75"
                        href="/events"
                      >
                        Events
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="transition hover:text-gray-700/75"
                        href="/gallery"
                      >
                        Gallery
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="transition hover:text-gray-700/75"
                        href="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="text-center sm:text-left">
                  <h2 className=" text-xl md:text-2xl font-semibold ">
                    Social Links
                  </h2>

                  <ul className="mt-8 text-lg md:text-xl  space-y-4">
                    <li>
                      <Link
                          className=" transition hover:text-gray-700/75"
                          href="https://www.facebook.com/CoffeeEventsKE?mibextid=kFxxJD"
                      >
                        Facebook
                      </Link>
                    </li>

                 
                    <li>
                      <Link
                          className=" transition hover:text-gray-700/75"
                          href="https://www.instagram.com/coffeeeventske"
                      >
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link
                          className=" transition hover:text-gray-700/75"
                          href="https://twitter.com/CoffeeEventsKE"
                      >
                     Twitter
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full mt-8 border-t border-gray-100 pt-6 flex justify-center items-center">
            <p className="text-center  text-lg md:text-xl">
              Copyright &copy; 2023. All rights reserved.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
