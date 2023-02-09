// ** React Imports
import { memo, useState } from 'react'
import { ScrollView } from 'react-native'
import TextInput from '../components/TextInput'
import axios from 'axios'
import { DataTable } from 'react-native-paper'
import Header from '../components/Header'
//69A8636001EB31E1876B2C1C18A39132 단어사전 인증키 백엔드
//E37A81B0804C8EFCF2F51337240D58EE 프론트엔드 한국어 기초사전
//1D018F9B751E4497EFE76A7911596B69 우리말샘 
let data: any[]
const Word = () => {

    const [word, setWord] = useState('')
    const [pronunciation_info, setPronunciation_info] = useState('')
    const [example, setExample] = useState([])
    // const [example_info, setExample_info] = useState([])
    const [definition, setDefinition] = useState('')

    const onchange = (value) => {

        if (value && value.length > 1) {
            apiSearch(value)
        }
        
    }

    const apiSearch = (word: string) => {
        axios.get('https://opendict.korean.go.kr/api/search', {
            params: {
                q: word,
                key: '1D018F9B751E4497EFE76A7911596B69',
                req_type: 'json'
            }
        })
            .then((res) => {

                // console.log(res.data)
                const item = res.data.channel.item
                let sense = null
                if (item && item.length > 0) {
                    sense = item[0].sense
                }

                console.log('sense : ', sense)

                //sense밑에 target_code가 아니라, item밑에 target_code가 있음.
                let target_code = null
                if (item && item.length > 0) {
                    target_code = item[0].target_code
                }

                console.log('target_code: ' + target_code)

                if (target_code && target_code.length > 0) {
                    apiView(target_code)
                }
            })
            .catch((err) => {
                console.log("worderror111", err)
            })
    }

    const apiView = (target_code: string) => {

        axios.get('https://opendict.korean.go.kr/api/view', {
            params: {
                q: target_code,
                key: '1D018F9B751E4497EFE76A7911596B69',
                req_type: 'json',
                method: 'target_code'
            }
        })
            .then((res) => {
                console.log("단어입력!", word)
                if (target_code && target_code.length > 0) {
                    setPronunciation_info(res.data.channel.item.wordInfo.pronunciation_info)
                    setWord(res.data.channel.item.wordInfo.word)
                    setDefinition(res.data.channel.item.senseInfo.definition)
                    setExample(res.data.channel.item.senseInfo.example_info)
                    console.log("첫번째", setPronunciation_info)
                    console.log("두번쨰", setWord)
                    console.log("세번째", setDefinition)
                    console.log("네번째", setExample)
                }
            })
            .catch((err) => {
                console.log("우리말샘 시스템 에러입니다.", err)
            })
    }

    return (
        <ScrollView>
            <Header>   </Header>
            <Header>         클라이교육 우리말샘 단어사전</Header>
            <DataTable.Header>
            </DataTable.Header>

            <DataTable.Row>
                <TextInput onChangeText={onchange} placeholder='단어를 입력하세요.'></TextInput>
            </DataTable.Row>
            <DataTable.Row>
                <TextInput editable={false} style={{ flexShrink: 1 }} multiline={true}>단어 : {word}</TextInput>
            </DataTable.Row>
            <DataTable.Row>
                <TextInput editable={false} style={{ flexShrink: 1 }} multiline={true}>뜻  : {definition}</TextInput>
            </DataTable.Row>
            <DataTable.Row>
                <TextInput editable={false} style={{ flexShrink: 1 }} multiline={true}>발음 : {pronunciation_info}</TextInput>
            </DataTable.Row>
            <DataTable.Row>
            {
                example && example.length > 0 ?
                    example.map((data, index): any => {
                        return (

                            <DataTable.Row key={index}>

                                <TextInput editable={false} style={{ flexShrink: 1 }} multiline={true}>예시 {index + 1} : {data.example}</TextInput>
                            </DataTable.Row>
                        )
                    })
                    :
                    false
            }
            </DataTable.Row>
        </ScrollView>
    )
}


//발표 단어 목걸이, 구름, 발표 
export default memo(Word)