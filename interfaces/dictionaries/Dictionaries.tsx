import s from "./dictionaries.module.sass"
import Image from "../../components/image/Image"
import data from "../../jsons/dictionaries.json"
import {motion} from "framer-motion"
import Link from "../../components/link/Link"
import useActions from "../../hooks/useActions"
import useTypedSelector from "../../hooks/useTypedSelector"

const Dictionaries = () => {
    const mistakes = useTypedSelector(state => state.mistakes)
    const dictionary = useTypedSelector(state => state.dictionary)

    const {setDictionaryId} = useActions()

    const variants = {
        appearance: (custom: number) => {
            return {
                opacity: 1,
                x: 0,
                transition: {
                    delay: custom * .15
                }
            }
        }
    }

    const dictionaries = [...data, mistakes].map(({id, image, title}, index) => {

        const setDictionary = () => {
                setDictionaryId(id)
        }

        return (
            <motion.li
                onClick={setDictionary}
                key={`${image}_${index}`}
                custom={index}
                variants={variants}
                initial={{opacity: 0, x: -200}}
                animate={"appearance"}
                className={s.dictionaries__wrapper}
            >
                <Link className={s.dictionaries__item} href={`/learn/${id}`}>
                    <div className={s.dictionaries__view}>
                        <Image src={image} className={s.dictionaries__image}/>
                    </div>
                    <div className={s.dictionaries__text}>
                        {title}
                    </div>
                </Link>
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