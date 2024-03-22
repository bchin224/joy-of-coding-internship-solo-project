'use client';

import { Button } from '@radix-ui/themes'
import React from 'react'
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteToDo = ({id}: { id: number}) => {
  const router = useRouter();
  const [error, setError] = useState(false);

  const deleteTodo = async () => {
    try {
      await axios.delete("/api/todos/" + id);
      router.push("/to_dos/list");
      router.refresh();
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Button color='red'
    onClick={deleteTodo}>Delete
    </Button>
  )
}

export default DeleteToDo