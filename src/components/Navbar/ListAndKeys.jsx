import React from "react";


const ListAndKeys = () => {
let data = [
    {
      _id: 1,
      name: "vignesh",
      email: "vignesh@gmail.com",
      age: 24,
      address: "ABC Colony",
    },
    {
      _id: 2,
      name: "pursothaman",
      email: "pursothaman@gmail.com",
      age: 22,
      address: "RP Colony",
    },
    {
      _id: 3,
      name: "Ramya",
      email: "ramya@gmail.com",
      age: 20,
      address: "MGM Colony",
    },
    {
      _id: 4,
      name: "pooja",
      email: "pooja@gmail.com",
      age: 18,
      address: "DEF Colony",
    },
    {
      _id: 5,
      name: "divya",
      email: "divya@gmail.com",
      age: 27,
      address: "VGP Colony",
    },
  ];

  return (
  <div>
    {data?.length>=1?(
       data?.map(({_id,name,email,age,address},index)=>(
       <div key={_id}>
        <h1>Name:{name}</h1>
        <h1>Email:{email}</h1>
        <h1>Age:{age}</h1>
        <h1>Address:{address}</h1>
        </div>
       ))
    ):(
        <h1>No data found</h1>
    )
    }
    </div>
  );

};
export default ListAndKeys;
