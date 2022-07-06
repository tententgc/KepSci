import React, { useEffect , useState } from 'react'

import sortIcon from '@mui/icons-material/ArrowDownward';
import axios from 'axios'
// import DataTable from 'react-data-table-component'
import DataTable from 'react-data-table-component-with-filter'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
// import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';


const useStyles = makeStyles({ 
  btn:{ 
    backgroundColor: '#00bcd4',
    fontSize: '1.5rem',
  }
})
const CustomTable = () =>{ 
    const [countries, setCountries] = useState([]);

    const getCountries = async () => {
        const response = await axios.get('https://restcountries.com/v2/all');
        setCountries(response.data);
    }

    const columns = [ 
      // {
      //   name: <h2>Profile</h2>, 
      //   id : "name",
      //   selector : row => <img src={row.flag} width={50} height={50}/>,
      //   },


      {
        name: <h2>Project Name</h2>, 
        id : "projectName", 
        selector: row => <a href="https://www.google.com/">{row.name}</a>,
        grow:1,
        filterable: true
      }, 
      {
        name: <h2>Tags</h2>,
        id: "tag",
        selector: row => <div>{row.date}</div>,
      },
      { 
        name: <h2>Description</h2>,
        id : "download", 
        selector: row => 
        <Button
          size="small"
          color="primary"
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          Download
        </Button>
      }, 
    ]

    useEffect(() => { 
      getCountries(); 
    },[])

    return(
        <DataTable 
        columns={columns} 
        data={countries} 
        pagination
        fixedHeader
        // title="Project List" 
        />
    )
}
export default CustomTable

