import { PrismaClient } from "@prisma/client";
import { env } from "@/env";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = global.prisma ?? new PrismaClient({
  log: env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
});

if (env.NODE_ENV !== "production") global.prisma = db;
