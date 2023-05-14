import React, { useState, useEffect } from "react";
import Post from "./Post";
import InfiniteScroll from "react-infinite-scroll-component";
import Sidebar1 from "./Sidebar1";
import NewPost from "./Newpost";
import ToDo from "./ToDo"
function Dashboard() {
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [index, setIndex] = useState(0);

  const getData = async () => {
    const url = `http://localhost:5000/fetchPosts`;
    const rawData = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        startIndex: index,
        userId: localStorage.getItem('logid')
      })
    });
    const parsedData = await rawData.json();
    setData(data.concat(parsedData.posts));
    setDataLength(parsedData.totalLength);
    setIndex(index + 10);
  };

  useEffect(() => {
    getData();
  }, []);



  const stats = {
    likes: 4,
    shares: 5,
  };

  const fetchData = () => {
    getData();
  };

  return (
    <>
      <Sidebar1 current= "dashboard"/>
      <div className="left-data">
      <NewPost />

      </div>
      
      <div className="right-data">

        <ToDo />
      </div>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={index < dataLength}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="container">
          {data.map((element) => {
            return (
              <div className="row justify-content-center" key={element.id}>
                <Post
                  key={element.id}
                  id={element.id}
                  user={element.userName}
                  imageURL={null}
                  content={element.postTxt}
                  stats={stats}
                  date={element.uploadDate}
                  likes={element.likes}

                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
}

export default Dashboard;