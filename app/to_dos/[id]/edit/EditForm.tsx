'use client'

import React from 'react'
import { Text, TextField, TextArea, Button, Callout } from '@radix-ui/themes';
import * as Label from '@radix-ui/react-label';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createToDoSchema } from '@/app/validationSchema';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import { ToDo } from "@prisma/client";
import StatusSelect from './Selector';

type ToDoForm = z.infer<typeof createToDoSchema>;

const EditForm = ({ todo }: { todo?: ToDo }) => {
    const router = useRouter();
    const {register, handleSubmit, formState: { errors }} = useForm<ToDoForm>(
        { resolver: zodResolver(createToDoSchema)}
    );
    const [error, setError] = useState('')

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
                    <TextField.Input placeholder={todo?.title} {...register('title')}/>
                </TextField.Root>
                <ErrorMessage>{errors.title?.message}</ErrorMessage>
                <TextArea placeholder={todo?.description} {...register('description')}></TextArea>
                <ErrorMessage>{errors.description?.message}</ErrorMessage>
                <TextArea placeholder={todo?.dueDate} {...register('dueDate')}></TextArea>
                <ErrorMessage>{errors.dueDate?.message}</ErrorMessage>
                <StatusSelect/><br/>
                <Button>Edit To Do</Button>
            </form>
        </div>
    )
}

export default EditForm