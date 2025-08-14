"use client";

import axios from "axios";
import { Button } from "components/button/button";
import { Table } from "components/table/table";
import { API_URL } from "constant/constant";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const User = () => {
  const router = useRouter();
  const sampleHeader = ["name", "email", "date", "action"];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/getUsers`);
      setData(response.data.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {};

  const handleDelete = () => {};

  const renderData = data.map((item) => {
    return {
      name: `${item.firstName} ${item.lastName}`,
      email: item.email,
      date: moment(item.createdAt).format("MM/DD/YYYY"),
      action: (
        <div className="flex flex-row gap-2">
          <Button
            onClick={() => {
              handleEdit(item);
            }}
          >
            Edit
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              handleDelete(item.id);
            }}
          >
            Delete
          </Button>
        </div>
      ),
    };
  });

  const handleOnclick = () => {
    router.push("/user/create");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Button variant="primary" onClick={handleOnclick}>
        Add User
      </Button>
      <div className="mt-5">
        <Table data={renderData} columns={sampleHeader} />
      </div>
    </>
  );
};
