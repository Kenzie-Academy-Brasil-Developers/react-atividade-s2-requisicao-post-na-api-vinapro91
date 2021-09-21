import "./App.css";
import Form from "./components/Form";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [formData, setFormData] = useState();
  const [logged, setLogged] = useState("");
  const [error, setError] = useState(false);

  const apiRequest = (formData) => {
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", formData)
      .then((response) => {
        setLogged(response.statusText);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };
  useEffect(() => {
    formData && apiRequest(formData);
  }, [formData]);
  console.log(logged);
  return (
    <div className="App">
      <Form setFormData={setFormData} />
      {logged === "OK" && <p>Você esta logado</p>}
      {error && <p>Nome de usuario ou senha incorretos</p>}
    </div>
  );
}

export default App;
