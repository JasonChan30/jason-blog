"use client"

import * as React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {Avatar,AvatarFallback} from '@/components/ui/avatar';
import {LoginForm} from '@/components/login/login-form';
import { Button } from "@/components/ui/button";
import { Icons } from '@/components/icons';

export function LogoutAvatar ({onLogin}:{onLogin:()=>void}){

    return (
            <Dialog>
                <DialogTrigger>
                    <Avatar className="h-8 w-8">
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader className="items-center">
                        <DialogTitle>Sign with SMS</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 justify-items-center">
                        <LoginForm onLogin={onLogin}/>
                        <div className="relative w-full">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-card px-2 text-muted-foreground">
                                  Or continue with
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <Button variant="outline">
                                <Icons.gitHub className="mr-2 h-4 w-4" />
                                Github
                            </Button>
                            <Button variant="outline">
                                <Icons.google className="mr-2 h-4 w-4" />
                                Google
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

    );
};