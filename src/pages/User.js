import React, { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';
import UserTable from '../components/UserTable';
import { apiCall } from '../apicall/apicall';
const User = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        apiCall("user/get-users").then((result) => {
          debugger;
          setData(result);
        });
    }, []);

    return (
        <>
            <UserForm />
            <UserTable />
        </>
      );
}

export default User;