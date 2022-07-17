import s from "./clothes.module.sass"
import {ReactNode} from "react";
import Navigation from "../navigation/Navigation";

interface ClothesProps {
    children: ReactNode
}

const Clothes = ({children}: ClothesProps) => {

    return (
        <>
            <div className={s.clothes}>
                {children}
            </div>
            <Navigation/>
        </>
    )
}

export default Clothes