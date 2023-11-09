import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import UserForm from '../components/UserForm';
import UserTable from '../components/UserTable';
import { setUser } from '../actions/userActions';
import { io } from 'socket.io-client';
const User = (props) => {
    const API_URL = process.env.REACT_APP_API_URL;

    const connectWebSocket = () => {
        const socket = io(API_URL);
      
        socket.on('connect', () => {
          console.log('WebSocket bağlantısı açıldı');
        });
      
        socket.on('message', (data) => {
          console.log('WebSocket mesajı alındı:', data);
        });
      
        socket.on('response', (data) => {
          console.log('İstemciden alınan yanıt:', data);
        });

        socket.on('collectionData', (data) => {
            console.log('Kullanıcı listesi canlı:', data);
          });
      
        socket.on('realtimeData', (data) => {
        
          console.log('Gerçek zamanlı veri alındı:', data);
        });

        socket.on('userList', (data) => {
          props.setUser(data);
          console.log('kullanıcı listesi', data);
        });
      
        socket.on('disconnect', () => {
          console.log('WebSocket bağlantısı kapatıldı');
        });
      
        return socket;
      };
      
      useEffect(() => {
        const socket = connectWebSocket();
      
        return () => {
          socket.close();
        };
      }, []);

    useEffect(() => {
        console.log(props);
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