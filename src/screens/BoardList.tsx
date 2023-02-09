// ** React Imports
import { useState, useEffect, memo, CSSProperties } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Linking, ScrollView } from 'react-native'
import Header from '../components/Header';
import { Button, DataTable, Text } from 'react-native-paper';
import { Navigation2 } from '../types';

// type Props = {
//     navigation: Navigation2;
// }

// export type Param = {
//     boardId: 10
// }
export let data
const BoardList = ({ navigation }) => {


  const [title, setTitle] = useState('')// eslint-disable-next-line no-unused-vars
  const [writer, setWriter] = useState('')// eslint-disable-next-line no-unused-vars
  const [description, setDescription] = useState('')// eslint-disable-next-line no-unused-vars
  // const [boardId, setBoardId] = useState()// eslint-disable-next-line no-unused-vars
  // const { boardId } = useParams<{boardId?: any}>()
  const [createDate, setCreateDate] = useState('')// eslint-disable-next-line no-unused-vars
  const [updateDate, setUpdateDate] = useState('')// eslint-disable-next-line no-unused-vars
  useEffect(() => {
    axios
      .get('http://localhost:3000/boards')
      .then((res) => {
        data = res.data
        //  setBoardId(res.data.boardId)
        setTitle(res.data.title)
        setWriter(res.data.writer)
        setDescription(res.data.description)
        // console.log("data?", res.data)
      })
      .catch((Error) => {
        console.log('Error123?', Error)
      })
  }, [])
  // const goDetailBoard2 = () => {
  // const { boardId } = useParams()
  // const navigate = useNavigate()
  //   useEffect(() => {
  //     axios.get(`http://localhost:3000/boards/${boardId}`)
  //     .then((res) => {
  //       res.data
  //       alert('why don't')
  //     //   setBoardId(res.data.boardId)
  //     //   setTitle(res.data.title)
  //     //   setWriter(res.data.writer)
  //     //   setDescription(res.data.description)
  //     //   setCreateDate(res.data.createDate)
  //     //   setUpdateDate(res.data.updateDate)
  //       navigate('DetailBoard', res.data.boardId)
  //       console.log("detail?!?", res.data)
  //     }).catch((err) => {
  //         console.log("error!2", err)
  //     })
  //   }, [])
  // }
  // const goDetailBoard2 = () => {
  // navigation.navigate('DetailBoard', {data:boardId})
  // console.log("boardId넘기기", data.boardId)
  // }

  return (
    <ScrollView>
      <DataTable>
        <Header> </Header>
        <Header>                         공지사항 목록</Header>
        <DataTable.Header>
          <DataTable.Title>번호</DataTable.Title>
          <DataTable.Title>   제목</DataTable.Title>
          <DataTable.Title>   작성자</DataTable.Title>
          {/* <DataTable.Title>Description</DataTable.Title> */}
          <DataTable.Title>  생성일</DataTable.Title>

        </DataTable.Header>
        {
          data && data.length > 0 ?
            data.map((data, index): any => {
              const boardId = data.boardId
              return (

                <DataTable.Row key={index}>
                  <DataTable.Cell>{data.boardId}</DataTable.Cell>
                  <Button style={{ width: '30%' }} onPress={() =>
                    navigation.navigate('DetailBoard', { row: boardId })}>{data.title}</Button>
                  <DataTable.Cell>  {data.writer}</DataTable.Cell>
                  <DataTable.Cell>{data.createDate}</DataTable.Cell>


                  {/* <Button onPress={goDetailBoard2}>{data.title}<Text style={{opacity: 0}}>{data.boardId}</Text></Button> */}
                </DataTable.Row>

              )
            })
            :
            false
        }
      </DataTable>
    </ScrollView>

  )
  const textStyle: CSSProperties = {
    backgroundColor: "#aaaaaa"
  }

}

export default memo(BoardList)