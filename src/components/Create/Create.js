import React, { useState } from 'react';
import axios from 'axios';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useStyles from './createStyle';




const Create = (props) => {
  const classes = useStyles();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [availability, setAvailability] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    // creating function
function creating () {
    const obj = { name: name ,
        description: description ,
        image:image ,
        price:price ,
        availability:availability ,
         brand:brand ,
        category: category
    }
    axios.post('http://localhost:3001/posts',obj).then((response) =>{
        console.log(response)
        console.log('created')
    })
} ; 

return (
    <div className={classes.create}>
  <div className={classes.create}>
  <div className={classes.toolbar} />
    <h2>Add Post</h2>
    {/* <form onSubmit={()=> creating()}>
      <input id="name" type="text"  value={name} placeholder="Product name" onChange={(e) =>setName(e.target.value)}></input>
      <input id="description" type="text"  value={description} placeholder="description"onChange={(e) =>setDescription(e.target.value)}></input>
      <input id="imageUrl" type="text"  value={image} placeholder="Image "onChange={(e) =>setImage(e.target.value)}></input>
      <input id="price" type="text"  value={price} placeholder="price "onChange={(e) =>setPrice(e.target.value)}></input>
      <input id="available" type="text"  value={availability} placeholder="availability "onChange={(e) =>setAvailability(e.target.value)}></input>
      <input id="brand" type="text"  value={brand} placeholder="brand "onChange={(e) =>setBrand(e.target.value)}></input>
      <input id="category" type="text"  value={category} placeholder="category "onChange={(e) =>setCategory(e.target.value)}></input>
      <button className="create-submit-button" type="submit" >Save product</button>
    </form> */}
    <MuiThemeProvider>
        <React.Fragment>
          <TextField
            hintText="Product Name"
            label="Product Name"
            onChange={(e) =>setName(e.target.value)}
          />
          <br />
          <TextField
            hintText="Description"
            label="Description"
            onChange={(e) =>setDescription(e.target.value)}
          />
          <br />
          <TextField
            hintText="Image Url"
            label="Image Url"
            onChange={(e) =>setImage(e.target.value)}
          />
          <br />
          <TextField
            hintText="Price"
            label="Price"
            onChange={(e) =>setPrice(e.target.value)}
          />
          <br />
          <TextField
            hintText="Availability"
            label="Availability"
            onChange={(e) =>setAvailability(e.target.value)}
          />
          <br />
          <TextField
            hintText="Brand"
            label="Brand"
            onChange={(e) =>setBrand(e.target.value)}
          />
          <br />
          <TextField
            hintText="Category"
            label="Category"
            onChange={(e) =>setCategory(e.target.value)}
          />
          <br />
          <Button variant="contained" color="primary" className={classes.button} onClick={()=> creating()}>
            Save Product
          </Button>
        </React.Fragment>
      </MuiThemeProvider>
  </div>
</div>
)};





export default Create ;