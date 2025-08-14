"use client";

import { Button } from "components/button/button";
import { Input } from "components/input/input";
import { Textarea } from "components/textarea/textarea";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const CreatePost = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Successfully created.");
    router.push("/post");
  };
  return (
    <div className="flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Textarea
            required
            label="Comment"
            error={errors.comment && errors.comment?.message}
            {...register("comment", { required: "Required this field." })}
          />
          <Button onClick={handleSubmit((d) => onSubmit(d))}>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
