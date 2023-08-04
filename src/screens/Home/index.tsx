import React from 'react';
import {useState} from 'react';
import {Container, InfoPercentual, Icon, Name, Title, SubTitle, ContainerFlatList} from './styles';
import { HeaderWithIcon } from '@components/HeaderWithIcon';
import { FlatList, TouchableOpacity } from 'react-native';
import { Button } from '@components/Button';
import { FoodCard } from '@components/FoodCard';

type Props = {
  name: string; 
}

export function Home({ name }: Props) {
  const [groups, setGroups] = useState<string[]>([]);
  
  const handleFoodSelected = (item: string) => {
    console.log(item);
  }

  return (
    <Container>
      <HeaderWithIcon />

      <TouchableOpacity>
        <InfoPercentual>
            <Title>90,86%</Title>
            <SubTitle>das refeições dentro da dieta</SubTitle>
        </InfoPercentual>
        </TouchableOpacity>

        <SubTitle>Refeições</SubTitle>
        <Button title='+ Nova Refeição'/>

        <ContainerFlatList>
          <Title>12.08.22</Title>
        <FoodCard 
            hour="20:00 | "
            description="X-Burguer"
            onPress={() => handleFoodSelected('')}       
          />
          </ContainerFlatList>

        {/* <ContainerFlatList>
          <Title>12.08.22</Title>
          <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => 
          <FoodCard 
            title={item} 
            onPress={() => handleFoodSelected(item)}
          
          />}
        />
        </ContainerFlatList> */}
    </Container>
  );
}

