import { SidebarBody, SidebarIcon, SidebarOption, SidebarOptionsWrapper } from "./sidebarElements";
import BoardIcon from '../../assets/boardIcon.png'
import HomeIcon from '../../assets/waveIcon.png'
const Sidebar = () => {
  return ( 
    <SidebarBody>
      <SidebarOptionsWrapper>
        <SidebarOption>
          <SidebarIcon src={BoardIcon} />
          Boards
        </SidebarOption>
        <SidebarOption>
          <SidebarIcon src={HomeIcon} />
          Home
        </SidebarOption>
      </SidebarOptionsWrapper>
    </SidebarBody>
   );
}
 
export default Sidebar;