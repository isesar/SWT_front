import React,{useEffect, useState} from 'react'
import FirmaService from '../../Services/FirmaService';
import {Link} from 'react-router-dom'
const CompanyList=()=> {

    const [companies,setCompanies]=useState(null);
    const [currentCompany, setCurrentCompany] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchName, setSearchName] = useState("");

   // const [search, setsearch] = useState(initialState)
   const retrieveCompanies=()=>{
       FirmaService.getAll().then((response)=>{
           setCompanies(response.data);
           console.log(response.data);
       }).catch((e)=>{
           console.log(e);
       })
   };
   useEffect(()=>{
       retrieveCompanies();
   },[])
   
    const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };
   

  const setActiveCompany = (company, index) => {
    setCurrentCompany(company);
    setCurrentIndex(index);
  };
    return (
        <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchName}
              onChange={onChangeSearchName}
            />
            
          </div>
        </div>
        <div className="col-md-6">
          <h4>User List</h4>
  
          <ul className="list-group">
            {companies &&
                companies.map((company, index) => (
                <li
                  className={
                    "list-group-item " + (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveCompany(company, index)}
                  key={index}
                >
                  {company.firmaIme}
                </li>
              ))}
          </ul>
  
        </div>
        <div className="col-md-6">
          {currentCompany ? (
            <div>
              <h4>Firma</h4>
              <div>
                <label>
                  <strong>Ime:</strong>
                </label>
               
                {currentCompany.firmaIme}
              </div>
              <div>
                <label>
                  <strong>Adresa:</strong>
                </label>
                {currentCompany.adresa}
              </div>
              <div>
                <label>
                  <strong>Email:</strong>
                </label>
                {currentCompany.email}
              </div>
             
  
              <Link
                to={"/firma/" + currentCompany.firmaId}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Company...</p>
            </div>
          )}
        </div>
      </div>
    );
    
}

export default CompanyList
