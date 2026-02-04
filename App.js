// 超级简化版 - 确保100%能构建
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>灵境敲击</Text>
      <Text style={styles.subtitle}>测试版本</Text>
      
      <Text style={styles.counter}>功德: {count}</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>点击积德</Text>
      </TouchableOpacity>
      
      <Text style={styles.footer}>v1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B4513',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFD700',
    marginBottom: 40,
  },
  counter: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B4513',
  },
  footer: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.6,
    position: 'absolute',
    bottom: 20,
  },
});