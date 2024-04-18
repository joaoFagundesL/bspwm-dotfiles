"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[8476],{44975:(e,t,i)=>{i.d(t,{EK:()=>l,IM:()=>c,QZ:()=>a,YY:()=>s,_g:()=>r,dy:()=>o,x9:()=>d,yb:()=>u});var n=i(97978);function o(e,t){n.j(e,"download_desktop_app",t)}function s(e,t){n.j(e,"download_mobile_app",t)}function r(e,t){const{name:i,...o}=t;n.j(e,"click_link",{...o,click_name:i})}function a(e,t){n.j(e,"scroll",t)}function c(e,t){n.j(e,"customer_io_in_app_callout_show",t)}function l(e,t){n.j(e,"customer_io_in_app_callout_suppress",t)}function d(e,t){n.j(e,"customer_io_in_app_callout_dismiss",t)}function u(e,t){n.j(e,"customer_io_in_app_callout_error",t)}},1101:(e,t,i)=>{i.d(t,{Z:()=>b});i(67294);var n=i(480),o=i(86628),s=i(24405),r=i(56666),a=i(37810),c=i(60709),l=i(61766),d=i(48019),u=i(64921),p=i(31945),g=i(78140),m=i(72495),h=i(85893);const b=function(e){let{emailAddress:t,disabled:i,accountActions:a}=e;const b=(0,s.Fg)(),v=(0,n.O7)(),j=(0,o.qz)(void 0,l.Z),{device:w}=v;let y;return y=w.isMobile?{menuType:c.og.ActionSheet}:{menuType:c.og.Popup},(0,h.jsxs)("div",{style:S(v,b),children:[(0,h.jsx)("div",{style:M(v),children:t}),(0,h.jsx)(p.ZP,{popupType:w.isMobile?p.Z4.SlideUp:p.Z4.Popup,buttonPopupStore:j,renderOrigin:e=>{if(!i)return(0,h.jsx)(u.Z,{...e,style:f(v),children:(0,r.o)(x(v))})},render:()=>(0,h.jsx)(g.Z,{...y,children:(0,h.jsx)(d.Z,{sections:[{key:"option section",render:e=>(0,h.jsx)(m.Z,{...e}),actions:a}],context:{environment:v,blocks:[],publicEditMode:void 0}})})})]})};function f(e){const{device:t}=e;return{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:t.isMobile?24:20,height:t.isMobile?24:20,borderRadius:4}}function x(e){const{device:t}=e;return{width:t.isMobile?18:12,height:t.isMobile?18:12}}function M(e){return{fontSize:e.device.isMobile?14:11,lineHeight:a.Z.lineHeight.UISmall.desktop,fontWeight:a.Z.fontWeight.medium}}function S(e,t){return{marginTop:e.device.isMobile?20:8,marginLeft:12,marginRight:12,display:"flex",alignItems:"center",justifyContent:"space-between",color:t.mediumTextColor}}},63134:(e,t,i)=>{i.d(t,{Z:()=>x});var n=i(67294),o=i(480),s=i(86628),r=i(9291),a=i(91536),c=i(92625),l=i(4708),d=i(77907),u=i(35691),p=i(88893),g=i(35057),m=i(88280),h=i(58297),b=i(29825),f=i(85893);function x(e){let{spaceStore:t,origin:i,requestFrom:x,inviteFrom:M}=e;const{shouldShowRequestMemberButtion:S,canEditMembership:v}=(0,s.VK)((()=>({shouldShowRequestMemberButtion:!t.canEditMembership()&&!t.getDisableMembershipRequests()&&(0,l.p1)(),canEditMembership:t.canEditMembership()})),[t]),j=(0,s.VK)((()=>{const e=m.subscriptionDataStoreInstance.state;return Boolean(e&&p.YK(e))}),[]),{isMobile:w}=(0,o.Fy)(),y=(0,s.VK)((()=>(0,u.shouldEnableSlackImportsInvite)({canEditPermission:v,isMobile:w,subscriptionTier:(0,g.zt)()})),[v,w]),k=(0,n.useCallback)((()=>{const e=(0,r.defineMessages)({updatingPermissions:{id:"spacePermissionsSettings.updatePermissionsMessage",defaultMessage:"Updating…"}});c.j({message:e.updatingPermissions})}),[]),C=(0,n.useCallback)((()=>{c.x()}),[]),Z=(0,o.O7)(),A=(0,n.useCallback)((()=>{a.L7(Z,{type:"request"})}),[Z]);return S?(0,f.jsx)(b.Z,{store:t,analyticsFrom:x,origin:i?(0,f.jsx)("div",{onClick:A,children:i}):(0,f.jsx)(h.Z,{isLarge:!0,onClick:A,children:(0,f.jsx)(r.FormattedMessage,{id:"inviteUserButton.requestMemberLabel",defaultMessage:"Add members"})})}):(0,f.jsx)(d.LazyPermissionsInviteWithModal,{disabled:!v,store:t,onInviteClick:k,onInviteComplete:C,isSubscribed:j,membersOnly:!1,upgradeButtonName:"space_permission_settings",shouldGrow:!1,enableInviteDropdown:y,origin:i,analyticsFrom:M})}},27177:(e,t,i)=>{i.d(t,{Z:()=>j});i(21703),i(67294);var n=i(83355),o=i(480),s=i(86628),r=i(24405),a=i(9291),c=i(32441),l=i(1357),d=i(52275),u=i(31945),p=i(46457),g=i(43250),m=i(88632),h=i(96071),b=i(30278),f=i(85974),x=i(91190),M=i(78861),S=i(85893);class v extends n.Z{constructor(){super(...arguments),this.storeTypes={loginStore:f.Z,loginPermissionsStore:b.Z,loginModalStore:h.Z}}UNSAFE_willMount(e){super.UNSAFE_willMount(e);const{loginStore:t}=this.stores;"email"===t.state.loginType&&this.environment.device.isMobile&&t.setState({...t.state,loginType:"google"})}renderComponent(){const{online:e}=m.Z.state,{device:t}=this.environment,{createType:i}=this.props,n=w(this.environment);return t.isMobile?(0,S.jsx)(u.ZP,{popupType:u.Z4.SlideUp,hidesMobileNativeBottomBar:n,preventSlideUpTransition:n,buttonPopupStore:"add-account"===i?x.C:x.E,alignmentToOrigin:u.vR.Start,placementToOrigin:u.pO.Top,originGap:0,isFullWidthOnMobile:!0,render:e=>(this.stores.loginModalStore.setState({open:!0}),(0,S.jsx)(C,{intl:this.props.intl,disableLoginLink:this.props.disableLoginLink,redirectURL:this.props.redirectURL,loginStore:this.stores.loginStore,loginModalStore:this.stores.loginModalStore,createType:i,onDismiss:()=>{w(this.environment)?l.d(this.environment,e.close):e.close()}})),preventScaleTransition:!0,renderOrigin:t=>(0,S.jsx)(d.Z,{focused:!1,disabled:!e,title:(0,S.jsx)(k,{createType:i}),icon:this.props.icon,...t})}):(0,S.jsxs)("div",{onClick:()=>{e&&(c.D6(this.environment,{createType:i}),M.Z.setState({...M.Z.getState(),createType:i}),this.stores.loginModalStore.setState({open:!0}))},children:[(0,S.jsx)(d.Z,{focused:!1,disabled:!e,title:(0,S.jsx)(k,{createType:i}),icon:this.props.icon}),(0,S.jsx)(C,{intl:this.props.intl,disableLoginLink:this.props.disableLoginLink,redirectURL:this.props.redirectURL,loginStore:this.stores.loginStore,loginModalStore:this.stores.loginModalStore,createType:i})]})}}v.displayName="SidebarSwitcherLoginModal";const j=(0,a.injectIntl)(v);function w(e){const{mobileNative:t}=e;return(null==t?void 0:t.supportsNativeHomeOnPhone())||!1}function y(e,t){const{device:i}=e;return{display:"flex",color:t.mediumTextColor,whiteSpace:"nowrap",fontSize:i.isMobile?16:12}}function k(e){let{createType:t}=e;const i=(0,r.Fg)(),n=(0,o.O7)();switch(t){case"create-work":return(0,S.jsx)("div",{style:y(n,i),children:(0,S.jsx)(a.FormattedMessage,{defaultMessage:"Create work account",id:"sidebarSwitcherMultiAccount.menuItem.createWorkAccountButton.label"})});case"add-account":return(0,S.jsx)("div",{style:y(n,i),children:(0,S.jsx)(a.FormattedMessage,{defaultMessage:"Add another account",id:"sidebarSwitcherMultiAccount.addAccountButton.label"})})}return null}function C(e){let{createType:t,onDismiss:i,intl:n,disableLoginLink:o,redirectURL:r,loginStore:c,loginModalStore:l}=e;const d=(0,s.qz)(l,h.Z),u=(0,s.qz)(c,f.Z);let m,b;switch(t){case"add-account":m=(0,S.jsx)(a.FormattedMessage,{id:"sidebarSwitcherMultiAccount.addAccount.title",defaultMessage:"Add an account"}),b=(0,S.jsx)(a.FormattedMessage,{id:"sidebarSwitcherMultiAccount.addAccount.description",defaultMessage:"Use an existing account, or sign up with a new email. Your current account will remain logged in."});break;case"create-work":m=(0,S.jsx)(a.FormattedMessage,{id:"sidebarSwitcherMultiAccount.createWork.title",defaultMessage:"Create a work account"}),b=(0,S.jsx)(a.FormattedMessage,{id:"sidebarSwitcherMultiAccount.createWork.description",defaultMessage:"We’ll check if your teammates are already on Notion. If not, we’ll create a new home for you and your team."});break;default:throw new Error(n.formatMessage({defaultMessage:"Unexpected createType in SidebarSwitcherMultiAccount",id:"sidebarSwitcherMultiAccount.errorMessage"}))}return(0,S.jsx)(p._,{loginModalStore:d,loginStore:u,title:m,description:b,disableLoginLink:o,className:g.zYS,redirectURL:r,onDismiss:i})}},20306:(e,t,i)=>{i.d(t,{Z:()=>I});i(67294);var n=i(480),o=i(86628),s=i(24405),r=i(45238),a=i(85893);const c=(0,r.IU)("addPersonOutline",{viewBox:"0 0 13 13",svg:(0,a.jsx)("path",{d:"M5.0625 5.89355C3.7627 5.89355 2.70996 4.74951 2.70996 3.34229C2.70996 1.95654 3.7627 0.855469 5.0625 0.855469C6.35156 0.855469 7.41504 1.97266 7.40967 3.35303C7.40967 4.75488 6.35693 5.89355 5.0625 5.89355ZM5.0625 4.96436C5.80908 4.96436 6.4375 4.26074 6.4375 3.35303C6.44287 2.4668 5.81445 1.78467 5.0625 1.78467C4.30518 1.78467 3.6875 2.45605 3.6875 3.34229C3.6875 4.25 4.31055 4.96436 5.0625 4.96436ZM6.26562 10.8887H1.71631C0.787109 10.8887 0.341309 10.5933 0.341309 9.96484C0.341309 8.49854 2.18359 6.52197 5.0625 6.52197C6.00244 6.52197 6.82959 6.73145 7.51172 7.0752C7.25391 7.28467 7.02295 7.52637 6.83496 7.80029C6.34082 7.58545 5.74463 7.45117 5.0625 7.45117C2.69385 7.45117 1.36182 8.99805 1.36182 9.81982C1.36182 9.92188 1.41016 9.95947 1.53906 9.95947H6.11523C6.12061 10.2871 6.16357 10.5771 6.26562 10.8887ZM9.64404 12.645C8.12939 12.645 6.87793 11.3989 6.87793 9.87891C6.87793 8.36963 8.12939 7.11816 9.64404 7.11816C11.1587 7.11816 12.4048 8.36426 12.4048 9.87891C12.4048 11.3882 11.1426 12.645 9.64404 12.645ZM9.64404 11.6353C9.86426 11.6353 10.0093 11.4849 10.0093 11.27V10.2495H11.0244C11.2446 10.2495 11.3896 10.1045 11.3896 9.88428C11.3896 9.65869 11.2446 9.51367 11.0244 9.51367H10.0093V8.49854C10.0093 8.27832 9.86426 8.1333 9.64404 8.1333C9.41846 8.1333 9.27881 8.28369 9.27881 8.49854V9.51367H8.2583C8.03809 9.51367 7.89307 9.65869 7.89307 9.88428C7.89307 10.1045 8.03809 10.2495 8.2583 10.2495H9.27881V11.27C9.27881 11.4849 9.41846 11.6353 9.64404 11.6353Z"})});var l=i(47453),d=i(18442),u=i(98519),p=i(9291),g=i(91376),m=i(64921),h=i(5145),b=i(89728),f=i(31278),x=i(26388),M=i(64369),S=i(39849),v=i(63134),j=i(4708),w=i(48779),y=i(77907),k=i(4023),C=i(80444);const Z=36,A=32;const I=function(e){let{id:t,onClick:i,focused:r,isAddButton:c,title:l,caption:d,shortcut:p,tooltipMessage:g,disableTooltip:b,disabled:f,showDragHandle:S,isCheck:v,removeDefaultMargin:w,icon:y,spaceName:C,unreadMentions:Z,right:A,from:I}=e;const F=(0,s.Fg)(),U=(0,n.O7)(),{device:R}=U,V=U.device.isMobile,B=(0,o.VK)((()=>{if("fork_page_modal"===I)return!1;const e=(0,j.u9)();return v&&("move"===e||"move_with_copy"===e)}),[v,I]);return(0,a.jsx)(x.ZP,{renderTooltip:()=>g,disableTooltip:b,placement:k.u.Bottom,render:e=>(0,a.jsx)(m.Z,{...e,mobileFeedback:U.device.isMobile,onClick:i,hovered:r,disabled:f,style:B?{display:"flex",flexDirection:"column",paddingTop:4,paddingBottom:4}:void 0,children:(0,a.jsxs)("div",{style:T(U,F,f,w,c,B),children:[S&&(0,a.jsx)(h.ZP,{iconSize:12,style:{marginLeft:-6,marginRight:4,visibility:c?"hidden":"visible"}}),c?(0,a.jsx)(O,{}):(0,a.jsx)(_,{id:t,icon:y,spaceName:C,unreadMentions:Z}),(0,a.jsxs)("div",{style:{marginLeft:12,marginRight:p||v?12:0,minWidth:0},children:[(0,a.jsx)(M.Z,{className:"notranslate",isMobile:R.isMobile,children:l}),d&&(0,a.jsx)(M.Z,{isSmall:!0,isMobile:R.isMobile,children:d}),B&&(0,a.jsx)(L,{})]}),v&&(0,u.k)({width:14,height:14,marginLeft:"auto"}),A,p&&!V&&!v&&(0,a.jsx)("div",{style:P(F),children:p})]})})},`sidebarswitchermenuitem-tooltip-${t}`)};function L(){const{currentSpaceStore:e,currentUserStore:t,renderPhase:i}=(0,o.VK)((()=>C.default.state),[]),n=(0,o.VK)((()=>{if(!e||(0,w.Cx)(e))return!1;const t=!e.canEditMembership()&&!e.getDisableMembershipRequests()&&(0,j.p1)();return e.canEditMembership()||t}),[e]),r=(0,s.yK)((e=>({container:{display:"inline-flex",alignSelf:"center",marginTop:4},button:{background:e.sidebarSwitcherSettingsBackground,border:"dark"===e.mode?`1px solid ${e.accentColors.translucentGray[200]}`:"none",color:e.sidebarSwitcherSettingsColor,fontSize:12,fontWeight:500,paddingLeft:10,paddingRight:10,marginRight:12},icon:{fill:e.sidebarSwitcherSettingsColor}})),[]);return e?(0,a.jsxs)("div",{style:r.container,children:[t&&"rendered"===i&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b.Z,{onClick:()=>{g.r$({openedFrom:"space_switcher"})},isGray:!0,icon:d.H,iconStyle:r.icon,style:r.button,children:(0,a.jsx)(p.FormattedMessage,{defaultMessage:"Settings",id:"sidebarSwitcherMultiAccount.menuItem.settingsButton.label"})}),(0,a.jsx)(y.LazySpaceSettings,{spaceStore:e,userStore:t},`${e.id}-${null==t?void 0:t.id}`)]}),n&&(0,a.jsx)(v.Z,{spaceStore:e,origin:(0,a.jsx)(b.Z,{isGray:!0,icon:c,style:r.button,children:(0,a.jsx)(p.FormattedMessage,{defaultMessage:"Add members",id:"sidebarSwitcherMultiAccount.menuItem.membersButton.label"})}),requestFrom:"space_switcher_add_members",inviteFrom:"space_switcher_share_modal"})]}):null}function _(e){let{id:t,icon:i,spaceName:o,unreadMentions:s}=e;const r=(0,n.O7)().device.isMobile;return(0,a.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,a.jsxs)("div",{style:{position:"relative"},children:[t&&(0,a.jsx)(f.Z,{disabled:!0,icon:i,isEmptyPage:!1,title:o,size:r?Z:A,isLarge:!0}),(0,a.jsx)(S.Z,{color:S.N.Red,count:s,style:{position:"absolute",top:-5,right:-5}})]})})}function T(e,t,i,n,o,s){const r=e.device.isMobile,{WindowSizeStore:a}=e,c=n?0:4;return{display:s?"inline-flex":"flex",alignItems:s?"start":"center",lineHeight:"120%",width:0===c?"100%":`$calc(100% - ${2*c}px)`,marginLeft:c,marginRight:c,borderRadius:4,paddingTop:r?8:4,paddingBottom:r?8:4,paddingLeft:r?a.getSafePaddingLeftCSS(16):14,paddingRight:r?a.getSafePaddingRightCSS(16):14,...r&&{boxShadow:`0 1px 0 ${t.regularDividerColor}`},marginBottom:n?0:1,fontSize:r?16:14,...r&&{background:t.popoverBackground},height:s?void 0:r?54:44,...o&&!r&&{boxShadow:"none",marginBottom:0},...i&&{opacity:.4}}}function F(e){return(0,l.R)({flexGrow:0,flexShrink:0,width:16,height:16,fill:e.popoverBackground})}function U(e){return{width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center",background:e.lightIconColor,borderRadius:4,flexShrink:0}}function P(e){return{color:e.lightTextColor,fontSize:12,whiteSpace:"nowrap",marginLeft:"auto",flexShrink:0}}function O(){const e=(0,s.Fg)(),t=(0,n.O7)().device.isMobile?Z:A;return(0,a.jsx)("div",{style:{...U(e),width:t,height:t},children:F(e)})}},58476:(e,t,i)=>{i.d(t,{LP:()=>pe,ZP:()=>de,rR:()=>ye,bM:()=>we});i(57658);var n=i(67294),o=i(480),s=i(86628),r=i(24405),a=i(16691),c=i(47453),l=i(606),d=i(89101),u=i(23867),p=i(77858),g=i(66079),m=i(9291),h=i(53965),b=i(87586),f=i(45238),x=i(85893);const M=(0,f.IU)("squarePlus",{viewBox:"0 0 30 30",svg:(0,x.jsx)("path",{d:"M7.059 27.052H22.94c2.75 0 4.11-1.361 4.11-4.059V7.007c0-2.697-1.36-4.059-4.11-4.059H7.059c-2.736 0-4.111 1.349-4.111 4.059v15.986c0 2.71 1.375 4.06 4.11 4.06zm.026-2.108c-1.31 0-2.03-.694-2.03-2.055V7.112c0-1.362.72-2.056 2.03-2.056h15.83c1.296 0 2.029.694 2.029 2.056v15.777c0 1.361-.733 2.055-2.03 2.055H7.085zm7.895-3.758c.707 0 1.113-.484 1.113-1.243V16.08h4.111c.733 0 1.231-.392 1.231-1.086 0-.707-.471-1.113-1.23-1.113h-4.112V9.769c0-.759-.406-1.243-1.113-1.243-.694 0-1.073.51-1.073 1.243v4.112H9.822c-.773 0-1.257.405-1.257 1.112 0 .694.523 1.087 1.257 1.087h4.085v3.863c0 .733.38 1.243 1.073 1.243z"})});var S=i(97213),v=i(66324),j=i(97977),w=i(70782),y=i(55081),k=i(97852),C=i(88632),Z=i(62967);const A=(0,m.defineMessages)({joinOrCreateWorkspace:{id:"sidebarSwitcherMultiAccount.singleAccountMenu.joinOrCreateWorkspace.label",defaultMessage:"Join or create workspace"},logOut:{id:"sidebarSwitcherMultiAccount.singleAccountMenu.logOut.label",defaultMessage:"Log out"}});function I(e){return(0,Z.cN)({key:"join or create a workspace",displayName:A.joinOrCreateWorkspace,analyticsName:A.joinOrCreateWorkspace.defaultMessage,svg:M,validators:[],closeParentMenu:!0,action:t=>{let{environment:i}=t;k.Z.reset(),i.currentUser.id!==e?w.x({environment:i,newCurrentUserId:e}).then((e=>{y.xN(e)})):y.xN(i)}})}function L(e){return(0,Z.cN)({key:"log out of a single account",displayName:A.logOut,analyticsName:A.logOut.defaultMessage,svg:b.B,validators:[],closeParentMenu:!0,action:t=>{let{environment:i}=t;const{online:n}=C.Z.state;n&&(j.logoutSingleAccount({environment:i,userId:e,logoutOrigin:S.F.SpaceSwitcher}),v.HY(i))}})}var _=i(36610),T=i(44975),F=i(32441),U=i(47307),P=i(29974),O=i(10259),R=i(13447),V=i(64921),B=i(52275),N=i(79131),E=i(88198),W=i(16354),K=i(78140),D=i(32163),z=i(40721),H=i(72495),G=i(1101),$=i(14694),q=i(33929),Y=i(28125),Q=i(60709),J=i(48779),X=i(5162),ee=i(80444),te=i(24042),ie=i(81236),ne=i(6258),oe=i(32856),se=i(24646),re=i(19034),ae=i(78861),ce=i(27177),le=i(20306);function de(e){const{parent:t,redirectURL:i,disableLoginLink:n,onSpaceClick:s,loginStore:r,loginPermissionsStore:a}=e;let c;const l=(0,o.O7)(),d=(0,o.Fy)(),u=l.currentUser.loggedInUserIds,p=(0,x.jsx)(me,{redirectURL:i,disableLoginLink:n,loginStore:r,loginPermissionsStore:a});return c=d.isMobile?{menuType:Q.og.Modal,title:(0,x.jsx)(m.FormattedMessage,{defaultMessage:"Accounts & Workspaces",id:"sidebarSwitcherMultiAccount.mobileMenu.title"}),right:(0,x.jsx)(z.DoneMenuText,{}),onClickRight:t.close}:{menuType:Q.og.Popup,minWidth:270,maxWidth:360,footer:p},(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(oe.D,{experimentId:"quick_workspace_creation",groups:{on:(0,x.jsx)(ue,{})}}),(0,x.jsxs)(K.Z,{...c,children:[u.map(((e,t)=>(0,x.jsx)(pe,{userId:e,isLastUser:t===u.length-1,onSpaceClick:s},e))),d.isMobile&&p]})]})}function ue(){const e=(0,o.O7)(),t=(0,r.yK)((e=>({button:{boxShadow:`0 -1px 0 ${e.regularDividerColor}`},sidebarItem:{color:e.mediumTextColor,height:45},plusIconContainer:{display:"flex",alignItems:"center",justifyContent:"center"},plusIcon:{fill:e.mediumIconColor,width:16,height:16}})),[]);return(0,x.jsx)(V.Z,{onClick:()=>function(e){k.Z.reset(),y.xN(e),_.iS(e)}(e),style:t.button,children:(0,x.jsx)($.Z,{style:t.sidebarItem,left:(0,x.jsx)("div",{style:t.plusIconContainer,children:(0,c.R)(t.plusIcon)}),children:(0,x.jsx)(m.FormattedMessage,{id:"sidebarSwitcherMultiAccount.singleAccountMenu.joinOrCreateWorkspace.label",defaultMessage:"Join or create workspace"})})})}function pe(e){const{userId:t,isLastUser:i,onSpaceClick:c,disableAccountActions:l,hideShortcuts:d}=e,p=(0,o.O7)(),g=(0,o.Fy)(),b=(0,r.yK)((e=>({menuListMobile:{paddingTop:10},menuListNotLast:{borderBottom:`1px solid ${e.lightDividerColor}`}})),[]),f=(0,s.VK)((()=>[...ae.Z.getSpaceViewStores(p,t).map((e=>e.pointer)).map((e=>({id:e.id,spaceId:(0,u.C)(e.spaceId)}))).map(a.vY),"create-workspace-row"]),[p,t]),{currentUserRootStore:M,currentSpaceStore:S}=(0,s.VK)((()=>ee.default.state),[]),{isElectronUsingCommandNumber:j}=(0,s.VK)((()=>te.Z.state),[]),w=(0,s.VK)((()=>ae.Z.getSpaceViewStores(p,t)),[p,t]),y=(0,s.VK)((()=>ae.Z.getAllSpaceViewStores(p)),[p]),k=(0,m.useIntl)(),Z=(0,s.VK)((()=>{if(!M||!S)return[];const e=[];for(const[i,n]of w.entries()){const i=n.getSpaceStore();if(i){const o=t===M.id&&i.id===S.id,{results:s}=re.Z.state,r=s.find((e=>e.spaceId===i.id)),a=h.cx(y,(e=>e.id===n.id))+1,l=(0,J.rn)(p,i),u=we(p,k,i),m=ye(p,k,i);e.push({key:n.id,render:e=>{const{online:n}=C.Z.state,s=!be({userId:t,environment:p})&&!g.isMobile;return(0,x.jsx)(le.Z,{...e,id:i.id,icon:(0,J.Wd)(p,i),spaceName:l,title:u,caption:m,isCheck:o,unreadMentions:t===p.currentUser.id&&r&&r.spaceId!==S.id&&r.unread.mentions>0?r.unread.mentions:void 0,showDragHandle:s,shortcut:d?void 0:ke({isElectronMac:g.isElectronMac,isElectronUsingCommandNumber:j,shortcutIndex:g.isElectron?a:void 0}),disabled:!n&&p.currentUser.id!==t,disableTooltip:!0,from:"sidebar_switcher"})},action:async e=>{let{event:t}=e;Me();ae.Z.isGuestWithZeroSharedPages(n)?je({environment:p,spaceViewStore:n}):(o||await c({event:t,spaceViewStore:n}),v.so(p))}})}}return e}),[y,S,M,g.isElectron,g.isElectronMac,g.isMobile,p,d,k,j,c,w,t]),A=0===Z.length?[]:[{key:"spaces",render:e=>(0,x.jsx)(H.Z,{...e,disableMobilePadding:!0,topBorder:g.isMobile,children:g.isMobile?e.children:(0,x.jsx)(n.Fragment,{children:(0,x.jsx)(N.ZP,{direction:"vertical",keys:f,renderKey:t=>e.children[f.indexOf(t)],onDrop:Se({userId:t,environment:p}),style:{marginBottom:1}})})}),items:Z}];return A.length>0?(0,x.jsxs)(n.Fragment,{children:[(0,x.jsx)(he,{userId:t,disableAccountActions:l}),(0,x.jsx)("div",{style:g.isMobile?b.menuListMobile:i?{}:b.menuListNotLast,children:(0,x.jsx)(D.Z,{type:D.i.Vertical,sections:A,initialFocus:void 0})})]},t):null}function ge(e){const{isMobile:t,theme:i}=e;return t?{}:{backgroundColor:i.sidebarSwitcherFooterBackground}}function me(e){const{redirectURL:t,disableLoginLink:i,loginStore:n,loginPermissionsStore:a}=e,c=(0,o.Fy)().isMobile,l=(0,r.yK)((e=>({footer:ge({isMobile:c,theme:e})})),[c]),d=(0,o.O7)(),u=(0,s.VK)((()=>ae.Z.hasAtLeastOneTeamPlan(d)),[d]),p=(0,x.jsxs)(x.Fragment,{children:[!u&&(0,x.jsx)(ce.Z,{createType:"create-work",redirectURL:t,disableLoginLink:i,loginStore:n,loginPermissionsStore:a}),!(0,X.Y)("supportsNativeHome")&&(0,x.jsx)(ce.Z,{createType:"add-account",redirectURL:t,disableLoginLink:i,loginStore:n,loginPermissionsStore:a})]});return(0,x.jsxs)("div",{style:l.footer,children:[(0,x.jsxs)(H.Z,{topBorder:!0,children:[Y.k(d)&&p,(0,x.jsx)(fe,{})]}),!c&&(0,x.jsx)(H.Z,{topBorder:!0,children:(0,x.jsx)(xe,{})})]})}function he(e){const{userId:t,disableAccountActions:i=!1}=e,{online:n}=(0,s.VK)((()=>C.Z.state),[]),r=(0,o.O7)(),a=(0,s.VK)((()=>ae.Z.getUserEmailAddress(r,t)),[r,t]);if(!a)return null;const c=i?[]:[I(t),L(t)];return(0,x.jsx)(G.Z,{emailAddress:a,userId:t,disabled:!n||i,accountActions:c})}function be(e){const{userId:t,environment:i}=e;return 1===(t?ae.Z.getSpaceViewStores(i,t):ae.Z.getAllSpaceViewStores(i)).length}function fe(){const e=(0,s.VK)((()=>C.Z.state.online),[]),t=(0,o.O7)(),i=t.device.isMobile,a=t.currentUser.loggedInUserIds.length>1,c=(0,r.yK)((e=>({accountAction:{display:"flex",color:e.mediumTextColor,whiteSpace:"nowrap",fontSize:i?16:12,paddingLeft:0}})),[i]),l=(0,n.useCallback)((()=>{const{online:e}=C.Z.state;e&&(k.Z.setState({...k.Z.state,open:!1}),v.HY(t),j.logout(t))}),[t]);return(0,x.jsx)(B.Z,{onClick:l,focused:!1,disabled:!e,title:(0,x.jsx)("div",{style:c.accountAction,children:(0,x.jsx)(m.FormattedMessage,{defaultMessage:"{isLoggedIntoMultipleAccounts, select, true {Log out all accounts} other {Log out}}",id:"sidebarSwitcherMultiAccount.menuItem.logoutAllButton.label",values:{isLoggedIntoMultipleAccounts:a}})})})}function xe(){const e=(0,o.O7)(),t=(0,o.Fy)(),i=t.isElectron,s=(0,r.yK)((e=>({title:{color:e.mediumTextColor,fontSize:12}})),[]),a=(0,n.useCallback)((()=>{Me(),t.isWindows?T.dy(e,{from:"sidebar",app_platform:"windows"}):T.dy(e,{from:"sidebar",app_platform:"mac"})}),[t.isWindows,e]),c=(0,n.useCallback)((()=>{Me(),T.YY(e,{from:"sidebar"})}),[e]);return i?(0,x.jsx)(W.Z,{external:!0,href:d.AR.mobile,onClick:c,children:(0,x.jsx)(B.Z,{focused:!1,title:(0,x.jsx)("div",{style:s.title,children:(0,x.jsx)(m.FormattedMessage,{defaultMessage:"Get iOS & Android app",id:"sidebarMultiSwitcher.desktopAppGetMobileApp.prompt"})})})}):(0,x.jsx)(W.Z,{external:!0,href:d.AR.desktop,onClick:a,children:(0,x.jsx)(B.Z,{focused:!1,title:(0,x.jsx)("div",{style:s.title,children:t.isWindows?(0,x.jsx)(m.FormattedMessage,{defaultMessage:"Get Windows app",id:"sidebarMultiSwitcher.windowsAppButton.text"}):(0,x.jsx)(m.FormattedMessage,{defaultMessage:"Get Mac app",id:"sidebarMultiSwitcher.macAppButton.text"})})})})}function Me(){k.Z.setState({...k.Z.state,open:!1})}function Se(e){const{userId:t,environment:i}=e;return function(e){const n=e.filter((e=>"create-workspace-row"!==e)).map(a.Vg).map((e=>l.dr.fromSpaceShardRecordId(e,p.zU))),o=new ne.r9(i,{table:g.dx,id:t},{userId:t});R.createAndCommit({userAction:"SidebarSwitcherMultiAccount.handleDraggableListDrop",environment:i,perform:e=>{P._Q({userRootStore:o,transaction:e,spaceViewIds:n.map((e=>e.id)),spaceViewPointers:n})},userId:t}),F.Q4(i,{workspace_count:e.length})}}const ve=(0,m.defineMessages)({noAccessAsGuest:{defaultMessage:"You no longer have access to this workspace.",id:"SidebarSwitcherMultiAccountPopup.noAccessAsGuest.label"}});function je(e){let{environment:t,spaceViewStore:i}=e;U.showMessage({message:q.default.formatMessage(ve.noAccessAsGuest),onAccept:()=>{O.ni({environment:t,spaceViewStore:i})}})}function we(e,t,i){const n=(0,J.rn)(e,i),o=ie.Z.getData(e,{spaceId:i.id});return o&&"none"===o.role?(0,x.jsxs)("div",{style:{display:"flex"},children:[(0,x.jsx)("span",{style:{flexShrink:1,textOverflow:"ellipsis",overflow:"hidden"},children:n}),(0,x.jsx)("div",{style:{marginLeft:"8px",alignSelf:"center"},children:(0,x.jsx)(E.b,{})})]}):n}function ye(e,t,i){const n=ie.Z.getData(e,{spaceId:i.id});if(!n||"none"===n.role)return;const o=(0,se.em)(n.subscriptionTier),s=t.formatNumber(n.memberCount),r=t.formatMessage(o);return t.formatMessage(se.js.workspaceSubtitleWithMembers,{numberOfWorkspaceMembers:s,planType:r})}function ke(e){if(e.shortcutIndex&&!(e.shortcutIndex>9))return e.isElectronMac?e.isElectronUsingCommandNumber?`⌃⇧${e.shortcutIndex}`:`⌘${e.shortcutIndex}`:e.isElectronUsingCommandNumber?`alt+shift+${e.shortcutIndex}`:`ctrl+${e.shortcutIndex}`}},91190:(e,t,i)=>{i.d(t,{C:()=>s,E:()=>o});var n=i(61766);const o=new n.Z,s=new n.Z},30278:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(49085);class o extends n.default{getInitialState(){return{contacts:!1}}}const s=o}}]);