// project-imports
// import GuestGuard from 'utils/route-guard/GuestGuard';
// import Login from 'views/authentication/Login';

// // ==============================|| HOME PAGE ||============================== //

// export default function HomePage() {
//   return (
//     <GuestGuard>
//       <Login />
//     </GuestGuard>
//   );
// }

import Home from 'views/HomePage';

// ==============================|| HOME PAGE ||============================== //
// import axios from 'utils/axios';

//  async function getData() {
//   debugger
//   try {
//     axios({
//       method: 'get',
//       url: 'api/search/top_searches',
//       headers: { 'Content-Type': 'multipart/form-data' }
//     })
//       .then((response) => {
//         debugger
//         const data = response;

//         return {
//           props: {
//             data,
//           },
//         };
//       })
   
//   } catch (error) {
//     console.error('SSR fetch failed:', error);

//     return {
//       props: {
//         data: null,
//       },
//     };
//   }
// }
// async function topSearches() {
//   const response: any = await axios.get('api/search/top_searches'); // This is SSR: runs on server before render
//   if(response?.status == 'pass'){
//     return response.data;
//   }else{
//     return response.data;
//   }
// }
// async function allStates() {
//   const response: any = await axios.get('api/search/all_states'); // This is SSR: runs on server before render
//   if(response?.status == 'pass'){
//     return response.data;
//   }else{
//     return response.data;
//   }
// }
export default async  function HomePage() {
  // const _topSearches = await topSearches();
  // const _allStates = await allStates();
  // console.log(data)
  return (
      <Home />
  );
}