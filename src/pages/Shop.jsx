import React from "react";
import collections from "../data/collections.json";
import CollectionsPage from "../components/sections-cards/CollectionsPage";

function Shop() {
  return (
    <div>
      <CollectionsPage collections={collections} />
    </div>
  );
}

export default Shop;
