"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { FormInput, FormInputProp } from "@/models/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Contact() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormInputProp>({
    resolver: zodResolver(FormInput),
  });

  const SubmitContactForm: SubmitHandler<FormInputProp> = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (!response.ok) {
        return toast({
          title: result?.message,
        });
      }
      reset();
      return toast({
        title: result?.message,
      });
    } catch (error) {
      const err = error as Error;
      console.log(`Something went wrong. Please try again. :${error}`);
      return toast({
        title: err?.message,
      });
    }
  };
  return (
    <section className="min-h-screen">
      <h1 className="text-center text-3xl font-semibold my-10">Contact Us</h1>
      <form
        onSubmit={handleSubmit(SubmitContactForm)}
        className="max-w-xl mx-auto grid gap-4"
      >
        <div>
          <Input
            {...register("name")}
            className="text-lg font-semibold"
            placeholder="Enter name"
          />
          {errors?.name && (
            <p className="text-red-500">{errors?.name?.message}</p>
          )}
        </div>
        <div>
          <Input
            {...register("email")}
            className="text-lg font-semibold"
            placeholder="Enter email"
          />
          {errors?.email && (
            <p className="text-red-500">{errors?.email?.message}</p>
          )}
        </div>
        <div>
          <Textarea
            {...register("message")}
            className="text-lg font-semibold"
            placeholder="Enter message"
          />
          {errors?.message && (
            <p className="text-red-500">{errors?.message?.message}</p>
          )}
        </div>

        {/* Button */}
        <Button type="submit" className="text-xl">
          Submit
        </Button>
      </form>
    </section>
  );
}
