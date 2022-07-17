import axios from "axios";

class CardService {

    static getCards = async () => {
        const response = await axios(`${process.env.API_URL}/api/cards`)
        return response.data
    }

}

export default CardService