import * as React from "react";

import {Avatar,AvatarImage,AvatarFallback} from '@/components/ui/avatar';

export function LoginAvatar () {
    return (
        <>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
        </>
    )
}