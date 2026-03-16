(()=>{function d(i){if(console.log("applyPreviewFont",i),!i||!i.data)return;const p=document.getElementById("nitro-fontify");p&&p.remove();const e=i.data,y=e.name||"Preview Font";let o=e.elements||[];const g=e.customElements||"",a=e.mobile||!1,c=e.desktop||!1,v=e.overwrite||!1;e.languages;const w=e.options?.stylesheet||"",l=e.googleFont,h=e.fontUrl;let f="";if(Array.isArray(o)||(o=[o]),g&&o.push(g.replace(/\n/g,",").replace(/,+/g,",").replace(/^,|,$/g,"")),o.length>0&&(f=o.join(",")),!f)return;const E=v?" !important":"",u=document.getElementById("fontify-preview-style");u&&u.remove();const r=document.createElement("style");r.id="fontify-preview-style",r.type="text/css";let n="";if(e.type==="upload"&&h){const s=`@font-face {
  font-family: '`+y+`';
  src: url('`+h+`');
  font-display: swap;
}
`;c&&!a?n+=`@media only screen and (min-width: 970px) {
  `+s.replace(/\n/g,`
  `)+`}
`:a&&!c?n+=`@media only screen and (max-width: 970px) {
  `+s.replace(/\n/g,`
  `)+`}
`:n+=s}if(e.type==="google"&&l){const s=l.family||l.name;if(l.cssUrl){const t=document.createElement("link");t.rel="stylesheet",t.href=l.cssUrl,document.head.appendChild(t)}else if(l.name){const t=document.createElement("link");t.rel="stylesheet",t.href="https://fonts.googleapis.com/css?family="+s.replace(/\s/g,"+")+":100,200,300,400,500,600,700,800,900",document.head.appendChild(t)}}const m=f+` {
  font-family: '`+y+"'"+E+`;
`+(w?"  "+w+`
`:"")+`}
`;c&&!a?n+=`@media only screen and (min-width: 970px) {
  `+m.replace(/\n/g,`
  `)+`}
`:a&&!c?n+=`@media only screen and (max-width: 970px) {
  `+m.replace(/\n/g,`
  `)+`}
`:n+=m,r.textContent=n,document.head.appendChild(r)}window.applyPreviewFont=d,window.fontifyPreviewData&&d(window.fontifyPreviewData)})();
