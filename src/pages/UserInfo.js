import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const UserInfo = () => {
  const {userDetails} = useSelector(state => state.data)
  const {id} = useParams()
  const navigate = useNavigate()
  const singleUser = userDetails?.find((item) => item?.id === Number(id))
  return (
    <>
    <p>Id:</p>
    <p>{singleUser?.id}</p>
    <p>Name:</p>
    <p>{singleUser?.name}</p>
    <p>Email:</p>
    <p>{singleUser?.email}</p>
    <p>Phone No:</p>
    <p>{singleUser?.phone}</p>
    <p>address:</p>
    <p>{singleUser?.address}</p>
    <button onClick={() => navigate("/")}>Go Back</button>
    </>
  )
}

export default UserInfo