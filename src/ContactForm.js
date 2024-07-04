import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { submitForm } from './Reducers/ContactReducer';

const ContactForm = () => {
const currentContact= useSelector(state=>state.contacts.contacts)
 const dispatch=useDispatch();
    const[forminput,setForminput]=useState({
        username:"",
        email:"",
        phone:"",
        password:""
    })
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setForminput((currentInput)=>{
            return{
                ...currentInput,
                [name]:value,
            }
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(submitForm({
            id:currentContact.length? currentContact[currentContact.length - 1].id + 1 : 1 ,
            username:forminput.username,
            email:forminput.email,
            phone:forminput.phone,
            password:forminput.password,

        }))      
    }

  
  return (
    <div className='container'>
        <h1> ContactForm </h1>
        <Link to="/" className='btn btn-success my-3'  > Home </Link>
        <div className="row">
            <div className="col-md-12">
                <form onSubmit={handleSubmit}>
               
                    <div className="mb-3">
                       <label>Name</label>
                        <input type="text"  name='username' value={forminput.username}  onChange={handleChange}  className="form-control"  placeholder="Your Name" required />
                    </div>
                    <div className="mb-3">
                     <label>Email </label>
                        <input type="email" name='email' value={forminput.email}  onChange={handleChange} className="form-control" placeholder="Email ID" required />
                    </div>
                    <div className="mb-3">
                    <label> Phone </label>
                        <input type="tel" name='phone' value={forminput.phone} onChange={handleChange}  maxLength="10"  className="form-control"  placeholder="888 888 8888" required />
                    </div>
                    <div className="mb-3">
                    <label> Password</label>
                        <input type="password" name='password' value={forminput.password} onChange={handleChange}   className="form-control" placeholder="Password" required />
                    </div>
                    <div className="mb-3">
                    
                    <button type="submit"  className="btn btn-primary col-md-4 ">Submit</button>
                    </div>
                </form>
            </div>
             
        </div>
        <div className="row">
            <h2>Current contacts</h2>
            <table className='table' >
          <thead>
            <tr>
              <th> ID </th>
              <th> Name </th>
              <th> Email </th>
              <th> Phone </th>
              <th> Password </th>
            </tr>
          </thead>
          <tbody>
             {currentContact && currentContact.map((user)=>(
              <tr key={user.id}>
              <td> {user.id}</td>  
              <td> {user.username}</td>  
              <td> {user.email}</td>  
              <td> {user.phone}</td>  
              <td> {user.password}</td>  
              </tr>
            ))
            }
           
          </tbody>
        </table>
        </div>    
    
  
 
    </div>
  )
}

export default ContactForm