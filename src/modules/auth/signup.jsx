"use client";

import { Button } from "components/button/button";
import { Input } from "components/input/input";
import { EMAIL_FORMAT } from "constant/regex";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    alert("Sign up success.");
    router.push("/login");
  };

  const handleCancel = () => {
    router.push("/login");
  };
  return (
    <div className="flex items-center justify-center py-5 px-4">
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-orange-400">Sign up</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="First name"
            required
            label="First Name"
            error={errors.firstname && errors.firstname?.message}
            {...register("firstname", { required: "Required this field." })}
          />
          <Input
            placeholder="Last name"
            required
            label="Last Name"
            error={errors.lastname && errors.lastname?.message}
            {...register("lastname", { required: "Required this field." })}
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

          <div className="flex space-x-2">
            <Button
              variant="custom"
              className=" border border-orange-400"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              variant="custom"
              className=" bg-orange-400 text-white"
              onClick={handleSubmit((d) => onSubmit(d))}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
