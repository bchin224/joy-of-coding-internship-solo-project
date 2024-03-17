import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createToDoSchema } from "../../validationSchema";

// Create a To Do
export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createToDoSchema.safeParse(body)

    console.log('Testing validation:', validation)
    console.log(body)

    if (!validation.success) {
        console.log('Fail:', validation)
        return NextResponse.json(validation.error.format(), { status: 400 });
    }

    const newTodo = await prisma.toDo.create({
        data: { title: body.title, description: body.description }
    });

    return NextResponse.json(newTodo, { status: 201 });
}

// Read all To Do's
export async function getAllRecords(): Promise<Record[]> {
    try {
      const records = await prisma.toDo.findMany();
      return records;
    } catch (error) {
      throw new Error(`Error fetching records: ${error}`);
    } finally {
      await prisma.$disconnect();
    }
  }
  
  interface Record {
    id: number;
  }
  
  async function main() {
    try {
      const allRecords = await getAllRecords();
      console.log(allRecords);
    } catch (error) {
      console.error(error);
    }
  }
  main()