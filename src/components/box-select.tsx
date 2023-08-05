import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

interface BoxSelectProps {
  item: {
    id: string;
    name: string;
    image: any;
    imageSelected: any;
    blocked: boolean;
  };
  setitemSelected(value: string): void;
  itemSelected: string;
  lastItem: boolean;
}

export const BoxSelect = ({
  item,
  setitemSelected,
  itemSelected,
  lastItem
}: BoxSelectProps) => {
  const { image, name, id, imageSelected, blocked } = item;
  const isThisSelected = itemSelected === id;

  const handleSelect = () => {
    if (itemSelected && itemSelected === id) {
      setitemSelected("");
      return;
    }
    setitemSelected(id);
  };

  return (
    <Pressable onPress={handleSelect} style={[styles.container, { marginRight: lastItem ? 40 : 10 }]} disabled={blocked}>
      <View
        style={[
          styles.icon,
          isThisSelected && !blocked ? {
            shadowColor: "#20244247",
            backgroundColor: "#6a2194",
          } :
          { backgroundColor: blocked ? "#cacaca" : "#fff" },
        ]}
      >
        {isThisSelected ? imageSelected : image}
      </View>
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 10,
  },
  icon: {
    width: 80,
    height: 90,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#a8a8a84e",
    shadowOpacity: 1,
    shadowOffset: { width: 2, height: 10 },

    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 10,
    fontFamily: 'Poppins_500Medium',
    color: '#202442'
  },
});