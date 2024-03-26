import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderMenuButton,
  HeaderGlobalAction,
  HeaderGlobalBar,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import { Switcher, Notification, UserAvatar } from '@carbon/icons-react';

const PlayHeader = () => (
  <HeaderContainer render={({ isSideNavExpanded, onClickSideNavExpand }) => (
    <Header aria-label="Carbon Playground">
    <SkipToContent />
    <HeaderMenuButton
      aria-label="Open menu"
      onClick={onClickSideNavExpand}
      isActive={isSideNavExpanded}
    />
    <HeaderName href="/" prefix="IBM">
      Carbon Playground
    </HeaderName>
    <HeaderNavigation aria-label="Carbon Playground">
      <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
      <HeaderMenuItem href="/users">Users</HeaderMenuItem>
    </HeaderNavigation>
    <SideNav aria-label="Side navigation" expanded={isSideNavExpanded} isPersistent={false}>
      <SideNavItems>
        <HeaderSideNavItems>
          <HeaderMenuItem href="/repos">Repositories</HeaderMenuItem>
          <HeaderMenuItem href="/users">Users</HeaderMenuItem>
        </HeaderSideNavItems>
      </SideNavItems>
    </SideNav>
    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label='Notifications' tooltipAlignment='center'>
        <Notification size={20} />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label='User avatar' tooltipAlignment='center'>
        <UserAvatar size={20} />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label='Switcher' tooltipAlignment='center'>
        <Switcher size={20} />
      </HeaderGlobalAction>
    </HeaderGlobalBar>
    </Header>
  )}
  />
);

export default PlayHeader;