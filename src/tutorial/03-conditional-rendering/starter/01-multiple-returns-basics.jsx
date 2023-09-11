import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
  
    setTimeout(() => {
    // done fetching data
    setIsLoading(false);
  },3000);
  


  }, [input])


{/*//!If this statement is true then the second return won't run*/}
  if(isLoading) {
    return <h2>Loading...</h2>;
    
  }
  
  return <h2>Multiple Returns Basics</h2>;
};
export default MultipleReturnsBasics;
