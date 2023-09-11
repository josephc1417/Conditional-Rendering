import { useEffect, useState } from 'react';


//Url for fetching data
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {


  const [user, setUser] = useState(null)


  
  //set the state of the program
  const [isLoading, setIsLoading] = useState(true)// Always set to TRUE
  const [isError, setIsError] = useState(false)
  
  //set up your async function first 
  //call function 
  //Outside of UE function block >> if(conditional statements) for {loading} , and {error} 
  // 
  
  useEffect(() => {
    

    const getData =  async () => {
      try {
        const response = await fetch(url)
    const userData = await response.json()
    setUser(userData)
    console.log(userData);
  } catch (error) {
    setIsError(true)
    console.log(error);
  }
  //!Set loading to false after the try,catch block has been exe..
  setIsLoading(false)
}
// calling function 
getData()
}, [])

//!@if conditional statements {loading, error}
if(isLoading) {
  return <h2 className='bg-green'>Loading...</h2>
}
if(isError) {
  return <h2>There was an error fetching the data...</h2>
}



//!{try, Catch} block and {if} conditionals need to be fully executed before destructuring
//!destructure right before the return statement that your allocating property values
const {avatar_url,name,company,bio}= user
return (
  <div>
      <img style={{width:'150px',borderRadius:'25px'}} src={avatar_url} alt={name}/>
      <h2>{name}</h2>    
      <h4>Works at {company}</h4>    
      <p>{bio}</p>    
    </div>
  )
};
export default MultipleReturnsFetchData;
