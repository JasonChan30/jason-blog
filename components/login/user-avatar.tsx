"use client"

import * as React from 'react';
import {LogoutAvatar} from '@/components/login/logout-avatar';
import {LoginAvatar} from '@/components/login/login-avatar';

export function UserAvatar (){

    //0: logout; 1: login
    const [loginState, setLoginState] = React.useState(0);

    return (
        <>
            { loginState === 0 ? (<LogoutAvatar toggleLoginState={()=>setLoginState(1)}/>) : (<LoginAvatar toggleLoginState={()=>setLoginState(0)}/>)}
        </>
    )
}