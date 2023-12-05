import * as React from "react";

import {Avatar,AvatarImage} from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const loginUser = {
    avatarUrl : "https://github.com/shadcn.png",
}

export function LoginAvatar ({toggleLoginState}:{toggleLoginState:()=>void}) {

    function onLogoutBtnClick(){
        toggleLoginState();
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src={loginUser.avatarUrl} alt="@shadcn" />
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => onLogoutBtnClick()}>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}