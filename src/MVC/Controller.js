// import React, { useState, useEffect } from "react";
// import View from "./View";
// import axios from "axios";

// const URL = "https://jsonplaceholder.typicode.com/posts";

// const Controller = () => {
//   const [lista, setLista] = useState([]);

//   const [value, setValue] = useState("");

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     return await axios
//     .get(`https://jsonplaceholder.typicode.com/posts?q=${Lista.value}`)
//     .then((res) => {
//       setLista(res.data);
//       setValue("");
//     })
//     .catch((err) => console.log(err));
// };

//   useEffect(() => {
//     axios.get(URL).then((res) => {
//       setLista(res.data);
//     });
//   }, []);

//   return (
//     <div>
//       {this.lista && <View data={this.lista} />}
//     </div>
//   );
// };

// export default Controller;
