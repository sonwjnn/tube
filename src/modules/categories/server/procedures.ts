import { db } from "@/db";
import { categories } from "@/db/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";

export const categoriesRouter = createTRPCRouter({
  getMany: protectedProcedure.query(async () => {
    const data = await db.select().from(categories);
    return data;
  }),
});

