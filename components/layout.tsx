'use client'

import { Header } from '@/components/header';
import type { ReactElement } from 'react'

export default function Layout(page: ReactElement){
    return <>
        <Header/>
        {page}
    </>
}