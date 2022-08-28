import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 90,
  },
  {
    field: 'childName',
    headerName: 'Child name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'mail',
    headerName: 'Mail',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: 'Doron', firstName: 'Malka', phone: '0542862155', childName:"Mezaleck Malka", mail:"doronM@prnt.com" },
  { id: 2, lastName: 'Melchides', firstName: 'Balance', phone: '0135845622', childName:"Afrodita balance", mail:"Melchides@prnt.com" },
  { id: 3, lastName: 'Ploto', firstName: 'Rubi', phone: '0552427962', childName:"Mercori Rubi", mail:"Ploto@prnt.com" },
  { id: 4, lastName: 'Malicka', firstName: 'Barnny Doson', phone: '0235668556', childName:"Shon Doson", mail:"Malicka@prnt.com" },
  { id: 5, lastName: 'Hospetta', firstName: 'Sanches', phone: '0854624320', childName:"Gabriela Sanches", mail:"Hospetta@prnt.com" },
  { id: 6, lastName: 'Efrat', firstName: 'Bat Sher', phone: '0458857875', childName:"Fiona Bat Sher", mail:"Efrat@prnt.com" },
  { id: 7, lastName: 'Dennis', firstName: 'Ermias', phone: '0223251223', childName:"Ilon Ermias", mail:"Dennis@prnt.com" },
  { id: 8, lastName: 'Vered', firstName: 'Shevet', phone: '0534622215', childName:"Dochipat Shevet", mail:"Vered@prnt.com" },
  { id: 9, lastName: 'Abu Whkif', firstName: 'Lebanon', phone: '0985476639', childName:"Carolina Lebanon", mail:"Whkif@prnt.com" },
  { id: 10, lastName: 'Don', firstName: 'Almon', phone: '0553265248', childName:"Gever Almon", mail:"Don@prnt.com" },
];

// export default function ParentsCommittee() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//   );
// }
