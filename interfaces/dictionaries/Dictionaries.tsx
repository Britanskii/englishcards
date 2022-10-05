import s from "./dictionaries.module.sass"
import Image from "../../components/image/Image"
import data from "../../jsons/dictionaries.json"
import {motion} from "framer-motion"
import Link from "../../components/link/Link"
import useActions from "../../hooks/useActions"
import useTypedSelector from "../../hooks/useTypedSelector"
import {DictionaryState} from "../../store/types/types"
import mistakes from "../../pages/learn/mistakes"

const Dictionaries = () => {
    const mistakes = useTypedSelector(state => state.mistakes)

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

    const createDictionary = (dictionary: DictionaryState, index: number) => {

        const setDictionary = () => {
            setDictionaryId(dictionary.id)
        }

        return (
            <motion.li
                onClick={setDictionary}
                key={`${dictionary.image}_${dictionary.id}`}
                custom={index}
                variants={variants}
                initial={{opacity: 0, x: -200}}
                animate={"appearance"}
                className={s.dictionaries__wrapper}
            >
                <Link className={s.dictionaries__item} href={`/learn/${dictionary.id}`}>
                    <div className={s.dictionaries__view}>
                        <Image src={dictionary.image} className={s.dictionaries__image}/>
                    </div>
                    <div className={s.dictionaries__text}>
                        {dictionary.title}
                    </div>
                </Link>
            </motion.li>
        )
    }

    const dictionaries = data.map((dictionary, index) => {
        return createDictionary(dictionary, index)
    })

    const mistakesDictionary = mistakes.words.length > 1 ? createDictionary(mistakes, dictionaries.length) : null

    return (
        <div className={s.dictionaries}>
            <ul className={s.dictionaries__list}>
                {dictionaries}
                {mistakesDictionary}
            </ul>
        </div>
    )
}

export default Dictionaries