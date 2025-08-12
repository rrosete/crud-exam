"use client";
import { Button } from "components/button/button";
import { Input } from "components/input/input";
import { EMAIL_FORMAT } from "constant/regex";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const Login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    router.push("/user");
  };
  return (
    <div>
      {/* Form */}
      <form className="p-6 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          placeholder="Email..."
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
          label="Password"
          placeholder="Password..."
          type="password"
          error={errors.password && errors.password?.message}
          {...register("password", { required: "Required this field." })}
        />
        <Button
          onClick={handleSubmit((d) => onSubmit(d))}
          variant="custom"
          className=" bg-orange-400 text-white w-full"
        >
          Sign in
        </Button>
      </form>
      <div className="bg-orange-50 px-6 py-4 text-center border-t border-gray-200">
        Don't have an account?{" "}
        <Link
          className="font-medium text-orange-400 hover:text-orange-800"
          href="/signup"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};
