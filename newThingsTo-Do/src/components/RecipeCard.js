import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { colors, recipeList } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = () => {
  const navigation = useNavigation();

  return (
    <View style={{ marginBottom: 2, marginHorizontal: 5 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        numColumns={2}
        data={recipeList}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("RecipeDetails", { item: item })}
            style={{
              backgroundColor: colors.COLOR_LIGHT,
              elevation: 5,
              borderRadius: 8,
              marginVertical: 8,
              marginHorizontal: 15,
              alignItems: "center",
              paddingHorizontal: 1,
              paddingVertical: 19,
            }}
          >
            <Image
              source={item.image}
              style={{ width: 150, height: 200, resizeMode: "center" }}
            />
            <Text>{item.name}</Text>

            <View style={{ flexDirection: "row", top: 5 }}>
              <Text> {item.time}</Text>
              <Text> | </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 6 }}>{item.rating}</Text>
                <FontAwesome
                  name="star"
                  size={15}
                  style={{ bottom: 2 }}
                  color={colors.COLOR_PRIMARY}
                />
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({});
