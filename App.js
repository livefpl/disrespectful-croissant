import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground,Dimensions,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
const BottomTab = createBottomTabNavigator();

const url = 'https://curation.pythonanywhere.com/leagues/1244/35112';

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data); // Do something with the data
  })
  .catch(error => {
    console.error(error);
  });
const rem = Dimensions.get('window').width/380;
const imgwidth = rem*64;
const FootballLineupWithImages = () => {
  const info = {Points:'18(-4)=14', Newrank:'87,432', arrow:'up'};
  
  const images = {

   up: require('./up.png'),
   down: require('./down.png'),
   same: require('./same.png'),
};


 const players = [
  { name: 'Steele', position: 'Goalkeeper', team: 5, image: require('./5.png') },
  { name: 'Azzribalaga', position: 'Bench', team: 6, image: require('./6.png') },
  { name: 'Botman', position: 'Defender', team: 15, image: require('./15.png') },
  { name: 'Trippier', position: 'Defender', team: 15, image: require('./15.png') },
  { name: 'Robertson', position: 'Defender', team: 12, image: require('./12.png') },
  { name: 'Castagne', position: 'Bench', team: 10, image: require('./10.png') },
  { name: 'Henry', position: 'Bench', team: 4, image: require('./4.png') },
  { name: 'Grealish', position: 'Midfielder', team: 13, image: require('./13.png') },
  { name: 'De Bruyne', position: 'Midfielder', team: 13, image: require('./13.png') },
  { name: 'Mitoma', position: 'Midfielder',team: 5, image: require('./5.png') },
  { name: 'Salah', position: 'Midfielder', team: 12, image: require('./12.png') },
  { name: 'March', position: 'Midfielder', team: 5, image: require('./5.png') },
  { name: 'Isak', position: 'Forward', team: 15, image: require('./15.png') },
  { name: 'Haaland', position: 'Forward', team: 13, image: require('./13.png') },
  { name: 'Greenwood', position: 'Bench', team: 11, image: require('./11.png') },
];

const playersWithStats = players.map(player => ({
  ...player,
  Cap: ['','c','v','tc'][Math.floor(Math.random() * 4)],
  EO: Math.floor(Math.random() * 211)+Math.floor(Math.random() * 9)/10,
  EO2: Math.floor(Math.random() * 211)+Math.floor(Math.random() * 9)/10,
  Emoji: ['🎲', '😴', '🕵', '⭐',''][Math.floor(Math.random() * 5)],
  Points: Math.floor(Math.random() * 23) - 2,
  Status: ['played', 'yet', 'missed', 'live','bench'][Math.floor(Math.random() * 5)]
}));
  const goalkeepers = playersWithStats.filter(player => player.position === 'Goalkeeper');
  const defenders = playersWithStats.filter(player => player.position === 'Defender');
  const midfielders = playersWithStats.filter(player => player.position === 'Midfielder');
  const forwards = playersWithStats.filter(player => player.position === 'Forward');
  const bench = playersWithStats.filter(player => player.position === 'Bench');
const items = [goalkeepers,defenders,midfielders,forwards,bench];

  return (
    <View style={styles.container}>
    
     <Text style={styles.header}>Ragabolly Gameweek 34</Text>
     
     <View style={styles.container}>
    <ImageBackground
          source={require('./livefplpitch.png')}
          style={{
             width: null,
            height: null,
            
          }}>
          <View style={styles.scoresheet}>
          <Text style={{
             fontSize:12*rem,marginTop:7*rem,
             fontWeight:"bold",textAlign:"center",
            
          }}>{info.Points}</Text>
          <Text style={{
             fontSize:10*rem,
             marginTop:7*rem,
             textAlign:"center",
            
          }}>{info.Newrank}  <Image  source={images[info.arrow]} /> </Text>
          </View>
    {items.map((item, index) => (
        <View style={styles.lineupContainer}>
        
        {item.map(player => (
          <View style={styles.positionContainer} key={player.name}>
            
            <View style={styles.playerContainer}>
              <Image source={player.image} style={styles.playerImage} />
              <Text  style={styles.emoji}>{player.Emoji}</Text>
              {player.Cap!="" && <View style={styles.cap}><Text style={{"color":"white"}}>{player.Cap}</Text></View>}
              <Text numberOfLines={1} ellipsizeMode='tail' style={styles.playerName}>{player.name}</Text>
              <Text numberOfLines={1} ellipsizeMode='tail' style={styles[player.Status]}>{player.Points}</Text>
              <View style={styles.EOs}>
              <Text numberOfLines={1} ellipsizeMode='tail' style={styles.EO1}>{player.EO}%</Text>
              <Text numberOfLines={1} ellipsizeMode='tail' style={styles.EO2}>{player.EO2}%</Text>
            </View></View>
          </View>
        ))}

        
      </View>

     
      
      
      ))}
       </ImageBackground></View>
            
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 80,
    
  },
  lineupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
    
    
  },
  positionContainer: {
    alignItems: 'center',
    marginHorizontal: 0,
  },
  
  playerContainer: {
    alignItems: 'center',
    marginTop: 5,
    marginHorizontal:10,
    
    
  },
  playerImage: {
    width: imgwidth,
    height: undefined,
    aspectRatio:7/6,
    
  },
  EOs:{
    flexDirection: 'row',
  }, 

  EO1: {
    fontSize: 9,
    
    marginTop: 0,
    backgroundColor:'white',
    color:'black',
    width:imgwidth/2
,
    textAlign: 'center',
    overflow: 'hidden',
  },
  EO2: {
    fontSize: 9,
    marginTop: 0,
    backgroundColor:'lightgreen',
    color:'black',
    width:imgwidth/2
,
    textAlign: 'center',
    overflow: 'hidden',
  },
  playerName: {
    fontSize: 9,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom:0,
    backgroundColor:'black',
    color:'white',
    width:imgwidth
,
    textAlign: 'center',
    overflow: 'hidden',
  },
  emoji:
  {
    position: "absolute",
    top: "40%",
    right: "-9%",
  },
   scoresheet:
  {
    position: "absolute",
    top: "9.8%",
    right: "7%",
    borderRadius :"5%",
    backgroundColor:"#c3c9cf",
    padding: "1%",
    textAlign:"center",
  },
  cap:
  {
    fontWeight: "500",
    top:"25%",
    position:"absolute",
    backgroundColor:"black",
    flex:1,
    color:"white",
    borderRadius:7*rem,
    width:15*rem,
    aspectRatio:1,
    textAlign:"center",
    justifyContent: 'center',
    alignItems: 'center',

  },
  played: {
    fontSize: 9,
    width:imgwidth
,
    marginTop: 0,
    
    textAlign: 'center',
    overflow: 'hidden',

  backgroundColor: 'lightgrey',
  color: 'black',
  
  
},
live: {
  fontSize: 9,
    width:imgwidth
,
    marginTop: 0,
    
    textAlign: 'center',
    overflow: 'hidden',
  backgroundColor: 'yellow',
  color: 'black',
},
missed: {
  fontSize: 9,
    width:imgwidth
,
    marginTop: 0,
    
    textAlign: 'center',
    overflow: 'hidden',
  backgroundColor: 'red',
  color: 'white',
},
yet: {
  fontSize: 9,
    width:imgwidth
,
    marginTop: 0,
    
    textAlign: 'center',
    overflow: 'hidden',
  backgroundColor: 'green',
  color: 'white',
},
bench: {
  fontSize: 9,
    width:imgwidth
,
    marginTop: 0,
    
    textAlign: 'center',
    overflow: 'hidden',
  backgroundColor: 'grey',
  color: 'white'
},
 
 

});
function RankScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Rank Screen</Text>
    </View>
  );
}

function LeagueScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>League Screen</Text>
    </View>
  );
}
export default FootballLineupWithImages;
