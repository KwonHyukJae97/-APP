import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';

export let data

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>KlaiEdu</Header>
    <Paragraph>
      Welcome to KlaiEdu!
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('BoardList')}>
      공지사항
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate('Word')}>
      단어사전
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      로그아웃
    </Button>
  </Background>
);

export default memo(Dashboard);
