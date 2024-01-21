"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
    isVerified: z.boolean().optional(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
      });
    }
  });

const AuthForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      isVerified: true,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {};

  return (
    <div className="h-full mx-auto w-[36rem] bg-black rounded-xl items-center justify-center">
        
      <div className="mx-auto space-y-4 p-20">
      <p className="text-white mx-auto text-center font-semibold text-5xl mb-20">
            Log in to Spotify
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input className="bg-[#181918] border-0"  placeholder="Email" {...field} />
                  </FormControl>
                  <FormDescription>Enter your email address.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input className="bg-[#181918] border-0"  placeholder="Password" {...field} />
                  </FormControl>
                  <FormDescription>Enter a strong Password</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input className="bg-[#181918] border-0" placeholder="Password" {...field} />
                  </FormControl>
                  <FormDescription>Confirm Password</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="pt-3 flex felx-row gap-2">
            <Button  type="submit">Sign Up</Button>
            <Button  type="submit">Sign In</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AuthForm;
