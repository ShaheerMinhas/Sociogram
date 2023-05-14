import React,{useState, useEffect} from 'react';
import './Table.css';

const Table = () => {
  const [rows, setRows] = useState([]);
  const [headings,setHeadings] = useState([]);
  // const headings = ['Name', 'Description', 'Price', ''];
  // const rows = [
  //   {
  //     thumbnail: 'https://picsum.photos/seed/picsum/200/300',
  //     name: 'Product 1',
  //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  //     price: '$100',
  //   },
  //   {
  //     thumbnail: 'https://picsum.photos/seed/picsum/200/300',
  //     name: 'Product 2',
  //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  //     price: '$200',
  //   },
  //   {
  //     thumbnail: 'https://picsum.photos/seed/picsum/200/300',
  //     name: 'Product 3',
  //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  //     price: '$300',
  //   },
  // ];

  const fetchPeople = async () => {
    const response = await fetch(`http://localhost:5000/meetpeople/?userId=${1}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }    }
    );
    console.log("i am called")
    const data = await response.json();
    console.log({data});
    setRows(data.rows);
    setHeadings(data.headings);
  }
 useEffect(( )=>{
  console.log("i callmeetpeople");
    fetchPeople();
 },[])

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            {headings.map((heading) => (
              <th key={heading} className="font-weight-bold">
                {heading}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="">
              <td>
                <div className="d-flex align-items-center">
                  <div className="avatar">
                    <div className="mask w-12 h-12">
                      <img src={row.thumbnail} alt="Thumbnail" className="img-fluid" />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold">{row[headings[0].toLowerCase()]}</div>
                  </div>
                </div>
              </td>
              <td>
                <p className="max-w-xs d-inline-block max-height-20 text-break">{row[headings[1].toLowerCase()]}</p>
                <p className="d-inline">...</p>
              </td>
              <td>{row[headings[2].toLowerCase()]}</td>
              <td>
                <button className="btn btn-outline-primary btn-sm">follow</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
