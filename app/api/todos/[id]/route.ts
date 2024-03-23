import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { createToDoSchema } from "../../../validationSchema";

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

// Edit Todo
export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const body = await request.json();
    const validation = createToDoSchema.safeParse(body)

    console.log('Testing validation:', validation)

    if (!validation.success) {
        console.log('Fail:', validation)
        return NextResponse.json(validation.error.format(), { status: 400 });
    }

    const todo = await prisma.toDo.findUniqueOrThrow({
        where: { id: parseInt(params.id)}
    })
    
    // make edit
    const editTodo = await prisma.toDo.update({
        where: { id: todo.id },
        data: {
            title: body.title,
            description: body.description,
            dueDate: body.dueDate,
            status: body.status
        }
    })
    return NextResponse.json(editTodo)

    
}
