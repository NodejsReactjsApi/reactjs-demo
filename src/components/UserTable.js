import { Table } from "antd";
import { useState } from "react";

const UserTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState({
        pagination: {
          current: 1,
          pageSize: 10,
        },
    });

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
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
            rowKey={(record) => record.login.uuid}
            dataSource={data}
            pagination={tableParams.pagination}
            loading={loading}
            onChange={handleTableChange}
        />
    )
}

export default UserTable;