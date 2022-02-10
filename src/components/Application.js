import { useEffect, useState } from "react";
import axios from "axios";

import NavTop from "./NavTop";
import MainPage from "./MainPage";
import MyCards from "./MyCards";
import SavedCards from "./SavedCards";
import Login from "./Login";
import Register from "./Register";


export default function Application(props) {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [page, setPage] = useState("MyCards");

  const [myCards, setMyCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  

  // const getHeader = function () {
  //   // let user = localStorage.getItem('user');
    
  //   // console.log("*****", user)
    
    
  //     // setPage("")
  //     // setPage("Login")
    
  //   // user = JSON.parse(user)
    
  //   const config = {
  //     headers: { Authorization: `Bearer ${currentUser.token}` },
  //   };
  //   // console.log("*****000000config", config)
  //   return config
  // };

  useEffect(() => {
    if (!currentUser){
      setMyCards([])
      setSavedCards([])
      return
    }
    const headers = {
      headers: { Authorization: `Bearer ${currentUser.token}` },
    };

    // console.log("herader__", headers);
    // axios.get("http://localhost:8001/api/mycards", headers)
    // .then(result => {
    //   console.log("allll++", result);
    //   setMyCards(result.data);
    // })
    
    Promise.all([
      axios.get("/api/mycards", headers),
     axios.get("/api/savedcards", headers)
    ]).then((all) => {
      //console.log("allll++", all);
      setMyCards(all[0].data);
      setSavedCards(all[1].data);
    });
  }, [currentUser]);
  

  return (
    <main>
      <nav>
        <NavTop onClick={setPage} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      </nav>
      <section>
        {page === "MainPage" && <MainPage />}
        {page === "MyCards" && myCards[0] && <MyCards myCards={myCards} />}
        {page === "SavedCards" && savedCards[0] && (
          <SavedCards savedCards={savedCards} />
        )}
        {page === "Login" && <Login setCurrentUser={setCurrentUser} setPage={setPage}/>}
        {page === "Register" && <Register setPage={setPage} setCurrentUser={setCurrentUser} />}
        
    
      </section>
    </main>
  );
}
