// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    AggregatesSendSMS: number,
    GroupId: number,
    Timestamp: string,
    TotalSendSMS: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    console.log(req.body)
    res.status(200).json({ 
        AggregatesSendSMS: req.body.Emails ? req.body.Emails.lenght : 0,
        GroupId: 0,
        Timestamp: new Date().toLocaleString(),
        TotalSendSMS: 1
    })
}
