import React, { useState, useEffect } from "react";
import UserService from "../../Services/UserService";
import axios from "axios";
const AddUser = (props) => {
  const initialUser = {
    korisnikId: null,
    ime: "",
    username: "",
    lozinka: "",
    brojTelefona: "",
    firmaNavigation: "",
    fakultetNavigation: "",
    uloga: "",
    projekt: "",
    mail: "",
    isAuthenticated: "",
  };
  // const [fax,setFax]=useState([]);
  const [firma, setFirma] = useState([]);

  const [user, setUser] = useState(initialUser);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    const fetchFirma = async () => {
      const result = await axios("https://localhost:44358/api/firma");

      setFirma(result.data);
      console.log(result.data);
    };

    fetchFirma();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name,value);
    setUser(user=>({ ...user, [name]: value }));
    console.log(user);
  };
  const saveUser = () => {
    var data = {
      ime: user.ime,
      lozinka: user.lozinka,
      username: user.username,
      brojTelefona: user.brojTelefona,
      firmaNavigation: user.firmaIme,
      fakultetNavigation:"",
      uloga: user.uloga,
      projekt: user.projekt,
      mail: user.mail,
      isAuthenticated: user.isAuthenticated,
    };
    console.log(data)
    UserService.create(data)
      .then((response) => {
        setUser({
          id: response.data.id,
          ime: response.data.ime,
          email: response.data.email,
          lozinka: response.data.lozinka,
          username: response.data.username,
          brojTelefona: response.data.brojTelefona,
          firmaNavigation: response.data.firmaNavigation,
          fakultetNavigation: response.data.fakultetIme,
          uloga: response.data.uloga,
          projekt: response.data.projekt,
          mail: response.data.mail,
          isAuthenticated: response.data.isAuthenticated,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const newUser = () => {
    setUser(initialUser);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newUser}>
            Dodaj
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="ime">Ime</label>
            <input
              type="text"
              className="form-control"
              id="ime"
              required
              value={user.ime}
              onChange={handleInputChange}
              name="ime"
            />
          </div>

          <div className="form-group">
            <label htmlFor="username">Korisnicko ime</label>
            <input
              type="text"
              className="form-control"
              id="username"
              required
              value={user.username}
              onChange={handleInputChange}
              name="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Lozinka</label>
            <input
              type="text"
              className="form-control"
              id="password"
              required
              value={user.lozinka}
              onChange={handleInputChange}
              name="lozinka"
            />
          </div>
          <div className="form-group">
            <label htmlFor="brojTelefona">Broj Telefona</label>
            <input
              type="text"
              className="form-control"
              id="brojTelefona"
              required
              value={user.brojTelefona}
              onChange={handleInputChange}
              name="brojTelefona"
            />
          </div>
          <div className="form-control">
            <select  onChange={handleInputChange} name="firmaNavigation" value={user.firmaIme}>
              {firma.map((firma) => (
                <option key={firma.firmaId} onChange={handleInputChange} >
                  {firma.firmaIme}
                </option>
              ))}
            </select>
          </div>

          <button onClick={saveUser} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddUser;
