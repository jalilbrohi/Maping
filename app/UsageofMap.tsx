"use client";
import React from "react";
import Function from "./Function";

const data = [
  {
    header: "Quarter-I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1,
  },
  {
    header: "Quarter-II",
    description:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2,
  },
  {
    header: "Quarter-III",
    description:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: 3,
  },
];

const UsageofMap = () => {
  return (
    <div className="flex  gap-4 ">
      {data.map((item, i) => (
        <div key={i} className="flex items-stretch">
          <Function 
          number={item.number} description={item.description} header={item.header}/>
        </div>
      ))}
    </div>
  );
};

export default UsageofMap;
