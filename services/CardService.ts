class CardService {

    static getCards = async () => {
        const response = await fetch(`${process.env.API_URL}/api/cards`)

        return await response.json()
    }
}

export default CardService