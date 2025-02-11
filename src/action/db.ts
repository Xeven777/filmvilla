import prisma from "@/lib/prisma";
import { Users } from "@prisma/client";

export async function addUser(userData: Users) {
  try {
    const user = await prisma.users.create({
      data: {
        clerkId: userData.id,
        firstName: userData.firstName,
        imgUrl: userData.imgUrl,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}
