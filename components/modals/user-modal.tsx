"use client";

import { useState } from "react";

import * as z from "zod";

import { useUserModal } from "@/hooks/use-user-modal";
import Modal from "@/components/ui/modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import axios from "axios";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  name: z.string().min(1),
});

export const UserModal = () => {
  const userModal = useUserModal();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async () => {};

  return (
    <Modal
      title="Sign up"
      description="Start Listeening to your favorites"
      isOpen={userModal.isOpen}
      onClose={userModal.onClose}
    >
      <div className="space-y-4 py-2 pb-4">
        <Form {...form}>
          <form onSubmit={}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>

                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Email"
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>

                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="*******"
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

           
          </form>
        </Form>
      </div>
    </Modal>
  );
};
