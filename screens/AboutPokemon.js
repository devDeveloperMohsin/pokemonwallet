import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import CircleStat from '../components/CircleStat';
import {colors} from '../assets/styles.common';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const AboutPokemon = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi mi,
          commodo quis vulputate molestie, porta at dui. Vivamus et feugiat
          lacus. Proin dignissim lectus sem, eu cursus ligula egestas ac.
        </Text>

        {/* Circle Stats */}
        <View style={styles.circleStatContainer}>
          <CircleStat stat={{name: 'height', value: '43 cm'}} />
          <CircleStat stat={{name: 'Weight', value: '32 kg'}} />
        </View>
        {/* End Circle Stats */}

        {/* Chart Stats */}
        <View style={styles.chartStats}>
          <BarChart
            data={{
              labels: ['HP', 'Attach', 'Defence', 'Speed','SA','SD'],
              datasets: [
                {
                  data: [10, 20, 15, 30, 25, 51],
                  colors: [
                    () => '#F89D89',
                    () => '#BA6252',
                    () => '#90655B',
                    () => '#FAB6A6',
                    () => '#C68272',
                    () => '#89483E',
                  ],
                },
              ],
            }}
            width={Dimensions.get('screen').width - 45} // from react-native
            height={220}
            yAxisInterval={5} // optional, defaults to 1
            chartConfig={{
              backgroundColor: colors.lightGray,
              backgroundGradientFrom: colors.lightGray,
              backgroundGradientTo: colors.lightGray,
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `#000`,
              barRadius: 20,
              barColor: '#000',
            }}
            withVerticalLabels={false}
            withHorizontalLabels={false}
            fromZero={true}
            withInnerLines={false}
            showBarTops={false}
            showValuesOnTopOfBars={true}
            withCustomBarColorFromData={true}
            flatColor={true}
            style={{
              paddingRight: 0,
              paddingBottom:0,
              paddingTop: 25,
            }}
          />

          <View style={styles.chartLegendContainer}>
            <View style={styles.chartLegend}>
              <View style={{ ...styles.chartLegendCircle, backgroundColor:'#F89D89' }}></View>
              <Text>HP</Text>
            </View>
            <View style={styles.chartLegend}>
              <View style={{ ...styles.chartLegendCircle, backgroundColor:'#FAB6A6' }}></View>
              <Text>Speed</Text>
            </View>
            <View style={styles.chartLegend}>
              <View style={{ ...styles.chartLegendCircle, backgroundColor:'#BA6252' }}></View>
              <Text>Attach</Text>
            </View>
            <View style={styles.chartLegend}>
              <View style={{ ...styles.chartLegendCircle, backgroundColor:'#C68272' }}></View>
              <Text>Special Attach</Text>
            </View>
            <View style={styles.chartLegend}>
              <View style={{ ...styles.chartLegendCircle, backgroundColor:'#90655B' }}></View>
              <Text>Defence</Text>
            </View>
            <View style={styles.chartLegend}>
              <View style={{ ...styles.chartLegendCircle, backgroundColor:'#89483E' }}></View>
              <Text>Special Defence</Text>
            </View>
          </View>
        </View>
        {/* End Chart Stats */}
        
        <View style={{ height: 50 }}></View>
      </View>
    </ScrollView>
  );
};

export default AboutPokemon;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 15,
    backgroundColor: colors.white,
  },
  circleStatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  chartStats: {
    backgroundColor: colors.lightGray,
    borderRadius: 15,
  },
  chartLegendContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 15,
  },
  chartLegend: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  chartLegendCircle: {
    width: 10,
    height: 10,
    backgroundColor: colors.gray,
    marginRight: 5,
    borderRadius: 10,
  }
});
