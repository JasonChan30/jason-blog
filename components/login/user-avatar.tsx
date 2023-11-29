"use client"

import * as React from 'react';
import {LogoutAvatar} from '@/components/login/logout-avatar';
import {LoginAvatar} from '@/components/login/login-avatar';

export function UserAvatar (){

    //0: logout; 1: login
    const [login, setLogin] = React.useState(0);

    return (
        <>
            { login === 0 ? (<LogoutAvatar onLogin={()=>setLogin(1)}/>) : (<LoginAvatar onLogin={()=>setLogin(0)}/>)}
        </>
    )
}