import React from 'react'
import {motion} from "framer-motion"
import me from "../../assets/founder.jpeg"

const Founder = () => {
  return (
   <section className="founder">
    <motion.div>
      <img src={me} alt="Founder" height={200} width={200}/>
      <h3>Krishnakant dhal</h3>
      <p>Hey, Everyone i am Krishnakant dhal, the founder of MCA Burger Wala <br />
      Our aim is to create the most tasty burger on Bhubaneswar.
      </p>
    </motion.div>
   </section>
  )
}

export default Founder
