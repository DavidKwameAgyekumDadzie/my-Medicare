import React from "react";

function Record(props) {
  return (
    <div>
      <section className=" bg-gray-100 py-20 mt-20 lg:mt-60" id="Search">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto">
          <h2 className=" text-3xl text-blue-600 text-center font-bold">
            Search for Records
          </h2>
          <p className=" text-gray-600 text-center mt-4">
            Enter a random name in the search box below and see what records pop
            up....
          </p>
          <div className=" flex flex-col sm:flex-row gap-6 mt-8">
            <input
              type="text"
              placeholder="Enter patient name"
              className=" focus:outline-none flex-1 px-2 py-3 rounded-md text-black border-2 border-blue-600"
            ></input>
            <button className=" btn flex-1 border-2 hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:border-2">
              Search
            </button>
            {/* grid collection */}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Record;
