import{u as j,c as P,j as a,P as b,_ as g,m as B,n as L,r as v,l as k,o as w,p as _,C as A,g as C,f as T,h as S,i as D,B as H,k as W,A as E}from"./sanity-d85d6121.js";const G=j.hr`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`;function F(c){const{childItemId:n,items:t,isActive:o,layout:d,showIcons:i,title:r}=c,{collapsed:l}=B(),u=L(t==null?void 0:t.filter(e=>e.type!=="divider")),x=v.useCallback(e=>{var s;return((s=t==null?void 0:t.find((p,m)=>m===e))==null?void 0:s.type)==="divider"},[t]),h=v.useCallback(e=>{var s;const p=(s=e.displayOptions)==null?void 0:s.showIcon;return typeof p<"u"?p!==!1:i!==!1},[i]),I=v.useCallback((e,s)=>{const{virtualIndex:p}=s;if(e.type==="divider")return a.jsx(k,{marginBottom:1,children:a.jsx(G,{})},`divider-${p}`);const m=!o&&n===e.id,y=o&&n===e.id,f=e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0;return a.jsx(w,{icon:h(e)?e.icon:!1,id:e.id,layout:d,marginBottom:1,pressed:m,schemaType:e.schemaType,selected:y,title:u(e).title,value:f},e.id)},[n,u,o,d,h]);return a.jsx(_,{overflow:l?"hidden":"auto",children:t&&t.length>0&&a.jsx(A,{activeItemDataAttr:"data-hovered",ariaLabel:r,canReceiveFocus:!0,getItemDisabled:x,itemHeight:51,items:t,onlyShowSelectionWhenActive:!0,paddingBottom:1,paddingX:3,renderItem:I,wrapAround:!1})})}const O=({index:c,menuItems:n,menuItemGroups:t,title:o})=>{const{features:d}=C(),{collapsed:i,isLast:r}=T(),l=r&&!i?-1:0;return a.jsx(S,{actions:a.jsx(D,{menuItems:n,menuItemGroups:t}),backButton:d.backButton&&c>0&&a.jsx(H,{as:W,"data-as":"a",icon:E,mode:"bleed",tooltipProps:{content:"Back"}}),tabIndex:l,title:o})};function K(c){const{childItemId:n,index:t,isActive:o,isSelected:d,pane:i,paneKey:r}=c,{defaultLayout:l,displayOptions:u,items:x,menuItems:h,menuItemGroups:I}=i,e=(u==null?void 0:u.showIcons)!==!1,{title:s}=P(i);return a.jsxs(b,{currentMaxWidth:350,"data-testid":"structure-tool-list-pane","data-ui":"ListPane",id:r,maxWidth:640,minWidth:320,selected:d,children:[g,a.jsx(O,{index:t,menuItems:h,menuItemGroups:I,title:s}),a.jsx(F,{childItemId:n,isActive:o,items:x,layout:l,showIcons:e,title:s},r)]})}export{K as default};
