// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  // type o interface es lo mismo!
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  //para API utilizamos estos types
  res.status(200).json({ name: "John Doe" });
}
