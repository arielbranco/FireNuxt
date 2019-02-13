// This is `@middleware/router-auth.js` for firebase

// export default function({ store, redirect, route }) {
//     if (!process.server) {
//      localStorage.getItem("lastname") != null && route.name == 'login' ? redirect('/admin') : ''
//      localStorage.getItem("lastname") == null && isAdminRoute(route) ? redirect('/login') : ''
//      console.log(localStorage.getItem("lastname"));
//     }
// }
  
//   function isAdminRoute(route) {
//     if (route.matched.some(record => record.path == '/admin')) {
//       return true
//     }
//   }