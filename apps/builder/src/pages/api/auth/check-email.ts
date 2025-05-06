import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma"; // safe pattern for serverless

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    return res.status(200).json(user);
  } catch (error: any) {
    console.error("❌ Prisma Error:", error);
    return res.status(500).json({ error: "Database connection failed", details: error.message });
  }
}
