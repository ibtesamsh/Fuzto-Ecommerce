import React from 'react';

function Cards({ data }) {
    if (!data) return null;
  
  return (
    <div className='flex flex-row flex-wrap justify-center my-14 gap-2 items-center w-full overflow-hidden'>
    { data.map((data,index)=>(
      <div className='w-[200px] ml-6 border h-[400px] rounded-lg flex flex-col  p-2'>
      
      <img src={data.image} alt='' className='w-full h-[200px] object-cover rounded-lg' />
      <p className='m-1'>{data.name}</p>
      <p className='m-1'>INR {data.price}</p>
      <div>
        <ul className='flex flex-row items-center'>
          {data.size.map((item, index) => (
            <li key={index} className='m-2'>{item}</li>
          ))}
        </ul>
      </div>

    </div>
    ))
    
        }
        </div>
  );
}

export default Cards;
