import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import { IFolder } from "../context/context";

interface BoxFoldersProps {
  folder: IFolder;
  quantityArchives: number;
  onSelectFolder(folder: IFolder): void;
}

export const BoxFolder = ({ 
  folder, 
  quantityArchives,
  onSelectFolder
}: BoxFoldersProps) => {

  const [swipeActivated, setSwipeActivated] = useState(false);
  const { text: name } = folder;

  return (
    <Swipeable
      overshootRight={false}
      onActivated={() => setSwipeActivated(true)}
      onSwipeableClose={() => setSwipeActivated(false)}
      renderRightActions={() => (
        <View style={styles.contentAction}>
          <View style={styles.edit}>
            <TouchableOpacity
              onPress={() => { }}
            >
              <FontAwesome5 name="edit" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.remove}>
            <TouchableOpacity
              onPress={() => { }}
            >
              <FontAwesome5 name="trash" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    >
      <TouchableOpacity
        onPress={() => {
          if (!swipeActivated) {
            onSelectFolder(folder);
          }
        }}
        style={styles.container}
      >
        <View style={styles.backgroundImage}>
          <Entypo name="folder" size={40} color="#ffe713" />
        </View>
        <View style={styles.infoAnimal}>
          <View style={styles.headerInfo}>
            <Text style={styles.nameText}>{name}</Text>
          </View>
          <View style={styles.contentInfo}>
            <Text style={styles.yearText}>{quantityArchives} de arquivos</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  backgroundImage: {
    width: 100,
    height: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoAnimal: {
    width: 250,
    height: 80,
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  nameText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 17,
    color: "#575757",
  },
  contentInfo: {
    paddingHorizontal: 10,
  },
  location: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  distanceText: {
    color: "#717171",
    fontFamily: "Poppins_500Medium",
  },
  breedText: {
    fontSize: 16,
    color: "#717171",
    fontFamily: "Poppins_500Medium",
  },
  yearText: {
    fontSize: 15,
    color: "#8e8e8e",
    fontFamily: "Poppins_500Medium",
    marginTop: 10,
  },
  contentAction: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%'
  },
  edit: {
    width: 70,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3772f3',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  remove: {
    width: 70,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ec0a0a',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});