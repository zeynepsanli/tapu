import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import useFetch from '../../hooks/useFetch/useFetch';
import PriceCard from '../../components/PriceCard/PriceCard';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Container, List, Center, ActivityIndicator, Header, Text } from './MainPageStyle';

const MainPage = () => {

  const idList = useSelector(selector => selector.basket);
  const dispatch = useDispatch()

  const { error, loading, data } = useFetch("https://61ec6926f3011500174d2178.mockapi.io/tapu/products")

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" color="#00ff00" />
      </Center>
    )
  }

  if (error) {
    return (
      <Center>
        <Header>Oops!</Header>
        <Text>There's an error</Text>
      </Center>
    )
  };

  function handlePress(item) {
    const id = item.id;
    const price = item.price;
    if (idList.includes(id)) {
      dispatch({ type: "REMOVE_BASKET", payload: { basket: id } })
      dispatch({ type: "REMOVE_PRICE", payload: { price: price } })

    } else {
      dispatch({ type: "ADD_PRICE", payload: { price } })
      dispatch({ type: "ADD_BASKET", payload: { id } })
    }
  }

  const renderItem = ({ item }) => (
    <ProductCard data={item} onPress={() => handlePress(item)} idList={idList} />
  );

  return (
    <Container>
      <List
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <PriceCard />
    </Container>
  )
}

export default MainPage;