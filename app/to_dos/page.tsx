'use client'

import React from 'react'
import { Button } from '@radix-ui/themes';
import Link from 'next/link';

const ToDoPage = () => {
  // get all of the to do's here
  return (
    <div><Button><Link href='/to_dos/new'>New</Link> </Button></div>
  )
}

export default ToDoPage