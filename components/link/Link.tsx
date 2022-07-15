import s from "./link.module.sass"
import Link from "next/link";
import {LinkProps} from "next/link"
import {ReactNode} from "react";

interface LinkNextProps extends LinkProps {
    className?: string,
    children: ReactNode
}

const LinkNext = ({href, children, className}: LinkNextProps) => {

    return (
        <Link href={href}>
            <a className={className}>
                {children}
            </a>
        </Link>
    )
}

export default LinkNext