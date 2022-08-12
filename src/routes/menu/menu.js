import React, { useState } from "react";
import Collections from "../../components/collections/collections";

// 📝: Importing Data
import { actionCollection } from "../../data/actionCollection";
import { comedyCollection } from "../../data/comedyCollection";
import { romanceCollection } from "../../data/romanceCollection";

// Menu component

function Menu() {
  const obj = {
    actionCollection,
    comedyCollection,
    romanceCollection,
  };

  const [data, setData] = useState(obj);

  return (
    <div>
      <h1>Menu</h1>
      <Collections data={data} />
      <p>
        Check out our amazing 24/7 menu:
        <ul>
          <li>Lazy Loading</li>
          <li>Dynamic Route Matching</li>
          <li>Location Transition Handling</li>
        </ul>
      </p>
    </div>
  );
}

export default Menu;
