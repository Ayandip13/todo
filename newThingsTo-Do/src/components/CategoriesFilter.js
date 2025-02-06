import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { categories, colors } from "../Constant";

const CategoriesFilter = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item, index) => {
          return (
            <View
              style={{
                backgroundColor: index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                marginRight: 30,
                paddingHorizontal: 24,
                borderRadius: 5,
                paddingVertical: 16,
                elevation:9,
                marginTop: 15,
                marginVertical:23
              }}
            >
              <TouchableOpacity><Text style={{color: index === 0 && colors.COLOR_LIGHT}} >{item.category}</Text></TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({});
