
import { Text, View, Image, StyleSheet } from 'react-native';
import { Entypo,EvilIcons } from '@expo/vector-icons'; 

import { TweetType } from '../types';

type IconButtonProps = {
    icon ?: React.ComponentProps<typeof EvilIcons>['name']; //Type of evil icons
    text : string | number;
}

const IconButton = ({icon, text} : IconButtonProps) => {
    return (
    <View style={{flexDirection:'row', alignItems:'center'}}>
        {/* Icon */}
        <EvilIcons name={icon} size={22} color="gray"/>
        {/* Number */}
        <Text style={{fontSize:12, color:'gray'}}>{text}</Text>
    </View>
    )
}

type TweetProps = {
    tweet: TweetType;
}

const Tweet = ({tweet} : TweetProps) => {
    return (
        <View style={styles.container}>
            <Image src={tweet.user.image} style={styles.userImage}/>
            <View style={styles.mainContainer}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.name}>{tweet.user.name}</Text>
                    <Text style={styles.username}>{tweet.user.username} • 2h</Text>
                    <Entypo 
                        name="dots-three-horizontal" 
                        size={16} 
                        color="gray"
                        style={{marginLeft:'auto'}} 
                    />
                </View>
                <Text style={styles.content}>{tweet.content}</Text>
                {tweet.image && <Image src={tweet.image} style={styles.image} />}
                <View style={styles.footer}>
                    <IconButton icon="comment" text={tweet.numberOfComments}/>                    
                    <IconButton icon="retweet" text={tweet.numberOfRetweets}/>                    
                    <IconButton icon="heart" text={tweet.numberOfLikes}/>                    
                    <IconButton icon="chart" text={tweet.impressions || 0}/>                    
                    <IconButton icon="share-apple" />                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding:10,
      borderBottomColor:'lightgrey',
      borderBottomWidth:StyleSheet.hairlineWidth,
      backgroundColor:'white'
    },
    userImage :{
      width:50,
      height:50,
      borderRadius:50,
    },
    mainContainer:{
      marginLeft:10,
      flex:1,
    },
    name:{
      fontWeight:'600'
    },
    content:{
      lineHeight:20,
      marginTop:5,
    },
    image : {
        width:'100%',
        aspectRatio:16/9,
        marginVertical:10,
        borderRadius:15,
    },
    username :{
        color:'gray',
        marginLeft:5,
    },
    footer:{
        flexDirection:'row',
        marginVertical:5,
        justifyContent:'space-between'
    }
  });
  
export default Tweet;