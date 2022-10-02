export interface WordI {
    proposal: string
    translated: string
}

export interface SynonymousI {
    proposal: string
    translated: string
}

export interface AntonymI {
    proposal: string
    translated: string
}

export interface ExampleI {
    proposal: string
    translated: string
}

export interface CardI {
    id: number
    word: WordI
    synonymous: SynonymousI
    antonym: AntonymI
    examples: ExampleI[]
    image: string
}

export interface DictionaryI {
    id: number,
    title: string,
    image: string,
    dictionary: CardI[]
}




