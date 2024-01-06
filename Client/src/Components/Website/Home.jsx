import React from "react";
import HeroHome from "./home/HeroHome";
import QuotationHome from "./home/QuotationHome";
import ServicesHome from "./home/ServicesHome";
import StatisticsHome from "./home/StatisticsHome";
import PartnershipHome from "./home/PartnershipHome";
import FQAHome from "./home/FQAHome";
import "../../CSS/Home.css";

export default function Home() {
  return (
    <>
      <HeroHome />
      {/* <QuotationHome /> */}
      <ServicesHome />
      <StatisticsHome />
      <PartnershipHome />
      <FQAHome />
    </>
  );
}