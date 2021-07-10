// // import React, { useState } from 'react';

// // // export function validate(input) {
// // //     let image = `https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)`
// // //     let errors = {};
// // //     if (!input.name) {
// // //         errors.username = 'Name is required';
// // //     }
// // //     if (!input.img) {
// // //         errors.password = 'Image is required';
// // //     }
// // //     else if (image.test(input.img)) {
// // //         errors.password = 'Password is invalid';
// // //     }
// // //     if (!input.description) {
// // //         errors.password = 'Password is required';
// // //     }
// // //     else if (!/(?=.*[0-9])/.test(input.password)) {
// // //         errors.password = 'Password is invalid';
// // //     }
// // //     return errors;
// // // };

// export default function Form() {
//     const [errors, setErrors] = useState({});
//     //Escalable:
//     const [input, setInput] = useState({
//         name: '',
//         description: '',
//         img: '',
//         releaseDate: '',
//         rating: '',
//         platforms: [],
//         genres: []
//     });
//     const handleInputChange = function (e) {
//         setInput({
//             ...input,
//             [e.target.name]: e.target.value
//         });
//         setErrors(validate({
//             ...input,
//             [e.target.name]: e.target.value
//         }));
//     }
//     // Aqui no es escalable:
//     // const [username, setUsername] = React.useState('')
//     // const [password, setPassword] = React.useState('')
//     return (
//         <form>
//             {/* <form onSubmit={handleSubmit}> */}
//             < div >
//                 <label>Username:</label>
//                 {/* <input key='username' type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username} /> */}
//                 <input className={errors.username && 'danger'} key='username' type="text" name="username" onChange={handleInputChange} value={input.username} />
//                 {errors.username && (
//                     <p className="danger">{errors.username}</p>
//                 )}
//             </div >
//             <div>
//                 <label>Password:</label>
//                 {/* <input key='password' type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} /> */}
//                 <input key='password' type="password" name="password" onChange={handleInputChange} value={input.password} />
//                 <br />
//                 <button name='submit' type='submit'> Submit!</button>
//             </div>
//         </form >
//     )
// }

