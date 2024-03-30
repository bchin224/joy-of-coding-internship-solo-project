
import React from 'react'
import prisma from "@/prisma/client";
import { Text, Card } from "@radix-ui/themes";
import StatusFilter from './statusFilter';
import { useSearchParams } from 'next/navigation';
import { Status } from '@prisma/client';

interface Props {
    searchParams: {
        [key: string]: string;
        status: string;
    }
}

const listToDos = async ({ searchParams }: Props) => {
   
    let param = ''

    if (Object.keys(searchParams).length == 0) {
        console.log('No Params')

    } else {
        console.log('Param Exists')
        param = searchParams.status;
    }
    // console.log('Search Params:',searchParams.status)

    const todos = await prisma.toDo.findMany({
        where: param ? { status: param as Status } : undefined
    });

  return (
    <>
        <div>Your To Do's</div>
        <StatusFilter/>
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