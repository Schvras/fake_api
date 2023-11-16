// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    EmailId: number,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    console.log(req.body)

    if (req.body.Emails) {
        res.status(200).json({ 
            EmailId: Math.round(Math.random() * 10000),
        })
    }
}
