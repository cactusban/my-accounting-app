// 导入tabs导航器
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
    // 全局屏幕
      screenOptions={{
        // 激活的状态标签
        tabBarActiveTintColor: '#ff713dff',
        //顶部背景颜色
        headerStyle: {
            backgroundColor: '#fffd94ff',
        },
        headerShadowVisible: false,
        headerTintColor: '#000000ff',
        tabBarStyle: {
        backgroundColor: '#25292e',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '账本',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
        <Tabs.Screen name="report" options={{title:'报表',
        tabBarIcon:({color,focused})=>(
            <Ionicons name={focused ? 'document-text' : 'document-text-outline'} color={color} size={24}/>
        )
      }}/>
      <Tabs.Screen
        name="account"
        options={{
          title: '账户',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />

    </Tabs>
  );
}
