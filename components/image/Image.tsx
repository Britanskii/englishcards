import s from "./image.module.sass"
import ImageNext, {StaticImageData} from "next/image"

interface ImageProps {
    src: string | StaticImageData,
    className?: string,
    onClick?: () => void,
    alt?: string
}

const Image = ({src, className, onClick, alt}: ImageProps) => {

    return (
        <div onClick={onClick} className={`${s.image} ${className}`}>
            <ImageNext width={"100%"} height={"100%"} alt={alt} src={src}/>
        </div>
    )
}

export default Image