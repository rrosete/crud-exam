"use client";

import axios from "axios";
import { Button } from "components/button/button";
import { Input } from "components/input/input";
import { API_URL } from "constant/constant";
import { EMAIL_FORMAT } from "constant/regex";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const CreateUser = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    alert("Successfully created.");
    router.push("/user");
    await axios.post(`${API_URL}/create`, {
      ...data,
    });
  };
  return (
    <div className="flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="First name"
            required
            label="First Name"
            error={errors.firstName && errors.firstName?.message}
            {...register("firstName", { required: "Required this field." })}
          />
          <Input
            placeholder="Last name"
            required
            label="Last Name"
            error={errors.lastName && errors.lastName?.message}
            {...register("lastName", { required: "Required this field." })}
          />
          <Input
            placeholder="Email"
            required
            label="Email"
            error={errors.email && errors.email?.message}
            {...register("email", {
              required: "Required this field.",
              pattern: {
                value: EMAIL_FORMAT,
                message: "Invalid Email",
              },
            })}
          />
          <Input
            placeholder="Password"
            required
            label="Password"
            type="password"
            error={errors.password && errors.password?.message}
            {...register("password", {
              required: "Required this field.",
            })}
          />
          <Input
            placeholder="Password Confirm"
            required
            label="Password Confirm"
            type="password"
            error={errors.confirmPassword && errors.confirmPassword?.message}
            {...register("confirmPassword", {
              required: "Required this field.",
              validate: (value) =>
                value === password || "Password did not match",
            })}
          />
          <Button onClick={handleSubmit((d) => onSubmit(d))}>Submit</Button>
        </form>
      </div>
    </div>
  );
};
