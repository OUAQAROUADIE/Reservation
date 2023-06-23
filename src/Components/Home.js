import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Home() {
  return (
    <div id='login' className=' d-flex justify-content-center align-items-center ' style={{height:"800px"}}>
   <div className='col mt-5 w-50 h-50 ' style={{marginLeft:"300px"}}>
    <Form className='gap-5'>
    <h1>Se Connecter:</h1>

      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Control className='' type="nom" placeholder="nom et prénom" style={{width:"350px",height:"50px"}} />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control  type="password" placeholder="Password" style={{width:"350px",height:"50px"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button href='/' style={{width:"350px",height:"50px",backgroundColor:"#14EF44"}} variant="primary" type="submit">
       <h3> Connecter</h3>
      </Button>
    </Form>
    </div >
    <div className='col' >
    <img className='  m-auto' color='' src='./Images/plat1.png' style={{width:"400px",marginRight:"5"}}></img>
    </div>
    </div>
  )
}

export default Home