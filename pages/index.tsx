import type {NextPage} from 'next'
import s from "./index.module.sass"
import Link from "next/link";
import LinkNext from "../components/link/Link";

const Home: NextPage = () => {



    return (
        <div className={s.main}>
            <LinkNext className={"button"} href = "/learn">
                Учить
            </LinkNext>
            <div className={s.main__books}>
                <a href="https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000">Оксвордский словарь</a>
                <a href="http://www.newgeneralservicelist.org/">Слова для тех кто изучает английский как второй язык</a>
                <a href="https://www.synonyms-thesaurus.com/synonyms-career">Синонимы/антонимы</a>
                <a href="https://www.deepl.com/translator">Переводчик</a>
            </div>
        </div>
    )
}

export default Home
