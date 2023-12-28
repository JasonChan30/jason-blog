'use client'

import * as React from 'react';

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ToDoList } from '@/components/todo/todoList'

export default function Home() {

  return <>
      <div className="container mt-8">
          <Card className="w-full">
              <CardHeader>
                  <CardTitle>TO-DO List</CardTitle>
              </CardHeader>
              <CardContent>
                  <ToDoList/>
              </CardContent>
          </Card>
      </div>
  </>
}
