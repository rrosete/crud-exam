"use client";

import { useRouter } from "next/navigation";
import { Button } from "components/button/button";
import { Table } from "components/table/table";

export const PostPage = () => {
  const router = useRouter();
  const sampleData = [
    {
      name: "Ryan Smith",
      comment: "I like comment",
      time: "11:30 PM",
    },
  ];
  const sampleHeader = ["name", "comment", "time"];

  const handleOnclick = () => {
    router.push("/post/create");
  };

  return (
    <div className="">
      <Button variant="primary" onClick={handleOnclick}>
        Add Post
      </Button>
      <div className="mt-5">
        <Table data={sampleData} columns={sampleHeader} />
      </div>
    </div>
  );
};
