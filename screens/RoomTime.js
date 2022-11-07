import { Agenda } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Button,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Checkbox } from 'react-native-paper';

const image = require('../assets/Background.jpg')

export default function RoomTime() {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  return (
        
          <SafeAreaView>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text>jhjpij</Text>
          </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  fab: {
    left: 24,
    top: 10,
    width: 190,
    height: 40,
    backgroundColor: '#efddc6',
    borderRadius: 9,
    position: "absolute"
  },
  fabIcon: {
      left: 40,
      top: 10,
      fontSize: 18,
      color: '#6b6b6b',
  },
  FlatListCont: {
    flex: .5,
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },
  CardCont: {
    width: 350,
    height: 50,
    backgroundColor: "#FDEED2",
    borderRadius: 15,
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: 15
  },
  outerCard: {
    padding: 10,
  },
});