// import prisma from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import React from 'react'
import { Card, Heading, Text } from "@radix-ui/themes";

interface Props {
    params: { id: string };
  }

const prisma = new PrismaClient();

const ToDoPage = async ({ params }: Props) => {
    const todo =  await prisma.toDo.findUniqueOrThrow({
        where: { id: parseInt(params.id)}
    })

    return (
        <Card>
            <Heading>{todo.id}: {todo.title}</Heading>
            <Text>{todo.description}</Text><br/>
            <Text>Due:{todo.dueDate}</Text>
        </Card>
    )
}

export default ToDoPage