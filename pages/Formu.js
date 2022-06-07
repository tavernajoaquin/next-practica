import { useState } from "react";

const Formu = () => {

const [ email, setEmail ]= useState();
const [ a, setPassword ]=useState();


const handleChange=async(e)=>{
    e.preventDefault();
    console.log("email handler",email);
    console.log(a);
    
    data = {'email':email,'a':a};
    const response=await fetch('ventasflex.com/sistema/process_login/process.php',{
     method:'POST',
     body:{data},
     headers:{
        'Content-Type':'application/json',
        'Accept': 'application/json'
     },
    })
    const data=await response.json()
    console.log(data)
    
  }

    return ( 
        <>
        <h1>Inicio de sesion</h1>
        <form>
            <label htmlFor='email'>Ingrese su Email</label>
            <input
                type='text'
                id='email'
                placeholder="Ingrese su Email"
                onChange={(e) => setEmail(e.target.value)}/>
                <br/>
            <label htmlFor='pass'>Ingrese su password</label>
            <input
                type='text'
                id='a'
                placeholder="Ingrese su password"
                onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit' onClick={handleChange}>Log In</button>
        </form>


        </>
     );
}
 
export default Formu;

export async function getStaticProps(){
    try{
        const res = await('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json()
        return {
            props:{
                data
            }
        }
    } catch (error){
        console.log(error)
    }
}