import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { User } from "src/misc";

type renderItemType = {
  item: User;
};

const ContactList: React.FC<{ users: User[] | null }> = ({ users }) => {
  const RenderItem: React.FC<renderItemType> = ({
    item: { name, picture },
  }) => {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: picture.large }}
            style={styles.profile}
            resizeMode="cover"
          />
        </View>
        <Text
          style={styles.label}
          numberOfLines={1}
        >{`${name.first} ${name.last}`}</Text>
      </TouchableOpacity>
    );
  };

  if (!users) {
    return <View></View>;
  }
  return (
    <View>
      <Text style={styles.title}>Quick Transfer</Text>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 0 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <TouchableOpacity style={styles.container}>
          <View
            style={[
              styles.imgContainer,
              {
                borderWidth: 2,
                borderColor: "#FD5E37",
                backgroundColor: "transparent",
                height: 53,
                width: 53,
              },
            ]}
          >
            <AntDesign name="plus" size={24} color="#FD5E37" />
          </View>
          <Text style={[styles.label, { fontWeight: "bold", marginTop: 2 }]}>
            Add new
          </Text>
        </TouchableOpacity>
        {users.map((item) => (
          <RenderItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    gap: 4,
  },
  imgContainer: {
    width: 55,
    height: 55,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#fae0d9",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 10,
    width: "100%",
    textAlign: "center",
  },
  profile: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 18,
    paddingLeft: 16,
    fontWeight: "bold",
    paddingBottom: 10,
  },
});
