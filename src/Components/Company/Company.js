import React,{useEffect,useState} from 'react'
import MjestoService from '../../Services/MjestoService';
const Company=()=> {
const initialCompany={
        ime:"",
        adresa:"",
        email:"",
        mjesto:""
}

const [currentCompany, setCurrentCompany] = useState(initialCompany);
const [message, setMessage] = useState("");
const [mjesto, setMjesto] = useState([]);

const getMjesto = (id) => {
    MjestoService.get(id)
      .then((response) => {
        setMjesto(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  
    return (
        <div>
            
        </div>
    )
}

export default Company
