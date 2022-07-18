import s from "./link.module.sass"
import LinkNext from "next/link";
import {LinkProps} from "next/link"
import {ReactNode, forwardRef} from "react";

interface LinkNextProps extends LinkProps {
    className?: string,
    children: ReactNode
}


export const Link = ({href, children, className}: LinkNextProps) => {

    return (
        <LinkNext href={href}>
            <a className={className}>
                {children}
            </a>
        </LinkNext>
    )
}

export default Link