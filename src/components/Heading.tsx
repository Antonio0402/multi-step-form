import React from "react";

const Heading = ({ head, subhead }: { head: string; subhead: string }) => {
  return (
    <div className="pb-10">
      <h2 className="text-heading text-text mb-5">{head}</h2>
      <p className="text-body text-text font-bold max-w-prose">{subhead}</p>
    </div>
  );
};

export default Heading;
