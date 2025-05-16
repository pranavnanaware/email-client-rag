import { db } from "@/server/db";

export const POST = async (req: Request) => {
  try {
    const { data } = await req.json();
    const emailAddress = data.email_addresses[0].email_address;
    let firstName = data.first_name;
    let lastName = data.last_name;
    const imageUrl = data.image_url;
    const id = data.id;

    const user = await db.user.findUnique({
      where: {
        emailAddress: emailAddress,
      },
    });

    if (user) {
      return new Response("User already exists", { status: 400 });
    }

    if (!firstName || !lastName) {
        firstName = emailAddress.split('@')[0];
        lastName = '';
    }

    await db.user.create({
        data: {
          id: id,
          emailAddress: emailAddress,
          firstName: firstName,
          lastName: lastName,
          imageUrl: imageUrl,
        },
      });

    return new Response("User Created", { status: 200 });
  } catch (err: any) {
    console.log("Error creating user", err);
    return new Response("Error creating user", { status: 500 });
  }
};
