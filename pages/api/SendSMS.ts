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

    if (req.body.Emails) {
        res.status(200).json({ 
            AggregatesSendSMS: 1,
            GroupId: 0,
            Timestamp: new Date().toLocaleString(),
            TotalSendSMS: 1
        })
    }else{
        res.status(200).json({ 
            AggregatesSendSMS: 0,
            GroupId: 0,
            Timestamp: new Date().toLocaleString(),
            TotalSendSMS: 0
        })
    }
}
