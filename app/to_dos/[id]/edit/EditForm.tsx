'use client'

import React from 'react'
import { TextField, TextArea, Button, Callout } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { editToDoSchema } from '@/app/validationSchema';
import ErrorMessage from '@/app/components/ErrorMessage';
import { ToDo } from "@prisma/client";

interface EditForm {
    title: string;
    description: string;
    dueDate: string;
    status: string;
}

const EditForm = ({ todo }: { todo?: ToDo }) => {
    const router = useRouter();
    const {register, handleSubmit, formState: { errors }} = useForm<EditForm>(
        { resolver: zodResolver(editToDoSchema)}
    );
    const [error, setError] = useState('')
    console.log('Todo.status: ',todo?.status)

    return (
        <div className='max-w-xl space-y-3'>
            {error && <Callout.Root color='red' className='mb-5'>
                <Callout.Text>{error}</Callout.Text>
            </Callout.Root>}

            <form className='max-w-xl space-y-3'
            onSubmit={handleSubmit(async (data) => {
                try {
                    await axios.patch('/api/todos/'+todo?.id, data);
                    router.push('/to_dos')
                } catch (error) {
                    setError('An unexpected error occured.');
                }
            })}>
                <TextField.Root>
                    <TextField.Input defaultValue={todo?.title} {...register('title')}/>
                </TextField.Root>
                <ErrorMessage>{errors.title?.message}</ErrorMessage>
                <TextArea defaultValue={todo?.description} {...register('description')}></TextArea>
                <ErrorMessage>{errors.description?.message}</ErrorMessage>
                <TextArea defaultValue={todo?.dueDate} {...register('dueDate')}></TextArea>
                <ErrorMessage>{errors.dueDate?.message}</ErrorMessage>

                <select
                    className="block w-full border-gray-300 rounded-md shadow-sm"
                    defaultValue={todo?.status || ''} // Set defaultValue to the todo status 
                    {...register('status')}
                >
                    <option value="">Select Status</option>
                    <option value="OPEN">Open</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="CLOSED">Closed</option>
                </select>

                <Button>Edit To Do</Button>
            </form>
        </div>
    )
}

export default EditForm