import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import useAddFolderModal from "../hooks/use-add-modal";
import { ModalAddArchive } from "./ModalForm";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";

interface ModalScreenProps extends BottomTabBarButtonProps {};

export default function ModalScreen({ children }: ModalScreenProps) {
  const { onOpen } = useAddFolderModal();

  return (
    <>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          ...styles.shadow,
        }}
        onPress={onOpen}
      >
        <View style={{
          width: 70,
          height: 70,
          top: -10,
          borderRadius: 35,
          backgroundColor: '#3f0072',
        }}>
          {children}
        </View>
      </TouchableOpacity>
      <ModalAddArchive />
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});