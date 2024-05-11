import { TabBarIconContainer } from "./styles";

export default function CustomTabBarIcon({ children, focused }){
  return(
    <TabBarIconContainer focused={focused}>
      {children}
    </TabBarIconContainer>
  )
}