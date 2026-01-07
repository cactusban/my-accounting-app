// 导入tabs导航器
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';


export default function TabLayout() {
  return (
    <Tabs
    // 全局屏幕
      screenOptions={{
        // 激活的状态标签
        tabBarActiveTintColor: '#ff713dff',
        //顶部背景颜色
        headerStyle: {
            backgroundColor: '#e6e6e6ff',
        },
        headerShadowVisible: false,
        headerTintColor: '#000000ff',
        tabBarStyle: {
        backgroundColor: '#e6e6e6ff',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '账本',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'book' : 'book-outline'} color={color} size={24} />
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
            <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} color={color} size={24} />
          ),
        }}
      />

    </Tabs>
  );
}
