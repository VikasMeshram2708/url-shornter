"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

  const SubmitContactForm: SubmitHandler<FormInputProp> = (data) => {
    console.log(data);
    reset();
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
