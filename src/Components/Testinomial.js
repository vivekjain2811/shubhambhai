import React, { useState } from "react";
import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
function Testinomial(props) {
    let reviews=props.reviews;
    const [index,setINndex]=useState(0);

   function leftshiftHandler(){
if(index-1<0){
setINndex(reviews.lemgth-1);
}
else
{
  setINndex(index-1);
}
   }
function rightshiftHandler(){
if(index+1>=reviews.length)
{
  setINndex(0);
}
else{
  setINndex(index+1);
}
}
function surpriseHandler(){
let randomIndex=Math.floor(Math.random()*reviews.length);
setINndex(randomIndex);
}
return(
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl ">
<Card review={reviews[index]}></Card>
<div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto">
        <button onClick={leftshiftHandler} className="cursor-pointer  hover:text-violet-500">
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button onClick={rightshiftHandler} className="cursor-pointer  hover:text-violet-500">
          <FiChevronRight></FiChevronRight>
        </button>
      </div>
      <div>
        <button onClick={surpriseHandler}
          className="bg-violet-400 hover:bg-violet-500 transition-all 
        duration-200 cursor-pointer px-10 py-2 rounded-md font -bold text-white text-lg"
        >
          suprise me
        </button>
      </div>
    </div>
)}
export default Testinomial;
