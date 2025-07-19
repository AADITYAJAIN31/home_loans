import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img1 from './assets/house.jpeg'
import img2 from './assets/house2.jpg'
import img3 from './assets/house3.jpeg'
import img4 from './assets/house4.jpeg'
import img5 from './assets/house5.jpeg'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Service/>
      <Header/>
    </>
  )
}

function Header(){
  return(
    <>
    <header className='header'>
        <nav className='nav-bar'>
            <div className='image'>
              <img src={img1} alt="" />
            </div>
            <ul className='nav-links'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    </header>
    </>
  )
}
function Service(){
  const[name,setname]=useState("");
  const[email,setemail]=useState("");
  const[house,sethouse]=useState("House 1");
  const[mobile,setmobile]=useState("");
  const[message,setmessage]=useState("");
  const handlesubmit=(e)=>{
    e.preventDefault();
    alert(`Send Form`);
  const fullMessage=`Hello myself ${name} 
  email: ${email} 
  house: ${house} 
  mobile: ${mobile} 
  message: ${message}`;

  const encodedMessage=encodeURIComponent(fullMessage);
  const whatsappNumber="918103511685";
  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank"
  );
  }
  return(
    <>
    <div className='about'>
      <div className='image1'>
      <img src={img2} alt="" />
      </div>
      <p>A rental house is a residential property that is leased to tenants for a specific period in exchange for monthly rent. It offers individuals and families the flexibility to live in a home without the long-term financial commitment of purchasing property. Rental houses can vary in size and style, from small apartments to large standalone homes, depending on the tenant's needs and budget.Renting is a popular option for people relocating for work, students, or those saving for future investments. Typically, a rental agreement outlines the terms, including rent amount, duration, maintenance responsibilities, and other important conditions.</p>
    </div>
    <h1>Houses on rent</h1>
    <div className='image2'>
      <img src={img3} alt="" onClick={() => { sethouse("House 1"); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }} />
      <h2>House 1</h2>
      <img src={img4} alt="" onClick={() => { sethouse("House 2"); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }} />
      <h3>House 2</h3>
      <img src={img5} alt="" onClick={() => { sethouse("House 3"); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }} />
      <h4>House 3</h4>
    </div>
    <br></br>
    <hr></hr>
    <div className='text'>
      Welcome To My Service
    </div>
    <h5>Book Your Slots</h5>
    <div className='form'>
      <h1>Send Your Details</h1>
      <form onSubmit={handlesubmit}>
        <input 
        type="text" 
        value={name} 
        onChange={(event)=>setname(event.target.value)} 
        placeholder="Enter Your Name"required /><br/>

        <input 
        type="email" 
        value={email} 
        onChange={(event)=>setemail(event.target.value)} 
        placeholder="Enter Your E-mail"required /><br/>

        <label>Houses on rent:</label>
        <select value={house} onChange={(event)=>sethouse(event.target.value)}>
          <option value="House 1">House 1</option>
          <option value="House 2">House 2</option>
          <option value="House 3">House 3</option>
        </select>
        <input type="tel" 
        value={mobile} 
        onChange={(event)=>setmobile(event.target.value)} 
        placeholder="Enter Your Mobile Number"required/>

        <label>Message</label>
        <textarea id="messageForm" rows="4" 
        placeholder="Type your message.." 
        value={message}onChange={(event)=>setmessage(event.target.value)}required></textarea>

        <button type='submit'>Send Your Details</button>
      </form>
    </div>
    </>
  )
}
export default App
