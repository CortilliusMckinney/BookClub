// import React from "react";
// import { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";

// const AddFavorite = () => {
// const [bookId, setBookId] = useState("");
//   const [favorite, setFavorite] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//         axios
//           .get(`http://localhost:8000/api/getOneBook/${id}`) //Make request
//           .then((res) => {
//             setBookId(res.data.poll);
    
//             console.log(res.data);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       }, []);



//       const handleFavorites = (e) => {
//         // e.preventDefault();
//         setFavorite([...favorite, bookId._id]);
//         console.log({bookId})
//         console.log({favorite})

//   };

//   return (
//     <div>
//       <button
//         onClick={handleFavorites}
//         className="addButton btn  btn-outline-primary btn-sm"
//       >
//         Add To Favorites
//       </button>
//     </div>
//   );
// };

// export default AddFavorite;
