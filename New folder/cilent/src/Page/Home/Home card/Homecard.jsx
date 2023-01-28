import React from "react";
import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { MDBBtn } from 'mdb-react-ui-kit';

function Homecard() {
  const [data, setdata] = useState([]);
  const [searchs,setsearchs]=useState("")
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => setdata(res.data));
  }, []);
  const cardDelete=(id)=>{
        axios.delete(`http://localhost:5000/users/${id}`)
      setdata(data.filter(x=>x._id !==id))
  }
  const searchdata=(e)=>{
    setsearchs(e.target.value);
  }
  const sortAZ=()=>{
    const sortcarddata = [...data].sort((a, b) =>
    a.username > b.username ? 1 : -1,
  );
  setdata(sortcarddata)
  }
  const sortZA=()=>{
    const sortcarddata = [...data].sort((a, b) =>
    a.username < b.username ? 1 : -1,
  );
  setdata(sortcarddata)
  }
  return (
    <div className="homecard">
        <div className="seach_sort">
            <input type="text"  placeholder="User name search" onChange={searchdata}/>
            <MDBBtn className='me-1' color='success'onClick={sortAZ}>
            A-Z
      </MDBBtn>
      <MDBBtn className='me-1' color='success'  onClick={sortZA}>
      Z-A
      </MDBBtn>
        </div>
      <div>
          <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        {
          data.filter(x=>x.username.toLowerCase().includes(searchs.toLowerCase())).map((x) => (
            <MDBCol key={x._id}>
              <MDBCard className="h-100">
                <MDBCardImage className="homecard_img" src={x.img} alt="..." position="top" />
                <MDBCardBody>
                  <MDBCardText>
                    {x.usermessage}
                  </MDBCardText>
                  <MDBCardTitle >{x.username}</MDBCardTitle>
                  <MDBCardTitle className="homecard_userwork">{x.userwork}</MDBCardTitle>
                  <MDBBtn className='me-1' color='danger' onClick={()=>cardDelete(x._id)}>
        Delete
      </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
      </MDBRow>
      </div>
    </div>
  );
}

export default Homecard;
