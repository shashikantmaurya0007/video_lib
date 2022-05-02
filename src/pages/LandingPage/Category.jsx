import React from 'react'
import { Transition } from 'react-transition-group';

import { useCategory } from '../../services/categoryServices/index'
const Category = () => {

const {loading,error,categories}=useCategory();
console.log(categories)
  return (
    <div>
        {
      
           categories?.map(({_id,categoryName,imgsrc,description},index)=>
           {
             
           <Transition in={true} mountOnEnter unmountOnExit>
               {

               (state)=>(<section >

                <section></section>

                <section></section>


               </section>)



               }



           </Transition>



           })

        }
        
    </div>
  )
}

export {Category}