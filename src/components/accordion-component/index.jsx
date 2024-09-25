import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export const AccordionItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={
        "border-b border-[#CAC9C4] focus-within:shadow-none focus-within:shadow-mauve12 overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10"
      }
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  ),
);
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef(
  ({ children, className, icon, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={
          "group text-black md:text-[25px] text-[16px] group flex flex-1 cursor-pointer items-center justify-between bg-white px-5 outline-none"
        }
        {...props}
        ref={forwardedRef}
      >
        <div className="md:py-[25px] py-[15px]">{children}</div>
        <div className=" rounded-full group-hover:shadow transition-all">
          {!icon ? (
            <div className="p-2">
              <ChevronDownIcon
                className=" w-[30px] h-[30px] ease-[cubic-bezier(0.87,_0,_0.13,_1)]  transition-transform duration-300 group-data-[state=open]:rotate-180"
                aria-hidden
              />
            </div>
          ) : (
            <div className="rounded-full overflow-hidden p-1">{icon}</div>
          )}
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  ),
);
AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={
        "md:text-[16px] text-[14px] pb-[26px] text-[#6B6A6A] data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden"
      }
      {...props}
      ref={forwardedRef}
    >
      <div className="px-5">{children}</div>
    </Accordion.Content>
  ),
);
AccordionContent.displayName = "AccordionContent";
