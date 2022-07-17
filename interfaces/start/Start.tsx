import s from "./start.module.sass"

import data from "../../jsons/cards.json"

import Learn from "../learn/Learn"

const Start = () => {

    return (
        <div className={s.start}>
            <a className={s.start__link} href="https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000">Оксвордский словарь</a>
            <a className={s.start__link} href="http://www.newgeneralservicelist.org/">Слова для тех кто изучает английский как второй язык</a>
            <a className={s.start__link} href="https://www.synonyms-thesaurus.com/synonyms-career">Синонимы/антонимы</a>
            <a className={s.start__link} href="https://www.deepl.com/translator">Переводчик</a>
        </div>
    )
}

export default Start