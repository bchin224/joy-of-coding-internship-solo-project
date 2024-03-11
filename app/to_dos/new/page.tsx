'use client'

import React from 'react'
import { TextField, TextArea, Button } from '@radix-ui/themes'

const newToDoPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder='Title'/>
        </TextField.Root>
        <TextArea placeholder='Description'></TextArea>
        <Button>Add New To Do</Button>
    </div>
  )
}

export default newToDoPage