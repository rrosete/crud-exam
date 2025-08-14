"use client";

import axios from "axios";
import { Button } from "components/button/button";
import { Input } from "components/input/input";
import { API_URL } from "constant/constant";
import { useRouter, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const Edituser = () => {
  const router = useRouter();
  const params = useParams();

  const { userId } = params;

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...data,
    },
  });
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/getUserId/${userId}`);
      setData(response.data.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    alert("Update Successfully.");
    router.push("/user");
    await axios.put(
      `${API_URL}/updateUser/${userId}/${data.firstName}/${data.lastName}`
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        {data.firstName}
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

          <Button onClick={handleSubmit((d) => onSubmit(d))}>Submit</Button>
        </form>
      </div>
    </div>
  );
};
