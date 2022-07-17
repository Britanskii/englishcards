import s from "./complete.module.sass"
import Link from "../../../components/link/Link";
import mark from "../../../resources/icons/mark.svg"
import Image from "../../../components/image/Image";
import {motion} from "framer-motion";

const Complete = () => {

    return (
        <motion.div
            initial= {{opacity: 0}}
            animate={{opacity:1}}
            className={s.complete}>
           <div className={s.complete__mark}>
               <Image src={mark}/>
               Поздравляем, вы прошли словарь!
           </div>

            <Link className={s.complete__next} href={"/dictionaries"}>Учить дальше</Link>
        </motion.div>
    )
}

export default Complete