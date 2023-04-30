import React from 'react';
import Button from '@mui/material/Button';
import img1 from '../images/download.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';


export default function Register1() {
  return (
    <div>
      {/* <Button variant="contained">Hello World</Button> */}
      <div className='container'>
        <div className='upperredline'></div>
        <div className='container imagetatva row'>
          <div className='col-9 imagetatva'>
            <img src={img1} alt="" className='image1' />
          </div>
          <div className='col imagetatva'>
          <div className='row imagetatva'>
          <div className='col cartDiv'>
              <button style={
                {textAlign:"center",
                color:"red",
                backgroundColor:"transparent",
                borderColor:"transparent",
                font:"14px"}
                
              }
              >Login</button>
              <span style={{color:"red"}}> | </span>
              <button style={
                {textAlign:"center",
                color:"red",
                backgroundColor:"transparent",
                borderColor:"transparent",
                font:"14px"}
                
              }
              >Register</button>
            
              
              <button style={
                {textAlign:"center",
                
                width:"100.88px",
                height:"40px",
                backgroundColor:"transparent",
                font:"14px",
                border:"2px solid grey",
                borderRadius:"5px"}
                
              }
              ><span><ShoppingCartIcon variant="contained" style={{color:"red"}}></ShoppingCartIcon>Cart</span></button>
              
            </div>
              
          </div>
          
            
          </div>
        </div>
        <div className="container search">
          <input type="search" name="search" id="search" />
          <Button variant="contained" color='success'><SearchIcon variant="contained"></SearchIcon>Search</Button>
          <Button variant="contained" color='error'>Cancel</Button>
        </div>

      </div>
    </div>
  );
}
