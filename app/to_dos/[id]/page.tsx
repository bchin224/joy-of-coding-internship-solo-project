// import prisma from '@prisma/client';
import { PrismaClient } from '@prisma/client';
// import { notFound } from "next/navigation";

import React from 'react'
import { Heading, Text } from "@radix-ui/themes";

interface Props {
    params: { id: string };
  }

const prisma = new PrismaClient();

const ToDoPage = async ({ params }: Props) => {
    const todo =  await prisma.toDo.findUniqueOrThrow({
        where: { id: parseInt(params.id)}
    })

    console.log(todo)
    // if (!todo) notFound();

    return (
        <>
        <div>
            <Heading>{todo.title}</Heading>
            <Text>{todo.description}</Text>
        </div>
        </>
    )
}

export default ToDoPage