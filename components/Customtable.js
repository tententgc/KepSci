import React, { useEffect , useState } from 'react'

import axios from 'axios'
import DataTable from 'react-data-table-component'

const CustomTable = () =>{ 
    const [countries, setCountries] = useState([]);

    const getCountries = async () => {
        const response = await axios.get('https://restcountries.com/v2/all');
        setCountries(response.data);
    }

    const columns = [ 
      {
        name: <h2>Profile</h2>, 
        id : "name",
        selector : row => <img src={row.flag} width={50} height={50}/>,
        },
      {
        name: <h2>Project Name</h2>, 
        id : "projectName", 
        selector: row => <a href="https://www.google.com/">{row.name}</a>,
      }, 
      { 
        name: <h2>Download</h2>, 
        id : "download", 
        selector : row => row.capital
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

