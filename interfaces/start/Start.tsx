import s from "./start.module.sass"

import data from "../../jsons/cards.json"

import Learn from "../learn/Learn"

const Start = () => {

    return (
        <div className={s.start}>
            <Learn arrayCards={data}/>
        </div>
    )
}

export default Start