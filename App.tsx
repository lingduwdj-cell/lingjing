// 确保能构建成功的极简版本
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('点击积德');

  const handleTap = () => {
    const newCount = count + 1;
    setCount(newCount);
    
    // 功德文字
    const messages = [
      '功德+1', '烦恼-1', '南无阿弥陀佛',
      '智慧+1', '清心明性', '普度众生'
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
    
    // 1秒后恢复
    setTimeout(() => {
      setMessage('点击积德');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Text style={styles.title}>灵境·敲击</Text>
      <Text style={styles.subtitle}>掌上能量场 · 赛博积德</Text>
      
      <View style={styles.counterContainer}>
        <Text style={styles.counterLabel}>累计功德</Text>
        <Text style={styles.counter}>{count}</Text>
      </View>
      
      <TouchableOpacity style={styles.tapButton} onPress={handleTap}>
        <View style={styles.tapCircle}>
          <Text style={styles.tapText}>敲</Text>
          <Text style={styles.tapHint}>击</Text>
        </View>
      </TouchableOpacity>
      
      <Text style={styles.message}>{message}</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>点击屏幕积德祈福</Text>
        <Text style={styles.infoText}>释放压力，净化心灵</Text>
      </View>
      
      <Text style={styles.version}>v1.0.0 · 灵境工作室</Text>
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
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFD700',
    marginBottom: 40,
    textAlign: 'center',
  },
  counterContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  counterLabel: {
    fontSize: 20,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  counter: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 10,
  },
  tapButton: {
    marginBottom: 40,
  },
  tapCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 3,
    borderColor: '#FFD700',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tapText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  tapHint: {
    fontSize: 24,
    color: '#FFD700',
    marginTop: -10,
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 40,
    textAlign: 'center',
    minHeight: 40,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
    marginBottom: 5,
  },
  version: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.6,
    position: 'absolute',
    bottom: 20,
  },
});