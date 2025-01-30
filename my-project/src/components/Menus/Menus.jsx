import Fruit1 from '../../assets/fruits/apple.png'
import Fruit2 from '../../assets/fruits/avocado.png'
import Fruit3 from '../../assets/fruits/cherry.png'
import Fruit4 from '../../assets/fruits/orange.png'
import { motion } from 'framer-motion'
import { FadeLeft } from '../../utility/animation'

const MenuData=[
 {
    id:1,
    title:"Fresh Red Apples",
    link:"#",
    price:"$2.00",
    img:Fruit1,
    delay:0.3,
 },
 {
    id:2,
    title:"Fresh Orange",
    link:"#",
    price:"$4.99",
    img:Fruit2,
    delay:0.6,
 },
 {
    id:3,
    title:"Fresh Avocaro",
    link:"#",
    price:"$5.99",
    img:Fruit3,
    delay:0.9,
 },
 {
    id:4,
    title:"Fresh Cherries",
    link:"#",
    price:"$2.99",
    img:Fruit4,
    delay:1.2,
 },




]


const Menus = () => {
  return (
   <section>
    <div className="container pt-12 pb-20">
        <h1 className='text-2xl font-bold text-left pb-10 uppercase'>
            Our Menu
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 '>
            {MenuData.map((menu)=>
            
                <motion.div 
                variants={FadeLeft(menu.delay)}
                initial="hidden"
                whileInView={"visible"} 
                whileHover={{scale:1.1}}
                key={menu.id} 
                className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3'>
                    <img 
                    key={menu.id} 
                    src={menu.img} 
                    alt="fruits" 
                    className='w-[60px] md-4 scale-110 transform-translate-y-6'
                    />
                    <div>
                        <h1 className='text-lg font-semibold'>{menu.title}</h1>
                        <p className='text-lg font-semibold text-secondary'>{menu.price}</p>
                    </div>
                </motion.div>
            
            )}
        </div>
    </div>
   </section>
  )
}

export default Menus