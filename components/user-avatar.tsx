"use client"

import * as React from 'react';
import {LogoutAvatar} from '@/components/logout-avatar';
import {LoginAvatar} from '@/components/login-avatar';

export function UserAvatar (){

    //0: logout; 1: login
    const [login, setLogin] = React.useState(0);

    return (
        <>
            { login === 0 ? (<LogoutAvatar/>) : (<LoginAvatar/>)}
        </>
    )
}