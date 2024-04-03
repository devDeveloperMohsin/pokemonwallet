import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useRef, useState} from 'react';
import ButtonOne from '../components/ButtonOne';
import {colors} from '../assets/styles.common';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const [sliderOffset, setSliderOffset] = useState(0);
  const scrollViewRef = useRef();

  const scrollToNextScreen = () => {
    let scrollToX = sliderOffset + windowWidth;
    scrollViewRef.current.scrollTo({ x: scrollToX, y: 0, animated: true })
  }

  return (
    <>
      <StatusBar hidden={true} />
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        decelerationRate="fast"
        snapToInterval={windowWidth}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => setSliderOffset(event.nativeEvent.contentOffset.x)}
        >
        {/* First Cart */}
        <View style={styles.cardContainer}>
          {/* Pokeball */}
          <View style={styles.pokeballContainer}>
            <Image
              source={require('../assets/images/pokeball.png')}
              style={styles.pokeball}
            />
            <Image
              source={require('../assets/images/pikachu.png')}
              style={styles.pokemon}
            />
          </View>

          {/* Card Text */}
          <View style={styles.cardText}>
            <Text style={{textAlign: 'center', fontSize: 18}}>
              Welcome To {'\n'}
              <Text style={{fontWeight: 'bold', fontSize: 30, color: '#000'}}>
                Pokemon Wallet
              </Text>{' '}
              {'\n'}
              Pokemon in your pocket
            </Text>
          </View>

          {/* Controls */}
          <View style={{...styles.cardControls}}>
            <ButtonOne
              text="Next"
              marginVertical={20}
              onPress={scrollToNextScreen}
            />
          </View>
        </View>

        {/* Second Card */}
        <View style={styles.cardContainer}>
          {/* Pokeball */}
          <View style={styles.pokeballContainer}>
            <Image
              source={require('../assets/images/pokeball.png')}
              style={styles.pokeball}
            />
            <Image
              source={require('../assets/images/bulbasaur.png')}
              style={styles.pokemon}
            />
          </View>

          {/* Card Text */}
          <View style={styles.cardText}>
            <Text style={{textAlign: 'center', fontSize: 18}}>
              <Text style={{fontWeight: 'bold', fontSize: 30, color: '#000'}}>
                Pokedesk
              </Text>{' '}
              {'\n'}
              Enjoy the collection of nearly 151 pokemons
            </Text>
          </View>

          {/* Controls */}
          <View style={{...styles.cardControls}}>
            <ButtonOne
              text="Next"
              marginVertical={20}
              onPress={scrollToNextScreen}
            />
          </View>
        </View>

        {/* Third Card */}
        <View style={styles.cardContainer}>
          {/* Pokeball */}
          <View style={styles.pokeballContainer}>
            <Image
              source={require('../assets/images/pokeball.png')}
              style={styles.pokeball}
            />
            <Image
              source={require('../assets/images/squirtle.png')}
              style={styles.pokemon}
            />
          </View>

          {/* Card Text */}
          <View style={styles.cardText}>
            <Text style={{textAlign: 'center', fontSize: 18}}>
              <Text style={{fontWeight: 'bold', fontSize: 30, color: '#000'}}>
                Regions
              </Text>{' '}
              {'\n'}
              Lots of information about Pokemon's favourite habitats and where
              you can find them
            </Text>
          </View>

          {/* Controls */}
          <View style={{...styles.cardControls}}>
            <ButtonOne
              text="Next"
              marginVertical={20}
              onPress={scrollToNextScreen}
            />
          </View>
        </View>

        {/* Fourth Card */}
        <View style={styles.cardContainer}>
          {/* Pokeball */}
          <View style={styles.pokeballContainer}>
            <Image
              source={require('../assets/images/pokeball.png')}
              style={styles.pokeball}
            />
            <Image
              source={require('../assets/images/Charmander.png')}
              style={styles.pokemon}
            />
          </View>

          {/* Card Text */}
          <View style={styles.cardText}>
            <Text style={{textAlign: 'center', fontSize: 18}}>
              <Text style={{fontWeight: 'bold', fontSize: 30, color: '#000'}}>
                Collections
              </Text>{' '}
              {'\n'}
              Catch pokemons and become the best pokemon trainer
            </Text>
          </View>

          {/* Controls */}
          <View style={{...styles.cardControls}}>
            <ButtonOne
              text="Start"
              marginVertical={20}
              onPress={() => navigation.navigate('BottomTabs')}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 15,
              }}>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: windowWidth,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokeballContainer: {
    position: 'relative',
    marginBottom: 20,
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokeball: {
    width: windowWidth - 50,
    height: windowWidth - 50,
    resizeMode: 'contain',
  },
  pokemon: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 40,
    left: 10,
  },

  cardText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  cardControls: {
    width: '100%',
    paddingHorizontal: 15,
    alignSelf: 'flex-end',
  },
});