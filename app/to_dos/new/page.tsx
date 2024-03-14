'use client'

import React from 'react'
import { TextField, TextArea, Button, Callout } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createToDoSchema } from '@/app/validationSchema';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';

type ToDoForm = z.infer<typeof createToDoSchema>;

const newToDoPage = () => {
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
                    await axios.post('/api/todos', data);
                    router.push('/to_dos')
                } catch (error) {
                    setError('An unexpected error occured.');
                }
            })}>
                <TextField.Root>
                    <TextField.Input placeholder='Title' {...register('title')}/>
                </TextField.Root>
                <ErrorMessage>{errors.title?.message}</ErrorMessage>
                <TextArea placeholder='Description' {...register('description')}></TextArea>
                <ErrorMessage>{errors.description?.message}</ErrorMessage>
                <Button>Add New To Do</Button>
            </form>
        </div>
    )
}

export default newToDoPage