import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants/icons";
import { users } from "@/constants/user";
import Post from "@/components/Post";

const Community = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <ScrollView>
      <View style={styles.navbar}>
        <Image source={icons.logo3} resizeMode="contain" style={styles.logo} />
        <View style={styles.profile}>
          <Image
            source={icons.kiel}
            resizeMode="cover"
            style={styles.profilePicture}
          />
          <View style={styles.textSection}>
            <Text style={styles.name}>Hi, Matt</Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <TextInput
          placeholder="What are you thinking about? Type here..."
          multiline={true}
          style={styles.createPost}
          placeholderTextColor="#888"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          textAlignVertical="top"
        />
        {isFocused && (
          <TouchableOpacity style={styles.postBtn}>
            <Text style={styles.textBtn}>Post</Text>
          </TouchableOpacity>
        )}
        <View style={styles.posts}>
          <FlatList
            data={users}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <Post name={item.name} content={item.content} />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Community;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  navbar: {
    backgroundColor: "#57A6E0",
    height: 190,
    width: "100%",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  logo: {
    marginTop: 20,
    marginLeft: 20,
    width: 160,
    height: 56,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  profilePicture: {
    marginTop: 0,
    marginLeft: 20,
    width: 100,
    height: 100,
    borderRadius: 599,
  },
  textSection: {
    width: "100%",
  },
  name: {
    width: "100%",
    fontSize: 32,
    fontFamily: "Poppins_600SemiBold",
  },
  content: {
    marginTop: 20,
    marginHorizontal: 20,
    display: "flex",
    flexDirection: "column",
  },
  createPost: {
    borderWidth: 1,
    borderColor: "#75838F",
    fontFamily: "Poppins_400Regular",
    borderRadius: 16,
    padding: 20,
  },
  posts: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  postBtn: {
    backgroundColor: "#428CC3",
    borderRadius: 32,
    width: 100,
    height: 35,
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
  },
  textBtn: {
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
    alignSelf: "center",
  },
});
