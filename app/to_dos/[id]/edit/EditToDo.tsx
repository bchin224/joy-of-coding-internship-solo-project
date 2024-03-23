'use client';

import { Button } from '@radix-ui/themes'
import React from 'react'
import { useRouter } from "next/navigation";

const GoToEdit = ({id}: { id: number}) => {
  const router = useRouter();

  const goToEditTodo = async () => {
      router.push("/to_dos/" + id + "/edit");
      router.refresh();
  };

  return (
    <Button color='green'
    onClick={goToEditTodo}>Edit
    </Button>
  )
}

export default GoToEdit