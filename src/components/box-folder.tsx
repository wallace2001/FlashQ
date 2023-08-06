import { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";
import { IFolder, MobileContext } from "../context/context";
import { COLORS } from "../../constants/theme";
import { deleteFolder } from "../actions/folder";
import useEditFolderModal from "../hooks/use-edit-folder-modal";
import useViewFileModal from "../hooks/use-view-file-modal";
import { IArchive } from "../types";

const TYPE_FOLDER = 'folder';

interface BoxFoldersProps {
  archive: IArchive;
  quantityArchives: number;
  onSelectFolder(archive: IArchive): void;
}

export const BoxFolder = ({
  archive,
  quantityArchives,
  onSelectFolder
}: BoxFoldersProps) => {

  const { path } = useContext(MobileContext);

  const [swipeActivated, setSwipeActivated] = useState(false);
  const { onOpen: onOpenEditFolder } = useEditFolderModal();
  const { onOpen: onOpenViewFile } = useViewFileModal();
  const { text: name } = archive;

  const isFolder = archive.type === TYPE_FOLDER;

  const renderFolder = (
    <>
      <View style={styles.backgroundImage}>
        <Entypo name="folder" size={30} color="#ffe713" />
      </View>
      <View style={styles.info}>
        <View style={styles.headerInfo}>
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <View style={styles.contentInfo}>
          <Text style={styles.quantityArchives}>{quantityArchives} de arquivos</Text>
        </View>
      </View>
    </>
  );

  const renderFile = (
    <>
      <View style={styles.backgroundImage}>
        <AntDesign name="file1" size={30} color="#063aca" />
      </View>
      <View style={styles.info}>
        <View style={{justifyContent: 'center', alignItems: 'flex-start', height: '100%'}}>
          <Text style={styles.nameText}>{name}</Text>
        </View>
      </View>
    </>
  );

  return (
    <Swipeable
      overshootRight={false}
      onActivated={() => setSwipeActivated(true)}
      onSwipeableClose={() => setSwipeActivated(false)}
      renderRightActions={() => (
        <View style={styles.contentAction}>
          <View style={styles.edit}>
            <TouchableOpacity
              onPress={() => {
                if (isFolder) {
                  onOpenEditFolder(archive)
                }
              }}
            >
              <FontAwesome5 name="edit" size={20} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.remove}>
            <TouchableOpacity
              onPress={() => deleteFolder(archive.id, path)}
            >
              <FontAwesome5 name="trash" size={20} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    >
      <TouchableOpacity
        onPress={() => {
          if (!swipeActivated && isFolder) {
            onSelectFolder(archive);
          }

          if (!swipeActivated && !isFolder) {
            onOpenViewFile(archive);
          }
        }}
        style={styles.container}
      >
        {isFolder ? renderFolder : renderFile}
      </TouchableOpacity>
    </Swipeable>

  );
};

const styles = StyleSheet.create({
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
  info: {
    width: 250,
    height: 80,
    backgroundColor: COLORS.white,
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
  quantityArchives: {
    fontSize: 15,
    color: "#8e8e8e",
    fontFamily: "Poppins_500Medium",
    marginTop: 10,
  },
});