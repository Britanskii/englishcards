// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {CardI} from "../../interfaces/interfaces";
import cards from "../../jsons/cards.json"

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<CardI[]>
) {
    res.status(200).json(cards)
}
