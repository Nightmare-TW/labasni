import React, { useState } from 'react';
import axios from 'axios';



const Create = (props) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [availability, setAvailability] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
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
    axios.post('/posts',obj).then((response) =>{
        console.log(response)
        console.log('created')
    })
} ; 
return (
    <div class="create">
  <div class="create-editor">
    <h2>AUTHOR</h2>
    <form>
      <input class="create-input" type="text"  placeholder="Product name" onChange={(e) =>setName(e.target.value)}></input>
      <input class="create-input" type="text"  placeholder="description"onChange={(e) =>setDescription(e.target.value)}></input>
      <input class="create-input" type="text"  placeholder="Image "onChange={(e) =>setImage(e.target.value)}></input>
      <input class="create-input" type="text"  placeholder="price "onChange={(e) =>setPrice(e.target.value)}></input>
      <input class="create-input" type="text"  placeholder="availability "onChange={(e) =>setAvailability(e.target.value)}></input>
      <input class="create-input" type="text"  placeholder="brand "onChange={(e) =>setBrand(e.target.value)}></input>
      <input class="create-input" type="text"  placeholder="category "onChange={(e) =>setCategory(e.target.value)}></input>
      <button class="create-submit-button" type="submit" onClick={() =>creating()}>Save product</button>
    </form>
  </div>
  <div class="create-preview">
    <h2>PREVIEW</h2>
  </div>
</div>
)};





export default Create ;