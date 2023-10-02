import React from 'react';
import { Table, Typography } from 'antd';

interface ChecksumTableProps {
  dataSource: {
    key: string;
    filename: string;
    checksum: string;
  }[];
  areFilesSame: boolean;
}

const App: React.FC<ChecksumTableProps> = ({ dataSource, areFilesSame }) => {

  const columns = [
    {
      title: 'Filename',
      dataIndex: 'filename',
      key: 'filename',
    },
    {
      title: 'Resultant Checksum',
      dataIndex: 'checksum',
      key: 'checksum',
    },
  ];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={false} style={{ marginBottom: '25px' }} />
      <Typography.Text strong >
        {"Are the files same? : "} {areFilesSame ? 'True' : 'False'}
      </Typography.Text>
    </div>
  );
};
export default App;

