import { db } from "@/db";
import { categories } from "@/db/schema";

export const categoryNames = [
  "Carts and vehicles",
  "Comedy",
  "Education",
  "Gaming",
  "Entertainment",
  "Film and animation",
  "How-to and style",
  "Music",
  "News and politics",
  "Science and technology",
  "Sports",
  "Travel and events",
  "Vehicles",
];

async function main() {
  console.log("Seeding categories...");
  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `Video related to ${name.toLowerCase()}`,
    }));
    await db.insert(categories).values(values);
    console.log("Categories seeded successfully");

  } catch (error) {
    console.error("Error seeding categories...", error);
  }
}

main()
