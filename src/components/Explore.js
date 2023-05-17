import React from 'react'
import Sidebar1 from '../components/Sidebar1'
import Post from '../components/Post'
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";

const Explore = () => {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const getData = async () => {
        const url = `https://jsonplaceholder.typicode.com/posts?_start=${index}&_limit=5`;
        // const url = `https://jsonplaceholder.typicode.com/posts?_start=0&_limit=${index}`;
        let rawData = await fetch(url);
        let parsedData = await rawData.json();
        setData(data.concat(parsedData));
        // setData(parsedData);
        // index += 5;
        setIndex(index + 5);
      };
    
      useEffect(() => {
        getData();
      }, []);

      const getImgURL = () => {
         let options = [400,420,450,500];
         let num = Math.floor(Math.random() * 4);
         let x = options[num];
        //  num = Math.floor(Math.random() * 7);
        //  let y = options[num];
        return `https://picsum.photos/${x}`
      };

    return (
        <>
        <Sidebar1 current='explore'/>
        <InfiniteScroll
          dataLength={data.length}
          next={getData}
          hasMore={!(index ==100)}
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
                    user={element.userId}
                    imageURL={getImgURL()}
                    content={element.body}
                    stats={{}}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
        </>
      );
}

export default Explore