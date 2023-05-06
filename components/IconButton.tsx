
import { Text, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 


type IconButtonProps = {
    icon : React.ComponentProps<typeof EvilIcons>['name']; //Type of evil icons
    text ?: string | number;
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

export default IconButton