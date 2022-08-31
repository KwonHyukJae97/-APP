import React, { useState, memo, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { DataTable } from 'react-native-paper';
import axios from 'axios'
import Header from '../components/Header';
import { Navigation2 } from '../types';
import { ScrollView, Text} from 'react-native';
// type Props = {
//     navigation: Navigation2;
// }

let data : any []
const DetailBoard = ({ navigation, route }) => {
    // route.params.row

    //BoardList에서 navigation을 통해 parameter(boardId)값을 넘겨주어서 getParam함수로 받아옴. key값은 row.
    const boardId = navigation.getParam('row')

    console.log('boardId', navigation.getParam('row'))
    // const navigate = useNavigate()
  // ** States

  const [title, setTitle] = useState(''),
    [description, setDescription] = useState(''),
    // [boardDescription, setBoardDescription] = useState(''),
    [createDate, setCreateDate] = useState(''),// eslint-disable-next-line no-unused-vars
    [updateDate, setUpdateDate] = useState(''),// eslint-disable-next-line no-unused-vars
    [writer, setWriter] = useState('')
    // [data, setData] = useState(null)
    // const { boardId } = navigation.getParam('row')
  console.log("data123", boardId)

  useEffect(() => {
    axios.get(`http://localhost:3000/boards/${boardId}`).then((res) => {
    //   setData(res.data)
      setTitle(res.data.title)
      setWriter(res.data.writer)
      setDescription(res.data.description)
      setCreateDate(res.data.createDate)
      setUpdateDate(res.data.updateDate)
      console.log("title", res.data.title)
      console.log("desc", res.data.description)
      console.log("credateD", res.data.createDate)
      console.log("updateD", res.data.updateDate)
      console.log("writer", res.data.writer)
    }).catch((error) => {
        console.log("에러입니다~", error)
    })
  }, [])


return(
    <ScrollView>
    <DataTable>
        <Header> </Header>
        <Header>                          상세 페이지</Header>
        {/* <DataTable.Header>
            <DataTable.Title>Title</DataTable.Title>
            <DataTable.Title>Writer</DataTable.Title>
            <DataTable.Title>createDate</DataTable.Title>
            <DataTable.Title>updateDate</DataTable.Title>
            <DataTable.Title>Description</DataTable.Title>
        </DataTable.Header> */}

        <DataTable.Row>
            <DataTable.Cell>  제  목     :   {title}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>    
            <DataTable.Cell>  작 성 자  :   {writer}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
            <DataTable.Cell>  생 성 일  :   {createDate}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
            <DataTable.Cell>  수 정 일  :   {updateDate}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
             <DataTable.Cell>  내  용     :   {description}</DataTable.Cell>
        </DataTable.Row>
            {/* {
                data && data.length > 0 ?
                    data.map((data, index): any => {
                        return (
                            <DataTable.Row key={index}>
                                <DataTable.Cell>{data.title}</DataTable.Cell>
                                <DataTable.Cell>{data.writer}</DataTable.Cell>
                                <DataTable.Cell>{data.description}</DataTable.Cell>
                                <DataTable.Cell>{data.createDate}</DataTable.Cell>
                                <DataTable.Cell>{data.updateDate}</DataTable.Cell>
                            </DataTable.Row>
                        )
                    })
                    :
                    false
            } */}
        </DataTable>
        </ScrollView>
    
    
)
};

export default memo(DetailBoard);