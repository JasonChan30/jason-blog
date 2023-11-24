"use client"

import * as React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {Avatar} from '@/components/ui/avatar';
import {LoginForm} from '@/components/login/login-form';

export function LogoutAvatar (){

    return (
        <Avatar className="h-8 w-8">
            <Dialog>
                <DialogTrigger>
                    <div>123</div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader className="items-center">
                        <DialogTitle>Sign with SMS</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 justify-items-center">
                        <LoginForm/>
                    </div>
                </DialogContent>
            </Dialog>
        </Avatar>
    );
};