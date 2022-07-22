import s from "./dropdown.module.sass"
import {AnimatePresence, motion} from "framer-motion"
import React, {useEffect, useRef, useState} from "react"
import parse from "html-react-parser"

interface dropdownProps {
    className?: string
    text: string
    lowerText: string
}

const Dropdown = ({className, text, lowerText}: dropdownProps) => {

    const [isActive, setIsActive] = useState<boolean>(false)

    const onToggleActive = () => {
        setIsActive(isActive => isActive = !isActive)
    }

    return (
        <div onClick={onToggleActive} className={`${s.dropdown} ${isActive ? s.dropdown_active : ""} ${className}`}
        >
            {/*<div className={s.dropdown__arrow}>V</div>*/}
            <div className={`${s.dropdown__text}`}>
                {parse(text)}
            </div>
            <AnimatePresence>
            {
                isActive &&
                <motion.div
                    className={`${s.dropdown__lowerText}`}
                            style = {{overflow: 'hidden'}}
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            onClick = {(event => event.stopPropagation())}
                            variants={{
                                open: { opacity: 1, height: "auto"},
                                collapsed: { opacity: 0, height: 0}
                            }}
                            transition={{
                                type: "just"
                            }}
                >
                    <div className={s.dropdown__lowerText_parse}>
                        {parse(lowerText)}
                    </div>
                </motion.div>
            }
            </AnimatePresence>
        </div>
    )
}

export default Dropdown