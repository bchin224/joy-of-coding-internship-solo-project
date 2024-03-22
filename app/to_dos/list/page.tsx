import React from 'react'
import prisma from "@/prisma/client";
import { Text, Card } from "@radix-ui/themes";


const listToDos = async () => {
    const todos = await prisma.toDo.findMany();

  return (
    <>
        <div>You're To Do's!</div>
        <br/>
        <div>
            {todos.map((todo) => (
                <Card key={todo.id} asChild>
                    <a href={`/to_dos/${todo.id}`}>
                        <Text as='div'>
                            {todo.title} | {todo.status}
                        </Text>
                        <Text as='div'>
                            {todo.description}
                        </Text>
                        <Text as='div'>
                            {todo.dueDate}
                        </Text>
                    </a>
                </Card>

            ))}
        </div>
    </>
  )
}

export default listToDos