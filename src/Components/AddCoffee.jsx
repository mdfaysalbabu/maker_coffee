import React from "react";
import { Link, Navigate } from "react-router-dom";
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleData=(event)=>{
      event.preventDefault();
      const form=event.target;
      const name=form.name.value;
      const quantity=form.quantity.value;
      const supplier=form.supplier.value;
      const taste=form.taste.value;
      const category=form.category.value;
      const photo=form.photo.value;
      const details=form.details.value;
      const newCoffee={name,quantity,supplier,taste,category,photo,details}
      console.log(newCoffee)
      fetch('https://coffe-store-server-hazel.vercel.app/coffee',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(newCoffee)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.insertedId){
          
            Swal.fire({
                title: 'Success',
                text: 'user added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
                
              })
              
        }
        
      })
    }
  return (
    <div className="p-24">
      <h2 className="text-3xl font-bold">Add Coffee</h2>
      <button className="text-2xl mt-3 btn text-green-400"><Link to='/'>Home</Link></button>
      <form onSubmit={handleData}>
        {/* form name and quantity row */}
        <div className="md:flex mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Coffee name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                placeholder="Coffee quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier test */}
        <div className="md:flex mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="Supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="taste"
                placeholder="Taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/*form categories and details  */}
        <div className="md:flex mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* last option row */}
        <div className="mb-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        
        <input type="submit" value="Add Coffee"className="btn btn-secondary" />
      </form>
    </div>
  );
};

export default AddCoffee;
