import React,{useState} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const Contact=()=> {
  const [data, setData] = useState({
    fullname:'',
    email:'',
    number:'',
    message:''
  });

  const InputEvent=(event)=>{
    const {name, value} = event.target;

    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value
      }
    })
  }

  const formSubmit=(e)=>{
    e.preventDefault();
    alert(`Hey ${data.fullname} Thank You Choosing Us! We Will Get To You Soon..!`);
  }
    return (
      <>
        <MDBContainer>
        <MDBRow>
          <MDBCol md="6" className="mx-auto pt-5 mt-5">
            <form onSubmit={formSubmit}>
              <h1 className="h5 text-center mb-4 underline contactDiv">Write to us</h1>
              <div className="grey-text">
                <MDBInput label="Your name" icon="user" group type="text" onChange={InputEvent} value={data.fullname} name="fullname" validate error="wrong"
                  success="right" required/>
                <MDBInput label="Your email" icon="envelope" group type="email" onChange={InputEvent} value={data.email} name="email" validate error="wrong"
                  success="right" />
                <MDBInput label="Contact" icon="mobile" group type="number" onChange={InputEvent} value={data.number} name="number"  validate error="wrong" success="right" />
                <MDBInput type="textarea" onChange={InputEvent} value={data.message} name="message" rows="2" label="Your message" icon="pencil-alt" />
              </div>
              <div className="text-center">  
            
                <MDBBtn outline color="secondary" type="submit">
                  Send
                  <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </>
    )
  }


export default Contact