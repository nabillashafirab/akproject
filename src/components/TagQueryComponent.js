// YourComponent.js
import React from 'react';
import { useGetOperatorTagQuery } from '../rtk-query/tagquery';

const TagQueryComponent = () => {
  // Trigger the data fetching
  const { data, error, isLoading } = useGetOperatorTagQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Coba Data</h1>
      {/* Check if data is defined before mapping */}
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default TagQueryComponent;
