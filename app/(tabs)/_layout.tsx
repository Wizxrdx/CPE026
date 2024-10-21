import Icon from 'react-native-vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
            href: null,
            headerShown: false,
            tabBarIcon: ({ color }) => <Icon size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
            headerShown: false,
            tabBarIcon: ({ color }) => 
            <Icon size={28} name="person" color={'blue'} />
        }}
      />
    </Tabs>
  );
}
