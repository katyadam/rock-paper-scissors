import React from "react";

const Image = ({ name }) => {
  console.log(`../${name.toLowerCase()}.png`);
  return (
    <img
      src={require(`../${name.toLowerCase()}.png`)}
      alt={name}
      height={280}
      width={280}
    />
  );
};

export default Image;
