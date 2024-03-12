'use client'

import React from 'react'
import { TextField, TextArea, Button } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';


interface ToDoForm {
    title: string;
    description: string;
}

const newToDoPage = () => {
    const router = useRouter();
    const {register, handleSubmit} = useForm<ToDoForm>();

    return (
        <form className='max-w-xl space-y-3'
        onSubmit={handleSubmit(async (data) => {
            await axios.post('/api/todos', data);
            router.push('/to_dos')
        })}>
            <TextField.Root>
                <TextField.Input placeholder='Title' {...register('title')}/>
            </TextField.Root>
            <TextArea placeholder='Description' {...register('description')}></TextArea>
            <Button>Add New To Do</Button>
        </form>
    )
}

export default newToDoPage