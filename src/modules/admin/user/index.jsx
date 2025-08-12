"use client";

import { Button } from "components/button/button";
import { Table } from "components/table/table";
import { useRouter } from "next/navigation";

export const User = () => {
  const router = useRouter();
  const sampleData = [
    {
      name: "Ryan Smith",
      email: "ryan@sample.com",
      Date: "11:30 PM",
    },
  ];
  const sampleHeader = ["name", "email", "date"];

  const handleOnclick = () => {
    router.push("/user/create");
  };
  return (
    <>
      <Button variant="primary" onClick={handleOnclick}>
        Add User
      </Button>
      <div className="mt-5">
        <Table data={sampleData} columns={sampleHeader} />
      </div>
    </>
  );
};
