import { Table } from "antd";
import { connect } from 'react-redux';

const UserTable = (props) => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'username',
            width: '20%',
          },
          {
            title: 'Email',
            dataIndex: 'email',
          }
    ];

    const handleTableChange = () => {}
    
    return (
        <Table 
            columns={columns}
            rowKey={(record) => record._id}
            dataSource={props.userList}
            onChange={handleTableChange}
        />
    )
}

const mapStateToProps = (state) => ({
  userList: state.users.userList,
});

export default connect(mapStateToProps)(UserTable);