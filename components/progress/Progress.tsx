import s from "./progress.module.sass"

import {motion} from "framer-motion"

interface ProgressProps {
    to: number,
    progress: number,
    setIsComplete?: boolean,
}

const Progress = ({to, progress}: ProgressProps) => {

    const customProgress = `-${(100 / to) * progress}%`

    const variants = {
        progress: {
            x: customProgress
        }
    }

    return (
        <div className={s.progress}>
            <motion.div
                variants={variants}
                initial={{x: "-100%"}}
                animate={"progress"}
                className={s.progress__line}/>
        </div>
    )
}

export default Progress