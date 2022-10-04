import s from "./start.module.sass"
import useActions from "../../hooks/useActions"
import useTypedSelector from "../../hooks/useTypedSelector"

const Start = () => {
    const state = useTypedSelector(state => state)

    console.log(state)

    // const {addMistakesWord} = useActions()

    return (
        <div className={s.start}>
            <a className={s.start__link} href="https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000">Оксвордский словарь</a>
            <a className={s.start__link} href="http://www.newgeneralservicelist.org/">Слова для тех кто изучает английский как второй язык</a>
            <a className={s.start__link} href="https://www.synonyms-thesaurus.com/synonyms-career">Синонимы/антонимы</a>
            <a className={s.start__link} href="https://www.deepl.com/translator">Переводчик</a>
            {/*<button>Add card</button>*/}
        </div>
    )
}

export default Start