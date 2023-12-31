import React from 'react'

const AddProduct=()=>{
    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [category,setCategory]=React.useState('');
    const [company,setCompany]=React.useState('');
    const [error,setError]=React.useState(false);

    const addProduct=async()=>{

        console.log(!name)
        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }


        //console.log(name,price,category,company);
        const userId= JSON.parse(localStorage.getItem('user'))._id;
        let result= await fetch("http://localhost:3000/add-product ",{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }

        });
        result= await result.json();
        console.log(result);
        
    }


    return(
        <div className='product'>
            <h1>Add Product</h1>
            <input type='text' placeholder='Enter Product Name' 
            className='InputBox' onChange={(e)=>{setName(e.target.value)}} value={name} />
             {error && !name && <span className='invalid-input'>Enter valid Name</span>}

            <input type='text' placeholder='Enter Product Price' 
             className='InputBox' onChange={(e)=>{setPrice(e.target.value)}} value={price} />
            {error && !price && <span className='invalid-input'>Enter valid Price</span>}

            <input type='text' placeholder='Enter Product Category' 
             className='InputBox'  onChange={(e)=>{setCategory(e.target.value)}} value={category} />
            {error && !category && <span className='invalid-input'>Enter valid Category</span>}

            <input type='text' placeholder='Enter Product Company' 
             className='InputBox' onChange={(e)=>{setCompany(e.target.value)}} value={company} />
            {error && !company && <span className='invalid-input'>Enter valid Company</span>}

            <button onClick={addProduct} className='button'>Add Product</button>

        </div>
    )
}

export default AddProduct;