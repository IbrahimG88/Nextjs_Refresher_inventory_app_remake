import React from "react";
import { useFetchData } from "../components/swrexample";

const MyComponent = () => {
  const { data, isLoading, isError } = useFetchData();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>An error has occurred.</p>;
  }

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default MyComponent;
