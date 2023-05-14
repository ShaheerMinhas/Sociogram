import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import axios from "axios";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    const response = await axios.post("/searchuser", { name: value });
    console.log(response.data);
    // Do something with the response data
  };

  return (
    <>
    <Container>
      <Form id="searchbar">
        <Form.Control
          type="search"
          placeholder="Search"
          className="searchff"
          value={searchTerm}
          onChange={handleSearch}
        />
      </Form>
      
    </Container>
  
    </>
  );
}

export default SearchBar;