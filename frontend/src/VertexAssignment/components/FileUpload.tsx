import React,  { useState } from 'react';
import { Space, Upload, Button, message } from 'antd';
import { UploadOutlined, CloseOutlined } from '@ant-design/icons';
import ChecksumTable from './ChecksumTable';
//import { IP } from '../../../utils/api-ip'; //Additional
import axios from 'axios';

const App: React.FC = () => {
  const backendURL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:80'; //OLD IP
  //const contactUrl = `${IP}/checksum-routetapi`; //NEW IP //i.e const ldaUrl = `${IP}/tm-routetoapi`;
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [apiResponse, setApiResponse] = useState<any | null>(null);
  const [fileList, setFileList] = useState([]);
  const handleClearFiles = () => {
    setFileList([]); // Clear the fileList
    setApiResponse(null);
    message.success('Files cleared successfully!');
  };
  
  const handleBeforeUpload = async (file: any, fileList: any[]) => {
    
    if (fileList.length !== 2) {
      message.error('Please select exactly 2 files.');
      return false;
    } else{
      setUploadedFiles([fileList[0].name, fileList[1].name]);
    }

    //Slightly altered to fit the backend framework
    const checksumVarsDict = {
      type: 'upload',
    };

    const formData = new FormData();
    formData.append('file1', fileList[0]);
    formData.append('file2', fileList[1]);
    formData.append('type', checksumVarsDict.type);
    try {
      const res = await axios.post(`${backendURL}`, formData); //Old URL was `${backendURL}/checksum`
      if (res.data) {
        setApiResponse(res.data);
      }
    } catch (error) {
      message.error('There was an error uploading the files.');
    }
    return false; //Prevent antd auto-uploading
  };

  const mappedData = apiResponse ? [
    {
      key: '1',
      filename: uploadedFiles[0],//Need to change to get fileName
      checksum: apiResponse.checksum1,
    },
    {
      key: '2',
      filename: uploadedFiles[1], //Need to change to get fileName
      checksum: apiResponse.checksum2,
    },
  ] : [];


  return (
    <Space direction="vertical" style={{alignItems: 'center', justifyContent: 'center', marginLeft: '60px', width: '50%' }} size="large">
      <Upload
        listType="picture"
        maxCount={2}
        multiple
        beforeUpload={handleBeforeUpload}
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        fileList={fileList}
      >
        <Button icon={<UploadOutlined />}>Upload (Max: 2)</Button>
        
      </Upload>
      {apiResponse && <ChecksumTable dataSource={mappedData} areFilesSame={apiResponse.are_files_identical} />}
      <Button 
        icon={<CloseOutlined />}
        onClick={handleClearFiles}
        //onChange={({ fileList }) => setFileList(fileList)}
        >Clear all files</Button>
    </Space>
  );
}

export default App;