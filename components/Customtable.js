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
        name: <h2>Picture</h2>, 
        selector : row => <img src={row.flag} width={50} height={50}/>
        },
      {
        name: <h2>Project Name</h2>, 
        selector: row => row.name
      }, 
      { 
        name  : <h2>Dowload</h2>, 
        selector : row => row.capital
      }, 
    ]
    useEffect(() => { 
      getCountries(); 
    },[])
    return(
        <div>  
          <DataTable columns={columns} data={countries} />
        </div>
    )
}

export default CustomTable