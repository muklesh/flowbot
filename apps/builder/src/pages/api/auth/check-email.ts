import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@typebot.io/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { email } = req.body;
    console.log(email)
    const user = await prisma.user.findUnique({
      where: { email },
    });
    console.log(user)
    res.status(200).json(user);
  } catch (error: any) {
    console.error("❌ Prisma Connection Error:", error);
    res.status(500).json({ error: "Database connection failed", details: error.message });
  }
}
