(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17],{4183:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faucet",function(){return c(4279)}])},4279:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return n}});var d=c(7568),e=c(4051),f=c.n(e),g=c(5893),h=c(8019),i=c(7294),j=c(6076),k=c(3609),l=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"supply","type":"uint256"}],"name":"increaseSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),m=function(){var a,b=(0,i.useState)(),c=b[0],e=b[1],m=(0,i.useState)(!1),n=m[0],o=m[1],p=(0,i.useState)(),q=p[0],r=p[1],s=(0,i.useState)(0),t=s[0],u=s[1];(0,i.useEffect)(function(){c&&!c.error&&w()},[c]);var v,w=(a=(0,d.Z)(f().mark(function a(){var b,d,e,g;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=(b=new j.CH(k.r9,l,c.provider)).connect(c.signer),r(d),a.next=5,d.maxSupply();case 5:return e=a.sent,a.next=8,d.tokenCount();case 8:g=a.sent,console.log("Max Supply:",e),o(!0),u(e-g);case 12:case"end":return a.stop()}},a)})),function(){return a.apply(this,arguments)}),x=(v=(0,d.Z)(f().mark(function a(){var b;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(c&&!c.error)){a.next=5;break}return a.next=3,q.mintToken();case 3:b=a.sent,console.log("Transaction Receipt: ",b);case 5:case"end":return a.stop()}},a)})),function(){return v.apply(this,arguments)});return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(h.Z,{className:"invisible",pageLoad:"Faucet",setWalletContext:e}),(0,g.jsx)("div",{className:"w-full h-screen bg-gin-50 flex flex-row justify-center items-center",children:(0,g.jsxs)("div",{className:"flex flex-col justify-center p-10",children:[(0,g.jsx)("button",{onClick:function(){return x()},className:"text-semibold lg:px-8 py-3 lg:py-4 my-2 lg:my-4 text-xl md:text-2xl lg:text-3xl + ".concat(n?"bg-greenKelp-300 text-white hover:bg-greenKelp-400":"bg-gray-500 text-white cursor-not-allowed disabled"),children:"Mint"}),(0,g.jsxs)("div",{className:"text-semibold text-base lg:text-xl",children:["Supply Left: ",t," "]})]})})]})},n=m}},function(a){a.O(0,[907,294,431,774,888,179],function(){var b;return a(a.s=4183)}),_N_E=a.O()}])