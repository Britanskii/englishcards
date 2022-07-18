import type {NextPage} from 'next'
import s from "../styles/index.module.sass"
import Start from "../interfaces/start/Start"

const Home: NextPage = () => {

    return <Start/>

    // <div className={s.main}>
    // <Start/>
    // <LinkNext className={"button"} href = "/learn">
    //     Учить
    // </LinkNext>
    // <div className={s.main__books}>
    //     <a href="https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000">Оксвордский словарь</a>
    //     <a href="http://www.newgeneralservicelist.org/">Слова для тех кто изучает английский как второй язык</a>
    //     <a href="https://www.synonyms-thesaurus.com/synonyms-career">Синонимы/антонимы</a>
    //     <a href="https://www.deepl.com/translator">Переводчик</a>
    // </div>
    // </div>
}

export default Home
