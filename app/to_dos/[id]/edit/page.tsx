
import React from 'react'
// import { Card, Heading, Text } from "@radix-ui/themes";
import prisma from "@/prisma/client";
import EditForm from './EditForm';

interface Props {
    params: { id: string };
  }

const editToDoPage = async ({ params }: Props) => {

    const todo =  await prisma.toDo.findUniqueOrThrow({
        where: { id: parseInt(params.id)}
    })
 
    return (
        <>
        <div>editToDoPage</div>
            {/* <Card>
                <Heading>{todo.id}: {todo.title}</Heading>
                <Text>Description: {todo.description}</Text><br/>
                <Text>Due: {todo.dueDate}</Text><br/>
                <Text>Status: {todo.status}</Text><br/>
            </Card> */}
            <EditForm todo={todo}/>

        </>
    )
}

export default editToDoPage