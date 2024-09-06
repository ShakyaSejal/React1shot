import React from "react";

const Card = ({image,title,description,buttonLabel}) => {
  return <>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg m-4">
  {/* <!-- Image --> */}
  <img
    class="rounded-t-lg w-full h-48 object-cover"
    src={image}
    alt={title}
  />
  
  {/* <!-- Card Content --> */}
  <div class="p-6">
    {/* <!-- Title --> */}
    <h5 class="text-xl font-bold mb-2">{title}</h5>
    
    {/* <!-- Description --> */}
    <p class="text-gray-700 mb-4">
      {description}
    </p>
    
    {/* <!-- Button --> */}
    <button
      class="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
     {buttonLabel}
    </button>
  </div>
</div>

  </>;
};

export default Card;
