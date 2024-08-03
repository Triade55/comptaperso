import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const getUser = async () => {
  const session = await getAuthSession();
  if (!session?.user.id) {
    throw new Error("user no found");
  }
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: session.user.id },
  });
  return user;
};
