import React,  { useState } from 'react';
import { Space, Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ChecksumTable from './ChecksumTable';
import axios from 'axios';

const App: React.FC = () => {
  
  const [apiResponse, setApiResponse] = useState<any | null>(null);
  const handleBeforeUpload = async (file: any, fileList: any[]) => {
    if (fileList.length !== 2) {
      message.error('Please select exactly 2 files.');
      return false;
    }

    const formData = new FormData();
    formData.append('file1', fileList[0]);
    formData.append('file2', fileList[1]);

    try {
      const res = await axios.post('http://127.0.0.1:5000/checksum', formData);
      if (res.data) {
        setApiResponse(res.data);
      }
    } catch (error) {
      message.error('There was an error uploading the files.');
    }

    // Return false to prevent AntD from auto-uploading
    return false;
  };

  const mappedData = apiResponse ? [
    {
      key: '1',
      filename: 'Filename1',
      checksum: apiResponse.checksum1,
    },
    {
      key: '2',
      filename: 'Filename2',
      checksum: apiResponse.checksum2,
    },
  ] : [];


  return (
    <Space direction="vertical" style={{alignItems: 'center', justifyContent: 'center', marginLeft: '100px', width: '50%' }} size="large">
      <Upload
        listType="picture"
        maxCount={2}
        multiple
        beforeUpload={handleBeforeUpload}
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
      >
        <Button icon={<UploadOutlined />}>Upload (Max: 2)</Button>
      </Upload>
      {apiResponse && <ChecksumTable dataSource={mappedData} areFilesSame={apiResponse.are_files_identical} />}
    </Space>
  );
}

export default App;