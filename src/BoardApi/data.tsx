// // ** Third Party Components
// import axios from 'axios'
// import { MoreVertical, Edit, FileText, Trash } from 'react-feather'
// import { Link } from 'react-router-dom'

// export let data

// // ** Get initial Data
// axios
//   .get('http://localhost:3000/boards')
//   .then((res) => {
//     data = res.data
//     console.log("data", data)
//   })
//   .catch((Error) => {
//     console.log('Error', Error)
//   })
// // ** Table Common Column
// export const BoardColumns = [
//   {
//     name: 'NO',
//     reorder: true,
//     sortable: true,
//     maxWidth: '100px',
//     selector: (row) => row.boardId
//   },
//   {
//     name: 'Writer',
//     reorder: true,
//     sortable: true,
//     minWidth: '100px',
//     selector: (row) => row.writer
//   },
//   {
//     name: 'Title',
//     reorder: true,
//     sortable: true,
//     minWidth: '325px',
//     selector: (row) => row.title,
//     cell: (row) => {
//       return (
//         <div className="d-flex">
//           <Link to={`/editBoard/${row.boardId}`}>
//             <span>{row.title}</span>

//           </Link>
//         </div>
//       )
//     }
//   },
//   {
//     name: 'CreateDate',
//     reorder: true,
//     sortable: true,
//     minWidth: '250px',
//     selector: (row) => row.createDate
//   },

//   {
//     name: 'Actions',
//     allowOverflow: true,
//     cell: (row) => {
//       return (
//         <div className="d-flex">
//           테스트
//         </div>
//       )
//     }
//   }
// ]

// export default BoardColumns