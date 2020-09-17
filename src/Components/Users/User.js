import React, { useState, useEffect } from "react";
import UserService from "../../Services/UserService";
import axios from 'axios';

const User = (props) => {
  const initialUser = {
    ime: "",
    username: "",
    lozinka: "",
    brojTelefona: null,
    firma: null,
    fakultet: null,
    uloga: null,
    projekt: null,
    mail: "",
    isAuthenticated: null,
  };

  const [currentUser, setCurrentUser] = useState(initialUser);
  const [message, setMessage] = useState("");
  const [firma, setFirma] = useState([]);

  const getUser = (id) => {
    UserService.get(id)
      .then((response) => {
        setCurrentUser(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const fetchFirma = async () => {
    const result = await axios("https://localhost:44358/api/firma");

    setFirma(result.data);
    console.log(result.data);
  };
  useEffect(() => {
    getUser(props.match.params.id);
  }, [props.match.params.id]);


  const handleInputChange = (event) => {
    const { ime, value } = event.target;
    setCurrentUser({ ...currentUser, [ime]: value });
    fetchFirma();
  };

  const updateUser = () => {
    UserService.update(currentUser.korisnikId, currentUser)
      .then((response) => {
        console.log(response.data);
        setMessage("Korisnik je uspješno ažuriran!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteUser = () => {
    UserService.remove(currentUser.korisnikId)
      .then((response) => {
        console.log(response.data);
        props.history.push("/korisnici");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentUser ? (
        <div className="edit-form">
          <h4>User</h4>
          <form>
            <div className="form-group">
              <label>Ime</label>
              <input
                type="text"
                className="form-control"
                id="ime"
                name="ime"
                value={currentUser.ime}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Korisničko ime</label>
              <input
                type="text"
                className="form-control"
                id="korisnickoIme"
                name="korisnickoIme"
                value={currentUser.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Lozinka</label>
              <input
                type="text"
                className="form-control"
                id="lozinka"
                name="lozinka"
                value={currentUser.lozinka}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label> Broj telefona</label>
              <input
                type="text"
                className="form-control"
                id="korisnickoIme"
                name="korisnickoIme"
                value={currentUser.brojTelefona}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Firma</label>
              <select
                onChange={handleInputChange}
                name="firmaNavigation"
                value={currentUser.firmaIme}
              >
                {firma.map((firma) => (
                  <option key={firma.firmaId} onChange={handleInputChange}>
                    {firma.firmaIme}
                  </option>
                ))}
              </select>
            </div>
          </form>
          <button className="badge badge-danger mr-2" onClick={deleteUser}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateUser}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Molim vas izaberite korisnika...</p>
        </div>
      )}
    </div>
  );
};

export default User;
