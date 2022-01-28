import React from "react";
import WithFetch from "./withFetcher";

const FetcherExample = () => {
  return (
    <WithFetch
      url={"https://jsonplaceholder.typicode.com/posts"}
      method="get"
      data={{
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      }}
    >
      {(response, error) => {
        if (error) return <p>Something went wrong - {error.message}</p>;
        return response?.map((todo) => <p>{todo.title}</p>);
      }}
    </WithFetch>
  );
};

export default FetcherExample;
