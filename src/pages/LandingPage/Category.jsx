import React from 'react'
import { Transition } from 'react-transition-group';

import { useCategory } from '../../services/categoryServices/index'
import styles from './LandingPage.module.css'
const Category = () => {

const {loading,error,categories}=useCategory();
console.log(categories)
  return (
    <div>
       <div className={`sub-header ${styles.category_main_container_heading} `}>
        <h1 >Courses </h1>
        <img src="/assets/brush_stroke.png" alt="" />

       </div>
        {
      
           categories?.map(({_id,categoryName,imgsrc,description},index)=>
           {
             
         return  <Transition in={true} mountOnEnter unmountOnExit>
               {

               (state)=>(<section className={`${styles["category_left_"+state]} ${styles.category_card}`} >
                    

                <section className={`${styles.category_desc}`} >
                    
                    <h1 className='category-heading'>{categoryName}</h1>
                    <p className='category-paragraph'>{description}</p>
                    </section>

                <section className={`${styles.category_img_con}`}>
                    <img src={imgsrc} className="img-rounded" alt="" />
                    
                </section>


               </section>)



               }



           </Transition>



           })

        }
        
    </div>
  )
}

export {Category}