import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';


type Props = {
  navigation: Navigation;
};

const Test = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>테스트 페이지</Header>
    <Paragraph>
      Test Page.
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('Test')}>
      Test
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Home
    </Button>
  </Background>
);

export default memo(Test);
