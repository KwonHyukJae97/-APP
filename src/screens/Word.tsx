// ** React Imports
import { memo, useEffect, useState } from 'react'
import { ScrollView, View, Text } from 'react-native'
import TextInput from '../components/TextInput'
import axios from 'axios'
import { DataTable, Button } from 'react-native-paper';
import Header from '../components/Header';
//69A8636001EB31E1876B2C1C18A39132 단어사전 인증키 백엔드
    //E37A81B0804C8EFCF2F51337240D58EE 프론트엔드 한국어 기초사전
    //1D018F9B751E4497EFE76A7911596B69 우리말샘 
let data : any []
const Word = () => {

    const [title, setTitle] = useState('')
    const [word, setWord] = useState('')
    const [sense, setSense] = useState('')
    const [pronunciation_info, setPronunciation_info] = useState('')
    const [example, setExample] = useState('')
    const [description, setDescription] = useState('')
    const [example_info, setExample_info] = useState('')
    const [definition, setDefinition] = useState('')
    const [channel, setChannel] = useState('')
    const [senseInfo, setSenseInfo] = useState('')
    const [lastBuildDate, setLastBuildDate] = useState('')
    const [total, setTotal] = useState('')
    const [start, setStart] = useState('')
    const [num, setNum] = useState('')
    const [item, setItem] = useState('')
    const [data, setData] = useState('')
   
    const [sense_no, setSense_no] = useState('')
    const [target_code, setTarget_code] = useState('')
    const [type, setType] = useState('')
    const [wordInfo, setWordInfo] = useState('')

    
    useEffect(() => {
        axios.get('https://opendict.korean.go.kr/api/view', {
            params: {
                q: '100067',
                key: '1D018F9B751E4497EFE76A7911596B69',
                req_type: 'json',
                method: 'word_info'
            },
        })
        .then((res) => {
            setTitle(res.data.channel.title) //json데이터 경로대로 기입
            setDescription(res.data.description)
            setPronunciation_info(res.data.channel.item.wordInfo.pronunciation_info)
            setSense(res.data.sence)
            setSenseInfo(res.data.channel.item.senseInfo.example_info)
            setDefinition(res.data.channel.item.senseInfo.definition)
            setTarget_code(res.data.target_code)
            // setExample(res.data.channel.item.senseInfo.example_info.example)
            setWord(res.data.channel.item.wordInfo.word)
            setExample_info(res.data.channel.item.senseInfo.example_info)
            setData(res.data.channel.item.senseInfo.example_info)
            console.log('단어', res.data.channel.item.wordInfo.word)
            console.log('발음', res.data.channel.item.wordInfo.pronunciation_info)
            console.log('예시', res.data.channel.item.senseInfo.example_info.example)
            console.log('예시2', res.data.channel.item.senseInfo.example_info)
            console.log('뜻', res.data.channel.item.senseInfo.definition)
        }).catch((error) => {
            console.log('단어사전에러', error)
        })     
    }, [])

    //chnnel.item이 있음과 없음을 구분해서 조건문 수정, 속도: submit버튼으로 할수있는지 시도 , 예시 배열 출력하기
        const onchange = (value) => {
            console.log(value)
            value && axios.get('https://opendict.korean.go.kr/api/view', {
                params: {
                    q: value,
                    key: '1D018F9B751E4497EFE76A7911596B69',
                    req_type: 'json',
                    method: 'word_info'
                },
            })
            .then((res) => {
                if (res.data.channel){
                    setPronunciation_info(res.data.channel.item.wordInfo.pronunciation_info)
                    setWord(res.data.channel.item.wordInfo.word)
                    setDefinition(res.data.channel.item.senseInfo.definition)
                }else{
                    console.log("없음")
                }
            })
            .catch((err) => {
                console.log("worderror", err)
            })
        }
        
    
  return (
<ScrollView>
    <Header>   </Header>
    <Header>                  한국어 기초단어 사전</Header>
    <DataTable.Header>
    </DataTable.Header>
    <TextInput onChangeText={onchange} placeholder='단어를 입력하세요.' />
    <DataTable.Row>
        <DataTable.Cell>단어 : {word}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
        <DataTable.Cell>뜻  : {definition}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
        <DataTable.Cell>발음 : {pronunciation_info}</DataTable.Cell>
    </DataTable.Row>
    {/* <DataTable.Row>
        <DataTable.Cell>예시 : {example}</DataTable.Cell>
    </DataTable.Row> */}
    {/* <DataTable.Row>
        <DataTable.Cell>예시2 : {example_info}</DataTable.Cell>
    </DataTable.Row>
     */}
    
     
    {/* <TextInput
    value={title}
    onChangeText={onchange} /> */}
    {/* {
        data1 && data1.length > 0 ?
            data1.map((v, i): any => {
                return (
                <DataTable.Row key={i}>
                <DataTable.Cell>asdas</DataTable.Cell>
                <DataTable.Cell>{v.title}</DataTable.Cell>
                <DataTable.Cell>{v.item}</DataTable.Cell>
                <DataTable.Cell>{v.target_code}</DataTable.Cell>
                <DataTable.Cell>{v.example}</DataTable.Cell>
                <DataTable.Cell>{v.word}</DataTable.Cell>
                <DataTable.Cell>{v.sup_no}</DataTable.Cell>
                <DataTable.Cell>{v.pronunciation}</DataTable.Cell>
                <DataTable.Cell>{v.pos}</DataTable.Cell>
                <DataTable.Cell>{v.link}</DataTable.Cell>
                <DataTable.Cell>{v.sence}</DataTable.Cell>
                <DataTable.Cell>{v.sence_order}</DataTable.Cell>
                <DataTable.Cell>{v.definition}</DataTable.Cell>
            </DataTable.Row>
           
           )
                    })
                    :
                    false
            } */}
</ScrollView>

  )

}

export default memo(Word)