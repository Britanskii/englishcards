import s from "./generator.module.sass"
import {ChangeEventHandler, Dispatch, SetStateAction, useEffect, useState} from "react"

const Generator = () => {

    const [image, setImage] = useState("")

    const [word, setWord] = useState("")
    const [antonym, setAntonym] = useState("")
    const [synonymous, setSynonymous] = useState("")
    const [text, setText] = useState("")

    const [wordTranslated, setWordTranslated] = useState("")
    const [antonymTranslated, setAntonymTranslated] = useState("")
    const [synonymousTranslated, setSynonymousTranslated] = useState("")
    const [textTranslated, setTextTranslated] = useState("")

    const [result, setResult] = useState("")

    const genWordObject = () => {

        const parseText = (text: string) => {
            let start = true

            return text.split("").map((letter) => {
                if (letter === "*" || letter === "+" || letter === "-") {
                    if (start) {
                        start = false
                        if (letter === "*") {
                            return "<b>"
                        } else if (letter === "+") {
                            return "<b className ='synonymous'>"
                        } else if (letter === "-") {
                            return "<b className ='antonym'>"
                        }
                    } else {
                        start = true
                        return "</b>"
                    }
                } else {
                    return letter
                }
            }).join("")
        }

        const textParsed = parseText(text)
        const textTranslatedParsed = parseText(textTranslated)

        setResult(`
              {
                "id": 0,
                "word": {
                  "proposal": "${word}",
                  "translated": "${wordTranslated}"
                },
                "synonymous": {
                  "proposal": "${synonymous}",
                  "translated": "${synonymousTranslated}"
                },
                "antonym": {
                  "proposal": "${antonym}",
                  "translated": "${antonymTranslated}"
                },
                "examples": [
                  {
                    "proposal": "${textParsed}",
                    "translated": "${textTranslatedParsed}"
                  }
                ],
                "image": "${image}"
              },
        `)
    }

    //handlers
    const onChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, setter: Dispatch<SetStateAction<string>>) => {
        const text = event.target.value

        setter(text)
    }

    const onChangeWord = (event: React.ChangeEvent<HTMLInputElement>) => {
        return onChange(event, setWord)
    }

    const onChangeAntonym = (event: React.ChangeEvent<HTMLInputElement>) => {
        return onChange(event, setAntonym)
    }

    const onChangeSynonymous = (event: React.ChangeEvent<HTMLInputElement>) => {
        return onChange(event, setSynonymous)
    }

    const onChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        return onChange(event, setText)
    }

    const onChangeWordTranslated = (event: React.ChangeEvent<HTMLInputElement>) => {
        return onChange(event, setWordTranslated)
    }

    const onChangeAntonymTranslated = (event: React.ChangeEvent<HTMLInputElement>) => {
        return onChange(event, setAntonymTranslated)
    }

    const onChangeSynonymousTranslated = (event: React.ChangeEvent<HTMLInputElement>) => {
        return onChange(event, setSynonymousTranslated)
    }

    const onChangeTextTranslated = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        return onChange(event, setTextTranslated)
    }

    const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        return onChange(event, setImage)
    }

    return (
        <div className={s.generator}>
            <div>
                <label>
                    Слово <br/>
                    <input type="text" onChange={onChangeWord}/> <br/>
                </label>
                <label>
                    Синоним <br/>
                    <input type="text" onChange={onChangeSynonymous}/> <br/>
                </label>
                <label>
                    Антоним <br/>
                    <input type="text" onChange={onChangeAntonym}/> <br/>
                </label>
                <label>
                    Пример <br/>
                    <textarea onChange={onChangeText}/> <br/>
                </label>
                <button onClick={genWordObject}>Сгенерировать</button>
            </div>
            <div>
                <label>
                    Слово <br/>
                    <input type="text" onChange={onChangeWordTranslated}/> <br/>
                </label>
                <label>
                    Синоним <br/>
                    <input type="text" onChange={onChangeSynonymousTranslated}/> <br/>
                </label>
                <label>
                    Антоним <br/>
                    <input type="text" onChange={onChangeAntonymTranslated}/> <br/>
                </label>
                <label>
                    Пример <br/>
                    <textarea onChange={onChangeTextTranslated}/> <br/>
                </label>
                <label>
                    Картинка <br/>
                    <input type="text" onChange={onChangeImage}/> <br/>
                </label>
            </div>
            <pre className={s.generator__result}>
                {result}
            </pre>
        </div>
    )
}

export default Generator