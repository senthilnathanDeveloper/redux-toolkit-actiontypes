import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { createUsersStart, updateUsersStart } from '../redux/actions'

const initialState ={
  name:"",
  email:"",
  phone:"",
  address:""
}

const AddEditUser = () => {
  const [form,setForm] = useState(initialState)
  const [editMode,setEditMode] = useState(false)
  const {name,email,phone,address} = form
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {id} = useParams()
  const {userDetails} = useSelector(state => state.data)

  useEffect(() => {
    if(id){
      setEditMode(true)
      const singleUser = userDetails.find((item) => item?.id === Number(id))
      setForm({...singleUser})
    }
  },[id])

  const handleChange = (e) => {
    let {name,value} = e.target;
    setForm({...form, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(name && email && phone && address){
      if(!editMode){
        dispatch(createUsersStart(form))
        navigate("/")
      }else {
        dispatch(updateUsersStart({id,form}))
        navigate("/")
      }
    }
  }
 
  return (
    <>
    <div style={{position:"relative",top:"250px"}}>
    <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input value={name || ""} type="text" name="name" onChange={handleChange}/>

    <label>Email</label>
    <input value={email || ""} type="email" name="email" onChange={handleChange}/>

    <label>Phone</label>
    <input value={phone || ""} type="number" name="phone" onChange={handleChange}/>

    <label>Address</label>
    <input value={address || ""} type="text" name="address" onChange={handleChange}/>

    <button>{!editMode ? "Submit":"Update"}</button>
    <button onClick={() => navigate("/")}>Go back</button>
    </form>
    </div>
    </>
  )
}

export default AddEditUser