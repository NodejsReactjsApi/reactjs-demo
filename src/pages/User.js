import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import UserForm from '../components/UserForm';
import UserTable from '../components/UserTable';
import { apiCall } from '../apicall/apicall';
import { setUser } from '../actions/userActions';
const User = (props) => {
    useEffect(() => {
        apiCall("user/get-users").then((result) => {
          debugger;
          props.setUser(result.users);
        });
    }, []);

    useEffect(() => {
        console.log(props);
        debugger;
    }, [props.userList]);

    return (
        <>
            <UserForm />
            <UserTable />
        </>
      );
}

const mapStateToProps = (state) => ({
    userList: state.users.userList,
});

export default connect(mapStateToProps, { setUser })(User);