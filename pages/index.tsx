import type {NextPage} from 'next'
import s from "./index.module.sass"
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <div className={s.main}>
            <Link href = "/learn"><a className={s.main__button}>Hello</a></Link>
        </div>
    )
}

export default Home
