import s from "./image.module.sass"
import ImageNext, {StaticImageData} from "next/image"

interface ImageProps {
    src: string | StaticImageData,
    className: string
}

const Image = ({src, className}: ImageProps) => {

    return (
        <div className={`${s.image} ${className}`}>
            <ImageNext src={src}/>
        </div>
    )
}

export default Image