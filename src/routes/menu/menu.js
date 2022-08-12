import React, { useState } from "react";
import { Link } from "react-router-dom";
import Collections from "../../components/collections/collections";

// 📝: Importing Data
import { actionCollection } from "../../data/actionCollection";
import { comedyCollection } from "../../data/comedyCollection";
import { romanceCollection } from "../../data/romanceCollection";

// Menu component

function Menu() {
  const collectionList = [
    actionCollection,
    comedyCollection,
    romanceCollection,
  ];
  const subHeading = ["Action", "Comedy", "Romance"];

  const [data, setData] = useState(collectionList);

  const renderList = collectionList.map((_, idx) => {
    return (
      <Link key={idx} to='#'>
        <li className='list-group-item d-flex justify-content-between align-items-start'>
          <div className='ms-2 me-auto'>
            <div className='fw-bold'>Collection {idx + 1}</div>
            {subHeading[idx]}
          </div>
          <span className='badge bg-primary rounded-pill'>
            {data[idx].length}
          </span>
        </li>
      </Link>
    );
  });

  return (
    <div className='container-fluid'>
      <h1>Menu</h1>
      <div className='row align-items-start'>
        <div className='col-3'>
          <ol className='list-group'>{renderList}</ol>
        </div>
        <div className='col'>
          <Collections data={data} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
