import React, { use, useEffect, useState } from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { Data } from "../components/Data";
import Card from "./Card";
import Header from "./Header";

const Body = () => {
    const[query,setQuery]=React.useState("");
  const Maxpage = 10;
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(0);
  const pagesize = 6;

  useEffect(() => {
    mdata();
  }, []);

  const mdata = async () => {
    const tdata = await Data();
    setData(tdata.products);
  };
  console.log(query)

  const filteredData = data.filter((product) => {
    return product.title.toLowerCase().includes(query);
  });

  const size = filteredData.length;
  const pageCount = Math.ceil(size / Maxpage);
  const start = current * pagesize;
  const end = start + pagesize;
  //console.log(data[0]);

  console.log(filteredData);
  //console.log(size);
  //console.log(data[0]);
  return (
    <div className="">
      <div>
        <Header  setQuery={setQuery}/>
      </div>

      <div className="join flex  max-w-80 m-auto ">
        <button
          className="join-item btn"
          onClick={() => {
            setCurrent(0);
          }}
        >
          Start
        </button>

        <button
          className="join-item btn "
          onClick={() => {
            current > 0
              ? setCurrent((prev) => prev - 1)
              : alert("No previous pages available");
          }}
        >
          Prev
        </button>

        <button className="join-item btn text-secondary" onClick={() => {}}>
          {current}
        </button>

        <button
          className="join-item btn"
          onClick={() => {
            current < pageCount
              ? setCurrent((prev) => prev + 1)
              : alert("No more pages available");
          }}
        >
          Next
        </button>

        <button
          className="join-item btn "
          onClick={() => {
            setCurrent(pageCount);
          }}
        >
          Last
        </button>
      </div>

      <div className=" flex flex-wrap justify-center mt-2.5">
        {filteredData.slice(start, end).map((product) => {
          return (
            <div className="p-2 m-2 " key={product.id}>
              <Card
                image={product.images[0]}
                title={product.title}
                description={product.description}
                price={product.price}
                category={product.category}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
