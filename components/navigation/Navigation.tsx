import s from "./navigation.module.sass"
import Link from "../link/Link";

const Navigation = () => {

    return (
        <nav className={s.navigation}>
            <Link href={"/"}>Главная</Link>
            <Link href={"/dictionaries"}>Словари</Link>
            <Link href={"/learn"}>Учить</Link>
        </nav>
    )
}

export default Navigation