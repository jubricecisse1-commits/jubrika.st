(()=>{var sh=Object.defineProperty;var ws=(r,e)=>()=>(r&&(e=r(r=0)),e);var ah=(r,e)=>{for(var t in e)sh(r,t,{get:e[t],enumerable:!0})};function Ui(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(tt[255&r]+tt[r>>8&255]+tt[r>>16&255]+tt[r>>24&255]+"-"+tt[255&e]+tt[e>>8&255]+"-"+tt[e>>16&15|64]+tt[e>>24&255]+"-"+tt[63&t|128]+tt[t>>8&255]+"-"+tt[t>>16&255]+tt[t>>24&255]+tt[255&i]+tt[i>>8&255]+tt[i>>16&255]+tt[i>>24&255]).toLowerCase()}function Ye(r,e,t){return Math.max(e,Math.min(t,r))}function ya(r,e){return(r%e+e)%e}function Dn(r,e,t){return(1-t)*r+t*e}function xa(r){return(r&r-1)==0&&r!==0}function Gr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ot(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}function Ec(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Wr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xh(){let r=Wr("canvas");return r.style.display="block",r}function On(r){r in xl||(xl[r]=!0,console.warn(r))}function sn(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Bs(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}function Fs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?qr.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function ks(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){vi.fromArray(r,s);let o=n.x*Math.abs(vi.x)+n.y*Math.abs(vi.y)+n.z*Math.abs(vi.z),c=e.dot(vi),l=t.dot(vi),h=i.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function Zs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}function Nh(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(i[c]=0,i[256|c]=32768,n[c]=24,n[256|c]=24):l<-14?(i[c]=1024>>-l-14,i[256|c]=1024>>-l-14|32768,n[c]=-l-1,n[256|c]=-l-1):l<=15?(i[c]=l+15<<10,i[256|c]=l+15<<10|32768,n[c]=13,n[256|c]=13):l<128?(i[c]=31744,i[256|c]=64512,n[c]=24,n[256|c]=24):(i[c]=31744,i[256|c]=64512,n[c]=13,n[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}function Tr(r,e,t,i,n,s,a,o,c,l){r.getVertexPosition(o,Zi),r.getVertexPosition(c,Ji),r.getVertexPosition(l,Ki);let h=function(d,u,p,f,_,m,y,v){let g;if(g=u.side===rt?f.intersectTriangle(y,m,_,!0,v):f.intersectTriangle(_,m,y,u.side===oi,v),g===null)return null;Er.copy(v),Er.applyMatrix4(d.matrixWorld);let M=p.ray.origin.distanceTo(Er);return M<p.near||M>p.far?null:{distance:M,point:Er.clone(),object:d}}(r,e,t,i,Zi,Ji,Ki,Sr);if(h){n&&(xr.fromBufferAttribute(n,o),Mr.fromBufferAttribute(n,c),br.fromBufferAttribute(n,l),h.uv=Ei.getInterpolation(Sr,Zi,Ji,Ki,xr,Mr,br,new se)),s&&(xr.fromBufferAttribute(s,o),Mr.fromBufferAttribute(s,c),br.fromBufferAttribute(s,l),h.uv1=Ei.getInterpolation(Sr,Zi,Ji,Ki,xr,Mr,br,new se),h.uv2=h.uv1),a&&(Nl.fromBufferAttribute(a,o),Ul.fromBufferAttribute(a,c),Dl.fromBufferAttribute(a,l),h.normal=Ei.getInterpolation(Sr,Zi,Ji,Ki,Nl,Ul,Dl,new T),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new T,materialIndex:0};Ei.getNormal(Zi,Ji,Ki,d.normal),h.face=d}return h}function dn(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function lt(r){let e={};for(let t=0;t<r.length;t++){let i=dn(r[t]);for(let n in i)e[n]=i[n]}return e}function wc(r){return r.getRenderTarget()===null?r.outputColorSpace:Be.workingColorSpace}function Ac(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Fh(r,e){let t=e.isWebGL2,i=new WeakMap;return{get:function(n){return n.isInterleavedBufferAttribute&&(n=n.data),i.get(n)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let s=i.get(n);s&&(r.deleteBuffer(s.buffer),i.delete(n))},update:function(n,s){if(n.isGLBufferAttribute){let o=i.get(n);return void((!o||o.version<n.version)&&i.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version}))}n.isInterleavedBufferAttribute&&(n=n.data);let a=i.get(n);if(a===void 0)i.set(n,function(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=r.createBuffer(),p;if(r.bindBuffer(c,u),r.bufferData(c,l,h),o.onUploadCallback(),l instanceof Float32Array)p=r.FLOAT;else if(l instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=r.HALF_FLOAT}else p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else{if(!(l instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);p=r.UNSIGNED_BYTE}return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}(n,s));else if(a.version<n.version){if(a.size!==n.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,c,l){let h=c.array,d=c._updateRange,u=c.updateRanges;if(r.bindBuffer(l,o),d.count===-1&&u.length===0&&r.bufferSubData(l,0,h),u.length!==0){for(let p=0,f=u.length;p<f;p++){let _=u[p];t?r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count):r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h.subarray(_.start,_.start+_.count))}c.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(l,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):r.bufferSubData(l,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),c.onUploadCallback()})(a.buffer,n,s),a.version=n.version}}}}function zh(r,e,t,i,n,s,a){let o=new be(0),c,l,h=s===!0?0:1,d=null,u=0,p=null;function f(_,m){_.getRGB(Ar,wc(r)),i.buffers.color.setClear(Ar.r,Ar.g,Ar.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(_,m=1){o.set(_),h=m,f(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(_){h=_,f(o,h)},render:function(_,m){let y=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?f(o,h):v&&v.isColor&&(f(v,1),y=!0);let g=r.xr.getEnvironmentBlendMode();g==="additive"?i.buffers.color.setClear(0,0,0,1,a):g==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ps)?(l===void 0&&(l=new Re(new zt(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:dn(It.backgroundCube.uniforms),vertexShader:It.backgroundCube.vertexShader,fragmentShader:It.backgroundCube.fragmentShader,side:rt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Be.getTransfer(v.colorSpace)!==ze,d===v&&u===v.version&&p===r.toneMapping||(l.material.needsUpdate=!0,d=v,u=v.version,p=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Re(new mn(2,2),new Kt({name:"BackgroundMaterial",uniforms:dn(It.background.uniforms),vertexShader:It.background.vertexShader,fragmentShader:It.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Be.getTransfer(v.colorSpace)!==ze,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),d===v&&u===v.version&&p===r.toneMapping||(c.material.needsUpdate=!0,d=v,u=v.version,p=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}}}function kh(r,e,t,i){let n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=p(null),l=c,h=!1;function d(C){return i.isWebGL2?r.bindVertexArray(C):s.bindVertexArrayOES(C)}function u(C){return i.isWebGL2?r.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function p(C){let b=[],w=[],I=[];for(let L=0;L<n;L++)b[L]=0,w[L]=0,I[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:w,attributeDivisors:I,object:C,attributes:{},index:null}}function f(){let C=l.newAttributes;for(let b=0,w=C.length;b<w;b++)C[b]=0}function _(C){m(C,0)}function m(C,b){let w=l.newAttributes,I=l.enabledAttributes,L=l.attributeDivisors;w[C]=1,I[C]===0&&(r.enableVertexAttribArray(C),I[C]=1),L[C]!==b&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,b),L[C]=b)}function y(){let C=l.newAttributes,b=l.enabledAttributes;for(let w=0,I=b.length;w<I;w++)b[w]!==C[w]&&(r.disableVertexAttribArray(w),b[w]=0)}function v(C,b,w,I,L,D,j){j===!0?r.vertexAttribIPointer(C,b,w,L,D):r.vertexAttribPointer(C,b,w,I,L,D)}function g(){M(),h=!0,l!==c&&(l=c,d(l.object))}function M(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:function(C,b,w,I,L){let D=!1;if(a){let j=function(R,V,H){let ae=H.wireframe===!0,oe=o[R.id];oe===void 0&&(oe={},o[R.id]=oe);let W=oe[V.id];W===void 0&&(W={},oe[V.id]=W);let Y=W[ae];return Y===void 0&&(Y=p(i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),W[ae]=Y),Y}(I,w,b);l!==j&&(l=j,d(l.object)),D=function(R,V,H,ae){let oe=l.attributes,W=V.attributes,Y=0,ee=H.getAttributes();for(let B in ee)if(ee[B].location>=0){let K=oe[B],ce=W[B];if(ce===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;Y++}return l.attributesNum!==Y||l.index!==ae}(C,I,w,L),D&&function(R,V,H,ae){let oe={},W=V.attributes,Y=0,ee=H.getAttributes();for(let B in ee)if(ee[B].location>=0){let K=W[B];K===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(K=R.instanceColor));let ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),oe[B]=ce,Y++}l.attributes=oe,l.attributesNum=Y,l.index=ae}(C,I,w,L)}else{let j=b.wireframe===!0;l.geometry===I.id&&l.program===w.id&&l.wireframe===j||(l.geometry=I.id,l.program=w.id,l.wireframe=j,D=!0)}L!==null&&t.update(L,r.ELEMENT_ARRAY_BUFFER),(D||h)&&(h=!1,function(j,R,V,H){if(i.isWebGL2===!1&&(j.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();let ae=H.attributes,oe=V.getAttributes(),W=R.defaultAttributeValues;for(let Y in oe){let ee=oe[Y];if(ee.location>=0){let B=ae[Y];if(B===void 0&&(Y==="instanceMatrix"&&j.instanceMatrix&&(B=j.instanceMatrix),Y==="instanceColor"&&j.instanceColor&&(B=j.instanceColor)),B!==void 0){let K=B.normalized,ce=B.itemSize,E=t.get(B);if(E===void 0)continue;let S=E.buffer,O=E.type,Z=E.bytesPerElement,P=i.isWebGL2===!0&&(O===r.INT||O===r.UNSIGNED_INT||B.gpuType===gc);if(B.isInterleavedBufferAttribute){let X=B.data,N=X.stride,U=B.offset;if(X.isInstancedInterleavedBuffer){for(let F=0;F<ee.locationSize;F++)m(ee.location+F,X.meshPerAttribute);j.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let F=0;F<ee.locationSize;F++)_(ee.location+F);r.bindBuffer(r.ARRAY_BUFFER,S);for(let F=0;F<ee.locationSize;F++)v(ee.location+F,ce/ee.locationSize,O,K,N*Z,(U+ce/ee.locationSize*F)*Z,P)}else{if(B.isInstancedBufferAttribute){for(let X=0;X<ee.locationSize;X++)m(ee.location+X,B.meshPerAttribute);j.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let X=0;X<ee.locationSize;X++)_(ee.location+X);r.bindBuffer(r.ARRAY_BUFFER,S);for(let X=0;X<ee.locationSize;X++)v(ee.location+X,ce/ee.locationSize,O,K,ce*Z,ce/ee.locationSize*X*Z,P)}}else if(W!==void 0){let K=W[Y];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(ee.location,K);break;case 3:r.vertexAttrib3fv(ee.location,K);break;case 4:r.vertexAttrib4fv(ee.location,K);break;default:r.vertexAttrib1fv(ee.location,K)}}}}y()}(C,b,w,I),L!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))},reset:g,resetDefaultState:M,dispose:function(){g();for(let C in o){let b=o[C];for(let w in b){let I=b[w];for(let L in I)u(I[L].object),delete I[L];delete b[w]}delete o[C]}},releaseStatesOfGeometry:function(C){if(o[C.id]===void 0)return;let b=o[C.id];for(let w in b){let I=b[w];for(let L in I)u(I[L].object),delete I[L];delete b[w]}delete o[C.id]},releaseStatesOfProgram:function(C){for(let b in o){let w=o[b];if(w[C.id]===void 0)continue;let I=w[C.id];for(let L in I)u(I[L].object),delete I[L];delete w[C.id]}},initAttributes:f,enableAttribute:_,disableUnusedAttributes:y}}function Vh(r,e,t,i){let n=i.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,c){if(c===0)return;let l,h;if(n)l=r,h="drawArraysInstanced";else if(l=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",l===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");l[h](s,a,o,c),t.update(o,s,c)},this.renderMultiDraw=function(a,o,c){if(c===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<c;h++)this.render(a[h],o[h]);else{l.multiDrawArraysWEBGL(s,a,0,o,0,c);let h=0;for(let d=0;d<c;d++)h+=o[d];t.update(h,s,1)}}}function Hh(r,e,t){let i;function n(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=n(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=s||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,g=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:n,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:_,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:g,floatVertexTextures:v&&g,maxSamples:s?r.getParameter(r.MAX_SAMPLES):0}}function Gh(r){let e=this,t=null,i=0,n=!1,s=!1,a=new jt,o=new Ae,c={value:null,needsUpdate:!1};function l(h,d,u,p){let f=h!==null?h.length:0,_=null;if(f!==0){if(_=c.value,p!==!0||_===null){let m=u+4*f,y=d.matrixWorldInverse;o.getNormalMatrix(y),(_===null||_.length<m)&&(_=new Float32Array(m));for(let v=0,g=u;v!==f;++v,g+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(_,g),_[g+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,_}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||i!==0||n;return n=d,i=h.length,u},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=l(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,f=h.clipIntersection,_=h.clipShadows,m=r.get(h);if(!n||p===null||p.length===0||s&&!_)s?l(null):function(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let y=s?0:i,v=4*y,g=m.clippingState||null;c.value=g,g=l(p,d,v,u);for(let M=0;M!==v;++M)g[M]=t[M];m.clippingState=g,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}}}function Wh(r){let e=new WeakMap;function t(n,s){return s===ma?n.mapping=on:s===fa&&(n.mapping=ln),n}function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping;if(s===ma||s===fa){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new Ea(a.height/2);return o.fromEquirectangularTexture(r,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}function zl(r,e,t){let i=new Jt(r,e,t);return i.texture.mapping=ps,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cr(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function kl(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vl(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function go(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qh(r){let e=new WeakMap,t=null;function i(n){let s=n.target;s.removeEventListener("dispose",i);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(n){if(n&&n.isTexture){let s=n.mapping,a=s===ma||s===fa,o=s===on||s===ln;if(a||o){if(n.isRenderTargetTexture&&n.needsPMREMUpdate===!0){n.needsPMREMUpdate=!1;let c=e.get(n);return t===null&&(t=new fn(r)),c=a?t.fromEquirectangular(n,c):t.fromCubemap(n,c),e.set(n,c),c.texture}if(e.has(n))return e.get(n).texture;{let c=n.image;if(a&&c&&c.height>0||o&&c&&function(l){let h=0,d=6;for(let u=0;u<d;u++)l[u]!==void 0&&h++;return h===d}(c)){t===null&&(t=new fn(r));let l=a?t.fromEquirectangular(n):t.fromCubemap(n);return e.set(n,l),n.addEventListener("dispose",i),l.texture}return null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Xh(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function jh(r,e,t,i){let n={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let d in l.attributes)e.remove(l.attributes[d]);for(let d in l.morphAttributes){let u=l.morphAttributes[d];for(let p=0,f=u.length;p<f;p++)e.remove(u[p])}l.removeEventListener("dispose",a),delete n[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),i.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,d=c.attributes.position,u=0;if(h!==null){let _=h.array;u=h.version;for(let m=0,y=_.length;m<y;m+=3){let v=_[m+0],g=_[m+1],M=_[m+2];l.push(v,g,g,M,M,v)}}else{if(d===void 0)return;{let _=d.array;u=d.version;for(let m=0,y=_.length/3-1;m<y;m+=3){let v=m+0,g=m+1,M=m+2;l.push(v,g,g,M,M,v)}}}let p=new(Ec(l)?Kr:Jr)(l,1);p.version=u;let f=s.get(c);f&&e.remove(f),s.set(c,p)}return{get:function(c,l){return n[l.id]===!0||(l.addEventListener("dispose",a),n[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let d in l)e.update(l[d],r.ARRAY_BUFFER);let h=c.morphAttributes;for(let d in h){let u=h[d];for(let p=0,f=u.length;p<f;p++)e.update(u[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function Yh(r,e,t,i){let n=i.isWebGL2,s,a,o;this.setMode=function(c){s=c},this.setIndex=function(c){a=c.type,o=c.bytesPerElement},this.render=function(c,l){r.drawElements(s,l,a,c*o),t.update(l,s,1)},this.renderInstances=function(c,l,h){if(h===0)return;let d,u;if(n)d=r,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");d[u](s,l,a,c*o,h),t.update(l,s,h)},this.renderMultiDraw=function(c,l,h){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<h;u++)this.render(c[u]/o,l[u]);else{d.multiDrawElementsWEBGL(s,l,0,a,c,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];t.update(u,s,1)}}}function Zh(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case r.TRIANGLES:e.triangles+=n*(t/3);break;case r.LINES:e.lines+=n*(t/2);break;case r.LINE_STRIP:e.lines+=n*(t-1);break;case r.LINE_LOOP:e.lines+=n*t;break;case r.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function Jh(r,e){return r[0]-e[0]}function Kh(r,e){return Math.abs(e[1])-Math.abs(r[1])}function $h(r,e,t){let i={},n=new Float32Array(8),s=new WeakMap,a=new Fe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];return{update:function(c,l,h){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=u!==void 0?u.length:0,f=s.get(l);if(f===void 0||f.count!==p){let V=function(){j.dispose(),s.delete(l),l.removeEventListener("dispose",V)};f!==void 0&&f.texture.dispose();let y=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,M=l.morphAttributes.position||[],C=l.morphAttributes.normal||[],b=l.morphAttributes.color||[],w=0;y===!0&&(w=1),v===!0&&(w=2),g===!0&&(w=3);let I=l.attributes.position.count*w,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);let D=new Float32Array(I*L*4*p),j=new jr(D,I,L,p);j.type=ri,j.needsUpdate=!0;let R=4*w;for(let H=0;H<p;H++){let ae=M[H],oe=C[H],W=b[H],Y=I*L*4*H;for(let ee=0;ee<ae.count;ee++){let B=ee*R;y===!0&&(a.fromBufferAttribute(ae,ee),D[Y+B+0]=a.x,D[Y+B+1]=a.y,D[Y+B+2]=a.z,D[Y+B+3]=0),v===!0&&(a.fromBufferAttribute(oe,ee),D[Y+B+4]=a.x,D[Y+B+5]=a.y,D[Y+B+6]=a.z,D[Y+B+7]=0),g===!0&&(a.fromBufferAttribute(W,ee),D[Y+B+8]=a.x,D[Y+B+9]=a.y,D[Y+B+10]=a.z,D[Y+B+11]=W.itemSize===4?a.w:1)}}f={count:p,texture:j,size:new se(I,L)},s.set(l,f),l.addEventListener("dispose",V)}let _=0;for(let y=0;y<d.length;y++)_+=d[y];let m=l.morphTargetsRelative?1:1-_;h.getUniforms().setValue(r,"morphTargetBaseInfluence",m),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{let u=d===void 0?0:d.length,p=i[l.id];if(p===void 0||p.length!==u){p=[];for(let v=0;v<u;v++)p[v]=[v,0];i[l.id]=p}for(let v=0;v<u;v++){let g=p[v];g[0]=v,g[1]=d[v]}p.sort(Kh);for(let v=0;v<8;v++)v<u&&p[v][1]?(o[v][0]=p[v][0],o[v][1]=p[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Jh);let f=l.morphAttributes.position,_=l.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let g=o[v],M=g[0],C=g[1];M!==Number.MAX_SAFE_INTEGER&&C?(f&&l.getAttribute("morphTarget"+v)!==f[M]&&l.setAttribute("morphTarget"+v,f[M]),_&&l.getAttribute("morphNormal"+v)!==_[M]&&l.setAttribute("morphNormal"+v,_[M]),n[v]=C,m+=C):(f&&l.hasAttribute("morphTarget"+v)===!0&&l.deleteAttribute("morphTarget"+v),_&&l.hasAttribute("morphNormal"+v)===!0&&l.deleteAttribute("morphNormal"+v),n[v]=0)}let y=l.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",n)}}}}function Qh(r,e,t,i){let n=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,c=a.geometry,l=e.get(a,c);if(n.get(l)!==o&&(e.update(l),n.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),n.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;n.get(h)!==o&&(h.update(),n.set(h,o))}return l},dispose:function(){n=new WeakMap}}}function bn(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=Hl[n];if(s===void 0&&(s=new Float32Array(n),Hl[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ze(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Je(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function fs(r,e){let t=Gl[e];t===void 0&&(t=new Int32Array(e),Gl[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function eu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function tu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ze(t,e))return;r.uniform2fv(this.addr,e),Je(t,e)}}function iu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ze(t,e))return;r.uniform3fv(this.addr,e),Je(t,e)}}function nu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ze(t,e))return;r.uniform4fv(this.addr,e),Je(t,e)}}function ru(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ze(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Je(t,e)}else{if(Ze(t,i))return;Xl.set(i),r.uniformMatrix2fv(this.addr,!1,Xl),Je(t,i)}}function su(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ze(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Je(t,e)}else{if(Ze(t,i))return;ql.set(i),r.uniformMatrix3fv(this.addr,!1,ql),Je(t,i)}}function au(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ze(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Je(t,e)}else{if(Ze(t,i))return;Wl.set(i),r.uniformMatrix4fv(this.addr,!1,Wl),Je(t,i)}}function ou(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function lu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ze(t,e))return;r.uniform2iv(this.addr,e),Je(t,e)}}function cu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ze(t,e))return;r.uniform3iv(this.addr,e),Je(t,e)}}function hu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ze(t,e))return;r.uniform4iv(this.addr,e),Je(t,e)}}function uu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function du(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ze(t,e))return;r.uniform2uiv(this.addr,e),Je(t,e)}}function pu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ze(t,e))return;r.uniform3uiv(this.addr,e),Je(t,e)}}function mu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ze(t,e))return;r.uniform4uiv(this.addr,e),Je(t,e)}}function fu(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s=this.type===r.SAMPLER_2D_SHADOW?Rc:Cc;t.setTexture2D(e||s,n)}function gu(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Lc,n)}function vu(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Ic,n)}function _u(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Pc,n)}function yu(r,e){r.uniform1fv(this.addr,e)}function xu(r,e){let t=bn(e,this.size,2);r.uniform2fv(this.addr,t)}function Mu(r,e){let t=bn(e,this.size,3);r.uniform3fv(this.addr,t)}function bu(r,e){let t=bn(e,this.size,4);r.uniform4fv(this.addr,t)}function Su(r,e){let t=bn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Eu(r,e){let t=bn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Tu(r,e){let t=bn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function wu(r,e){r.uniform1iv(this.addr,e)}function Au(r,e){r.uniform2iv(this.addr,e)}function Cu(r,e){r.uniform3iv(this.addr,e)}function Ru(r,e){r.uniform4iv(this.addr,e)}function Pu(r,e){r.uniform1uiv(this.addr,e)}function Lu(r,e){r.uniform2uiv(this.addr,e)}function Iu(r,e){r.uniform3uiv(this.addr,e)}function Nu(r,e){r.uniform4uiv(this.addr,e)}function Uu(r,e,t){let i=this.cache,n=e.length,s=fs(t,n);Ze(i,s)||(r.uniform1iv(this.addr,s),Je(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Cc,s[a])}function Du(r,e,t){let i=this.cache,n=e.length,s=fs(t,n);Ze(i,s)||(r.uniform1iv(this.addr,s),Je(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Lc,s[a])}function Ou(r,e,t){let i=this.cache,n=e.length,s=fs(t,n);Ze(i,s)||(r.uniform1iv(this.addr,s),Je(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Ic,s[a])}function Bu(r,e,t){let i=this.cache,n=e.length,s=fs(t,n);Ze(i,s)||(r.uniform1iv(this.addr,s),Je(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Pc,s[a])}function jl(r,e){r.seq.push(e),r.map[e.id]=e}function Fu(r,e,t){let i=r.name,n=i.length;for(na.lastIndex=0;;){let s=na.exec(i),a=na.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===n){jl(t,l===void 0?new Ta(o,r,e):new wa(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Aa(o),jl(t,h)),t=h}}}function Yl(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}function Zl(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+function(o,c){let l=o.split(`
`),h=[],d=Math.max(c-6,0),u=Math.min(c+6,l.length);for(let p=d;p<u;p++){let f=p+1;h.push(`${f===c?">":" "} ${f}: ${l[p]}`)}return h.join(`
`)}(r.getShaderSource(e),a)}return n}function Vu(r,e){let t=function(i){let n=Be.getPrimaries(Be.workingColorSpace),s=Be.getPrimaries(i),a;switch(n===s?a="":n===Vr&&s===kr?a="LinearDisplayP3ToLinearSRGB":n===kr&&s===Vr&&(a="LinearSRGBToLinearDisplayP3"),i){case Zt:case ms:return[a,"LinearTransferOETF"];case je:case fo:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[a,"LinearTransferOETF"]}}(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Hu(r,e){let t;switch(e){case mh:t="Linear";break;case fh:t="Reinhard";break;case gh:t="OptimizedCineon";break;case po:t="ACESFilmic";break;case _h:t="AgX";break;case vh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function en(r){return r!==""}function Jl(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Ca(r){return r.replace(Gu,qu)}function qu(r,e){let t=Se[e];if(t===void 0){let i=Wu.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Se[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Ca(t)}function $l(r){return r.replace(Xu,ju)}function ju(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Ql(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Yu(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=function(R){let V="SHADOWMAP_TYPE_BASIC";return R.shadowMapType===dc?V="SHADOWMAP_TYPE_PCF":R.shadowMapType===uh?V="SHADOWMAP_TYPE_PCF_SOFT":R.shadowMapType===Xt&&(V="SHADOWMAP_TYPE_VSM"),V}(t),l=function(R){let V="ENVMAP_TYPE_CUBE";if(R.envMap)switch(R.envMapMode){case on:case ln:V="ENVMAP_TYPE_CUBE";break;case ps:V="ENVMAP_TYPE_CUBE_UV"}return V}(t),h=function(R){let V="ENVMAP_MODE_REFLECTION";return R.envMap&&R.envMapMode===ln&&(V="ENVMAP_MODE_REFRACTION"),V}(t),d=function(R){let V="ENVMAP_BLENDING_NONE";if(R.envMap)switch(R.combine){case mc:V="ENVMAP_BLENDING_MULTIPLY";break;case dh:V="ENVMAP_BLENDING_MIX";break;case ph:V="ENVMAP_BLENDING_ADD"}return V}(t),u=function(R){let V=R.envMapCubeUVHeight;if(V===null)return null;let H=Math.log2(V)-2,ae=1/V;return{texelWidth:1/(3*Math.max(Math.pow(2,H),112)),texelHeight:ae,maxMip:H}}(t),p=t.isWebGL2?"":function(R){return[R.extensionDerivatives||R.envMapCubeUVHeight||R.bumpMap||R.normalMapTangentSpace||R.clearcoatNormalMap||R.flatShading||R.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(R.extensionFragDepth||R.logarithmicDepthBuffer)&&R.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",R.extensionDrawBuffers&&R.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(R.extensionShaderTextureLOD||R.envMap||R.transmission)&&R.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(en).join(`
`)}(t),f=function(R){return[R.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(en).join(`
`)}(t),_=function(R){let V=[];for(let H in R){let ae=R[H];ae!==!1&&V.push("#define "+H+" "+ae)}return V.join(`
`)}(s),m=n.createProgram(),y,v,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(en).join(`
`),y.length>0&&(y+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(en).join(`
`),v.length>0&&(v+=`
`)):(y=[Ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(en).join(`
`),v=[p,Ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?Se.tonemapping_pars_fragment:"",t.toneMapping!==si?Hu("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,Vu("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(en).join(`
`)),a=Ca(a),a=Jl(a,t),a=Kl(a,t),o=Ca(o),o=Jl(o,t),o=Kl(o,t),a=$l(a),o=$l(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[f,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let M=g+y+a,C=g+v+o,b=Yl(n,n.VERTEX_SHADER,M),w=Yl(n,n.FRAGMENT_SHADER,C);function I(R){if(r.debug.checkShaderErrors){let V=n.getProgramInfoLog(m).trim(),H=n.getShaderInfoLog(b).trim(),ae=n.getShaderInfoLog(w).trim(),oe=!0,W=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(oe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,m,b,w);else{let Y=Zl(n,b,"vertex"),ee=Zl(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Program Info Log: `+V+`
`+Y+`
`+ee)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):H!==""&&ae!==""||(W=!1);W&&(R.diagnostics={runnable:oe,programLog:V,vertexShader:{log:H,prefix:y},fragmentShader:{log:ae,prefix:v}})}n.deleteShader(b),n.deleteShader(w),L=new an(n,m),D=function(V,H){let ae={},oe=V.getProgramParameter(H,V.ACTIVE_ATTRIBUTES);for(let W=0;W<oe;W++){let Y=V.getActiveAttrib(H,W),ee=Y.name,B=1;Y.type===V.FLOAT_MAT2&&(B=2),Y.type===V.FLOAT_MAT3&&(B=3),Y.type===V.FLOAT_MAT4&&(B=4),ae[ee]={type:Y.type,location:V.getAttribLocation(H,ee),locationSize:B}}return ae}(n,m)}let L,D;n.attachShader(m,b),n.attachShader(m,w),t.index0AttributeName!==void 0?n.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m),this.getUniforms=function(){return L===void 0&&I(this),L},this.getAttributes=function(){return D===void 0&&I(this),D};let j=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=n.getProgramParameter(m,zu)),j},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ku++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=w,this}function Ju(r,e,t,i,n,s,a){let o=new Zr,c=new Ra,l=[],h=n.isWebGL2,d=n.logarithmicDepthBuffer,u=n.vertexTextures,p=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(m){return m===0?"uv":`uv${m}`}return{getParameters:function(m,y,v,g,M){let C=g.fog,b=M.geometry,w=m.isMeshStandardMaterial?g.environment:null,I=(m.isMeshStandardMaterial?t:e).get(m.envMap||w),L=I&&I.mapping===ps?I.image.height:null,D=f[m.type];m.precision!==null&&(p=n.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let j=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,R=j!==void 0?j.length:0,V,H,ae,oe,W=0;if(b.morphAttributes.position!==void 0&&(W=1),b.morphAttributes.normal!==void 0&&(W=2),b.morphAttributes.color!==void 0&&(W=3),D){let Qe=It[D];V=Qe.vertexShader,H=Qe.fragmentShader}else V=m.vertexShader,H=m.fragmentShader,c.update(m),ae=c.getVertexShaderID(m),oe=c.getFragmentShaderID(m);let Y=r.getRenderTarget(),ee=M.isInstancedMesh===!0,B=M.isBatchedMesh===!0,K=!!m.map,ce=!!m.matcap,E=!!I,S=!!m.aoMap,O=!!m.lightMap,Z=!!m.bumpMap,P=!!m.normalMap,X=!!m.displacementMap,N=!!m.emissiveMap,U=!!m.metalnessMap,F=!!m.roughnessMap,te=m.anisotropy>0,$=m.clearcoat>0,x=m.iridescence>0,ie=m.sheen>0,z=m.transmission>0,k=te&&!!m.anisotropyMap,ne=$&&!!m.clearcoatMap,he=$&&!!m.clearcoatNormalMap,de=$&&!!m.clearcoatRoughnessMap,pe=x&&!!m.iridescenceMap,xe=x&&!!m.iridescenceThicknessMap,me=ie&&!!m.sheenColorMap,fe=ie&&!!m.sheenRoughnessMap,Ee=!!m.specularMap,Ke=!!m.specularColorMap,ge=!!m.specularIntensityMap,Ue=z&&!!m.transmissionMap,Pe=z&&!!m.thicknessMap,Qn=!!m.gradientMap,Oi=!!m.alphaMap,er=m.alphaTest>0,gt=!!m.alphaHash,pt=!!m.extensions,Bi=!!b.attributes.uv1,q=!!b.attributes.uv2,tr=!!b.attributes.uv3,Tn=si;return m.toneMapped&&(Y!==null&&Y.isXRRenderTarget!==!0||(Tn=r.toneMapping)),{isWebGL2:h,shaderID:D,shaderType:m.type,shaderName:m.name,vertexShader:V,fragmentShader:H,defines:m.defines,customVertexShaderID:ae,customFragmentShaderID:oe,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:B,instancing:ee,instancingColor:ee&&M.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Y===null?r.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Zt,map:K,matcap:ce,envMap:E,envMapMode:E&&I.mapping,envMapCubeUVHeight:L,aoMap:S,lightMap:O,bumpMap:Z,normalMap:P,displacementMap:u&&X,emissiveMap:N,normalMapObjectSpace:P&&m.normalMapType===1,normalMapTangentSpace:P&&m.normalMapType===0,metalnessMap:U,roughnessMap:F,anisotropy:te,anisotropyMap:k,clearcoat:$,clearcoatMap:ne,clearcoatNormalMap:he,clearcoatRoughnessMap:de,iridescence:x,iridescenceMap:pe,iridescenceThicknessMap:xe,sheen:ie,sheenColorMap:me,sheenRoughnessMap:fe,specularMap:Ee,specularColorMap:Ke,specularIntensityMap:ge,transmission:z,transmissionMap:Ue,thicknessMap:Pe,gradientMap:Qn,opaque:m.transparent===!1&&m.blending===1,alphaMap:Oi,alphaTest:er,alphaHash:gt,combine:m.combine,mapUv:K&&_(m.map.channel),aoMapUv:S&&_(m.aoMap.channel),lightMapUv:O&&_(m.lightMap.channel),bumpMapUv:Z&&_(m.bumpMap.channel),normalMapUv:P&&_(m.normalMap.channel),displacementMapUv:X&&_(m.displacementMap.channel),emissiveMapUv:N&&_(m.emissiveMap.channel),metalnessMapUv:U&&_(m.metalnessMap.channel),roughnessMapUv:F&&_(m.roughnessMap.channel),anisotropyMapUv:k&&_(m.anisotropyMap.channel),clearcoatMapUv:ne&&_(m.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(m.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(m.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&_(m.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(m.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(m.sheenRoughnessMap.channel),specularMapUv:Ee&&_(m.specularMap.channel),specularColorMapUv:Ke&&_(m.specularColorMap.channel),specularIntensityMapUv:ge&&_(m.specularIntensityMap.channel),transmissionMapUv:Ue&&_(m.transmissionMap.channel),thicknessMapUv:Pe&&_(m.thicknessMap.channel),alphaMapUv:Oi&&_(m.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(P||te),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,vertexUv1s:Bi,vertexUv2s:q,vertexUv3s:tr,pointsUvs:M.isPoints===!0&&!!b.attributes.uv&&(K||Oi),fog:!!C,useFog:m.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:M.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:W,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&v.length>0,shadowMapType:r.shadowMap.type,toneMapping:Tn,useLegacyLights:r._useLegacyLights,decodeVideoTexture:K&&m.map.isVideoTexture===!0&&Be.getTransfer(m.map.colorSpace)===ze,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===rt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:pt&&m.extensions.derivatives===!0,extensionFragDepth:pt&&m.extensions.fragDepth===!0,extensionDrawBuffers:pt&&m.extensions.drawBuffers===!0,extensionShaderTextureLOD:pt&&m.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pt&&m.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){let y=[];if(m.shaderID?y.push(m.shaderID):(y.push(m.customVertexShaderID),y.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)y.push(v),y.push(m.defines[v]);return m.isRawShaderMaterial===!1&&(function(v,g){v.push(g.precision),v.push(g.outputColorSpace),v.push(g.envMapMode),v.push(g.envMapCubeUVHeight),v.push(g.mapUv),v.push(g.alphaMapUv),v.push(g.lightMapUv),v.push(g.aoMapUv),v.push(g.bumpMapUv),v.push(g.normalMapUv),v.push(g.displacementMapUv),v.push(g.emissiveMapUv),v.push(g.metalnessMapUv),v.push(g.roughnessMapUv),v.push(g.anisotropyMapUv),v.push(g.clearcoatMapUv),v.push(g.clearcoatNormalMapUv),v.push(g.clearcoatRoughnessMapUv),v.push(g.iridescenceMapUv),v.push(g.iridescenceThicknessMapUv),v.push(g.sheenColorMapUv),v.push(g.sheenRoughnessMapUv),v.push(g.specularMapUv),v.push(g.specularColorMapUv),v.push(g.specularIntensityMapUv),v.push(g.transmissionMapUv),v.push(g.thicknessMapUv),v.push(g.combine),v.push(g.fogExp2),v.push(g.sizeAttenuation),v.push(g.morphTargetsCount),v.push(g.morphAttributeCount),v.push(g.numDirLights),v.push(g.numPointLights),v.push(g.numSpotLights),v.push(g.numSpotLightMaps),v.push(g.numHemiLights),v.push(g.numRectAreaLights),v.push(g.numDirLightShadows),v.push(g.numPointLightShadows),v.push(g.numSpotLightShadows),v.push(g.numSpotLightShadowsWithMaps),v.push(g.numLightProbes),v.push(g.shadowMapType),v.push(g.toneMapping),v.push(g.numClippingPlanes),v.push(g.numClipIntersection),v.push(g.depthPacking)}(y,m),function(v,g){o.disableAll(),g.isWebGL2&&o.enable(0),g.supportsVertexTextures&&o.enable(1),g.instancing&&o.enable(2),g.instancingColor&&o.enable(3),g.matcap&&o.enable(4),g.envMap&&o.enable(5),g.normalMapObjectSpace&&o.enable(6),g.normalMapTangentSpace&&o.enable(7),g.clearcoat&&o.enable(8),g.iridescence&&o.enable(9),g.alphaTest&&o.enable(10),g.vertexColors&&o.enable(11),g.vertexAlphas&&o.enable(12),g.vertexUv1s&&o.enable(13),g.vertexUv2s&&o.enable(14),g.vertexUv3s&&o.enable(15),g.vertexTangents&&o.enable(16),g.anisotropy&&o.enable(17),g.alphaHash&&o.enable(18),g.batching&&o.enable(19),v.push(o.mask),o.disableAll(),g.fog&&o.enable(0),g.useFog&&o.enable(1),g.flatShading&&o.enable(2),g.logarithmicDepthBuffer&&o.enable(3),g.skinning&&o.enable(4),g.morphTargets&&o.enable(5),g.morphNormals&&o.enable(6),g.morphColors&&o.enable(7),g.premultipliedAlpha&&o.enable(8),g.shadowMapEnabled&&o.enable(9),g.useLegacyLights&&o.enable(10),g.doubleSided&&o.enable(11),g.flipSided&&o.enable(12),g.useDepthPacking&&o.enable(13),g.dithering&&o.enable(14),g.transmission&&o.enable(15),g.sheen&&o.enable(16),g.opaque&&o.enable(17),g.pointsUvs&&o.enable(18),g.decodeVideoTexture&&o.enable(19),v.push(o.mask)}(y,m),y.push(r.outputColorSpace)),y.push(m.customProgramCacheKey),y.join()},getUniforms:function(m){let y=f[m.type],v;if(y){let g=It[y];v=Dh.clone(g.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,y){let v;for(let g=0,M=l.length;g<M;g++){let C=l[g];if(C.cacheKey===y){v=C,++v.usedTimes;break}}return v===void 0&&(v=new Yu(r,y,m,s),l.push(v)),v},releaseProgram:function(m){if(--m.usedTimes==0){let y=l.indexOf(m);l[y]=l[l.length-1],l.pop(),m.destroy()}},releaseShaderCache:function(m){c.remove(m)},programs:l,dispose:function(){c.dispose()}}}function Ku(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,i){r.get(e)[t]=i},dispose:function(){r=new WeakMap}}}function $u(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ec(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function tc(){let r=[],e=0,t=[],i=[],n=[];function s(a,o,c,l,h,d){let u=r[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:d},r[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=c,u.groupOrder=l,u.renderOrder=a.renderOrder,u.z=h,u.group=d),e++,u}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,c,l,h,d){let u=s(a,o,c,l,h,d);c.transmission>0?i.push(u):c.transparent===!0?n.push(u):t.push(u)},unshift:function(a,o,c,l,h,d){let u=s(a,o,c,l,h,d);c.transmission>0?i.unshift(u):c.transparent===!0?n.unshift(u):t.unshift(u)},finish:function(){for(let a=e,o=r.length;a<o;a++){let c=r[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||$u),i.length>1&&i.sort(o||ec),n.length>1&&n.sort(o||ec)}}}function Qu(){let r=new WeakMap;return{get:function(e,t){let i=r.get(e),n;return i===void 0?(n=new tc,r.set(e,[n])):t>=i.length?(n=new tc,i.push(n)):n=i[t],n},dispose:function(){r=new WeakMap}}}function ed(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new be};break;case"SpotLight":t={position:new T,direction:new T,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new T,halfWidth:new T,halfHeight:new T}}return r[e.id]=t,t}}}function id(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function nd(r,e){let t=new ed,i=function(){let c={};return{get:function(l){if(c[l.id]!==void 0)return c[l.id];let h;switch(l.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3}}return c[l.id]=h,h}}}(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);let s=new T,a=new Te,o=new Te;return{setup:function(c,l){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,f=0,_=0,m=0,y=0,v=0,g=0,M=0,C=0,b=0,w=0;c.sort(id);let I=l===!0?Math.PI:1;for(let D=0,j=c.length;D<j;D++){let R=c[D],V=R.color,H=R.intensity,ae=R.distance,oe=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=V.r*H*I,d+=V.g*H*I,u+=V.b*H*I;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],H);w++}else if(R.isDirectionalLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*I),R.castShadow){let Y=R.shadow,ee=i.get(R);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=oe,n.directionalShadowMatrix[p]=R.shadow.matrix,v++}n.directional[p]=W,p++}else if(R.isSpotLight){let W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(V).multiplyScalar(H*I),W.distance=ae,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[_]=W;let Y=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,Y.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[_]=Y.matrix,R.castShadow){let ee=i.get(R);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,n.spotShadow[_]=ee,n.spotShadowMap[_]=oe,M++}_++}else if(R.isRectAreaLight){let W=t.get(R);W.color.copy(V).multiplyScalar(H),W.halfWidth.set(.5*R.width,0,0),W.halfHeight.set(0,.5*R.height,0),n.rectArea[m]=W,m++}else if(R.isPointLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*I),W.distance=R.distance,W.decay=R.decay,R.castShadow){let Y=R.shadow,ee=i.get(R);ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,ee.shadowCameraNear=Y.camera.near,ee.shadowCameraFar=Y.camera.far,n.pointShadow[f]=ee,n.pointShadowMap[f]=oe,n.pointShadowMatrix[f]=R.shadow.matrix,g++}n.point[f]=W,f++}else if(R.isHemisphereLight){let W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(H*I),W.groundColor.copy(R.groundColor).multiplyScalar(H*I),n.hemi[y]=W,y++}}m>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;L.directionalLength===p&&L.pointLength===f&&L.spotLength===_&&L.rectAreaLength===m&&L.hemiLength===y&&L.numDirectionalShadows===v&&L.numPointShadows===g&&L.numSpotShadows===M&&L.numSpotMaps===C&&L.numLightProbes===w||(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=f,n.hemi.length=y,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=M+C-b,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,L.directionalLength=p,L.pointLength=f,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=y,L.numDirectionalShadows=v,L.numPointShadows=g,L.numSpotShadows=M,L.numSpotMaps=C,L.numLightProbes=w,n.version=td++)},setupView:function(c,l){let h=0,d=0,u=0,p=0,f=0,_=l.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let v=c[m];if(v.isDirectionalLight){let g=n.directional[h];g.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(_),h++}else if(v.isSpotLight){let g=n.spot[u];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(_),g.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(_),u++}else if(v.isRectAreaLight){let g=n.rectArea[p];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(_),o.identity(),a.copy(v.matrixWorld),a.premultiply(_),o.extractRotation(a),g.halfWidth.set(.5*v.width,0,0),g.halfHeight.set(0,.5*v.height,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let g=n.point[d];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(_),d++}else if(v.isHemisphereLight){let g=n.hemi[f];g.direction.setFromMatrixPosition(v.matrixWorld),g.direction.transformDirection(_),f++}}},state:n}}function ic(r,e){let t=new nd(r,e),i=[],n=[];return{init:function(){i.length=0,n.length=0},state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:function(s){t.setup(i,s)},setupLightsView:function(s){t.setupView(i,s)},pushLight:function(s){i.push(s)},pushShadow:function(s){n.push(s)}}}function rd(r,e){let t=new WeakMap;return{get:function(i,n=0){let s=t.get(i),a;return s===void 0?(a=new ic(r,e),t.set(i,[a])):n>=s.length?(a=new ic(r,e),s.push(a)):a=s[n],a},dispose:function(){t=new WeakMap}}}function sd(r,e,t){let i=new pn,n=new se,s=new se,a=new Fe,o=new La({depthPacking:3201}),c=new Ia,l={},h=t.maxTextureSize,d={[oi]:rt,[rt]:oi,2:2},u=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new qe;f.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Re(f,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let y=this.type;function v(b,w){let I=e.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Jt(n.x,n.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(w,null,I,u,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(w,null,I,p,_,null)}function g(b,w,I,L){let D=null,j=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(j!==void 0)D=j;else if(D=I.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let R=D.uuid,V=w.uuid,H=l[R];H===void 0&&(H={},l[R]=H);let ae=H[V];ae===void 0&&(ae=D.clone(),H[V]=ae,w.addEventListener("dispose",C)),D=ae}return D.visible=w.visible,D.wireframe=w.wireframe,D.side=L===Xt?w.shadowSide!==null?w.shadowSide:w.side:w.shadowSide!==null?w.shadowSide:d[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaTest,D.map=w.map,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,I.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(r.properties.get(D).light=I),D}function M(b,w,I,L,D){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===Xt)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);let R=e.update(b),V=b.material;if(Array.isArray(V)){let H=R.groups;for(let ae=0,oe=H.length;ae<oe;ae++){let W=H[ae],Y=V[W.materialIndex];if(Y&&Y.visible){let ee=g(b,Y,L,D);b.onBeforeShadow(r,b,w,I,R,ee,W),r.renderBufferDirect(I,null,R,ee,b,W),b.onAfterShadow(r,b,w,I,R,ee,W)}}}else if(V.visible){let H=g(b,V,L,D);b.onBeforeShadow(r,b,w,I,R,H,null),r.renderBufferDirect(I,null,R,H,b,null),b.onAfterShadow(r,b,w,I,R,H,null)}}let j=b.children;for(let R=0,V=j.length;R<V;R++)M(j[R],w,I,L,D)}function C(b){b.target.removeEventListener("dispose",C);for(let w in l){let I=l[w],L=b.target.uuid;L in I&&(I[L].dispose(),delete I[L])}}this.render=function(b,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let L=r.getRenderTarget(),D=r.getActiveCubeFace(),j=r.getActiveMipmapLevel(),R=r.state;R.setBlending(0),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let V=y!==Xt&&this.type===Xt,H=y===Xt&&this.type!==Xt;for(let ae=0,oe=b.length;ae<oe;ae++){let W=b[ae],Y=W.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);let ee=Y.getFrameExtents();if(n.multiply(ee),s.copy(Y.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/ee.x),n.x=s.x*ee.x,Y.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/ee.y),n.y=s.y*ee.y,Y.mapSize.y=s.y)),Y.map===null||V===!0||H===!0){let K=this.type!==Xt?{minFilter:ct,magFilter:ct}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Jt(n.x,n.y,K),Y.map.texture.name=W.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();let B=Y.getViewportCount();for(let K=0;K<B;K++){let ce=Y.getViewport(K);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),R.viewport(a),Y.updateMatrices(W,K),i=Y.getFrustum(),M(w,I,Y.camera,W,this.type)}Y.isPointLightShadow!==!0&&this.type===Xt&&v(Y,I),Y.needsUpdate=!1}y=this.type,m.needsUpdate=!1,r.setRenderTarget(L,D,j)}}function ad(r,e,t){let i=t.isWebGL2,n=new function(){let x=!1,ie=new Fe,z=null,k=new Fe(0,0,0,0);return{setMask:function(ne){z===ne||x||(r.colorMask(ne,ne,ne,ne),z=ne)},setLocked:function(ne){x=ne},setClear:function(ne,he,de,pe,xe){xe===!0&&(ne*=pe,he*=pe,de*=pe),ie.set(ne,he,de,pe),k.equals(ie)===!1&&(r.clearColor(ne,he,de,pe),k.copy(ie))},reset:function(){x=!1,z=null,k.set(-1,0,0,0)}}},s=new function(){let x=!1,ie=null,z=null,k=null;return{setTest:function(ne){ne?Z(r.DEPTH_TEST):P(r.DEPTH_TEST)},setMask:function(ne){ie===ne||x||(r.depthMask(ne),ie=ne)},setFunc:function(ne){if(z!==ne){switch(ne){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}z=ne}},setLocked:function(ne){x=ne},setClear:function(ne){k!==ne&&(r.clearDepth(ne),k=ne)},reset:function(){x=!1,ie=null,z=null,k=null}}},a=new function(){let x=!1,ie=null,z=null,k=null,ne=null,he=null,de=null,pe=null,xe=null;return{setTest:function(me){x||(me?Z(r.STENCIL_TEST):P(r.STENCIL_TEST))},setMask:function(me){ie===me||x||(r.stencilMask(me),ie=me)},setFunc:function(me,fe,Ee){z===me&&k===fe&&ne===Ee||(r.stencilFunc(me,fe,Ee),z=me,k=fe,ne=Ee)},setOp:function(me,fe,Ee){he===me&&de===fe&&pe===Ee||(r.stencilOp(me,fe,Ee),he=me,de=fe,pe=Ee)},setLocked:function(me){x=me},setClear:function(me){xe!==me&&(r.clearStencil(me),xe=me)},reset:function(){x=!1,ie=null,z=null,k=null,ne=null,he=null,de=null,pe=null,xe=null}}},o=new WeakMap,c=new WeakMap,l={},h={},d=new WeakMap,u=[],p=null,f=!1,_=null,m=null,y=null,v=null,g=null,M=null,C=null,b=new be(0,0,0),w=0,I=!1,L=null,D=null,j=null,R=null,V=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ae=!1,oe=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(W)[1]),ae=oe>=1):W.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),ae=oe>=2);let Y=null,ee={},B=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),ce=new Fe().fromArray(B),E=new Fe().fromArray(K);function S(x,ie,z,k){let ne=new Uint8Array(4),he=r.createTexture();r.bindTexture(x,he),r.texParameteri(x,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(x,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let de=0;de<z;de++)!i||x!==r.TEXTURE_3D&&x!==r.TEXTURE_2D_ARRAY?r.texImage2D(ie+de,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ne):r.texImage3D(ie,0,r.RGBA,1,1,k,0,r.RGBA,r.UNSIGNED_BYTE,ne);return he}let O={};function Z(x){l[x]!==!0&&(r.enable(x),l[x]=!0)}function P(x){l[x]!==!1&&(r.disable(x),l[x]=!1)}O[r.TEXTURE_2D]=S(r.TEXTURE_2D,r.TEXTURE_2D,1),O[r.TEXTURE_CUBE_MAP]=S(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(O[r.TEXTURE_2D_ARRAY]=S(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),O[r.TEXTURE_3D]=S(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),n.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Z(r.DEPTH_TEST),s.setFunc(3),F(!1),te(1),Z(r.CULL_FACE),U(0);let X={[Mi]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(i)X[103]=r.MIN,X[104]=r.MAX;else{let x=e.get("EXT_blend_minmax");x!==null&&(X[103]=x.MIN_EXT,X[104]=x.MAX_EXT)}let N={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[da]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[pa]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function U(x,ie,z,k,ne,he,de,pe,xe,me){if(x!==0){if(f===!1&&(Z(r.BLEND),f=!0),x===5)ne=ne||ie,he=he||z,de=de||k,ie===m&&ne===g||(r.blendEquationSeparate(X[ie],X[ne]),m=ie,g=ne),z===y&&k===v&&he===M&&de===C||(r.blendFuncSeparate(N[z],N[k],N[he],N[de]),y=z,v=k,M=he,C=de),pe.equals(b)!==!1&&xe===w||(r.blendColor(pe.r,pe.g,pe.b,xe),b.copy(pe),w=xe),_=x,I=!1;else if(x!==_||me!==I){if(m===Mi&&g===Mi||(r.blendEquation(r.FUNC_ADD),m=Mi,g=Mi),me)switch(x){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x)}else switch(x){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x)}y=null,v=null,M=null,C=null,b.set(0,0,0),w=0,_=x,I=me}}else f===!0&&(P(r.BLEND),f=!1)}function F(x){L!==x&&(x?r.frontFace(r.CW):r.frontFace(r.CCW),L=x)}function te(x){x!==0?(Z(r.CULL_FACE),x!==D&&(x===1?r.cullFace(r.BACK):x===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):P(r.CULL_FACE),D=x}function $(x,ie,z){x?(Z(r.POLYGON_OFFSET_FILL),R===ie&&V===z||(r.polygonOffset(ie,z),R=ie,V=z)):P(r.POLYGON_OFFSET_FILL)}return{buffers:{color:n,depth:s,stencil:a},enable:Z,disable:P,bindFramebuffer:function(x,ie){return h[x]!==ie&&(r.bindFramebuffer(x,ie),h[x]=ie,i&&(x===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ie),x===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ie)),!0)},drawBuffers:function(x,ie){let z=u,k=!1;if(x)if(z=d.get(ie),z===void 0&&(z=[],d.set(ie,z)),x.isWebGLMultipleRenderTargets){let ne=x.texture;if(z.length!==ne.length||z[0]!==r.COLOR_ATTACHMENT0){for(let he=0,de=ne.length;he<de;he++)z[he]=r.COLOR_ATTACHMENT0+he;z.length=ne.length,k=!0}}else z[0]!==r.COLOR_ATTACHMENT0&&(z[0]=r.COLOR_ATTACHMENT0,k=!0);else z[0]!==r.BACK&&(z[0]=r.BACK,k=!0);k&&(t.isWebGL2?r.drawBuffers(z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z))},useProgram:function(x){return p!==x&&(r.useProgram(x),p=x,!0)},setBlending:U,setMaterial:function(x,ie){x.side===2?P(r.CULL_FACE):Z(r.CULL_FACE);let z=x.side===rt;ie&&(z=!z),F(z),x.blending===1&&x.transparent===!1?U(0):U(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),s.setFunc(x.depthFunc),s.setTest(x.depthTest),s.setMask(x.depthWrite),n.setMask(x.colorWrite);let k=x.stencilWrite;a.setTest(k),k&&(a.setMask(x.stencilWriteMask),a.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),a.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),$(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?Z(r.SAMPLE_ALPHA_TO_COVERAGE):P(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:F,setCullFace:te,setLineWidth:function(x){x!==j&&(ae&&r.lineWidth(x),j=x)},setPolygonOffset:$,setScissorTest:function(x){x?Z(r.SCISSOR_TEST):P(r.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=r.TEXTURE0+H-1),Y!==x&&(r.activeTexture(x),Y=x)},bindTexture:function(x,ie,z){z===void 0&&(z=Y===null?r.TEXTURE0+H-1:Y);let k=ee[z];k===void 0&&(k={type:void 0,texture:void 0},ee[z]=k),k.type===x&&k.texture===ie||(Y!==z&&(r.activeTexture(z),Y=z),r.bindTexture(x,ie||O[x]),k.type=x,k.texture=ie)},unbindTexture:function(){let x=ee[Y];x!==void 0&&x.type!==void 0&&(r.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},updateUBOMapping:function(x,ie){let z=c.get(ie);z===void 0&&(z=new WeakMap,c.set(ie,z));let k=z.get(x);k===void 0&&(k=r.getUniformBlockIndex(ie,x.name),z.set(x,k))},uniformBlockBinding:function(x,ie){let z=c.get(ie).get(x);o.get(ie)!==z&&(r.uniformBlockBinding(ie,z,x.__bindingPointIndex),o.set(ie,z))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},scissor:function(x){ce.equals(x)===!1&&(r.scissor(x.x,x.y,x.z,x.w),ce.copy(x))},viewport:function(x){E.equals(x)===!1&&(r.viewport(x.x,x.y,x.z,x.w),E.copy(x))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},Y=null,ee={},h={},d=new WeakMap,u=[],p=null,f=!1,_=null,m=null,y=null,v=null,g=null,M=null,C=null,b=new be(0,0,0),w=0,I=!1,L=null,D=null,j=null,R=null,V=null,ce.set(0,0,r.canvas.width,r.canvas.height),E.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),a.reset()}}}function od(r,e,t,i,n,s,a){let o=n.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(E,S){return p?new OffscreenCanvas(E,S):Wr("canvas")}function _(E,S,O,Z){let P=1;if((E.width>Z||E.height>Z)&&(P=Z/Math.max(E.width,E.height)),P<1||S===!0){if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let X=S?Gr:Math.floor,N=X(P*E.width),U=X(P*E.height);d===void 0&&(d=f(N,U));let F=O?f(N,U):d;return F.width=N,F.height=U,F.getContext("2d").drawImage(E,0,0,N,U),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+N+"x"+U+")."),F}return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E}return E}function m(E){return xa(E.width)&&xa(E.height)}function y(E,S){return E.generateMipmaps&&S&&E.minFilter!==ct&&E.minFilter!==Rt}function v(E){r.generateMipmap(E)}function g(E,S,O,Z,P=!1){if(o===!1)return S;if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=S;if(S===r.RED&&(O===r.FLOAT&&(X=r.R32F),O===r.HALF_FLOAT&&(X=r.R16F),O===r.UNSIGNED_BYTE&&(X=r.R8)),S===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(X=r.R8UI),O===r.UNSIGNED_SHORT&&(X=r.R16UI),O===r.UNSIGNED_INT&&(X=r.R32UI),O===r.BYTE&&(X=r.R8I),O===r.SHORT&&(X=r.R16I),O===r.INT&&(X=r.R32I)),S===r.RG&&(O===r.FLOAT&&(X=r.RG32F),O===r.HALF_FLOAT&&(X=r.RG16F),O===r.UNSIGNED_BYTE&&(X=r.RG8)),S===r.RGBA){let N=P?zr:Be.getTransfer(Z);O===r.FLOAT&&(X=r.RGBA32F),O===r.HALF_FLOAT&&(X=r.RGBA16F),O===r.UNSIGNED_BYTE&&(X=N===ze?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return X!==r.R16F&&X!==r.R32F&&X!==r.RG16F&&X!==r.RG32F&&X!==r.RGBA16F&&X!==r.RGBA32F||e.get("EXT_color_buffer_float"),X}function M(E,S,O){return y(E,O)===!0||E.isFramebufferTexture&&E.minFilter!==ct&&E.minFilter!==Rt?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function C(E){return E===ct||E===Ho||E===Rs?r.NEAREST:r.LINEAR}function b(E){let S=E.target;S.removeEventListener("dispose",b),function(O){let Z=i.get(O);if(Z.__webglInit===void 0)return;let P=O.source,X=u.get(P);if(X){let N=X[Z.__cacheKey];N.usedTimes--,N.usedTimes===0&&I(O),Object.keys(X).length===0&&u.delete(P)}i.remove(O)}(S),S.isVideoTexture&&h.delete(S)}function w(E){let S=E.target;S.removeEventListener("dispose",w),function(O){let Z=O.texture,P=i.get(O),X=i.get(Z);if(X.__webglTexture!==void 0&&(r.deleteTexture(X.__webglTexture),a.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(P.__webglFramebuffer[N]))for(let U=0;U<P.__webglFramebuffer[N].length;U++)r.deleteFramebuffer(P.__webglFramebuffer[N][U]);else r.deleteFramebuffer(P.__webglFramebuffer[N]);P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer[N])}else{if(Array.isArray(P.__webglFramebuffer))for(let N=0;N<P.__webglFramebuffer.length;N++)r.deleteFramebuffer(P.__webglFramebuffer[N]);else r.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&r.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let N=0;N<P.__webglColorRenderbuffer.length;N++)P.__webglColorRenderbuffer[N]&&r.deleteRenderbuffer(P.__webglColorRenderbuffer[N]);P.__webglDepthRenderbuffer&&r.deleteRenderbuffer(P.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let N=0,U=Z.length;N<U;N++){let F=i.get(Z[N]);F.__webglTexture&&(r.deleteTexture(F.__webglTexture),a.memory.textures--),i.remove(Z[N])}i.remove(Z),i.remove(O)}(S)}function I(E){let S=i.get(E);r.deleteTexture(S.__webglTexture);let O=E.source;delete u.get(O)[S.__cacheKey],a.memory.textures--}let L=0;function D(E,S){let O=i.get(E);if(E.isVideoTexture&&function(Z){let P=a.render.frame;h.get(Z)!==P&&(h.set(Z,P),Z.update())}(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){let Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(Z.complete!==!1)return void oe(O,E,S);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+S)}let j={[ga]:r.REPEAT,[Yt]:r.CLAMP_TO_EDGE,[va]:r.MIRRORED_REPEAT},R={[ct]:r.NEAREST,[Ho]:r.NEAREST_MIPMAP_NEAREST,[Rs]:r.NEAREST_MIPMAP_LINEAR,[Rt]:r.LINEAR,[yh]:r.LINEAR_MIPMAP_NEAREST,[Or]:r.LINEAR_MIPMAP_LINEAR},V={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function H(E,S,O){if(O?(r.texParameteri(E,r.TEXTURE_WRAP_S,j[S.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,j[S.wrapT]),E!==r.TEXTURE_3D&&E!==r.TEXTURE_2D_ARRAY||r.texParameteri(E,r.TEXTURE_WRAP_R,j[S.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,R[S.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,R[S.minFilter])):(r.texParameteri(E,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(E,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),E!==r.TEXTURE_3D&&E!==r.TEXTURE_2D_ARRAY||r.texParameteri(E,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),S.wrapS===Yt&&S.wrapT===Yt||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(E,r.TEXTURE_MAG_FILTER,C(S.magFilter)),r.texParameteri(E,r.TEXTURE_MIN_FILTER,C(S.minFilter)),S.minFilter!==ct&&S.minFilter!==Rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,V[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Z=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===ct||S.minFilter!==Rs&&S.minFilter!==Or||S.type===ri&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Vn&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(r.texParameterf(E,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function ae(E,S){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",b));let Z=S.source,P=u.get(Z);P===void 0&&(P={},u.set(Z,P));let X=function(N){let U=[];return U.push(N.wrapS),U.push(N.wrapT),U.push(N.wrapR||0),U.push(N.magFilter),U.push(N.minFilter),U.push(N.anisotropy),U.push(N.internalFormat),U.push(N.format),U.push(N.type),U.push(N.generateMipmaps),U.push(N.premultiplyAlpha),U.push(N.flipY),U.push(N.unpackAlignment),U.push(N.colorSpace),U.join()}(S);if(X!==E.__cacheKey){P[X]===void 0&&(P[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),P[X].usedTimes++;let N=P[E.__cacheKey];N!==void 0&&(P[E.__cacheKey].usedTimes--,N.usedTimes===0&&I(S)),E.__cacheKey=X,E.__webglTexture=P[X].texture}return O}function oe(E,S,O){let Z=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=r.TEXTURE_3D);let P=ae(E,S),X=S.source;t.bindTexture(Z,E.__webglTexture,r.TEXTURE0+O);let N=i.get(X);if(X.version!==N.__version||P===!0){t.activeTexture(r.TEXTURE0+O);let U=Be.getPrimaries(Be.workingColorSpace),F=S.colorSpace===Ut?null:Be.getPrimaries(S.colorSpace),te=S.colorSpace===Ut||U===F?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let $=function(fe){return!o&&(fe.wrapS!==Yt||fe.wrapT!==Yt||fe.minFilter!==ct&&fe.minFilter!==Rt)}(S)&&m(S.image)===!1,x=_(S.image,$,!1,n.maxTextureSize);x=ce(S,x);let ie=m(x)||o,z=s.convert(S.format,S.colorSpace),k,ne=s.convert(S.type),he=g(S.internalFormat,z,ne,S.colorSpace,S.isVideoTexture);H(Z,S,ie);let de=S.mipmaps,pe=o&&S.isVideoTexture!==!0&&he!==bc,xe=N.__version===void 0||P===!0,me=M(S,x,ie);if(S.isDepthTexture)he=r.DEPTH_COMPONENT,o?he=S.type===ri?r.DEPTH_COMPONENT32F:S.type===ni?r.DEPTH_COMPONENT24:S.type===wi?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:S.type===ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ai&&he===r.DEPTH_COMPONENT&&S.type!==mo&&S.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ni,ne=s.convert(S.type)),S.format===cn&&he===r.DEPTH_COMPONENT&&(he=r.DEPTH_STENCIL,S.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=wi,ne=s.convert(S.type))),xe&&(pe?t.texStorage2D(r.TEXTURE_2D,1,he,x.width,x.height):t.texImage2D(r.TEXTURE_2D,0,he,x.width,x.height,0,z,ne,null));else if(S.isDataTexture)if(de.length>0&&ie){pe&&xe&&t.texStorage2D(r.TEXTURE_2D,me,he,de[0].width,de[0].height);for(let fe=0,Ee=de.length;fe<Ee;fe++)k=de[fe],pe?t.texSubImage2D(r.TEXTURE_2D,fe,0,0,k.width,k.height,z,ne,k.data):t.texImage2D(r.TEXTURE_2D,fe,he,k.width,k.height,0,z,ne,k.data);S.generateMipmaps=!1}else pe?(xe&&t.texStorage2D(r.TEXTURE_2D,me,he,x.width,x.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,z,ne,x.data)):t.texImage2D(r.TEXTURE_2D,0,he,x.width,x.height,0,z,ne,x.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){pe&&xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,he,de[0].width,de[0].height,x.depth);for(let fe=0,Ee=de.length;fe<Ee;fe++)k=de[fe],S.format!==Nt?z!==null?pe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,k.width,k.height,x.depth,z,k.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,fe,he,k.width,k.height,x.depth,0,k.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,k.width,k.height,x.depth,z,ne,k.data):t.texImage3D(r.TEXTURE_2D_ARRAY,fe,he,k.width,k.height,x.depth,0,z,ne,k.data)}else{pe&&xe&&t.texStorage2D(r.TEXTURE_2D,me,he,de[0].width,de[0].height);for(let fe=0,Ee=de.length;fe<Ee;fe++)k=de[fe],S.format!==Nt?z!==null?pe?t.compressedTexSubImage2D(r.TEXTURE_2D,fe,0,0,k.width,k.height,z,k.data):t.compressedTexImage2D(r.TEXTURE_2D,fe,he,k.width,k.height,0,k.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?t.texSubImage2D(r.TEXTURE_2D,fe,0,0,k.width,k.height,z,ne,k.data):t.texImage2D(r.TEXTURE_2D,fe,he,k.width,k.height,0,z,ne,k.data)}else if(S.isDataArrayTexture)pe?(xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,he,x.width,x.height,x.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,x.width,x.height,x.depth,z,ne,x.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,he,x.width,x.height,x.depth,0,z,ne,x.data);else if(S.isData3DTexture)pe?(xe&&t.texStorage3D(r.TEXTURE_3D,me,he,x.width,x.height,x.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,x.width,x.height,x.depth,z,ne,x.data)):t.texImage3D(r.TEXTURE_3D,0,he,x.width,x.height,x.depth,0,z,ne,x.data);else if(S.isFramebufferTexture){if(xe)if(pe)t.texStorage2D(r.TEXTURE_2D,me,he,x.width,x.height);else{let fe=x.width,Ee=x.height;for(let Ke=0;Ke<me;Ke++)t.texImage2D(r.TEXTURE_2D,Ke,he,fe,Ee,0,z,ne,null),fe>>=1,Ee>>=1}}else if(de.length>0&&ie){pe&&xe&&t.texStorage2D(r.TEXTURE_2D,me,he,de[0].width,de[0].height);for(let fe=0,Ee=de.length;fe<Ee;fe++)k=de[fe],pe?t.texSubImage2D(r.TEXTURE_2D,fe,0,0,z,ne,k):t.texImage2D(r.TEXTURE_2D,fe,he,z,ne,k);S.generateMipmaps=!1}else pe?(xe&&t.texStorage2D(r.TEXTURE_2D,me,he,x.width,x.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,z,ne,x)):t.texImage2D(r.TEXTURE_2D,0,he,z,ne,x);y(S,ie)&&v(Z),N.__version=X.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function W(E,S,O,Z,P,X){let N=s.convert(O.format,O.colorSpace),U=s.convert(O.type),F=g(O.internalFormat,N,U,O.colorSpace);if(!i.get(S).__hasExternalTextures){let te=Math.max(1,S.width>>X),$=Math.max(1,S.height>>X);P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY?t.texImage3D(P,X,F,te,$,S.depth,0,N,U,null):t.texImage2D(P,X,F,te,$,0,N,U,null)}t.bindFramebuffer(r.FRAMEBUFFER,E),K(S)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,P,i.get(O).__webglTexture,0,B(S)):(P===r.TEXTURE_2D||P>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&P<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,P,i.get(O).__webglTexture,X),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Y(E,S,O){if(r.bindRenderbuffer(r.RENDERBUFFER,E),S.depthBuffer&&!S.stencilBuffer){let Z=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(O||K(S)){let P=S.depthTexture;P&&P.isDepthTexture&&(P.type===ri?Z=r.DEPTH_COMPONENT32F:P.type===ni&&(Z=r.DEPTH_COMPONENT24));let X=B(S);K(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X,Z,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,X,Z,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,Z,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,E)}else if(S.depthBuffer&&S.stencilBuffer){let Z=B(S);O&&K(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,S.width,S.height):K(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,E)}else{let Z=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let P=0;P<Z.length;P++){let X=Z[P],N=s.convert(X.format,X.colorSpace),U=s.convert(X.type),F=g(X.internalFormat,N,U,X.colorSpace),te=B(S);O&&K(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,F,S.width,S.height):K(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,F,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,F,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ee(E){let S=i.get(E),O=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");(function(Z,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,Z),!P.depthTexture||!P.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(P.depthTexture).__webglTexture&&P.depthTexture.image.width===P.width&&P.depthTexture.image.height===P.height||(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),D(P.depthTexture,0);let X=i.get(P.depthTexture).__webglTexture,N=B(P);if(P.depthTexture.format===Ai)K(P)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,X,0,N):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,X,0);else{if(P.depthTexture.format!==cn)throw new Error("Unknown depthTexture format");K(P)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,X,0,N):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,X,0)}})(S.__webglFramebuffer,E)}else if(O){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]=r.createRenderbuffer(),Y(S.__webglDepthbuffer[Z],E,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Y(S.__webglDepthbuffer,E,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function B(E){return Math.min(n.maxSamples,E.samples)}function K(E){let S=i.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ce(E,S){let O=E.colorSpace,Z=E.format,P=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===_a||O!==Zt&&O!==Ut&&(Be.getTransfer(O)===ze?o===!1?e.has("EXT_sRGB")===!0&&Z===Nt?(E.format=_a,E.minFilter=Rt,E.generateMipmaps=!1):S=qr.sRGBToLinear(S):Z===Nt&&P===Ti||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}this.allocateTextureUnit=function(){let E=L;return E>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+n.maxTextures),L+=1,E},this.resetTextureUnits=function(){L=0},this.setTexture2D=D,this.setTexture2DArray=function(E,S){let O=i.get(E);E.version>0&&O.__version!==E.version?oe(O,E,S):t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+S)},this.setTexture3D=function(E,S){let O=i.get(E);E.version>0&&O.__version!==E.version?oe(O,E,S):t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+S)},this.setTextureCube=function(E,S){let O=i.get(E);E.version>0&&O.__version!==E.version?function(Z,P,X){if(P.image.length!==6)return;let N=ae(Z,P),U=P.source;t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+X);let F=i.get(U);if(U.version!==F.__version||N===!0){t.activeTexture(r.TEXTURE0+X);let te=Be.getPrimaries(Be.workingColorSpace),$=P.colorSpace===Ut?null:Be.getPrimaries(P.colorSpace),x=P.colorSpace===Ut||te===$?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,x);let ie=P.isCompressedTexture||P.image[0].isCompressedTexture,z=P.image[0]&&P.image[0].isDataTexture,k=[];for(let ge=0;ge<6;ge++)k[ge]=ie||z?z?P.image[ge].image:P.image[ge]:_(P.image[ge],!1,!0,n.maxCubemapSize),k[ge]=ce(P,k[ge]);let ne=k[0],he=m(ne)||o,de=s.convert(P.format,P.colorSpace),pe=s.convert(P.type),xe=g(P.internalFormat,de,pe,P.colorSpace),me=o&&P.isVideoTexture!==!0,fe=F.__version===void 0||N===!0,Ee,Ke=M(P,ne,he);if(H(r.TEXTURE_CUBE_MAP,P,he),ie){me&&fe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ke,xe,ne.width,ne.height);for(let ge=0;ge<6;ge++){Ee=k[ge].mipmaps;for(let Ue=0;Ue<Ee.length;Ue++){let Pe=Ee[Ue];P.format!==Nt?de!==null?me?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue,0,0,Pe.width,Pe.height,de,Pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue,xe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue,0,0,Pe.width,Pe.height,de,pe,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue,xe,Pe.width,Pe.height,0,de,pe,Pe.data)}}}else{Ee=P.mipmaps,me&&fe&&(Ee.length>0&&Ke++,t.texStorage2D(r.TEXTURE_CUBE_MAP,Ke,xe,k[0].width,k[0].height));for(let ge=0;ge<6;ge++)if(z){me?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,k[ge].width,k[ge].height,de,pe,k[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xe,k[ge].width,k[ge].height,0,de,pe,k[ge].data);for(let Ue=0;Ue<Ee.length;Ue++){let Pe=Ee[Ue].image[ge].image;me?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue+1,0,0,Pe.width,Pe.height,de,pe,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue+1,xe,Pe.width,Pe.height,0,de,pe,Pe.data)}}else{me?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,de,pe,k[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xe,de,pe,k[ge]);for(let Ue=0;Ue<Ee.length;Ue++){let Pe=Ee[Ue];me?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue+1,0,0,de,pe,Pe.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ue+1,xe,de,pe,Pe.image[ge])}}}y(P,he)&&v(r.TEXTURE_CUBE_MAP),F.__version=U.version,P.onUpdate&&P.onUpdate(P)}Z.__version=P.version}(O,E,S):t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+S)},this.rebindTextures=function(E,S,O){let Z=i.get(E);S!==void 0&&W(Z.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&ee(E)},this.setupRenderTarget=function(E){let S=E.texture,O=i.get(E),Z=i.get(S);E.addEventListener("dispose",w),E.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=S.version,a.memory.textures++);let P=E.isWebGLCubeRenderTarget===!0,X=E.isWebGLMultipleRenderTargets===!0,N=m(E)||o;if(P){O.__webglFramebuffer=[];for(let U=0;U<6;U++)if(o&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[U]=[];for(let F=0;F<S.mipmaps.length;F++)O.__webglFramebuffer[U][F]=r.createFramebuffer()}else O.__webglFramebuffer[U]=r.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let U=0;U<S.mipmaps.length;U++)O.__webglFramebuffer[U]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(X)if(n.drawBuffers){let U=E.texture;for(let F=0,te=U.length;F<te;F++){let $=i.get(U[F]);$.__webglTexture===void 0&&($.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&K(E)===!1){let U=X?S:[S];O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let F=0;F<U.length;F++){let te=U[F];O.__webglColorRenderbuffer[F]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[F]);let $=s.convert(te.format,te.colorSpace),x=s.convert(te.type),ie=g(te.internalFormat,$,x,te.colorSpace,E.isXRRenderTarget===!0),z=B(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,z,ie,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.RENDERBUFFER,O.__webglColorRenderbuffer[F])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Y(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(P){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),H(r.TEXTURE_CUBE_MAP,S,N);for(let U=0;U<6;U++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let F=0;F<S.mipmaps.length;F++)W(O.__webglFramebuffer[U][F],E,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+U,F);else W(O.__webglFramebuffer[U],E,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);y(S,N)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(X){let U=E.texture;for(let F=0,te=U.length;F<te;F++){let $=U[F],x=i.get($);t.bindTexture(r.TEXTURE_2D,x.__webglTexture),H(r.TEXTURE_2D,$,N),W(O.__webglFramebuffer,E,$,r.COLOR_ATTACHMENT0+F,r.TEXTURE_2D,0),y($,N)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let U=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?U=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(U,Z.__webglTexture),H(U,S,N),o&&S.mipmaps&&S.mipmaps.length>0)for(let F=0;F<S.mipmaps.length;F++)W(O.__webglFramebuffer[F],E,S,r.COLOR_ATTACHMENT0,U,F);else W(O.__webglFramebuffer,E,S,r.COLOR_ATTACHMENT0,U,0);y(S,N)&&v(U),t.unbindTexture()}E.depthBuffer&&ee(E)},this.updateRenderTargetMipmap=function(E){let S=m(E)||o,O=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Z=0,P=O.length;Z<P;Z++){let X=O[Z];if(y(X,S)){let N=E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,U=i.get(X).__webglTexture;t.bindTexture(N,U),v(N),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(E){if(o&&E.samples>0&&K(E)===!1){let S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],O=E.width,Z=E.height,P=r.COLOR_BUFFER_BIT,X=[],N=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,U=i.get(E),F=E.isWebGLMultipleRenderTargets===!0;if(F)for(let te=0;te<S.length;te++)t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,U.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,U.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,U.__webglFramebuffer);for(let te=0;te<S.length;te++){X.push(r.COLOR_ATTACHMENT0+te),E.depthBuffer&&X.push(N);let $=U.__ignoreDepthValues!==void 0&&U.__ignoreDepthValues;if($===!1&&(E.depthBuffer&&(P|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&(P|=r.STENCIL_BUFFER_BIT)),F&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,U.__webglColorRenderbuffer[te]),$===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[N]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[N])),F){let x=i.get(S[te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,x,0)}r.blitFramebuffer(0,0,O,Z,0,0,O,Z,P,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,X)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),F)for(let te=0;te<S.length;te++){t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,U.__webglColorRenderbuffer[te]);let $=i.get(S[te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,U.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,$,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,U.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=W,this.useMultisampledRTT=K}function ld(r,e,t){let i=t.isWebGL2;return{convert:function(n,s=""){let a,o=Be.getTransfer(s);if(n===Ti)return r.UNSIGNED_BYTE;if(n===vc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===_c)return r.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return r.BYTE;if(n===1011)return r.SHORT;if(n===mo)return r.UNSIGNED_SHORT;if(n===gc)return r.INT;if(n===ni)return r.UNSIGNED_INT;if(n===ri)return r.FLOAT;if(n===Vn)return i?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===1021)return r.ALPHA;if(n===Nt)return r.RGBA;if(n===1024)return r.LUMINANCE;if(n===1025)return r.LUMINANCE_ALPHA;if(n===Ai)return r.DEPTH_COMPONENT;if(n===cn)return r.DEPTH_STENCIL;if(n===_a)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===1028)return r.RED;if(n===yc)return r.RED_INTEGER;if(n===1030)return r.RG;if(n===xc)return r.RG_INTEGER;if(n===Mc)return r.RGBA_INTEGER;if(n===Ps||n===Ls||n===Is||n===Ns)if(o===ze){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(n===Ps)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Is)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ns)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(n===Ps)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Is)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ns)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===Go||n===Wo||n===qo||n===Xo){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(n===Go)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===bc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===jo||n===Yo){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(n===jo)return o===ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Yo)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(n===Zo||n===Jo||n===Ko||n===$o||n===Qo||n===el||n===tl||n===il||n===nl||n===rl||n===sl||n===al||n===ol||n===ll){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(n===Zo)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jo)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ko)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$o)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qo)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===el)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===il)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===al)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ol)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ll)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===Us||n===cl||n===hl){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(n===Us)return o===ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(n===36283||n===ul||n===dl||n===pl){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(n===Us)return a.COMPRESSED_RED_RGTC1_EXT;if(n===ul)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===wi?i?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[n]!==void 0?r[n]:null}}}function hd(r,e){function t(n,s){n.matrixAutoUpdate===!0&&n.updateMatrix(),s.value.copy(n.matrix)}function i(n,s){n.opacity.value=s.opacity,s.color&&n.diffuse.value.copy(s.color),s.emissive&&n.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(n.map.value=s.map,t(s.map,n.mapTransform)),s.alphaMap&&(n.alphaMap.value=s.alphaMap,t(s.alphaMap,n.alphaMapTransform)),s.bumpMap&&(n.bumpMap.value=s.bumpMap,t(s.bumpMap,n.bumpMapTransform),n.bumpScale.value=s.bumpScale,s.side===rt&&(n.bumpScale.value*=-1)),s.normalMap&&(n.normalMap.value=s.normalMap,t(s.normalMap,n.normalMapTransform),n.normalScale.value.copy(s.normalScale),s.side===rt&&n.normalScale.value.negate()),s.displacementMap&&(n.displacementMap.value=s.displacementMap,t(s.displacementMap,n.displacementMapTransform),n.displacementScale.value=s.displacementScale,n.displacementBias.value=s.displacementBias),s.emissiveMap&&(n.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,n.emissiveMapTransform)),s.specularMap&&(n.specularMap.value=s.specularMap,t(s.specularMap,n.specularMapTransform)),s.alphaTest>0&&(n.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(n.envMap.value=a,n.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=s.reflectivity,n.ior.value=s.ior,n.refractionRatio.value=s.refractionRatio),s.lightMap){n.lightMap.value=s.lightMap;let o=r._useLegacyLights===!0?Math.PI:1;n.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,n.lightMapTransform)}s.aoMap&&(n.aoMap.value=s.aoMap,n.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,s){s.color.getRGB(n.fogColor.value,wc(r)),s.isFog?(n.fogNear.value=s.near,n.fogFar.value=s.far):s.isFogExp2&&(n.fogDensity.value=s.density)},refreshMaterialUniforms:function(n,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?i(n,s):s.isMeshToonMaterial?(i(n,s),function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)}(n,s)):s.isMeshPhongMaterial?(i(n,s),function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)}(n,s)):s.isMeshStandardMaterial?(i(n,s),function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),e.get(h).envMap&&(l.envMapIntensity.value=h.envMapIntensity)}(n,s),s.isMeshPhysicalMaterial&&function(l,h,d){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===rt&&l.clearcoatNormalScale.value.negate())),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=d.texture,l.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))}(n,s,c)):s.isMeshMatcapMaterial?(i(n,s),function(l,h){h.matcap&&(l.matcap.value=h.matcap)}(n,s)):s.isMeshDepthMaterial?i(n,s):s.isMeshDistanceMaterial?(i(n,s),function(l,h){let d=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(d.matrixWorld),l.nearDistance.value=d.shadow.camera.near,l.farDistance.value=d.shadow.camera.far}(n,s)):s.isMeshNormalMaterial?i(n,s):s.isLineBasicMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))}(n,s),s.isLineDashedMaterial&&function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale}(n,s)):s.isPointsMaterial?function(l,h,d,u){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*d,l.scale.value=.5*u,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)}(n,s,a,o):s.isSpriteMaterial?function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)}(n,s):s.isShadowMaterial?(n.color.value.copy(s.color),n.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function ud(r,e,t,i){let n={},s={},a=[],o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(d,u,p,f){let _=d.value,m=u+"_"+p;if(f[m]===void 0)return f[m]=typeof _=="number"||typeof _=="boolean"?_:_.clone(),!0;{let y=f[m];if(typeof _=="number"||typeof _=="boolean"){if(y!==_)return f[m]=_,!0}else if(y.equals(_)===!1)return y.copy(_),!0}return!1}function l(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(n[u.id]),delete n[u.id],delete s[u.id]}return{bind:function(d,u){let p=u.program;i.uniformBlockBinding(d,p)},update:function(d,u){let p=n[d.id];p===void 0&&(function(m){let y=m.uniforms,v=0,g=16;for(let C=0,b=y.length;C<b;C++){let w=Array.isArray(y[C])?y[C]:[y[C]];for(let I=0,L=w.length;I<L;I++){let D=w[I],j=Array.isArray(D.value)?D.value:[D.value];for(let R=0,V=j.length;R<V;R++){let H=l(j[R]),ae=v%g;ae!==0&&g-ae<H.boundary&&(v+=g-ae),D.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=H.storage}}}let M=v%g;M>0&&(v+=g-M),m.__size=v,m.__cache={}}(d),p=function(m){let y=function(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();m.__bindingPointIndex=y;let v=r.createBuffer(),g=m.__size,M=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,g,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}(d),n[d.id]=p,d.addEventListener("dispose",h));let f=u.program;i.updateUBOMapping(d,f);let _=e.render.frame;s[d.id]!==_&&(function(m){let y=n[m.id],v=m.uniforms,g=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let M=0,C=v.length;M<C;M++){let b=Array.isArray(v[M])?v[M]:[v[M]];for(let w=0,I=b.length;w<I;w++){let L=b[w];if(c(L,M,w,g)===!0){let D=L.__offset,j=Array.isArray(L.value)?L.value:[L.value],R=0;for(let V=0;V<j.length;V++){let H=j[V],ae=l(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,D+R,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,R),R+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(d),s[d.id]=_)},dispose:function(){for(let d in n)r.deleteBuffer(n[d]);a=[],n={},s={}}}}function vo(){let r=0,e=0,t=0,i=0;function n(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,i=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){n(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,d){let u=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,p*=h,n(a,o,u,p)},calc:function(s){let a=s*s;return r+e*s+t*a+i*(a*s)}}}function nc(r,e,t,i,n){let s=.5*(i-e),a=.5*(n-t),o=r*r;return(2*t-2*i+s+a)*(r*o)+(-3*t+3*i-2*s-a)*o+s*r+t}function Fn(r,e,t,i){return function(n,s){let a=1-n;return a*a*s}(r,e)+function(n,s){return 2*(1-n)*n*s}(r,t)+function(n,s){return n*n*s}(r,i)}function zn(r,e,t,i,n){return function(s,a){let o=1-s;return o*o*o*a}(r,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,i)+function(s,a){return s*s*s*a}(r,n)}function rc(r,e,t,i,n){let s,a;if(n===function(o,c,l,h){let d=0;for(let u=c,p=l-h;u<l;u+=h)d+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return d}(r,e,t,i)>0)for(s=e;s<t;s+=i)a=sc(s,r[s],r[s+1],a);else for(s=t-i;s>=e;s-=i)a=sc(s,r[s],r[s+1],a);return a&&gs(a,a.next)&&(Zn(a),a=a.next),a}function Ni(r,e){if(!r)return r;e||(e=r);let t,i=r;do if(t=!1,i.steiner||!gs(i,i.next)&&Ge(i.prev,i,i.next)!==0)i=i.next;else{if(Zn(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function jn(r,e,t,i,n,s,a){if(!r)return;!a&&s&&function(h,d,u,p){let f=h;do f.z===0&&(f.z=Xa(f.x,f.y,d,u,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,function(_){let m,y,v,g,M,C,b,w,I=1;do{for(y=_,_=null,M=null,C=0;y;){for(C++,v=y,b=0,m=0;m<I&&(b++,v=v.nextZ,v);m++);for(w=I;b>0||w>0&&v;)b!==0&&(w===0||!v||y.z<=v.z)?(g=y,y=y.nextZ,b--):(g=v,v=v.nextZ,w--),M?M.nextZ=g:_=g,g.prevZ=M,M=g;y=v}M.nextZ=null,I*=2}while(C>1)}(f)}(r,i,n,s);let o,c,l=r;for(;r.prev!==r.next;)if(o=r.prev,c=r.next,s?md(r,i,n,s):pd(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Zn(r),r=c.next,l=c.next;else if((r=c)===l){a?a===1?jn(r=fd(Ni(r),e,t),e,t,i,n,s,2):a===2&&gd(r,e,t,i,n,s):jn(Ni(r),e,t,i,n,s,1);break}}function pd(r){let e=r.prev,t=r,i=r.next;if(Ge(e,t,i)>=0)return!1;let n=e.x,s=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=n<s?n<a?n:a:s<a?s:a,d=o<c?o<l?o:l:c<l?c:l,u=n>s?n>a?n:a:s>a?s:a,p=o>c?o>l?o:l:c>l?c:l,f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=u&&f.y>=d&&f.y<=p&&nn(n,o,s,c,a,l,f.x,f.y)&&Ge(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function md(r,e,t,i){let n=r.prev,s=r,a=r.next;if(Ge(n,s,a)>=0)return!1;let o=n.x,c=s.x,l=a.x,h=n.y,d=s.y,u=a.y,p=o<c?o<l?o:l:c<l?c:l,f=h<d?h<u?h:u:d<u?d:u,_=o>c?o>l?o:l:c>l?c:l,m=h>d?h>u?h:u:d>u?d:u,y=Xa(p,f,e,t,i),v=Xa(_,m,e,t,i),g=r.prevZ,M=r.nextZ;for(;g&&g.z>=y&&M&&M.z<=v;){if(g.x>=p&&g.x<=_&&g.y>=f&&g.y<=m&&g!==n&&g!==a&&nn(o,h,c,d,l,u,g.x,g.y)&&Ge(g.prev,g,g.next)>=0||(g=g.prevZ,M.x>=p&&M.x<=_&&M.y>=f&&M.y<=m&&M!==n&&M!==a&&nn(o,h,c,d,l,u,M.x,M.y)&&Ge(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;g&&g.z>=y;){if(g.x>=p&&g.x<=_&&g.y>=f&&g.y<=m&&g!==n&&g!==a&&nn(o,h,c,d,l,u,g.x,g.y)&&Ge(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;M&&M.z<=v;){if(M.x>=p&&M.x<=_&&M.y>=f&&M.y<=m&&M!==n&&M!==a&&nn(o,h,c,d,l,u,M.x,M.y)&&Ge(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function fd(r,e,t){let i=r;do{let n=i.prev,s=i.next.next;!gs(n,s)&&Nc(n,i,i.next,s)&&Yn(n,s)&&Yn(s,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),Zn(i),Zn(i.next),i=r=s),i=i.next}while(i!==r);return Ni(i)}function gd(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Md(a,o)){let c=Uc(a,o);return a=Ni(a,a.next),c=Ni(c,c.next),jn(a,e,t,i,n,s,0),void jn(c,e,t,i,n,s,0)}o=o.next}a=a.next}while(a!==r)}function vd(r,e){return r.x-e.x}function _d(r,e){let t=function(n,s){let a,o=s,c=-1/0,l=n.x,h=n.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=l&&m>c&&(c=m,a=o.x<o.next.x?o:o.next,m===l))return a}o=o.next}while(o!==s);if(!a)return null;let d=a,u=a.x,p=a.y,f,_=1/0;o=a;do l>=o.x&&o.x>=u&&l!==o.x&&nn(h<p?l:c,h,u,p,h<p?c:l,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(l-o.x),Yn(o,n)&&(f<_||f===_&&(o.x>a.x||o.x===a.x&&yd(a,o)))&&(a=o,_=f)),o=o.next;while(o!==d);return a}(r,e);if(!t)return e;let i=Uc(t,r);return Ni(i,i.next),Ni(t,t.next)}function yd(r,e){return Ge(r.prev,r,e.prev)<0&&Ge(e.next,r,r.next)<0}function Xa(r,e,t,i,n){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*n|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function xd(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function nn(r,e,t,i,n,s,a,o){return(n-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(n-a)*(i-o)}function Md(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&Nc(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1}(r,e)&&(Yn(r,e)&&Yn(e,r)&&function(t,i){let n=t,s=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==t);return s}(r,e)&&(Ge(r.prev,r,e.prev)||Ge(r,e.prev,e))||gs(r,e)&&Ge(r.prev,r,r.next)>0&&Ge(e.prev,e,e.next)>0)}function Ge(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function gs(r,e){return r.x===e.x&&r.y===e.y}function Nc(r,e,t,i){let n=Ur(Ge(r,e,t)),s=Ur(Ge(r,e,i)),a=Ur(Ge(t,i,r)),o=Ur(Ge(t,i,e));return n!==s&&a!==o||!(n!==0||!Nr(r,t,e))||!(s!==0||!Nr(r,i,e))||!(a!==0||!Nr(t,r,i))||!(o!==0||!Nr(t,e,i))}function Nr(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ur(r){return r>0?1:r<0?-1:0}function Yn(r,e){return Ge(r.prev,r,r.next)<0?Ge(r,e,r.next)>=0&&Ge(r,r.prev,e)>=0:Ge(r,e,r.prev)<0||Ge(r,r.next,e)<0}function Uc(r,e){let t=new ja(r.i,r.x,r.y),i=new ja(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function sc(r,e,t,i){let n=new ja(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Zn(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ja(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ac(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function oc(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}function lc(r,e,t){let i=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}function Dr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Sd(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var ua,dc,uh,Xt,oi,rt,pc,Mi,da,pa,mc,dh,ph,si,mh,fh,gh,po,vh,_h,fc,on,ln,ma,fa,ps,ga,Yt,va,ct,Ho,Rs,Rt,yh,Or,Ti,mo,gc,ni,ri,Vn,vc,_c,wi,Nt,Ai,cn,yc,xc,Mc,Ps,Ls,Is,Ns,Go,Wo,qo,Xo,bc,jo,Yo,Zo,Jo,Ko,$o,Qo,el,tl,il,nl,rl,sl,al,ol,ll,Us,cl,hl,ul,dl,pl,Br,Fr,Ds,ml,fl,gl,Sc,Ci,Ut,je,Zt,fo,ms,zr,ze,kr,Vr,zi,vl,_l,_a,hn,Hr,li,tt,yl,rn,Hn,ui,se,Ae,Os,xl,Ml,bl,or,Mh,Be,ki,qr,bh,Xr,Sh,xt,Fe,Ma,Jt,jr,ba,Ot,T,zs,Sl,Bt,Vt,wt,lr,Vi,Hi,Gi,$t,Qt,gi,Rn,cr,hr,vi,Eh,Pn,Vs,Ft,Ht,Hs,ur,ei,Gs,dr,Ws,un,Te,Wi,At,Th,wh,ti,pr,mt,El,Tl,Yr,Zr,Ah,wl,qi,Gt,mr,Ln,Ch,Rh,Al,Cl,Rl,Ph,Lh,ut,Ct,Wt,qs,qt,Xi,ji,Pl,Xs,js,Ys,fr,Ei,Tc,ii,gr,be,it,Ih,Ri,ci,Jd,We,vr,Mt,Jr,Kr,Me,Uh,yt,Js,Yi,ft,In,$e,qe,Ll,_i,_r,Il,Zi,Ji,Ki,Ks,yr,xr,Mr,br,Nl,Ul,Dl,Sr,Er,Re,zt,Dh,Kt,Gn,nt,$i,Sa,$r,Ea,$s,Oh,Bh,jt,yi,wr,pn,mn,Se,le,It,Ar,Qr,Ol,Nn,Qs,Bl,ea,ta,ia,xi,Qi,Fl,fn,es,Cc,Rc,Pc,Lc,Ic,Hl,Gl,Wl,ql,Xl,Ta,wa,Aa,na,an,zu,ku,Gu,Wu,Xu,Zu,Ra,Pa,td,La,Ia,Na,Dt,cd,Bn,Ua,Wn,Da,gn,Kd,$d,Qd,ep,tp,ip,np,rp,sp,ap,op,lp,cp,hp,up,dp,pp,mp,fp,gp,vp,_p,yp,xp,Mp,bp,Sp,Ep,Tp,wp,Ap,Cp,Oa,Rp,Pp,Lp,Ip,Np,Up,Dp,Op,Bp,Fp,zp,kp,Vp,Hp,Gp,Wp,qp,Xp,jp,Yp,Zp,ts,bt,qn,Ba,Rr,ra,sa,aa,vn,is,Fa,ns,za,rs,ss,as,os,ka,Xn,ls,Va,Ha,Pi,Ga,Li,Wa,Pr,Lr,oa,Ir,qa,Ii,dd,ai,_n,bd,Ya,Za,Ja,Jn,Kn,Ka,$a,Qa,yn,eo,Jp,hi,xn,Mn,to,io,no,Pt,bi,ro,so,ao,kn,Si,oo,lo,Ed,co,cs,la,cc,hc,hs,uc,Un,ca,ho,us,uo,ds,Kp,$p,Qp,em,tm,im,nm,rm,sm,am,om,_o,Td,ha,wd,Ad,Cd,ke,lm,cm,hm,um,dm,pm,mm,fm,gm,vm,_m,ym,xm,Mm,bm,Sm,Em,Tm,yo=ws(()=>{ua="160",dc=1,uh=2,Xt=3,oi=0,rt=1,pc=2,Mi=100,da=204,pa=205,mc=0,dh=1,ph=2,si=0,mh=1,fh=2,gh=3,po=4,vh=5,_h=6,fc=300,on=301,ln=302,ma=303,fa=304,ps=306,ga=1e3,Yt=1001,va=1002,ct=1003,Ho=1004,Rs=1005,Rt=1006,yh=1007,Or=1008,Ti=1009,mo=1012,gc=1013,ni=1014,ri=1015,Vn=1016,vc=1017,_c=1018,wi=1020,Nt=1023,Ai=1026,cn=1027,yc=1029,xc=1031,Mc=1033,Ps=33776,Ls=33777,Is=33778,Ns=33779,Go=35840,Wo=35841,qo=35842,Xo=35843,bc=36196,jo=37492,Yo=37496,Zo=37808,Jo=37809,Ko=37810,$o=37811,Qo=37812,el=37813,tl=37814,il=37815,nl=37816,rl=37817,sl=37818,al=37819,ol=37820,ll=37821,Us=36492,cl=36494,hl=36495,ul=36284,dl=36285,pl=36286,Br=2300,Fr=2301,Ds=2302,ml=2400,fl=2401,gl=2402,Sc=3e3,Ci=3001,Ut="",je="srgb",Zt="srgb-linear",fo="display-p3",ms="display-p3-linear",zr="linear",ze="srgb",kr="rec709",Vr="p3",zi=7680,vl=35044,_l="300 es",_a=1035,hn=2e3,Hr=2001,li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,s=i.length;n<s;n++)i[n].call(this,e);e.target=null}}},tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yl=1234567,rn=Math.PI/180,Hn=180/Math.PI;ui={DEG2RAD:rn,RAD2DEG:Hn,generateUUID:Ui,clamp:Ye,euclideanModulo:ya,mapLinear:function(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:Dn,damp:function(r,e,t,i){return Dn(r,e,1-Math.exp(-t*i))},pingpong:function(r,e=1){return e-Math.abs(ya(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(yl=r);let e=yl+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*rn},radToDeg:function(r){return r*Hn},isPowerOfTwo:xa,ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:Gr,setQuaternionFromProperEuler:function(r,e,t,i,n){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),f=a((i-e)/2);switch(n){case"XYX":r.set(o*h,c*d,c*u,o*l);break;case"YZY":r.set(c*u,o*h,c*d,o*l);break;case"ZXZ":r.set(c*d,c*u,o*h,o*l);break;case"XZX":r.set(o*h,c*f,c*p,o*l);break;case"YXY":r.set(c*p,o*h,c*f,o*l);break;case"ZYZ":r.set(c*f,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}},normalize:ot,denormalize:tn},se=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ae=class r{constructor(e,t,i,n,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l)}set(e,t,i,n,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],p=i[5],f=i[8],_=n[0],m=n[3],y=n[6],v=n[1],g=n[4],M=n[7],C=n[2],b=n[5],w=n[8];return s[0]=a*_+o*v+c*C,s[3]=a*m+o*g+c*b,s[6]=a*y+o*M+c*w,s[1]=l*_+h*v+d*C,s[4]=l*m+h*g+d*b,s[7]=l*y+h*M+d*w,s[2]=u*_+p*v+f*C,s[5]=u*m+p*g+f*b,s[8]=u*y+p*M+f*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+n*s*l-n*a*c}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*s,p=l*s-a*c,f=t*d+i*u+n*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return e[0]=d*_,e[1]=(n*l-h*i)*_,e[2]=(o*i-n*a)*_,e[3]=u*_,e[4]=(h*t-n*c)*_,e[5]=(n*s-o*t)*_,e[6]=p*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-n*l,n*c,-n*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Os.makeScale(e,t)),this}rotate(e){return this.premultiply(Os.makeRotation(-e)),this}translate(e,t){return this.premultiply(Os.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Os=new Ae;xl={};Ml=new Ae().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bl=new Ae().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),or={[Zt]:{transfer:zr,primaries:kr,toReference:r=>r,fromReference:r=>r},[je]:{transfer:ze,primaries:kr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ms]:{transfer:zr,primaries:Vr,toReference:r=>r.applyMatrix3(bl),fromReference:r=>r.applyMatrix3(Ml)},[fo]:{transfer:ze,primaries:Vr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(bl),fromReference:r=>r.applyMatrix3(Ml).convertLinearToSRGB()}},Mh=new Set([Zt,ms]),Be={enabled:!0,_workingColorSpace:Zt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Mh.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let i=or[e].toReference;return(0,or[t].fromReference)(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return or[r].primaries},getTransfer:function(r){return r===Ut?zr:or[r].transfer}};qr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=Wr("canvas")),ki.width=e.width,ki.height=e.height;let i=ki.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=255*sn(s[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*sn(t[i]/255)):t[i]=sn(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bh=0,Xr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Fs(n[a].image)):s.push(Fs(n[a]))}else s=Fs(n);i.url=s}return t||(e.images[this.uuid]=i),i}};Sh=0,xt=class r extends li{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,c=1009,l=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Ui(),this.name="",this.source=new Xr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(On("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ci?je:Ut),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ga:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case ga:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return On("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===je?Ci:Sc}set encoding(e){On("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ci?je:Ut}};xt.DEFAULT_IMAGE=null,xt.DEFAULT_MAPPING=fc,xt.DEFAULT_ANISOTROPY=1;Fe=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],f=c[9],_=c[2],m=c[6],y=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(f+m)<.1&&Math.abs(l+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(l+1)/2,M=(p+1)/2,C=(y+1)/2,b=(h+u)/4,w=(d+_)/4,I=(f+m)/4;return g>M&&g>C?g<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(g),n=b/i,s=w/i):M>C?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=b/n,s=I/n):C<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(C),i=w/s,n=I/s),this.set(i,n,s,t),this}let v=Math.sqrt((m-f)*(m-f)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-f)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((l+p+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ma=class extends li{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Fe(0,0,e,t),this.scissorTest=!1,this.viewport=new Fe(0,0,e,t);let n={width:e,height:t,depth:1};i.encoding!==void 0&&(On("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ci?je:Ut),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new xt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){this.width===e&&this.height===t&&this.depth===i||(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Xr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends Ma{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},jr=class extends xt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ct,this.minFilter=ct,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ba=class extends xt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ct,this.minFilter=ct,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ot=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let c=i[n+0],l=i[n+1],h=i[n+2],d=i[n+3],u=s[a+0],p=s[a+1],f=s[a+2],_=s[a+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=f,void(e[t+3]=_);if(d!==_||c!==u||l!==p||h!==f){let m=1-o,y=c*u+l*p+h*f+d*_,v=y>=0?1:-1,g=1-y*y;if(g>Number.EPSILON){let C=Math.sqrt(g),b=Math.atan2(C,y*v);m=Math.sin(m*b)/C,o=Math.sin(o*b)/C}let M=o*v;if(c=c*m+u*M,l=l*m+p*M,h=h*m+f*M,d=d*m+_*M,m===1-o){let C=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=C,l*=C,h*=C,d*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],d=s[a],u=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*d+c*p-l*u,e[t+1]=c*f+h*u+l*d-o*p,e[t+2]=l*f+h*p+o*u-c*d,e[t+3]=h*f-o*d-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),d=o(s/2),u=c(i/2),p=c(n/2),f=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*p*f,this._y=l*p*d-u*h*f,this._z=l*h*f+u*p*d,this._w=l*h*d-u*p*f;break;case"YXZ":this._x=u*h*d+l*p*f,this._y=l*p*d-u*h*f,this._z=l*h*f-u*p*d,this._w=l*h*d+u*p*f;break;case"ZXY":this._x=u*h*d-l*p*f,this._y=l*p*d+u*h*f,this._z=l*h*f+u*p*d,this._w=l*h*d-u*p*f;break;case"ZYX":this._x=u*h*d-l*p*f,this._y=l*p*d+u*h*f,this._z=l*h*f-u*p*d,this._w=l*h*d+u*p*f;break;case"YZX":this._x=u*h*d+l*p*f,this._y=l*p*d+u*h*f,this._z=l*h*f-u*p*d,this._w=l*h*d-u*p*f;break;case"XZY":this._x=u*h*d-l*p*f,this._y=l*p*d-u*h*f,this._z=l*h*f+u*p*d,this._w=l*h*d+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-n)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(s+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(s-l)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-n)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+n*l-s*c,this._y=n*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-n*o,this._w=a*h-i*o-n*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*n-o*i),h=2*(o*t-s*n),d=2*(s*i-a*t);return this.x=t+c*l+a*d-o*h,this.y=i+c*h+o*l-s*d,this.z=n+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=n*c-s*o,this.y=s*a-i*c,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zs.copy(this).projectOnVector(e),this.sub(zs)}reflect(e){return this.sub(zs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zs=new T,Sl=new Ot,Bt=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wt):wt.fromBufferAttribute(s,a),wt.applyMatrix4(e.matrixWorld),this.expandByPoint(wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lr.copy(i.boundingBox)),lr.applyMatrix4(e.matrixWorld),this.union(lr)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wt),wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rn),cr.subVectors(this.max,Rn),Vi.subVectors(e.a,Rn),Hi.subVectors(e.b,Rn),Gi.subVectors(e.c,Rn),$t.subVectors(Hi,Vi),Qt.subVectors(Gi,Hi),gi.subVectors(Vi,Gi);let t=[0,-$t.z,$t.y,0,-Qt.z,Qt.y,0,-gi.z,gi.y,$t.z,0,-$t.x,Qt.z,0,-Qt.x,gi.z,0,-gi.x,-$t.y,$t.x,0,-Qt.y,Qt.x,0,-gi.y,gi.x,0];return!!ks(t,Vi,Hi,Gi,cr)&&(t=[1,0,0,0,1,0,0,0,1],!!ks(t,Vi,Hi,Gi,cr)&&(hr.crossVectors($t,Qt),t=[hr.x,hr.y,hr.z],ks(t,Vi,Hi,Gi,cr)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(wt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Vt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vt)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Vt=[new T,new T,new T,new T,new T,new T,new T,new T],wt=new T,lr=new Bt,Vi=new T,Hi=new T,Gi=new T,$t=new T,Qt=new T,gi=new T,Rn=new T,cr=new T,hr=new T,vi=new T;Eh=new Bt,Pn=new T,Vs=new T,Ft=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Eh.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pn.subVectors(e,this.center);let t=Pn.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(Pn,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pn.copy(e.center).add(Vs)),this.expandByPoint(Pn.copy(e.center).sub(Vs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ht=new T,Hs=new T,ur=new T,ei=new T,Gs=new T,dr=new T,Ws=new T,un=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ht)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ht.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ht.copy(this.origin).addScaledVector(this.direction,t),Ht.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Hs.copy(e).add(t).multiplyScalar(.5),ur.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Hs);let s=.5*e.distanceTo(t),a=-this.direction.dot(ur),o=ei.dot(this.direction),c=-ei.dot(ur),l=ei.lengthSq(),h=Math.abs(1-a*a),d,u,p,f;if(h>0)if(d=a*c-o,u=a*o-c,f=s*h,d>=0)if(u>=-f)if(u<=f){let _=1/h;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-f?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l):u<=f?(d=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Hs).addScaledVector(ur,u),p}intersectSphere(e,t){Ht.subVectors(e.center,this.origin);let i=Ht.dot(this.direction),n=Ht.dot(Ht)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,n=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,n=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>n?null:((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||o>n?null:((o>i||i!=i)&&(i=o),(c<n||n!=n)&&(n=c),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,Ht)!==null}intersectTriangle(e,t,i,n,s){Gs.subVectors(t,e),dr.subVectors(i,e),Ws.crossVectors(Gs,dr);let a,o=this.direction.dot(Ws);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}ei.subVectors(this.origin,e);let c=a*this.direction.dot(dr.crossVectors(ei,dr));if(c<0)return null;let l=a*this.direction.dot(Gs.cross(ei));if(l<0||c+l>o)return null;let h=-a*ei.dot(Ws);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Te=class r{constructor(e,t,i,n,s,a,o,c,l,h,d,u,p,f,_,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l,h,d,u,p,f,_,m)}set(e,t,i,n,s,a,o,c,l,h,d,u,p,f,_,m){let y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=n,y[1]=s,y[5]=a,y[9]=o,y[13]=c,y[2]=l,y[6]=h,y[10]=d,y[14]=u,y[3]=p,y[7]=f,y[11]=_,y[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/Wi.setFromMatrixColumn(e,0).length(),s=1/Wi.setFromMatrixColumn(e,1).length(),a=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,p=a*d,f=o*h,_=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+f*l,t[5]=u-_*l,t[9]=-o*c,t[2]=_-u*l,t[6]=f+p*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,p=c*d,f=l*h,_=l*d;t[0]=u+_*o,t[4]=f*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=_+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,p=c*d,f=l*h,_=l*d;t[0]=u-_*o,t[4]=-a*d,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,p=a*d,f=o*h,_=o*d;t[0]=c*h,t[4]=f*l-p,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=p*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,p=a*l,f=o*c,_=o*l;t[0]=c*h,t[4]=_-u*d,t[8]=f*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+f,t[10]=u-_*d}else if(e.order==="XZY"){let u=a*c,p=a*l,f=o*c,_=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=a*h,t[9]=p*d-f,t[2]=f*d-p,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Th,e,wh)}lookAt(e,t,i){let n=this.elements;return mt.subVectors(e,t),mt.lengthSq()===0&&(mt.z=1),mt.normalize(),ti.crossVectors(i,mt),ti.lengthSq()===0&&(Math.abs(i.z)===1?mt.x+=1e-4:mt.z+=1e-4,mt.normalize(),ti.crossVectors(i,mt)),ti.normalize(),pr.crossVectors(mt,ti),n[0]=ti.x,n[4]=pr.x,n[8]=mt.x,n[1]=ti.y,n[5]=pr.y,n[9]=mt.y,n[2]=ti.z,n[6]=pr.z,n[10]=mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],p=i[13],f=i[2],_=i[6],m=i[10],y=i[14],v=i[3],g=i[7],M=i[11],C=i[15],b=n[0],w=n[4],I=n[8],L=n[12],D=n[1],j=n[5],R=n[9],V=n[13],H=n[2],ae=n[6],oe=n[10],W=n[14],Y=n[3],ee=n[7],B=n[11],K=n[15];return s[0]=a*b+o*D+c*H+l*Y,s[4]=a*w+o*j+c*ae+l*ee,s[8]=a*I+o*R+c*oe+l*B,s[12]=a*L+o*V+c*W+l*K,s[1]=h*b+d*D+u*H+p*Y,s[5]=h*w+d*j+u*ae+p*ee,s[9]=h*I+d*R+u*oe+p*B,s[13]=h*L+d*V+u*W+p*K,s[2]=f*b+_*D+m*H+y*Y,s[6]=f*w+_*j+m*ae+y*ee,s[10]=f*I+_*R+m*oe+y*B,s[14]=f*L+_*V+m*W+y*K,s[3]=v*b+g*D+M*H+C*Y,s[7]=v*w+g*j+M*ae+C*ee,s[11]=v*I+g*R+M*oe+C*B,s[15]=v*L+g*V+M*W+C*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+s*c*d-n*l*d-s*o*u+i*l*u+n*o*p-i*c*p)+e[7]*(+t*c*p-t*l*u+s*a*u-n*a*p+n*l*h-s*c*h)+e[11]*(+t*l*d-t*o*p-s*a*d+i*a*p+s*o*h-i*l*h)+e[15]*(-n*o*h-t*c*d+t*o*u+n*a*d-i*a*u+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],p=e[11],f=e[12],_=e[13],m=e[14],y=e[15],v=d*m*l-_*u*l+_*c*p-o*m*p-d*c*y+o*u*y,g=f*u*l-h*m*l-f*c*p+a*m*p+h*c*y-a*u*y,M=h*_*l-f*d*l+f*o*p-a*_*p-h*o*y+a*d*y,C=f*d*c-h*_*c-f*o*u+a*_*u+h*o*m-a*d*m,b=t*v+i*g+n*M+s*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/b;return e[0]=v*w,e[1]=(_*u*s-d*m*s-_*n*p+i*m*p+d*n*y-i*u*y)*w,e[2]=(o*m*s-_*c*s+_*n*l-i*m*l-o*n*y+i*c*y)*w,e[3]=(d*c*s-o*u*s-d*n*l+i*u*l+o*n*p-i*c*p)*w,e[4]=g*w,e[5]=(h*m*s-f*u*s+f*n*p-t*m*p-h*n*y+t*u*y)*w,e[6]=(f*c*s-a*m*s-f*n*l+t*m*l+a*n*y-t*c*y)*w,e[7]=(a*u*s-h*c*s+h*n*l-t*u*l-a*n*p+t*c*p)*w,e[8]=M*w,e[9]=(f*d*s-h*_*s-f*i*p+t*_*p+h*i*y-t*d*y)*w,e[10]=(a*_*s-f*o*s+f*i*l-t*_*l-a*i*y+t*o*y)*w,e[11]=(h*o*s-a*d*s-h*i*l+t*d*l+a*i*p-t*o*p)*w,e[12]=C*w,e[13]=(h*_*n-f*d*n+f*i*u-t*_*u-h*i*m+t*d*m)*w,e[14]=(f*o*n-a*_*n-f*i*c+t*_*c+a*i*m-t*o*m)*w,e[15]=(a*d*n-h*o*n+h*i*c-t*d*c-a*i*u+t*o*u)*w,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*a,0,l*c-n*o,h*c+n*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,u=s*l,p=s*h,f=s*d,_=a*h,m=a*d,y=o*d,v=c*l,g=c*h,M=c*d,C=i.x,b=i.y,w=i.z;return n[0]=(1-(_+y))*C,n[1]=(p+M)*C,n[2]=(f-g)*C,n[3]=0,n[4]=(p-M)*b,n[5]=(1-(u+y))*b,n[6]=(m+v)*b,n[7]=0,n[8]=(f+g)*w,n[9]=(m-v)*w,n[10]=(1-(u+_))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=Wi.set(n[0],n[1],n[2]).length(),a=Wi.set(n[4],n[5],n[6]).length(),o=Wi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],At.copy(this);let c=1/s,l=1/a,h=1/o;return At.elements[0]*=c,At.elements[1]*=c,At.elements[2]*=c,At.elements[4]*=l,At.elements[5]*=l,At.elements[6]*=l,At.elements[8]*=h,At.elements[9]*=h,At.elements[10]*=h,t.setFromRotationMatrix(At),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=2e3){let c=this.elements,l=2*s/(t-e),h=2*s/(i-n),d=(t+e)/(t-e),u=(i+n)/(i-n),p,f;if(o===hn)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==Hr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=f,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=2e3){let c=this.elements,l=1/(t-e),h=1/(i-n),d=1/(a-s),u=(t+e)*l,p=(i+n)*h,f,_;if(o===hn)f=(a+s)*d,_=-2*d;else{if(o!==Hr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*d,_=-1*d}return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-f,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Wi=new T,At=new Te,Th=new T(0,0,0),wh=new T(1,1,1),ti=new T,pr=new T,mt=new T,El=new Te,Tl=new Ot,Yr=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],c=n[1],l=n[5],h=n[9],d=n[2],u=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return El.makeRotationFromQuaternion(e),this.setFromRotationMatrix(El,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yr.DEFAULT_ORDER="XYZ";Zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Ah=0,wl=new T,qi=new Ot,Gt=new Te,mr=new T,Ln=new T,Ch=new T,Rh=new Ot,Al=new T(1,0,0),Cl=new T(0,1,0),Rl=new T(0,0,1),Ph={type:"added"},Lh={type:"removed"},ut=class r extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new T,t=new Yr,i=new Ot,n=new T(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Te},normalMatrix:{value:new Ae}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(Al,e)}rotateY(e){return this.rotateOnAxis(Cl,e)}rotateZ(e){return this.rotateOnAxis(Rl,e)}translateOnAxis(e,t){return wl.copy(e).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Al,e)}translateY(e){return this.translateOnAxis(Cl,e)}translateZ(e){return this.translateOnAxis(Rl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?mr.copy(e):mr.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Ln.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gt.lookAt(Ln,mr,this.up):Gt.lookAt(mr,Ln,this.up),this.quaternion.setFromRotationMatrix(Gt),n&&(Gt.extractRotation(n.matrixWorld),qi.setFromRotationMatrix(Gt),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ph)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lh)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ln,e,Ch),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ln,Rh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++){let s=t[i];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++){let o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=n,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};ut.DEFAULT_UP=new T(0,1,0),ut.DEFAULT_MATRIX_AUTO_UPDATE=!0,ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Ct=new T,Wt=new T,qs=new T,qt=new T,Xi=new T,ji=new T,Pl=new T,Xs=new T,js=new T,Ys=new T,fr=!1,Ei=class r{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ct.subVectors(e,t),n.cross(Ct);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Ct.subVectors(n,t),Wt.subVectors(i,t),qs.subVectors(e,t);let a=Ct.dot(Ct),o=Ct.dot(Wt),c=Ct.dot(qs),l=Wt.dot(Wt),h=Wt.dot(qs),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,p=(l*c-o*h)*u,f=(a*h-o*c)*u;return s.set(1-p-f,f,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,qt)!==null&&qt.x>=0&&qt.y>=0&&qt.x+qt.y<=1}static getUV(e,t,i,n,s,a,o,c){return fr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fr=!0),this.getInterpolation(e,t,i,n,s,a,o,c)}static getInterpolation(e,t,i,n,s,a,o,c){return this.getBarycoord(e,t,i,n,qt)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,qt.x),c.addScaledVector(a,qt.y),c.addScaledVector(o,qt.z),c)}static isFrontFacing(e,t,i,n){return Ct.subVectors(i,t),Wt.subVectors(e,t),Ct.cross(Wt).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ct.subVectors(this.c,this.b),Wt.subVectors(this.a,this.b),.5*Ct.cross(Wt).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return fr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fr=!0),r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;Xi.subVectors(n,i),ji.subVectors(s,i),Xs.subVectors(e,i);let c=Xi.dot(Xs),l=ji.dot(Xs);if(c<=0&&l<=0)return t.copy(i);js.subVectors(e,n);let h=Xi.dot(js),d=ji.dot(js);if(h>=0&&d<=h)return t.copy(n);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Xi,a);Ys.subVectors(e,s);let p=Xi.dot(Ys),f=ji.dot(Ys);if(f>=0&&p<=f)return t.copy(s);let _=p*l-c*f;if(_<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector(ji,o);let m=h*f-p*d;if(m<=0&&d-h>=0&&p-f>=0)return Pl.subVectors(s,n),o=(d-h)/(d-h+(p-f)),t.copy(n).addScaledVector(Pl,o);let y=1/(m+_+u);return a=_*y,o=u*y,t.copy(i).addScaledVector(Xi,a).addScaledVector(ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},gr={h:0,s:0,l:0};be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Be.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Be.workingColorSpace){return this.r=e,this.g=t,this.b=i,Be.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Be.workingColorSpace){if(e=ya(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Zs(a,s,e+1/3),this.g=Zs(a,s,e),this.b=Zs(a,s,e-1/3)}return Be.toWorkingColorSpace(this,n),this}setStyle(e,t=je){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=je){let i=Tc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sn(e.r),this.g=sn(e.g),this.b=sn(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=je){return Be.fromWorkingColorSpace(it.copy(this),e),65536*Math.round(Ye(255*it.r,0,255))+256*Math.round(Ye(255*it.g,0,255))+Math.round(Ye(255*it.b,0,255))}getHexString(e=je){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Be.workingColorSpace){Be.fromWorkingColorSpace(it.copy(this),t);let i=it.r,n=it.g,s=it.b,a=Math.max(i,n,s),o=Math.min(i,n,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(n-s)/d+(n<s?6:0);break;case n:c=(s-i)/d+2;break;case s:c=(i-n)/d+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Be.workingColorSpace){return Be.fromWorkingColorSpace(it.copy(this),t),e.r=it.r,e.g=it.g,e.b=it.b,e}getStyle(e=je){Be.fromWorkingColorSpace(it.copy(this),e);let t=it.r,i=it.g,n=it.b;return e!==je?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(gr);let i=Dn(ii.h,gr.h,t),n=Dn(ii.s,gr.s,t),s=Dn(ii.l,gr.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},it=new be;be.NAMES=Tc;Ih=0,Ri=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=1,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=da,this.blendDst=pa,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==da&&(i.blendSrc=this.blendSrc),this.blendDst!==pa&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ci=class extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jd=Nh();We=new T,vr=new se,Mt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vr.fromBufferAttribute(this,t),vr.applyMatrix3(e),this.setXY(t,vr.x,vr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)We.fromBufferAttribute(this,t),We.applyMatrix3(e),this.setXYZ(t,We.x,We.y,We.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)We.fromBufferAttribute(this,t),We.applyMatrix4(e),this.setXYZ(t,We.x,We.y,We.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)We.fromBufferAttribute(this,t),We.applyNormalMatrix(e),this.setXYZ(t,We.x,We.y,We.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)We.fromBufferAttribute(this,t),We.transformDirection(e),this.setXYZ(t,We.x,We.y,We.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=tn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),i=ot(i,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vl&&(e.usage=this.usage),e}},Jr=class extends Mt{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Kr=class extends Mt{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Me=class extends Mt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Uh=0,yt=new Te,Js=new ut,Yi=new T,ft=new Bt,In=new Bt,$e=new T,qe=class r extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ec(e)?Kr:Jr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ae().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yt.makeRotationFromQuaternion(e),this.applyMatrix4(yt),this}rotateX(e){return yt.makeRotationX(e),this.applyMatrix4(yt),this}rotateY(e){return yt.makeRotationY(e),this.applyMatrix4(yt),this}rotateZ(e){return yt.makeRotationZ(e),this.applyMatrix4(yt),this}translate(e,t,i){return yt.makeTranslation(e,t,i),this.applyMatrix4(yt),this}scale(e,t,i){return yt.makeScale(e,t,i),this.applyMatrix4(yt),this}lookAt(e){return Js.lookAt(e),Js.updateMatrix(),this.applyMatrix4(Js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Me(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];ft.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,ft.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,ft.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(ft.min),this.boundingBox.expandByPoint(ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ft);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new T,1/0);if(e){let i=this.boundingSphere.center;if(ft.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];In.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(ft.min,In.min),ft.expandByPoint($e),$e.addVectors(ft.max,In.max),ft.expandByPoint($e)):(ft.expandByPoint(In.min),ft.expandByPoint(In.max))}ft.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)$e.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared($e));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)$e.fromBufferAttribute(o,l),c&&(Yi.fromBufferAttribute(e,l),$e.add(Yi)),n=Math.max(n,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=e.array,n=t.position.array,s=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let D=0;D<o;D++)l[D]=new T,h[D]=new T;let d=new T,u=new T,p=new T,f=new se,_=new se,m=new se,y=new T,v=new T;function g(D,j,R){d.fromArray(n,3*D),u.fromArray(n,3*j),p.fromArray(n,3*R),f.fromArray(a,2*D),_.fromArray(a,2*j),m.fromArray(a,2*R),u.sub(d),p.sub(d),_.sub(f),m.sub(f);let V=1/(_.x*m.y-m.x*_.y);isFinite(V)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(V),v.copy(p).multiplyScalar(_.x).addScaledVector(u,-m.x).multiplyScalar(V),l[D].add(y),l[j].add(y),l[R].add(y),h[D].add(v),h[j].add(v),h[R].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let D=0,j=M.length;D<j;++D){let R=M[D],V=R.start;for(let H=V,ae=V+R.count;H<ae;H+=3)g(i[H+0],i[H+1],i[H+2])}let C=new T,b=new T,w=new T,I=new T;function L(D){w.fromArray(s,3*D),I.copy(w);let j=l[D];C.copy(j),C.sub(w.multiplyScalar(w.dot(j))).normalize(),b.crossVectors(I,j);let R=b.dot(h[D])<0?-1:1;c[4*D]=C.x,c[4*D+1]=C.y,c[4*D+2]=C.z,c[4*D+3]=R}for(let D=0,j=M.length;D<j;++D){let R=M[D],V=R.start;for(let H=V,ae=V+R.count;H<ae;H+=3)L(i[H+0]),L(i[H+1]),L(i[H+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mt(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let n=new T,s=new T,a=new T,o=new T,c=new T,l=new T,h=new T,d=new T;if(e)for(let u=0,p=e.count;u<p;u+=3){let f=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,f),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),o.fromBufferAttribute(i,f),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$e.fromBufferAttribute(e,t),$e.normalize(),e.setXYZ(t,$e.x,$e.y,$e.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),p=0,f=0;for(let _=0,m=c.length;_<m;_++){p=o.isInterleavedBufferAttribute?c[_]*o.data.stride+o.offset:c[_]*h;for(let y=0;y<h;y++)u[f++]=l[p++]}return new Mt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let c=e(n[o],i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){let u=e(l[h],i);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let n={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(n[c]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let l in n){let h=n[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],d=s[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ll=new Te,_i=new un,_r=new Ft,Il=new T,Zi=new T,Ji=new T,Ki=new T,Ks=new T,yr=new T,xr=new se,Mr=new se,br=new se,Nl=new T,Ul=new T,Dl=new T,Sr=new T,Er=new T,Re=class extends ut{constructor(e=new qe,t=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=i.length;n<s;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){yr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],d=s[c];h!==0&&(Ks.fromBufferAttribute(d,e),a?yr.addScaledVector(Ks,h):yr.addScaledVector(Ks.sub(t),h))}t.add(yr)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere),_r.applyMatrix4(s),_i.copy(e.ray).recast(e.near),_r.containsPoint(_i.origin)===!1&&(_i.intersectSphere(_r,Il)===null||_i.origin.distanceToSquared(Il)>(e.far-e.near)**2))return;Ll.copy(s).invert(),_i.copy(e.ray).applyMatrix4(Ll),i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,_i)}}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,_=u.length;f<_;f++){let m=u[f],y=a[m.materialIndex];for(let v=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));v<g;v+=3)n=Tr(this,y,e,i,l,h,d,o.getX(v),o.getX(v+1),o.getX(v+2)),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}else for(let f=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);f<_;f+=3)n=Tr(this,a,e,i,l,h,d,o.getX(f),o.getX(f+1),o.getX(f+2)),n&&(n.faceIndex=Math.floor(f/3),t.push(n));else if(c!==void 0)if(Array.isArray(a))for(let f=0,_=u.length;f<_;f++){let m=u[f],y=a[m.materialIndex];for(let v=Math.max(m.start,p.start),g=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));v<g;v+=3)n=Tr(this,y,e,i,l,h,d,v,v+1,v+2),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}else for(let f=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);f<_;f+=3)n=Tr(this,a,e,i,l,h,d,f,f+1,f+2),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}};zt=class r extends qe{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,p=0;function f(_,m,y,v,g,M,C,b,w,I,L){let D=M/w,j=C/I,R=M/2,V=C/2,H=b/2,ae=w+1,oe=I+1,W=0,Y=0,ee=new T;for(let B=0;B<oe;B++){let K=B*j-V;for(let ce=0;ce<ae;ce++){let E=ce*D-R;ee[_]=E*v,ee[m]=K*g,ee[y]=H,l.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[y]=b>0?1:-1,h.push(ee.x,ee.y,ee.z),d.push(ce/w),d.push(1-B/I),W+=1}}for(let B=0;B<I;B++)for(let K=0;K<w;K++){let ce=u+K+ae*B,E=u+K+ae*(B+1),S=u+(K+1)+ae*(B+1),O=u+(K+1)+ae*B;c.push(ce,E,O),c.push(E,S,O),Y+=6}o.addGroup(p,Y,L),p+=Y,u+=W}f("z","y","x",-1,-1,i,t,e,a,s,0),f("z","y","x",1,-1,i,t,-e,a,s,1),f("x","z","y",1,1,e,i,t,n,a,2),f("x","z","y",1,-1,e,i,-t,n,a,3),f("x","y","z",1,-1,e,t,i,n,s,4),f("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new Me(l,3)),this.setAttribute("normal",new Me(h,3)),this.setAttribute("uv",new Me(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Dh={clone:dn,merge:lt},Kt=class extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dn(e.uniforms),this.uniformsGroups=function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Gn=class extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},nt=class extends Gn{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Hn*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*rn*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Hn*Math.atan(Math.tan(.5*rn*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*rn*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*n/c,t-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$i=-90,Sa=class extends ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new nt($i,1,e,t);n.layers=this.layers,this.add(n);let s=new nt($i,1,e,t);s.layers=this.layers,this.add(s);let a=new nt($i,1,e,t);a.layers=this.layers,this.add(a);let o=new nt($i,1,e,t);o.layers=this.layers,this.add(o);let c=new nt($i,1,e,t);c.layers=this.layers,this.add(c);let l=new nt($i,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===hn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==Hr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,c),e.setRenderTarget(i,4,n),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},$r=class extends xt{constructor(e,t,i,n,s,a,o,c,l,h){super(e=e!==void 0?e:[],t=t!==void 0?t:on,i,n,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ea=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(On("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ci?je:Ut),this.texture=new $r(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new zt(5,5,5),s=new Kt({name:"CubemapFromEquirect",uniforms:dn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rt,blending:0});s.uniforms.tEquirect.value=t;let a=new Re(n,s),o=t.minFilter;return t.minFilter===Or&&(t.minFilter=Rt),new Sa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},$s=new T,Oh=new T,Bh=new Ae,jt=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=$s.subVectors(i,t).cross(Oh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta($s),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Bh.getNormalMatrix(e),n=this.coplanarPoint($s).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},yi=new Ft,wr=new T,pn=class{constructor(e=new jt,t=new jt,i=new jt,n=new jt,s=new jt,a=new jt){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],c=n[3],l=n[4],h=n[5],d=n[6],u=n[7],p=n[8],f=n[9],_=n[10],m=n[11],y=n[12],v=n[13],g=n[14],M=n[15];if(i[0].setComponents(c-s,u-l,m-p,M-y).normalize(),i[1].setComponents(c+s,u+l,m+p,M+y).normalize(),i[2].setComponents(c+a,u+h,m+f,M+v).normalize(),i[3].setComponents(c-a,u-h,m-f,M-v).normalize(),i[4].setComponents(c-o,u-d,m-_,M-g).normalize(),t===hn)i[5].setComponents(c+o,u+d,m+_,M+g).normalize();else{if(t!==Hr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,d,_,g).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(wr.x=n.normal.x>0?e.max.x:e.min.x,wr.y=n.normal.y>0?e.max.y:e.min.y,wr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(wr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};mn=class r extends qe{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,d=e/o,u=t/c,p=[],f=[],_=[],m=[];for(let y=0;y<h;y++){let v=y*u-a;for(let g=0;g<l;g++){let M=g*d-s;f.push(M,-v,0),_.push(0,0,1),m.push(g/o),m.push(1-y/c)}}for(let y=0;y<c;y++)for(let v=0;v<o;v++){let g=v+l*y,M=v+l*(y+1),C=v+1+l*(y+1),b=v+1+l*y;p.push(g,M,b),p.push(M,C,b)}this.setIndex(p),this.setAttribute("position",new Me(f,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Se={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},le={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ae}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ae},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0},uvTransform:{value:new Ae}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}}},It={basic:{uniforms:lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new be(0)}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:lt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:lt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new be(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:lt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:lt([le.points,le.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:lt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:lt([le.common,le.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:lt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:lt([le.sprite,le.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new Ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distanceRGBA:{uniforms:lt([le.common,le.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distanceRGBA_vert,fragmentShader:Se.distanceRGBA_frag},shadow:{uniforms:lt([le.lights,le.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};It.physical={uniforms:lt([It.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ae},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ae},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ae},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ae},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ae},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ae},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ae}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};Ar={r:0,b:0,g:0};Qr=class extends Gn{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ol=[.125,.215,.35,.446,.526,.582],Nn=20,Qs=new Qr,Bl=new be,ea=null,ta=0,ia=0,xi=(1+Math.sqrt(5))/2,Qi=1/xi,Fl=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,xi,Qi),new T(0,xi,-Qi),new T(Qi,0,xi),new T(-Qi,0,xi),new T(xi,Qi,0),new T(-xi,Qi,0)],fn=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){ea=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ea,ta,ia),e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===on||e.mapping===ln?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ea=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Vn,format:Nt,colorSpace:Zt,depthBuffer:!1},n=zl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zl(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],c=[],l=[],h=a,d=a-4+1+Ol.length;for(let u=0;u<d;u++){let p=Math.pow(2,h);c.push(p);let f=1/p;u>a-4?f=Ol[u-a+4-1]:u===0&&(f=0),l.push(f);let _=1/(p-2),m=-_,y=1+_,v=[m,m,y,m,y,y,m,m,y,y,m,y],g=6,M=6,C=3,b=2,w=1,I=new Float32Array(C*M*g),L=new Float32Array(b*M*g),D=new Float32Array(w*M*g);for(let R=0;R<g;R++){let V=R%3*2/3-1,H=R>2?0:-1,ae=[V,H,0,V+2/3,H,0,V+2/3,H+1,0,V,H,0,V+2/3,H+1,0,V,H+1,0];I.set(ae,C*M*R),L.set(v,b*M*R);let oe=[R,R,R,R,R,R];D.set(oe,w*M*R)}let j=new qe;j.setAttribute("position",new Mt(I,C)),j.setAttribute("uv",new Mt(L,b)),j.setAttribute("faceIndex",new Mt(D,w)),o.push(j),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}}(s)),this._blurMaterial=function(a,o,c){let l=new Float32Array(Nn),h=new T(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return n}_compileMaterial(e){let t=new Re(this._lodPlanes[0],e);this._renderer.compile(t,Qs)}_sceneToCubeUV(e,t,i,n){let s=new nt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,h=c.toneMapping;c.getClearColor(Bl),c.toneMapping=si,c.autoClear=!1;let d=new ci({name:"PMREM.Background",side:rt,depthWrite:!1,depthTest:!1}),u=new Re(new zt,d),p=!1,f=e.background;f?f.isColor&&(d.color.copy(f),e.background=null,p=!0):(d.color.copy(Bl),p=!0);for(let _=0;_<6;_++){let m=_%3;m===0?(s.up.set(0,a[_],0),s.lookAt(o[_],0,0)):m===1?(s.up.set(0,0,a[_]),s.lookAt(0,o[_],0)):(s.up.set(0,a[_],0),s.lookAt(0,0,o[_]));let y=this._cubeSize;Cr(n,m*y,_>2?y:0,y,y),c.setRenderTarget(n),p&&c.render(u,s),c.render(e,s)}u.geometry.dispose(),u.material.dispose(),c.toneMapping=h,c.autoClear=l,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===on||e.mapping===ln;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());let s=n?this._cubemapMaterial:this._equirectMaterial,a=new Re(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Cr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,Qs)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=Fl[(n-1)%Fl.length];this._blur(e,n-1,n,s,a)}t.autoClear=i}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Re(this._lodPlanes[n],l),d=l.uniforms,u=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/39,f=s/p,_=isFinite(s)?1+Math.floor(3*f):Nn;_>Nn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let m=[],y=0;for(let M=0;M<Nn;++M){let C=M/f,b=Math.exp(-C*C/2);m.push(b),M===0?y+=b:M<_&&(y+=2*b)}for(let M=0;M<m.length;M++)m[M]=m[M]/y;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-i;let g=this._sizeLods[n];Cr(t,3*g*(n>v-4?n-v+4:0),4*(this._cubeSize-g),3*g,2*g),c.setRenderTarget(t),c.render(h,Qs)}};es=class extends xt{constructor(e,t,i,n,s,a,o,c,l,h){if((h=h!==void 0?h:Ai)!==Ai&&h!==cn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ai&&(i=ni),i===void 0&&h===cn&&(i=wi),super(null,n,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ct,this.minFilter=c!==void 0?c:ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Cc=new xt,Rc=new es(1,1);Rc.compareFunction=515;Pc=new jr,Lc=new ba,Ic=new $r,Hl=[],Gl=[],Wl=new Float32Array(16),ql=new Float32Array(9),Xl=new Float32Array(4);Ta=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=function(n){switch(n){case 5126:return eu;case 35664:return tu;case 35665:return iu;case 35666:return nu;case 35674:return ru;case 35675:return su;case 35676:return au;case 5124:case 35670:return ou;case 35667:case 35671:return lu;case 35668:case 35672:return cu;case 35669:case 35673:return hu;case 5125:return uu;case 36294:return du;case 36295:return pu;case 36296:return mu;case 35678:case 36198:case 36298:case 36306:case 35682:return fu;case 35679:case 36299:case 36307:return gu;case 35680:case 36300:case 36308:case 36293:return vu;case 36289:case 36303:case 36311:case 36292:return _u}}(t.type)}},wa=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(n){switch(n){case 5126:return yu;case 35664:return xu;case 35665:return Mu;case 35666:return bu;case 35674:return Su;case 35675:return Eu;case 35676:return Tu;case 5124:case 35670:return wu;case 35667:case 35671:return Au;case 35668:case 35672:return Cu;case 35669:case 35673:return Ru;case 5125:return Pu;case 36294:return Lu;case 36295:return Iu;case 36296:return Nu;case 35678:case 36198:case 36298:case 36306:case 35682:return Uu;case 35679:case 36299:case 36307:return Du;case 35680:case 36300:case 36308:case 36293:return Ou;case 36289:case 36303:case 36311:case 36292:return Bu}}(t.type)}},Aa=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},na=/(\w+)(\])?(\[|\.)?/g;an=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n);Fu(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};zu=37297,ku=0;Gu=/^[ \t]*#include +<([\w\d./]+)>/gm;Wu=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);Xu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Zu=0,Ra=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Pa(e),t.set(e,i)),i}},Pa=class{constructor(e){this.id=Zu++,this.code=e,this.usedTimes=0}};td=0;La=class extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ia=class extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Na=class extends nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Dt=class extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},cd={type:"move"},Bn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),y=this._getHandJoint(l,_);m!==null&&(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=m.radius),y.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,f=.005;l.inputState.pinching&&u>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cd)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ua=class extends li{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,f=null,_=t.getContextAttributes(),m=null,y=null,v=[],g=[],M=new se,C=null,b=new nt;b.layers.enable(1),b.viewport=new Fe;let w=new nt;w.layers.enable(2),w.viewport=new Fe;let I=[b,w],L=new Na;L.layers.enable(1),L.layers.enable(2);let D=null,j=null;function R(B){let K=g.indexOf(B.inputSource);if(K===-1)return;let ce=v[K];ce!==void 0&&(ce.update(B.inputSource,B.frame,l||a),ce.dispatchEvent({type:B.type,data:B.inputSource}))}function V(){n.removeEventListener("select",R),n.removeEventListener("selectstart",R),n.removeEventListener("selectend",R),n.removeEventListener("squeeze",R),n.removeEventListener("squeezestart",R),n.removeEventListener("squeezeend",R),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",H);for(let B=0;B<v.length;B++){let K=g[B];K!==null&&(g[B]=null,v[B].disconnect(K))}D=null,j=null,e.setRenderTarget(m),p=null,u=null,d=null,n=null,y=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}function H(B){for(let K=0;K<B.removed.length;K++){let ce=B.removed[K],E=g.indexOf(ce);E>=0&&(g[E]=null,v[E].disconnect(ce))}for(let K=0;K<B.added.length;K++){let ce=B.added[K],E=g.indexOf(ce);if(E===-1){for(let O=0;O<v.length;O++){if(O>=g.length){g.push(ce),E=O;break}if(g[O]===null){g[O]=ce,E=O;break}}if(E===-1)break}let S=v[E];S&&S.connect(ce)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=v[B];return K===void 0&&(K=new Bn,v[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=v[B];return K===void 0&&(K=new Bn,v[B]=K),K.getGripSpace()},this.getHand=function(B){let K=v[B];return K===void 0&&(K=new Bn,v[B]=K),K.getHandSpace()},this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(B){if(n=B,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",R),n.addEventListener("selectstart",R),n.addEventListener("selectend",R),n.addEventListener("squeeze",R),n.addEventListener("squeezestart",R),n.addEventListener("squeezeend",R),n.addEventListener("end",V),n.addEventListener("inputsourceschange",H),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(M),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:n.renderState.layers!==void 0||_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,K),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Jt(p.framebufferWidth,p.framebufferHeight,{format:Nt,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,ce=null,E=null;_.depth&&(E=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?cn:Ai,ce=_.stencil?wi:ni);let S={colorFormat:t.RGBA8,depthFormat:E,scaleFactor:s};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(S),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Jt(u.textureWidth,u.textureHeight,{format:Nt,type:Ti,depthTexture:new es(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0}),e.properties.get(y).__ignoreDepthValues=u.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),ee.setContext(n),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};let ae=new T,oe=new T;function W(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(n===null)return;L.near=w.near=b.near=B.near,L.far=w.far=b.far=B.far,D===L.near&&j===L.far||(n.updateRenderState({depthNear:L.near,depthFar:L.far}),D=L.near,j=L.far);let K=B.parent,ce=L.cameras;W(L,K);for(let E=0;E<ce.length;E++)W(ce[E],K);ce.length===2?function(E,S,O){ae.setFromMatrixPosition(S.matrixWorld),oe.setFromMatrixPosition(O.matrixWorld);let Z=ae.distanceTo(oe),P=S.projectionMatrix.elements,X=O.projectionMatrix.elements,N=P[14]/(P[10]-1),U=P[14]/(P[10]+1),F=(P[9]+1)/P[5],te=(P[9]-1)/P[5],$=(P[8]-1)/P[0],x=(X[8]+1)/X[0],ie=N*$,z=N*x,k=Z/(-$+x),ne=k*-$;S.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(ne),E.translateZ(k),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert();let he=N+k,de=U+k,pe=ie-ne,xe=z+(Z-ne),me=F*U/de*he,fe=te*U/de*he;E.projectionMatrix.makePerspective(pe,xe,me,fe,he,de),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}(L,b,w):L.projectionMatrix.copy(b.projectionMatrix),function(E,S,O){O===null?E.matrix.copy(S.matrixWorld):(E.matrix.copy(O.matrixWorld),E.matrix.invert(),E.matrix.multiply(S.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(S.projectionMatrix),E.projectionMatrixInverse.copy(S.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=2*Hn*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}(B,L,K)},this.getCamera=function(){return L},this.getFoveation=function(){if(u!==null||p!==null)return c},this.setFoveation=function(B){c=B,u!==null&&(u.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)};let Y=null,ee=new Ac;ee.setAnimationLoop(function(B,K){if(h=K.getViewerPose(l||a),f=K,h!==null){let ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let E=!1;ce.length!==L.cameras.length&&(L.cameras.length=0,E=!0);for(let S=0;S<ce.length;S++){let O=ce[S],Z=null;if(p!==null)Z=p.getViewport(O);else{let X=d.getViewSubImage(u,O);Z=X.viewport,S===0&&(e.setRenderTargetTextures(y,X.colorTexture,u.ignoreDepthValues?void 0:X.depthStencilTexture),e.setRenderTarget(y))}let P=I[S];P===void 0&&(P=new nt,P.layers.enable(S),P.viewport=new Fe,I[S]=P),P.matrix.fromArray(O.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(O.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(Z.x,Z.y,Z.width,Z.height),S===0&&(L.matrix.copy(P.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),E===!0&&L.cameras.push(P)}}for(let ce=0;ce<v.length;ce++){let E=g[ce],S=v[ce];E!==null&&S!==void 0&&S.update(E,K,l||a)}Y&&Y(B,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),f=null}),this.setAnimationLoop=function(B){Y=B},this.dispose=function(){}}};Wn=class{constructor(e={}){let{canvas:t=xh(),context:i=null,depth:n=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e,u;this.isWebGLRenderer=!0,u=i!==null?i.getContextAttributes().alpha:a;let p=new Uint32Array(4),f=new Int32Array(4),_=null,m=null,y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this._useLegacyLights=!1,this.toneMapping=si,this.toneMappingExposure=1;let g=this,M=!1,C=0,b=0,w=null,I=-1,L=null,D=new Fe,j=new Fe,R=null,V=new be(0),H=0,ae=t.width,oe=t.height,W=1,Y=null,ee=null,B=new Fe(0,0,ae,oe),K=new Fe(0,0,ae,oe),ce=!1,E=new pn,S=!1,O=!1,Z=null,P=new Te,X=new se,N=new T,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function F(){return w===null?W:1}let te,$,x,ie,z,k,ne,he,de,pe,xe,me,fe,Ee,Ke,ge,Ue,Pe,Qn,Oi,er,gt,pt,Bi,q=i;function tr(A,G){for(let J=0;J<A.length;J++){let re=A[J],Q=t.getContext(re,G);if(Q!==null)return Q}return null}try{let A={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ua}`),t.addEventListener("webglcontextlost",To,!1),t.addEventListener("webglcontextrestored",wo,!1),t.addEventListener("webglcontextcreationerror",Ao,!1),q===null){let G=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&G.shift(),q=tr(G,A),q===null)throw tr(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}function Tn(){te=new Xh(q),$=new Hh(q,te,e),te.init($),gt=new ld(q,te,$),x=new ad(q,te,$),ie=new Zh(q),z=new Ku,k=new od(q,te,x,z,$,gt,ie),ne=new Wh(g),he=new qh(g),de=new Fh(q,$),pt=new kh(q,te,de,$),pe=new jh(q,de,ie,pt),xe=new Qh(q,pe,de,ie),Qn=new $h(q,$,k),ge=new Gh(z),me=new Ju(g,ne,he,te,$,pt,ge),fe=new hd(g,z),Ee=new Qu,Ke=new rd(te,$),Pe=new zh(g,ne,he,x,xe,u,c),Ue=new sd(g,xe,$),Bi=new ud(q,ie,$,x),Oi=new Vh(q,te,ie,$),er=new Yh(q,te,ie,$),ie.programs=me.programs,g.capabilities=$,g.extensions=te,g.properties=z,g.renderLists=Ee,g.shadowMap=Ue,g.state=x,g.info=ie}Tn();let Qe=new Ua(g,q);function To(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function wo(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let A=ie.autoReset,G=Ue.enabled,J=Ue.autoUpdate,re=Ue.needsUpdate,Q=Ue.type;Tn(),ie.autoReset=A,Ue.enabled=G,Ue.autoUpdate=J,Ue.needsUpdate=re,Ue.type=Q}function Ao(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Co(A){let G=A.target;G.removeEventListener("dispose",Co),function(J){(function(re){let Q=z.get(re).programs;Q!==void 0&&(Q.forEach(function(ue){me.releaseProgram(ue)}),re.isShaderMaterial&&me.releaseShaderCache(re))})(J),z.remove(J)}(G)}function Ro(A,G,J){A.transparent===!0&&A.side===2&&A.forceSinglePass===!1?(A.side=rt,A.needsUpdate=!0,nr(A,G,J),A.side=oi,A.needsUpdate=!0,nr(A,G,J),A.side=2):nr(A,G,J)}this.xr=Qe,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let A=te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(ae,oe,!1))},this.getSize=function(A){return A.set(ae,oe)},this.setSize=function(A,G,J=!0){Qe.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(ae=A,oe=G,t.width=Math.floor(A*W),t.height=Math.floor(G*W),J===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G))},this.getDrawingBufferSize=function(A){return A.set(ae*W,oe*W).floor()},this.setDrawingBufferSize=function(A,G,J){ae=A,oe=G,W=J,t.width=Math.floor(A*J),t.height=Math.floor(G*J),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(B)},this.setViewport=function(A,G,J,re){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,G,J,re),x.viewport(D.copy(B).multiplyScalar(W).floor())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,G,J,re){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,G,J,re),x.scissor(j.copy(K).multiplyScalar(W).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(A){x.setScissorTest(ce=A)},this.setOpaqueSort=function(A){Y=A},this.setTransparentSort=function(A){ee=A},this.getClearColor=function(A){return A.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(A=!0,G=!0,J=!0){let re=0;if(A){let Q=!1;if(w!==null){let ue=w.texture.format;Q=ue===Mc||ue===xc||ue===yc}if(Q){let ue=w.texture.type,ve=ue===Ti||ue===ni||ue===mo||ue===wi||ue===vc||ue===_c,ye=Pe.getClearColor(),we=Pe.getClearAlpha(),Ce=ye.r,Le=ye.g,Ie=ye.b;ve?(p[0]=Ce,p[1]=Le,p[2]=Ie,p[3]=we,q.clearBufferuiv(q.COLOR,0,p)):(f[0]=Ce,f[1]=Le,f[2]=Ie,f[3]=we,q.clearBufferiv(q.COLOR,0,f))}else re|=q.COLOR_BUFFER_BIT}G&&(re|=q.DEPTH_BUFFER_BIT),J&&(re|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",To,!1),t.removeEventListener("webglcontextrestored",wo,!1),t.removeEventListener("webglcontextcreationerror",Ao,!1),Ee.dispose(),Ke.dispose(),z.dispose(),ne.dispose(),he.dispose(),xe.dispose(),pt.dispose(),Bi.dispose(),me.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",Po),Qe.removeEventListener("sessionend",Lo),Z&&(Z.dispose(),Z=null),di.stop()},this.renderBufferDirect=function(A,G,J,re,Q,ue){G===null&&(G=U);let ve=Q.isMesh&&Q.matrixWorld.determinant()<0,ye=function(Xe,vt,ht,Ne,De){vt.isScene!==!0&&(vt=U),k.resetTextureUnits();let wn=vt.fog,bs=Ne.isMeshStandardMaterial?vt.environment:null,Jc=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Zt,rr=(Ne.isMeshStandardMaterial?he:ne).get(Ne.envMap||bs),Kc=Ne.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,$c=!!ht.attributes.tangent&&(!!Ne.normalMap||Ne.anisotropy>0),Qc=!!ht.morphAttributes.position,eh=!!ht.morphAttributes.normal,th=!!ht.morphAttributes.color,Bo=si;Ne.toneMapped&&(w!==null&&w.isXRRenderTarget!==!0||(Bo=g.toneMapping));let Fo=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,ih=Fo!==void 0?Fo.length:0,Oe=z.get(Ne),nh=m.state.lights;if(S===!0&&(O===!0||Xe!==L)){let _t=Xe===L&&Ne.id===I;ge.setState(Ne,Xe,_t)}let Et=!1;Ne.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==nh.state.version||Oe.outputColorSpace!==Jc||De.isBatchedMesh&&Oe.batching===!1?Et=!0:De.isBatchedMesh||Oe.batching!==!0?De.isInstancedMesh&&Oe.instancing===!1?Et=!0:De.isInstancedMesh||Oe.instancing!==!0?De.isSkinnedMesh&&Oe.skinning===!1?Et=!0:De.isSkinnedMesh||Oe.skinning!==!0?De.isInstancedMesh&&Oe.instancingColor===!0&&De.instanceColor===null||De.isInstancedMesh&&Oe.instancingColor===!1&&De.instanceColor!==null||Oe.envMap!==rr||Ne.fog===!0&&Oe.fog!==wn?Et=!0:Oe.numClippingPlanes===void 0||Oe.numClippingPlanes===ge.numPlanes&&Oe.numIntersection===ge.numIntersection?(Oe.vertexAlphas!==Kc||Oe.vertexTangents!==$c||Oe.morphTargets!==Qc||Oe.morphNormals!==eh||Oe.morphColors!==th||Oe.toneMapping!==Bo||$.isWebGL2===!0&&Oe.morphTargetsCount!==ih)&&(Et=!0):Et=!0:Et=!0:Et=!0:Et=!0:(Et=!0,Oe.__version=Ne.version);let mi=Oe.currentProgram;Et===!0&&(mi=nr(Ne,vt,De));let zo=!1,An=!1,Ss=!1,et=mi.getUniforms(),fi=Oe.uniforms;if(x.useProgram(mi.program)&&(zo=!0,An=!0,Ss=!0),Ne.id!==I&&(I=Ne.id,An=!0),zo||L!==Xe){et.setValue(q,"projectionMatrix",Xe.projectionMatrix),et.setValue(q,"viewMatrix",Xe.matrixWorldInverse);let _t=et.map.cameraPosition;_t!==void 0&&_t.setValue(q,N.setFromMatrixPosition(Xe.matrixWorld)),$.logarithmicDepthBuffer&&et.setValue(q,"logDepthBufFC",2/(Math.log(Xe.far+1)/Math.LN2)),(Ne.isMeshPhongMaterial||Ne.isMeshToonMaterial||Ne.isMeshLambertMaterial||Ne.isMeshBasicMaterial||Ne.isMeshStandardMaterial||Ne.isShaderMaterial)&&et.setValue(q,"isOrthographic",Xe.isOrthographicCamera===!0),L!==Xe&&(L=Xe,An=!0,Ss=!0)}if(De.isSkinnedMesh){et.setOptional(q,De,"bindMatrix"),et.setOptional(q,De,"bindMatrixInverse");let _t=De.skeleton;_t&&($.floatVertexTextures?(_t.boneTexture===null&&_t.computeBoneTexture(),et.setValue(q,"boneTexture",_t.boneTexture,k)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}De.isBatchedMesh&&(et.setOptional(q,De,"batchingTexture"),et.setValue(q,"batchingTexture",De._matricesTexture,k));let Es=ht.morphAttributes;(Es.position!==void 0||Es.normal!==void 0||Es.color!==void 0&&$.isWebGL2===!0)&&Qn.update(De,ht,mi),(An||Oe.receiveShadow!==De.receiveShadow)&&(Oe.receiveShadow=De.receiveShadow,et.setValue(q,"receiveShadow",De.receiveShadow)),Ne.isMeshGouraudMaterial&&Ne.envMap!==null&&(fi.envMap.value=rr,fi.flipEnvMap.value=rr.isCubeTexture&&rr.isRenderTargetTexture===!1?-1:1),An&&(et.setValue(q,"toneMappingExposure",g.toneMappingExposure),Oe.needsLights&&(Tt=Ss,(Lt=fi).ambientLightColor.needsUpdate=Tt,Lt.lightProbe.needsUpdate=Tt,Lt.directionalLights.needsUpdate=Tt,Lt.directionalLightShadows.needsUpdate=Tt,Lt.pointLights.needsUpdate=Tt,Lt.pointLightShadows.needsUpdate=Tt,Lt.spotLights.needsUpdate=Tt,Lt.spotLightShadows.needsUpdate=Tt,Lt.rectAreaLights.needsUpdate=Tt,Lt.hemisphereLights.needsUpdate=Tt),wn&&Ne.fog===!0&&fe.refreshFogUniforms(fi,wn),fe.refreshMaterialUniforms(fi,Ne,W,oe,Z),an.upload(q,Do(Oe),fi,k));var Lt,Tt;if(Ne.isShaderMaterial&&Ne.uniformsNeedUpdate===!0&&(an.upload(q,Do(Oe),fi,k),Ne.uniformsNeedUpdate=!1),Ne.isSpriteMaterial&&et.setValue(q,"center",De.center),et.setValue(q,"modelViewMatrix",De.modelViewMatrix),et.setValue(q,"normalMatrix",De.normalMatrix),et.setValue(q,"modelMatrix",De.matrixWorld),Ne.isShaderMaterial||Ne.isRawShaderMaterial){let _t=Ne.uniformsGroups;for(let Ts=0,rh=_t.length;Ts<rh;Ts++)if($.isWebGL2){let ko=_t[Ts];Bi.update(ko,mi),Bi.bind(ko,mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mi}(A,G,J,re,Q);x.setMaterial(re,ve);let we=J.index,Ce=1;if(re.wireframe===!0){if(we=pe.getWireframeAttribute(J),we===void 0)return;Ce=2}let Le=J.drawRange,Ie=J.attributes.position,Ve=Le.start*Ce,St=(Le.start+Le.count)*Ce;ue!==null&&(Ve=Math.max(Ve,ue.start*Ce),St=Math.min(St,(ue.start+ue.count)*Ce)),we!==null?(Ve=Math.max(Ve,0),St=Math.min(St,we.count)):Ie!=null&&(Ve=Math.max(Ve,0),St=Math.min(St,Ie.count));let kt=St-Ve;if(kt<0||kt===1/0)return;let pi;pt.setup(Q,re,ye,J,we);let He=Oi;if(we!==null&&(pi=de.get(we),He=er,He.setIndex(pi)),Q.isMesh)re.wireframe===!0?(x.setLineWidth(re.wireframeLinewidth*F()),He.setMode(q.LINES)):He.setMode(q.TRIANGLES);else if(Q.isLine){let Xe=re.linewidth;Xe===void 0&&(Xe=1),x.setLineWidth(Xe*F()),Q.isLineSegments?He.setMode(q.LINES):Q.isLineLoop?He.setMode(q.LINE_LOOP):He.setMode(q.LINE_STRIP)}else Q.isPoints?He.setMode(q.POINTS):Q.isSprite&&He.setMode(q.TRIANGLES);if(Q.isBatchedMesh)He.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)He.renderInstances(Ve,kt,Q.count);else if(J.isInstancedBufferGeometry){let Xe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,vt=Math.min(J.instanceCount,Xe);He.renderInstances(Ve,kt,vt)}else He.render(Ve,kt)},this.compile=function(A,G,J=null){J===null&&(J=A),m=Ke.get(J),m.init(),v.push(m),J.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),A!==J&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights(g._useLegacyLights);let re=new Set;return A.traverse(function(Q){let ue=Q.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){let ye=ue[ve];Ro(ye,J,Q),re.add(ye)}else Ro(ue,J,Q),re.add(ue)}),v.pop(),m=null,re},this.compileAsync=function(A,G,J=null){let re=this.compile(A,G,J);return new Promise(Q=>{function ue(){re.forEach(function(ve){z.get(ve).currentProgram.isReady()&&re.delete(ve)}),re.size!==0?setTimeout(ue,10):Q(A)}te.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ms=null;function Po(){di.stop()}function Lo(){di.start()}let di=new Ac;function Io(A,G,J,re){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||E.intersectsSprite(A)){re&&N.setFromMatrixPosition(A.matrixWorld).applyMatrix4(P);let ue=xe.update(A),ve=A.material;ve.visible&&_.push(A,ue,ve,J,N.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||E.intersectsObject(A))){let ue=xe.update(A),ve=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),N.copy(A.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),N.copy(ue.boundingSphere.center)),N.applyMatrix4(A.matrixWorld).applyMatrix4(P)),Array.isArray(ve)){let ye=ue.groups;for(let we=0,Ce=ye.length;we<Ce;we++){let Le=ye[we],Ie=ve[Le.materialIndex];Ie&&Ie.visible&&_.push(A,ue,Ie,J,N.z,Le)}}else ve.visible&&_.push(A,ue,ve,J,N.z,null)}}let Q=A.children;for(let ue=0,ve=Q.length;ue<ve;ue++)Io(Q[ue],G,J,re)}function No(A,G,J,re){let Q=A.opaque,ue=A.transmissive,ve=A.transparent;m.setupLightsView(J),S===!0&&ge.setGlobalState(g.clippingPlanes,J),ue.length>0&&function(ye,we,Ce,Le){if((Ce.isScene===!0?Ce.overrideMaterial:null)!==null)return;let Ve=$.isWebGL2;Z===null&&(Z=new Jt(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?Vn:Ti,minFilter:Or,samples:Ve?4:0})),g.getDrawingBufferSize(X),Ve?Z.setSize(X.x,X.y):Z.setSize(Gr(X.x),Gr(X.y));let St=g.getRenderTarget();g.setRenderTarget(Z),g.getClearColor(V),H=g.getClearAlpha(),H<1&&g.setClearColor(16777215,.5),g.clear();let kt=g.toneMapping;g.toneMapping=si,ir(ye,Ce,Le),k.updateMultisampleRenderTarget(Z),k.updateRenderTargetMipmap(Z);let pi=!1;for(let He=0,Xe=we.length;He<Xe;He++){let vt=we[He],ht=vt.object,Ne=vt.geometry,De=vt.material,wn=vt.group;if(De.side===2&&ht.layers.test(Le.layers)){let bs=De.side;De.side=rt,De.needsUpdate=!0,Uo(ht,Ce,Le,Ne,De,wn),De.side=bs,De.needsUpdate=!0,pi=!0}}pi===!0&&(k.updateMultisampleRenderTarget(Z),k.updateRenderTargetMipmap(Z)),g.setRenderTarget(St),g.setClearColor(V,H),g.toneMapping=kt}(Q,ue,G,J),re&&x.viewport(D.copy(re)),Q.length>0&&ir(Q,G,J),ue.length>0&&ir(ue,G,J),ve.length>0&&ir(ve,G,J),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function ir(A,G,J){let re=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,ue=A.length;Q<ue;Q++){let ve=A[Q],ye=ve.object,we=ve.geometry,Ce=re===null?ve.material:re,Le=ve.group;ye.layers.test(J.layers)&&Uo(ye,G,J,we,Ce,Le)}}function Uo(A,G,J,re,Q,ue){A.onBeforeRender(g,G,J,re,Q,ue),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(g,G,J,re,A,ue),Q.transparent===!0&&Q.side===2&&Q.forceSinglePass===!1?(Q.side=rt,Q.needsUpdate=!0,g.renderBufferDirect(J,G,re,Q,A,ue),Q.side=oi,Q.needsUpdate=!0,g.renderBufferDirect(J,G,re,Q,A,ue),Q.side=2):g.renderBufferDirect(J,G,re,Q,A,ue),A.onAfterRender(g,G,J,re,Q,ue)}function nr(A,G,J){G.isScene!==!0&&(G=U);let re=z.get(A),Q=m.state.lights,ue=m.state.shadowsArray,ve=Q.state.version,ye=me.getParameters(A,Q.state,ue,G,J),we=me.getProgramCacheKey(ye),Ce=re.programs;re.environment=A.isMeshStandardMaterial?G.environment:null,re.fog=G.fog,re.envMap=(A.isMeshStandardMaterial?he:ne).get(A.envMap||re.environment),Ce===void 0&&(A.addEventListener("dispose",Co),Ce=new Map,re.programs=Ce);let Le=Ce.get(we);if(Le!==void 0){if(re.currentProgram===Le&&re.lightsStateVersion===ve)return Oo(A,ye),Le}else ye.uniforms=me.getUniforms(A),A.onBuild(J,ye,g),A.onBeforeCompile(ye,g),Le=me.acquireProgram(ye,we),Ce.set(we,Le),re.uniforms=ye.uniforms;let Ie=re.uniforms;return(A.isShaderMaterial||A.isRawShaderMaterial)&&A.clipping!==!0||(Ie.clippingPlanes=ge.uniform),Oo(A,ye),re.needsLights=function(Ve){return Ve.isMeshLambertMaterial||Ve.isMeshToonMaterial||Ve.isMeshPhongMaterial||Ve.isMeshStandardMaterial||Ve.isShadowMaterial||Ve.isShaderMaterial&&Ve.lights===!0}(A),re.lightsStateVersion=ve,re.needsLights&&(Ie.ambientLightColor.value=Q.state.ambient,Ie.lightProbe.value=Q.state.probe,Ie.directionalLights.value=Q.state.directional,Ie.directionalLightShadows.value=Q.state.directionalShadow,Ie.spotLights.value=Q.state.spot,Ie.spotLightShadows.value=Q.state.spotShadow,Ie.rectAreaLights.value=Q.state.rectArea,Ie.ltc_1.value=Q.state.rectAreaLTC1,Ie.ltc_2.value=Q.state.rectAreaLTC2,Ie.pointLights.value=Q.state.point,Ie.pointLightShadows.value=Q.state.pointShadow,Ie.hemisphereLights.value=Q.state.hemi,Ie.directionalShadowMap.value=Q.state.directionalShadowMap,Ie.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ie.spotShadowMap.value=Q.state.spotShadowMap,Ie.spotLightMatrix.value=Q.state.spotLightMatrix,Ie.spotLightMap.value=Q.state.spotLightMap,Ie.pointShadowMap.value=Q.state.pointShadowMap,Ie.pointShadowMatrix.value=Q.state.pointShadowMatrix),re.currentProgram=Le,re.uniformsList=null,Le}function Do(A){if(A.uniformsList===null){let G=A.currentProgram.getUniforms();A.uniformsList=an.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function Oo(A,G){let J=z.get(A);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}di.setAnimationLoop(function(A){Ms&&Ms(A)}),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(A){Ms=A,Qe.setAnimationLoop(A),A===null?di.stop():di.start()},Qe.addEventListener("sessionstart",Po),Qe.addEventListener("sessionend",Lo),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(G),G=Qe.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,G,w),m=Ke.get(A,v.length),m.init(),v.push(m),P.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),E.setFromProjectionMatrix(P),O=this.localClippingEnabled,S=ge.init(this.clippingPlanes,O),_=Ee.get(A,y.length),_.init(),y.push(_),Io(A,G,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(Y,ee),this.info.render.frame++,S===!0&&ge.beginShadows();let J=m.state.shadowsArray;if(Ue.render(J,A,G),S===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),Pe.render(_,A),m.setupLights(g._useLegacyLights),G.isArrayCamera){let re=G.cameras;for(let Q=0,ue=re.length;Q<ue;Q++){let ve=re[Q];No(_,A,ve,ve.viewport)}}else No(_,A,G);w!==null&&(k.updateMultisampleRenderTarget(w),k.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(g,A,G),pt.resetDefaultState(),I=-1,L=null,v.pop(),m=v.length>0?v[v.length-1]:null,y.pop(),_=y.length>0?y[y.length-1]:null},this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,G,J){z.get(A.texture).__webglTexture=G,z.get(A.depthTexture).__webglTexture=J;let re=z.get(A);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=J===void 0,re.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,G){let J=z.get(A);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,J=0){w=A,C=G,b=J;let re=!0,Q=null,ue=!1,ve=!1;if(A){let ye=z.get(A);ye.__useDefaultFramebuffer!==void 0?(x.bindFramebuffer(q.FRAMEBUFFER,null),re=!1):ye.__webglFramebuffer===void 0?k.setupRenderTarget(A):ye.__hasExternalTextures&&k.rebindTextures(A,z.get(A.texture).__webglTexture,z.get(A.depthTexture).__webglTexture);let we=A.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ve=!0);let Ce=z.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Q=Array.isArray(Ce[G])?Ce[G][J]:Ce[G],ue=!0):Q=$.isWebGL2&&A.samples>0&&k.useMultisampledRTT(A)===!1?z.get(A).__webglMultisampledFramebuffer:Array.isArray(Ce)?Ce[J]:Ce,D.copy(A.viewport),j.copy(A.scissor),R=A.scissorTest}else D.copy(B).multiplyScalar(W).floor(),j.copy(K).multiplyScalar(W).floor(),R=ce;if(x.bindFramebuffer(q.FRAMEBUFFER,Q)&&$.drawBuffers&&re&&x.drawBuffers(A,Q),x.viewport(D),x.scissor(j),x.setScissorTest(R),ue){let ye=z.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+G,ye.__webglTexture,J)}else if(ve){let ye=z.get(A.texture),we=G||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,ye.__webglTexture,J||0,we)}I=-1},this.readRenderTargetPixels=function(A,G,J,re,Q,ue,ve){if(!A||!A.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye){x.bindFramebuffer(q.FRAMEBUFFER,ye);try{let we=A.texture,Ce=we.format,Le=we.type;if(Ce!==Nt&&gt.convert(Ce)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Ie=Le===Vn&&(te.has("EXT_color_buffer_half_float")||$.isWebGL2&&te.has("EXT_color_buffer_float"));if(!(Le===Ti||gt.convert(Le)===q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)||Le===ri&&($.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float"))||Ie))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");G>=0&&G<=A.width-re&&J>=0&&J<=A.height-Q&&q.readPixels(G,J,re,Q,gt.convert(Ce),gt.convert(Le),ue)}finally{let we=w!==null?z.get(w).__webglFramebuffer:null;x.bindFramebuffer(q.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(A,G,J=0){let re=Math.pow(2,-J),Q=Math.floor(G.image.width*re),ue=Math.floor(G.image.height*re);k.setTexture2D(G,0),q.copyTexSubImage2D(q.TEXTURE_2D,J,0,0,A.x,A.y,Q,ue),x.unbindTexture()},this.copyTextureToTexture=function(A,G,J,re=0){let Q=G.image.width,ue=G.image.height,ve=gt.convert(J.format),ye=gt.convert(J.type);k.setTexture2D(J,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,J.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,J.unpackAlignment),G.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,re,A.x,A.y,Q,ue,ve,ye,G.image.data):G.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,re,A.x,A.y,G.mipmaps[0].width,G.mipmaps[0].height,ve,G.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,re,A.x,A.y,ve,ye,G.image),re===0&&J.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),x.unbindTexture()},this.copyTextureToTexture3D=function(A,G,J,re,Q=0){if(g.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let ue=A.max.x-A.min.x+1,ve=A.max.y-A.min.y+1,ye=A.max.z-A.min.z+1,we=gt.convert(re.format),Ce=gt.convert(re.type),Le;if(re.isData3DTexture)k.setTexture3D(re,0),Le=q.TEXTURE_3D;else{if(!re.isDataArrayTexture&&!re.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");k.setTexture2DArray(re,0),Le=q.TEXTURE_2D_ARRAY}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,re.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,re.unpackAlignment);let Ie=q.getParameter(q.UNPACK_ROW_LENGTH),Ve=q.getParameter(q.UNPACK_IMAGE_HEIGHT),St=q.getParameter(q.UNPACK_SKIP_PIXELS),kt=q.getParameter(q.UNPACK_SKIP_ROWS),pi=q.getParameter(q.UNPACK_SKIP_IMAGES),He=J.isCompressedTexture?J.mipmaps[Q]:J.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,He.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,He.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,A.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,A.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,A.min.z),J.isDataTexture||J.isData3DTexture?q.texSubImage3D(Le,Q,G.x,G.y,G.z,ue,ve,ye,we,Ce,He.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Le,Q,G.x,G.y,G.z,ue,ve,ye,we,He.data)):q.texSubImage3D(Le,Q,G.x,G.y,G.z,ue,ve,ye,we,Ce,He),q.pixelStorei(q.UNPACK_ROW_LENGTH,Ie),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ve),q.pixelStorei(q.UNPACK_SKIP_PIXELS,St),q.pixelStorei(q.UNPACK_SKIP_ROWS,kt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,pi),Q===0&&re.generateMipmaps&&q.generateMipmap(Le),x.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?k.setTextureCube(A,0):A.isData3DTexture?k.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?k.setTexture2DArray(A,0):k.setTexture2D(A,0),x.unbindTexture()},this.resetState=function(){C=0,b=0,w=null,x.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===fo?"display-p3":"srgb",t.unpackColorSpace=Be.workingColorSpace===ms?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===je?Ci:Sc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ci?je:Zt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Da=class extends Wn{};Da.prototype.isWebGL1Renderer=!0;gn=class extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Kd=new T,$d=new T,Qd=new T,ep=new T,tp=new se,ip=new se,np=new Te,rp=new T,sp=new T,ap=new T,op=new se,lp=new se,cp=new se,hp=new T,up=new T,dp=new T,pp=new Fe,mp=new Fe,fp=new T,gp=new Te,vp=new T,_p=new Ft,yp=new Te,xp=new un,Mp=new Te,bp=new Te,Sp=new Te,Ep=new Te,Tp=new Bt,wp=new Te,Ap=new Re,Cp=new Ft,Oa=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let i=this.pool,n=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});let s=i[this.index];n.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}},Rp=new Te,Pp=new Te,Lp=new Te,Ip=new Te,Np=new pn,Up=new Bt,Dp=new Ft,Op=new T,Bp=new Oa,Fp=new Re,zp=new T,kp=new T,Vp=new Te,Hp=new un,Gp=new Ft,Wp=new T,qp=new T,Xp=new Te,jp=new un,Yp=new Ft,Zp=new T,ts=class extends xt{constructor(e,t,i,n,s,a,o,c,l){super(e,t,i,n,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},bt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,s=i.length,a;a=t||e*i[s-1];let o,c=0,l=s-1;for(;c<=l;)if(n=Math.floor(c+(l-c)/2),o=i[n]-a,o<0)c=n+1;else{if(!(o>0)){l=n;break}l=n-1}if(n=l,i[n]===a)return n/(s-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);let a=this.getPoint(n),o=this.getPoint(s),c=t||(a.isVector2?new se:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new T,n=[],s=[],a=[],o=new T,c=new Te;for(let p=0;p<=e;p++){let f=p/e;n[p]=this.getTangentAt(f,new T)}s[0]=new T,a[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),u<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Ye(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,f))}a[p].crossVectors(n[p],s[p])}if(t===!0){let p=Math.acos(Ye(s[0].dot(s[e]),-1,1));p/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(c.makeRotationAxis(n[f],p*f)),a[f].crossVectors(n[f],s[f])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},qn=class extends bt{constructor(e=0,t=0,i=1,n=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let i=t||new se,n=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(s=a?0:n),this.aClockwise!==!0||a||(s===n?s=-n:s-=n);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*d+this.aX,l=u*d+p*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ba=class extends qn{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};Rr=new T,ra=new vo,sa=new vo,aa=new vo,vn=class extends bt{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new T){let i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=n[(l-1)%s]:(Rr.subVectors(n[0],n[1]).add(n[0]),o=Rr);let d=n[l%s],u=n[(l+1)%s];if(this.closed||l+2<s?c=n[(l+2)%s]:(Rr.subVectors(n[s-1],n[s-2]).add(n[s-1]),c=Rr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(c),p);_<1e-4&&(_=1),f<1e-4&&(f=_),m<1e-4&&(m=_),ra.initNonuniformCatmullRom(o.x,d.x,u.x,c.x,f,_,m),sa.initNonuniformCatmullRom(o.y,d.y,u.y,c.y,f,_,m),aa.initNonuniformCatmullRom(o.z,d.z,u.z,c.z,f,_,m)}else this.curveType==="catmullrom"&&(ra.initCatmullRom(o.x,d.x,u.x,c.x,this.tension),sa.initCatmullRom(o.y,d.y,u.y,c.y,this.tension),aa.initCatmullRom(o.z,d.z,u.z,c.z,this.tension));return i.set(ra.calc(h),sa.calc(h),aa.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new T().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};is=class extends bt{constructor(e=new se,t=new se,i=new se,n=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new se){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(zn(e,n.x,s.x,a.x,o.x),zn(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fa=class extends bt{constructor(e=new T,t=new T,i=new T,n=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new T){let i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(zn(e,n.x,s.x,a.x,o.x),zn(e,n.y,s.y,a.y,o.y),zn(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ns=class extends bt{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},za=class extends bt{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rs=class extends bt{constructor(e=new se,t=new se,i=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new se){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Fn(e,n.x,s.x,a.x),Fn(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ss=class extends bt{constructor(e=new T,t=new T,i=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new T){let i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Fn(e,n.x,s.x,a.x),Fn(e,n.y,s.y,a.y),Fn(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},as=class extends bt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,c=n[a===0?a:a-1],l=n[a],h=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(nc(o,c.x,l.x,h.x,d.x),nc(o,c.y,l.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new se().fromArray(n))}return this}},os=Object.freeze({__proto__:null,ArcCurve:Ba,CatmullRomCurve3:vn,CubicBezierCurve:is,CubicBezierCurve3:Fa,EllipseCurve:qn,LineCurve:ns,LineCurve3:za,QuadraticBezierCurve:rs,QuadraticBezierCurve3:ss,SplineCurve:as}),ka=class extends bt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new os[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let a=n[s]-i,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,s=this.curves;n<s.length;n++){let a=s[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new os[n.type]().fromJSON(n))}return this}},Xn=class extends ka{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ns(this.currentPoint.clone(),new se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let s=new rs(this.currentPoint.clone(),new se(e,t),new se(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){let o=new is(this.currentPoint.clone(),new se(e,t),new se(i,n),new se(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new as(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,n,s,a,o,c),this}absellipse(e,t,i,n,s,a,o,c){let l=new qn(e,t,i,n,s,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ls=class r extends qe{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=Ye(n,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,d=new T,u=new se,p=new T,f=new T,_=new T,m=0,y=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,y=e[v+1].y-e[v].y,p.x=1*y,p.y=-m,p.z=0*y,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,y=e[v+1].y-e[v].y,p.x=1*y,p.y=-m,p.z=0*y,f.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(f)}for(let v=0;v<=t;v++){let g=i+v*h*n,M=Math.sin(g),C=Math.cos(g);for(let b=0;b<=e.length-1;b++){d.x=e[b].x*M,d.y=e[b].y,d.z=e[b].x*C,a.push(d.x,d.y,d.z),u.x=v/t,u.y=b/(e.length-1),o.push(u.x,u.y);let w=c[3*b+0]*M,I=c[3*b+1],L=c[3*b+0]*C;l.push(w,I,L)}}for(let v=0;v<t;v++)for(let g=0;g<e.length-1;g++){let M=g+v*e.length,C=M,b=M+e.length,w=M+e.length+1,I=M+1;s.push(C,b,I),s.push(w,I,b)}this.setIndex(s),this.setAttribute("position",new Me(a,3)),this.setAttribute("uv",new Me(o,2)),this.setAttribute("normal",new Me(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Va=class r extends ls{constructor(e=1,t=1,i=4,n=8){let s=new Xn;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Ha=class r extends qe{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new T,h=new se;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=i+d/t*n;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Me(a,3)),this.setAttribute("normal",new Me(o,3)),this.setAttribute("uv",new Me(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Pi=class r extends qe{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;n=Math.floor(n),s=Math.floor(s);let h=[],d=[],u=[],p=[],f=0,_=[],m=i/2,y=0;function v(g){let M=f,C=new se,b=new T,w=0,I=g===!0?e:t,L=g===!0?1:-1;for(let j=1;j<=n;j++)d.push(0,m*L,0),u.push(0,L,0),p.push(.5,.5),f++;let D=f;for(let j=0;j<=n;j++){let R=j/n*c+o,V=Math.cos(R),H=Math.sin(R);b.x=I*H,b.y=m*L,b.z=I*V,d.push(b.x,b.y,b.z),u.push(0,L,0),C.x=.5*V+.5,C.y=.5*H*L+.5,p.push(C.x,C.y),f++}for(let j=0;j<n;j++){let R=M+j,V=D+j;g===!0?h.push(V,V+1,R):h.push(V+1,V,R),w+=3}l.addGroup(y,w,g===!0?1:2),y+=w}(function(){let g=new T,M=new T,C=0,b=(t-e)/i;for(let w=0;w<=s;w++){let I=[],L=w/s,D=L*(t-e)+e;for(let j=0;j<=n;j++){let R=j/n,V=R*c+o,H=Math.sin(V),ae=Math.cos(V);M.x=D*H,M.y=-L*i+m,M.z=D*ae,d.push(M.x,M.y,M.z),g.set(H,b,ae).normalize(),u.push(g.x,g.y,g.z),p.push(R,1-L),I.push(f++)}_.push(I)}for(let w=0;w<n;w++)for(let I=0;I<s;I++){let L=_[I][w],D=_[I+1][w],j=_[I+1][w+1],R=_[I][w+1];h.push(L,D,R),h.push(D,j,R),C+=6}l.addGroup(y,C,0),y+=C})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Me(d,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ga=class r extends Pi{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Li=class r extends qe{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let s=[],a=[];function o(u,p,f,_){let m=_+1,y=[];for(let v=0;v<=m;v++){y[v]=[];let g=u.clone().lerp(f,v/m),M=p.clone().lerp(f,v/m),C=m-v;for(let b=0;b<=C;b++)y[v][b]=b===0&&v===m?g:g.clone().lerp(M,b/C)}for(let v=0;v<m;v++)for(let g=0;g<2*(m-v)-1;g++){let M=Math.floor(g/2);g%2==0?(c(y[v][M+1]),c(y[v+1][M]),c(y[v][M])):(c(y[v][M+1]),c(y[v+1][M+1]),c(y[v+1][M]))}}function c(u){s.push(u.x,u.y,u.z)}function l(u,p){let f=3*u;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(u,p,f,_){_<0&&u.x===1&&(a[p]=u.x-1),f.x===0&&f.z===0&&(a[p]=_/2/Math.PI+.5)}function d(u){return Math.atan2(u.z,-u.x)}(function(u){let p=new T,f=new T,_=new T;for(let m=0;m<t.length;m+=3)l(t[m+0],p),l(t[m+1],f),l(t[m+2],_),o(p,f,_,u)})(n),function(u){let p=new T;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(u),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z}(i),function(){let u=new T;for(let f=0;f<s.length;f+=3){u.x=s[f+0],u.y=s[f+1],u.z=s[f+2];let _=d(u)/2/Math.PI+.5,m=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(_,1-m)}var p;(function(){let f=new T,_=new T,m=new T,y=new T,v=new se,g=new se,M=new se;for(let C=0,b=0;C<s.length;C+=9,b+=6){f.set(s[C+0],s[C+1],s[C+2]),_.set(s[C+3],s[C+4],s[C+5]),m.set(s[C+6],s[C+7],s[C+8]),v.set(a[b+0],a[b+1]),g.set(a[b+2],a[b+3]),M.set(a[b+4],a[b+5]),y.copy(f).add(_).add(m).divideScalar(3);let w=d(y);h(v,b+0,f,w),h(g,b+2,_,w),h(M,b+4,m,w)}})(),function(){for(let f=0;f<a.length;f+=6){let _=a[f+0],m=a[f+2],y=a[f+4],v=Math.max(_,m,y),g=Math.min(_,m,y);v>.9&&g<.1&&(_<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),y<.2&&(a[f+4]+=1))}}()}(),this.setAttribute("position",new Me(s,3)),this.setAttribute("normal",new Me(s.slice(),3)),this.setAttribute("uv",new Me(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},Wa=class r extends Li{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Pr=new T,Lr=new T,oa=new T,Ir=new Ei,qa=class extends qe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),s=Math.cos(rn*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:_,b:m,c:y}=Ir;if(_.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),y.fromBufferAttribute(o,l[2]),Ir.getNormal(oa),d[0]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,d[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,d[2]=`${Math.round(y.x*n)},${Math.round(y.y*n)},${Math.round(y.z*n)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let v=0;v<3;v++){let g=(v+1)%3,M=d[v],C=d[g],b=Ir[h[v]],w=Ir[h[g]],I=`${M}_${C}`,L=`${C}_${M}`;L in u&&u[L]?(oa.dot(u[L].normal)<=s&&(p.push(b.x,b.y,b.z),p.push(w.x,w.y,w.z)),u[L]=null):I in u||(u[I]={index0:l[v],index1:l[g],normal:oa.clone()})}}for(let f in u)if(u[f]){let{index0:_,index1:m}=u[f];Pr.fromBufferAttribute(o,_),Lr.fromBufferAttribute(o,m),p.push(Pr.x,Pr.y,Pr.z),p.push(Lr.x,Lr.y,Lr.z)}this.setAttribute("position",new Me(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ii=class extends Xn{constructor(e){super(e),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Xn().fromJSON(n))}return this}},dd=function(r,e,t=2){let i=e&&e.length,n=i?e[0]*t:r.length,s=rc(r,0,n,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l,h,d,u,p;if(i&&(s=function(f,_,m,y){let v=[],g,M,C,b,w;for(g=0,M=_.length;g<M;g++)C=_[g]*y,b=g<M-1?_[g+1]*y:f.length,w=rc(f,C,b,y,!1),w===w.next&&(w.steiner=!0),v.push(xd(w));for(v.sort(vd),g=0;g<v.length;g++)m=_d(v[g],m);return m}(r,e,s,t)),r.length>80*t){o=l=r[0],c=h=r[1];for(let f=t;f<n;f+=t)d=r[f],u=r[f+1],d<o&&(o=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return jn(s,a,t,o,c,p,0),a};ai=class r{static area(e){let t=e.length,i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return .5*i}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let i=[],n=[],s=[];ac(e),oc(i,e);let a=e.length;t.forEach(ac);for(let c=0;c<t.length;c++)n.push(a),a+=t[c].length,oc(i,t[c]);let o=dd(i,n);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};_n=class r extends qe{constructor(e=new Ii([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:bd,g,M,C,b,w,I=!1;y&&(g=y.getSpacedPoints(h),I=!0,u=!1,M=y.computeFrenetFrames(h,!1),C=new T,b=new T,w=new T),u||(m=0,p=0,f=0,_=0);let L=o.extractPoints(l),D=L.shape,j=L.holes;if(!ai.isClockWise(D)){D=D.reverse();for(let N=0,U=j.length;N<U;N++){let F=j[N];ai.isClockWise(F)&&(j[N]=F.reverse())}}let R=ai.triangulateShape(D,j),V=D;for(let N=0,U=j.length;N<U;N++){let F=j[N];D=D.concat(F)}function H(N,U,F){return U||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(U,F)}let ae=D.length,oe=R.length;function W(N,U,F){let te,$,x,ie=N.x-U.x,z=N.y-U.y,k=F.x-N.x,ne=F.y-N.y,he=ie*ie+z*z,de=ie*ne-z*k;if(Math.abs(de)>Number.EPSILON){let pe=Math.sqrt(he),xe=Math.sqrt(k*k+ne*ne),me=U.x-z/pe,fe=U.y+ie/pe,Ee=((F.x-ne/xe-me)*ne-(F.y+k/xe-fe)*k)/(ie*ne-z*k);te=me+ie*Ee-N.x,$=fe+z*Ee-N.y;let Ke=te*te+$*$;if(Ke<=2)return new se(te,$);x=Math.sqrt(Ke/2)}else{let pe=!1;ie>Number.EPSILON?k>Number.EPSILON&&(pe=!0):ie<-Number.EPSILON?k<-Number.EPSILON&&(pe=!0):Math.sign(z)===Math.sign(ne)&&(pe=!0),pe?(te=-z,$=ie,x=Math.sqrt(he)):(te=ie,$=z,x=Math.sqrt(he/2))}return new se(te/x,$/x)}let Y=[];for(let N=0,U=V.length,F=U-1,te=N+1;N<U;N++,F++,te++)F===U&&(F=0),te===U&&(te=0),Y[N]=W(V[N],V[F],V[te]);let ee=[],B,K=Y.concat();for(let N=0,U=j.length;N<U;N++){let F=j[N];B=[];for(let te=0,$=F.length,x=$-1,ie=te+1;te<$;te++,x++,ie++)x===$&&(x=0),ie===$&&(ie=0),B[te]=W(F[te],F[x],F[ie]);ee.push(B),K=K.concat(B)}for(let N=0;N<m;N++){let U=N/m,F=p*Math.cos(U*Math.PI/2),te=f*Math.sin(U*Math.PI/2)+_;for(let $=0,x=V.length;$<x;$++){let ie=H(V[$],Y[$],te);S(ie.x,ie.y,-F)}for(let $=0,x=j.length;$<x;$++){let ie=j[$];B=ee[$];for(let z=0,k=ie.length;z<k;z++){let ne=H(ie[z],B[z],te);S(ne.x,ne.y,-F)}}}let ce=f+_;for(let N=0;N<ae;N++){let U=u?H(D[N],K[N],ce):D[N];I?(b.copy(M.normals[0]).multiplyScalar(U.x),C.copy(M.binormals[0]).multiplyScalar(U.y),w.copy(g[0]).add(b).add(C),S(w.x,w.y,w.z)):S(U.x,U.y,0)}for(let N=1;N<=h;N++)for(let U=0;U<ae;U++){let F=u?H(D[U],K[U],ce):D[U];I?(b.copy(M.normals[N]).multiplyScalar(F.x),C.copy(M.binormals[N]).multiplyScalar(F.y),w.copy(g[N]).add(b).add(C),S(w.x,w.y,w.z)):S(F.x,F.y,d/h*N)}for(let N=m-1;N>=0;N--){let U=N/m,F=p*Math.cos(U*Math.PI/2),te=f*Math.sin(U*Math.PI/2)+_;for(let $=0,x=V.length;$<x;$++){let ie=H(V[$],Y[$],te);S(ie.x,ie.y,d+F)}for(let $=0,x=j.length;$<x;$++){let ie=j[$];B=ee[$];for(let z=0,k=ie.length;z<k;z++){let ne=H(ie[z],B[z],te);I?S(ne.x,ne.y+g[h-1].y,g[h-1].x+F):S(ne.x,ne.y,d+F)}}}function E(N,U){let F=N.length;for(;--F>=0;){let te=F,$=F-1;$<0&&($=N.length-1);for(let x=0,ie=h+2*m;x<ie;x++){let z=ae*x,k=ae*(x+1);Z(U+te+z,U+$+z,U+$+k,U+te+k)}}}function S(N,U,F){c.push(N),c.push(U),c.push(F)}function O(N,U,F){P(N),P(U),P(F);let te=n.length/3,$=v.generateTopUV(i,n,te-3,te-2,te-1);X($[0]),X($[1]),X($[2])}function Z(N,U,F,te){P(N),P(U),P(te),P(U),P(F),P(te);let $=n.length/3,x=v.generateSideWallUV(i,n,$-6,$-3,$-2,$-1);X(x[0]),X(x[1]),X(x[3]),X(x[1]),X(x[2]),X(x[3])}function P(N){n.push(c[3*N+0]),n.push(c[3*N+1]),n.push(c[3*N+2])}function X(N){s.push(N.x),s.push(N.y)}(function(){let N=n.length/3;if(u){let U=0,F=ae*U;for(let te=0;te<oe;te++){let $=R[te];O($[2]+F,$[1]+F,$[0]+F)}U=h+2*m,F=ae*U;for(let te=0;te<oe;te++){let $=R[te];O($[0]+F,$[1]+F,$[2]+F)}}else{for(let U=0;U<oe;U++){let F=R[U];O(F[2],F[1],F[0])}for(let U=0;U<oe;U++){let F=R[U];O(F[0]+ae*h,F[1]+ae*h,F[2]+ae*h)}}i.addGroup(N,n.length/3-N,0)})(),function(){let N=n.length/3,U=0;E(V,U),U+=V.length;for(let F=0,te=j.length;F<te;F++){let $=j[F];E($,U),U+=$.length}i.addGroup(N,n.length/3-N,1)}()}this.setAttribute("position",new Me(n,3)),this.setAttribute("uv",new Me(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new os[n.type]().fromJSON(n)),new r(i,e.options)}},bd={generateTopUV:function(r,e,t,i,n){let s=e[3*t],a=e[3*t+1],o=e[3*i],c=e[3*i+1],l=e[3*n],h=e[3*n+1];return[new se(s,a),new se(o,c),new se(l,h)]},generateSideWallUV:function(r,e,t,i,n,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*i],h=e[3*i+1],d=e[3*i+2],u=e[3*n],p=e[3*n+1],f=e[3*n+2],_=e[3*s],m=e[3*s+1],y=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new se(a,1-c),new se(l,1-d),new se(u,1-f),new se(_,1-y)]:[new se(o,1-c),new se(h,1-d),new se(p,1-f),new se(m,1-y)]}},Ya=class r extends Li{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Za=class r extends Li{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ja=class r extends qe{constructor(e=.5,t=1,i=32,n=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i);let o=[],c=[],l=[],h=[],d=e,u=(t-e)/(n=Math.max(1,n)),p=new T,f=new se;for(let _=0;_<=n;_++){for(let m=0;m<=i;m++){let y=s+m/i*a;p.x=d*Math.cos(y),p.y=d*Math.sin(y),c.push(p.x,p.y,p.z),l.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}d+=u}for(let _=0;_<n;_++){let m=_*(i+1);for(let y=0;y<i;y++){let v=y+m,g=v,M=v+i+1,C=v+i+2,b=v+1;o.push(g,M,b),o.push(M,C,b)}}this.setIndex(o),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Jn=class r extends qe{constructor(e=new Ii([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let d=n.length/3,u=h.extractPoints(t),p=u.shape,f=u.holes;ai.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,y=f.length;m<y;m++){let v=f[m];ai.isClockWise(v)===!0&&(f[m]=v.reverse())}let _=ai.triangulateShape(p,f);for(let m=0,y=f.length;m<y;m++){let v=f[m];p=p.concat(v)}for(let m=0,y=p.length;m<y;m++){let v=p[m];n.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let m=0,y=_.length;m<y;m++){let v=_[m],g=v[0]+d,M=v[1]+d,C=v[2]+d;i.push(g,M,C),c+=3}}this.setIndex(i),this.setAttribute("position",new Me(n,3)),this.setAttribute("normal",new Me(s,3)),this.setAttribute("uv",new Me(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,s=t.length;n<s;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=t[e.shapes[n]];i.push(a)}return new r(i,e.curveSegments)}},Kn=class r extends qe{constructor(e=1,t=32,i=16,n=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new T,u=new T,p=[],f=[],_=[],m=[];for(let y=0;y<=i;y++){let v=[],g=y/i,M=0;y===0&&a===0?M=.5/t:y===i&&c===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){let b=C/t;d.x=-e*Math.cos(n+b*s)*Math.sin(a+g*o),d.y=e*Math.cos(a+g*o),d.z=e*Math.sin(n+b*s)*Math.sin(a+g*o),f.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(b+M,1-g),v.push(l++)}h.push(v)}for(let y=0;y<i;y++)for(let v=0;v<t;v++){let g=h[y][v+1],M=h[y][v],C=h[y+1][v],b=h[y+1][v+1];(y!==0||a>0)&&p.push(g,M,b),(y!==i-1||c<Math.PI)&&p.push(M,C,b)}this.setIndex(p),this.setAttribute("position",new Me(f,3)),this.setAttribute("normal",new Me(_,3)),this.setAttribute("uv",new Me(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ka=class r extends Li{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},$a=class r extends qe{constructor(e=1,t=.4,i=12,n=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],c=[],l=[],h=new T,d=new T,u=new T;for(let p=0;p<=i;p++)for(let f=0;f<=n;f++){let _=f/n*s,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(f/n),l.push(p/i)}for(let p=1;p<=i;p++)for(let f=1;f<=n;f++){let _=(n+1)*p+f-1,m=(n+1)*(p-1)+f-1,y=(n+1)*(p-1)+f,v=(n+1)*p+f;a.push(_,m,v),a.push(m,y,v)}this.setIndex(a),this.setAttribute("position",new Me(o,3)),this.setAttribute("normal",new Me(c,3)),this.setAttribute("uv",new Me(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Qa=class r extends qe{constructor(e=1,t=.4,i=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:s,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],c=[],l=[],h=[],d=new T,u=new T,p=new T,f=new T,_=new T,m=new T,y=new T;for(let g=0;g<=i;++g){let M=g/i*s*Math.PI*2;v(M,s,a,e,p),v(M+.01,s,a,e,f),m.subVectors(f,p),y.addVectors(f,p),_.crossVectors(m,y),y.crossVectors(_,m),_.normalize(),y.normalize();for(let C=0;C<=n;++C){let b=C/n*Math.PI*2,w=-t*Math.cos(b),I=t*Math.sin(b);d.x=p.x+(w*y.x+I*_.x),d.y=p.y+(w*y.y+I*_.y),d.z=p.z+(w*y.z+I*_.z),c.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),l.push(u.x,u.y,u.z),h.push(g/i),h.push(C/n)}}for(let g=1;g<=i;g++)for(let M=1;M<=n;M++){let C=(n+1)*(g-1)+(M-1),b=(n+1)*g+(M-1),w=(n+1)*g+M,I=(n+1)*(g-1)+M;o.push(C,b,I),o.push(b,w,I)}function v(g,M,C,b,w){let I=Math.cos(g),L=Math.sin(g),D=C/M*g,j=Math.cos(D);w.x=b*(2+j)*.5*I,w.y=b*(2+j)*L*.5,w.z=b*Math.sin(D)*.5}this.setIndex(o),this.setAttribute("position",new Me(c,3)),this.setAttribute("normal",new Me(l,3)),this.setAttribute("uv",new Me(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},yn=class r extends qe{constructor(e=new ss(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,c=new T,l=new se,h=new T,d=[],u=[],p=[],f=[];function _(m){h=e.getPointAt(m/t,h);let y=a.normals[m],v=a.binormals[m];for(let g=0;g<=n;g++){let M=g/n*Math.PI*2,C=Math.sin(M),b=-Math.cos(M);c.x=b*y.x+C*v.x,c.y=b*y.y+C*v.y,c.z=b*y.z+C*v.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,d.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)_(m);_(s===!1?t:0),function(){for(let m=0;m<=t;m++)for(let y=0;y<=n;y++)l.x=m/t,l.y=y/n,p.push(l.x,l.y)}(),function(){for(let m=1;m<=t;m++)for(let y=1;y<=n;y++){let v=(n+1)*(m-1)+(y-1),g=(n+1)*m+(y-1),M=(n+1)*m+y,C=(n+1)*(m-1)+y;f.push(v,g,C),f.push(g,M,C)}}()})(),this.setIndex(f),this.setAttribute("position",new Me(d,3)),this.setAttribute("normal",new Me(u,3)),this.setAttribute("uv",new Me(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new os[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},eo=class extends qe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new T,s=new T;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let d=c[l],u=d.start;for(let p=u,f=u+d.count;p<f;p+=3)for(let _=0;_<3;_++){let m=o.getX(p+_),y=o.getX(p+(_+1)%3);n.fromBufferAttribute(a,m),s.fromBufferAttribute(a,y),lc(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,d=3*o+(l+1)%3;n.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),lc(n,s,i)===!0&&(t.push(n.x,n.y,n.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Me(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};Jp=Object.freeze({__proto__:null,BoxGeometry:zt,CapsuleGeometry:Va,CircleGeometry:Ha,ConeGeometry:Ga,CylinderGeometry:Pi,DodecahedronGeometry:Wa,EdgesGeometry:qa,ExtrudeGeometry:_n,IcosahedronGeometry:Ya,LatheGeometry:ls,OctahedronGeometry:Za,PlaneGeometry:mn,PolyhedronGeometry:Li,RingGeometry:Ja,ShapeGeometry:Jn,SphereGeometry:Kn,TetrahedronGeometry:Ka,TorusGeometry:$a,TorusKnotGeometry:Qa,TubeGeometry:yn,WireframeGeometry:eo}),hi=class extends Ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xn=class extends hi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};Mn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];t:{e:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break i}if(e>=s)break t;{let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},to=class extends Mn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ml,endingEnd:ml}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],c=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case fl:s=e,o=2*t-i;break;case gl:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case fl:a=e,c=2*i-t;break;case gl:a=1,c=i+n[1]-n[0];break;default:a=e-1,c=t}let l=.5*(i-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(i-t)/(n-t),_=f*f,m=_*f,y=-u*m+2*u*_-u*f,v=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*f+1,g=(-1-p)*m+(1.5+p)*_+.5*f,M=p*m-p*_;for(let C=0;C!==o;++C)s[C]=y*a[h+C]+v*a[l+C]+g*a[c+C]+M*a[d+C];return s}},io=class extends Mn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(n-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[l+u]*d+a[c+u]*h;return s}},no=class extends Mn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Pt=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dr(t,this.TimeBufferType),this.values=Dr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Dr(e.times,Array),values:Dr(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new no(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new to(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Br:t=this.InterpolantFactoryMethodDiscrete;break;case Fr:t=this.InterpolantFactoryMethodLinear;break;case Ds:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Br;case this.InterpolantFactoryMethodLinear:return Fr;case this.InterpolantFactoryMethodSmooth:return Ds}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(n!==void 0&&Sd(n))for(let o=0,c=n.length;o!==c;++o){let l=n[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ds,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(n)c=!0;else{let h=o*i,d=h-i,u=h+i;for(let p=0;p!==i;++p){let f=t[h+p];if(f!==t[d+p]||f!==t[u+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*i,d=a*i;for(let u=0;u!==i;++u)t[d+u]=t[h+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Pt.prototype.TimeBufferType=Float32Array,Pt.prototype.ValueBufferType=Float32Array,Pt.prototype.DefaultInterpolation=Fr;bi=class extends Pt{};bi.prototype.ValueTypeName="bool",bi.prototype.ValueBufferType=Array,bi.prototype.DefaultInterpolation=Br,bi.prototype.InterpolantFactoryMethodLinear=void 0,bi.prototype.InterpolantFactoryMethodSmooth=void 0;ro=class extends Pt{};ro.prototype.ValueTypeName="color";so=class extends Pt{};so.prototype.ValueTypeName="number";ao=class extends Mn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(n-t),l=e*o;for(let h=l+o;l!==h;l+=4)Ot.slerpFlat(s,0,a,l-o,a,l,c);return s}},kn=class extends Pt{InterpolantFactoryMethodLinear(e){return new ao(this.times,this.values,this.getValueSize(),e)}};kn.prototype.ValueTypeName="quaternion",kn.prototype.DefaultInterpolation=Fr,kn.prototype.InterpolantFactoryMethodSmooth=void 0;Si=class extends Pt{};Si.prototype.ValueTypeName="string",Si.prototype.ValueBufferType=Array,Si.prototype.DefaultInterpolation=Br,Si.prototype.InterpolantFactoryMethodLinear=void 0,Si.prototype.InterpolantFactoryMethodSmooth=void 0;oo=class extends Pt{};oo.prototype.ValueTypeName="vector";lo=class{constructor(e,t,i){let n=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){c++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,c),o===c&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let p=l[d],f=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},Ed=new lo,co=class{constructor(e){this.manager=e!==void 0?e:Ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};co.DEFAULT_MATERIAL_NAME="__DEFAULT";cs=class extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},la=new Te,cc=new T,hc=new T,hs=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pn,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;cc.setFromMatrixPosition(e.matrixWorld),t.position.copy(cc),hc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hc),t.updateMatrixWorld(),la.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(la),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(la)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},uc=new Te,Un=new T,ca=new T,ho=class extends hs{constructor(){super(new nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Un.setFromMatrixPosition(e.matrixWorld),i.position.copy(Un),ca.copy(i.position),ca.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ca),i.updateMatrixWorld(),n.makeTranslation(-Un.x,-Un.y,-Un.z),uc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc)}},us=class extends cs{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new ho}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},uo=class extends hs{constructor(){super(new Qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ds=class extends cs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new uo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Kp=new Te,$p=new Te,Qp=new Te,em=new T,tm=new Ot,im=new T,nm=new T,rm=new T,sm=new Ot,am=new T,om=new T,_o="\\[\\]\\.:\\/",Td=new RegExp("["+_o+"]","g"),ha="[^"+_o+"]",wd="[^"+_o.replace("\\.","")+"]",Ad=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",ha)+/(WCOD+)?/.source.replace("WCOD",wd)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ha)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ha)+"$"),Cd=["material","materials","bones","map"],ke=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Td,"")}static parseTrackName(e){let t=Ad.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Cd.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[n];if(a===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ke.Composite=class{constructor(r,e,t){let i=t||ke.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,i)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray],ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];lm=new Float32Array(1),cm=new se,hm=new T,um=new T,dm=new T,pm=new T,mm=new Te,fm=new Te,gm=new T,vm=new be,_m=new be,ym=new T,xm=new T,Mm=new T,bm=new T,Sm=new Gn,Em=new Bt,Tm=new T;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ua}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ua)});function Sn(r){let e=new ci;return e.color.setScalar(r),e}var vs,Dc=ws(()=>{yo();vs=class extends gn{constructor(e=null){super();let t=new zt;t.deleteAttribute("uv");let i=new hi({side:rt}),n=new hi,s=5;e!==null&&e._useLegacyLights===!1&&(s=900);let a=new us(16777215,s,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new Re(t,i);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let c=new Re(t,n);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new Re(t,n);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new Re(t,n);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new Re(t,n);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let u=new Re(t,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let p=new Re(t,n);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let f=new Re(t,Sn(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let _=new Re(t,Sn(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let m=new Re(t,Sn(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let y=new Re(t,Sn(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let v=new Re(t,Sn(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);let g=new Re(t,Sn(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});var Bc={};ah(Bc,{createGlasses:()=>Dd,webglAvailable:()=>Ud});function _s(r,e,t,i=0){let n=r/2+i,s=e/2+i,a=2/(t*3.2),o=[];for(let c=0;c<96;c++){let l=c/96*Math.PI*2,h=Math.cos(l),d=Math.sin(l),u=s*Math.sign(d)*Math.pow(Math.abs(d),a),p=1-.07*(1-(u+s)/(2*s));o.push(new se(n*p*Math.sign(h)*Math.pow(Math.abs(h),a),u))}return new Ii(o)}function Ld(){let r=[];for(let o=0;o<=40;o++){let c=o/40,l=-c*13,h=.15*c;r.push(new se(l,h))}for(let o=1;o<=20;o++){let l=o/20*Math.PI*.42;r.push(new se(-13-Math.sin(l)*3.2*.8,.15-(1-Math.cos(l))*3.2))}let i=[],n=[];for(let o=0;o<r.length;o++){let c=r[o],l=r[Math.min(o+1,r.length-1)],h=r[Math.max(o-1,0)],d=new se().subVectors(l,h).normalize(),u=new se(-d.y,d.x),p=ui.lerp(.62,.3,o/(r.length-1))/2;i.push(c.clone().addScaledVector(u,p)),n.push(c.clone().addScaledVector(u,-p))}let s=new Ii([...i,...n.reverse()]),a=new _n(s,{depth:.22,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:3,curveSegments:4});return a.rotateY(-Math.PI/2),a}function Id(r){let e=new Dt,t=new xn({color:r.frame||"#0d0d0f",roughness:.28,metalness:0,clearcoat:1,clearcoatRoughness:.12}),i=new hi({color:"#d9dadc",metalness:1,roughness:.22}),n=new xn({color:Oc.clone(),transparent:!0,opacity:.2,roughness:.04,metalness:0,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.6,side:pc,depthWrite:!1}),s=5.4,a=4.1,o=1.35,c=1.5,l=s/2+c/2;[-1,1].forEach(u=>{let p=new Dt;p.position.x=u*l,p.rotation.y=u*-.07;let f=_s(s,a,o,.42);f.holes.push(_s(s,a,o,0));let _=new _n(f,{depth:.38,bevelEnabled:!0,bevelThickness:.08,bevelSize:.07,bevelSegments:4,curveSegments:24});_.translate(0,0,-.19),p.add(new Re(_,t));let m=_s(s,a,o,.06).getPoints().filter((I,L,D)=>L>D.length*.55&&L<D.length*.95).map(I=>new T(I.x,I.y,.22)),y=new yn(new vn(m),80,.045,8,!1);p.add(new Re(y,i));let v=new Jn(_s(s,a,o,.02),32),g=v.attributes.position;for(let I=0;I<g.count;I++){let L=g.getX(I),D=g.getY(I);g.setZ(I,.25-(L*L+D*D)*.022)}v.computeVertexNormals(),p.add(new Re(v,n));for(let I of[0,.34]){let L=new Re(new Pi(.1,.1,.06,16),i);L.rotation.x=Math.PI/2,L.position.set(u*(s/2-.15-I),a/2+.05,.3),p.add(L)}let M=new Re(new zt(.55,.7,.75),t);M.position.set(u*(s/2+.55),a/2-.55,-.35),p.add(M);let C=new Re(new Pi(.09,.09,.8,12),i);C.position.set(u*(s/2+.7),a/2-.55,-.72),p.add(C);let b=new Re(Ld(),t);b.position.set(u*(s/2+.72)+.11,a/2-.55,-.65),b.rotation.y=u*.05,p.add(b);let w=new Re(new Kn(.28,16,12),new xn({color:"#ffffff",transparent:!0,opacity:.55,roughness:.1}));w.scale.set(.45,1,.3),w.position.set(-u*(s/2-.55),-.5,-.55),w.rotation.z=u*.35,p.add(w),e.add(p)});let h=new vn([new T(-c/2-.25,1.15,.05),new T(0,1.45,.25),new T(c/2+.25,1.15,.05)]),d=new Re(new yn(h,24,.24,12,!1),t);return d.scale.y=1,e.add(d),e.userData.lensMat=n,e}function Nd(){let r=document.createElement("canvas");r.width=r.height=256;let e=r.getContext("2d"),t=e.createRadialGradient(128,128,0,128,128,128);return t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new ts(r)}function Ud(){try{let r=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(r.getContext("webgl2")||r.getContext("webgl")))}catch{return!1}}function Dd(r,e={}){let t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=new Wn({canvas:r,antialias:!0,alpha:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.toneMapping=po,i.outputColorSpace=je;let n=new gn,s=new fn(i);n.environment=s.fromScene(new vs(i),.04).texture;let a=new ds("#ffffff",1.2);a.position.set(4,10,8),n.add(a);let o=new nt(28,1,.1,200),c=Id(e),l=new Dt;c.position.z=4.5,l.add(c),n.add(l);let h=new Re(new mn(18,9),new ci({map:Nd(),transparent:!0,depthWrite:!1,opacity:.35}));h.rotation.x=-Math.PI/2,h.position.y=-4.6,n.add(h);let d=c.userData.lensMat,u=0,p=e.tint||0,f=e.rotationY??-.55,_=e.rotationX??.12,m=f,y=_,v=f,g=!1,M=0,C=0,b=0,w=e.autoRotate!==!1&&!t;function I(){let oe=r.clientWidth,W=r.clientHeight;if(!oe||!W)return;i.setSize(oe,W,!1),o.aspect=oe/W;let Y=(e.fit||21)/(2*Math.tan(ui.degToRad(o.fov/2))*o.aspect),ee=(e.fitH||17)/(2*Math.tan(ui.degToRad(o.fov/2))),B=Math.max(Y,ee);o.position.set(0,B*.16,B),o.lookAt(0,-.4,0),o.updateProjectionMatrix()}function L(oe){d.color.copy(Oc).lerp(Pd,oe),d.opacity=ui.lerp(.18,.9,oe)}if(e.interactive!==!1){r.style.touchAction="pan-y",r.addEventListener("pointerdown",W=>{g=!0,M=W.clientX,C=W.clientY,r.setPointerCapture(W.pointerId),r.classList.add("grabbing")}),r.addEventListener("pointermove",W=>{g&&(m+=(W.clientX-M)*.01,y=ui.clamp(y+(W.clientY-C)*.005,-.4,.6),M=W.clientX,C=W.clientY,b=0)});let oe=()=>{g=!1,r.classList.remove("grabbing")};r.addEventListener("pointerup",oe),r.addEventListener("pointercancel",oe)}let D=!0,j=0,R=performance.now(),V=0;function H(oe){j=0;let W=Math.min((oe-R)/1e3,.05);R=oe,V+=W,b+=W,w&&!g&&b>2.5&&(m+=(v+Math.sin(V*.35)*.6-m)*Math.min(1,W*.8)),f+=(m-f)*Math.min(1,W*6),_+=(y-_)*Math.min(1,W*6),l.rotation.set(_,f,0),l.position.y=t?0:Math.sin(V*1.1)*.12,u+=(p-u)*Math.min(1,W*(e.tintSpeed||2.2)),L(u),i.render(n,o),D&&(j=requestAnimationFrame(H))}function ae(){j||(R=performance.now(),j=requestAnimationFrame(H))}return new IntersectionObserver(([oe])=>{D=oe.isIntersecting,D&&ae()}).observe(r),new ResizeObserver(I).observe(r),I(),L(u),ae(),{setTint(oe){p=ui.clamp(oe,0,1)},setTintNow(oe){p=u=ui.clamp(oe,0,1)},setRotation(oe,W){m=oe,W!==void 0&&(y=W),b=-1e9}}}var Oc,Pd,Fc=ws(()=>{yo();Dc();Oc=new be("#dfe7ec"),Pd=new be("#15181b")});var As=[{ref:"T1",name:"Lunettes photochromique T1",price:7500,oldPrice:1e4,categories:["Photochromiques"],rating:"4,8",reviews:"1 787 avis v\xE9rifi\xE9s",short:"Des lunettes photochromiques \xE9l\xE9gantes qui s\u2019adaptent \xE0 la luminosit\xE9 pour vous accompagner aussi bien en int\xE9rieur qu\u2019en ext\xE9rieur.",long:"La T1 associe une monture rectangulaire noir et argent \xE0 des verres photochromiques qui s\u2019assombrissent lorsque l\u2019exposition lumineuse augmente. Son design polyvalent convient aussi bien au quotidien, au travail, aux \xE9crans qu\u2019aux d\xE9placements en ext\xE9rieur.",specs:["Verres photochromiques","Protection UV400","Filtre anti-lumi\xE8re bleue","Traitement anti-reflet","Monture noir & argent","Style rectangulaire"],colors:[],images:["img/products/t1-1.webp","img/products/t1-2.webp","img/products/t1-3.webp","img/products/t1-4.webp","img/products/t1-5.webp"]},{ref:"CH1",name:"Lunettes Chrome Hearts",price:1e4,oldPrice:15e3,categories:["Style"],rating:"4,5",reviews:"514 avis v\xE9rifi\xE9s",short:"Des lunettes Chrome Hearts \xE9l\xE9gantes avec filtre anti-lumi\xE8re bleue, pens\xE9es pour am\xE9liorer le confort visuel pendant vos journ\xE9es devant les \xE9crans.",long:"Le mod\xE8le CH1 associe un design affirm\xE9 \xE0 des verres avec filtre anti-lumi\xE8re bleue. Il accompagne le travail sur ordinateur, le t\xE9l\xE9phone, les \xE9tudes et les longues p\xE9riodes devant les \xE9crans, avec une monture confortable disponible en deux finitions.",specs:["Filtre anti-lumi\xE8re bleue","Traitement anti-reflet","Confort pour les \xE9crans","Monture l\xE9g\xE8re et \xE9l\xE9gante","Deux couleurs disponibles : transparent & noir"],colors:["Transparent","Noir"],images:["img/products/ch1-1.webp","img/products/ch1-2.webp","img/products/ch1-3.webp","img/products/ch1-4.webp"]},{ref:"T2",name:"Lunettes photochromique T2",price:1e4,oldPrice:13500,categories:["Photochromiques"],rating:"4,8",reviews:"300 avis v\xE9rifi\xE9s",short:"Une monture photochromique premium au design g\xE9om\xE9trique, con\xE7ue pour combiner \xE9l\xE9gance, confort visuel et transition automatique des verres selon la luminosit\xE9.",long:"Le mod\xE8le T2 se distingue par une silhouette g\xE9om\xE9trique contemporaine et une monture m\xE9tallique \xE0 la finition soign\xE9e. Ses verres photochromiques s\u2019assombrissent lorsque l\u2019exposition lumineuse augmente, puis retrouvent progressivement leur transparence en int\xE9rieur. Un mod\xE8le pens\xE9 pour ceux qui recherchent une allure plus structur\xE9e, un bon maintien et un usage polyvalent au quotidien.",specs:["Verres photochromiques","Protection UV400","Filtre anti-lumi\xE8re bleue","Traitement anti-reflet","Monture m\xE9tallique \xE0 finition premium","Design g\xE9om\xE9trique moderne","Plaquettes nasales r\xE9glables pour un meilleur confort"],colors:[],images:["img/products/t2-1.webp","img/products/t2-2.webp","img/products/t2-3.webp","img/products/t2-4.webp"]},{ref:"PX1",name:"Lunettes photochromique premium PX1",price:17e3,oldPrice:22e3,categories:["Photochromiques","Premium"],rating:"5",reviews:"plus de 143 avis v\xE9rifi\xE9s",short:"Mod\xE8le premium \xE0 haute photosensibilit\xE9, con\xE7u pour associer \xE9l\xE9gance, l\xE9g\xE8ret\xE9 et confort visuel. Ses verres photochromiques gris adaptent progressivement leur teinte \xE0 l\u2019intensit\xE9 lumineuse.",long:"Le PX1 appartient \xE0 la s\xE9lection Premium JUBRIKA. Sa monture associe TR90 et ac\xE9tate de cellulose pour rechercher l\xE9g\xE8ret\xE9, souplesse et finition soign\xE9e. Les verres photochromiques gris int\xE8grent une technologie \xE0 mol\xE9cules photoactives : ils s\u2019assombrissent sous l\u2019effet des UV et retrouvent progressivement une teinte plus claire lorsque l\u2019exposition diminue. La filtration s\xE9lective de la lumi\xE8re bleue et la protection UV compl\xE8tent un mod\xE8le pens\xE9 pour un usage quotidien haut de gamme.",specs:["Monture : TR90 & ac\xE9tate de cellulose","Verres : polycarbonate optique / r\xE9sine organique CR-39 selon d\xE9clinaison","Technologie photochromique \xE0 mol\xE9cules photoactives","Teinte photochromique grise","Filtration s\xE9lective de la lumi\xE8re bleue","Protection UV","Design Premium, l\xE9ger et confortable"],colors:[],images:["img/products/px1-1.webp","img/products/px1-2.webp","img/products/px1-3.webp","img/products/px1-4.webp","img/products/px1-5.webp","img/products/px1-6.webp","img/products/px1-7.webp","img/products/px1-8.webp"]},{ref:"TS1",name:"Lunettes photochromiques TS1",price:15e3,oldPrice:18500,categories:["Photochromiques"],rating:"4,3",reviews:"plus de 58 avis v\xE9rifi\xE9s",short:"Vous \xEAtes g\xEAn\xE9 par le soleil, les changements brusques de luminosit\xE9 ou vous cherchez une paire qui reste \xE9l\xE9gante du matin au soir ? Les TS1 associent verres photochromiques, protection UV et design rond affirm\xE9 pour vous accompagner aussi bien en int\xE9rieur qu\u2019en ext\xE9rieur.",long:"Le soleil vous oblige souvent \xE0 plisser les yeux ? Les verres photochromiques TS1 foncent sous l\u2019effet des UV afin de r\xE9duire la quantit\xE9 de lumi\xE8re visible re\xE7ue et d\u2019am\xE9liorer le confort \xE0 l\u2019ext\xE9rieur.",specs:["Verres photochromiques","Protection UV400","Filtre anti-lumi\xE8re bleue","Traitement anti-reflet","Monture ronde structur\xE9e","Branches larges pour une bonne tenue","Usage int\xE9rieur / ext\xE9rieur"],colors:[],images:["img/products/ts1-1.webp","img/products/ts1-2.webp","img/products/ts1-3.webp","img/products/ts1-4.webp","img/products/ts1-5.webp","img/products/ts1-6.webp"]},{ref:"T8",name:"Lunettes photochromiques T8",price:12e3,oldPrice:16500,categories:["Photochromiques"],rating:"4,1",reviews:"plus de 55 avis v\xE9rifi\xE9s",short:"Vous \xEAtes souvent g\xEAn\xE9 par le soleil, les reflets ou les changements rapides de luminosit\xE9 ? Les T8 combinent verres photochromiques, protection UV et une monture carr\xE9e affirm\xE9e pour vous accompagner confortablement de l\u2019int\xE9rieur vers l\u2019ext\xE9rieur.",long:"La forte luminosit\xE9 ext\xE9rieure vous g\xEAne ? Les verres photochromiques T8 s\u2019assombrissent sous l\u2019effet des UV afin de r\xE9duire la quantit\xE9 de lumi\xE8re visible re\xE7ue et d\u2019am\xE9liorer le confort \xE0 l\u2019ext\xE9rieur.",specs:["Verres photochromiques","Protection UV400","Filtre anti-lumi\xE8re bleue","Traitement anti-reflet","Monture carr\xE9e structur\xE9e","Branches incurv\xE9es pour une meilleure tenue","Usage int\xE9rieur / ext\xE9rieur"],colors:[],images:["img/products/t8-1.webp","img/products/t8-2.webp","img/products/t8-3.webp","img/products/t8-4.webp","img/products/t8-5.webp"]},{ref:"B1",name:"Lunettes photochromiques Blue Effect B1",price:15e3,oldPrice:19e3,categories:["Photochromiques"],rating:"4,5",reviews:"plus de 274 avis v\xE9rifi\xE9s",short:"Vous passez beaucoup de temps devant le t\xE9l\xE9phone, l\u2019ordinateur ou la t\xE9l\xE9vision et vous \xEAtes r\xE9guli\xE8rement expos\xE9 \xE0 la lumi\xE8re des \xE9crans ? Le mod\xE8le B1 Blue Effect combine un filtre anti-lumi\xE8re bleue, un traitement anti-reflet et une protection UV400. Ses verres photochromiques \xE0 effet bleu s\u2019adaptent \xE9galement \xE0 la lumi\xE8re ext\xE9rieure et prennent une teinte bleut\xE9e au soleil : une seule paire pens\xE9e pour accompagner vos journ\xE9es entre \xE9crans et ext\xE9rieur.",long:"Le soleil vous oblige souvent \xE0 plisser les yeux ? Les verres photochromiques B1 foncent sous l\u2019effet des UV afin de r\xE9duire la quantit\xE9 de lumi\xE8re visible re\xE7ue et d\u2019am\xE9liorer le confort \xE0 l\u2019ext\xE9rieur.",specs:["Verres photochromiques Blue Effect","Filtre anti-lumi\xE8re bleue \u2014 usage \xE9crans","Protection UV400","Traitement anti-reflet","Teinte bleut\xE9e activ\xE9e par la lumi\xE8re ext\xE9rieure","Monture m\xE9tallique fine et l\xE9g\xE8re","Plaquettes nasales pour un meilleur confort","Usage int\xE9rieur / \xE9crans / ext\xE9rieur"],colors:[],images:["img/products/b1-1.webp","img/products/b1-2.webp","img/products/b1-3.webp","img/products/b1-4.webp","img/products/b1-5.webp","img/products/b1-6.webp"]},{ref:"T4",name:"Lunettes photochromiques T4",price:1e4,oldPrice:13500,categories:["Photochromiques"],rating:"4,3",reviews:"plus de 350 avis v\xE9rifi\xE9s",short:"Vous \xEAtes g\xEAn\xE9 par le soleil, les \xE9crans ou les variations brusques de luminosit\xE9 ? Les T4 combinent photochromisme, protection UV et filtre anti-lumi\xE8re bleue pour vous accompagner au quotidien tout en r\xE9duisant l\u2019inconfort li\xE9 \xE0 la lumi\xE8re.",long:"Le soleil vous \xE9blouit rapidement lorsque vous sortez ? Les verres photochromiques T4 s\u2019assombrissent sous l\u2019effet des UV afin de r\xE9duire la quantit\xE9 de lumi\xE8re visible re\xE7ue et d\u2019am\xE9liorer le confort \xE0 l\u2019ext\xE9rieur.",specs:["Verres photochromiques","Protection UV400","Filtre anti-lumi\xE8re bleue","Traitement anti-reflet","Monture l\xE9g\xE8re et structur\xE9e","Confort int\xE9rieur / ext\xE9rieur"],colors:[],images:["img/products/t4-1.webp","img/products/t4-2.webp","img/products/t4-3.webp","img/products/t4-4.webp","img/products/t4-5.webp","img/products/t4-6.webp","img/products/t4-7.webp","img/products/t4-8.webp"]},{ref:"T6",name:"Lunettes photochromiques T6",price:1e4,oldPrice:14e3,categories:["Photochromiques"],rating:"5",reviews:"plus de 29 avis v\xE9rifi\xE9s",short:"Une paire photochromique au design rond, l\xE9g\xE8re et polyvalente, pens\xE9e pour accompagner les changements de luminosit\xE9 entre int\xE9rieur et ext\xE9rieur.",long:`Caract\xE9ristiques principales
  \u2022 Verres photochromiques
  \u2022 Protection UV400
  \u2022 Filtre anti-lumi\xE8re bleue
  \u2022 Traitement anti-reflet
  \u2022 Monture ronde l\xE9g\xE8re
  \u2022 Mod\xE8le unisexe
  \u2022 Poids indiqu\xE9 : 24 g
  \u2022 Mati\xE8re indiqu\xE9e : PC
  \u2022 R\xE9f\xE9rence : T6`,specs:["Verres photochromiques","Protection UV400","Filtre anti-lumi\xE8re bleue","Traitement anti-reflet","Monture ronde l\xE9g\xE8re","Mod\xE8le unisexe","Poids indiqu\xE9 : 24 g","Mati\xE8re indiqu\xE9e : PC"],colors:[],images:["img/products/t6-1.webp","img/products/t6-2.webp","img/products/t6-3.webp","img/products/t6-4.webp","img/products/t6-5.webp","img/products/t6-6.webp"]},{ref:"T7",name:"Lunettes photochromiques T7",price:1e4,oldPrice:12500,categories:["Photochromiques"],rating:"4,2",reviews:"plus de 240 avis v\xE9rifi\xE9s",short:"Vous passez r\xE9guli\xE8rement des \xE9crans au soleil et vos yeux doivent constamment s\u2019adapter \xE0 la lumi\xE8re ? Le mod\xE8le T7 r\xE9unit une protection pens\xE9e pour le quotidien : ses verres photochromiques s\u2019assombrissent progressivement sous l\u2019effet des UV puis redeviennent plus clairs \xE0 l\u2019int\xE9rieur. Il aide ainsi \xE0 r\xE9duire l\u2019inconfort li\xE9 aux changements de luminosit\xE9, tout en associant protection UV et confort devant les \xE9crans.",long:`Pourquoi choisir le TS4 ?
\u2022 Vous \xEAtes souvent g\xEAn\xE9 par la forte luminosit\xE9 ext\xE9rieure : les verres se teintent au contact des UV.
\u2022 Vous alternez entre int\xE9rieur et ext\xE9rieur : la teinte s\u2019adapte automatiquement aux conditions lumineuses.
\u2022 Vous utilisez r\xE9guli\xE8rement t\xE9l\xE9phone, ordinateur ou tablette : filtre anti-lumi\xE8re bleue pour davantage de confort visuel.
\u2022 Protection UV400 contre les rayons ultraviolets.
\u2022 Monture carr\xE9e moderne et polyvalente.
\u2022 Format l\xE9ger : environ 18,5 g.
\u2022 Dimensions indiqu\xE9es : largeur 144 mm, branches 152 mm, verre 52 \xD7 51 mm, pont 18 mm.
\u2022 R\xE9f\xE9rence : TS4`,specs:["Vous \xEAtes souvent g\xEAn\xE9 par la forte luminosit\xE9 ext\xE9rieure : les verres se teintent au contact des UV.","Vous alternez entre int\xE9rieur et ext\xE9rieur : la teinte s\u2019adapte automatiquement aux conditions lumineuses.","Vous utilisez r\xE9guli\xE8rement t\xE9l\xE9phone, ordinateur ou tablette : filtre anti-lumi\xE8re bleue pour davantage de confort visuel.","Protection UV400 contre les rayons ultraviolets.","Monture carr\xE9e moderne et polyvalente.","Format l\xE9ger : environ 18,5 g.","Dimensions indiqu\xE9es : largeur 144 mm, branches 152 mm, verre 52 \xD7 51 mm, pont 18 mm."],colors:[],images:["img/products/t7-1.webp","img/products/t7-2.webp","img/products/t7-3.webp","img/products/t7-4.webp","img/products/t7-5.webp"]},{ref:"TS4",name:"Lunettes photochromiques TS4",price:9e3,oldPrice:13e3,categories:["Photochromiques"],rating:"5",reviews:"plus de 340 avis v\xE9rifi\xE9s",short:"Vous passez r\xE9guli\xE8rement des \xE9crans au soleil et vos yeux doivent constamment s\u2019adapter \xE0 la lumi\xE8re ? Le mod\xE8le TS4 r\xE9unit une protection pens\xE9e pour le quotidien : ses verres photochromiques s\u2019assombrissent progressivement sous l\u2019effet des UV puis redeviennent plus clairs \xE0 l\u2019int\xE9rieur. Il aide ainsi \xE0 r\xE9duire l\u2019inconfort li\xE9 aux changements de luminosit\xE9, tout en associant protection UV et confort devant les \xE9crans.",long:`Pourquoi choisir le TS4 ?
\u2022 Vous \xEAtes souvent g\xEAn\xE9 par la forte luminosit\xE9 ext\xE9rieure : les verres se teintent au contact des UV.
\u2022 Vous alternez entre int\xE9rieur et ext\xE9rieur : la teinte s\u2019adapte automatiquement aux conditions lumineuses.
\u2022 Vous utilisez r\xE9guli\xE8rement t\xE9l\xE9phone, ordinateur ou tablette : filtre anti-lumi\xE8re bleue pour davantage de confort visuel.
\u2022 Protection UV400 contre les rayons ultraviolets.
\u2022 Monture carr\xE9e moderne et polyvalente.
\u2022 Format l\xE9ger : environ 18,5 g.
\u2022 Dimensions indiqu\xE9es : largeur 144 mm, branches 152 mm, verre 52 \xD7 51 mm, pont 18 mm.
\u2022 R\xE9f\xE9rence : TS4`,specs:["Vous \xEAtes souvent g\xEAn\xE9 par la forte luminosit\xE9 ext\xE9rieure : les verres se teintent au contact des UV.","Vous alternez entre int\xE9rieur et ext\xE9rieur : la teinte s\u2019adapte automatiquement aux conditions lumineuses.","Vous utilisez r\xE9guli\xE8rement t\xE9l\xE9phone, ordinateur ou tablette : filtre anti-lumi\xE8re bleue pour davantage de confort visuel.","Protection UV400 contre les rayons ultraviolets.","Monture carr\xE9e moderne et polyvalente.","Format l\xE9ger : environ 18,5 g.","Dimensions indiqu\xE9es : largeur 144 mm, branches 152 mm, verre 52 \xD7 51 mm, pont 18 mm."],colors:[],images:["img/products/ts4-1.webp","img/products/ts4-2.webp","img/products/ts4-3.webp","img/products/ts4-4.webp","img/products/ts4-5.webp"]},{ref:"CH2",name:"Lunettes Chrome Hearts CH2",price:7500,oldPrice:1e4,categories:["Style"],rating:"5",reviews:"plus de 994 avis v\xE9rifi\xE9s",short:"Un mod\xE8le Chrome Hearts au style affirm\xE9, con\xE7u pour ceux qui veulent une paire \xE9l\xE9gante au quotidien tout en gagnant en confort devant les \xE9crans. Ses verres anti-lumi\xE8re bleue aident \xE0 limiter l\u2019inconfort li\xE9 aux longues expositions au t\xE9l\xE9phone, \xE0 l\u2019ordinateur et \xE0 la t\xE9l\xE9vision.",long:`Pourquoi choisir le CH2 ?
\u2022 Vous passez beaucoup de temps devant les \xE9crans : les verres anti-lumi\xE8re bleue sont pens\xE9s pour am\xE9liorer le confort visuel.
\u2022 Vous recherchez une paire avec plus de caract\xE8re : d\xE9tails m\xE9talliques inspir\xE9s de l\u2019univers Chrome Hearts et finitions travaill\xE9es.
\u2022 Vous voulez une monture l\xE9g\xE8re et agr\xE9able \xE0 porter : environ 27 g selon les donn\xE9es du mod\xE8le.
\u2022 Charni\xE8res \xE0 ressort et conception stable pour un usage quotidien.
\u2022 Quatre coloris disponibles pour choisir le rendu qui correspond le mieux \xE0 votre style.
\u2022 Dimensions indiqu\xE9es : largeur de monture 145 mm, pont 21 mm, largeur de verre 51 mm, hauteur de verre 40 mm, branches 147 mm.
\u2022 Cat\xE9gorie : Style + anti-lumi\xE8re bleue.
\u2022 R\xE9f\xE9rence : CH2`,specs:["Vous passez beaucoup de temps devant les \xE9crans : les verres anti-lumi\xE8re bleue sont pens\xE9s pour am\xE9liorer le confort visuel.","Vous recherchez une paire avec plus de caract\xE8re : d\xE9tails m\xE9talliques inspir\xE9s de l\u2019univers Chrome Hearts et finitions travaill\xE9es.","Vous voulez une monture l\xE9g\xE8re et agr\xE9able \xE0 porter : environ 27 g selon les donn\xE9es du mod\xE8le.","Charni\xE8res \xE0 ressort et conception stable pour un usage quotidien.","Quatre coloris disponibles pour choisir le rendu qui correspond le mieux \xE0 votre style.","Dimensions indiqu\xE9es : largeur de monture 145 mm, pont 21 mm, largeur de verre 51 mm, hauteur de verre 40 mm, branches 147 mm.","Cat\xE9gorie : Style + anti-lumi\xE8re bleue."],colors:[],images:["img/products/ch2-1.webp","img/products/ch2-2.webp","img/products/ch2-3.webp","img/products/ch2-4.webp","img/products/ch2-5.webp","img/products/ch2-6.webp","img/products/ch2-7.webp"]},{ref:"RGB1",name:"Lunettes polaris\xE9es r\xE9glables RGB1",price:16500,oldPrice:2e4,categories:["Polaris\xE9es","Premium"],rating:"4,9",reviews:"plus de 444 avis v\xE9rifi\xE9s",short:"Des lunettes polaris\xE9es \xE0 intensit\xE9 r\xE9glable con\xE7ues pour adapter manuellement la teinte \xE0 votre environnement. Tournez les molettes int\xE9gr\xE9es aux cercles des verres pour obtenir une vision plus claire ou plus sombre selon la luminosit\xE9, tout en profitant de verres polaris\xE9s qui r\xE9duisent les reflets g\xEAnants.",long:`Pourquoi choisir le RGB1 ?
\u2022 Intensit\xE9 r\xE9glable : tournez les molettes pour assombrir ou \xE9claircir progressivement les verres selon vos pr\xE9f\xE9rences.
\u2022 Verres polaris\xE9s TAC : con\xE7us pour r\xE9duire les reflets g\xEAnants et am\xE9liorer le confort visuel en ext\xE9rieur.
\u2022 Monture m\xE9tallique structur\xE9e avec plaquettes de nez en silicone pour un maintien confortable.
\u2022 Design rond r\xE9tro et m\xE9canique apparente pour un style distinctif.
\u2022 Trois finitions disponibles : noir, dor\xE9 et argent\xE9.
\u2022 Dimensions indiqu\xE9es : largeur 149 mm, pont 21 mm, verres 52 \xD7 52 mm, branches 156 mm.
\u2022 Cat\xE9gorie : Polaris\xE9es \u2022 teinte r\xE9glable manuellement \u2022 unisexe \u2022 environ 35 g.
\u2022 R\xE9f\xE9rence : RGB1`,specs:["Intensit\xE9 r\xE9glable : tournez les molettes pour assombrir ou \xE9claircir progressivement les verres selon vos pr\xE9f\xE9rences.","Verres polaris\xE9s TAC : con\xE7us pour r\xE9duire les reflets g\xEAnants et am\xE9liorer le confort visuel en ext\xE9rieur.","Monture m\xE9tallique structur\xE9e avec plaquettes de nez en silicone pour un maintien confortable.","Design rond r\xE9tro et m\xE9canique apparente pour un style distinctif.","Trois finitions disponibles : noir, dor\xE9 et argent\xE9.","Dimensions indiqu\xE9es : largeur 149 mm, pont 21 mm, verres 52 \xD7 52 mm, branches 156 mm.","Cat\xE9gorie : Polaris\xE9es \u2022 teinte r\xE9glable manuellement \u2022 unisexe \u2022 environ 35 g.",`protection UV400 \u2022 filtre anti-lumi\xE8re bleue \u2022 monture noir & argent \u2022 style rectangulaire'},
{name:'Lunettes Chrome Hearts',price:10000,oldPrice:15000,reference:'CH1',category:'Anti-lumi\xE8re bleue',desc:'Un mod\xE8le \xE9l\xE9gant avec filtre anti-lumi\xE8re bleue pens\xE9 pour le confort devant les \xE9crans.',specs:'Filtre anti-lumi\xE8re bleue \u2022 anti-reflet \u2022 deux couleurs : transparent et noir \u2022 monture confortable'},
{name:'Lunettes photochromique T2',price:10000,oldPrice:13500,reference:'T2',category:'Photochromiques',desc:'Une monture photochromique premium au design g\xE9om\xE9trique avec finition m\xE9tallique.',specs:'Verres photochromiques \u2022 UV400 \u2022 filtre anti-lumi\xE8re bleue \u2022 traitement anti-reflet \u2022 monture m\xE9tallique premium'},
{name:'Lunettes photochromique premium PX1',price:17000,oldPrice:22000,reference:'PX1',category:'Photochromiques',categories:['Photochromiques','Premium'],desc:'Mod\xE8le premium \xE0 haute photosensibilit\xE9 avec monture TR90 et ac\xE9tate de cellulose.',specs:'Photochromique gris \u2022 filtre lumi\xE8re bleue \u2022 protection UV \u2022 TR90 \u2022 ac\xE9tate de cellulose \u2022 finition premium'},
{name:'Lunettes photochromiques TS1',price:15000,oldPrice:18500,reference:'TS1',category:'Photochromiques',desc:'Un mod\xE8le rond photochromique con\xE7u pour accompagner les changements de luminosit\xE9 avec style.',specs:'Verres photochromiques \u2022 UV400 \u2022 filtre anti-lumi\xE8re bleue \u2022 anti-reflet \u2022 design rond structur\xE9'},
{name:'Lunettes photochromiques T8',price:12000,oldPrice:16500,reference:'T8',category:'Photochromiques',desc:'Une monture carr\xE9e photochromique con\xE7ue pour les changements de luminosit\xE9 et le confort quotidien.',specs:'Verres photochromiques \u2022 UV400 \u2022 filtre anti-lumi\xE8re bleue \u2022 anti-reflet \u2022 branches incurv\xE9es'},
{name:'Lunettes rectangulaires',price:13000,category:'Premium',desc:'Une silhouette rectangulaire affirm\xE9e pour un look chic et contemporain.',specs:'Monture rectangulaire \u2022 finition soign\xE9e \u2022 confortable'},
{name:'Lunettes photochromiques T4',price:10000,oldPrice:13500,reference:'T4',category:'Photochromiques',desc:'Une paire polyvalente pour les \xE9crans, le soleil et les changements de luminosit\xE9.',specs:'Photochromiques \u2022 UV400 \u2022 filtre anti-lumi\xE8re bleue \u2022 anti-reflet \u2022 usage int\xE9rieur/ext\xE9rieur'},
{name:'Lunettes photochromiques T6',price:10000,oldPrice:14000,reference:'T6',category:'Photochromiques',desc:'Une monture ronde photochromique l\xE9g\xE8re et polyvalente.',specs:'Photochromiques \u2022 UV400 \u2022 filtre anti-lumi\xE8re bleue \u2022 anti-reflet \u2022 PC \u2022 24 g \u2022 unisexe'},
{name:'Lunettes photochromiques T7',price:10000,oldPrice:12500,reference:'T7',category:'Photochromiques',desc:'Verres photochromiques adaptatifs, protection UV400 et filtre anti-lumi\xE8re bleue.',specs:'Photochromiques \u2022 UV400 \u2022 anti-lumi\xE8re bleue \u2022 18,5 g \u2022 monture carr\xE9e'},
{name:'Lunettes photochromiques TS4',price:9000,oldPrice:13000,reference:'TS4',category:'Photochromiques',desc:'Des lunettes photochromiques \xE9l\xE9gantes qui adaptent progressivement leur teinte \xE0 l\u2019intensit\xE9 lumineuse. Con\xE7ues pour accompagner le quotidien entre \xE9crans et ext\xE9rieur, elles combinent confort visuel, style et protection.',specs:'Verres photochromiques \u2022 protection UV400 \u2022 filtre anti-lumi\xE8re bleue \u2022 traitement anti-reflet \u2022 adaptation \xE0 la luminosit\xE9 \u2022 monture l\xE9g\xE8re et \xE9l\xE9gante'},
{name:'Lunettes Chrome Hearts CH2',price:7500,oldPrice:10000,reference:'CH2',category:'Style',desc:'Monture Chrome Hearts de style avec verres anti-lumi\xE8re bleue.',specs:'Style \u2022 anti-lumi\xE8re bleue \u2022 4 couleurs \u2022 27 g \u2022 charni\xE8res \xE0 ressort'},
{name:'Lunettes polaris\xE9es r\xE9glables RGB1',price:16500,oldPrice:20000,reference:'RGB1',category:'Polaris\xE9es',desc:'Lunettes polaris\xE9es \xE0 teinte r\xE9glable manuellement gr\xE2ce aux molettes int\xE9gr\xE9es.',specs:'Verres TAC polaris\xE9s \u2022 teinte r\xE9glable \u2022 monture m\xE9tal \u2022 plaquettes silicone \u2022 3 couleurs \u2022 35 g \u2022 unisexe'}];

// R\xE8gle Premium automatique : prix de vente strictement sup\xE9rieur \xE0 16 000 FCFA.
(function applyAutomaticPremiumCategory(){
  const cards = [...document.querySelectorAll('#catalogue .grid > .product')];
  cards.forEach((card, index) => {
    const product = products[index];
    if(!product) return;
    const categories = new Set((card.dataset.categories || '').split(/\\s+/).filter(Boolean));
    if(Number(product.price) > 16000) categories.add('Premium');
    else categories.delete('Premium');
    card.dataset.categories = [...categories].join(' ');
  });
})();

const routes={
'Douala':{phone:'237689748143',areaLabel:'Quartier de Douala',areas:[
'Akwa','Akwa Nord','Bali','Bassa','B\xE9panda','B\xE9panda Omnisport','B\xE9panda Petit Wouri','Beedi','Bessengue','Bilongue','Bois des singes','Bonab\xE9ri','Bonadiwoto','Bonamoussadi','Bonanjo','Bonamoussongo','Bonamikengue','Bonamoussadi Cit\xE9','Bonamouang','Bonantone','Bonapriso','Bonassama','Bonendal\xE9','Bonewonda','Bonendal\xE9 Abattoirs','Bonendale','Bonangang','Bonateki','Bonendale Sodiko','Cit\xE9 des Palmiers','Cit\xE9 SIC Bassa','Cit\xE9 Berge','Deido','Dibom','Dibamba-Bonaloka','Grand Hangar','Japoma','Kotto','Logbaba','Logbessou','Logpom','Mak\xE9p\xE9','Mak\xE9p\xE9-Missok\xE8','Mambanda','Mbanga-Pongo','Mboppi','Ndogbati','Ndogbong','Ndogpassi','Ndoghem','Ndogmbe','Ndobo','New-Bell','New-Bell Congo','New-Bell Haoussa','New-Bell Bandjoun','Ngodi-Akwa','Ngodi-Bakoko','Ngw\xE9l\xE9','Nkolmintag','Nyalla','Nyalla-Pariso','Nyala','Nyalla Mbanga','Oyack','PK 8','PK 10','PK 12','PK 13','PK 14','Soboum','Sodiko','Village','Youpw\xE9','Zone industrielle de Bassa','Nylon-Bassa','Boko','Malangue','Bangu\xE8','KassalaFam','Camp Yabassi','Quartier Haoussa','Quartier Bafia','Quartier Yadibang','Quartier Congo','Quartier non glac\xE9'
]},
'Yaound\xE9':{phone:'237689748143',areaLabel:'Quartier de Yaound\xE9',areas:[
'Ahala I','Ahala II','Afanoya','Afanoya I','Afanoya II','Afanoya III','Afanoya IV','Anguissa','Awae','Awae I','Awae II','Awae III','Bastos','Bata-Nlongkak','Biyem-Assi','Briqueterie','Centre commercial','Centre-ville','Cit\xE9 Verte','Dakar','Damas','Efoulan','Elig-Edzoa','Elig-Effa','Elig-Effa I','Elig-Effa II','Elig-Effa III','Elig-Effa IV','Elig-Effa V','Elig-Effa VI','Elig-Effa VII','Emana','Emombo','Etoa','Etoa-Meki','Essos','Etam-Bafia','Etetak','Etoudi','Etoug-Ebe','Etoug-Ebe I','Etoug-Ebe II','Etoug-Ebe III','Febe','Grand Messa','Kondengui','Kondengui I','Kondengui II','Kondengui III','Kondengui IV','Madagascar','Mballa I','Mballa II','Mballa III','Mballa IV','Mballa V','Mballa VI','Mballa VII','Mebandan','Melen','Melen I','Melen II','Melen VII','Melen VIII','Melen VIII B','Melen VIII C','Melen IX','Mendong','Messame-Ndongo','Messassi','Meyokou','Mimboman','Mimboman I','Mimboman II','Mimboman III','Minkoameyos','Mokolo','Mvan','Mvan Nord','Mvan Sud','Mvog-Ada','Mvog-Mbi','Mvog-Betsi','Ndamvout','Ngousso','Ngousso I','Ngousso II','Ngousso-Ntem','Ngoulmekong','Ngoa-Ekele','Ngoa-Ekele I','Ngoa-Ekele II','Nkolbikok','Nkolbisson','Nkol-Ebogo','Nkolmesseng','Nkol-Ndongo I','Nkol-Ndongo II','Nkolondom','Nkom-Kana','Nkomo','Nkomo I','Nkomo II','Nlongkak','Nlong-Mvoly\xE9','Nsimeyong','Nsimeyong I','Nsimeyong II','Nsimeyong III','Ntaba','Ntoungou','Nyom','Obili','Obobogo','Odza','Odza I','Odza II','Odza III','Olembe','Olezoa','Omnisports','Oyom-Abang','Simbock','Santa Barbara','Tsinga','Tongolo','Quartier Fouda','Koweit City','Nkolso','Ekie','Ekounou','Ekoumdoum','Manguier','Okolo','Nkolo','Nkolondom','Nkolmesseng'
]}
};

// Routage du service client : Yaound\xE9 reste d\xE9di\xE9 \xE0 Yaound\xE9.
// Toutes les autres villes (Douala, Bafoussam, Garoua et Autre ville)
// passent par le service client de Douala.
routes['Bafoussam'] = {phone: routes['Douala'].phone};
routes['Garoua'] = {phone: routes['Douala'].phone};
routes['Autre ville'] = {phone: routes['Douala'].phone};


const doualaDeliveryFees = {"Akwa": 1000, "Ange Rapha\xEBl": 1000, "A\xE9roport / Texaco A\xE9roport": 1000, "Bali": 1500, "Bassa": 1500, "Beedi": 1000, "B\xE9panda": 1000, "Bilongu\xE9": 1000, "Bois des Singes": 1500, "Bonab\xE9ri": 1500, "Bonanjo": 1500, "Bonangang": 1000, "Bonangando": 1000, "Bonapriso": 1500, "Bonassama": 1500, "Bonamoussadi": 1000, "Brazzaville": 1000, "Cit\xE9 des Palmiers": 1000, "Cit\xE9 SIC": 1000, "De\xEFdo": 1000, "Dibom": 1500, "Japoma": 1500, "Kotto": 1000, "Lendi": 1500, "Logbaba": 1000, "Logbessou": 1000, "Logpom": 1000, "Madagascar": 1000, "Mak\xE9p\xE9": 1000, "Mambanda": 1500, "Ndogbati": 1000, "Ndogbong": 1000, "Ndoghem": 1000, "Ndogpassi": 1000, "Ndogsimbi": 1000, "Ndobo": 1500, "Ndokoti": 1000, "New-Bell": 1000, "Nyalla": 1000, "Nylon": 1000, "Oyack": 1000, "Sodiko": 1000, "Yassa": 1500, "PK 8": 1000, "PK 9": 1000, "PK 10": 1000, "PK 11": 1000, "PK 12": 1000, "PK 13": 1000, "PK 14": 1000, "PK 15": 1500, "PK 16": 1500, "PK 17": 1500, "PK 18": 1500, "PK 19": 1500};
const doualaAliases = {"aeroport": "A\xE9roport / Texaco A\xE9roport", "texaco aeroport": "A\xE9roport / Texaco A\xE9roport", "texaco": "A\xE9roport / Texaco A\xE9roport", "deido": "De\xEFdo", "bepanda": "B\xE9panda", "bonaberi": "Bonab\xE9ri", "makepe": "Mak\xE9p\xE9", "bilongue": "Bilongu\xE9", "cite sic": "Cit\xE9 SIC", "cite des palmiers": "Cit\xE9 des Palmiers", "bois de singe": "Bois des Singes", "bois des singes": "Bois des Singes", "ange raphael": "Ange Rapha\xEBl", "new bell": "New-Bell", "ndog bongo": "Ndogbong"};


const shippingFees = {"Bafoussam": 2000, "Garoua": 4000, "Maroua": 4000, "Guider": 4000, "Bertoua": 3000, "Buea": 2000, "Limb\xE9": 2000, "Kumba": 2000, "Kribi": 2000, "Ebolowa": 2000, "Batouri": 3000, "Foumban": 2000, "Dschang": 2000, "Nkongsamba": 2000, "Ed\xE9a": 2000, "Garoua-Boula\xEF": 3000};
function normalizeAreaName(value){
  return String(value || '')
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g,'')
    .toLowerCase()
    .replace(/[-_/]+/g,' ')
    .replace(/\\s+/g,' ')
    .trim();
}


const yaoundeDeliveryFees = {"Bastos": 1000, "Cradat": 1000, "Nlongkak": 1000, "Mvog-Ada": 1000, "Essos": 1000, "Mvog-Mbi": 1000, "Mimboman": 1000, "Ekounou": 1000, "Kondengui": 1000, "Nkolndongo": 1000, "Anguissa": 1000, "Omnisports": 1000, "Ngousso": 1000, "Etoudi": 1000, "Emana": 1000, "Messassi": 1000, "Olembe": 1500, "Mballa II": 1500, "Manguier": 1000, "Elig-Essono": 1000, "Elig-Edzoa": 1500, "Tsinga": 1500, "Mokolo": 1000, "Madagascar": 1000, "Messa": 1000, "Briqueterie": 1000, "Cit\xE9 Verte": 1000, "Obili": 1000, "Ngoa-Ek\xE9l\xE9": 1000, "Melen": 1000, "Efoulan": 1000, "Nsam": 1500, "Olezoa": 1000, "Dakar": 1000, "Ahala": 1500, "Obobogo": 1000, "Mvan": 1000, "Odza": 1500, "Messamendongo": 1000, "Ekoumdoum": 1000, "Awae": 1500, "Nkomo": 1000, "Biteng": 1000, "Biyem-Assi": 1000, "Mendong": 1000, "Etoug-Ebe": 1000, "Mvog-Betsi": 1000, "Simbock": 1000, "Nkolbikok": 1000, "Etetak": 1500, "Oyom-Abang": 1500, "Nkolbisson": 1000, "Minkoameyos": 1500, "Nyom": 1000, "Nkolondom": 1000, "Nkolfoulou": 1500, "Acacias": 1000, "Jouvence": 1000, "Nsimeyong": 1000, "Damas": 1000, "Nkomkana": 1000, "Santa Barbara": 1000, "Mont\xE9e Jouvence": 1000, "Carrefour R\xE9gie": 1000, "Etoa-Meki": 1000, "Ekie": 1000, "Nkoabang": 1000, "Soa": 1500, "Mbankomo": 2000, "Febe": 1000, "Dragages": 1000, "Golf": 1000, "Mont F\xE9b\xE9": 1000, "Carrefour MEEC": 1000, "Tradex \xC9leveur": 1000, "\xC9leveur": 1000, "Tongolo": 1000, "Mvog Atangana Mballa": 1000, "Carrefour Ahala": 1500, "Carrefour Tropicana": 1000, "Carrefour Nkoabang": 1000, "Carrefour Mvog-Mbi": 1000, "Carrefour Nsam": 1500, "Carrefour Obili": 1000, "Carrefour Etoug-Ebe": 1000, "Carrefour Mendong": 1000, "Carrefour Messassi": 1000, "Carrefour Emana": 1000, "Carrefour Olembe": 1000};
const yaoundeAliases = {"vog ada": "Mvog-Ada", "vog mbi": "Mvog-Mbi", "mimbo man": "Mimboman", "ekunu": "Ekounou", "kodengui": "Kondengui", "kondongo": "Nkolndongo", "gouso": "Ngousso", "etudi": "Etoudi", "mala 2": "Mballa II", "manguie": "Manguier", "elike sono": "Elig-Essono", "elik edjoa": "Elig-Edzoa", "tinga": "Tsinga", "biketeri": "Briqueterie", "ngwaikele": "Ngoa-Ek\xE9l\xE9", "melene": "Melen", "foulane": "Efoulan", "sam": "Nsam", "ala": "Ahala", "obogo": "Obobogo", "van": "Mvan", "oja": "Odza", "epundum": "Ekoumdoum", "awai": "Awae", "biemassi": "Biyem-Assi", "etugbebie": "Etoug-Ebe", "vogbetsi": "Mvog-Betsi", "kolbikok": "Nkolbikok", "etekak": "Etetak", "oyoma bank": "Oyom-Abang", "kolbisson": "Nkolbisson", "kemeyos": "Minkoameyos", "myom": "Nyom", "kolondom": "Nkolondom", "akassi": "Acacias", "simeo": "Nsimeyong", "comkana": "Nkomkana", "etoile meki": "Etoa-Meki", "ekie": "Ekie", "kouabang": "Nkoabang", "konfolo": "Nkolfoulou", "bancomo": "Mbankomo", "dragage": "Dragages", "mont febe": "Mont F\xE9b\xE9", "tangolo": "Tongolo", "vokatanga nambala": "Mvog Atangana Mballa", "carrefour aala": "Carrefour Ahala", "carrefour kouabang": "Carrefour Nkoabang", "carrefour vogbe": "Carrefour Mvog-Mbi", "carrefour smart": "Carrefour Nsam", "carrefour etoubebe": "Carrefour Etoug-Ebe", "carrefour mindong": "Carrefour Mendong", "carrefour messa": "Carrefour Messassi", "carrefour imana": "Carrefour Emana", "carrefour olombe": "Carrefour Olembe"};

const doualaNormalized = Object.fromEntries(
  Object.keys(doualaDeliveryFees).map(name => [normalizeAreaName(name), name])
);
const yaoundeNormalized = Object.fromEntries(
  Object.keys(yaoundeDeliveryFees).map(name => [normalizeAreaName(name), name])
);

function resolveArea(city, value){
  const n = normalizeAreaName(value);
  if(!n) return null;

  let normalizedMap = null;
  let aliases = null;
  if(city === 'Douala'){
    normalizedMap = doualaNormalized;
    aliases = doualaAliases;
  } else if(city === 'Yaound\xE9'){
    normalizedMap = yaoundeNormalized;
    aliases = yaoundeAliases;
  } else {
    return null;
  }

  if(normalizedMap[n]) return normalizedMap[n];
  if(aliases[n]) return aliases[n];

  const starts = Object.keys(normalizedMap).filter(k => k.startsWith(n) || n.startsWith(k));
  if(starts.length === 1) return normalizedMap[starts[0]];

  return null;
}

function getDeliveryFee(city, areaValue){
  const areaName = resolveArea(city, areaValue);
  if(city === 'Douala' && areaName) return doualaDeliveryFees[areaName];
  if(city === 'Yaound\xE9' && areaName) return yaoundeDeliveryFees[areaName];
  return 0;
}

const money=n=>new Intl.NumberFormat('fr-FR').format(n)+' FCFA';






// ===== Popup obligatoire avant WhatsApp =====
const requiredPopup=document.getElementById('required-popup');
const requiredPopupClose=document.getElementById('required-popup-close');
const requiredPopupAction=document.getElementById('required-popup-action');
const requiredPopupMessage=document.getElementById('required-popup-message');
let requiredPopupTarget=null;

function openRequiredPopup(message,target){
  requiredPopupTarget=target||null;
  if(requiredPopupMessage) requiredPopupMessage.textContent=message;
  if(requiredPopup){
    requiredPopup.classList.add('open');
    requiredPopup.setAttribute('aria-hidden','false');
  }
}
function closeRequiredPopup(){
  if(requiredPopup){
    requiredPopup.classList.remove('open');
    requiredPopup.setAttribute('aria-hidden','true');
  }
}
if(requiredPopupClose) requiredPopupClose.addEventListener('click',closeRequiredPopup);
if(requiredPopup) requiredPopup.addEventListener('click',e=>{if(e.target===requiredPopup) closeRequiredPopup();});
if(requiredPopupAction) requiredPopupAction.addEventListener('click',()=>{
  closeRequiredPopup();
  if(requiredPopupTarget){
    requestAnimationFrame(()=>{
      requiredPopupTarget.scrollIntoView({behavior:'smooth',block:'center'});
      setTimeout(()=>{try{requiredPopupTarget.focus({preventScroll:true});}catch(e){requiredPopupTarget.focus();}},350);
    });
  }
});

function setRequiredError(field,message){
  if(!field) return;
  field.classList.add('order-required-invalid');
  const parent=field.closest('.field')||field.parentElement;
  if(parent && !parent.querySelector('.order-required-hint')){
    const hint=document.createElement('div');
    hint.className='order-required-hint';
    hint.textContent=message;
    parent.appendChild(hint);
  }
}
function clearRequiredError(field){
  if(!field) return;
  field.classList.remove('order-required-invalid');
  const parent=field.closest('.field')||field.parentElement;
  const hint=parent && parent.querySelector('.order-required-hint');
  if(hint) hint.remove();
}

function setupPage(page){
 const i=Number(page.id.replace('product-','')); const p=products[i];
 const qty=page.querySelector('.qtyInput'), qText=page.querySelector('.qText'),
       sub=page.querySelector('.subTotal'), del=page.querySelector('.delivery'),
       total=page.querySelector('.total');
 const city=page.querySelector('.city'), area=page.querySelector('.area');
 const areaLabel=page.querySelector('.area-label');
 const suggestions=page.querySelector('.area-suggestions');
 const shippingDisplay=page.querySelector('.shipping-display');
 const shippingValue=page.querySelector('.shipping-value');
 const address=page.querySelector('.address');
 const addressLabel=page.querySelector('.address-label');
 const minus=page.querySelector('.minus'), plus=page.querySelector('.plus');
 const name=page.querySelector('.custName'), phone=page.querySelector('.custPhone'),
       order=page.querySelector('.orderWa');
 const productColor=page.querySelector('.productColor');

 function isLocalCity(){
   return city.value==='Douala' || city.value==='Yaound\xE9';
 }

 function isShippingCity(){
   return Object.prototype.hasOwnProperty.call(shippingFees, city.value);
 }

 function isOtherCity(){
   return city.value==='Autre ville';
 }

 function currentDelivery(){
   if(isLocalCity()) return getDeliveryFee(city.value, area.value);
   if(isShippingCity()) return shippingFees[city.value];
   return 0;
 }

 function setAddressMode(){
   // Par d\xE9faut, tant qu'aucune ville n'est choisie, on garde le mode livraison locale.
   // Le mode "agence/compagnie" s'active seulement pour une ville d'exp\xE9dition
   // ou pour "Autre ville".
   if(isShippingCity() || isOtherCity()){
     if(addressLabel) addressLabel.textContent='Agence ou compagnie de transport souhait\xE9e';
     if(address){
       address.placeholder='Ex: G\xE9n\xE9ral, Touristique, Overline, chauffeurs clando\u2026';
     }
   } else {
     if(addressLabel) addressLabel.textContent='Adresse ou rep\xE8re de livraison';
     if(address){
       address.placeholder='Ex : immeuble, rue, carrefour, lieu connu...';
     }
   }
 }

 function updateShippingUI(){
   if(isLocalCity()){
     area.hidden=false;
     if(areaLabel) areaLabel.textContent='Quartier';
     area.placeholder='Quartier';
     shippingDisplay.hidden=true;
   } else if(isShippingCity()){
     area.hidden=true;
     hideSuggestions();
     shippingDisplay.hidden=false;
     shippingValue.textContent=money(shippingFees[city.value]);
   } else if(isOtherCity()){
     // Pour "Autre ville", le m\xEAme champ devient une saisie manuelle de ville.
     area.hidden=false;
     hideSuggestions();
     if(areaLabel) areaLabel.textContent='Ville';
     area.placeholder='Saisissez votre ville';
     shippingDisplay.hidden=true;
   } else {
     area.hidden=false;
     if(areaLabel) areaLabel.textContent='Quartier';
     area.placeholder='Quartier';
     shippingDisplay.hidden=true;
   }
   setAddressMode();
 }

 function update(){
   let q=parseInt(qty.value,10);
   if(!Number.isFinite(q)||q`],colors:["Noir","Dor\xE9","Argent\xE9"],images:["img/products/rgb1-1.webp","img/products/rgb1-2.webp","img/products/rgb1-3.webp","img/products/rgb1-4.webp","img/products/rgb1-5.webp","img/products/rgb1-6.webp"]}];var sr={Akwa:1e3,"Ange Rapha\xEBl":1e3,"A\xE9roport / Texaco A\xE9roport":1e3,Bali:1500,Bassa:1500,Beedi:1e3,B\u00E9panda:1e3,Bilongu\u00E9:1e3,"Bois des Singes":1500,Bonab\u00E9ri:1500,Bonanjo:1500,Bonangang:1e3,Bonangando:1e3,Bonapriso:1500,Bonassama:1500,Bonamoussadi:1e3,Brazzaville:1e3,"Cit\xE9 des Palmiers":1e3,"Cit\xE9 SIC":1e3,De\u00EFdo:1e3,Dibom:1500,Japoma:1500,Kotto:1e3,Lendi:1500,Logbaba:1e3,Logbessou:1e3,Logpom:1e3,Madagascar:1e3,Mak\u00E9p\u00E9:1e3,Mambanda:1500,Ndogbati:1e3,Ndogbong:1e3,Ndoghem:1e3,Ndogpassi:1e3,Ndogsimbi:1e3,Ndobo:1500,Ndokoti:1e3,"New-Bell":1e3,Nyalla:1e3,Nylon:1e3,Oyack:1e3,Sodiko:1e3,Yassa:1500,"PK 8":1e3,"PK 9":1e3,"PK 10":1e3,"PK 11":1e3,"PK 12":1e3,"PK 13":1e3,"PK 14":1e3,"PK 15":1500,"PK 16":1500,"PK 17":1500,"PK 18":1500,"PK 19":1500},oh={aeroport:"A\xE9roport / Texaco A\xE9roport","texaco aeroport":"A\xE9roport / Texaco A\xE9roport",texaco:"A\xE9roport / Texaco A\xE9roport",deido:"De\xEFdo",bepanda:"B\xE9panda",bonaberi:"Bonab\xE9ri",makepe:"Mak\xE9p\xE9",bilongue:"Bilongu\xE9","cite sic":"Cit\xE9 SIC","cite des palmiers":"Cit\xE9 des Palmiers","bois de singe":"Bois des Singes","bois des singes":"Bois des Singes","ange raphael":"Ange Rapha\xEBl","new bell":"New-Bell","ndog bongo":"Ndogbong"},Fi={Bafoussam:2e3,Garoua:4e3,Maroua:4e3,Guider:4e3,Bertoua:3e3,Buea:2e3,Limb\u00E9:2e3,Kumba:2e3,Kribi:2e3,Ebolowa:2e3,Batouri:3e3,Foumban:2e3,Dschang:2e3,Nkongsamba:2e3,Ed\u00E9a:2e3,"Garoua-Boula\xEF":3e3};function Cs(r){return String(r||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[-_/]+/g," ").replace(/\s+/g," ").trim()}var ar={Bastos:1e3,Cradat:1e3,Nlongkak:1e3,"Mvog-Ada":1e3,Essos:1e3,"Mvog-Mbi":1e3,Mimboman:1e3,Ekounou:1e3,Kondengui:1e3,Nkolndongo:1e3,Anguissa:1e3,Omnisports:1e3,Ngousso:1e3,Etoudi:1e3,Emana:1e3,Messassi:1e3,Olembe:1500,"Mballa II":1500,Manguier:1e3,"Elig-Essono":1e3,"Elig-Edzoa":1500,Tsinga:1500,Mokolo:1e3,Madagascar:1e3,Messa:1e3,Briqueterie:1e3,"Cit\xE9 Verte":1e3,Obili:1e3,"Ngoa-Ek\xE9l\xE9":1e3,Melen:1e3,Efoulan:1e3,Nsam:1500,Olezoa:1e3,Dakar:1e3,Ahala:1500,Obobogo:1e3,Mvan:1e3,Odza:1500,Messamendongo:1e3,Ekoumdoum:1e3,Awae:1500,Nkomo:1e3,Biteng:1e3,"Biyem-Assi":1e3,Mendong:1e3,"Etoug-Ebe":1e3,"Mvog-Betsi":1e3,Simbock:1e3,Nkolbikok:1e3,Etetak:1500,"Oyom-Abang":1500,Nkolbisson:1e3,Minkoameyos:1500,Nyom:1e3,Nkolondom:1e3,Nkolfoulou:1500,Acacias:1e3,Jouvence:1e3,Nsimeyong:1e3,Damas:1e3,Nkomkana:1e3,"Santa Barbara":1e3,"Mont\xE9e Jouvence":1e3,"Carrefour R\xE9gie":1e3,"Etoa-Meki":1e3,Ekie:1e3,Nkoabang:1e3,Soa:1500,Mbankomo:2e3,Febe:1e3,Dragages:1e3,Golf:1e3,"Mont F\xE9b\xE9":1e3,"Carrefour MEEC":1e3,"Tradex \xC9leveur":1e3,\u00C9leveur:1e3,Tongolo:1e3,"Mvog Atangana Mballa":1e3,"Carrefour Ahala":1500,"Carrefour Tropicana":1e3,"Carrefour Nkoabang":1e3,"Carrefour Mvog-Mbi":1e3,"Carrefour Nsam":1500,"Carrefour Obili":1e3,"Carrefour Etoug-Ebe":1e3,"Carrefour Mendong":1e3,"Carrefour Messassi":1e3,"Carrefour Emana":1e3,"Carrefour Olembe":1e3},lh={"vog ada":"Mvog-Ada","vog mbi":"Mvog-Mbi","mimbo man":"Mimboman",ekunu:"Ekounou",kodengui:"Kondengui",kondongo:"Nkolndongo",gouso:"Ngousso",etudi:"Etoudi","mala 2":"Mballa II",manguie:"Manguier","elike sono":"Elig-Essono","elik edjoa":"Elig-Edzoa",tinga:"Tsinga",biketeri:"Briqueterie",ngwaikele:"Ngoa-Ek\xE9l\xE9",melene:"Melen",foulane:"Efoulan",sam:"Nsam",ala:"Ahala",obogo:"Obobogo",van:"Mvan",oja:"Odza",epundum:"Ekoumdoum",awai:"Awae",biemassi:"Biyem-Assi",etugbebie:"Etoug-Ebe",vogbetsi:"Mvog-Betsi",kolbikok:"Nkolbikok",etekak:"Etetak","oyoma bank":"Oyom-Abang",kolbisson:"Nkolbisson",kemeyos:"Minkoameyos",myom:"Nyom",kolondom:"Nkolondom",akassi:"Acacias",simeo:"Nsimeyong",comkana:"Nkomkana","etoile meki":"Etoa-Meki",ekie:"Ekie",kouabang:"Nkoabang",konfolo:"Nkolfoulou",bancomo:"Mbankomo",dragage:"Dragages","mont febe":"Mont F\xE9b\xE9",tangolo:"Tongolo","vokatanga nambala":"Mvog Atangana Mballa","carrefour aala":"Carrefour Ahala","carrefour kouabang":"Carrefour Nkoabang","carrefour vogbe":"Carrefour Mvog-Mbi","carrefour smart":"Carrefour Nsam","carrefour etoubebe":"Carrefour Etoug-Ebe","carrefour mindong":"Carrefour Mendong","carrefour messa":"Carrefour Messassi","carrefour imana":"Carrefour Emana","carrefour olombe":"Carrefour Olembe"},ch=Object.fromEntries(Object.keys(sr).map(r=>[Cs(r),r])),hh=Object.fromEntries(Object.keys(ar).map(r=>[Cs(r),r]));function Cn(r,e){let t=Cs(e);if(!t)return null;let i=null,n=null;if(r==="Douala")i=ch,n=oh;else if(r==="Yaound\xE9")i=hh,n=lh;else return null;if(i[t])return i[t];if(n[t])return n[t];let s=Object.keys(i).filter(a=>a.startsWith(t)||t.startsWith(a));return s.length===1?i[s[0]]:null}function Vo(r,e){let t=Cn(r,e);return r==="Douala"&&t?sr[t]:r==="Yaound\xE9"&&t?ar[t]:0}var Od="237689748143",Bd="+237652212999",st=r=>new Intl.NumberFormat("fr-FR").format(r)+" FCFA",_e=(r,e=document)=>e.querySelector(r),dt=(r,e=document)=>[...e.querySelectorAll(r)],at=r=>String(r).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Vc=r=>Math.round((1-r.price/r.oldPrice)*100),Fd=r=>{let e=r.name.replace(/^Lunettes /,"");return e[0].toUpperCase()+e.slice(1)},Hc=r=>r.rating?`\u2605 ${r.rating} \xB7 ${r.reviews}`:"",Mo=_e("#menu-btn"),bo=_e("#gnav-links");Mo.addEventListener("click",()=>{let r=bo.classList.toggle("open");Mo.setAttribute("aria-expanded",r)});bo.addEventListener("click",r=>{r.target.closest("a")&&(bo.classList.remove("open"),Mo.setAttribute("aria-expanded","false"))});var Gc=_e("#grid");Gc.innerHTML=As.map(r=>`
  <article class="card" data-categories="${at(r.categories.join(" "))}">
    <a class="card-media" href="#produit-${r.ref}"><img src="${r.images[0]}" alt="${at(r.name)}" loading="lazy"></a>
    <p class="launch">${r.categories.includes("Premium")?"Premium":`Promo \u2212${Vc(r)} %`}</p>
    <h3>${at(Fd(r))}</h3>
    <p class="rating">${at(Hc(r))}</p>
    <p class="price">${st(r.price)}<s>${st(r.oldPrice)}</s></p>
    <div class="card-actions">
      <a class="pill pill-blue" href="#produit-${r.ref}">Acheter</a>
      <a class="text-link" href="#produit-${r.ref}">En savoir plus \u203A</a>
    </div>
  </article>`).join("");function Wc(r){dt(".filters .pill").forEach(e=>{let t=e.dataset.filter===r;e.classList.toggle("active",t),e.setAttribute("aria-selected",t)}),dt(".card",Gc).forEach(e=>{e.hidden=r!=="Tous"&&!e.dataset.categories.split(" ").includes(r)})}dt(".filters .pill").forEach(r=>r.addEventListener("click",()=>Wc(r.dataset.filter)));dt("a[data-filter]").forEach(r=>r.addEventListener("click",()=>Wc(r.dataset.filter)));var xs=_e("#highlights"),$n=dt(".hl-card",xs),qc=_e("#hl-dots");qc.innerHTML=$n.map(()=>"<i></i>").join("");var So=()=>Math.round(xs.scrollLeft/($n[0].offsetWidth+20)),Xc=()=>dt("i",qc).forEach((r,e)=>r.classList.toggle("on",e===Math.min(So(),$n.length-1))),jc=r=>xs.scrollTo({left:Math.max(0,Math.min(r,$n.length-1))*($n[0].offsetWidth+20),behavior:"smooth"});xs.addEventListener("scroll",Xc,{passive:!0});_e("#hl-prev").addEventListener("click",()=>jc(So()-1));_e("#hl-next").addEventListener("click",()=>jc(So()+1));Xc();var zc=_e("#photochromique"),zd=dt(".story-steps .step"),kd=_e("#uv-fill"),ys=null;function Vd(){let r=zc.getBoundingClientRect(),e=zc.offsetHeight-window.innerHeight;return Math.max(0,Math.min(1,-r.top/e))}function Eo(){let r=Vd(),e=Math.max(0,Math.min(1,(r-.2)/.45)),t=r<.33?0:r<.72?1:2;zd.forEach((i,n)=>i.classList.toggle("active",n===t)),kd.style.width=e*100+"%",ys&&(ys.setTint(e),ys.setRotation(-.6+r*.6,.12-r*.1))}window.addEventListener("scroll",Eo,{passive:!0});Eo();Promise.resolve().then(()=>(Fc(),Bc)).then(({createGlasses:r,webglAvailable:e})=>{if(!e())throw new Error("webgl");let t=r(_e("#hero-canvas"),{rotationY:-.6,rotationX:.14});dt(".light-toggle button").forEach(i=>i.addEventListener("click",()=>{dt(".light-toggle button").forEach(n=>{n.classList.toggle("active",n===i),n.setAttribute("aria-pressed",n===i)}),t.setTint(Number(i.dataset.tint))})),ys=r(_e("#story-canvas"),{autoRotate:!1,interactive:!1,tintSpeed:5,rotationY:-.6}),Eo()}).catch(()=>{_e("#hero-canvas").hidden=!0,_e(".hero-fallback").hidden=!1,_e(".light-toggle").hidden=!0,_e(".drag-hint").hidden=!0,_e("#story-canvas").hidden=!0,_e(".story-fallback").hidden=!1});var xo=_e("#toast"),kc;function Hd(r){xo.textContent=r,xo.hidden=!1,clearTimeout(kc),kc=setTimeout(()=>{xo.hidden=!0},4200)}var Di=_e("#sheet"),En=_e("#sheet-body"),Gd=["Douala","Yaound\xE9",...Object.keys(Fi),"Autre ville"],Wd=r=>Object.keys(r==="Douala"?sr:ar).sort((e,t)=>e.localeCompare(t,"fr"));function qd(r){let e=As.find(i=>i.ref.toLowerCase()===String(r).toLowerCase());if(!e)return;En.innerHTML=`
    <div class="gallery">
      <div class="gallery-main"><img id="g-main" src="${e.images[0]}" alt="${at(e.name)}"></div>
      <div class="thumbs">${e.images.map((i,n)=>`<button class="${n?"":"on"}" data-src="${i}" aria-label="Photo ${n+1}"><img src="${i}" alt="" loading="lazy"></button>`).join("")}</div>
    </div>
    <div class="info">
      <p class="launch">${e.categories.includes("Premium")?"S\xE9lection Premium":`Promo \u2212${Vc(e)} %`} \xB7 R\xE9f. ${at(e.ref)}</p>
      <h2 id="sheet-title">${at(e.name)}</h2>
      <p class="rating">${at(Hc(e))}</p>
      <p class="price">${st(e.price)}<s>${st(e.oldPrice)}</s></p>
      <p class="short">${at(e.short)}</p>
      <details>
        <summary>Description et caract\xE9ristiques</summary>
        <p>${at(e.long)}</p>
        <ul class="specs">${e.specs.map(i=>`<li>${at(i)}</li>`).join("")}</ul>
      </details>

      <form class="order" novalidate>
        <h3>Commander</h3>
        ${e.colors.length?`
        <div class="field" data-f="color">
          <label>Couleur <em>*</em></label>
          <div class="swatches">${e.colors.map(i=>`<button type="button" class="pill pill-outline" data-color="${at(i)}">${at(i)}</button>`).join("")}</div>
        </div>`:""}
        <div class="field">
          <label for="f-qty">Quantit\xE9</label>
          <div class="qty"><button type="button" data-q="-1" aria-label="Moins">\u2212</button><input id="f-qty" type="number" min="1" value="1" inputmode="numeric"><button type="button" data-q="1" aria-label="Plus">+</button></div>
        </div>
        <div class="row2">
          <div class="field" data-f="name"><label for="f-name">Nom <em>*</em></label><input id="f-name" autocomplete="name"></div>
          <div class="field" data-f="phone"><label for="f-phone">T\xE9l\xE9phone <em>*</em></label><input id="f-phone" type="tel" autocomplete="tel" inputmode="tel"></div>
        </div>
        <div class="field" data-f="city">
          <label for="f-city">Ville <em>*</em></label>
          <select id="f-city"><option value="">S\xE9lectionnez votre ville</option>${Gd.map(i=>`<option>${i}</option>`).join("")}</select>
        </div>
        <div class="field" data-f="area">
          <label for="f-area" id="l-area">Quartier <em>*</em></label>
          <input id="f-area" list="dl-area" autocomplete="off" placeholder="Commencez \xE0 taper votre quartier">
          <datalist id="dl-area"></datalist>
        </div>
        <div class="field">
          <label for="f-addr" id="l-addr">Adresse ou rep\xE8re de livraison</label>
          <input id="f-addr" placeholder="Ex : immeuble, rue, carrefour, lieu connu\u2026">
        </div>
        <div class="summary">
          <div><span>${at(e.ref)} \xD7 <b id="s-q">1</b></span><span id="s-sub">${st(e.price)}</span></div>
          <div><span id="s-dl-label">Livraison</span><span id="s-dl">\u2014</span></div>
          <div class="total"><span>Total</span><span id="s-total">${st(e.price)}</span></div>
        </div>
        <button type="submit" class="pill pill-blue btn-block">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z" fill="currentColor"/></svg>
          Commander sur WhatsApp
        </button>
        <a class="pill pill-outline btn-block btn-call" href="tel:${Bd}">Commander par appel</a>
        <p class="note">Livraison \xE0 Douala et Yaound\xE9 avec paiement \xE0 la livraison. Pour les autres villes, exp\xE9dition par l\u2019agence de votre choix.</p>
      </form>
    </div>`;let t=_e("#g-main",En);dt(".thumbs button",En).forEach(i=>i.addEventListener("click",()=>{t.src=i.dataset.src,dt(".thumbs button",En).forEach(n=>n.classList.toggle("on",n===i))})),Xd(e),Di.open||Di.showModal(),En.scrollTop=0}function Xd(r){let e=_e("form.order",En),t=_e("#f-qty",e),i=_e("#f-name",e),n=_e("#f-phone",e),s=_e("#f-city",e),a=_e("#f-area",e),o=_e("#f-addr",e),c=_e("#dl-area",e),l="",h=()=>s.value==="Douala"||s.value==="Yaound\xE9",d=()=>Object.prototype.hasOwnProperty.call(Fi,s.value),u=()=>s.value==="Autre ville",p=()=>h()?Vo(s.value,a.value):d()?Fi[s.value]:0;dt("[data-color]",e).forEach(v=>v.addEventListener("click",()=>{l=v.dataset.color,dt("[data-color]",e).forEach(g=>g.classList.toggle("active",g===v)),y("color")})),dt("[data-q]",e).forEach(v=>v.addEventListener("click",()=>{t.value=Math.max(1,(parseInt(t.value,10)||1)+Number(v.dataset.q)),_()}));function f(){let v=_e("[data-f=area]",e);v.hidden=d(),h()?(_e("#l-area",e).innerHTML="Quartier <em>*</em>",a.placeholder="Commencez \xE0 taper votre quartier",c.innerHTML=Wd(s.value).map(M=>`<option value="${at(M)}">`).join("")):(c.innerHTML="",u()&&(_e("#l-area",e).innerHTML="Votre ville <em>*</em>",a.placeholder="Saisissez votre ville"));let g=d()||u();_e("#l-addr",e).textContent=g?"Agence ou compagnie de transport souhait\xE9e":"Adresse ou rep\xE8re de livraison",o.placeholder=g?"Ex : G\xE9n\xE9ral, Touristique, Overline\u2026":"Ex : immeuble, rue, carrefour, lieu connu\u2026",a.value="",_()}function _(){let v=Math.max(1,parseInt(t.value,10)||1),g=r.price*v;_e("#s-q",e).textContent=v,_e("#s-sub",e).textContent=st(g),_e("#s-dl-label",e).textContent=d()||u()?"Exp\xE9dition":"Livraison",!s.value||h()&&!Cn(s.value,a.value)?(_e("#s-dl",e).textContent="\u2014",_e("#s-total",e).textContent=st(g)):u()?(_e("#s-dl",e).textContent="\xC0 confirmer",_e("#s-total",e).textContent="\xC0 confirmer"):(_e("#s-dl",e).textContent=st(p()),_e("#s-total",e).textContent=st(g+p()))}function m(v,g){let M=_e(`[data-f=${v}]`,e);return M.classList.add("err"),_e(".msg",M)||M.insertAdjacentHTML("beforeend",`<span class="msg">${at(g)}</span>`),M}function y(v){let g=_e(`[data-f=${v}]`,e);g&&(g.classList.remove("err"),_e(".msg",g)?.remove())}s.addEventListener("change",()=>{y("city"),y("area"),f()}),t.addEventListener("input",_),a.addEventListener("input",()=>{y("area"),_()}),i.addEventListener("input",()=>y("name")),n.addEventListener("input",()=>y("phone")),e.addEventListener("submit",v=>{v.preventDefault(),["color","name","phone","city","area"].forEach(y);let g=[];if(r.colors.length&&!l&&g.push(m("color","Choisissez une couleur.")),i.value.trim()||g.push(m("name","Votre nom est obligatoire.")),n.value.trim()||g.push(m("phone","Votre num\xE9ro est obligatoire.")),s.value?h()&&!a.value.trim()?g.push(m("area","Votre quartier est obligatoire.")):h()&&!Cn(s.value,a.value)?g.push(m("area",`Choisissez un quartier propos\xE9 pour ${s.value}.`)):u()&&!a.value.trim()&&g.push(m("area","Saisissez votre ville.")):g.push(m("city","Votre ville est obligatoire.")),g.length){g[0].scrollIntoView({behavior:"smooth",block:"center"}),Hd("Veuillez compl\xE9ter les champs obligatoires (*).");return}let M=Math.max(1,parseInt(t.value,10)||1),C=r.price*M,b,w,I,L;h()?(b=st(p()),w=st(C+p()),I=`Quartier : ${Cn(s.value,a.value)}`,L=`Adresse / rep\xE8re : ${o.value.trim()}`):d()?(b=st(Fi[s.value]),w=st(C+Fi[s.value]),I="Mode : Exp\xE9dition",L=`Agence de pr\xE9f\xE9rence : ${o.value.trim()}`):(b="\xC0 confirmer avec le service client",w="\xC0 confirmer",I=`Ville d\u2019exp\xE9dition : ${a.value.trim()}`,L=`Agence de pr\xE9f\xE9rence : ${o.value.trim()}`);let D=["Bonjour, je souhaite commander chez JUBRIKA.","",`Produit : ${r.name} (R\xE9f. ${r.ref})`,l?`Couleur : ${l}`:null,`Quantit\xE9 : ${M}`,`Prix unitaire : ${st(r.price)}`,`Sous-total : ${st(C)}`,`Livraison / Exp\xE9dition : ${b}`,`TOTAL : ${w}`,"",`Nom : ${i.value.trim()}`,`T\xE9l\xE9phone : ${n.value.trim()}`,`Ville : ${u()?a.value.trim():s.value}`,I,L].filter(j=>j!==null);window.open(`https://wa.me/${Od}?text=${encodeURIComponent(D.join(`
`))}`,"_blank","noopener")}),_()}function Yc(){Di.open&&Di.close()}Di.addEventListener("close",()=>{location.hash.startsWith("#produit-")&&history.replaceState(null,"",location.pathname+location.search)});_e("#sheet-close").addEventListener("click",Yc);Di.addEventListener("click",r=>{r.target===Di&&Yc()});function Zc(){let r=location.hash.match(/^#produit-([\w]+)$/i);r&&qd(r[1])}window.addEventListener("hashchange",Zc);Zc();})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
