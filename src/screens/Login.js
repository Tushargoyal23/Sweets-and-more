import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function Login() {
  const [credentials, setcredentials] = useState({ password: "", email: "" })
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
     e.preventDefault();
     const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      url:"/api/creatuser",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({name: credentials.name,password:credentials.password,location:credentials.location,email:credentials.email})
     })
    const json = await response.json();
    console.log(json); 
    if(!json.success){
      alert("enter valid credentials")
    }else{
      navigate("/")
    }
  }
  const onchange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})

  }
  return (
    <div>
      <div className='container'>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onchange} id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control"name='password' value={credentials.password} onChange={onchange} id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
          <Link to="/creatuser" className=" m-3 btn btn-primary">I'm a new login</Link>
        </form>
      </div>
    </div>
  )
}
