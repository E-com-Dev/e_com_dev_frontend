import React from "react";
import CategoryTiles from "src/components/source now/CategoryTiles";
import Pannel from "src/components/source now/Pannel";
import Button from "@mui/material/Button";

// type Props = {};

function Pannels() {
  return (
    <>
      <Pannel
        title="Home and Outdoor"
        callToAction={<Button variant="primary">Source now</Button>}
        image="url(/cloths/cate.png)"
      >
        <CategoryTiles />
      </Pannel>
    </>
  );
}

export default Pannels;
