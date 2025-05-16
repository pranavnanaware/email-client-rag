import { db } from "@/server/db";

const users = await db.user.create({
    data: {
        emailAddress: "example@email.com",
        firstName: "John",
        lastName: "Doe",
        imageUrl: "https://example.com/image.png"
    }
});

console.log(users);
