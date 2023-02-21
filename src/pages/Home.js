import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUsersStart, loadUsersStart } from '../redux/actions'

const Home = () => {

    const dispatch = useDispatch()
    const {userDetails} = useSelector(state => state.data)
    

    useEffect(() => {
      dispatch(loadUsersStart())
    },[])


    const handleDelete = (id) => {
      dispatch(deleteUsersStart(id))
    }

  return (
   <>
    <Table striped bordered hover style={{position:"relative",top:"250px"}}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      {userDetails?.map((item,index) => {
      return(
      <tbody key={index}>
        <tr>
          <th>{index+1}</th>
          <td>{item?.name}</td>
          <td>{item?.email}</td>
          <td>{item?.email}</td>
          <td>{item?.address}</td>
          <td>
            <div>
            <Link to={`/editUser/${item?.id}`}>
            <button>Edit</button>
            </Link>
            <button onClick={() => handleDelete(item?.id)}>Delete</button>
            <Link to={`/userInfo/${item?.id}`}>
            <button>UserInfo</button>
            </Link>
            </div>
          </td>
        </tr>
       
      </tbody>
        )
      })}
    </Table>
   </>
  )
}

export default Home