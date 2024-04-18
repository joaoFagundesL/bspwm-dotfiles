"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[2127],{22127:(e,t,o)=>{o.r(t),o.d(t,{default:()=>tt,handleMobileSearchInputClick:()=>ct});o(57658);var n=o(67294),r=o(480),l=o(86628),a=o(24405),i=o(15145),s=o(92996),c=o(99036),d=o(80951),u=o(43690),p=o(1800),g=o(77657),y=o(42875),h=o(59054),S=o(47453),m=o(21202),P=o(3791),f=o(9291),v=o(7032),b=o(36610),R=o(8406),C=o(952),M=o(54642),x=o(893),k=o(47307),I=o(8055),F=o(993),w=o(13447),j=o(61202),D=o(54428),_=o(52275),V=o(36488),Z=o(68894),L=o(78140),O=o(53437),T=o(31278),B=o(76798),U=o(72495),G=o(46247),E=o(9897),K=o(66890),Q=o(97978),A=o(70764),N=o(75079),q=o(65183),H=o(33929),W=o(60709),z=o(70219),Y=o(29376),$=o(18514),X=o(18245),J=o(75822),ee=o(80444),te=o(77080),oe=o(30874),ne=o(6258),re=o(88280);const le=(0,f.defineMessages)({syncedCollectionInputPlaceholder:{defaultMessage:"Link a page",id:"relationPropertyMenuInput.syncedCollection.searchPlaceholder"},connectedRelationInputPlaceholder:{defaultMessage:"Find a page",id:"relationPropertyMenuInput.connectedRelation.searchPlaceholder"},connectedRelationGoogleDriveInputPlaceholder:{defaultMessage:"Paste in Google Drive or Google Docs link",id:"relationPropertyMenuInput.connectedRelationGoogleDrive.searchPlaceholder"},connectedRelationFigmaInputPlaceholder:{defaultMessage:"Paste in https://figma.com/...",id:"relationPropertyMenuInput.connectedRelationFigma.searchPlaceholder"},connectedRelationGithubInputPlaceholder:{defaultMessage:"Paste in https://github.com/...",id:"relationPropertyMenuInput.connectedRelationGithub.searchPlaceholder"}}),ae=(0,f.defineMessages)({inputPlaceholderEditable:{defaultMessage:"Link or create a page…",id:"relationPropertyMenuInput.placeholder.defaultEditable"},inputPlaceholderUneditable:{defaultMessage:"Search linked pages…",id:"relationPropertyMenuInput.placeholder.defaultUneditable"}}),ie=(0,f.defineMessages)({inputPlaceholder:{defaultMessage:"Search...",id:"relationPropertyMenuInput.placeholder.sprint"}});function se(e){let{connectedRelationFlags:t,overlayMode:o,disabled:n}=e;const r=function(e){const{isSyncedCollectionRelation:t,isGithubPrRelation:o,isGoogleDriveRelation:n,isFigmaRelation:r,isConnectedRelation:l}=e;if(t)return le.syncedCollectionInputPlaceholder;if(o)return le.connectedRelationGithubInputPlaceholder;if(n)return le.connectedRelationGoogleDriveInputPlaceholder;if(r)return le.connectedRelationFigmaInputPlaceholder;if(l)return le.connectedRelationInputPlaceholder}(t);return r||("view"===(null==o?void 0:o.type)||n?ae.inputPlaceholderUneditable:ae.inputPlaceholderEditable)}o(21703);var ce=o(68626),de=o(52629),ue=o(77907),pe=o(51741);async function ge(e){let{environment:t,query:o,targetCollectionStore:n,propertySchema:r,blockPointers:l}=e;try{const e=await ue.deps.searchActions.loader(),{results:a}=await e.searchPagesInCollection({environment:t,query:o.query,collectionId:n.id,limit:o.limit,spaceId:n.getSpaceId(),excludeTemplates:!0,source:"relation_menu",includePublicPagesWithoutExplicitAccess:!0,boostRecentlyViewedPages:!0,ignoresHighlight:!0});return ye({results:a,targetCollectionStore:n,propertySchema:r,blockPointers:l})}catch(a){return ce.log({level:"error",from:"relationPropertySearchRequest",type:"performDefaultSearchRequest",error:(0,de.Ui)(a)}),[]}}function ye(e){let{results:t,targetCollectionStore:o,propertySchema:n,blockPointers:r}=e;const l=new Set(r.map((e=>e.id))),a=[];return t.forEach((e=>{const t={spaceId:o.getSpaceId(),id:e,table:m.iU},r=(0,q.dN)({targetCollectionStore:o,propertySchema:n,pointer:t});if(l.has(e)){const o={key:e,type:pe.Rt.SelectedPage,pointer:t};a.push({pageResult:o,canEdit:r})}else{const o={key:e,type:pe.Rt.SearchPage,pointer:t};a.push({pageResult:o,canEdit:r})}})),a}var he=o(85893);const Se=(0,n.createContext)(void 0);function me(e){const{children:t,relationPropertyMenuStore:o,targetCollectionStore:r,propertySchema:l,targetParentUrl:a,connectedRelationFlags:i}=e,[s,c]=(0,n.useState)(!1),d=(0,n.useMemo)((()=>({relationPropertyMenuStore:o,targetCollectionStore:r,propertySchema:l,targetParentUrl:a,connectedRelationFlags:i,isSearchLoading:s,setIsSearchLoading:c})),[o,r,l,a,i,s,c]);return(0,he.jsx)(Se.Provider,{value:d,children:t})}Se.displayName="RelationPropertyMenuContext";var Pe=o(30926),fe=o(37810),ve=o(74194),be=o(84076);function Re(e){const{showTargetDatabase:t,inputPlaceholder:o,addPage:i}=e,{analyticsFrom:s,collectionStore:c,blockPropertyValueOverlayStore:d,blockStore:u,insertChar:p}=(0,n.useContext)(D.m),g=(0,n.useContext)(Se),y=(0,r.O7)(),h=(0,r.Fy)(),{searchQuery:S,searchPopupOpen:m}=(0,l.VK)((()=>(null==g?void 0:g.relationPropertyMenuStore.state)??{searchQuery:p??"",searchPopupOpen:!1}),[null==g?void 0:g.relationPropertyMenuStore,p]),P=(0,l.VK)((()=>null==g?void 0:g.targetCollectionStore.getIcon()),[null==g?void 0:g.targetCollectionStore]),v=(0,a.yK)((e=>({regular:{color:e.mediumTextColor,whiteSpace:"nowrap",marginLeft:4},headerWrap:{display:"flex",width:"100%",position:"relative",zIndex:2,padding:"6px 10px",fontSize:14,background:e.inputBackground,boxShadow:`\n\t\t\t\t\t0 1px 0 ${e.darkDividerColor}\n\t\t\t\t`},recordTitle:{fontWeight:fe.Z.fontWeight.semibold,fontSize:14,marginLeft:pe.Qi*(h.isRetina?.5:1)},searchIcon:{fill:e.mediumIconColor,width:14,height:14,marginRight:10},input:{flexGrow:1},targetDatabase:{display:"flex",marginLeft:10,alignItems:"center"},linkBoxOuterStyle:{marginLeft:pe.Qi},linkBoxInnerStyle:{display:"flex"}})),[h.isRetina]);if(!(c&&u&&d&&g))return null;const{relationPropertyMenuStore:R,targetCollectionStore:C,targetParentUrl:M}=g,x=o?H.default.formatMessage(o):void 0;return(0,he.jsxs)("div",{style:v.headerWrap,children:[(0,he.jsx)(ve.Z,{style:v.input,value:S,placeholder:x,forceShowClearButton:Boolean(S||m),focus:!0,onChange:e=>{const t=e.target.value;R.setState({...R.state,searchQuery:t,searchPopupOpen:!!t,searchLimit:Pe.Z.limitIncrement})},onClearButtonClick:()=>{R.setState(R.getInitialState())},onClick:()=>{R.setState({...R.state,searchQuery:S,searchPopupOpen:!0,searchLimit:Pe.Z.limitIncrement})},onKeyDown:e=>{"Escape"===e.key&&R.setState(R.getInitialState())},format:ve.B.Transparent,onSubmit:()=>{const e=C.getFormat().integration_id,t=oe.Z.integrations.state.find((t=>t.id===e)),o=C.getFormat().pattern_name;if(!t||!o)return;(0,Y.DB)({integration:t,patternName:o,url:S})&&i()}}),t&&(0,he.jsx)("div",{style:v.targetDatabase,children:(0,he.jsx)(f.FormattedMessage,{id:"database.relationProperty.newRelation.targetDatabase",defaultMessage:"<regular>In</regular> {databaseWithIcon}",values:{regular:e=>(0,he.jsx)("span",{style:v.regular,children:e}),databaseWithIcon:(0,he.jsxs)(be.Z,{href:M,style:v.linkBoxOuterStyle,innerStyle:v.linkBoxInnerStyle,onClick:()=>{s&&b.ZZ(y,{from:s})},children:[(0,he.jsx)(T.Z,{disabled:!0,icon:P,isEmptyPage:!1,size:pe.WO}),(0,he.jsx)(B.Z,{store:C,underline:!0,style:v.recordTitle})]})}})})]})}o(30541);var Ce=o(83355),Me=o(53965),xe=o(60971),ke=o(14473),Ie=o(79131),Fe=o(68785),we=o(32163),je=o(53336),De=o(43145),_e=o(26388),Ve=o(28463),Ze=o(75203),Le=o(73744),Oe=o(98742),Te=o(34859),Be=o(45452),Ue=o(29798),Ge=o(59674);class Ee extends Ce.Z{constructor(){super(...arguments),this.storeTypes={menuListStore:Ue.Z,draggableListStore:Be.Z},this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_handleDraggableListDrop=(e,t)=>$e(e,t,this.stores.menuListStore,this.props.onDrag)}didUpdate(e){const{menuListStore:t}=this.stores,{device:o}=this.environment;!this.props.searchQuery||Me.Xy(e.searchQuery,this.props.searchQuery)||o.isMobile||t.setState({...t.state,focus:{section:0,indexLocal:0,indexGlobal:0}})}renderComponent(){const{device:e}=this.environment;return e.isMobile?(0,he.jsx)(et,{relationPropertyMenuResultProps:this.props,menuListStore:this.stores.menuListStore,draggableListStore:this.stores.draggableListStore}):(0,he.jsx)(Je,{relationPropertyMenuResultProps:this.props,menuListStore:this.stores.menuListStore,draggableListStore:this.stores.draggableListStore})}}function Ke(){return(0,he.jsx)("div",{style:{height:"100%",padding:pe.wI,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,he.jsx)(Fe.Z,{style:{margin:"0 auto"}})})}function Qe(e){const{collectionStore:t,targetCollectionStore:o,property:n,showRight:r,disabled:a,style:i}=e,s=(0,l.VK)((()=>o.isSyncedCollection()),[o]),d=(0,l.VK)((()=>{const e=t.getSchema()[n];return Boolean(e&&c.NK(e))}),[t,n]);return(0,he.jsx)(U.Z,{...e,noTextOverflow:!0,isTitleUppercase:!1,right:r&&!s&&!d&&(0,he.jsx)(Ze.default,{collectionStore:t,targetCollectionStore:o,property:n,disabled:a}),style:{paddingTop:0,paddingBottom:4,...i},desktopTitleStyle:{height:19,alignItems:"center",marginTop:6,marginBottom:6,paddingLeft:12,paddingRight:9}})}Ee.displayName="RelationPropertyMenuResults",Ee.messages=(0,f.defineMessages)({noEditAccessForUnselectedRelation:{id:"collectionsRelationsPicker.noEditAccessForUnselectedRelation",defaultMessage:"Edit access required to add."},noEditAccessForSelectedRelation:{id:"collectionsRelationsPicker.noEditAccessForSelectedRelation",defaultMessage:"Edit access required to remove."}});const Ae=Ee;function Ne(e,t){const o=t[e];return Boolean(o&&"relation"===o.type&&1===o.limit)}function qe(e){const{result:t,pointer:o,environment:n,relationPropertyMenuResultProps:r,canDragRow:l,tooltipMessage:a}=e,{disabled:i,parentStore:s,collectionStore:c,targetCollectionStore:d,onAccept:u,property:p,schema:g,blockPropertyValueOverlayStore:y,onClickActionButton:h}=r,S=ne.G.createChildStore(s,o);return{key:S.id,render:e=>(0,he.jsx)(_e.ZP,{disableTooltip:t.canEdit,renderTooltip:()=>H.default.formatMessage(a),render:r=>(0,he.jsx)(ue.LazyRelationMenuRow,{...e,canDrag:l,collectionStore:c,targetCollectionStore:d,relatedPageStore:S,disabled:i||!t.canEdit,isSelected:t.pageResult.type===pe.Rt.SelectedPage,pageStore:s,property:p,rowType:"popup",onActionButtonClick:()=>h(t.pageResult),blockPropertyValueOverlayStore:y,propertyLimit:Ne(p,g)?1:void 0,onOpenPageButtonClick:()=>{ke.O([o],S,n,"relation_property")},...(0,Oe.Z)(e,r)}),textWrap:!0}),action:e=>{u(t.pageResult,Le.DJ(e.event))}}}function He(e){const{canDrag:t,property:o,schema:n,totalRelatedPages:r}=e;return t&&!Ne(o,n)&&r>1}function We(e){const{numRelatedPages:t,integrationId:o,property:n,schema:r}=e;return Ne(n,r)?(0,he.jsx)(f.FormattedMessage,{id:"database.relationProperty.relatedPages.limit.subHeader",defaultMessage:"Linked page"}):o===g.f3||o===g.mQ?(0,he.jsx)(f.FormattedMessage,{id:"database.relationProperty.relatedGoogleDriveOrFigmaFiles.subHeader",defaultMessage:"{count, plural, one {{count} linked file} other {{count} linked files}}",values:{count:t}}):o===g.U9?(0,he.jsx)(f.FormattedMessage,{id:"database.relationProperty.relatedGithubPages.subHeader",defaultMessage:"{count, plural, one {{count} linked PR} other {{count} linked PRs}}",values:{count:t}}):(0,he.jsx)(f.FormattedMessage,{id:"database.relationProperty.relatedPages.subHeader",defaultMessage:"{count, plural, one {{count} linked page} other {{count} linked pages}}",values:{count:t}})}function ze(e){const{loading:t,numRelatedPages:o,numUnrelatedPages:n}=e;if(!t)return 0===n?(0,he.jsx)(f.FormattedMessage,{id:"database.relationProperty.noResults.subHeader",defaultMessage:"No results"}):0===o?(0,he.jsx)(f.FormattedMessage,{id:"database.relationProperty.unrelatedPages.subHeader",defaultMessage:"Link a page"}):(0,he.jsx)(f.FormattedMessage,{id:"database.relationProperty.unrelatedPages.anotherPage.subHeader",defaultMessage:"Link another page"})}function Ye(e){const{targetCollectionStore:t,collectionStore:o,property:n,canConfigureCollection:r,numRelatedPages:l,handleClearProperty:a,overlayMode:i,index:s,blockPropertyValueOverlayStore:c}=e;return{key:"backlog",render:e=>(0,he.jsx)(Qe,{...e,collectionStore:o,targetCollectionStore:t,property:n,showRight:0===l||"add"===(null==i?void 0:i.type),disabled:!r,style:{paddingBottom:0,paddingTop:0}}),items:[{key:"sprints_backlog",render:e=>(0,he.jsx)(Ve.Z,{focused:e.focused,onMouseEnter:e.onMouseEnter,targetCollectionStore:t,onClick:a,isSection:!1,index:s,blockPropertyValueOverlayStore:c}),action:()=>{a&&a()}}]}}function $e(e,t,o,n){n&&n(e),xe.sv({store:o,focus:{section:0,indexLocal:t.endPosition,indexGlobal:t.endPosition}})}function Xe(e){let{relationPropertyMenuResultProps:t,menuListStore:o,draggableListStore:a}=e;const{results:i,onDrag:c,parentStore:d,collectionStore:u,targetCollectionStore:p,property:g,canDrag:y,canConfigureCollection:h,loading:S,onCreatePage:m,overlayMode:P,disabled:f,schema:v,searchQuery:b,index:R,handleClearProperty:C,blockPropertyValueOverlayStore:M,relationPropertyMenuStore:x,addPage:k,addingPage:I}=t,F=(0,r.O7)(),w=(0,n.useCallback)(((e,t)=>$e(e,t,o,c)),[o,c]),{device:j}=F,D=(0,l.VK)((()=>function(e){return e.getDatabaseType()===s.p$?{getCanDragRow:()=>!1,getRelatedSectionHeaderTitle:()=>{},getUnrelatedSectionHeaderTitle:()=>{},getFooterSection:Ye}:{getCanDragRow:He,getRelatedSectionHeaderTitle:We,getUnrelatedSectionHeaderTitle:ze,getFooterSection:()=>{}}}(p)),[p]),_=v[g],V=Boolean("relation"===(null==_?void 0:_.type)&&_.connectedRelation),[Z,L]=(0,l.VK)((()=>{const e=[],o=[],n=i.filter((e=>{let{pageResult:t}=e;return t.type===pe.Rt.SelectedPage})).length;for(const r of i)if(r.pageResult.type===pe.Rt.SearchPage){ne.G.createChildStore(d,r.pageResult.pointer).isTemplate()||o.push(qe({environment:F,result:r,pointer:r.pageResult.pointer,relationPropertyMenuResultProps:t,canDragRow:!1,tooltipMessage:Ee.messages.noEditAccessForUnselectedRelation}))}else if(r.pageResult.type===pe.Rt.SelectedPage){const o=D.getCanDragRow({canDrag:y,property:g,schema:v,totalRelatedPages:n});e.push(qe({environment:F,result:r,pointer:r.pageResult.pointer,relationPropertyMenuResultProps:t,canDragRow:o,tooltipMessage:Ee.messages.noEditAccessForSelectedRelation}))}return[e,o]}),[F,i,d,t,y,v,D,g]),O=(0,l.VK)((()=>p.getFormat().integration_id),[p]),T=D.getRelatedSectionHeaderTitle({numRelatedPages:Z.length,integrationId:O,property:g,schema:v}),B=[];if(Z.length>0){const e=Z.map((e=>e.key.toString()));B.push({key:"results",render:t=>(0,he.jsx)(Qe,{...t,title:T,collectionStore:u,targetCollectionStore:p,property:g,showRight:"add"!==(null==P?void 0:P.type),disabled:!h,style:{paddingBottom:void 0===T?0:4},children:y&&!Ne(g,v)&&e.length>1?(0,he.jsx)(Ie.ZP,{direction:"vertical",keys:e,renderKey:o=>t.children[e.indexOf(o)],onDrop:w,store:a}):t.children}),items:Z})}if(!V&&(0===L.length&&0===Z.length||L.length>0)){const e=D.getUnrelatedSectionHeaderTitle({loading:S,numRelatedPages:Z.length,numUnrelatedPages:L.length}),t=!S&&0===L.length&&!j.isMobile&&!V&&b;let o;t&&L.push({key:"empty",render:e=>(0,he.jsx)(E.Z,{targetCollectionStore:p,title:b||"",focused:e.focused,onClick:m,isSection:!1,index:R}),action:()=>{m&&m()}}),(t||void 0===e)&&(o={paddingBottom:0});const n={key:"unrelated",render:t=>(0,he.jsx)(Qe,{...t,title:e,collectionStore:u,targetCollectionStore:p,property:g,showRight:0===Z.length||"add"===(null==P?void 0:P.type),disabled:!h,style:o}),items:L};"add"===(null==P?void 0:P.type)?B.unshift(n):B.push(n)}if(!j.isMobile&&Z.length>0&&!f){const e=D.getFooterSection({targetCollectionStore:p,collectionStore:u,property:g,canConfigureCollection:h,numRelatedPages:Z.length,handleClearProperty:C,overlayMode:P,index:R,blockPropertyValueOverlayStore:M});e&&B.push(e)}return V?(0,he.jsx)(Ge.c,{blockPropertyValueOverlayStore:M,collectionStore:u,targetCollectionStore:p,sections:B,propertySchema:_,property:g,pageRecordStore:d,search:b,relationPropertyMenuStore:x,addPage:k,addingPage:I}):(0,he.jsx)(we.Z,{type:we.i.Vertical,store:o,style:{padding:"4px 0px"},initialFocus:F.device.isMobile?void 0:0,sections:B})}function Je(e){let{relationPropertyMenuResultProps:t,menuListStore:o,draggableListStore:r}=e;const{results:l,loading:a,onScrollOffsetChange:i}=t,s=0===l.length;return(0,he.jsx)(n.Fragment,{children:(0,he.jsxs)(je.Z,{style:{width:"100%",maxHeight:300,position:"relative",...s&&{marginTop:0}},type:Te.Z.Y,children:[(0,he.jsx)(Xe,{relationPropertyMenuResultProps:t,menuListStore:o,draggableListStore:r}),a&&(0,he.jsx)(Ke,{}),i&&(0,he.jsx)(De.Z,{onChange:i})]})})}function et(e){let{relationPropertyMenuResultProps:t,menuListStore:o,draggableListStore:r}=e;const{results:l,loading:a,resultsType:i,schema:s,property:c,blockPropertyValueOverlayStore:d,collectionStore:u,targetCollectionStore:p,parentStore:g,searchQuery:y,relationPropertyMenuStore:h,addPage:S,addingPage:m}=t,P=0===l.length,f=s[c];return Boolean("relation"===(null==f?void 0:f.type)&&f.connectedRelation)&&P?(0,he.jsx)("div",{style:{marginTop:20},children:(0,he.jsx)(Ge.c,{blockPropertyValueOverlayStore:d,collectionStore:u,targetCollectionStore:p,sections:[],propertySchema:f,property:c,pageRecordStore:g,search:y,relationPropertyMenuStore:h,addPage:S,addingPage:m})}):(0,he.jsxs)(n.Fragment,{children:[P&&!a&&"existing"===i?void 0:(0,he.jsx)(Xe,{relationPropertyMenuResultProps:t,menuListStore:o,draggableListStore:r}),a&&(0,he.jsx)(Ke,{})]})}function tt(){const{collectionStore:e,blockStore:t,schema:o,property:a}=(0,n.useContext)(D.m),i=(0,r.O7)(),u=(0,n.useMemo)((()=>new Pe.Z),[]),g=(0,l.VK)((()=>function(e){const{environment:t,collectionStore:o,blockStore:n,schema:r,property:l}=e;if(!n||!o)return;const a=r[l];if("relation"!==(null==a?void 0:a.type))return;const i=c.j0(a);if(!i)return;const s=ne.NW.createChildStore(n,i);if(!s)return;const u=s.getParentId();if(!u)return;const g=ne.G.createChildStore(s,{table:m.iU,id:u});if(!g)return;const y=(0,z.b)(t),h=g.isDefined()?y(g.getSpaceId()):void 0,S=(0,p.Z)({pageId:g.id,pageModel:g.getModel(),baseUrl:h,pageVisitSource:void 0});return{propertySchema:a,targetCollectionStore:s,targetParentUrl:S,connectedRelationFlags:{isSyncedCollectionRelation:s.isSyncedCollection(),isGithubPrRelation:d.Kp(a),isGoogleDriveRelation:d.gg(a),isFigmaRelation:d.ic(a),isZendeskRelation:d.U8(a),isConnectedRelation:c.NK(a)}}}({environment:i,collectionStore:e,blockStore:t,schema:o,property:a})),[i,e,t,o,a]);if(!g)return null;const{propertySchema:y,targetCollectionStore:h,targetParentUrl:S,connectedRelationFlags:P}=g;return(0,he.jsx)(me,{relationPropertyMenuStore:u,propertySchema:y,targetCollectionStore:h,targetParentUrl:S,connectedRelationFlags:P,children:(0,he.jsx)(V.Z,{capture:!0,allowMenuList:!0,allowEsc:!0,allowUndo:!0,allowTabUntab:!0,render:()=>{const{getSearchResults:e,getInputPlaceholderText:t,showFooterInViewMode:o,showTargetDatabase:n}=function(e){const t=e.getDatabaseType();if(t===s.p$)return gt;return yt}(h);return(0,he.jsx)(ot,{getSearchResults:e,getInputPlaceholderText:t,showFooterInViewMode:o,showTargetDatabase:n})}})})}function ot(e){const{getSearchResults:t,getInputPlaceholderText:o,showFooterInViewMode:a,showTargetDatabase:i}=e,{blockStore:s,blockPropertyValueOverlayStore:c,collectionStore:d,overlayMode:u,isDisabled:p,schema:g,property:y,insertChar:S}=(0,n.useContext)(D.m),m=(0,n.useContext)(Se),P=(0,r.O7)(),f=(0,r.Fy)(),v=(0,l.VK)((()=>null==m?void 0:m.relationPropertyMenuStore),[null==m?void 0:m.relationPropertyMenuStore]),b=it();(0,n.useEffect)((()=>{v&&0===b.length&&v.setState({searchPopupOpen:f.isMobile,searchQuery:S??"",searchLimit:Pe.Z.limitIncrement,addingPage:!1})}),[]);const R=function(e){const{blockPointers:t,isDisabled:o}=(0,n.useContext)(D.m),a=(0,n.useContext)(Se),i=(0,r.O7)(),s=(0,l.VK)((()=>(null==a?void 0:a.relationPropertyMenuStore.state.searchQuery)??""),[null==a?void 0:a.relationPropertyMenuStore]),c=(0,l.VK)((()=>(null==a?void 0:a.relationPropertyMenuStore.state.searchLimit)??0),[null==a?void 0:a.relationPropertyMenuStore]);null==a||a.setIsSearchLoading(!0);const[{value:d}]=(0,h.r5)((async()=>{if(o)return[];if(null==a||!a.propertySchema||null==a||!a.targetCollectionStore||!c)return[];if(null!=a&&a.connectedRelationFlags.isGoogleDriveRelation||null!=a&&a.connectedRelationFlags.isFigmaRelation)return[];return await e({environment:i,query:{query:s,limit:c},targetCollectionStore:null==a?void 0:a.targetCollectionStore,propertySchema:null==a?void 0:a.propertySchema,blockPointers:t})}),[i,t,o,null==a?void 0:a.connectedRelationFlags,null==a?void 0:a.propertySchema,null==a?void 0:a.targetCollectionStore,e,s,c],{debounce:J.vp});return null==a||a.setIsSearchLoading(!1),d}(t);return m&&v&&d&&g&&s&&c?f.isMobile?(0,he.jsx)(nt,{children:(0,he.jsx)(at,{searchResults:R})}):(0,he.jsx)(rt,{header:(0,he.jsx)(Re,{inputPlaceholder:o({connectedRelationFlags:m.connectedRelationFlags,overlayMode:u,disabled:p}),showTargetDatabase:i,addPage:()=>st({environment:P,collectionStore:d,menuStore:v,blockPropertyValueOverlayStore:c,blockStore:s,schema:g,property:y,targetCollectionStore:m.targetCollectionStore})}),footer:(0,he.jsx)(lt,{searchResultsLength:(null==R?void 0:R.length)??0,showFooterInViewMode:a}),children:(0,he.jsx)(at,{searchResults:R})}):null}function nt(e){const{children:t}=e,{collectionStore:o,property:i,schema:s,blockStore:c,blockPropertyValueOverlayStore:d,isDisabled:u,canConfigureCollection:p,blockPointers:y,analyticsFrom:h,overlayMode:m,onChange:P,onDismiss:v}=(0,n.useContext)(D.m),R=(0,n.useContext)(Se),C=(0,r.O7)(),M=(0,K.Y$)(),x=it(),k=(0,a.yK)((e=>({input:{color:e.mediumTextColor},menuTitle:{display:"flex"},databaseIcon:{display:"flex",marginLeft:2*pe.Qi},databaseTitle:{marginLeft:pe.Qi},addPageButton:{display:"flex",alignItems:"center"},plusIcon:{marginRight:8,width:16,height:16}})),[]),F=(0,l.VK)((()=>null==R?void 0:R.targetCollectionStore.getIcon()),[null==R?void 0:R.targetCollectionStore]),w=(0,l.VK)((()=>{const e=Boolean(oe.Z.bots.state.find((e=>e.integration_id===g.U9))),t=Boolean(oe.Z.bots.state.find((e=>e.integration_id===g.f3))),o=Boolean(oe.Z.bots.state.find((e=>e.integration_id===g.mQ)));return(null==R?void 0:R.connectedRelationFlags.isGithubPrRelation)&&!e||(null==R?void 0:R.connectedRelationFlags.isGoogleDriveRelation)&&!t||(null==R?void 0:R.connectedRelationFlags.isFigmaRelation)&&!o}),[null==R?void 0:R.connectedRelationFlags.isGithubPrRelation,null==R?void 0:R.connectedRelationFlags.isGoogleDriveRelation,null==R?void 0:R.connectedRelationFlags.isFigmaRelation]),j=(0,l.VK)((()=>Boolean(null==R?void 0:R.relationPropertyMenuStore.state.addingPage)),[null==R?void 0:R.relationPropertyMenuStore]),V=(0,l.VK)((()=>Boolean(null==R?void 0:R.relationPropertyMenuStore.state.searchPopupOpen)),[null==R?void 0:R.relationPropertyMenuStore]);if(!(o&&c&&d&&R))return null;const{relationPropertyMenuStore:Z,propertySchema:G,targetCollectionStore:E,targetParentUrl:Q,connectedRelationFlags:{isConnectedRelation:A}}=R,N=(0,he.jsx)("div",{style:k.menuTitle,children:(0,he.jsx)(f.FormattedMessage,{id:"database.relationProperty.newRelation.targetDatabase",defaultMessage:"<regular>In</regular> {databaseWithIcon}",values:{regular:e=>e,databaseWithIcon:(0,he.jsxs)("div",{style:k.databaseIcon,children:[(0,he.jsx)(T.Z,{disabled:!0,icon:F,isEmptyPage:!1,size:pe.WO}),(0,he.jsx)(B.Z,{store:E,underline:!0,style:k.databaseTitle})]})}})});return(0,he.jsxs)(L.Z,{menuType:W.og.Modal,title:G.name,right:(0,he.jsx)(f.FormattedMessage,{defaultMessage:"Done",id:"relationPropertyMenu.mobileMenuDone.button"}),onClickRight:v,children:[!A&&(0,he.jsx)(U.Z,{disableMobilePadding:!0,children:(0,he.jsx)(_.Z,{focused:!1,title:N,showExtensionArrow:!1,onClick:()=>function(e){const{environment:t,targetParentUrl:o,analyticsFrom:n}=e;I.c4({environment:t,url:o}),n&&b.ZZ(t,{from:n})}({environment:C,targetParentUrl:Q,analyticsFrom:h})})}),!w&&(0,he.jsx)(U.Z,{topBorder:!0,disableMobilePadding:!1,children:(0,he.jsx)(O.GI,{popupType:O.kQ.SlideUp,open:V,origin:(0,he.jsx)(_.Z,{focused:!1,title:(0,he.jsxs)("span",{style:k.addPageButton,children:[(0,S.R)(k.plusIcon),(0,he.jsx)(f.FormattedMessage,{defaultMessage:"Add a page",id:"relationPropertyMenu.addAPage.button"})]}),onClick:()=>ct(Z),style:k.input}),render:()=>t})}),(0,he.jsx)(Ae,{collectionStore:o,targetCollectionStore:E,results:x,resultsType:"existing",property:i,schema:s,parentStore:c,disabled:u,canConfigureCollection:p,loading:!1,canDrag:!1,blockPropertyValueOverlayStore:d,onAccept:(e,t)=>function(e){const{environment:t,analyticsFrom:o,result:n,openInNew:r}=e;n.type===pe.Rt.SelectedPage&&pt({environment:t,analyticsFrom:o,result:n,openInNew:r})}({environment:C,analyticsFrom:h,result:e,openInNew:t}),onClickActionButton:e=>ut({environment:C,collectionContextStore:M,blockPropertyValueOverlayStore:d,result:e,blockPointers:y,onChange:P,analyticsFrom:h,overlayMode:m,propertySchema:G,targetCollectionStore:E}),onCreatePage:e=>dt({environment:C,collectionContextStore:M,relationPropertyMenuStore:Z,blockPointers:y,onChange:P,index:e,propertySchema:G,targetCollectionStore:E}),handleClearProperty:()=>P({value:[]}),relationPropertyMenuStore:Z,addPage:e=>st({environment:C,collectionStore:o,menuStore:Z,blockPropertyValueOverlayStore:d,blockStore:c,schema:s,property:i,targetCollectionStore:E,uri:e}),addingPage:j})]})}function rt(e){const{children:t,header:o,footer:r}=e,i=(0,n.useContext)(Se),s=(0,l.VK)((()=>{var e;const t=Boolean(oe.Z.bots.state.find((e=>e.integration_id===g.U9))),o=(null==i?void 0:i.connectedRelationFlags.isGoogleDriveRelation)||(null==i?void 0:i.connectedRelationFlags.isFigmaRelation)||(null==i?void 0:i.connectedRelationFlags.isZendeskRelation),n=null===(e=ee.default.state.currentSpaceStore)||void 0===e?void 0:e.canEdit();return(null==i?void 0:i.connectedRelationFlags.isGithubPrRelation)&&!t||o&&!n}),[null==i?void 0:i.connectedRelationFlags.isGithubPrRelation,null==i?void 0:i.connectedRelationFlags.isGoogleDriveRelation,null==i?void 0:i.connectedRelationFlags.isFigmaRelation,null==i?void 0:i.connectedRelationFlags.isZendeskRelation]),c=(0,a.yK)((e=>({menuContent:{overflow:"hidden",maxHeight:"70vh"}})),[]);return(0,he.jsx)(L.Z,{menuType:W.og.Popup,header:!s&&o,footer:r,children:(0,he.jsx)("div",{style:c.menuContent,children:t})})}function lt(e){const{searchResultsLength:t,showFooterInViewMode:o}=e,a=(0,n.useContext)(Se),{blockPointers:i,onChange:s,overlayMode:c,isDisabled:d,insertChar:u}=(0,n.useContext)(D.m),p=(0,r.O7)(),g=(0,K.Y$)(),y=(0,l.VK)((()=>(null==a?void 0:a.relationPropertyMenuStore.state.searchQuery)??u??""),[null==a?void 0:a.relationPropertyMenuStore,u]);if(!o&&"view"===(null==c?void 0:c.type))return null;if(!a)return null;const{relationPropertyMenuStore:h,propertySchema:S,targetCollectionStore:m}=a;return S.connectedRelation||d||!m?null:0!==t&&y?(0,he.jsx)(E.Z,{targetCollectionStore:m,title:y,onClick:e=>dt({environment:p,collectionContextStore:g,relationPropertyMenuStore:h,blockPointers:i,onChange:s,index:e,propertySchema:S,targetCollectionStore:m}),focused:!1,isSection:!0,index:"add"===(null==c?void 0:c.type)?null==c?void 0:c.index:void 0}):null}function at(e){const{searchResults:t}=e,{blockPointers:o,collectionStore:i,property:s,schema:c,blockStore:d,blockPropertyValueOverlayStore:p,isDisabled:g,canConfigureCollection:h,analyticsFrom:S,overlayMode:P,onChange:v,insertChar:R}=(0,n.useContext)(D.m),C=(0,n.useContext)(Se),M=(0,r.O7)(),x=(0,r.Fy)(),k=(0,K.Y$)(),{searchQuery:I,addingPage:F}=(0,l.VK)((()=>(null==C?void 0:C.relationPropertyMenuStore.state)??{searchQuery:R??"",addingPage:!1}),[null==C?void 0:C.relationPropertyMenuStore,R]),w=(0,a.yK)((e=>({inputMenu:{...x.isAndroid&&{borderBottom:"none"}}})),[x.isAndroid]),j=it(),_=(0,l.VK)((()=>d?I?j.filter((e=>{let{pageResult:t}=e;const o=ne.G.createChildStore(d,t.pointer),n=o.getModel();if(n)return(0,u.fY)({block:n,query:I,getRecordModel:o.getRecordModel,userTimeZone:(0,y.r)(),schema:c,intl:H.default.getIntl(),onlyPropertyIds:["title"]})})):j:[]),[d,c,I,j]);if(!(d&&p&&i&&C))return null;const{relationPropertyMenuStore:V,propertySchema:O,targetCollectionStore:T,connectedRelationFlags:B,isSearchLoading:U}=C,Q=[..._];t&&t.forEach((e=>{const t=e.pageResult;if((t.type===pe.Rt.SelectedPage||t.type===pe.Rt.SearchPage)&&_.find((e=>(e.pageResult.type===pe.Rt.SelectedPage||e.pageResult.type===pe.Rt.SearchPage)&&e.pageResult.pointer.id===t.pointer.id)))return;const n=O.limit?o.slice(0,1):o,r=e.pageResult.type!==pe.Rt.NewPage?n.map((e=>e.id)).includes(e.pageResult.pointer.id):void 0;r&&!I&&"add"===(null==P?void 0:P.type)||(e.pageResult.type===pe.Rt.SearchPage&&r?Q.push({...e,pageResult:{...e.pageResult,type:pe.Rt.SelectedPage}}):e.pageResult.type!==pe.Rt.SelectedPage||r?Q.push(e):Q.push({...e,pageResult:{...e.pageResult,type:pe.Rt.SearchPage}}))}));const A=!t&&0===_.length;let N=X.default.mark("rum.relation_search_query");!A&&""!==I&&N&&(X.default.measure(N,{environment:M}),N=void 0);const q=(0,he.jsx)(Ae,{collectionStore:i,targetCollectionStore:T,results:Q,resultsType:0===Q.length&&0===j.length?"existing":"search",property:s,schema:c,parentStore:d,disabled:g,canConfigureCollection:h,loading:A,canDrag:!g&&0===I.length,blockPropertyValueOverlayStore:p,onAccept:(e,t)=>function(e){const{environment:t,collectionStore:o,collectionContextStore:n,blockPointers:r,result:l,analyticsFrom:a,isDisabled:i,onChange:s,overlayMode:c,openInNew:d,propertySchema:u,targetCollectionStore:p}=e;if(i)return;if(!p||!u)return;const{mainEditorCurrentBlockStore:g}=ee.default.state;if(!g)return;if(l.type===pe.Rt.SearchPage){var y,h;if(s({value:u.limit?[l.pointer]:"add"===(null==c?void 0:c.type)?[...r.slice(0,c.index),l.pointer,...r.slice(c.index)]:[...r,l.pointer]}),a)b.dw(t,{from:a,collection_id:null==o?void 0:o.id,collection_view_id:null==n||null===(y=n.collectionViewStore())||void 0===y?void 0:y.id,collection_view_block_id:null==n||null===(h=n.collectionViewBlockStore())||void 0===h?void 0:h.id,target_collection_id:null==p?void 0:p.id})}else l.type===pe.Rt.SelectedPage&&pt({environment:t,analyticsFrom:a,result:l,openInNew:d})}({environment:M,collectionStore:i,collectionContextStore:k,blockPointers:o,result:e,analyticsFrom:S,isDisabled:g,onChange:v,overlayMode:P,openInNew:t,propertySchema:O,targetCollectionStore:T}),onClickActionButton:e=>ut({environment:M,collectionContextStore:k,blockPropertyValueOverlayStore:p,result:e,blockPointers:o,onChange:v,analyticsFrom:S,overlayMode:P,propertySchema:O,targetCollectionStore:T}),onScrollOffsetChange:e=>function(e){const{offsetFromBottom:t,store:o,isLoading:n,searchResults:r}=e;t<Pe.Z.incrementScrollOffset&&!n&&((null==r?void 0:r.length)??0)>=o.state.searchLimit&&o.setState({...o.state,searchLimit:o.state.searchLimit+Pe.Z.limitIncrement})}({offsetFromBottom:e,store:V,isLoading:U,searchResults:t}),onDrag:e=>function(e){const{newPageIds:t,collectionStore:o,onChange:n,analyticsFrom:r,environment:l}=e;n({value:t.map((e=>({id:e,spaceId:o.pointer.spaceId,table:m.iU})))}),r&&b.yT(l,{from:r})}({environment:M,newPageIds:e,collectionStore:i,onChange:v,analyticsFrom:S}),onCreatePage:e=>dt({environment:M,collectionContextStore:k,relationPropertyMenuStore:V,blockPointers:o,onChange:v,index:e,propertySchema:O,targetCollectionStore:T}),handleClearProperty:()=>v({value:[]}),searchQuery:I,overlayMode:P,relationPropertyMenuStore:V,addPage:e=>st({environment:M,collectionStore:i,menuStore:V,blockPropertyValueOverlayStore:p,blockStore:d,schema:c,property:s,uri:e,targetCollectionStore:T}),addingPage:F});if(!x.isMobile)return q;const z=se({connectedRelationFlags:B,overlayMode:P,disabled:g});return(0,he.jsx)(L.Z,{menuType:W.og.Modal,title:(0,he.jsx)(f.FormattedMessage,{defaultMessage:"Relation",id:"relationPropertyMenu.mobileRelationMenu.title"}),left:(0,he.jsx)(G.Z,{href:(0,$.UY)("guides.relations"),analyticsFrom:"relation_menu"}),right:(0,he.jsx)(f.FormattedMessage,{defaultMessage:"Done",id:"relationPropertyMenu.mobileDoneButton"}),header:(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)(Z.ZP,{value:I,disabled:g,onChange:e=>{const t=e.target.value;V.setState({...V.state,searchQuery:t,searchLimit:Pe.Z.limitIncrement})},placeholder:H.default.formatMessage(z),showClearButton:!0,focusInitial:!0,style:w.inputMenu}),I&&!g&&!B.isConnectedRelation&&(0,he.jsx)(E.Z,{targetCollectionStore:T,title:I,onClick:e=>dt({environment:M,collectionContextStore:k,relationPropertyMenuStore:V,blockPointers:o,onChange:v,index:e,propertySchema:O,targetCollectionStore:T}),focused:!1,isSection:!0})]}),onClickRight:()=>V.reset(),children:q})}function it(){const e=(0,n.useContext)(Se),{blockStore:t,blockPointers:o,overlayMode:r}=(0,n.useContext)(D.m),a=(0,l.VK)((()=>(null==e?void 0:e.relationPropertyMenuStore.state.searchQuery)??""),[null==e?void 0:e.relationPropertyMenuStore]);return(0,l.VK)((()=>t&&null!=e&&e.propertySchema&&null!=e&&e.targetCollectionStore&&(a||"add"!==(null==r?void 0:r.type))?d.j$({relationValue:o,propertySchema:null==e?void 0:e.propertySchema,getRecordModel:t.getRecordModel}).map((t=>({pageResult:{key:t.id,type:pe.Rt.SelectedPage,pointer:t},canEdit:(0,q.dN)({targetCollectionStore:null==e?void 0:e.targetCollectionStore,propertySchema:null==e?void 0:e.propertySchema,pointer:t})}))):[]),[t,o,r,a,null==e?void 0:e.propertySchema,null==e?void 0:e.targetCollectionStore])}async function st(e){const{environment:t,collectionStore:o,menuStore:n,blockPropertyValueOverlayStore:r,blockStore:l,schema:a,property:i,uri:s,targetCollectionStore:c}=e;if(!c)return;const u=c.getFormat().integration_id,p=oe.Z.externalAuthentications.state.filter((e=>e.integration_id===u))[0],y=c.getFormat().pattern_name,h=oe.Z.integrations.state.find((e=>e.id===u)),S=l instanceof ne.G?l:void 0,v=l instanceof ne.G?l.getNormalizedPropertyStore(i):void 0;n.setState({...n.state,addingPage:!0});try{var b,I;if(!(o&&h&&S&&v))return;const e=d.rq(v.getValue()),l=s||n.state.searchQuery||"";if(!(0,Y.DB)({integration:h,patternName:y,url:l}))return void k.showDialog({items:[{label:(0,he.jsx)(f.FormattedMessage,{id:"connectedRelationPropertyMenuResults.unsupportedUrlErrorDialog.copyDebuggingInformation",defaultMessage:"Copy debugging information"}),color:"blue",onAccept:()=>{x.RD({environment:t,stringValue:JSON.stringify({botId:null==p?void 0:p.parent_id,url:l},null,2),copiedMessage:x.tq.copiedToClipboard})}},{label:(0,he.jsx)(f.FormattedMessage,{id:"connectedRelationPropertyMenuResults.unsupportedUrlErrorDialog.closeButton",defaultMessage:"Close"}),onAccept:()=>{}}],showCancel:!1,keepFocus:!1,message:(0,he.jsx)(f.FormattedMessage,{id:"connectedRelationPropertyMenuResults.unsupportedUrlErrorDialog.title",defaultMessage:"This source is currently not supported. Please try a different source."})});const u=a[i],D=d.Kp(u),_=D?v.id:void 0,V=d.gg(u),Z=d.ic(u),L=d.U8(u),O=d.yF(u),T=Z&&te.default.checkGate("figma_connected_relation"),B=L&&te.default.checkGate("zendesk_connected_relation"),U=O&&te.default.checkGate("cron_connected_relation"),G=L&&te.default.checkGate("zendesk_ai_enabled"),E=V&&te.default.checkGate("google_drive_connected_relation"),K=(0,A.NP)(h.id),q=(null==h?void 0:h.id)===g.U9?null===(b=K[0])||void 0===b?void 0:b.id:null==p?void 0:p.parent_id,H=D||E||B||U||T?K.map((e=>e.id)):[q],W=await j.yp({environment:t,url:l,botIds:H,userDefinedExternalCollectionStore:c,relatedPageId:_});if(!W)return;const z=(null===(I=re.subscriptionDataStoreInstance.state)||void 0===I?void 0:I.addOns)??[];G&&(0,P.de)(z)&&(M.getZendeskTicketConversation(t,{ticketUrl:l,spaceId:W.getSpaceId(),botId:H[0],pageId:v.id}),Q.j(t,"zendesk_unfurl_ai")),w.createAndCommit({userAction:"connectedRelationPropertyMenuResults.createRelationPage",environment:t,perform:o=>{const n={id:W.id,table:m.iU,spaceId:W.getSpaceId()},l=null!=u&&u.limit?[n]:[...e,n],a=d.ow(l);F.sO({environment:t,editorMode:"default",store:v,value:a,transaction:o}),r&&r.state.isOpen&&r.state.collectionContextStore&&(R.rv({environment:t,collectionContextStore:r.state.collectionContextStore,block_id:S.id,property:i,property_type:"relation",from:"relation_section",isFromBulkActionsToolbar:!1,integration_id:h.id,action:"add"}),C.W(t,{...(0,N.Pn)(r.state.collectionContextStore),from:"relation_menu",type:"page",integration_id:h.id,creating_block_id:S.id}))}}),n.reset()}finally{n.setState({...n.state,addingPage:!1})}}function ct(e){e.setState({...e.state,searchPopupOpen:!0,searchLimit:Pe.Z.limitIncrement})}function dt(e){const{environment:t,collectionContextStore:o,relationPropertyMenuStore:n,blockPointers:r,onChange:l,index:a,propertySchema:i,targetCollectionStore:s}=e,c=(0,v.ZP)(),d=null==s?void 0:s.getSpaceId(),u=null==i?void 0:i.limit,p={id:c,table:m.iU,spaceId:d},g=u?[p]:a?[...r.slice(0,a),p,...r.slice(a)]:[...r,p];l({newPage:{id:c,spaceId:d,name:n.state.searchQuery},value:g}),C.W(t,{...(0,N.Pn)(o),from:"relation_menu",type:"page",target_collection_id:null==s?void 0:s.id,new_page_id:c,creating_block_id:c})}function ut(e){const{environment:t,collectionContextStore:o,blockPropertyValueOverlayStore:n,result:r,blockPointers:l,onChange:a,analyticsFrom:i,overlayMode:s,propertySchema:c,targetCollectionStore:d}=e,{mainEditorCurrentBlockStore:u}=ee.default.state;if(!u)return;const p=null==c?void 0:c.limit;if(r.type===pe.Rt.SearchPage){a({value:p?[r.pointer]:"add"===(null==s?void 0:s.type)?[...l.slice(0,s.index),r.pointer,...l.slice(s.index)]:[...l,r.pointer]}),i&&b.dw(t,{from:i,...(0,N.Pn)(o),target_collection_id:null==d?void 0:d.id})}else if(r.type===pe.Rt.SelectedPage){a({value:p?[]:l.filter((e=>e.id!==r.pointer.id))}),i&&b.WF(t,{...(0,N.Pn)(o),from:i,target_collection_id:null==d?void 0:d.id})}p&&(null==n||n.setState({isOpen:!1}))}function pt(e){const{environment:t,result:o,openInNew:n,analyticsFrom:r}=e,{mainEditorCurrentBlockStore:l}=ee.default.state;if(!l)return;const a=(0,z.b)(t);let s;if(n){const e=ne.G.createChildStore(l,o.pointer),t=e.isDefined()?a(e.getSpaceId()):void 0;s=(0,p.Z)({pageId:o.pointer.id,pageModel:e.getModel(),baseUrl:t,pageVisitSource:i.tY.LinkInPage})}else{const e=l.isDefined()?a(l.getSpaceId()):void 0;s=(0,p.Z)({pageId:l.id,pageModel:l.getModel(),baseUrl:e,peekViewBlockId:o.pointer.id,pageVisitSource:i.tY.LinkInPage})}I.c4({environment:t,url:s,openInNew:n}),r&&b.XX(t,{from:r,meta_click:Boolean(n)})}const gt={getSearchResults:async function(e){const{environment:t,query:o,targetCollectionStore:n,propertySchema:r,blockPointers:l}=e;try{const e=await async function(e){const{environment:t,sprintCollectionStore:o,searchQuery:n}=e,r=o.getPropertyMapping(),l=null==r?void 0:r[s.b0.StatusV2],a=null==r?void 0:r[s.b0.Dates];if(!l||!a)throw new Error("Sprints database does not have the required properties");const i="results",c={userTimeZone:(0,y.r)(),searchQuery:n,sort:[{property:l,direction:"ascending"},{property:a,direction:"ascending"}],reducers:{[i]:{type:"results",limit:100}}},d=o.getParentBlockStore();if(!d)return[];await d.load();const u=d.getCollectionViewStores()[0];if(!u)return[];const p=o.getSpaceId(),g=await M.queryCollection(t,{source:{type:"collection",id:o.id,spaceId:p},collectionView:{id:u.id,spaceId:p},loader:c},void 0,{src:"relation_property_menu"});if("success"!==g.type)return[];const h=g.data.result.reducerResults[i];if("results"!==h.type)return[];return h.blockIds}({environment:t,sprintCollectionStore:n,searchQuery:o.query});return ye({results:e,targetCollectionStore:n,propertySchema:r,blockPointers:l})}catch(a){ce.log({level:"error",from:"relationPropertySearchRequest",type:"performSprintSearchRequest",error:(0,de.Ui)(a)});return await ge(e)}},getInputPlaceholderText:function(){return ie.inputPlaceholder},showFooterInViewMode:!0,showTargetDatabase:!1},yt={getSearchResults:ge,getInputPlaceholderText:se,showFooterInViewMode:!1,showTargetDatabase:!0}}}]);