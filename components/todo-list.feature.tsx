import React from 'react';
import { cn } from "@/lib/utils"
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const AccordionDemo = () => (
    <Accordion.Root
        className="bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
        type="single"
        defaultValue="item-1"
        collapsible
    >
        <Accordion.Item value="item-1">
            <Accordion.Header className="flex">
                <Accordion.Trigger>
                    Is it unstyled?
                    <ChevronDownIcon
                        className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                        aria-hidden
                    />
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
                Yes. It's unstyled by default, giving you freedom over the look and feel.
            </Accordion.Content>
        </Accordion.Item>

    </Accordion.Root>
);

const AccordionItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
        className={cn(
            'focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
            className
        )}
        {...props}
        ref={forwardedRef}
    >
        {children}
    </Accordion.Item>
));

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
        <Accordion.Trigger
            className={cn(
                'text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none',
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            {children}
            <ChevronDownIcon
                className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                aria-hidden
            />
        </Accordion.Trigger>
    </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
        className={cn(
            'text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
            className
        )}
        {...props}
        ref={forwardedRef}
    >
        <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
));

export default AccordionDemo;