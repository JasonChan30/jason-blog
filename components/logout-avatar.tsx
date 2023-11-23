"use client"

import * as React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import {Avatar} from '@/components/ui/avatar';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import * as z from "zod";
import validator from 'validator';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


const loginFormSchema = z.object({
    phone: z.string({required_error: "Phone is required",})
        .refine((val) => validator.isMobilePhone(val,'zh-CN'), {
            message: "Invalid phone format.",
        }),
    verificationCode:z.string({required_error: "Verification code is required",}).length(6,{
        message: "Invalid verification code format.",
    }),
})

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
                        <div>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                            </Select>

                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </Avatar>
    );
};