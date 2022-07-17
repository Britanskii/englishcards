import s from "./dictionaries.module.sass"

const Dictionaries = () => {

    return (
        <div className={s.dictionaries}>
            <ul className={s.dictionaries__list}>
                <li className={s.dictionaries__item}>25 слов уровня A1 (часть 1)</li>
                <li className={s.dictionaries__item}>25 слов уровня A1 (часть 2)</li>
                <li className={s.dictionaries__item}>25 слов уровня A1 (часть 3)</li>
            </ul>
        </div>
    )
}

export default Dictionaries