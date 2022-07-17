import s from "./dictionaries.module.sass"
import Image from "../../components/image/Image"
import eye from "../../resources/icons/eye.png"
import data from "../../jsons/dictionaries.json"
import {motion} from "framer-motion";

const Dictionaries = () => {

    const variants = {
        appearance: (custom: number) => {
            return {
                opacity: 1,
                x: 0,
                transition: {
                    delay: custom * .15
                    // delay
                }
            }
        }
    }

    const dictionaries = data.map((dictionary, index) => {
        return (
            <motion.li key={dictionary.image} className={s.dictionaries__item}
                       custom= {index}
                       variants={variants}
                       initial={{opacity: 0, x: -200}}
                       animate={"appearance"}
            >
                <div  className={s.dictionaries__view}>
                    <Image src={dictionary.image} className={s.dictionaries__image}/>
                </div>
                <div className={s.dictionaries__text}>
                    {dictionary.title}
                </div>
            </motion.li>
        )
    })

    return (
        <div className={s.dictionaries}>
            <ul className={s.dictionaries__list}>
                {dictionaries}
            </ul>
        </div>
    )
}

export default Dictionaries