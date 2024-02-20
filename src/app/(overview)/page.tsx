"use client";

import Heading from "@/components/ui/heading";
import { Stack } from "@/app/(overview)/_components/stack";
import { LatestProjects } from "@/app/(overview)/_components/latest-projects";

const OverviewPage = () => {
  return (
    <>
      <Heading />
      <p className="pt-6 text-gray text-lg">
        As a frontend developer, I main focus is on creating the user interface and experience for websites or web applications.
        <span className="block pt-2">I have an eye for design and understand how to bring a website&apos;s visual elements to life through code.</span>
      </p>
      <Stack />
      <LatestProjects />
    </>
  );
};

export default OverviewPage;
