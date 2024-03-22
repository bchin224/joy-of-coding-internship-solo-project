import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
// import { createToDoSchema } from "../../validationSchema";

// Delete Todo
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const todo = await prisma.toDo.findUniqueOrThrow({
        where: { id: parseInt(params.id)}
    });

    if (todo) {
        await prisma.toDo.delete({
            where: { id: todo.id }
        });
        return NextResponse.json(todo, { status: 201 })
    }


}
