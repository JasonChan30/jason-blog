"use client"

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const loginFormSchema = z.object({
    phone: z.string({required_error: "Phone is required",}),
    verificationCode:z.string({required_error: "Verification code is required",}).length(6,{
        message: "Invalid verification code format.",
    }),
})

export function LoginForm () {
    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            phone: "",
            verificationCode: "",
        },
    })

    function onSubmit(values: z.infer<typeof loginFormSchema>){
        console.log(values);
    }

    function onSendValidationCode (){
        console.log("sending validation code");
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="flex">
                                    <div className="flex basis-2/12 justify-start flex-wrap content-center">
                                        <span>+86</span>
                                    </div>
                                    <Input className="border-none focus-visible:ring-0" placeholder="Please input your phone" {...field} />
                                    <Button className="ml-2" type="button" onClick={()=>onSendValidationCode()}>Send</Button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="verificationCode"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="flex">
                                    <div className="basis-2/12 flex justify-start flex-wrap content-center">
                                        <span>Code</span>
                                    </div>
                                    <Input className="basis-13/12 border-none focus-visible:ring-0" placeholder="Please input your verification code" {...field} />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex items-center justify-center">
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </Form>
    )
}