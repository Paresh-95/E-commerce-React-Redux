import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Card from "../components/Card";


function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.log("Problem fetching Data");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="p-4">
      {loading ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : posts.length > 0 ? (
        <div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 p-4 mx-auto max-w-6xl">
            {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
        </div>
      ) : (
        <p>No Data Found</p>
      )}
    </div>
  );
}

export default Home;
