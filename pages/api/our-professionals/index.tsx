// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ourProfessionalRouter } from '../../../lib/provider/mapper'

type Data = {
  data?: any
  page?: number,
  status?: boolean,
  error?: any
  members?: object | null,
  message?: string
}
type Request = {
  query: object
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === "GET") {
    try {
      const members: Data = await ourProfessionalRouter(Number(req.query.page || 1))
      res.status(200).json({
        page: req.query.page,
        members: members.data?.ourTeams || [],
        message: "success"
      })

    } catch (error: any) {
      console.error(error.message);
      res.status(200).json({
        status: false,
        message: error.message,
        error: error
      })
    }
  } else {
    res.status(400).json({
      status: false, message: "Method not supported"
    })
  }

  const { page } = req.query

}
