import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface VerificationModalProps {
  visible: boolean;
  onClose: () => void;
  email: string;
}

export function VerificationModal({ visible, onClose, email }: VerificationModalProps) {
  const [code, setCode] = useState('');
  const router = useRouter();

  // Reset code when modal becomes visible
  useEffect(() => {
    if (visible) {
      setCode('');
    }
  }, [visible]);

  const handleCodeChange = (text: string) => {
    // Only allow numbers
    const numericText = text.replace(/[^0-9]/g, '');
    setCode(numericText);
    
    if (numericText.length === 6) {
      // Auto navigate when 6 digits entered
      onClose();
      router.replace('/');
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white rounded-t-[32px] p-6 pb-12 pt-8 relative">
            
            {/* Close Button */}
            <TouchableOpacity onPress={onClose} className="absolute top-4 right-4 p-2 z-20">
              <Ionicons name="close" size={24} color="#87909F" />
            </TouchableOpacity>

            {/* Header Text */}
            <View className="items-center mb-8 mt-2">
              <Text className="text-[24px] font-['Poppins-Bold'] text-text-primary mb-2">Check your email</Text>
              <Text className="text-base font-['Poppins-Medium'] text-text-secondary text-center leading-6">
                We sent a 6-digit code to{"\n"}
                <Text className="font-['Poppins-Bold'] text-text-primary">{email || 'email@example.com'}</Text>
              </Text>
            </View>

            {/* OTP Input */}
            <View className="items-center relative">
              <TextInput
                value={code}
                onChangeText={handleCodeChange}
                maxLength={6}
                keyboardType="number-pad"
                autoFocus
                style={styles.hiddenInput}
              />
              <View className="flex-row justify-between w-full px-2 gap-x-3 pointer-events-none">
                {[0, 1, 2, 3, 4, 5].map((index) => {
                  const isActive = code.length === index;
                  const isFilled = code.length > index;
                  
                  return (
                    <View 
                      key={index}
                      className={`flex-1 aspect-[4/5] rounded-2xl items-center justify-center border-[1.5px] 
                        ${isActive ? 'border-primary' : (isFilled ? 'border-gray-300' : 'border-gray-200')}
                        bg-white`}
                    >
                      <Text className="text-[28px] font-['Poppins-Bold'] text-text-primary">
                        {code[index] || ''}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>

            {/* Resend Link */}
            <View className="flex-row justify-center mt-10">
              <Text className="text-[15px] font-['Poppins-Medium'] text-text-secondary">Didn't receive it? </Text>
              <Text className="text-[15px] font-['Poppins-Bold'] text-primary">Resend</Text>
            </View>

          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  hiddenInput: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0,
    zIndex: 10,
  }
});
