import React, { useState } from 'react';
import axios from 'axios'
const Create = (props) => {
    const [name, setname] = useState('')
    const [description, setdescription] = useState('')
    const [image, setimage] = useState('')
    const [price, setprice] = useState('')
    const [availability, setavailability] = useState('')
    const [brand, setbrand] = useState('')
    const [category, setcategory] = useState('')
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
    axios.post('/api/posts',obj).then((response) =>{
        console.log(response)
        console.log('created')
    })
} ; 
return (
    <div class="create">
  <div class="create-editor">
    <h2>AUTHOR</h2>
    <form>
      <input class="create-input" type="text"  placeholder="Product name" onChange={(e) =>setname(e.target.value)}></input>
      <input class="create-input" type="text"  placeholder="description"onChange={(e) =>setdescription(e.target.value)}></input>
      <input class="create-input" type="text"  placeholder="Image "onChange={(e) =>setimage(e.target.value)}></input>
      <input class="create-input" type="text"  placeholder="price "onChange={(e) =>setprice(e.target.value)}></input>
      <input class="create-input" type="text"  placeholder="availability "onChange={(e) =>setavailability(e.target.value)}></input>
      <input class="create-input" type="text"  placeholder="brand "onChange={(e) =>setbrand(e.target.value)}></input>
      <input class="create-input" type="text"  placeholder="category "onChange={(e) =>setcategory(e.target.value)}></input>
      <button class="create-submit-button" type="submit" onClick={() =>creating()}>Save product</button>
    </form>
  </div>
  <div class="create-preview">
    <h2>PREVIEW</h2>
  </div>
</div>
)}
export default Create ;