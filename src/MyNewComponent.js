import React,{useState} from 'react';

const FormsForUser = props => {
    const [ fname,setFname] = useState("");
    const [ lname,setLname] = useState("");
    const [ email,setEmail] = useState("");
    const [ password,setPassword] = useState("");  
    const [ confpassword,setConfPassword] = useState("");       
    
    
    const CreateUser= (e) => {
        e.preventDefault();
       const newUser={fname,lname,email,password,confpassword}
       console.log("hello",newUser);
    };
   
    return( 
    <div className='App'>
                
        <form onSubmit={CreateUser}>
            <label >First name:</label>
            <input type="text"  onChange={ (e) => setFname(e.target.value)}  /><br/>

            <label >Last name:</label>
            <input type="text" onChange={ (e) => setLname(e.target.value)}  /><br/>


            <label >email:</label>
            <input type="text" onChange={(e)=>setEmail(e.target.value)}/><br/>

            <label >Password :</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)}/><br/><br/>

            <label >ConfPassword :</label>
            <input type="password" onChange={(e)=>setConfPassword(e.target.value)}/><br/><br/>


            <input type="submit" value="Create User"/>  
        </form>
        <br/> <br/>
        <hr/> <br/> 
        <h4>Your Form Data</h4><br/>
        <p>First name is: {fname}</p>
        <p>Last name is: {lname}</p>
        <p>Email is: {email}</p>
        <p>password is: {password}</p>
        <p>confpassword is: {confpassword}</p>
    </div>
     

    );
}
 export default FormsForUser;
