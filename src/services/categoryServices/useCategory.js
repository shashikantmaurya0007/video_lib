import axios from "axios";
import { useEffect, useState } from "react"

const useCategory= ()=>
{

  const [categories,setCategories]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);

  useEffect(()=>{

    (async ()=>
    {
      try{
       const {data:{categories}}=await axios.get('/api/categories');
       
       setLoading(false);
       console.log(categories)
       setCategories(categories);


      }
      catch(e)
      {
          setLoading(false);
          setError(" sorry we could not fetch categories")

      }


    })()



  },[])
  


   return {loading,error,categories};
}

export  {useCategory};
