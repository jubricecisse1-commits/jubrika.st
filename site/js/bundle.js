(()=>{var yh=Object.defineProperty;var Ps=(r,e)=>()=>(r&&(e=r(r=0)),e);var xh=(r,e)=>{for(var t in e)yh(r,t,{get:e[t],enumerable:!0})};function kn(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(nt[255&r]+nt[r>>8&255]+nt[r>>16&255]+nt[r>>24&255]+"-"+nt[255&e]+nt[e>>8&255]+"-"+nt[e>>16&15|64]+nt[e>>24&255]+"-"+nt[63&t|128]+nt[t>>8&255]+"-"+nt[t>>16&255]+nt[t>>24&255]+nt[255&n]+nt[n>>8&255]+nt[n>>16&255]+nt[n>>24&255]).toLowerCase()}function Ye(r,e,t){return Math.max(e,Math.min(t,r))}function Sa(r,e){return(r%e+e)%e}function zi(r,e,t){return(1-t)*r+t*e}function Ea(r){return(r&r-1)==0&&r!==0}function Xr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function li(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}function Uc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function jr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Uh(){let r=jr("canvas");return r.style.display="block",r}function ki(r){r in Ll||(Ll[r]=!0,console.warn(r))}function ui(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Hs(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}function Vs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Yr.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Ws(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){En.fromArray(r,s);let o=i.x*Math.abs(En.x)+i.y*Math.abs(En.y)+i.z*Math.abs(En.z),c=e.dot(En),l=t.dot(En),h=n.dot(En);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function Qs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}function jh(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,i[c]=24,i[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,i[c]=-l-1,i[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,i[c]=13,i[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,i[c]=24,i[256|c]=24):(n[c]=31744,n[256|c]=64512,i[c]=13,i[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function Rr(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,ni),r.getVertexPosition(c,ii),r.getVertexPosition(l,ri);let h=function(d,u,p,f,_,m,y,v){let g;if(g=u.side===st?f.intersectTriangle(y,m,_,!0,v):f.intersectTriangle(_,m,y,u.side===mn,v),g===null)return null;Ar.copy(v),Ar.applyMatrix4(d.matrixWorld);let M=p.ray.origin.distanceTo(Ar);return M<p.near||M>p.far?null:{distance:M,point:Ar.clone(),object:d}}(r,e,t,n,ni,ii,ri,wr);if(h){i&&(Sr.fromBufferAttribute(i,o),Er.fromBufferAttribute(i,c),Tr.fromBufferAttribute(i,l),h.uv=Ln.getInterpolation(wr,ni,ii,ri,Sr,Er,Tr,new ie)),s&&(Sr.fromBufferAttribute(s,o),Er.fromBufferAttribute(s,c),Tr.fromBufferAttribute(s,l),h.uv1=Ln.getInterpolation(wr,ni,ii,ri,Sr,Er,Tr,new ie),h.uv2=h.uv1),a&&(Wl.fromBufferAttribute(a,o),ql.fromBufferAttribute(a,c),Xl.fromBufferAttribute(a,l),h.normal=Ln.getInterpolation(wr,ni,ii,ri,Wl,ql,Xl,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new T,materialIndex:0};Ln.getNormal(ni,ii,ri,d.normal),h.face=d}return h}function _i(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ct(r){let e={};for(let t=0;t<r.length;t++){let n=_i(r[t]);for(let i in n)e[i]=n[i]}return e}function Oc(r){return r.getRenderTarget()===null?r.outputColorSpace:Be.workingColorSpace}function Bc(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function $h(r,e){let t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);let s=n.get(i);s&&(r.deleteBuffer(s.buffer),n.delete(i))},update:function(i,s){if(i.isGLBufferAttribute){let o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);let a=n.get(i);if(a===void 0)n.set(i,function(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=r.createBuffer(),p;if(r.bindBuffer(c,u),r.bufferData(c,l,h),o.onUploadCallback(),l instanceof Float32Array)p=r.FLOAT;else if(l instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=r.HALF_FLOAT}else p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else{if(!(l instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);p=r.UNSIGNED_BYTE}return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}(i,s));else if(a.version<i.version){if(a.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,c,l){let h=c.array,d=c._updateRange,u=c.updateRanges;if(r.bindBuffer(l,o),d.count===-1&&u.length===0&&r.bufferSubData(l,0,h),u.length!==0){for(let p=0,f=u.length;p<f;p++){let _=u[p];t?r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count):r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h.subarray(_.start,_.start+_.count))}c.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(l,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):r.bufferSubData(l,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),c.onUploadCallback()})(a.buffer,i,s),a.version=i.version}}}}function Qh(r,e,t,n,i,s,a){let o=new Se(0),c,l,h=s===!0?0:1,d=null,u=0,p=null;function f(_,m){_.getRGB(Pr,Oc(r)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(_,m=1){o.set(_),h=m,f(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(_){h=_,f(o,h)},render:function(_,m){let y=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?f(o,h):v&&v.isColor&&(f(v,1),y=!0);let g=r.xr.getEnvironmentBlendMode();g==="additive"?n.buffers.color.setClear(0,0,0,1,a):g==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===gs)?(l===void 0&&(l=new ye(new St(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:_i(Ut.backgroundCube.uniforms),vertexShader:Ut.backgroundCube.vertexShader,fragmentShader:Ut.backgroundCube.fragmentShader,side:st,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Be.getTransfer(v.colorSpace)!==ze,d===v&&u===v.version&&p===r.toneMapping||(l.material.needsUpdate=!0,d=v,u=v.version,p=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ye(new xi(2,2),new en({name:"BackgroundMaterial",uniforms:_i(Ut.background.uniforms),vertexShader:Ut.background.vertexShader,fragmentShader:Ut.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=Be.getTransfer(v.colorSpace)!==ze,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),d===v&&u===v.version&&p===r.toneMapping||(c.material.needsUpdate=!0,d=v,u=v.version,p=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}}}function eu(r,e,t,n){let i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=p(null),l=c,h=!1;function d(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function u(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function p(R){let b=[],w=[],I=[];for(let P=0;P<i;P++)b[P]=0,w[P]=0,I[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:w,attributeDivisors:I,object:R,attributes:{},index:null}}function f(){let R=l.newAttributes;for(let b=0,w=R.length;b<w;b++)R[b]=0}function _(R){m(R,0)}function m(R,b){let w=l.newAttributes,I=l.enabledAttributes,P=l.attributeDivisors;w[R]=1,I[R]===0&&(r.enableVertexAttribArray(R),I[R]=1),P[R]!==b&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,b),P[R]=b)}function y(){let R=l.newAttributes,b=l.enabledAttributes;for(let w=0,I=b.length;w<I;w++)b[w]!==R[w]&&(r.disableVertexAttribArray(w),b[w]=0)}function v(R,b,w,I,P,U,q){q===!0?r.vertexAttribIPointer(R,b,w,P,U):r.vertexAttribPointer(R,b,w,I,P,U)}function g(){M(),h=!0,l!==c&&(l=c,d(l.object))}function M(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:function(R,b,w,I,P){let U=!1;if(a){let q=function(C,k,H){let re=H.wireframe===!0,oe=o[C.id];oe===void 0&&(oe={},o[C.id]=oe);let W=oe[k.id];W===void 0&&(W={},oe[k.id]=W);let Y=W[re];return Y===void 0&&(Y=p(n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()),W[re]=Y),Y}(I,w,b);l!==q&&(l=q,d(l.object)),U=function(C,k,H,re){let oe=l.attributes,W=k.attributes,Y=0,$=H.getAttributes();for(let O in $)if($[O].location>=0){let Z=oe[O],ce=W[O];if(ce===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),Z===void 0||Z.attribute!==ce||ce&&Z.data!==ce.data)return!0;Y++}return l.attributesNum!==Y||l.index!==re}(R,I,w,P),U&&function(C,k,H,re){let oe={},W=k.attributes,Y=0,$=H.getAttributes();for(let O in $)if($[O].location>=0){let Z=W[O];Z===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(Z=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(Z=C.instanceColor));let ce={};ce.attribute=Z,Z&&Z.data&&(ce.data=Z.data),oe[O]=ce,Y++}l.attributes=oe,l.attributesNum=Y,l.index=re}(R,I,w,P)}else{let q=b.wireframe===!0;l.geometry===I.id&&l.program===w.id&&l.wireframe===q||(l.geometry=I.id,l.program=w.id,l.wireframe=q,U=!0)}P!==null&&t.update(P,r.ELEMENT_ARRAY_BUFFER),(U||h)&&(h=!1,function(q,C,k,H){if(n.isWebGL2===!1&&(q.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;f();let re=H.attributes,oe=k.getAttributes(),W=C.defaultAttributeValues;for(let Y in oe){let $=oe[Y];if($.location>=0){let O=re[Y];if(O===void 0&&(Y==="instanceMatrix"&&q.instanceMatrix&&(O=q.instanceMatrix),Y==="instanceColor"&&q.instanceColor&&(O=q.instanceColor)),O!==void 0){let Z=O.normalized,ce=O.itemSize,E=t.get(O);if(E===void 0)continue;let S=E.buffer,B=E.type,J=E.bytesPerElement,L=n.isWebGL2===!0&&(B===r.INT||B===r.UNSIGNED_INT||O.gpuType===wc);if(O.isInterleavedBufferAttribute){let j=O.data,N=j.stride,D=O.offset;if(j.isInstancedInterleavedBuffer){for(let F=0;F<$.locationSize;F++)m($.location+F,j.meshPerAttribute);q.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let F=0;F<$.locationSize;F++)_($.location+F);r.bindBuffer(r.ARRAY_BUFFER,S);for(let F=0;F<$.locationSize;F++)v($.location+F,ce/$.locationSize,B,Z,N*J,(D+ce/$.locationSize*F)*J,L)}else{if(O.isInstancedBufferAttribute){for(let j=0;j<$.locationSize;j++)m($.location+j,O.meshPerAttribute);q.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let j=0;j<$.locationSize;j++)_($.location+j);r.bindBuffer(r.ARRAY_BUFFER,S);for(let j=0;j<$.locationSize;j++)v($.location+j,ce/$.locationSize,B,Z,ce*J,ce/$.locationSize*j*J,L)}}else if(W!==void 0){let Z=W[Y];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv($.location,Z);break;case 3:r.vertexAttrib3fv($.location,Z);break;case 4:r.vertexAttrib4fv($.location,Z);break;default:r.vertexAttrib1fv($.location,Z)}}}}y()}(R,b,w,I),P!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))},reset:g,resetDefaultState:M,dispose:function(){g();for(let R in o){let b=o[R];for(let w in b){let I=b[w];for(let P in I)u(I[P].object),delete I[P];delete b[w]}delete o[R]}},releaseStatesOfGeometry:function(R){if(o[R.id]===void 0)return;let b=o[R.id];for(let w in b){let I=b[w];for(let P in I)u(I[P].object),delete I[P];delete b[w]}delete o[R.id]},releaseStatesOfProgram:function(R){for(let b in o){let w=o[b];if(w[R.id]===void 0)continue;let I=w[R.id];for(let P in I)u(I[P].object),delete I[P];delete w[R.id]}},initAttributes:f,enableAttribute:_,disableUnusedAttributes:y}}function tu(r,e,t,n){let i=n.isWebGL2,s;this.setMode=function(a){s=a},this.render=function(a,o){r.drawArrays(s,a,o),t.update(o,s,1)},this.renderInstances=function(a,o,c){if(c===0)return;let l,h;if(i)l=r,h="drawArraysInstanced";else if(l=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",l===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");l[h](s,a,o,c),t.update(o,s,c)},this.renderMultiDraw=function(a,o,c){if(c===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<c;h++)this.render(a[h],o[h]);else{l.multiDrawArraysWEBGL(s,a,0,o,0,c);let h=0;for(let d=0;d<c;d++)h+=o[d];t.update(h,s,1)}}}function nu(r,e,t){let n;function i(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=i(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=s||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),m=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,g=s||e.has("OES_texture_float");return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:_,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:g,floatVertexTextures:v&&g,maxSamples:s?r.getParameter(r.MAX_SAMPLES):0}}function iu(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Jt,o=new Re,c={value:null,needsUpdate:!1};function l(h,d,u,p){let f=h!==null?h.length:0,_=null;if(f!==0){if(_=c.value,p!==!0||_===null){let m=u+4*f,y=d.matrixWorldInverse;o.getNormalMatrix(y),(_===null||_.length<m)&&(_=new Float32Array(m));for(let v=0,g=u;v!==f;++v,g+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(_,g),_[g+3]=a.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,_}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||n!==0||i;return i=d,n=h.length,u},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=l(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,f=h.clipIntersection,_=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!_)s?l(null):function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}();else{let y=s?0:n,v=4*y,g=m.clippingState||null;c.value=g,g=l(p,d,v,u);for(let M=0;M!==v;++M)g[M]=t[M];m.clippingState=g,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}}}function ru(r){let e=new WeakMap;function t(i,s){return s===_a?i.mapping=pi:s===ya&&(i.mapping=mi),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===_a||s===ya){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new Ra(a.height/2);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}function Jl(r,e,t){let n=new Qt(r,e,t);return n.texture.mapping=gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Kl(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function $l(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Mo(){return`

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
	`}function su(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===_a||s===ya,o=s===pi||s===mi;if(a||o){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let c=e.get(i);return t===null&&(t=new Mi(r)),c=a?t.fromEquirectangular(i,c):t.fromCubemap(i,c),e.set(i,c),c.texture}if(e.has(i))return e.get(i).texture;{let c=i.image;if(a&&c&&c.height>0||o&&c&&function(l){let h=0,d=6;for(let u=0;u<d;u++)l[u]!==void 0&&h++;return h===d}(c)){t===null&&(t=new Mi(r));let l=a?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,l),i.addEventListener("dispose",n),l.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function au(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ou(r,e,t,n){let i={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let d in l.attributes)e.remove(l.attributes[d]);for(let d in l.morphAttributes){let u=l.morphAttributes[d];for(let p=0,f=u.length;p<f;p++)e.remove(u[p])}l.removeEventListener("dispose",a),delete i[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,d=c.attributes.position,u=0;if(h!==null){let _=h.array;u=h.version;for(let m=0,y=_.length;m<y;m+=3){let v=_[m+0],g=_[m+1],M=_[m+2];l.push(v,g,g,M,M,v)}}else{if(d===void 0)return;{let _=d.array;u=d.version;for(let m=0,y=_.length/3-1;m<y;m+=3){let v=m+0,g=m+1,M=m+2;l.push(v,g,g,M,M,v)}}}let p=new(Uc(l)?es:Qr)(l,1);p.version=u;let f=s.get(c);f&&e.remove(f),s.set(c,p)}return{get:function(c,l){return i[l.id]===!0||(l.addEventListener("dispose",a),i[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let d in l)e.update(l[d],r.ARRAY_BUFFER);let h=c.morphAttributes;for(let d in h){let u=h[d];for(let p=0,f=u.length;p<f;p++)e.update(u[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function lu(r,e,t,n){let i=n.isWebGL2,s,a,o;this.setMode=function(c){s=c},this.setIndex=function(c){a=c.type,o=c.bytesPerElement},this.render=function(c,l){r.drawElements(s,l,a,c*o),t.update(l,s,1)},this.renderInstances=function(c,l,h){if(h===0)return;let d,u;if(i)d=r,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");d[u](s,l,a,c*o,h),t.update(l,s,h)},this.renderMultiDraw=function(c,l,h){if(h===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<h;u++)this.render(c[u]/o,l[u]);else{d.multiDrawElementsWEBGL(s,l,0,a,c,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];t.update(u,s,1)}}}function cu(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function hu(r,e){return r[0]-e[0]}function uu(r,e){return Math.abs(e[1])-Math.abs(r[1])}function du(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new Fe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];return{update:function(c,l,h){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=u!==void 0?u.length:0,f=s.get(l);if(f===void 0||f.count!==p){let k=function(){q.dispose(),s.delete(l),l.removeEventListener("dispose",k)};f!==void 0&&f.texture.dispose();let y=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,M=l.morphAttributes.position||[],R=l.morphAttributes.normal||[],b=l.morphAttributes.color||[],w=0;y===!0&&(w=1),v===!0&&(w=2),g===!0&&(w=3);let I=l.attributes.position.count*w,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);let U=new Float32Array(I*P*4*p),q=new Jr(U,I,P,p);q.type=un,q.needsUpdate=!0;let C=4*w;for(let H=0;H<p;H++){let re=M[H],oe=R[H],W=b[H],Y=I*P*4*H;for(let $=0;$<re.count;$++){let O=$*C;y===!0&&(a.fromBufferAttribute(re,$),U[Y+O+0]=a.x,U[Y+O+1]=a.y,U[Y+O+2]=a.z,U[Y+O+3]=0),v===!0&&(a.fromBufferAttribute(oe,$),U[Y+O+4]=a.x,U[Y+O+5]=a.y,U[Y+O+6]=a.z,U[Y+O+7]=0),g===!0&&(a.fromBufferAttribute(W,$),U[Y+O+8]=a.x,U[Y+O+9]=a.y,U[Y+O+10]=a.z,U[Y+O+11]=W.itemSize===4?a.w:1)}}f={count:p,texture:q,size:new ie(I,P)},s.set(l,f),l.addEventListener("dispose",k)}let _=0;for(let y=0;y<d.length;y++)_+=d[y];let m=l.morphTargetsRelative?1:1-_;h.getUniforms().setValue(r,"morphTargetBaseInfluence",m),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{let u=d===void 0?0:d.length,p=n[l.id];if(p===void 0||p.length!==u){p=[];for(let v=0;v<u;v++)p[v]=[v,0];n[l.id]=p}for(let v=0;v<u;v++){let g=p[v];g[0]=v,g[1]=d[v]}p.sort(uu);for(let v=0;v<8;v++)v<u&&p[v][1]?(o[v][0]=p[v][0],o[v][1]=p[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(hu);let f=l.morphAttributes.position,_=l.morphAttributes.normal,m=0;for(let v=0;v<8;v++){let g=o[v],M=g[0],R=g[1];M!==Number.MAX_SAFE_INTEGER&&R?(f&&l.getAttribute("morphTarget"+v)!==f[M]&&l.setAttribute("morphTarget"+v,f[M]),_&&l.getAttribute("morphNormal"+v)!==_[M]&&l.setAttribute("morphNormal"+v,_[M]),i[v]=R,m+=R):(f&&l.hasAttribute("morphTarget"+v)===!0&&l.deleteAttribute("morphTarget"+v),_&&l.hasAttribute("morphNormal"+v)===!0&&l.deleteAttribute("morphNormal"+v),i[v]=0)}let y=l.morphTargetsRelative?1:1-m;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}}}function pu(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,c=a.geometry,l=e.get(a,c);if(i.get(l)!==o&&(e.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return l},dispose:function(){i=new WeakMap}}}function wi(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Ql[i];if(s===void 0&&(s=new Float32Array(i),Ql[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ze(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Je(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function _s(r,e){let t=ec[e];t===void 0&&(t=new Int32Array(e),ec[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function mu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function fu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ze(t,e))return;r.uniform2fv(this.addr,e),Je(t,e)}}function gu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ze(t,e))return;r.uniform3fv(this.addr,e),Je(t,e)}}function vu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ze(t,e))return;r.uniform4fv(this.addr,e),Je(t,e)}}function _u(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ze(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Je(t,e)}else{if(Ze(t,n))return;ic.set(n),r.uniformMatrix2fv(this.addr,!1,ic),Je(t,n)}}function yu(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ze(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Je(t,e)}else{if(Ze(t,n))return;nc.set(n),r.uniformMatrix3fv(this.addr,!1,nc),Je(t,n)}}function xu(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ze(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Je(t,e)}else{if(Ze(t,n))return;tc.set(n),r.uniformMatrix4fv(this.addr,!1,tc),Je(t,n)}}function Mu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function bu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ze(t,e))return;r.uniform2iv(this.addr,e),Je(t,e)}}function Su(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ze(t,e))return;r.uniform3iv(this.addr,e),Je(t,e)}}function Eu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ze(t,e))return;r.uniform4iv(this.addr,e),Je(t,e)}}function Tu(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function wu(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ze(t,e))return;r.uniform2uiv(this.addr,e),Je(t,e)}}function Au(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ze(t,e))return;r.uniform3uiv(this.addr,e),Je(t,e)}}function Ru(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ze(t,e))return;r.uniform4uiv(this.addr,e),Je(t,e)}}function Cu(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s=this.type===r.SAMPLER_2D_SHADOW?zc:Fc;t.setTexture2D(e||s,i)}function Pu(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hc,i)}function Lu(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vc,i)}function Iu(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||kc,i)}function Nu(r,e){r.uniform1fv(this.addr,e)}function Uu(r,e){let t=wi(e,this.size,2);r.uniform2fv(this.addr,t)}function Du(r,e){let t=wi(e,this.size,3);r.uniform3fv(this.addr,t)}function Ou(r,e){let t=wi(e,this.size,4);r.uniform4fv(this.addr,t)}function Bu(r,e){let t=wi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Fu(r,e){let t=wi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function zu(r,e){let t=wi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ku(r,e){r.uniform1iv(this.addr,e)}function Hu(r,e){r.uniform2iv(this.addr,e)}function Vu(r,e){r.uniform3iv(this.addr,e)}function Gu(r,e){r.uniform4iv(this.addr,e)}function Wu(r,e){r.uniform1uiv(this.addr,e)}function qu(r,e){r.uniform2uiv(this.addr,e)}function Xu(r,e){r.uniform3uiv(this.addr,e)}function ju(r,e){r.uniform4uiv(this.addr,e)}function Yu(r,e,t){let n=this.cache,i=e.length,s=_s(t,i);Ze(n,s)||(r.uniform1iv(this.addr,s),Je(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Fc,s[a])}function Zu(r,e,t){let n=this.cache,i=e.length,s=_s(t,i);Ze(n,s)||(r.uniform1iv(this.addr,s),Je(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Hc,s[a])}function Ju(r,e,t){let n=this.cache,i=e.length,s=_s(t,i);Ze(n,s)||(r.uniform1iv(this.addr,s),Je(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Vc,s[a])}function Ku(r,e,t){let n=this.cache,i=e.length,s=_s(t,i);Ze(n,s)||(r.uniform1iv(this.addr,s),Je(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||kc,s[a])}function rc(r,e){r.seq.push(e),r.map[e.id]=e}function $u(r,e,t){let n=r.name,i=n.length;for(oa.lastIndex=0;;){let s=oa.exec(n),a=oa.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===i){rc(t,l===void 0?new Ca(o,r,e):new Pa(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new La(o),rc(t,h)),t=h}}}function sc(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}function ac(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+function(o,c){let l=o.split(`
`),h=[],d=Math.max(c-6,0),u=Math.min(c+6,l.length);for(let p=d;p<u;p++){let f=p+1;h.push(`${f===c?">":" "} ${f}: ${l[p]}`)}return h.join(`
`)}(r.getShaderSource(e),a)}return i}function td(r,e){let t=function(n){let i=Be.getPrimaries(Be.workingColorSpace),s=Be.getPrimaries(n),a;switch(i===s?a="":i===Wr&&s===Gr?a="LinearDisplayP3ToLinearSRGB":i===Gr&&s===Wr&&(a="LinearSRGBToLinearDisplayP3"),n){case $t:case vs:return[a,"LinearTransferOETF"];case je:case xo:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[a,"LinearTransferOETF"]}}(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function nd(r,e){let t;switch(e){case Rh:t="Linear";break;case Ch:t="Reinhard";break;case Ph:t="OptimizedCineon";break;case _o:t="ACESFilmic";break;case Ih:t="AgX";break;case Lh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function oi(r){return r!==""}function oc(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Ia(r){return r.replace(id,sd)}function sd(r,e){let t=Ee[e];if(t===void 0){let n=rd.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Ia(t)}function cc(r){return r.replace(ad,od)}function od(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function hc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ld(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=function(C){let k="SHADOWMAP_TYPE_BASIC";return C.shadowMapType===Sc?k="SHADOWMAP_TYPE_PCF":C.shadowMapType===Th?k="SHADOWMAP_TYPE_PCF_SOFT":C.shadowMapType===Zt&&(k="SHADOWMAP_TYPE_VSM"),k}(t),l=function(C){let k="ENVMAP_TYPE_CUBE";if(C.envMap)switch(C.envMapMode){case pi:case mi:k="ENVMAP_TYPE_CUBE";break;case gs:k="ENVMAP_TYPE_CUBE_UV"}return k}(t),h=function(C){let k="ENVMAP_MODE_REFLECTION";return C.envMap&&C.envMapMode===mi&&(k="ENVMAP_MODE_REFRACTION"),k}(t),d=function(C){let k="ENVMAP_BLENDING_NONE";if(C.envMap)switch(C.combine){case Ec:k="ENVMAP_BLENDING_MULTIPLY";break;case wh:k="ENVMAP_BLENDING_MIX";break;case Ah:k="ENVMAP_BLENDING_ADD"}return k}(t),u=function(C){let k=C.envMapCubeUVHeight;if(k===null)return null;let H=Math.log2(k)-2,re=1/k;return{texelWidth:1/(3*Math.max(Math.pow(2,H),112)),texelHeight:re,maxMip:H}}(t),p=t.isWebGL2?"":function(C){return[C.extensionDerivatives||C.envMapCubeUVHeight||C.bumpMap||C.normalMapTangentSpace||C.clearcoatNormalMap||C.flatShading||C.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(C.extensionFragDepth||C.logarithmicDepthBuffer)&&C.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",C.extensionDrawBuffers&&C.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(C.extensionShaderTextureLOD||C.envMap||C.transmission)&&C.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(oi).join(`
`)}(t),f=function(C){return[C.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(oi).join(`
`)}(t),_=function(C){let k=[];for(let H in C){let re=C[H];re!==!1&&k.push("#define "+H+" "+re)}return k.join(`
`)}(s),m=i.createProgram(),y,v,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(oi).join(`
`),y.length>0&&(y+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(oi).join(`
`),v.length>0&&(v+=`
`)):(y=[hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oi).join(`
`),v=[p,hc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dn?"#define TONE_MAPPING":"",t.toneMapping!==dn?Ee.tonemapping_pars_fragment:"",t.toneMapping!==dn?nd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,td("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oi).join(`
`)),a=Ia(a),a=oc(a,t),a=lc(a,t),o=Ia(o),o=oc(o,t),o=lc(o,t),a=cc(a),o=cc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[f,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let M=g+y+a,R=g+v+o,b=sc(i,i.VERTEX_SHADER,M),w=sc(i,i.FRAGMENT_SHADER,R);function I(C){if(r.debug.checkShaderErrors){let k=i.getProgramInfoLog(m).trim(),H=i.getShaderInfoLog(b).trim(),re=i.getShaderInfoLog(w).trim(),oe=!0,W=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(oe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,b,w);else{let Y=ac(i,b,"vertex"),$=ac(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+k+`
`+Y+`
`+$)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):H!==""&&re!==""||(W=!1);W&&(C.diagnostics={runnable:oe,programLog:k,vertexShader:{log:H,prefix:y},fragmentShader:{log:re,prefix:v}})}i.deleteShader(b),i.deleteShader(w),P=new di(i,m),U=function(k,H){let re={},oe=k.getProgramParameter(H,k.ACTIVE_ATTRIBUTES);for(let W=0;W<oe;W++){let Y=k.getActiveAttrib(H,W),$=Y.name,O=1;Y.type===k.FLOAT_MAT2&&(O=2),Y.type===k.FLOAT_MAT3&&(O=3),Y.type===k.FLOAT_MAT4&&(O=4),re[$]={type:Y.type,location:k.getAttribLocation(H,$),locationSize:O}}return re}(i,m)}let P,U;i.attachShader(m,b),i.attachShader(m,w),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),this.getUniforms=function(){return P===void 0&&I(this),P},this.getAttributes=function(){return U===void 0&&I(this),U};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=i.getProgramParameter(m,Qu)),q},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ed++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=w,this}function hd(r,e,t,n,i,s,a){let o=new $r,c=new Na,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(m){return m===0?"uv":`uv${m}`}return{getParameters:function(m,y,v,g,M){let R=g.fog,b=M.geometry,w=m.isMeshStandardMaterial?g.environment:null,I=(m.isMeshStandardMaterial?t:e).get(m.envMap||w),P=I&&I.mapping===gs?I.image.height:null,U=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let q=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,C=q!==void 0?q.length:0,k,H,re,oe,W=0;if(b.morphAttributes.position!==void 0&&(W=1),b.morphAttributes.normal!==void 0&&(W=2),b.morphAttributes.color!==void 0&&(W=3),U){let et=Ut[U];k=et.vertexShader,H=et.fragmentShader}else k=m.vertexShader,H=m.fragmentShader,c.update(m),re=c.getVertexShaderID(m),oe=c.getFragmentShaderID(m);let Y=r.getRenderTarget(),$=M.isInstancedMesh===!0,O=M.isBatchedMesh===!0,Z=!!m.map,ce=!!m.matcap,E=!!I,S=!!m.aoMap,B=!!m.lightMap,J=!!m.bumpMap,L=!!m.normalMap,j=!!m.displacementMap,N=!!m.emissiveMap,D=!!m.metalnessMap,F=!!m.roughnessMap,te=m.anisotropy>0,Q=m.clearcoat>0,x=m.iridescence>0,ne=m.sheen>0,z=m.transmission>0,V=te&&!!m.anisotropyMap,se=Q&&!!m.clearcoatMap,he=Q&&!!m.clearcoatNormalMap,de=Q&&!!m.clearcoatRoughnessMap,pe=x&&!!m.iridescenceMap,Me=x&&!!m.iridescenceThicknessMap,me=ne&&!!m.sheenColorMap,fe=ne&&!!m.sheenRoughnessMap,Te=!!m.specularMap,Ke=!!m.specularColorMap,ve=!!m.specularIntensityMap,Ue=z&&!!m.transmissionMap,Pe=z&&!!m.thicknessMap,nr=!!m.gradientMap,Gn=!!m.alphaMap,ir=m.alphaTest>0,vt=!!m.alphaHash,pt=!!m.extensions,Wn=!!b.attributes.uv1,X=!!b.attributes.uv2,rr=!!b.attributes.uv3,Ci=dn;return m.toneMapped&&(Y!==null&&Y.isXRRenderTarget!==!0||(Ci=r.toneMapping)),{isWebGL2:h,shaderID:U,shaderType:m.type,shaderName:m.name,vertexShader:k,fragmentShader:H,defines:m.defines,customVertexShaderID:re,customFragmentShaderID:oe,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:O,instancing:$,instancingColor:$&&M.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Y===null?r.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:$t,map:Z,matcap:ce,envMap:E,envMapMode:E&&I.mapping,envMapCubeUVHeight:P,aoMap:S,lightMap:B,bumpMap:J,normalMap:L,displacementMap:u&&j,emissiveMap:N,normalMapObjectSpace:L&&m.normalMapType===1,normalMapTangentSpace:L&&m.normalMapType===0,metalnessMap:D,roughnessMap:F,anisotropy:te,anisotropyMap:V,clearcoat:Q,clearcoatMap:se,clearcoatNormalMap:he,clearcoatRoughnessMap:de,iridescence:x,iridescenceMap:pe,iridescenceThicknessMap:Me,sheen:ne,sheenColorMap:me,sheenRoughnessMap:fe,specularMap:Te,specularColorMap:Ke,specularIntensityMap:ve,transmission:z,transmissionMap:Ue,thicknessMap:Pe,gradientMap:nr,opaque:m.transparent===!1&&m.blending===1,alphaMap:Gn,alphaTest:ir,alphaHash:vt,combine:m.combine,mapUv:Z&&_(m.map.channel),aoMapUv:S&&_(m.aoMap.channel),lightMapUv:B&&_(m.lightMap.channel),bumpMapUv:J&&_(m.bumpMap.channel),normalMapUv:L&&_(m.normalMap.channel),displacementMapUv:j&&_(m.displacementMap.channel),emissiveMapUv:N&&_(m.emissiveMap.channel),metalnessMapUv:D&&_(m.metalnessMap.channel),roughnessMapUv:F&&_(m.roughnessMap.channel),anisotropyMapUv:V&&_(m.anisotropyMap.channel),clearcoatMapUv:se&&_(m.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&_(m.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(m.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&_(m.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(m.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(m.sheenRoughnessMap.channel),specularMapUv:Te&&_(m.specularMap.channel),specularColorMapUv:Ke&&_(m.specularColorMap.channel),specularIntensityMapUv:ve&&_(m.specularIntensityMap.channel),transmissionMapUv:Ue&&_(m.transmissionMap.channel),thicknessMapUv:Pe&&_(m.thicknessMap.channel),alphaMapUv:Gn&&_(m.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(L||te),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,vertexUv1s:Wn,vertexUv2s:X,vertexUv3s:rr,pointsUvs:M.isPoints===!0&&!!b.attributes.uv&&(Z||Gn),fog:!!R,useFog:m.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:M.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:W,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&v.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ci,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Z&&m.map.isVideoTexture===!0&&Be.getTransfer(m.map.colorSpace)===ze,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===st,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionDerivatives:pt&&m.extensions.derivatives===!0,extensionFragDepth:pt&&m.extensions.fragDepth===!0,extensionDrawBuffers:pt&&m.extensions.drawBuffers===!0,extensionShaderTextureLOD:pt&&m.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pt&&m.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()}},getProgramCacheKey:function(m){let y=[];if(m.shaderID?y.push(m.shaderID):(y.push(m.customVertexShaderID),y.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)y.push(v),y.push(m.defines[v]);return m.isRawShaderMaterial===!1&&(function(v,g){v.push(g.precision),v.push(g.outputColorSpace),v.push(g.envMapMode),v.push(g.envMapCubeUVHeight),v.push(g.mapUv),v.push(g.alphaMapUv),v.push(g.lightMapUv),v.push(g.aoMapUv),v.push(g.bumpMapUv),v.push(g.normalMapUv),v.push(g.displacementMapUv),v.push(g.emissiveMapUv),v.push(g.metalnessMapUv),v.push(g.roughnessMapUv),v.push(g.anisotropyMapUv),v.push(g.clearcoatMapUv),v.push(g.clearcoatNormalMapUv),v.push(g.clearcoatRoughnessMapUv),v.push(g.iridescenceMapUv),v.push(g.iridescenceThicknessMapUv),v.push(g.sheenColorMapUv),v.push(g.sheenRoughnessMapUv),v.push(g.specularMapUv),v.push(g.specularColorMapUv),v.push(g.specularIntensityMapUv),v.push(g.transmissionMapUv),v.push(g.thicknessMapUv),v.push(g.combine),v.push(g.fogExp2),v.push(g.sizeAttenuation),v.push(g.morphTargetsCount),v.push(g.morphAttributeCount),v.push(g.numDirLights),v.push(g.numPointLights),v.push(g.numSpotLights),v.push(g.numSpotLightMaps),v.push(g.numHemiLights),v.push(g.numRectAreaLights),v.push(g.numDirLightShadows),v.push(g.numPointLightShadows),v.push(g.numSpotLightShadows),v.push(g.numSpotLightShadowsWithMaps),v.push(g.numLightProbes),v.push(g.shadowMapType),v.push(g.toneMapping),v.push(g.numClippingPlanes),v.push(g.numClipIntersection),v.push(g.depthPacking)}(y,m),function(v,g){o.disableAll(),g.isWebGL2&&o.enable(0),g.supportsVertexTextures&&o.enable(1),g.instancing&&o.enable(2),g.instancingColor&&o.enable(3),g.matcap&&o.enable(4),g.envMap&&o.enable(5),g.normalMapObjectSpace&&o.enable(6),g.normalMapTangentSpace&&o.enable(7),g.clearcoat&&o.enable(8),g.iridescence&&o.enable(9),g.alphaTest&&o.enable(10),g.vertexColors&&o.enable(11),g.vertexAlphas&&o.enable(12),g.vertexUv1s&&o.enable(13),g.vertexUv2s&&o.enable(14),g.vertexUv3s&&o.enable(15),g.vertexTangents&&o.enable(16),g.anisotropy&&o.enable(17),g.alphaHash&&o.enable(18),g.batching&&o.enable(19),v.push(o.mask),o.disableAll(),g.fog&&o.enable(0),g.useFog&&o.enable(1),g.flatShading&&o.enable(2),g.logarithmicDepthBuffer&&o.enable(3),g.skinning&&o.enable(4),g.morphTargets&&o.enable(5),g.morphNormals&&o.enable(6),g.morphColors&&o.enable(7),g.premultipliedAlpha&&o.enable(8),g.shadowMapEnabled&&o.enable(9),g.useLegacyLights&&o.enable(10),g.doubleSided&&o.enable(11),g.flipSided&&o.enable(12),g.useDepthPacking&&o.enable(13),g.dithering&&o.enable(14),g.transmission&&o.enable(15),g.sheen&&o.enable(16),g.opaque&&o.enable(17),g.pointsUvs&&o.enable(18),g.decodeVideoTexture&&o.enable(19),v.push(o.mask)}(y,m),y.push(r.outputColorSpace)),y.push(m.customProgramCacheKey),y.join()},getUniforms:function(m){let y=f[m.type],v;if(y){let g=Ut[y];v=Zh.clone(g.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,y){let v;for(let g=0,M=l.length;g<M;g++){let R=l[g];if(R.cacheKey===y){v=R,++v.usedTimes;break}}return v===void 0&&(v=new ld(r,y,m,s),l.push(v)),v},releaseProgram:function(m){if(--m.usedTimes==0){let y=l.indexOf(m);l[y]=l[l.length-1],l.pop(),m.destroy()}},releaseShaderCache:function(m){c.remove(m)},programs:l,dispose:function(){c.dispose()}}}function ud(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function dd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function uc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function dc(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,c,l,h,d){let u=r[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:d},r[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=c,u.groupOrder=l,u.renderOrder=a.renderOrder,u.z=h,u.group=d),e++,u}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,c,l,h,d){let u=s(a,o,c,l,h,d);c.transmission>0?n.push(u):c.transparent===!0?i.push(u):t.push(u)},unshift:function(a,o,c,l,h,d){let u=s(a,o,c,l,h,d);c.transmission>0?n.unshift(u):c.transparent===!0?i.unshift(u):t.unshift(u)},finish:function(){for(let a=e,o=r.length;a<o;a++){let c=r[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||dd),n.length>1&&n.sort(o||uc),i.length>1&&i.sort(o||uc)}}}function pd(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new dc,r.set(e,[i])):t>=n.length?(i=new dc,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function md(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new Se};break;case"SpotLight":t={position:new T,direction:new T,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new T,halfWidth:new T,halfHeight:new T}}return r[e.id]=t,t}}}function gd(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function vd(r,e){let t=new md,n=function(){let c={};return{get:function(l){if(c[l.id]!==void 0)return c[l.id];let h;switch(l.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3}}return c[l.id]=h,h}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new T);let s=new T,a=new we,o=new we;return{setup:function(c,l){let h=0,d=0,u=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let p=0,f=0,_=0,m=0,y=0,v=0,g=0,M=0,R=0,b=0,w=0;c.sort(gd);let I=l===!0?Math.PI:1;for(let U=0,q=c.length;U<q;U++){let C=c[U],k=C.color,H=C.intensity,re=C.distance,oe=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=k.r*H*I,d+=k.g*H*I,u+=k.b*H*I;else if(C.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(C.sh.coefficients[W],H);w++}else if(C.isDirectionalLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity*I),C.castShadow){let Y=C.shadow,$=n.get(C);$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=oe,i.directionalShadowMatrix[p]=C.shadow.matrix,v++}i.directional[p]=W,p++}else if(C.isSpotLight){let W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(k).multiplyScalar(H*I),W.distance=re,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,i.spot[_]=W;let Y=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,Y.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[_]=Y.matrix,C.castShadow){let $=n.get(C);$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,i.spotShadow[_]=$,i.spotShadowMap[_]=oe,M++}_++}else if(C.isRectAreaLight){let W=t.get(C);W.color.copy(k).multiplyScalar(H),W.halfWidth.set(.5*C.width,0,0),W.halfHeight.set(0,.5*C.height,0),i.rectArea[m]=W,m++}else if(C.isPointLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity*I),W.distance=C.distance,W.decay=C.decay,C.castShadow){let Y=C.shadow,$=n.get(C);$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,$.shadowCameraNear=Y.camera.near,$.shadowCameraFar=Y.camera.far,i.pointShadow[f]=$,i.pointShadowMap[f]=oe,i.pointShadowMatrix[f]=C.shadow.matrix,g++}i.point[f]=W,f++}else if(C.isHemisphereLight){let W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(H*I),W.groundColor.copy(C.groundColor).multiplyScalar(H*I),i.hemi[y]=W,y++}}m>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let P=i.hash;P.directionalLength===p&&P.pointLength===f&&P.spotLength===_&&P.rectAreaLength===m&&P.hemiLength===y&&P.numDirectionalShadows===v&&P.numPointShadows===g&&P.numSpotShadows===M&&P.numSpotMaps===R&&P.numLightProbes===w||(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=f,i.hemi.length=y,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=M+R-b,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,P.directionalLength=p,P.pointLength=f,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=y,P.numDirectionalShadows=v,P.numPointShadows=g,P.numSpotShadows=M,P.numSpotMaps=R,P.numLightProbes=w,i.version=fd++)},setupView:function(c,l){let h=0,d=0,u=0,p=0,f=0,_=l.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let v=c[m];if(v.isDirectionalLight){let g=i.directional[h];g.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(_),h++}else if(v.isSpotLight){let g=i.spot[u];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(_),g.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(_),u++}else if(v.isRectAreaLight){let g=i.rectArea[p];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(_),o.identity(),a.copy(v.matrixWorld),a.premultiply(_),o.extractRotation(a),g.halfWidth.set(.5*v.width,0,0),g.halfHeight.set(0,.5*v.height,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let g=i.point[d];g.position.setFromMatrixPosition(v.matrixWorld),g.position.applyMatrix4(_),d++}else if(v.isHemisphereLight){let g=i.hemi[f];g.direction.setFromMatrixPosition(v.matrixWorld),g.direction.transformDirection(_),f++}}},state:i}}function pc(r,e){let t=new vd(r,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(s){t.setup(n,s)},setupLightsView:function(s){t.setupView(n,s)},pushLight:function(s){n.push(s)},pushShadow:function(s){i.push(s)}}}function _d(r,e){let t=new WeakMap;return{get:function(n,i=0){let s=t.get(n),a;return s===void 0?(a=new pc(r,e),t.set(n,[a])):i>=s.length?(a=new pc(r,e),s.push(a)):a=s[i],a},dispose:function(){t=new WeakMap}}}function yd(r,e,t){let n=new yi,i=new ie,s=new ie,a=new Fe,o=new Da({depthPacking:3201}),c=new Oa,l={},h=t.maxTextureSize,d={[mn]:st,[st]:mn,2:2},u=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new qe;f.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ye(f,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sc;let y=this.type;function v(b,w){let I=e.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Qt(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(w,null,I,u,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(w,null,I,p,_,null)}function g(b,w,I,P){let U=null,q=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(q!==void 0)U=q;else if(U=I.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let C=U.uuid,k=w.uuid,H=l[C];H===void 0&&(H={},l[C]=H);let re=H[k];re===void 0&&(re=U.clone(),H[k]=re,w.addEventListener("dispose",R)),U=re}return U.visible=w.visible,U.wireframe=w.wireframe,U.side=P===Zt?w.shadowSide!==null?w.shadowSide:w.side:w.shadowSide!==null?w.shadowSide:d[w.side],U.alphaMap=w.alphaMap,U.alphaTest=w.alphaTest,U.map=w.map,U.clipShadows=w.clipShadows,U.clippingPlanes=w.clippingPlanes,U.clipIntersection=w.clipIntersection,U.displacementMap=w.displacementMap,U.displacementScale=w.displacementScale,U.displacementBias=w.displacementBias,U.wireframeLinewidth=w.wireframeLinewidth,U.linewidth=w.linewidth,I.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(r.properties.get(U).light=I),U}function M(b,w,I,P,U){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&U===Zt)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);let C=e.update(b),k=b.material;if(Array.isArray(k)){let H=C.groups;for(let re=0,oe=H.length;re<oe;re++){let W=H[re],Y=k[W.materialIndex];if(Y&&Y.visible){let $=g(b,Y,P,U);b.onBeforeShadow(r,b,w,I,C,$,W),r.renderBufferDirect(I,null,C,$,b,W),b.onAfterShadow(r,b,w,I,C,$,W)}}}else if(k.visible){let H=g(b,k,P,U);b.onBeforeShadow(r,b,w,I,C,H,null),r.renderBufferDirect(I,null,C,H,b,null),b.onAfterShadow(r,b,w,I,C,H,null)}}let q=b.children;for(let C=0,k=q.length;C<k;C++)M(q[C],w,I,P,U)}function R(b){b.target.removeEventListener("dispose",R);for(let w in l){let I=l[w],P=b.target.uuid;P in I&&(I[P].dispose(),delete I[P])}}this.render=function(b,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let P=r.getRenderTarget(),U=r.getActiveCubeFace(),q=r.getActiveMipmapLevel(),C=r.state;C.setBlending(0),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let k=y!==Zt&&this.type===Zt,H=y===Zt&&this.type!==Zt;for(let re=0,oe=b.length;re<oe;re++){let W=b[re],Y=W.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let $=Y.getFrameExtents();if(i.multiply($),s.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/$.x),i.x=s.x*$.x,Y.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/$.y),i.y=s.y*$.y,Y.mapSize.y=s.y)),Y.map===null||k===!0||H===!0){let Z=this.type!==Zt?{minFilter:ht,magFilter:ht}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Qt(i.x,i.y,Z),Y.map.texture.name=W.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();let O=Y.getViewportCount();for(let Z=0;Z<O;Z++){let ce=Y.getViewport(Z);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),C.viewport(a),Y.updateMatrices(W,Z),n=Y.getFrustum(),M(w,I,Y.camera,W,this.type)}Y.isPointLightShadow!==!0&&this.type===Zt&&v(Y,I),Y.needsUpdate=!1}y=this.type,m.needsUpdate=!1,r.setRenderTarget(P,U,q)}}function xd(r,e,t){let n=t.isWebGL2,i=new function(){let x=!1,ne=new Fe,z=null,V=new Fe(0,0,0,0);return{setMask:function(se){z===se||x||(r.colorMask(se,se,se,se),z=se)},setLocked:function(se){x=se},setClear:function(se,he,de,pe,Me){Me===!0&&(se*=pe,he*=pe,de*=pe),ne.set(se,he,de,pe),V.equals(ne)===!1&&(r.clearColor(se,he,de,pe),V.copy(ne))},reset:function(){x=!1,z=null,V.set(-1,0,0,0)}}},s=new function(){let x=!1,ne=null,z=null,V=null;return{setTest:function(se){se?J(r.DEPTH_TEST):L(r.DEPTH_TEST)},setMask:function(se){ne===se||x||(r.depthMask(se),ne=se)},setFunc:function(se){if(z!==se){switch(se){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}z=se}},setLocked:function(se){x=se},setClear:function(se){V!==se&&(r.clearDepth(se),V=se)},reset:function(){x=!1,ne=null,z=null,V=null}}},a=new function(){let x=!1,ne=null,z=null,V=null,se=null,he=null,de=null,pe=null,Me=null;return{setTest:function(me){x||(me?J(r.STENCIL_TEST):L(r.STENCIL_TEST))},setMask:function(me){ne===me||x||(r.stencilMask(me),ne=me)},setFunc:function(me,fe,Te){z===me&&V===fe&&se===Te||(r.stencilFunc(me,fe,Te),z=me,V=fe,se=Te)},setOp:function(me,fe,Te){he===me&&de===fe&&pe===Te||(r.stencilOp(me,fe,Te),he=me,de=fe,pe=Te)},setLocked:function(me){x=me},setClear:function(me){Me!==me&&(r.clearStencil(me),Me=me)},reset:function(){x=!1,ne=null,z=null,V=null,se=null,he=null,de=null,pe=null,Me=null}}},o=new WeakMap,c=new WeakMap,l={},h={},d=new WeakMap,u=[],p=null,f=!1,_=null,m=null,y=null,v=null,g=null,M=null,R=null,b=new Se(0,0,0),w=0,I=!1,P=null,U=null,q=null,C=null,k=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,oe=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(W)[1]),re=oe>=1):W.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),re=oe>=2);let Y=null,$={},O=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),ce=new Fe().fromArray(O),E=new Fe().fromArray(Z);function S(x,ne,z,V){let se=new Uint8Array(4),he=r.createTexture();r.bindTexture(x,he),r.texParameteri(x,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(x,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let de=0;de<z;de++)!n||x!==r.TEXTURE_3D&&x!==r.TEXTURE_2D_ARRAY?r.texImage2D(ne+de,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,se):r.texImage3D(ne,0,r.RGBA,1,1,V,0,r.RGBA,r.UNSIGNED_BYTE,se);return he}let B={};function J(x){l[x]!==!0&&(r.enable(x),l[x]=!0)}function L(x){l[x]!==!1&&(r.disable(x),l[x]=!1)}B[r.TEXTURE_2D]=S(r.TEXTURE_2D,r.TEXTURE_2D,1),B[r.TEXTURE_CUBE_MAP]=S(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(B[r.TEXTURE_2D_ARRAY]=S(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),B[r.TEXTURE_3D]=S(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),J(r.DEPTH_TEST),s.setFunc(3),F(!1),te(1),J(r.CULL_FACE),D(0);let j={[Rn]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(n)j[103]=r.MIN,j[104]=r.MAX;else{let x=e.get("EXT_blend_minmax");x!==null&&(j[103]=x.MIN_EXT,j[104]=x.MAX_EXT)}let N={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,[ga]:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,[va]:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function D(x,ne,z,V,se,he,de,pe,Me,me){if(x!==0){if(f===!1&&(J(r.BLEND),f=!0),x===5)se=se||ne,he=he||z,de=de||V,ne===m&&se===g||(r.blendEquationSeparate(j[ne],j[se]),m=ne,g=se),z===y&&V===v&&he===M&&de===R||(r.blendFuncSeparate(N[z],N[V],N[he],N[de]),y=z,v=V,M=he,R=de),pe.equals(b)!==!1&&Me===w||(r.blendColor(pe.r,pe.g,pe.b,Me),b.copy(pe),w=Me),_=x,I=!1;else if(x!==_||me!==I){if(m===Rn&&g===Rn||(r.blendEquation(r.FUNC_ADD),m=Rn,g=Rn),me)switch(x){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x)}else switch(x){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x)}y=null,v=null,M=null,R=null,b.set(0,0,0),w=0,_=x,I=me}}else f===!0&&(L(r.BLEND),f=!1)}function F(x){P!==x&&(x?r.frontFace(r.CW):r.frontFace(r.CCW),P=x)}function te(x){x!==0?(J(r.CULL_FACE),x!==U&&(x===1?r.cullFace(r.BACK):x===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):L(r.CULL_FACE),U=x}function Q(x,ne,z){x?(J(r.POLYGON_OFFSET_FILL),C===ne&&k===z||(r.polygonOffset(ne,z),C=ne,k=z)):L(r.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:s,stencil:a},enable:J,disable:L,bindFramebuffer:function(x,ne){return h[x]!==ne&&(r.bindFramebuffer(x,ne),h[x]=ne,n&&(x===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ne),x===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ne)),!0)},drawBuffers:function(x,ne){let z=u,V=!1;if(x)if(z=d.get(ne),z===void 0&&(z=[],d.set(ne,z)),x.isWebGLMultipleRenderTargets){let se=x.texture;if(z.length!==se.length||z[0]!==r.COLOR_ATTACHMENT0){for(let he=0,de=se.length;he<de;he++)z[he]=r.COLOR_ATTACHMENT0+he;z.length=se.length,V=!0}}else z[0]!==r.COLOR_ATTACHMENT0&&(z[0]=r.COLOR_ATTACHMENT0,V=!0);else z[0]!==r.BACK&&(z[0]=r.BACK,V=!0);V&&(t.isWebGL2?r.drawBuffers(z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(z))},useProgram:function(x){return p!==x&&(r.useProgram(x),p=x,!0)},setBlending:D,setMaterial:function(x,ne){x.side===2?L(r.CULL_FACE):J(r.CULL_FACE);let z=x.side===st;ne&&(z=!z),F(z),x.blending===1&&x.transparent===!1?D(0):D(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),s.setFunc(x.depthFunc),s.setTest(x.depthTest),s.setMask(x.depthWrite),i.setMask(x.colorWrite);let V=x.stencilWrite;a.setTest(V),V&&(a.setMask(x.stencilWriteMask),a.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),a.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),Q(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?J(r.SAMPLE_ALPHA_TO_COVERAGE):L(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:F,setCullFace:te,setLineWidth:function(x){x!==q&&(re&&r.lineWidth(x),q=x)},setPolygonOffset:Q,setScissorTest:function(x){x?J(r.SCISSOR_TEST):L(r.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=r.TEXTURE0+H-1),Y!==x&&(r.activeTexture(x),Y=x)},bindTexture:function(x,ne,z){z===void 0&&(z=Y===null?r.TEXTURE0+H-1:Y);let V=$[z];V===void 0&&(V={type:void 0,texture:void 0},$[z]=V),V.type===x&&V.texture===ne||(Y!==z&&(r.activeTexture(z),Y=z),r.bindTexture(x,ne||B[x]),V.type=x,V.texture=ne)},unbindTexture:function(){let x=$[Y];x!==void 0&&x.type!==void 0&&(r.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},updateUBOMapping:function(x,ne){let z=c.get(ne);z===void 0&&(z=new WeakMap,c.set(ne,z));let V=z.get(x);V===void 0&&(V=r.getUniformBlockIndex(ne,x.name),z.set(x,V))},uniformBlockBinding:function(x,ne){let z=c.get(ne).get(x);o.get(ne)!==z&&(r.uniformBlockBinding(ne,z,x.__bindingPointIndex),o.set(ne,z))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(x){console.error("THREE.WebGLState:",x)}},scissor:function(x){ce.equals(x)===!1&&(r.scissor(x.x,x.y,x.z,x.w),ce.copy(x))},viewport:function(x){E.equals(x)===!1&&(r.viewport(x.x,x.y,x.z,x.w),E.copy(x))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},Y=null,$={},h={},d=new WeakMap,u=[],p=null,f=!1,_=null,m=null,y=null,v=null,g=null,M=null,R=null,b=new Se(0,0,0),w=0,I=!1,P=null,U=null,q=null,C=null,k=null,ce.set(0,0,r.canvas.width,r.canvas.height),E.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}}}function Md(r,e,t,n,i,s,a){let o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(E,S){return p?new OffscreenCanvas(E,S):jr("canvas")}function _(E,S,B,J){let L=1;if((E.width>J||E.height>J)&&(L=J/Math.max(E.width,E.height)),L<1||S===!0){if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let j=S?Xr:Math.floor,N=j(L*E.width),D=j(L*E.height);d===void 0&&(d=f(N,D));let F=B?f(N,D):d;return F.width=N,F.height=D,F.getContext("2d").drawImage(E,0,0,N,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+N+"x"+D+")."),F}return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E}return E}function m(E){return Ea(E.width)&&Ea(E.height)}function y(E,S){return E.generateMipmaps&&S&&E.minFilter!==ht&&E.minFilter!==Lt}function v(E){r.generateMipmap(E)}function g(E,S,B,J,L=!1){if(o===!1)return S;if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=S;if(S===r.RED&&(B===r.FLOAT&&(j=r.R32F),B===r.HALF_FLOAT&&(j=r.R16F),B===r.UNSIGNED_BYTE&&(j=r.R8)),S===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(j=r.R8UI),B===r.UNSIGNED_SHORT&&(j=r.R16UI),B===r.UNSIGNED_INT&&(j=r.R32UI),B===r.BYTE&&(j=r.R8I),B===r.SHORT&&(j=r.R16I),B===r.INT&&(j=r.R32I)),S===r.RG&&(B===r.FLOAT&&(j=r.RG32F),B===r.HALF_FLOAT&&(j=r.RG16F),B===r.UNSIGNED_BYTE&&(j=r.RG8)),S===r.RGBA){let N=L?Vr:Be.getTransfer(J);B===r.FLOAT&&(j=r.RGBA32F),B===r.HALF_FLOAT&&(j=r.RGBA16F),B===r.UNSIGNED_BYTE&&(j=N===ze?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return j!==r.R16F&&j!==r.R32F&&j!==r.RG16F&&j!==r.RG32F&&j!==r.RGBA16F&&j!==r.RGBA32F||e.get("EXT_color_buffer_float"),j}function M(E,S,B){return y(E,B)===!0||E.isFramebufferTexture&&E.minFilter!==ht&&E.minFilter!==Lt?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function R(E){return E===ht||E===Qo||E===Ns?r.NEAREST:r.LINEAR}function b(E){let S=E.target;S.removeEventListener("dispose",b),function(B){let J=n.get(B);if(J.__webglInit===void 0)return;let L=B.source,j=u.get(L);if(j){let N=j[J.__cacheKey];N.usedTimes--,N.usedTimes===0&&I(B),Object.keys(j).length===0&&u.delete(L)}n.remove(B)}(S),S.isVideoTexture&&h.delete(S)}function w(E){let S=E.target;S.removeEventListener("dispose",w),function(B){let J=B.texture,L=n.get(B),j=n.get(J);if(j.__webglTexture!==void 0&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),B.depthTexture&&B.depthTexture.dispose(),B.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(L.__webglFramebuffer[N]))for(let D=0;D<L.__webglFramebuffer[N].length;D++)r.deleteFramebuffer(L.__webglFramebuffer[N][D]);else r.deleteFramebuffer(L.__webglFramebuffer[N]);L.__webglDepthbuffer&&r.deleteRenderbuffer(L.__webglDepthbuffer[N])}else{if(Array.isArray(L.__webglFramebuffer))for(let N=0;N<L.__webglFramebuffer.length;N++)r.deleteFramebuffer(L.__webglFramebuffer[N]);else r.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&r.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&r.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let N=0;N<L.__webglColorRenderbuffer.length;N++)L.__webglColorRenderbuffer[N]&&r.deleteRenderbuffer(L.__webglColorRenderbuffer[N]);L.__webglDepthRenderbuffer&&r.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(B.isWebGLMultipleRenderTargets)for(let N=0,D=J.length;N<D;N++){let F=n.get(J[N]);F.__webglTexture&&(r.deleteTexture(F.__webglTexture),a.memory.textures--),n.remove(J[N])}n.remove(J),n.remove(B)}(S)}function I(E){let S=n.get(E);r.deleteTexture(S.__webglTexture);let B=E.source;delete u.get(B)[S.__cacheKey],a.memory.textures--}let P=0;function U(E,S){let B=n.get(E);if(E.isVideoTexture&&function(J){let L=a.render.frame;h.get(J)!==L&&(h.set(J,L),J.update())}(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){let J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(J.complete!==!1)return void oe(B,E,S);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+S)}let q={[xa]:r.REPEAT,[Kt]:r.CLAMP_TO_EDGE,[Ma]:r.MIRRORED_REPEAT},C={[ht]:r.NEAREST,[Qo]:r.NEAREST_MIPMAP_NEAREST,[Ns]:r.NEAREST_MIPMAP_LINEAR,[Lt]:r.LINEAR,[Nh]:r.LINEAR_MIPMAP_NEAREST,[zr]:r.LINEAR_MIPMAP_LINEAR},k={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function H(E,S,B){if(B?(r.texParameteri(E,r.TEXTURE_WRAP_S,q[S.wrapS]),r.texParameteri(E,r.TEXTURE_WRAP_T,q[S.wrapT]),E!==r.TEXTURE_3D&&E!==r.TEXTURE_2D_ARRAY||r.texParameteri(E,r.TEXTURE_WRAP_R,q[S.wrapR]),r.texParameteri(E,r.TEXTURE_MAG_FILTER,C[S.magFilter]),r.texParameteri(E,r.TEXTURE_MIN_FILTER,C[S.minFilter])):(r.texParameteri(E,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(E,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),E!==r.TEXTURE_3D&&E!==r.TEXTURE_2D_ARRAY||r.texParameteri(E,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),S.wrapS===Kt&&S.wrapT===Kt||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(E,r.TEXTURE_MAG_FILTER,R(S.magFilter)),r.texParameteri(E,r.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==ht&&S.minFilter!==Lt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(E,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(E,r.TEXTURE_COMPARE_FUNC,k[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let J=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===ht||S.minFilter!==Ns&&S.minFilter!==zr||S.type===un&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===qi&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(E,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function re(E,S){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",b));let J=S.source,L=u.get(J);L===void 0&&(L={},u.set(J,L));let j=function(N){let D=[];return D.push(N.wrapS),D.push(N.wrapT),D.push(N.wrapR||0),D.push(N.magFilter),D.push(N.minFilter),D.push(N.anisotropy),D.push(N.internalFormat),D.push(N.format),D.push(N.type),D.push(N.generateMipmaps),D.push(N.premultiplyAlpha),D.push(N.flipY),D.push(N.unpackAlignment),D.push(N.colorSpace),D.join()}(S);if(j!==E.__cacheKey){L[j]===void 0&&(L[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),L[j].usedTimes++;let N=L[E.__cacheKey];N!==void 0&&(L[E.__cacheKey].usedTimes--,N.usedTimes===0&&I(S)),E.__cacheKey=j,E.__webglTexture=L[j].texture}return B}function oe(E,S,B){let J=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=r.TEXTURE_3D);let L=re(E,S),j=S.source;t.bindTexture(J,E.__webglTexture,r.TEXTURE0+B);let N=n.get(j);if(j.version!==N.__version||L===!0){t.activeTexture(r.TEXTURE0+B);let D=Be.getPrimaries(Be.workingColorSpace),F=S.colorSpace===Ot?null:Be.getPrimaries(S.colorSpace),te=S.colorSpace===Ot||D===F?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Q=function(fe){return!o&&(fe.wrapS!==Kt||fe.wrapT!==Kt||fe.minFilter!==ht&&fe.minFilter!==Lt)}(S)&&m(S.image)===!1,x=_(S.image,Q,!1,i.maxTextureSize);x=ce(S,x);let ne=m(x)||o,z=s.convert(S.format,S.colorSpace),V,se=s.convert(S.type),he=g(S.internalFormat,z,se,S.colorSpace,S.isVideoTexture);H(J,S,ne);let de=S.mipmaps,pe=o&&S.isVideoTexture!==!0&&he!==Ic,Me=N.__version===void 0||L===!0,me=M(S,x,ne);if(S.isDepthTexture)he=r.DEPTH_COMPONENT,o?he=S.type===un?r.DEPTH_COMPONENT32F:S.type===hn?r.DEPTH_COMPONENT24:S.type===Nn?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:S.type===un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Un&&he===r.DEPTH_COMPONENT&&S.type!==yo&&S.type!==hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=hn,se=s.convert(S.type)),S.format===fi&&he===r.DEPTH_COMPONENT&&(he=r.DEPTH_STENCIL,S.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Nn,se=s.convert(S.type))),Me&&(pe?t.texStorage2D(r.TEXTURE_2D,1,he,x.width,x.height):t.texImage2D(r.TEXTURE_2D,0,he,x.width,x.height,0,z,se,null));else if(S.isDataTexture)if(de.length>0&&ne){pe&&Me&&t.texStorage2D(r.TEXTURE_2D,me,he,de[0].width,de[0].height);for(let fe=0,Te=de.length;fe<Te;fe++)V=de[fe],pe?t.texSubImage2D(r.TEXTURE_2D,fe,0,0,V.width,V.height,z,se,V.data):t.texImage2D(r.TEXTURE_2D,fe,he,V.width,V.height,0,z,se,V.data);S.generateMipmaps=!1}else pe?(Me&&t.texStorage2D(r.TEXTURE_2D,me,he,x.width,x.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,z,se,x.data)):t.texImage2D(r.TEXTURE_2D,0,he,x.width,x.height,0,z,se,x.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){pe&&Me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,he,de[0].width,de[0].height,x.depth);for(let fe=0,Te=de.length;fe<Te;fe++)V=de[fe],S.format!==Dt?z!==null?pe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,V.width,V.height,x.depth,z,V.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,fe,he,V.width,V.height,x.depth,0,V.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,V.width,V.height,x.depth,z,se,V.data):t.texImage3D(r.TEXTURE_2D_ARRAY,fe,he,V.width,V.height,x.depth,0,z,se,V.data)}else{pe&&Me&&t.texStorage2D(r.TEXTURE_2D,me,he,de[0].width,de[0].height);for(let fe=0,Te=de.length;fe<Te;fe++)V=de[fe],S.format!==Dt?z!==null?pe?t.compressedTexSubImage2D(r.TEXTURE_2D,fe,0,0,V.width,V.height,z,V.data):t.compressedTexImage2D(r.TEXTURE_2D,fe,he,V.width,V.height,0,V.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?t.texSubImage2D(r.TEXTURE_2D,fe,0,0,V.width,V.height,z,se,V.data):t.texImage2D(r.TEXTURE_2D,fe,he,V.width,V.height,0,z,se,V.data)}else if(S.isDataArrayTexture)pe?(Me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,he,x.width,x.height,x.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,x.width,x.height,x.depth,z,se,x.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,he,x.width,x.height,x.depth,0,z,se,x.data);else if(S.isData3DTexture)pe?(Me&&t.texStorage3D(r.TEXTURE_3D,me,he,x.width,x.height,x.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,x.width,x.height,x.depth,z,se,x.data)):t.texImage3D(r.TEXTURE_3D,0,he,x.width,x.height,x.depth,0,z,se,x.data);else if(S.isFramebufferTexture){if(Me)if(pe)t.texStorage2D(r.TEXTURE_2D,me,he,x.width,x.height);else{let fe=x.width,Te=x.height;for(let Ke=0;Ke<me;Ke++)t.texImage2D(r.TEXTURE_2D,Ke,he,fe,Te,0,z,se,null),fe>>=1,Te>>=1}}else if(de.length>0&&ne){pe&&Me&&t.texStorage2D(r.TEXTURE_2D,me,he,de[0].width,de[0].height);for(let fe=0,Te=de.length;fe<Te;fe++)V=de[fe],pe?t.texSubImage2D(r.TEXTURE_2D,fe,0,0,z,se,V):t.texImage2D(r.TEXTURE_2D,fe,he,z,se,V);S.generateMipmaps=!1}else pe?(Me&&t.texStorage2D(r.TEXTURE_2D,me,he,x.width,x.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,z,se,x)):t.texImage2D(r.TEXTURE_2D,0,he,z,se,x);y(S,ne)&&v(J),N.__version=j.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function W(E,S,B,J,L,j){let N=s.convert(B.format,B.colorSpace),D=s.convert(B.type),F=g(B.internalFormat,N,D,B.colorSpace);if(!n.get(S).__hasExternalTextures){let te=Math.max(1,S.width>>j),Q=Math.max(1,S.height>>j);L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?t.texImage3D(L,j,F,te,Q,S.depth,0,N,D,null):t.texImage2D(L,j,F,te,Q,0,N,D,null)}t.bindFramebuffer(r.FRAMEBUFFER,E),Z(S)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,L,n.get(B).__webglTexture,0,O(S)):(L===r.TEXTURE_2D||L>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,L,n.get(B).__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Y(E,S,B){if(r.bindRenderbuffer(r.RENDERBUFFER,E),S.depthBuffer&&!S.stencilBuffer){let J=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(B||Z(S)){let L=S.depthTexture;L&&L.isDepthTexture&&(L.type===un?J=r.DEPTH_COMPONENT32F:L.type===hn&&(J=r.DEPTH_COMPONENT24));let j=O(S);Z(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j,J,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,j,J,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,J,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,E)}else if(S.depthBuffer&&S.stencilBuffer){let J=O(S);B&&Z(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,S.width,S.height):Z(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,E)}else{let J=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let L=0;L<J.length;L++){let j=J[L],N=s.convert(j.format,j.colorSpace),D=s.convert(j.type),F=g(j.internalFormat,N,D,j.colorSpace),te=O(S);B&&Z(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,F,S.width,S.height):Z(S)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,F,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,F,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function $(E){let S=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");(function(J,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,J),!L.depthTexture||!L.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(L.depthTexture).__webglTexture&&L.depthTexture.image.width===L.width&&L.depthTexture.image.height===L.height||(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),U(L.depthTexture,0);let j=n.get(L.depthTexture).__webglTexture,N=O(L);if(L.depthTexture.format===Un)Z(L)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,N):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else{if(L.depthTexture.format!==fi)throw new Error("Unknown depthTexture format");Z(L)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,N):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0)}})(S.__webglFramebuffer,E)}else if(B){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]=r.createRenderbuffer(),Y(S.__webglDepthbuffer[J],E,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Y(S.__webglDepthbuffer,E,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function O(E){return Math.min(i.maxSamples,E.samples)}function Z(E){let S=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ce(E,S){let B=E.colorSpace,J=E.format,L=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ba||B!==$t&&B!==Ot&&(Be.getTransfer(B)===ze?o===!1?e.has("EXT_sRGB")===!0&&J===Dt?(E.format=ba,E.minFilter=Lt,E.generateMipmaps=!1):S=Yr.sRGBToLinear(S):J===Dt&&L===In||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}this.allocateTextureUnit=function(){let E=P;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),P+=1,E},this.resetTextureUnits=function(){P=0},this.setTexture2D=U,this.setTexture2DArray=function(E,S){let B=n.get(E);E.version>0&&B.__version!==E.version?oe(B,E,S):t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+S)},this.setTexture3D=function(E,S){let B=n.get(E);E.version>0&&B.__version!==E.version?oe(B,E,S):t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+S)},this.setTextureCube=function(E,S){let B=n.get(E);E.version>0&&B.__version!==E.version?function(J,L,j){if(L.image.length!==6)return;let N=re(J,L),D=L.source;t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+j);let F=n.get(D);if(D.version!==F.__version||N===!0){t.activeTexture(r.TEXTURE0+j);let te=Be.getPrimaries(Be.workingColorSpace),Q=L.colorSpace===Ot?null:Be.getPrimaries(L.colorSpace),x=L.colorSpace===Ot||te===Q?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,L.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,L.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,x);let ne=L.isCompressedTexture||L.image[0].isCompressedTexture,z=L.image[0]&&L.image[0].isDataTexture,V=[];for(let ve=0;ve<6;ve++)V[ve]=ne||z?z?L.image[ve].image:L.image[ve]:_(L.image[ve],!1,!0,i.maxCubemapSize),V[ve]=ce(L,V[ve]);let se=V[0],he=m(se)||o,de=s.convert(L.format,L.colorSpace),pe=s.convert(L.type),Me=g(L.internalFormat,de,pe,L.colorSpace),me=o&&L.isVideoTexture!==!0,fe=F.__version===void 0||N===!0,Te,Ke=M(L,se,he);if(H(r.TEXTURE_CUBE_MAP,L,he),ne){me&&fe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ke,Me,se.width,se.height);for(let ve=0;ve<6;ve++){Te=V[ve].mipmaps;for(let Ue=0;Ue<Te.length;Ue++){let Pe=Te[Ue];L.format!==Dt?de!==null?me?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue,0,0,Pe.width,Pe.height,de,Pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue,Me,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue,0,0,Pe.width,Pe.height,de,pe,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue,Me,Pe.width,Pe.height,0,de,pe,Pe.data)}}}else{Te=L.mipmaps,me&&fe&&(Te.length>0&&Ke++,t.texStorage2D(r.TEXTURE_CUBE_MAP,Ke,Me,V[0].width,V[0].height));for(let ve=0;ve<6;ve++)if(z){me?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,V[ve].width,V[ve].height,de,pe,V[ve].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Me,V[ve].width,V[ve].height,0,de,pe,V[ve].data);for(let Ue=0;Ue<Te.length;Ue++){let Pe=Te[Ue].image[ve].image;me?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue+1,0,0,Pe.width,Pe.height,de,pe,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue+1,Me,Pe.width,Pe.height,0,de,pe,Pe.data)}}else{me?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,de,pe,V[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Me,de,pe,V[ve]);for(let Ue=0;Ue<Te.length;Ue++){let Pe=Te[Ue];me?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue+1,0,0,de,pe,Pe.image[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ue+1,Me,de,pe,Pe.image[ve])}}}y(L,he)&&v(r.TEXTURE_CUBE_MAP),F.__version=D.version,L.onUpdate&&L.onUpdate(L)}J.__version=L.version}(B,E,S):t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+S)},this.rebindTextures=function(E,S,B){let J=n.get(E);S!==void 0&&W(J.__webglFramebuffer,E,E.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&$(E)},this.setupRenderTarget=function(E){let S=E.texture,B=n.get(E),J=n.get(S);E.addEventListener("dispose",w),E.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=S.version,a.memory.textures++);let L=E.isWebGLCubeRenderTarget===!0,j=E.isWebGLMultipleRenderTargets===!0,N=m(E)||o;if(L){B.__webglFramebuffer=[];for(let D=0;D<6;D++)if(o&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[D]=[];for(let F=0;F<S.mipmaps.length;F++)B.__webglFramebuffer[D][F]=r.createFramebuffer()}else B.__webglFramebuffer[D]=r.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let D=0;D<S.mipmaps.length;D++)B.__webglFramebuffer[D]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(j)if(i.drawBuffers){let D=E.texture;for(let F=0,te=D.length;F<te;F++){let Q=n.get(D[F]);Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&Z(E)===!1){let D=j?S:[S];B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let F=0;F<D.length;F++){let te=D[F];B.__webglColorRenderbuffer[F]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[F]);let Q=s.convert(te.format,te.colorSpace),x=s.convert(te.type),ne=g(te.internalFormat,Q,x,te.colorSpace,E.isXRRenderTarget===!0),z=O(E);r.renderbufferStorageMultisample(r.RENDERBUFFER,z,ne,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.RENDERBUFFER,B.__webglColorRenderbuffer[F])}r.bindRenderbuffer(r.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Y(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(L){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),H(r.TEXTURE_CUBE_MAP,S,N);for(let D=0;D<6;D++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let F=0;F<S.mipmaps.length;F++)W(B.__webglFramebuffer[D][F],E,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+D,F);else W(B.__webglFramebuffer[D],E,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);y(S,N)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){let D=E.texture;for(let F=0,te=D.length;F<te;F++){let Q=D[F],x=n.get(Q);t.bindTexture(r.TEXTURE_2D,x.__webglTexture),H(r.TEXTURE_2D,Q,N),W(B.__webglFramebuffer,E,Q,r.COLOR_ATTACHMENT0+F,r.TEXTURE_2D,0),y(Q,N)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let D=r.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?D=E.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(D,J.__webglTexture),H(D,S,N),o&&S.mipmaps&&S.mipmaps.length>0)for(let F=0;F<S.mipmaps.length;F++)W(B.__webglFramebuffer[F],E,S,r.COLOR_ATTACHMENT0,D,F);else W(B.__webglFramebuffer,E,S,r.COLOR_ATTACHMENT0,D,0);y(S,N)&&v(D),t.unbindTexture()}E.depthBuffer&&$(E)},this.updateRenderTargetMipmap=function(E){let S=m(E)||o,B=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let J=0,L=B.length;J<L;J++){let j=B[J];if(y(j,S)){let N=E.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,D=n.get(j).__webglTexture;t.bindTexture(N,D),v(N),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(E){if(o&&E.samples>0&&Z(E)===!1){let S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],B=E.width,J=E.height,L=r.COLOR_BUFFER_BIT,j=[],N=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,D=n.get(E),F=E.isWebGLMultipleRenderTargets===!0;if(F)for(let te=0;te<S.length;te++)t.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,D.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,D.__webglFramebuffer);for(let te=0;te<S.length;te++){j.push(r.COLOR_ATTACHMENT0+te),E.depthBuffer&&j.push(N);let Q=D.__ignoreDepthValues!==void 0&&D.__ignoreDepthValues;if(Q===!1&&(E.depthBuffer&&(L|=r.DEPTH_BUFFER_BIT),E.stencilBuffer&&(L|=r.STENCIL_BUFFER_BIT)),F&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,D.__webglColorRenderbuffer[te]),Q===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[N]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[N])),F){let x=n.get(S[te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,x,0)}r.blitFramebuffer(0,0,B,J,0,0,B,J,L,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),F)for(let te=0;te<S.length;te++){t.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,D.__webglColorRenderbuffer[te]);let Q=n.get(S[te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,Q,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,D.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=W,this.useMultisampledRTT=Z}function bd(r,e,t){let n=t.isWebGL2;return{convert:function(i,s=""){let a,o=Be.getTransfer(s);if(i===In)return r.UNSIGNED_BYTE;if(i===Ac)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Rc)return r.UNSIGNED_SHORT_5_5_5_1;if(i===1010)return r.BYTE;if(i===1011)return r.SHORT;if(i===yo)return r.UNSIGNED_SHORT;if(i===wc)return r.INT;if(i===hn)return r.UNSIGNED_INT;if(i===un)return r.FLOAT;if(i===qi)return n?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(i===1021)return r.ALPHA;if(i===Dt)return r.RGBA;if(i===1024)return r.LUMINANCE;if(i===1025)return r.LUMINANCE_ALPHA;if(i===Un)return r.DEPTH_COMPONENT;if(i===fi)return r.DEPTH_STENCIL;if(i===ba)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(i===1028)return r.RED;if(i===Cc)return r.RED_INTEGER;if(i===1030)return r.RG;if(i===Pc)return r.RG_INTEGER;if(i===Lc)return r.RGBA_INTEGER;if(i===Us||i===Ds||i===Os||i===Bs)if(o===ze){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(i===Us)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(i===Us)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ds)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Os)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===el||i===tl||i===nl||i===il){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(i===el)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===il)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===Ic)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===rl||i===sl){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(i===rl)return o===ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===sl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(i===al||i===ol||i===ll||i===cl||i===hl||i===ul||i===dl||i===pl||i===ml||i===fl||i===gl||i===vl||i===_l||i===yl){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(i===al)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ol)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ll)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ul)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ml)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_l)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===Fs||i===xl||i===Ml){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(i===Fs)return o===ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ml)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(i===36283||i===bl||i===Sl||i===El){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(i===Fs)return a.COMPRESSED_RED_RGTC1_EXT;if(i===bl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===El)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return i===Nn?n?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[i]!==void 0?r[i]:null}}}function Ed(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===st&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===st&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s).envMap;if(a&&(i.envMap.value=a,i.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap){i.lightMap.value=s.lightMap;let o=r._useLegacyLights===!0?Math.PI:1;i.lightMapIntensity.value=s.lightMapIntensity*o,t(s.lightMap,i.lightMapTransform)}s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,Oc(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)}(i,s)):s.isMeshPhongMaterial?(n(i,s),function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)}(i,s)):s.isMeshStandardMaterial?(n(i,s),function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),e.get(h).envMap&&(l.envMapIntensity.value=h.envMapIntensity)}(i,s),s.isMeshPhysicalMaterial&&function(l,h,d){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===st&&l.clearcoatNormalScale.value.negate())),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=d.texture,l.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))}(i,s,c)):s.isMeshMatcapMaterial?(n(i,s),function(l,h){h.matcap&&(l.matcap.value=h.matcap)}(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),function(l,h){let d=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(d.matrixWorld),l.nearDistance.value=d.shadow.camera.near,l.farDistance.value=d.shadow.camera.far}(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))}(i,s),s.isLineDashedMaterial&&function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale}(i,s)):s.isPointsMaterial?function(l,h,d,u){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*d,l.scale.value=.5*u,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)}(i,s,a,o):s.isSpriteMaterial?function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)}(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Td(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(d,u,p,f){let _=d.value,m=u+"_"+p;if(f[m]===void 0)return f[m]=typeof _=="number"||typeof _=="boolean"?_:_.clone(),!0;{let y=f[m];if(typeof _=="number"||typeof _=="boolean"){if(y!==_)return f[m]=_,!0}else if(y.equals(_)===!1)return y.copy(_),!0}return!1}function l(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[u.id]),delete i[u.id],delete s[u.id]}return{bind:function(d,u){let p=u.program;n.uniformBlockBinding(d,p)},update:function(d,u){let p=i[d.id];p===void 0&&(function(m){let y=m.uniforms,v=0,g=16;for(let R=0,b=y.length;R<b;R++){let w=Array.isArray(y[R])?y[R]:[y[R]];for(let I=0,P=w.length;I<P;I++){let U=w[I],q=Array.isArray(U.value)?U.value:[U.value];for(let C=0,k=q.length;C<k;C++){let H=l(q[C]),re=v%g;re!==0&&g-re<H.boundary&&(v+=g-re),U.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=H.storage}}}let M=v%g;M>0&&(v+=g-M),m.__size=v,m.__cache={}}(d),p=function(m){let y=function(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();m.__bindingPointIndex=y;let v=r.createBuffer(),g=m.__size,M=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,g,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}(d),i[d.id]=p,d.addEventListener("dispose",h));let f=u.program;n.updateUBOMapping(d,f);let _=e.render.frame;s[d.id]!==_&&(function(m){let y=i[m.id],v=m.uniforms,g=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let M=0,R=v.length;M<R;M++){let b=Array.isArray(v[M])?v[M]:[v[M]];for(let w=0,I=b.length;w<I;w++){let P=b[w];if(c(P,M,w,g)===!0){let U=P.__offset,q=Array.isArray(P.value)?P.value:[P.value],C=0;for(let k=0;k<q.length;k++){let H=q[k],re=l(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,U+C,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,C),C+=re.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(d),s[d.id]=_)},dispose:function(){for(let d in i)r.deleteBuffer(i[d]);a=[],i={},s={}}}}function bo(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,d){let u=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,p*=h,i(a,o,u,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}function mc(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function Vi(r,e,t,n){return function(i,s){let a=1-i;return a*a*s}(r,e)+function(i,s){return 2*(1-i)*i*s}(r,t)+function(i,s){return i*i*s}(r,n)}function Gi(r,e,t,n,i){return function(s,a){let o=1-s;return o*o*o*a}(r,e)+function(s,a){let o=1-s;return 3*o*o*s*a}(r,t)+function(s,a){return 3*(1-s)*s*s*a}(r,n)+function(s,a){return s*s*s*a}(r,i)}function fc(r,e,t,n,i){let s,a;if(i===function(o,c,l,h){let d=0;for(let u=c,p=l-h;u<l;u+=h)d+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return d}(r,e,t,n)>0)for(s=e;s<t;s+=n)a=gc(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=gc(s,r[s],r[s+1],a);return a&&ys(a,a.next)&&(Qi(a),a=a.next),a}function Fn(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!ys(n,n.next)&&Ge(n.prev,n,n.next)!==0)n=n.next;else{if(Qi(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Ki(r,e,t,n,i,s,a){if(!r)return;!a&&s&&function(h,d,u,p){let f=h;do f.z===0&&(f.z=Ja(f.x,f.y,d,u,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,function(_){let m,y,v,g,M,R,b,w,I=1;do{for(y=_,_=null,M=null,R=0;y;){for(R++,v=y,b=0,m=0;m<I&&(b++,v=v.nextZ,v);m++);for(w=I;b>0||w>0&&v;)b!==0&&(w===0||!v||y.z<=v.z)?(g=y,y=y.nextZ,b--):(g=v,v=v.nextZ,w--),M?M.nextZ=g:_=g,g.prevZ=M,M=g;y=v}M.nextZ=null,I*=2}while(R>1)}(f)}(r,n,i,s);let o,c,l=r;for(;r.prev!==r.next;)if(o=r.prev,c=r.next,s?Rd(r,n,i,s):Ad(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),Qi(r),r=c.next,l=c.next;else if((r=c)===l){a?a===1?Ki(r=Cd(Fn(r),e,t),e,t,n,i,s,2):a===2&&Pd(r,e,t,n,i,s):Ki(Fn(r),e,t,n,i,s,1);break}}function Ad(r){let e=r.prev,t=r,n=r.next;if(Ge(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<s?i<a?i:a:s<a?s:a,d=o<c?o<l?o:l:c<l?c:l,u=i>s?i>a?i:a:s>a?s:a,p=o>c?o>l?o:l:c>l?c:l,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=u&&f.y>=d&&f.y<=p&&ci(i,o,s,c,a,l,f.x,f.y)&&Ge(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Rd(r,e,t,n){let i=r.prev,s=r,a=r.next;if(Ge(i,s,a)>=0)return!1;let o=i.x,c=s.x,l=a.x,h=i.y,d=s.y,u=a.y,p=o<c?o<l?o:l:c<l?c:l,f=h<d?h<u?h:u:d<u?d:u,_=o>c?o>l?o:l:c>l?c:l,m=h>d?h>u?h:u:d>u?d:u,y=Ja(p,f,e,t,n),v=Ja(_,m,e,t,n),g=r.prevZ,M=r.nextZ;for(;g&&g.z>=y&&M&&M.z<=v;){if(g.x>=p&&g.x<=_&&g.y>=f&&g.y<=m&&g!==i&&g!==a&&ci(o,h,c,d,l,u,g.x,g.y)&&Ge(g.prev,g,g.next)>=0||(g=g.prevZ,M.x>=p&&M.x<=_&&M.y>=f&&M.y<=m&&M!==i&&M!==a&&ci(o,h,c,d,l,u,M.x,M.y)&&Ge(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;g&&g.z>=y;){if(g.x>=p&&g.x<=_&&g.y>=f&&g.y<=m&&g!==i&&g!==a&&ci(o,h,c,d,l,u,g.x,g.y)&&Ge(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;M&&M.z<=v;){if(M.x>=p&&M.x<=_&&M.y>=f&&M.y<=m&&M!==i&&M!==a&&ci(o,h,c,d,l,u,M.x,M.y)&&Ge(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Cd(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!ys(i,s)&&Gc(i,n,n.next,s)&&$i(i,s)&&$i(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Qi(n),Qi(n.next),n=r=s),n=n.next}while(n!==r);return Fn(n)}function Pd(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Dd(a,o)){let c=Wc(a,o);return a=Fn(a,a.next),c=Fn(c,c.next),Ki(a,e,t,n,i,s,0),void Ki(c,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function Ld(r,e){return r.x-e.x}function Id(r,e){let t=function(i,s){let a,o=s,c=-1/0,l=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=l&&m>c&&(c=m,a=o.x<o.next.x?o:o.next,m===l))return a}o=o.next}while(o!==s);if(!a)return null;let d=a,u=a.x,p=a.y,f,_=1/0;o=a;do l>=o.x&&o.x>=u&&l!==o.x&&ci(h<p?l:c,h,u,p,h<p?c:l,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(l-o.x),$i(o,i)&&(f<_||f===_&&(o.x>a.x||o.x===a.x&&Nd(a,o)))&&(a=o,_=f)),o=o.next;while(o!==d);return a}(r,e);if(!t)return e;let n=Wc(t,r);return Fn(n,n.next),Fn(t,t.next)}function Nd(r,e){return Ge(r.prev,r,e.prev)<0&&Ge(e.next,r,r.next)<0}function Ja(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Ud(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ci(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Dd(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Gc(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1}(r,e)&&($i(r,e)&&$i(e,r)&&function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s}(r,e)&&(Ge(r.prev,r,e.prev)||Ge(r,e.prev,e))||ys(r,e)&&Ge(r.prev,r,r.next)>0&&Ge(e.prev,e,e.next)>0)}function Ge(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ys(r,e){return r.x===e.x&&r.y===e.y}function Gc(r,e,t,n){let i=Br(Ge(r,e,t)),s=Br(Ge(r,e,n)),a=Br(Ge(t,n,r)),o=Br(Ge(t,n,e));return i!==s&&a!==o||!(i!==0||!Or(r,t,e))||!(s!==0||!Or(r,n,e))||!(a!==0||!Or(t,r,n))||!(o!==0||!Or(t,e,n))}function Or(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Br(r){return r>0?1:r<0?-1:0}function $i(r,e){return Ge(r.prev,r,r.next)<0?Ge(r,e,r.next)>=0&&Ge(r,r.prev,e)>=0:Ge(r,e,r.prev)<0||Ge(r,r.next,e)<0}function Wc(r,e){let t=new Ka(r.i,r.x,r.y),n=new Ka(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function gc(r,e,t,n){let i=new Ka(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Qi(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ka(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function vc(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function _c(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}function yc(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}function Fr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Bd(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var fa,Sc,Th,Zt,mn,st,vo,Rn,ga,va,Ec,wh,Ah,dn,Rh,Ch,Ph,_o,Lh,Ih,Tc,pi,mi,_a,ya,gs,xa,Kt,Ma,ht,Qo,Ns,Lt,Nh,zr,In,yo,wc,hn,un,qi,Ac,Rc,Nn,Dt,Un,fi,Cc,Pc,Lc,Us,Ds,Os,Bs,el,tl,nl,il,Ic,rl,sl,al,ol,ll,cl,hl,ul,dl,pl,ml,fl,gl,vl,_l,yl,Fs,xl,Ml,bl,Sl,El,kr,Hr,zs,Tl,wl,Al,Nc,Dn,Ot,je,$t,xo,vs,Vr,ze,Gr,Wr,Xn,Rl,Cl,ba,gi,qr,fn,nt,Pl,hi,Xi,_n,ie,Re,ks,Ll,Il,Nl,hr,Dh,Be,jn,Yr,Oh,Zr,Bh,Mt,Fe,Ta,Qt,Jr,wa,Bt,T,Gs,Ul,Ft,Wt,Rt,ur,Yn,Zn,Jn,sn,an,Sn,Ni,dr,pr,En,Fh,Ui,qs,zt,qt,Xs,mr,on,js,fr,Ys,vi,we,Kn,Ct,zh,kh,ln,gr,mt,Dl,Ol,Kr,$r,Hh,Bl,$n,Xt,vr,Di,Vh,Gh,Fl,zl,kl,Wh,qh,dt,Pt,jt,Zs,Yt,Qn,ei,Hl,Js,Ks,$s,_r,Ln,Dc,cn,yr,Se,it,Xh,On,gn,dp,We,xr,bt,Qr,es,be,Yh,xt,ea,ti,ft,Oi,$e,qe,Vl,Tn,Mr,Gl,ni,ii,ri,ta,br,Sr,Er,Tr,Wl,ql,Xl,wr,Ar,ye,St,Zh,en,ji,rt,si,Aa,ts,Ra,na,Jh,Kh,Jt,wn,Cr,yi,xi,Ee,le,Ut,Pr,ns,jl,Bi,ia,Yl,ra,sa,aa,An,ai,Zl,Mi,is,Fc,zc,kc,Hc,Vc,Ql,ec,tc,nc,ic,Ca,Pa,La,oa,di,Qu,ed,id,rd,ad,cd,Na,Ua,fd,Da,Oa,Ba,gt,Sd,Hi,Fa,Yi,za,bi,pp,mp,fp,gp,vp,_p,yp,xp,Mp,bp,Sp,Ep,Tp,wp,Ap,Rp,Cp,Pp,Lp,Ip,Np,Up,Dp,Op,Bp,Fp,zp,kp,Hp,Vp,Gp,Wp,ka,qp,Xp,jp,Yp,Zp,Jp,Kp,$p,Qp,em,tm,nm,im,rm,sm,am,om,lm,cm,hm,um,rs,Et,Zi,Ha,Ir,la,ca,ha,kt,ss,Va,as,Ga,os,ls,cs,hs,Wa,Ji,us,qa,Xa,tn,ja,Bn,Ya,Nr,Ur,ua,Dr,Za,vn,wd,pn,zn,Od,$a,Qa,eo,Si,Ei,to,no,io,Ht,ro,dm,nn,rn,Ti,so,ao,oo,It,Cn,lo,co,ho,Wi,Pn,uo,po,Fd,mo,ds,da,xc,Mc,ps,bc,Fi,pa,fo,ms,go,fs,pm,mm,fm,gm,vm,_m,ym,xm,Mm,bm,Sm,So,zd,ma,kd,Hd,Vd,ke,Em,Tm,wm,Am,Rm,Cm,Pm,Lm,Im,Nm,Um,Dm,Om,Bm,Fm,zm,km,Hm,Eo=Ps(()=>{fa="160",Sc=1,Th=2,Zt=3,mn=0,st=1,vo=2,Rn=100,ga=204,va=205,Ec=0,wh=1,Ah=2,dn=0,Rh=1,Ch=2,Ph=3,_o=4,Lh=5,Ih=6,Tc=300,pi=301,mi=302,_a=303,ya=304,gs=306,xa=1e3,Kt=1001,Ma=1002,ht=1003,Qo=1004,Ns=1005,Lt=1006,Nh=1007,zr=1008,In=1009,yo=1012,wc=1013,hn=1014,un=1015,qi=1016,Ac=1017,Rc=1018,Nn=1020,Dt=1023,Un=1026,fi=1027,Cc=1029,Pc=1031,Lc=1033,Us=33776,Ds=33777,Os=33778,Bs=33779,el=35840,tl=35841,nl=35842,il=35843,Ic=36196,rl=37492,sl=37496,al=37808,ol=37809,ll=37810,cl=37811,hl=37812,ul=37813,dl=37814,pl=37815,ml=37816,fl=37817,gl=37818,vl=37819,_l=37820,yl=37821,Fs=36492,xl=36494,Ml=36495,bl=36284,Sl=36285,El=36286,kr=2300,Hr=2301,zs=2302,Tl=2400,wl=2401,Al=2402,Nc=3e3,Dn=3001,Ot="",je="srgb",$t="srgb-linear",xo="display-p3",vs="display-p3-linear",Vr="linear",ze="srgb",Gr="rec709",Wr="p3",Xn=7680,Rl=35044,Cl="300 es",ba=1035,gi=2e3,qr=2001,fn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pl=1234567,hi=Math.PI/180,Xi=180/Math.PI;_n={DEG2RAD:hi,RAD2DEG:Xi,generateUUID:kn,clamp:Ye,euclideanModulo:Sa,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:zi,damp:function(r,e,t,n){return zi(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(Sa(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(Pl=r);let e=Pl+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*hi},radToDeg:function(r){return r*Xi},isPowerOfTwo:Ea,ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:Xr,setQuaternionFromProperEuler:function(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),u=a((e-n)/2),p=s((n-e)/2),f=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*d,c*u,o*l);break;case"YZY":r.set(c*u,o*h,c*d,o*l);break;case"ZXZ":r.set(c*d,c*u,o*h,o*l);break;case"XZX":r.set(o*h,c*f,c*p,o*l);break;case"YXY":r.set(c*p,o*h,c*f,o*l);break;case"ZYZ":r.set(c*f,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:lt,denormalize:li},ie=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Re=class r{constructor(e,t,n,i,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],f=n[8],_=i[0],m=i[3],y=i[6],v=i[1],g=i[4],M=i[7],R=i[2],b=i[5],w=i[8];return s[0]=a*_+o*v+c*R,s[3]=a*m+o*g+c*b,s[6]=a*y+o*M+c*w,s[1]=l*_+h*v+d*R,s[4]=l*m+h*g+d*b,s[7]=l*y+h*M+d*w,s[2]=u*_+p*v+f*R,s[5]=u*m+p*g+f*b,s[8]=u*y+p*M+f*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*s,p=l*s-a*c,f=t*d+n*u+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return e[0]=d*_,e[1]=(i*l-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ks.makeScale(e,t)),this}rotate(e){return this.premultiply(ks.makeRotation(-e)),this}translate(e,t){return this.premultiply(ks.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ks=new Re;Ll={};Il=new Re().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nl=new Re().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hr={[$t]:{transfer:Vr,primaries:Gr,toReference:r=>r,fromReference:r=>r},[je]:{transfer:ze,primaries:Gr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[vs]:{transfer:Vr,primaries:Wr,toReference:r=>r.applyMatrix3(Nl),fromReference:r=>r.applyMatrix3(Il)},[xo]:{transfer:ze,primaries:Wr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Nl),fromReference:r=>r.applyMatrix3(Il).convertLinearToSRGB()}},Dh=new Set([$t,vs]),Be={enabled:!0,_workingColorSpace:$t,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Dh.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;let n=hr[e].toReference;return(0,hr[t].fromReference)(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return hr[r].primaries},getTransfer:function(r){return r===Ot?Vr:hr[r].transfer}};Yr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jn===void 0&&(jn=jr("canvas")),jn.width=e.width,jn.height=e.height;let n=jn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=jn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=jr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*ui(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*ui(t[n]/255)):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Oh=0,Zr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=kn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Vs(i[a].image)):s.push(Vs(i[a]))}else s=Vs(i);n.url=s}return t||(e.images[this.uuid]=n),n}};Bh=0,Mt=class r extends fn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,c=1009,l=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=kn(),this.name="",this.source=new Zr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Dn?je:Ot),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xa:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case Ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case xa:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case Ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===je?Dn:Nc}set encoding(e){ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Dn?je:Ot}};Mt.DEFAULT_IMAGE=null,Mt.DEFAULT_MAPPING=Tc,Mt.DEFAULT_ANISOTROPY=1;Fe=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],f=c[9],_=c[2],m=c[6],y=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(f+m)<.1&&Math.abs(l+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(l+1)/2,M=(p+1)/2,R=(y+1)/2,b=(h+u)/4,w=(d+_)/4,I=(f+m)/4;return g>M&&g>R?g<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(g),i=b/n,s=w/n):M>R?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=b/i,s=I/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=w/s,i=I/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-f)*(m-f)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-f)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((l+p+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ta=class extends fn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Fe(0,0,e,t),this.scissorTest=!1,this.viewport=new Fe(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(ki("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Dn?je:Ot),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Zr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends Ta{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jr=class extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wa=class extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=s[a+0],p=s[a+1],f=s[a+2],_=s[a+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=f,void(e[t+3]=_);if(d!==_||c!==u||l!==p||h!==f){let m=1-o,y=c*u+l*p+h*f+d*_,v=y>=0?1:-1,g=1-y*y;if(g>Number.EPSILON){let R=Math.sqrt(g),b=Math.atan2(R,y*v);m=Math.sin(m*b)/R,o=Math.sin(o*b)/R}let M=o*v;if(c=c*m+u*M,l=l*m+p*M,h=h*m+f*M,d=d*m+_*M,m===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[a],u=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*d+c*p-l*u,e[t+1]=c*f+h*u+l*d-o*p,e[t+2]=l*f+h*p+o*u-c*d,e[t+3]=h*f-o*d-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(s/2),u=c(n/2),p=c(i/2),f=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*p*f,this._y=l*p*d-u*h*f,this._z=l*h*f+u*p*d,this._w=l*h*d-u*p*f;break;case"YXZ":this._x=u*h*d+l*p*f,this._y=l*p*d-u*h*f,this._z=l*h*f-u*p*d,this._w=l*h*d+u*p*f;break;case"ZXY":this._x=u*h*d-l*p*f,this._y=l*p*d+u*h*f,this._z=l*h*f+u*p*d,this._w=l*h*d-u*p*f;break;case"ZYX":this._x=u*h*d-l*p*f,this._y=l*p*d+u*h*f,this._z=l*h*f-u*p*d,this._w=l*h*d+u*p*f;break;case"YZX":this._x=u*h*d+l*p*f,this._y=l*p*d+u*h*f,this._z=l*h*f-u*p*d,this._w=l*h*d-u*p*f;break;case"XZY":this._x=u*h*d-l*p*f,this._y=l*p*d-u*h*f,this._z=l*h*f+u*p*d,this._w=l*h*d+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-i)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(s-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ul.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ul.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-s*d,this.z=i+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gs.copy(this).projectOnVector(e),this.sub(Gs)}reflect(e){return this.sub(Gs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gs=new T,Ul=new Bt,Ft=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Rt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rt):Rt.fromBufferAttribute(s,a),Rt.applyMatrix4(e.matrixWorld),this.expandByPoint(Rt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ur.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(e.matrixWorld),this.union(ur)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rt),Rt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ni),dr.subVectors(this.max,Ni),Yn.subVectors(e.a,Ni),Zn.subVectors(e.b,Ni),Jn.subVectors(e.c,Ni),sn.subVectors(Zn,Yn),an.subVectors(Jn,Zn),Sn.subVectors(Yn,Jn);let t=[0,-sn.z,sn.y,0,-an.z,an.y,0,-Sn.z,Sn.y,sn.z,0,-sn.x,an.z,0,-an.x,Sn.z,0,-Sn.x,-sn.y,sn.x,0,-an.y,an.x,0,-Sn.y,Sn.x,0];return!!Ws(t,Yn,Zn,Jn,dr)&&(t=[1,0,0,0,1,0,0,0,1],!!Ws(t,Yn,Zn,Jn,dr)&&(pr.crossVectors(sn,an),t=[pr.x,pr.y,pr.z],Ws(t,Yn,Zn,Jn,dr)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Rt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Wt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wt)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Wt=[new T,new T,new T,new T,new T,new T,new T,new T],Rt=new T,ur=new Ft,Yn=new T,Zn=new T,Jn=new T,sn=new T,an=new T,Sn=new T,Ni=new T,dr=new T,pr=new T,En=new T;Fh=new Ft,Ui=new T,qs=new T,zt=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Fh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ui.subVectors(e,this.center);let t=Ui.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Ui,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ui.copy(e.center).add(qs)),this.expandByPoint(Ui.copy(e.center).sub(qs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},qt=new T,Xs=new T,mr=new T,on=new T,js=new T,fr=new T,Ys=new T,vi=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qt.copy(this.origin).addScaledVector(this.direction,t),qt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xs.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),on.copy(this.origin).sub(Xs);let s=.5*e.distanceTo(t),a=-this.direction.dot(mr),o=on.dot(this.direction),c=-on.dot(mr),l=on.lengthSq(),h=Math.abs(1-a*a),d,u,p,f;if(h>0)if(d=a*c-o,u=a*o-c,f=s*h,d>=0)if(u>=-f)if(u<=f){let _=1/h;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-f?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l):u<=f?(d=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Xs).addScaledVector(mr,u),p}intersectSphere(e,t){qt.subVectors(e.center,this.origin);let n=qt.dot(this.direction),i=qt.dot(qt)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>i?null:((o>n||n!=n)&&(n=o),(c<i||i!=i)&&(i=c),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,qt)!==null}intersectTriangle(e,t,n,i,s){js.subVectors(t,e),fr.subVectors(n,e),Ys.crossVectors(js,fr);let a,o=this.direction.dot(Ys);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}on.subVectors(this.origin,e);let c=a*this.direction.dot(fr.crossVectors(on,fr));if(c<0)return null;let l=a*this.direction.dot(js.cross(on));if(l<0||c+l>o)return null;let h=-a*on.dot(Ys);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},we=class r{constructor(e,t,n,i,s,a,o,c,l,h,d,u,p,f,_,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,d,u,p,f,_,m)}set(e,t,n,i,s,a,o,c,l,h,d,u,p,f,_,m){let y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=s,y[5]=a,y[9]=o,y[13]=c,y[2]=l,y[6]=h,y[10]=d,y[14]=u,y[3]=p,y[7]=f,y[11]=_,y[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Kn.setFromMatrixColumn(e,0).length(),s=1/Kn.setFromMatrixColumn(e,1).length(),a=1/Kn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,p=a*d,f=o*h,_=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+f*l,t[5]=u-_*l,t[9]=-o*c,t[2]=_-u*l,t[6]=f+p*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,p=c*d,f=l*h,_=l*d;t[0]=u+_*o,t[4]=f*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=_+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,p=c*d,f=l*h,_=l*d;t[0]=u-_*o,t[4]=-a*d,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,p=a*d,f=o*h,_=o*d;t[0]=c*h,t[4]=f*l-p,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=p*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,p=a*l,f=o*c,_=o*l;t[0]=c*h,t[4]=_-u*d,t[8]=f*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+f,t[10]=u-_*d}else if(e.order==="XZY"){let u=a*c,p=a*l,f=o*c,_=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=a*h,t[9]=p*d-f,t[2]=f*d-p,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zh,e,kh)}lookAt(e,t,n){let i=this.elements;return mt.subVectors(e,t),mt.lengthSq()===0&&(mt.z=1),mt.normalize(),ln.crossVectors(n,mt),ln.lengthSq()===0&&(Math.abs(n.z)===1?mt.x+=1e-4:mt.z+=1e-4,mt.normalize(),ln.crossVectors(n,mt)),ln.normalize(),gr.crossVectors(mt,ln),i[0]=ln.x,i[4]=gr.x,i[8]=mt.x,i[1]=ln.y,i[5]=gr.y,i[9]=mt.y,i[2]=ln.z,i[6]=gr.z,i[10]=mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],f=n[2],_=n[6],m=n[10],y=n[14],v=n[3],g=n[7],M=n[11],R=n[15],b=i[0],w=i[4],I=i[8],P=i[12],U=i[1],q=i[5],C=i[9],k=i[13],H=i[2],re=i[6],oe=i[10],W=i[14],Y=i[3],$=i[7],O=i[11],Z=i[15];return s[0]=a*b+o*U+c*H+l*Y,s[4]=a*w+o*q+c*re+l*$,s[8]=a*I+o*C+c*oe+l*O,s[12]=a*P+o*k+c*W+l*Z,s[1]=h*b+d*U+u*H+p*Y,s[5]=h*w+d*q+u*re+p*$,s[9]=h*I+d*C+u*oe+p*O,s[13]=h*P+d*k+u*W+p*Z,s[2]=f*b+_*U+m*H+y*Y,s[6]=f*w+_*q+m*re+y*$,s[10]=f*I+_*C+m*oe+y*O,s[14]=f*P+_*k+m*W+y*Z,s[3]=v*b+g*U+M*H+R*Y,s[7]=v*w+g*q+M*re+R*$,s[11]=v*I+g*C+M*oe+R*O,s[15]=v*P+g*k+M*W+R*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+s*c*d-i*l*d-s*o*u+n*l*u+i*o*p-n*c*p)+e[7]*(+t*c*p-t*l*u+s*a*u-i*a*p+i*l*h-s*c*h)+e[11]*(+t*l*d-t*o*p-s*a*d+n*a*p+s*o*h-n*l*h)+e[15]*(-i*o*h-t*c*d+t*o*u+i*a*d-n*a*u+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],p=e[11],f=e[12],_=e[13],m=e[14],y=e[15],v=d*m*l-_*u*l+_*c*p-o*m*p-d*c*y+o*u*y,g=f*u*l-h*m*l-f*c*p+a*m*p+h*c*y-a*u*y,M=h*_*l-f*d*l+f*o*p-a*_*p-h*o*y+a*d*y,R=f*d*c-h*_*c-f*o*u+a*_*u+h*o*m-a*d*m,b=t*v+n*g+i*M+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/b;return e[0]=v*w,e[1]=(_*u*s-d*m*s-_*i*p+n*m*p+d*i*y-n*u*y)*w,e[2]=(o*m*s-_*c*s+_*i*l-n*m*l-o*i*y+n*c*y)*w,e[3]=(d*c*s-o*u*s-d*i*l+n*u*l+o*i*p-n*c*p)*w,e[4]=g*w,e[5]=(h*m*s-f*u*s+f*i*p-t*m*p-h*i*y+t*u*y)*w,e[6]=(f*c*s-a*m*s-f*i*l+t*m*l+a*i*y-t*c*y)*w,e[7]=(a*u*s-h*c*s+h*i*l-t*u*l-a*i*p+t*c*p)*w,e[8]=M*w,e[9]=(f*d*s-h*_*s-f*n*p+t*_*p+h*n*y-t*d*y)*w,e[10]=(a*_*s-f*o*s+f*n*l-t*_*l-a*n*y+t*o*y)*w,e[11]=(h*o*s-a*d*s-h*n*l+t*d*l+a*n*p-t*o*p)*w,e[12]=R*w,e[13]=(h*_*i-f*d*i+f*n*u-t*_*u-h*n*m+t*d*m)*w,e[14]=(f*o*i-a*_*i-f*n*c+t*_*c+a*n*m-t*o*m)*w,e[15]=(a*d*i-h*o*i+h*n*c-t*d*c-a*n*u+t*o*u)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,u=s*l,p=s*h,f=s*d,_=a*h,m=a*d,y=o*d,v=c*l,g=c*h,M=c*d,R=n.x,b=n.y,w=n.z;return i[0]=(1-(_+y))*R,i[1]=(p+M)*R,i[2]=(f-g)*R,i[3]=0,i[4]=(p-M)*b,i[5]=(1-(u+y))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(f+g)*w,i[9]=(m-v)*w,i[10]=(1-(u+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Kn.set(i[0],i[1],i[2]).length(),a=Kn.set(i[4],i[5],i[6]).length(),o=Kn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ct.copy(this);let c=1/s,l=1/a,h=1/o;return Ct.elements[0]*=c,Ct.elements[1]*=c,Ct.elements[2]*=c,Ct.elements[4]*=l,Ct.elements[5]*=l,Ct.elements[6]*=l,Ct.elements[8]*=h,Ct.elements[9]*=h,Ct.elements[10]*=h,t.setFromRotationMatrix(Ct),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let c=this.elements,l=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),p,f;if(o===gi)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==qr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=f,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let c=this.elements,l=1/(t-e),h=1/(n-i),d=1/(a-s),u=(t+e)*l,p=(n+i)*h,f,_;if(o===gi)f=(a+s)*d,_=-2*d;else{if(o!==qr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*d,_=-1*d}return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-f,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Kn=new T,Ct=new we,zh=new T(0,0,0),kh=new T(1,1,1),ln=new T,gr=new T,mt=new T,Dl=new we,Ol=new Bt,Kr=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kr.DEFAULT_ORDER="XYZ";$r=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Hh=0,Bl=new T,$n=new Bt,Xt=new we,vr=new T,Di=new T,Vh=new T,Gh=new Bt,Fl=new T(1,0,0),zl=new T(0,1,0),kl=new T(0,0,1),Wh={type:"added"},qh={type:"removed"},dt=class r extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new T,t=new Kr,n=new Bt,i=new T(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new we},normalMatrix:{value:new Re}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.multiply($n),this}rotateOnWorldAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.premultiply($n),this}rotateX(e){return this.rotateOnAxis(Fl,e)}rotateY(e){return this.rotateOnAxis(zl,e)}rotateZ(e){return this.rotateOnAxis(kl,e)}translateOnAxis(e,t){return Bl.copy(e).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fl,e)}translateY(e){return this.translateOnAxis(zl,e)}translateZ(e){return this.translateOnAxis(kl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vr.copy(e):vr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xt.lookAt(Di,vr,this.up):Xt.lookAt(vr,Di,this.up),this.quaternion.setFromRotationMatrix(Xt),i&&(Xt.extractRotation(i.matrixWorld),$n.setFromRotationMatrix(Xt),this.quaternion.premultiply($n.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Wh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qh)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,e,Vh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,Gh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];s.matrixWorldAutoUpdate!==!0&&e!==!0||s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};dt.DEFAULT_UP=new T(0,1,0),dt.DEFAULT_MATRIX_AUTO_UPDATE=!0,dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Pt=new T,jt=new T,Zs=new T,Yt=new T,Qn=new T,ei=new T,Hl=new T,Js=new T,Ks=new T,$s=new T,_r=!1,Ln=class r{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pt.subVectors(e,t),i.cross(Pt);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Pt.subVectors(i,t),jt.subVectors(n,t),Zs.subVectors(e,t);let a=Pt.dot(Pt),o=Pt.dot(jt),c=Pt.dot(Zs),l=jt.dot(jt),h=jt.dot(Zs),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,p=(l*c-o*h)*u,f=(a*h-o*c)*u;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yt)!==null&&Yt.x>=0&&Yt.y>=0&&Yt.x+Yt.y<=1}static getUV(e,t,n,i,s,a,o,c){return _r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_r=!0),this.getInterpolation(e,t,n,i,s,a,o,c)}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Yt)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Yt.x),c.addScaledVector(a,Yt.y),c.addScaledVector(o,Yt.z),c)}static isFrontFacing(e,t,n,i){return Pt.subVectors(n,t),jt.subVectors(e,t),Pt.cross(jt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pt.subVectors(this.c,this.b),jt.subVectors(this.a,this.b),.5*Pt.cross(jt).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return _r===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_r=!0),r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Qn.subVectors(i,n),ei.subVectors(s,n),Js.subVectors(e,n);let c=Qn.dot(Js),l=ei.dot(Js);if(c<=0&&l<=0)return t.copy(n);Ks.subVectors(e,i);let h=Qn.dot(Ks),d=ei.dot(Ks);if(h>=0&&d<=h)return t.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Qn,a);$s.subVectors(e,s);let p=Qn.dot($s),f=ei.dot($s);if(f>=0&&p<=f)return t.copy(s);let _=p*l-c*f;if(_<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(ei,o);let m=h*f-p*d;if(m<=0&&d-h>=0&&p-f>=0)return Hl.subVectors(s,i),o=(d-h)/(d-h+(p-f)),t.copy(i).addScaledVector(Hl,o);let y=1/(m+_+u);return a=_*y,o=u*y,t.copy(n).addScaledVector(Qn,a).addScaledVector(ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},yr={h:0,s:0,l:0};Se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Be.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Be.workingColorSpace){return this.r=e,this.g=t,this.b=n,Be.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Be.workingColorSpace){if(e=Sa(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Qs(a,s,e+1/3),this.g=Qs(a,s,e),this.b=Qs(a,s,e-1/3)}return Be.toWorkingColorSpace(this,i),this}setStyle(e,t=je){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=je){let n=Dc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=je){return Be.fromWorkingColorSpace(it.copy(this),e),65536*Math.round(Ye(255*it.r,0,255))+256*Math.round(Ye(255*it.g,0,255))+Math.round(Ye(255*it.b,0,255))}getHexString(e=je){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Be.workingColorSpace){Be.fromWorkingColorSpace(it.copy(this),t);let n=it.r,i=it.g,s=it.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Be.workingColorSpace){return Be.fromWorkingColorSpace(it.copy(this),t),e.r=it.r,e.g=it.g,e.b=it.b,e}getStyle(e=je){Be.fromWorkingColorSpace(it.copy(this),e);let t=it.r,n=it.g,i=it.b;return e!==je?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(cn),this.setHSL(cn.h+e,cn.s+t,cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(yr);let n=zi(cn.h,yr.h,t),i=zi(cn.s,yr.s,t),s=zi(cn.l,yr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},it=new Se;Se.NAMES=Dc;Xh=0,On=class extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=1,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=va,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ga&&(n.blendSrc=this.blendSrc),this.blendDst!==va&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},gn=class extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},dp=jh();We=new T,xr=new ie,bt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.applyMatrix3(e),this.setXYZ(t,We.x,We.y,We.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.applyMatrix4(e),this.setXYZ(t,We.x,We.y,We.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.applyNormalMatrix(e),this.setXYZ(t,We.x,We.y,We.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)We.fromBufferAttribute(this,t),We.transformDirection(e),this.setXYZ(t,We.x,We.y,We.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rl&&(e.usage=this.usage),e}},Qr=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},es=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},be=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Yh=0,xt=new we,ea=new dt,ti=new T,ft=new Ft,Oi=new Ft,$e=new T,qe=class r extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uc(e)?es:Qr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Re().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xt.makeRotationFromQuaternion(e),this.applyMatrix4(xt),this}rotateX(e){return xt.makeRotationX(e),this.applyMatrix4(xt),this}rotateY(e){return xt.makeRotationY(e),this.applyMatrix4(xt),this}rotateZ(e){return xt.makeRotationZ(e),this.applyMatrix4(xt),this}translate(e,t,n){return xt.makeTranslation(e,t,n),this.applyMatrix4(xt),this}scale(e,t,n){return xt.makeScale(e,t,n),this.applyMatrix4(xt),this}lookAt(e){return ea.lookAt(e),ea.updateMatrix(),this.applyMatrix4(ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new be(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];ft.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,ft.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,ft.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(ft.min),this.boundingBox.expandByPoint(ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new T,1/0);if(e){let n=this.boundingSphere.center;if(ft.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Oi.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(ft.min,Oi.min),ft.expandByPoint($e),$e.addVectors(ft.max,Oi.max),ft.expandByPoint($e)):(ft.expandByPoint(Oi.min),ft.expandByPoint(Oi.max))}ft.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)$e.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared($e));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)$e.fromBufferAttribute(o,l),c&&(ti.fromBufferAttribute(e,l),$e.add(ti)),i=Math.max(i,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let U=0;U<o;U++)l[U]=new T,h[U]=new T;let d=new T,u=new T,p=new T,f=new ie,_=new ie,m=new ie,y=new T,v=new T;function g(U,q,C){d.fromArray(i,3*U),u.fromArray(i,3*q),p.fromArray(i,3*C),f.fromArray(a,2*U),_.fromArray(a,2*q),m.fromArray(a,2*C),u.sub(d),p.sub(d),_.sub(f),m.sub(f);let k=1/(_.x*m.y-m.x*_.y);isFinite(k)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(k),v.copy(p).multiplyScalar(_.x).addScaledVector(u,-m.x).multiplyScalar(k),l[U].add(y),l[q].add(y),l[C].add(y),h[U].add(v),h[q].add(v),h[C].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let U=0,q=M.length;U<q;++U){let C=M[U],k=C.start;for(let H=k,re=k+C.count;H<re;H+=3)g(n[H+0],n[H+1],n[H+2])}let R=new T,b=new T,w=new T,I=new T;function P(U){w.fromArray(s,3*U),I.copy(w);let q=l[U];R.copy(q),R.sub(w.multiplyScalar(w.dot(q))).normalize(),b.crossVectors(I,q);let C=b.dot(h[U])<0?-1:1;c[4*U]=R.x,c[4*U+1]=R.y,c[4*U+2]=R.z,c[4*U+3]=C}for(let U=0,q=M.length;U<q;++U){let C=M[U],k=C.start;for(let H=k,re=k+C.count;H<re;H+=3)P(n[H+0]),P(n[H+1]),P(n[H+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let i=new T,s=new T,a=new T,o=new T,c=new T,l=new T,h=new T,d=new T;if(e)for(let u=0,p=e.count;u<p;u+=3){let f=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$e.fromBufferAttribute(e,t),$e.normalize(),e.setXYZ(t,$e.x,$e.y,$e.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),p=0,f=0;for(let _=0,m=c.length;_<m;_++){p=o.isInterleavedBufferAttribute?c[_]*o.data.stride+o.offset:c[_]*h;for(let y=0;y<h;y++)u[f++]=l[p++]}return new bt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=e(i[o],n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){let u=e(l[h],n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],d=s[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vl=new we,Tn=new vi,Mr=new zt,Gl=new T,ni=new T,ii=new T,ri=new T,ta=new T,br=new T,Sr=new ie,Er=new ie,Tr=new ie,Wl=new T,ql=new T,Xl=new T,wr=new T,Ar=new T,ye=class extends dt{constructor(e=new qe,t=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){br.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],d=s[c];h!==0&&(ta.fromBufferAttribute(d,e),a?br.addScaledVector(ta,h):br.addScaledVector(ta.sub(t),h))}t.add(br)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),Tn.copy(e.ray).recast(e.near),Mr.containsPoint(Tn.origin)===!1&&(Tn.intersectSphere(Mr,Gl)===null||Tn.origin.distanceToSquared(Gl)>(e.far-e.near)**2))return;Vl.copy(s).invert(),Tn.copy(e.ray).applyMatrix4(Vl),n.boundingBox!==null&&Tn.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Tn)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,_=u.length;f<_;f++){let m=u[f],y=a[m.materialIndex];for(let v=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));v<g;v+=3)i=Rr(this,y,e,n,l,h,d,o.getX(v),o.getX(v+1),o.getX(v+2)),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);f<_;f+=3)i=Rr(this,a,e,n,l,h,d,o.getX(f),o.getX(f+1),o.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(c!==void 0)if(Array.isArray(a))for(let f=0,_=u.length;f<_;f++){let m=u[f],y=a[m.materialIndex];for(let v=Math.max(m.start,p.start),g=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));v<g;v+=3)i=Rr(this,y,e,n,l,h,d,v,v+1,v+2),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);f<_;f+=3)i=Rr(this,a,e,n,l,h,d,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};St=class r extends qe{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,p=0;function f(_,m,y,v,g,M,R,b,w,I,P){let U=M/w,q=R/I,C=M/2,k=R/2,H=b/2,re=w+1,oe=I+1,W=0,Y=0,$=new T;for(let O=0;O<oe;O++){let Z=O*q-k;for(let ce=0;ce<re;ce++){let E=ce*U-C;$[_]=E*v,$[m]=Z*g,$[y]=H,l.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[y]=b>0?1:-1,h.push($.x,$.y,$.z),d.push(ce/w),d.push(1-O/I),W+=1}}for(let O=0;O<I;O++)for(let Z=0;Z<w;Z++){let ce=u+Z+re*O,E=u+Z+re*(O+1),S=u+(Z+1)+re*(O+1),B=u+(Z+1)+re*O;c.push(ce,E,B),c.push(E,S,B),Y+=6}o.addGroup(p,Y,P),p+=Y,u+=W}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Zh={clone:_i,merge:ct},en=class extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ji=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rt=class extends ji{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Xi*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*hi*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Xi*Math.atan(Math.tan(.5*hi*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*hi*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},si=-90,Aa=class extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new rt(si,1,e,t);i.layers=this.layers,this.add(i);let s=new rt(si,1,e,t);s.layers=this.layers,this.add(s);let a=new rt(si,1,e,t);a.layers=this.layers,this.add(a);let o=new rt(si,1,e,t);o.layers=this.layers,this.add(o);let c=new rt(si,1,e,t);c.layers=this.layers,this.add(c);let l=new rt(si,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==qr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},ts=class extends Mt{constructor(e,t,n,i,s,a,o,c,l,h){super(e=e!==void 0?e:[],t=t!==void 0?t:pi,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ra=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ki("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Dn?je:Ot),this.texture=new ts(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new St(5,5,5),s=new en({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:st,blending:0});s.uniforms.tEquirect.value=t;let a=new ye(i,s),o=t.minFilter;return t.minFilter===zr&&(t.minFilter=Lt),new Aa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},na=new T,Jh=new T,Kh=new Re,Jt=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=na.subVectors(n,t).cross(Jh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(na),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Kh.getNormalMatrix(e),i=this.coplanarPoint(na).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},wn=new zt,Cr=new T,yi=class{constructor(e=new Jt,t=new Jt,n=new Jt,i=new Jt,s=new Jt,a=new Jt){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],p=i[8],f=i[9],_=i[10],m=i[11],y=i[12],v=i[13],g=i[14],M=i[15];if(n[0].setComponents(c-s,u-l,m-p,M-y).normalize(),n[1].setComponents(c+s,u+l,m+p,M+y).normalize(),n[2].setComponents(c+a,u+h,m+f,M+v).normalize(),n[3].setComponents(c-a,u-h,m-f,M-v).normalize(),n[4].setComponents(c-o,u-d,m-_,M-g).normalize(),t===gi)n[5].setComponents(c+o,u+d,m+_,M+g).normalize();else{if(t!==qr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,d,_,g).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wn)}intersectsSprite(e){return wn.center.set(0,0,0),wn.radius=.7071067811865476,wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Cr.x=i.normal.x>0?e.max.x:e.min.x,Cr.y=i.normal.y>0?e.max.y:e.min.y,Cr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};xi=class r extends qe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=e/o,u=t/c,p=[],f=[],_=[],m=[];for(let y=0;y<h;y++){let v=y*u-a;for(let g=0;g<l;g++){let M=g*d-s;f.push(M,-v,0),_.push(0,0,1),m.push(g/o),m.push(1-y/c)}}for(let y=0;y<c;y++)for(let v=0;v<o;v++){let g=v+l*y,M=v+l*(y+1),R=v+1+l*(y+1),b=v+1+l*y;p.push(g,M,b),p.push(M,R,b)}this.setIndex(p),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Ee={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},le={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Re}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Re},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0},uvTransform:{value:new Re}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Re},alphaMap:{value:null},alphaMapTransform:{value:new Re},alphaTest:{value:0}}},Ut={basic:{uniforms:ct([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:ct([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:ct([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:ct([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:ct([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:ct([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:ct([le.points,le.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:ct([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:ct([le.common,le.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:ct([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:ct([le.sprite,le.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:ct([le.common,le.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:ct([le.lights,le.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Ut.physical={uniforms:ct([Ut.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Re},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Re},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Re},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Re},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Re},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Re},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Re}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};Pr={r:0,b:0,g:0};ns=class extends ji{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},jl=[.125,.215,.35,.446,.526,.582],Bi=20,ia=new ns,Yl=new Se,ra=null,sa=0,aa=0,An=(1+Math.sqrt(5))/2,ai=1/An,Zl=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,An,ai),new T(0,An,-ai),new T(ai,0,An),new T(-ai,0,An),new T(An,ai,0),new T(-An,ai,0)],Mi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ra=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ra,sa,aa),e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ra=this._renderer.getRenderTarget(),sa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:qi,format:Dt,colorSpace:$t,depthBuffer:!1},i=Jl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],c=[],l=[],h=a,d=a-4+1+jl.length;for(let u=0;u<d;u++){let p=Math.pow(2,h);c.push(p);let f=1/p;u>a-4?f=jl[u-a+4-1]:u===0&&(f=0),l.push(f);let _=1/(p-2),m=-_,y=1+_,v=[m,m,y,m,y,y,m,m,y,y,m,y],g=6,M=6,R=3,b=2,w=1,I=new Float32Array(R*M*g),P=new Float32Array(b*M*g),U=new Float32Array(w*M*g);for(let C=0;C<g;C++){let k=C%3*2/3-1,H=C>2?0:-1,re=[k,H,0,k+2/3,H,0,k+2/3,H+1,0,k,H,0,k+2/3,H+1,0,k,H+1,0];I.set(re,R*M*C),P.set(v,b*M*C);let oe=[C,C,C,C,C,C];U.set(oe,w*M*C)}let q=new qe;q.setAttribute("position",new bt(I,R)),q.setAttribute("uv",new bt(P,b)),q.setAttribute("faceIndex",new bt(U,w)),o.push(q),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}}(s)),this._blurMaterial=function(a,o,c){let l=new Float32Array(Bi),h=new T(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Mo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(s,e,t)}return i}_compileMaterial(e){let t=new ye(this._lodPlanes[0],e);this._renderer.compile(t,ia)}_sceneToCubeUV(e,t,n,i){let s=new rt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,h=c.toneMapping;c.getClearColor(Yl),c.toneMapping=dn,c.autoClear=!1;let d=new gn({name:"PMREM.Background",side:st,depthWrite:!1,depthTest:!1}),u=new ye(new St,d),p=!1,f=e.background;f?f.isColor&&(d.color.copy(f),e.background=null,p=!0):(d.color.copy(Yl),p=!0);for(let _=0;_<6;_++){let m=_%3;m===0?(s.up.set(0,a[_],0),s.lookAt(o[_],0,0)):m===1?(s.up.set(0,0,a[_]),s.lookAt(0,o[_],0)):(s.up.set(0,a[_],0),s.lookAt(0,0,o[_]));let y=this._cubeSize;Lr(i,m*y,_>2?y:0,y,y),c.setRenderTarget(i),p&&c.render(u,s),c.render(e,s)}u.geometry.dispose(),u.material.dispose(),c.toneMapping=h,c.autoClear=l,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===pi||e.mapping===mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new ye(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Lr(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,ia)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Zl[(i-1)%Zl.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new ye(this._lodPlanes[i],l),d=l.uniforms,u=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*u):2*Math.PI/39,f=s/p,_=isFinite(s)?1+Math.floor(3*f):Bi;_>Bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let m=[],y=0;for(let M=0;M<Bi;++M){let R=M/f,b=Math.exp(-R*R/2);m.push(b),M===0?y+=b:M<_&&(y+=2*b)}for(let M=0;M<m.length;M++)m[M]=m[M]/y;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-n;let g=this._sizeLods[i];Lr(t,3*g*(i>v-4?i-v+4:0),4*(this._cubeSize-g),3*g,2*g),c.setRenderTarget(t),c.render(h,ia)}};is=class extends Mt{constructor(e,t,n,i,s,a,o,c,l,h){if((h=h!==void 0?h:Un)!==Un&&h!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Un&&(n=hn),n===void 0&&h===fi&&(n=Nn),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ht,this.minFilter=c!==void 0?c:ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Fc=new Mt,zc=new is(1,1);zc.compareFunction=515;kc=new Jr,Hc=new wa,Vc=new ts,Ql=[],ec=[],tc=new Float32Array(16),nc=new Float32Array(9),ic=new Float32Array(4);Ca=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=function(i){switch(i){case 5126:return mu;case 35664:return fu;case 35665:return gu;case 35666:return vu;case 35674:return _u;case 35675:return yu;case 35676:return xu;case 5124:case 35670:return Mu;case 35667:case 35671:return bu;case 35668:case 35672:return Su;case 35669:case 35673:return Eu;case 5125:return Tu;case 36294:return wu;case 36295:return Au;case 36296:return Ru;case 35678:case 36198:case 36298:case 36306:case 35682:return Cu;case 35679:case 36299:case 36307:return Pu;case 35680:case 36300:case 36308:case 36293:return Lu;case 36289:case 36303:case 36311:case 36292:return Iu}}(t.type)}},Pa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(i){switch(i){case 5126:return Nu;case 35664:return Uu;case 35665:return Du;case 35666:return Ou;case 35674:return Bu;case 35675:return Fu;case 35676:return zu;case 5124:case 35670:return ku;case 35667:case 35671:return Hu;case 35668:case 35672:return Vu;case 35669:case 35673:return Gu;case 5125:return Wu;case 36294:return qu;case 36295:return Xu;case 36296:return ju;case 35678:case 36198:case 36298:case 36306:case 35682:return Yu;case 35679:case 36299:case 36307:return Zu;case 35680:case 36300:case 36308:case 36293:return Ju;case 36289:case 36303:case 36311:case 36292:return Ku}}(t.type)}},La=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},oa=/(\w+)(\])?(\[|\.)?/g;di=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);$u(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};Qu=37297,ed=0;id=/^[ \t]*#include +<([\w\d./]+)>/gm;rd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);ad=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;cd=0,Na=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ua(e),t.set(e,n)),n}},Ua=class{constructor(e){this.id=cd++,this.code=e,this.usedTimes=0}};fd=0;Da=class extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oa=class extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Ba=class extends rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},gt=class extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sd={type:"move"},Hi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),y=this._getHandJoint(l,_);m!==null&&(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=m.radius),y.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,f=.005;l.inputState.pinching&&u>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sd)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fa=class extends fn{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,f=null,_=t.getContextAttributes(),m=null,y=null,v=[],g=[],M=new ie,R=null,b=new rt;b.layers.enable(1),b.viewport=new Fe;let w=new rt;w.layers.enable(2),w.viewport=new Fe;let I=[b,w],P=new Ba;P.layers.enable(1),P.layers.enable(2);let U=null,q=null;function C(O){let Z=g.indexOf(O.inputSource);if(Z===-1)return;let ce=v[Z];ce!==void 0&&(ce.update(O.inputSource,O.frame,l||a),ce.dispatchEvent({type:O.type,data:O.inputSource}))}function k(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",H);for(let O=0;O<v.length;O++){let Z=g[O];Z!==null&&(g[O]=null,v[O].disconnect(Z))}U=null,q=null,e.setRenderTarget(m),p=null,u=null,d=null,i=null,y=null,$.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}function H(O){for(let Z=0;Z<O.removed.length;Z++){let ce=O.removed[Z],E=g.indexOf(ce);E>=0&&(g[E]=null,v[E].disconnect(ce))}for(let Z=0;Z<O.added.length;Z++){let ce=O.added[Z],E=g.indexOf(ce);if(E===-1){for(let B=0;B<v.length;B++){if(B>=g.length){g.push(ce),E=B;break}if(g[B]===null){g[B]=ce,E=B;break}}if(E===-1)break}let S=v[E];S&&S.connect(ce)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let Z=v[O];return Z===void 0&&(Z=new Hi,v[O]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(O){let Z=v[O];return Z===void 0&&(Z=new Hi,v[O]=Z),Z.getGripSpace()},this.getHand=function(O){let Z=v[O];return Z===void 0&&(Z=new Hi,v[O]=Z),Z.getHandSpace()},this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",k),i.addEventListener("inputsourceschange",H),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Z={antialias:i.renderState.layers!==void 0||_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Qt(p.framebufferWidth,p.framebufferHeight,{format:Dt,type:In,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,ce=null,E=null;_.depth&&(E=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?fi:Un,ce=_.stencil?Nn:hn);let S={colorFormat:t.RGBA8,depthFormat:E,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(S),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Qt(u.textureWidth,u.textureHeight,{format:Dt,type:In,depthTexture:new is(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0}),e.properties.get(y).__ignoreDepthValues=u.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),$.setContext(i),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};let re=new T,oe=new T;function W(O,Z){Z===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(Z.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;P.near=w.near=b.near=O.near,P.far=w.far=b.far=O.far,U===P.near&&q===P.far||(i.updateRenderState({depthNear:P.near,depthFar:P.far}),U=P.near,q=P.far);let Z=O.parent,ce=P.cameras;W(P,Z);for(let E=0;E<ce.length;E++)W(ce[E],Z);ce.length===2?function(E,S,B){re.setFromMatrixPosition(S.matrixWorld),oe.setFromMatrixPosition(B.matrixWorld);let J=re.distanceTo(oe),L=S.projectionMatrix.elements,j=B.projectionMatrix.elements,N=L[14]/(L[10]-1),D=L[14]/(L[10]+1),F=(L[9]+1)/L[5],te=(L[9]-1)/L[5],Q=(L[8]-1)/L[0],x=(j[8]+1)/j[0],ne=N*Q,z=N*x,V=J/(-Q+x),se=V*-Q;S.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(se),E.translateZ(V),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert();let he=N+V,de=D+V,pe=ne-se,Me=z+(J-se),me=F*D/de*he,fe=te*D/de*he;E.projectionMatrix.makePerspective(pe,Me,me,fe,he,de),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}(P,b,w):P.projectionMatrix.copy(b.projectionMatrix),function(E,S,B){B===null?E.matrix.copy(S.matrixWorld):(E.matrix.copy(B.matrixWorld),E.matrix.invert(),E.matrix.multiply(S.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(S.projectionMatrix),E.projectionMatrixInverse.copy(S.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=2*Xi*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}(O,P,Z)},this.getCamera=function(){return P},this.getFoveation=function(){if(u!==null||p!==null)return c},this.setFoveation=function(O){c=O,u!==null&&(u.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)};let Y=null,$=new Bc;$.setAnimationLoop(function(O,Z){if(h=Z.getViewerPose(l||a),f=Z,h!==null){let ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let E=!1;ce.length!==P.cameras.length&&(P.cameras.length=0,E=!0);for(let S=0;S<ce.length;S++){let B=ce[S],J=null;if(p!==null)J=p.getViewport(B);else{let j=d.getViewSubImage(u,B);J=j.viewport,S===0&&(e.setRenderTargetTextures(y,j.colorTexture,u.ignoreDepthValues?void 0:j.depthStencilTexture),e.setRenderTarget(y))}let L=I[S];L===void 0&&(L=new rt,L.layers.enable(S),L.viewport=new Fe,I[S]=L),L.matrix.fromArray(B.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(B.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(J.x,J.y,J.width,J.height),S===0&&(P.matrix.copy(L.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),E===!0&&P.cameras.push(L)}}for(let ce=0;ce<v.length;ce++){let E=g[ce],S=v[ce];E!==null&&S!==void 0&&S.update(E,Z,l||a)}Y&&Y(O,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),f=null}),this.setAnimationLoop=function(O){Y=O},this.dispose=function(){}}};Yi=class{constructor(e={}){let{canvas:t=Uh(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e,u;this.isWebGLRenderer=!0,u=n!==null?n.getContextAttributes().alpha:a;let p=new Uint32Array(4),f=new Int32Array(4),_=null,m=null,y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this._useLegacyLights=!1,this.toneMapping=dn,this.toneMappingExposure=1;let g=this,M=!1,R=0,b=0,w=null,I=-1,P=null,U=new Fe,q=new Fe,C=null,k=new Se(0),H=0,re=t.width,oe=t.height,W=1,Y=null,$=null,O=new Fe(0,0,re,oe),Z=new Fe(0,0,re,oe),ce=!1,E=new yi,S=!1,B=!1,J=null,L=new we,j=new ie,N=new T,D={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function F(){return w===null?W:1}let te,Q,x,ne,z,V,se,he,de,pe,Me,me,fe,Te,Ke,ve,Ue,Pe,nr,Gn,ir,vt,pt,Wn,X=n;function rr(A,G){for(let K=0;K<A.length;K++){let ae=A[K],ee=t.getContext(ae,G);if(ee!==null)return ee}return null}try{let A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fa}`),t.addEventListener("webglcontextlost",Oo,!1),t.addEventListener("webglcontextrestored",Bo,!1),t.addEventListener("webglcontextcreationerror",Fo,!1),X===null){let G=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&G.shift(),X=rr(G,A),X===null)throw rr(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}function Ci(){te=new au(X),Q=new nu(X,te,e),te.init(Q),vt=new bd(X,te,Q),x=new xd(X,te,Q),ne=new cu(X),z=new ud,V=new Md(X,te,x,z,Q,vt,ne),se=new ru(g),he=new su(g),de=new $h(X,Q),pt=new eu(X,te,de,Q),pe=new ou(X,de,ne,pt),Me=new pu(X,pe,de,ne),nr=new du(X,Q,V),ve=new iu(z),me=new hd(g,se,he,te,Q,pt,ve),fe=new Ed(g,z),Te=new pd,Ke=new _d(te,Q),Pe=new Qh(g,se,he,x,Me,u,c),Ue=new yd(g,Me,Q),Wn=new Td(X,ne,Q,x),Gn=new tu(X,te,ne,Q),ir=new lu(X,te,ne,Q),ne.programs=me.programs,g.capabilities=Q,g.extensions=te,g.properties=z,g.renderLists=Te,g.shadowMap=Ue,g.state=x,g.info=ne}Ci();let et=new Fa(g,X);function Oo(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Bo(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let A=ne.autoReset,G=Ue.enabled,K=Ue.autoUpdate,ae=Ue.needsUpdate,ee=Ue.type;Ci(),ne.autoReset=A,Ue.enabled=G,Ue.autoUpdate=K,Ue.needsUpdate=ae,Ue.type=ee}function Fo(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function zo(A){let G=A.target;G.removeEventListener("dispose",zo),function(K){(function(ae){let ee=z.get(ae).programs;ee!==void 0&&(ee.forEach(function(ue){me.releaseProgram(ue)}),ae.isShaderMaterial&&me.releaseShaderCache(ae))})(K),z.remove(K)}(G)}function ko(A,G,K){A.transparent===!0&&A.side===2&&A.forceSinglePass===!1?(A.side=st,A.needsUpdate=!0,ar(A,G,K),A.side=mn,A.needsUpdate=!0,ar(A,G,K),A.side=2):ar(A,G,K)}this.xr=et,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let A=te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(re,oe,!1))},this.getSize=function(A){return A.set(re,oe)},this.setSize=function(A,G,K=!0){et.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(re=A,oe=G,t.width=Math.floor(A*W),t.height=Math.floor(G*W),K===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G))},this.getDrawingBufferSize=function(A){return A.set(re*W,oe*W).floor()},this.setDrawingBufferSize=function(A,G,K){re=A,oe=G,W=K,t.width=Math.floor(A*K),t.height=Math.floor(G*K),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,G,K,ae){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,G,K,ae),x.viewport(U.copy(O).multiplyScalar(W).floor())},this.getScissor=function(A){return A.copy(Z)},this.setScissor=function(A,G,K,ae){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,G,K,ae),x.scissor(q.copy(Z).multiplyScalar(W).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(A){x.setScissorTest(ce=A)},this.setOpaqueSort=function(A){Y=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(A=!0,G=!0,K=!0){let ae=0;if(A){let ee=!1;if(w!==null){let ue=w.texture.format;ee=ue===Lc||ue===Pc||ue===Cc}if(ee){let ue=w.texture.type,_e=ue===In||ue===hn||ue===yo||ue===Nn||ue===Ac||ue===Rc,xe=Pe.getClearColor(),Ae=Pe.getClearAlpha(),Ce=xe.r,Le=xe.g,Ie=xe.b;_e?(p[0]=Ce,p[1]=Le,p[2]=Ie,p[3]=Ae,X.clearBufferuiv(X.COLOR,0,p)):(f[0]=Ce,f[1]=Le,f[2]=Ie,f[3]=Ae,X.clearBufferiv(X.COLOR,0,f))}else ae|=X.COLOR_BUFFER_BIT}G&&(ae|=X.DEPTH_BUFFER_BIT),K&&(ae|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oo,!1),t.removeEventListener("webglcontextrestored",Bo,!1),t.removeEventListener("webglcontextcreationerror",Fo,!1),Te.dispose(),Ke.dispose(),z.dispose(),se.dispose(),he.dispose(),Me.dispose(),pt.dispose(),Wn.dispose(),me.dispose(),et.dispose(),et.removeEventListener("sessionstart",Ho),et.removeEventListener("sessionend",Vo),J&&(J.dispose(),J=null),yn.stop()},this.renderBufferDirect=function(A,G,K,ae,ee,ue){G===null&&(G=D);let _e=ee.isMesh&&ee.matrixWorld.determinant()<0,xe=function(Xe,_t,ut,Ne,De){_t.isScene!==!0&&(_t=D),V.resetTextureUnits();let Pi=_t.fog,ws=Ne.isMeshStandardMaterial?_t.environment:null,hh=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:$t,or=(Ne.isMeshStandardMaterial?he:se).get(Ne.envMap||ws),uh=Ne.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,dh=!!ut.attributes.tangent&&(!!Ne.normalMap||Ne.anisotropy>0),ph=!!ut.morphAttributes.position,mh=!!ut.morphAttributes.normal,fh=!!ut.morphAttributes.color,Yo=dn;Ne.toneMapped&&(w!==null&&w.isXRRenderTarget!==!0||(Yo=g.toneMapping));let Zo=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,gh=Zo!==void 0?Zo.length:0,Oe=z.get(Ne),vh=m.state.lights;if(S===!0&&(B===!0||Xe!==P)){let yt=Xe===P&&Ne.id===I;ve.setState(Ne,Xe,yt)}let wt=!1;Ne.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==vh.state.version||Oe.outputColorSpace!==hh||De.isBatchedMesh&&Oe.batching===!1?wt=!0:De.isBatchedMesh||Oe.batching!==!0?De.isInstancedMesh&&Oe.instancing===!1?wt=!0:De.isInstancedMesh||Oe.instancing!==!0?De.isSkinnedMesh&&Oe.skinning===!1?wt=!0:De.isSkinnedMesh||Oe.skinning!==!0?De.isInstancedMesh&&Oe.instancingColor===!0&&De.instanceColor===null||De.isInstancedMesh&&Oe.instancingColor===!1&&De.instanceColor!==null||Oe.envMap!==or||Ne.fog===!0&&Oe.fog!==Pi?wt=!0:Oe.numClippingPlanes===void 0||Oe.numClippingPlanes===ve.numPlanes&&Oe.numIntersection===ve.numIntersection?(Oe.vertexAlphas!==uh||Oe.vertexTangents!==dh||Oe.morphTargets!==ph||Oe.morphNormals!==mh||Oe.morphColors!==fh||Oe.toneMapping!==Yo||Q.isWebGL2===!0&&Oe.morphTargetsCount!==gh)&&(wt=!0):wt=!0:wt=!0:wt=!0:wt=!0:(wt=!0,Oe.__version=Ne.version);let Mn=Oe.currentProgram;wt===!0&&(Mn=ar(Ne,_t,De));let Jo=!1,Li=!1,As=!1,tt=Mn.getUniforms(),bn=Oe.uniforms;if(x.useProgram(Mn.program)&&(Jo=!0,Li=!0,As=!0),Ne.id!==I&&(I=Ne.id,Li=!0),Jo||P!==Xe){tt.setValue(X,"projectionMatrix",Xe.projectionMatrix),tt.setValue(X,"viewMatrix",Xe.matrixWorldInverse);let yt=tt.map.cameraPosition;yt!==void 0&&yt.setValue(X,N.setFromMatrixPosition(Xe.matrixWorld)),Q.logarithmicDepthBuffer&&tt.setValue(X,"logDepthBufFC",2/(Math.log(Xe.far+1)/Math.LN2)),(Ne.isMeshPhongMaterial||Ne.isMeshToonMaterial||Ne.isMeshLambertMaterial||Ne.isMeshBasicMaterial||Ne.isMeshStandardMaterial||Ne.isShaderMaterial)&&tt.setValue(X,"isOrthographic",Xe.isOrthographicCamera===!0),P!==Xe&&(P=Xe,Li=!0,As=!0)}if(De.isSkinnedMesh){tt.setOptional(X,De,"bindMatrix"),tt.setOptional(X,De,"bindMatrixInverse");let yt=De.skeleton;yt&&(Q.floatVertexTextures?(yt.boneTexture===null&&yt.computeBoneTexture(),tt.setValue(X,"boneTexture",yt.boneTexture,V)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}De.isBatchedMesh&&(tt.setOptional(X,De,"batchingTexture"),tt.setValue(X,"batchingTexture",De._matricesTexture,V));let Rs=ut.morphAttributes;(Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0&&Q.isWebGL2===!0)&&nr.update(De,ut,Mn),(Li||Oe.receiveShadow!==De.receiveShadow)&&(Oe.receiveShadow=De.receiveShadow,tt.setValue(X,"receiveShadow",De.receiveShadow)),Ne.isMeshGouraudMaterial&&Ne.envMap!==null&&(bn.envMap.value=or,bn.flipEnvMap.value=or.isCubeTexture&&or.isRenderTargetTexture===!1?-1:1),Li&&(tt.setValue(X,"toneMappingExposure",g.toneMappingExposure),Oe.needsLights&&(At=As,(Nt=bn).ambientLightColor.needsUpdate=At,Nt.lightProbe.needsUpdate=At,Nt.directionalLights.needsUpdate=At,Nt.directionalLightShadows.needsUpdate=At,Nt.pointLights.needsUpdate=At,Nt.pointLightShadows.needsUpdate=At,Nt.spotLights.needsUpdate=At,Nt.spotLightShadows.needsUpdate=At,Nt.rectAreaLights.needsUpdate=At,Nt.hemisphereLights.needsUpdate=At),Pi&&Ne.fog===!0&&fe.refreshFogUniforms(bn,Pi),fe.refreshMaterialUniforms(bn,Ne,W,oe,J),di.upload(X,Xo(Oe),bn,V));var Nt,At;if(Ne.isShaderMaterial&&Ne.uniformsNeedUpdate===!0&&(di.upload(X,Xo(Oe),bn,V),Ne.uniformsNeedUpdate=!1),Ne.isSpriteMaterial&&tt.setValue(X,"center",De.center),tt.setValue(X,"modelViewMatrix",De.modelViewMatrix),tt.setValue(X,"normalMatrix",De.normalMatrix),tt.setValue(X,"modelMatrix",De.matrixWorld),Ne.isShaderMaterial||Ne.isRawShaderMaterial){let yt=Ne.uniformsGroups;for(let Cs=0,_h=yt.length;Cs<_h;Cs++)if(Q.isWebGL2){let Ko=yt[Cs];Wn.update(Ko,Mn),Wn.bind(Ko,Mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mn}(A,G,K,ae,ee);x.setMaterial(ae,_e);let Ae=K.index,Ce=1;if(ae.wireframe===!0){if(Ae=pe.getWireframeAttribute(K),Ae===void 0)return;Ce=2}let Le=K.drawRange,Ie=K.attributes.position,He=Le.start*Ce,Tt=(Le.start+Le.count)*Ce;ue!==null&&(He=Math.max(He,ue.start*Ce),Tt=Math.min(Tt,(ue.start+ue.count)*Ce)),Ae!==null?(He=Math.max(He,0),Tt=Math.min(Tt,Ae.count)):Ie!=null&&(He=Math.max(He,0),Tt=Math.min(Tt,Ie.count));let Gt=Tt-He;if(Gt<0||Gt===1/0)return;let xn;pt.setup(ee,ae,xe,K,Ae);let Ve=Gn;if(Ae!==null&&(xn=de.get(Ae),Ve=ir,Ve.setIndex(xn)),ee.isMesh)ae.wireframe===!0?(x.setLineWidth(ae.wireframeLinewidth*F()),Ve.setMode(X.LINES)):Ve.setMode(X.TRIANGLES);else if(ee.isLine){let Xe=ae.linewidth;Xe===void 0&&(Xe=1),x.setLineWidth(Xe*F()),ee.isLineSegments?Ve.setMode(X.LINES):ee.isLineLoop?Ve.setMode(X.LINE_LOOP):Ve.setMode(X.LINE_STRIP)}else ee.isPoints?Ve.setMode(X.POINTS):ee.isSprite&&Ve.setMode(X.TRIANGLES);if(ee.isBatchedMesh)Ve.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else if(ee.isInstancedMesh)Ve.renderInstances(He,Gt,ee.count);else if(K.isInstancedBufferGeometry){let Xe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,_t=Math.min(K.instanceCount,Xe);Ve.renderInstances(He,Gt,_t)}else Ve.render(He,Gt)},this.compile=function(A,G,K=null){K===null&&(K=A),m=Ke.get(K),m.init(),v.push(m),K.traverseVisible(function(ee){ee.isLight&&ee.layers.test(G.layers)&&(m.pushLight(ee),ee.castShadow&&m.pushShadow(ee))}),A!==K&&A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(G.layers)&&(m.pushLight(ee),ee.castShadow&&m.pushShadow(ee))}),m.setupLights(g._useLegacyLights);let ae=new Set;return A.traverse(function(ee){let ue=ee.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){let xe=ue[_e];ko(xe,K,ee),ae.add(xe)}else ko(ue,K,ee),ae.add(ue)}),v.pop(),m=null,ae},this.compileAsync=function(A,G,K=null){let ae=this.compile(A,G,K);return new Promise(ee=>{function ue(){ae.forEach(function(_e){z.get(_e).currentProgram.isReady()&&ae.delete(_e)}),ae.size!==0?setTimeout(ue,10):ee(A)}te.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ts=null;function Ho(){yn.stop()}function Vo(){yn.start()}let yn=new Bc;function Go(A,G,K,ae){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||E.intersectsSprite(A)){ae&&N.setFromMatrixPosition(A.matrixWorld).applyMatrix4(L);let ue=Me.update(A),_e=A.material;_e.visible&&_.push(A,ue,_e,K,N.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||E.intersectsObject(A))){let ue=Me.update(A),_e=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),N.copy(A.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),N.copy(ue.boundingSphere.center)),N.applyMatrix4(A.matrixWorld).applyMatrix4(L)),Array.isArray(_e)){let xe=ue.groups;for(let Ae=0,Ce=xe.length;Ae<Ce;Ae++){let Le=xe[Ae],Ie=_e[Le.materialIndex];Ie&&Ie.visible&&_.push(A,ue,Ie,K,N.z,Le)}}else _e.visible&&_.push(A,ue,_e,K,N.z,null)}}let ee=A.children;for(let ue=0,_e=ee.length;ue<_e;ue++)Go(ee[ue],G,K,ae)}function Wo(A,G,K,ae){let ee=A.opaque,ue=A.transmissive,_e=A.transparent;m.setupLightsView(K),S===!0&&ve.setGlobalState(g.clippingPlanes,K),ue.length>0&&function(xe,Ae,Ce,Le){if((Ce.isScene===!0?Ce.overrideMaterial:null)!==null)return;let He=Q.isWebGL2;J===null&&(J=new Qt(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?qi:In,minFilter:zr,samples:He?4:0})),g.getDrawingBufferSize(j),He?J.setSize(j.x,j.y):J.setSize(Xr(j.x),Xr(j.y));let Tt=g.getRenderTarget();g.setRenderTarget(J),g.getClearColor(k),H=g.getClearAlpha(),H<1&&g.setClearColor(16777215,.5),g.clear();let Gt=g.toneMapping;g.toneMapping=dn,sr(xe,Ce,Le),V.updateMultisampleRenderTarget(J),V.updateRenderTargetMipmap(J);let xn=!1;for(let Ve=0,Xe=Ae.length;Ve<Xe;Ve++){let _t=Ae[Ve],ut=_t.object,Ne=_t.geometry,De=_t.material,Pi=_t.group;if(De.side===2&&ut.layers.test(Le.layers)){let ws=De.side;De.side=st,De.needsUpdate=!0,qo(ut,Ce,Le,Ne,De,Pi),De.side=ws,De.needsUpdate=!0,xn=!0}}xn===!0&&(V.updateMultisampleRenderTarget(J),V.updateRenderTargetMipmap(J)),g.setRenderTarget(Tt),g.setClearColor(k,H),g.toneMapping=Gt}(ee,ue,G,K),ae&&x.viewport(U.copy(ae)),ee.length>0&&sr(ee,G,K),ue.length>0&&sr(ue,G,K),_e.length>0&&sr(_e,G,K),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function sr(A,G,K){let ae=G.isScene===!0?G.overrideMaterial:null;for(let ee=0,ue=A.length;ee<ue;ee++){let _e=A[ee],xe=_e.object,Ae=_e.geometry,Ce=ae===null?_e.material:ae,Le=_e.group;xe.layers.test(K.layers)&&qo(xe,G,K,Ae,Ce,Le)}}function qo(A,G,K,ae,ee,ue){A.onBeforeRender(g,G,K,ae,ee,ue),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(g,G,K,ae,A,ue),ee.transparent===!0&&ee.side===2&&ee.forceSinglePass===!1?(ee.side=st,ee.needsUpdate=!0,g.renderBufferDirect(K,G,ae,ee,A,ue),ee.side=mn,ee.needsUpdate=!0,g.renderBufferDirect(K,G,ae,ee,A,ue),ee.side=2):g.renderBufferDirect(K,G,ae,ee,A,ue),A.onAfterRender(g,G,K,ae,ee,ue)}function ar(A,G,K){G.isScene!==!0&&(G=D);let ae=z.get(A),ee=m.state.lights,ue=m.state.shadowsArray,_e=ee.state.version,xe=me.getParameters(A,ee.state,ue,G,K),Ae=me.getProgramCacheKey(xe),Ce=ae.programs;ae.environment=A.isMeshStandardMaterial?G.environment:null,ae.fog=G.fog,ae.envMap=(A.isMeshStandardMaterial?he:se).get(A.envMap||ae.environment),Ce===void 0&&(A.addEventListener("dispose",zo),Ce=new Map,ae.programs=Ce);let Le=Ce.get(Ae);if(Le!==void 0){if(ae.currentProgram===Le&&ae.lightsStateVersion===_e)return jo(A,xe),Le}else xe.uniforms=me.getUniforms(A),A.onBuild(K,xe,g),A.onBeforeCompile(xe,g),Le=me.acquireProgram(xe,Ae),Ce.set(Ae,Le),ae.uniforms=xe.uniforms;let Ie=ae.uniforms;return(A.isShaderMaterial||A.isRawShaderMaterial)&&A.clipping!==!0||(Ie.clippingPlanes=ve.uniform),jo(A,xe),ae.needsLights=function(He){return He.isMeshLambertMaterial||He.isMeshToonMaterial||He.isMeshPhongMaterial||He.isMeshStandardMaterial||He.isShadowMaterial||He.isShaderMaterial&&He.lights===!0}(A),ae.lightsStateVersion=_e,ae.needsLights&&(Ie.ambientLightColor.value=ee.state.ambient,Ie.lightProbe.value=ee.state.probe,Ie.directionalLights.value=ee.state.directional,Ie.directionalLightShadows.value=ee.state.directionalShadow,Ie.spotLights.value=ee.state.spot,Ie.spotLightShadows.value=ee.state.spotShadow,Ie.rectAreaLights.value=ee.state.rectArea,Ie.ltc_1.value=ee.state.rectAreaLTC1,Ie.ltc_2.value=ee.state.rectAreaLTC2,Ie.pointLights.value=ee.state.point,Ie.pointLightShadows.value=ee.state.pointShadow,Ie.hemisphereLights.value=ee.state.hemi,Ie.directionalShadowMap.value=ee.state.directionalShadowMap,Ie.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ie.spotShadowMap.value=ee.state.spotShadowMap,Ie.spotLightMatrix.value=ee.state.spotLightMatrix,Ie.spotLightMap.value=ee.state.spotLightMap,Ie.pointShadowMap.value=ee.state.pointShadowMap,Ie.pointShadowMatrix.value=ee.state.pointShadowMatrix),ae.currentProgram=Le,ae.uniformsList=null,Le}function Xo(A){if(A.uniformsList===null){let G=A.currentProgram.getUniforms();A.uniformsList=di.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function jo(A,G){let K=z.get(A);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}yn.setAnimationLoop(function(A){Ts&&Ts(A)}),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(A){Ts=A,et.setAnimationLoop(A),A===null?yn.stop():yn.start()},et.addEventListener("sessionstart",Ho),et.addEventListener("sessionend",Vo),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(G),G=et.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,G,w),m=Ke.get(A,v.length),m.init(),v.push(m),L.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),E.setFromProjectionMatrix(L),B=this.localClippingEnabled,S=ve.init(this.clippingPlanes,B),_=Te.get(A,y.length),_.init(),y.push(_),Go(A,G,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(Y,$),this.info.render.frame++,S===!0&&ve.beginShadows();let K=m.state.shadowsArray;if(Ue.render(K,A,G),S===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),Pe.render(_,A),m.setupLights(g._useLegacyLights),G.isArrayCamera){let ae=G.cameras;for(let ee=0,ue=ae.length;ee<ue;ee++){let _e=ae[ee];Wo(_,A,_e,_e.viewport)}}else Wo(_,A,G);w!==null&&(V.updateMultisampleRenderTarget(w),V.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(g,A,G),pt.resetDefaultState(),I=-1,P=null,v.pop(),m=v.length>0?v[v.length-1]:null,y.pop(),_=y.length>0?y[y.length-1]:null},this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,G,K){z.get(A.texture).__webglTexture=G,z.get(A.depthTexture).__webglTexture=K;let ae=z.get(A);ae.__hasExternalTextures=!0,ae.__hasExternalTextures&&(ae.__autoAllocateDepthBuffer=K===void 0,ae.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,G){let K=z.get(A);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,K=0){w=A,R=G,b=K;let ae=!0,ee=null,ue=!1,_e=!1;if(A){let xe=z.get(A);xe.__useDefaultFramebuffer!==void 0?(x.bindFramebuffer(X.FRAMEBUFFER,null),ae=!1):xe.__webglFramebuffer===void 0?V.setupRenderTarget(A):xe.__hasExternalTextures&&V.rebindTextures(A,z.get(A.texture).__webglTexture,z.get(A.depthTexture).__webglTexture);let Ae=A.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(_e=!0);let Ce=z.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(ee=Array.isArray(Ce[G])?Ce[G][K]:Ce[G],ue=!0):ee=Q.isWebGL2&&A.samples>0&&V.useMultisampledRTT(A)===!1?z.get(A).__webglMultisampledFramebuffer:Array.isArray(Ce)?Ce[K]:Ce,U.copy(A.viewport),q.copy(A.scissor),C=A.scissorTest}else U.copy(O).multiplyScalar(W).floor(),q.copy(Z).multiplyScalar(W).floor(),C=ce;if(x.bindFramebuffer(X.FRAMEBUFFER,ee)&&Q.drawBuffers&&ae&&x.drawBuffers(A,ee),x.viewport(U),x.scissor(q),x.setScissorTest(C),ue){let xe=z.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,xe.__webglTexture,K)}else if(_e){let xe=z.get(A.texture),Ae=G||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,xe.__webglTexture,K||0,Ae)}I=-1},this.readRenderTargetPixels=function(A,G,K,ae,ee,ue,_e){if(!A||!A.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e]),xe){x.bindFramebuffer(X.FRAMEBUFFER,xe);try{let Ae=A.texture,Ce=Ae.format,Le=Ae.type;if(Ce!==Dt&&vt.convert(Ce)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Ie=Le===qi&&(te.has("EXT_color_buffer_half_float")||Q.isWebGL2&&te.has("EXT_color_buffer_float"));if(!(Le===In||vt.convert(Le)===X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)||Le===un&&(Q.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float"))||Ie))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");G>=0&&G<=A.width-ae&&K>=0&&K<=A.height-ee&&X.readPixels(G,K,ae,ee,vt.convert(Ce),vt.convert(Le),ue)}finally{let Ae=w!==null?z.get(w).__webglFramebuffer:null;x.bindFramebuffer(X.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(A,G,K=0){let ae=Math.pow(2,-K),ee=Math.floor(G.image.width*ae),ue=Math.floor(G.image.height*ae);V.setTexture2D(G,0),X.copyTexSubImage2D(X.TEXTURE_2D,K,0,0,A.x,A.y,ee,ue),x.unbindTexture()},this.copyTextureToTexture=function(A,G,K,ae=0){let ee=G.image.width,ue=G.image.height,_e=vt.convert(K.format),xe=vt.convert(K.type);V.setTexture2D(K,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,K.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,K.unpackAlignment),G.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ae,A.x,A.y,ee,ue,_e,xe,G.image.data):G.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ae,A.x,A.y,G.mipmaps[0].width,G.mipmaps[0].height,_e,G.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,ae,A.x,A.y,_e,xe,G.image),ae===0&&K.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),x.unbindTexture()},this.copyTextureToTexture3D=function(A,G,K,ae,ee=0){if(g.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let ue=A.max.x-A.min.x+1,_e=A.max.y-A.min.y+1,xe=A.max.z-A.min.z+1,Ae=vt.convert(ae.format),Ce=vt.convert(ae.type),Le;if(ae.isData3DTexture)V.setTexture3D(ae,0),Le=X.TEXTURE_3D;else{if(!ae.isDataArrayTexture&&!ae.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");V.setTexture2DArray(ae,0),Le=X.TEXTURE_2D_ARRAY}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,ae.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,ae.unpackAlignment);let Ie=X.getParameter(X.UNPACK_ROW_LENGTH),He=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Tt=X.getParameter(X.UNPACK_SKIP_PIXELS),Gt=X.getParameter(X.UNPACK_SKIP_ROWS),xn=X.getParameter(X.UNPACK_SKIP_IMAGES),Ve=K.isCompressedTexture?K.mipmaps[ee]:K.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Ve.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ve.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,A.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,A.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,A.min.z),K.isDataTexture||K.isData3DTexture?X.texSubImage3D(Le,ee,G.x,G.y,G.z,ue,_e,xe,Ae,Ce,Ve.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Le,ee,G.x,G.y,G.z,ue,_e,xe,Ae,Ve.data)):X.texSubImage3D(Le,ee,G.x,G.y,G.z,ue,_e,xe,Ae,Ce,Ve),X.pixelStorei(X.UNPACK_ROW_LENGTH,Ie),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,He),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Tt),X.pixelStorei(X.UNPACK_SKIP_ROWS,Gt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,xn),ee===0&&ae.generateMipmaps&&X.generateMipmap(Le),x.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?V.setTextureCube(A,0):A.isData3DTexture?V.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?V.setTexture2DArray(A,0):V.setTexture2D(A,0),x.unbindTexture()},this.resetState=function(){R=0,b=0,w=null,x.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===xo?"display-p3":"srgb",t.unpackColorSpace=Be.workingColorSpace===vs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===je?Dn:Nc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Dn?je:$t}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},za=class extends Yi{};za.prototype.isWebGL1Renderer=!0;bi=class extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},pp=new T,mp=new T,fp=new T,gp=new T,vp=new ie,_p=new ie,yp=new we,xp=new T,Mp=new T,bp=new T,Sp=new ie,Ep=new ie,Tp=new ie,wp=new T,Ap=new T,Rp=new T,Cp=new Fe,Pp=new Fe,Lp=new T,Ip=new we,Np=new T,Up=new zt,Dp=new we,Op=new vi,Bp=new we,Fp=new we,zp=new we,kp=new we,Hp=new Ft,Vp=new we,Gp=new ye,Wp=new zt,ka=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let s=n[this.index];i.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}},qp=new we,Xp=new we,jp=new we,Yp=new we,Zp=new yi,Jp=new Ft,Kp=new zt,$p=new T,Qp=new ka,em=new ye,tm=new T,nm=new T,im=new we,rm=new vi,sm=new zt,am=new T,om=new T,lm=new we,cm=new vi,hm=new zt,um=new T,rs=class extends Mt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Et=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,c=0,l=s-1;for(;c<=l;)if(i=Math.floor(c+(l-c)/2),o=n[i]-a,o<0)c=i+1;else{if(!(o>0)){l=i;break}l=i-1}if(i=l,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new ie:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new T,i=[],s=[],a=[],o=new T,c=new we;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new T)}s[0]=new T,a[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Ye(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,f))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Ye(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(c.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zi=class extends Et{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let n=t||new ie,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*d+this.aX,l=u*d+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ha=class extends Zi{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};Ir=new T,la=new bo,ca=new bo,ha=new bo,kt=class extends Et{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=i[(l-1)%s]:(Ir.subVectors(i[0],i[1]).add(i[0]),o=Ir);let d=i[l%s],u=i[(l+1)%s];if(this.closed||l+2<s?c=i[(l+2)%s]:(Ir.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=Ir),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(c),p);_<1e-4&&(_=1),f<1e-4&&(f=_),m<1e-4&&(m=_),la.initNonuniformCatmullRom(o.x,d.x,u.x,c.x,f,_,m),ca.initNonuniformCatmullRom(o.y,d.y,u.y,c.y,f,_,m),ha.initNonuniformCatmullRom(o.z,d.z,u.z,c.z,f,_,m)}else this.curveType==="catmullrom"&&(la.initCatmullRom(o.x,d.x,u.x,c.x,this.tension),ca.initCatmullRom(o.y,d.y,u.y,c.y,this.tension),ha.initCatmullRom(o.z,d.z,u.z,c.z,this.tension));return n.set(la.calc(h),ca.calc(h),ha.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};ss=class extends Et{constructor(e=new ie,t=new ie,n=new ie,i=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ie){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Gi(e,i.x,s.x,a.x,o.x),Gi(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Va=class extends Et{constructor(e=new T,t=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new T){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Gi(e,i.x,s.x,a.x,o.x),Gi(e,i.y,s.y,a.y,o.y),Gi(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},as=class extends Et{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends Et{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},os=class extends Et{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Vi(e,i.x,s.x,a.x),Vi(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ls=class extends Et{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Vi(e,i.x,s.x,a.x),Vi(e,i.y,s.y,a.y),Vi(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cs=class extends Et{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(mc(o,c.x,l.x,h.x,d.x),mc(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ie().fromArray(i))}return this}},hs=Object.freeze({__proto__:null,ArcCurve:Ha,CatmullRomCurve3:kt,CubicBezierCurve:ss,CubicBezierCurve3:Va,EllipseCurve:Zi,LineCurve:as,LineCurve3:Ga,QuadraticBezierCurve:os,QuadraticBezierCurve3:ls,SplineCurve:cs}),Wa=class extends Et{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hs[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new hs[i.type]().fromJSON(i))}return this}},Ji=class extends Wa{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new as(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new os(this.currentPoint.clone(),new ie(e,t),new ie(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new ss(this.currentPoint.clone(),new ie(e,t),new ie(n,i),new ie(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new cs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){let l=new Zi(e,t,n,i,s,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},us=class r extends qe{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ye(i,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,d=new T,u=new ie,p=new T,f=new T,_=new T,m=0,y=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,y=e[v+1].y-e[v].y,p.x=1*y,p.y=-m,p.z=0*y,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,y=e[v+1].y-e[v].y,p.x=1*y,p.y=-m,p.z=0*y,f.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(f)}for(let v=0;v<=t;v++){let g=n+v*h*i,M=Math.sin(g),R=Math.cos(g);for(let b=0;b<=e.length-1;b++){d.x=e[b].x*M,d.y=e[b].y,d.z=e[b].x*R,a.push(d.x,d.y,d.z),u.x=v/t,u.y=b/(e.length-1),o.push(u.x,u.y);let w=c[3*b+0]*M,I=c[3*b+1],P=c[3*b+0]*R;l.push(w,I,P)}}for(let v=0;v<t;v++)for(let g=0;g<e.length-1;g++){let M=g+v*e.length,R=M,b=M+e.length,w=M+e.length+1,I=M+1;s.push(R,b,I),s.push(w,I,b)}this.setIndex(s),this.setAttribute("position",new be(a,3)),this.setAttribute("uv",new be(o,2)),this.setAttribute("normal",new be(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},qa=class r extends us{constructor(e=1,t=1,n=4,i=8){let s=new Ji;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Xa=class r extends qe{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new T,h=new ie;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=n+d/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(o,3)),this.setAttribute("uv",new be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},tn=class r extends qe{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],u=[],p=[],f=0,_=[],m=n/2,y=0;function v(g){let M=f,R=new ie,b=new T,w=0,I=g===!0?e:t,P=g===!0?1:-1;for(let q=1;q<=i;q++)d.push(0,m*P,0),u.push(0,P,0),p.push(.5,.5),f++;let U=f;for(let q=0;q<=i;q++){let C=q/i*c+o,k=Math.cos(C),H=Math.sin(C);b.x=I*H,b.y=m*P,b.z=I*k,d.push(b.x,b.y,b.z),u.push(0,P,0),R.x=.5*k+.5,R.y=.5*H*P+.5,p.push(R.x,R.y),f++}for(let q=0;q<i;q++){let C=M+q,k=U+q;g===!0?h.push(k,k+1,C):h.push(k+1,k,C),w+=3}l.addGroup(y,w,g===!0?1:2),y+=w}(function(){let g=new T,M=new T,R=0,b=(t-e)/n;for(let w=0;w<=s;w++){let I=[],P=w/s,U=P*(t-e)+e;for(let q=0;q<=i;q++){let C=q/i,k=C*c+o,H=Math.sin(k),re=Math.cos(k);M.x=U*H,M.y=-P*n+m,M.z=U*re,d.push(M.x,M.y,M.z),g.set(H,b,re).normalize(),u.push(g.x,g.y,g.z),p.push(C,1-P),I.push(f++)}_.push(I)}for(let w=0;w<i;w++)for(let I=0;I<s;I++){let P=_[I][w],U=_[I+1][w],q=_[I+1][w+1],C=_[I][w+1];h.push(P,U,C),h.push(U,q,C),R+=6}l.addGroup(y,R,0),y+=R})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new be(d,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ja=class r extends tn{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bn=class r extends qe{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(u,p,f,_){let m=_+1,y=[];for(let v=0;v<=m;v++){y[v]=[];let g=u.clone().lerp(f,v/m),M=p.clone().lerp(f,v/m),R=m-v;for(let b=0;b<=R;b++)y[v][b]=b===0&&v===m?g:g.clone().lerp(M,b/R)}for(let v=0;v<m;v++)for(let g=0;g<2*(m-v)-1;g++){let M=Math.floor(g/2);g%2==0?(c(y[v][M+1]),c(y[v+1][M]),c(y[v][M])):(c(y[v][M+1]),c(y[v+1][M+1]),c(y[v+1][M]))}}function c(u){s.push(u.x,u.y,u.z)}function l(u,p){let f=3*u;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(u,p,f,_){_<0&&u.x===1&&(a[p]=u.x-1),f.x===0&&f.z===0&&(a[p]=_/2/Math.PI+.5)}function d(u){return Math.atan2(u.z,-u.x)}(function(u){let p=new T,f=new T,_=new T;for(let m=0;m<t.length;m+=3)l(t[m+0],p),l(t[m+1],f),l(t[m+2],_),o(p,f,_,u)})(i),function(u){let p=new T;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(u),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z}(n),function(){let u=new T;for(let f=0;f<s.length;f+=3){u.x=s[f+0],u.y=s[f+1],u.z=s[f+2];let _=d(u)/2/Math.PI+.5,m=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(_,1-m)}var p;(function(){let f=new T,_=new T,m=new T,y=new T,v=new ie,g=new ie,M=new ie;for(let R=0,b=0;R<s.length;R+=9,b+=6){f.set(s[R+0],s[R+1],s[R+2]),_.set(s[R+3],s[R+4],s[R+5]),m.set(s[R+6],s[R+7],s[R+8]),v.set(a[b+0],a[b+1]),g.set(a[b+2],a[b+3]),M.set(a[b+4],a[b+5]),y.copy(f).add(_).add(m).divideScalar(3);let w=d(y);h(v,b+0,f,w),h(g,b+2,_,w),h(M,b+4,m,w)}})(),function(){for(let f=0;f<a.length;f+=6){let _=a[f+0],m=a[f+2],y=a[f+4],v=Math.max(_,m,y),g=Math.min(_,m,y);v>.9&&g<.1&&(_<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),y<.2&&(a[f+4]+=1))}}()}(),this.setAttribute("position",new be(s,3)),this.setAttribute("normal",new be(s.slice(),3)),this.setAttribute("uv",new be(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},Ya=class r extends Bn{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Nr=new T,Ur=new T,ua=new T,Dr=new Ln,Za=class extends qe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(hi*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:_,b:m,c:y}=Dr;if(_.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),y.fromBufferAttribute(o,l[2]),Dr.getNormal(ua),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let v=0;v<3;v++){let g=(v+1)%3,M=d[v],R=d[g],b=Dr[h[v]],w=Dr[h[g]],I=`${M}_${R}`,P=`${R}_${M}`;P in u&&u[P]?(ua.dot(u[P].normal)<=s&&(p.push(b.x,b.y,b.z),p.push(w.x,w.y,w.z)),u[P]=null):I in u||(u[I]={index0:l[v],index1:l[g],normal:ua.clone()})}}for(let f in u)if(u[f]){let{index0:_,index1:m}=u[f];Nr.fromBufferAttribute(o,_),Ur.fromBufferAttribute(o,m),p.push(Nr.x,Nr.y,Nr.z),p.push(Ur.x,Ur.y,Ur.z)}this.setAttribute("position",new be(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},vn=class extends Ji{constructor(e){super(e),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Ji().fromJSON(i))}return this}},wd=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=fc(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l,h,d,u,p;if(n&&(s=function(f,_,m,y){let v=[],g,M,R,b,w;for(g=0,M=_.length;g<M;g++)R=_[g]*y,b=g<M-1?_[g+1]*y:f.length,w=fc(f,R,b,y,!1),w===w.next&&(w.steiner=!0),v.push(Ud(w));for(v.sort(Ld),g=0;g<v.length;g++)m=Id(v[g],m);return m}(r,e,s,t)),r.length>80*t){o=l=r[0],c=h=r[1];for(let f=t;f<i;f+=t)d=r[f],u=r[f+1],d<o&&(o=d),u<c&&(c=u),d>l&&(l=d),u>h&&(h=u);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return Ki(s,a,t,o,c,p,0),a};pn=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];vc(e),_c(n,e);let a=e.length;t.forEach(vc);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,_c(n,t[c]);let o=wd(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};zn=class r extends qe{constructor(e=new vn([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Od,g,M,R,b,w,I=!1;y&&(g=y.getSpacedPoints(h),I=!0,u=!1,M=y.computeFrenetFrames(h,!1),R=new T,b=new T,w=new T),u||(m=0,p=0,f=0,_=0);let P=o.extractPoints(l),U=P.shape,q=P.holes;if(!pn.isClockWise(U)){U=U.reverse();for(let N=0,D=q.length;N<D;N++){let F=q[N];pn.isClockWise(F)&&(q[N]=F.reverse())}}let C=pn.triangulateShape(U,q),k=U;for(let N=0,D=q.length;N<D;N++){let F=q[N];U=U.concat(F)}function H(N,D,F){return D||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(D,F)}let re=U.length,oe=C.length;function W(N,D,F){let te,Q,x,ne=N.x-D.x,z=N.y-D.y,V=F.x-N.x,se=F.y-N.y,he=ne*ne+z*z,de=ne*se-z*V;if(Math.abs(de)>Number.EPSILON){let pe=Math.sqrt(he),Me=Math.sqrt(V*V+se*se),me=D.x-z/pe,fe=D.y+ne/pe,Te=((F.x-se/Me-me)*se-(F.y+V/Me-fe)*V)/(ne*se-z*V);te=me+ne*Te-N.x,Q=fe+z*Te-N.y;let Ke=te*te+Q*Q;if(Ke<=2)return new ie(te,Q);x=Math.sqrt(Ke/2)}else{let pe=!1;ne>Number.EPSILON?V>Number.EPSILON&&(pe=!0):ne<-Number.EPSILON?V<-Number.EPSILON&&(pe=!0):Math.sign(z)===Math.sign(se)&&(pe=!0),pe?(te=-z,Q=ne,x=Math.sqrt(he)):(te=ne,Q=z,x=Math.sqrt(he/2))}return new ie(te/x,Q/x)}let Y=[];for(let N=0,D=k.length,F=D-1,te=N+1;N<D;N++,F++,te++)F===D&&(F=0),te===D&&(te=0),Y[N]=W(k[N],k[F],k[te]);let $=[],O,Z=Y.concat();for(let N=0,D=q.length;N<D;N++){let F=q[N];O=[];for(let te=0,Q=F.length,x=Q-1,ne=te+1;te<Q;te++,x++,ne++)x===Q&&(x=0),ne===Q&&(ne=0),O[te]=W(F[te],F[x],F[ne]);$.push(O),Z=Z.concat(O)}for(let N=0;N<m;N++){let D=N/m,F=p*Math.cos(D*Math.PI/2),te=f*Math.sin(D*Math.PI/2)+_;for(let Q=0,x=k.length;Q<x;Q++){let ne=H(k[Q],Y[Q],te);S(ne.x,ne.y,-F)}for(let Q=0,x=q.length;Q<x;Q++){let ne=q[Q];O=$[Q];for(let z=0,V=ne.length;z<V;z++){let se=H(ne[z],O[z],te);S(se.x,se.y,-F)}}}let ce=f+_;for(let N=0;N<re;N++){let D=u?H(U[N],Z[N],ce):U[N];I?(b.copy(M.normals[0]).multiplyScalar(D.x),R.copy(M.binormals[0]).multiplyScalar(D.y),w.copy(g[0]).add(b).add(R),S(w.x,w.y,w.z)):S(D.x,D.y,0)}for(let N=1;N<=h;N++)for(let D=0;D<re;D++){let F=u?H(U[D],Z[D],ce):U[D];I?(b.copy(M.normals[N]).multiplyScalar(F.x),R.copy(M.binormals[N]).multiplyScalar(F.y),w.copy(g[N]).add(b).add(R),S(w.x,w.y,w.z)):S(F.x,F.y,d/h*N)}for(let N=m-1;N>=0;N--){let D=N/m,F=p*Math.cos(D*Math.PI/2),te=f*Math.sin(D*Math.PI/2)+_;for(let Q=0,x=k.length;Q<x;Q++){let ne=H(k[Q],Y[Q],te);S(ne.x,ne.y,d+F)}for(let Q=0,x=q.length;Q<x;Q++){let ne=q[Q];O=$[Q];for(let z=0,V=ne.length;z<V;z++){let se=H(ne[z],O[z],te);I?S(se.x,se.y+g[h-1].y,g[h-1].x+F):S(se.x,se.y,d+F)}}}function E(N,D){let F=N.length;for(;--F>=0;){let te=F,Q=F-1;Q<0&&(Q=N.length-1);for(let x=0,ne=h+2*m;x<ne;x++){let z=re*x,V=re*(x+1);J(D+te+z,D+Q+z,D+Q+V,D+te+V)}}}function S(N,D,F){c.push(N),c.push(D),c.push(F)}function B(N,D,F){L(N),L(D),L(F);let te=i.length/3,Q=v.generateTopUV(n,i,te-3,te-2,te-1);j(Q[0]),j(Q[1]),j(Q[2])}function J(N,D,F,te){L(N),L(D),L(te),L(D),L(F),L(te);let Q=i.length/3,x=v.generateSideWallUV(n,i,Q-6,Q-3,Q-2,Q-1);j(x[0]),j(x[1]),j(x[3]),j(x[1]),j(x[2]),j(x[3])}function L(N){i.push(c[3*N+0]),i.push(c[3*N+1]),i.push(c[3*N+2])}function j(N){s.push(N.x),s.push(N.y)}(function(){let N=i.length/3;if(u){let D=0,F=re*D;for(let te=0;te<oe;te++){let Q=C[te];B(Q[2]+F,Q[1]+F,Q[0]+F)}D=h+2*m,F=re*D;for(let te=0;te<oe;te++){let Q=C[te];B(Q[0]+F,Q[1]+F,Q[2]+F)}}else{for(let D=0;D<oe;D++){let F=C[D];B(F[2],F[1],F[0])}for(let D=0;D<oe;D++){let F=C[D];B(F[0]+re*h,F[1]+re*h,F[2]+re*h)}}n.addGroup(N,i.length/3-N,0)})(),function(){let N=i.length/3,D=0;E(k,D),D+=k.length;for(let F=0,te=q.length;F<te;F++){let Q=q[F];E(Q,D),D+=Q.length}n.addGroup(N,i.length/3-N,1)}()}this.setAttribute("position",new be(i,3)),this.setAttribute("uv",new be(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new hs[i.type]().fromJSON(i)),new r(n,e.options)}},Od={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*i],h=e[3*i+1];return[new ie(s,a),new ie(o,c),new ie(l,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],d=e[3*n+2],u=e[3*i],p=e[3*i+1],f=e[3*i+2],_=e[3*s],m=e[3*s+1],y=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new ie(a,1-c),new ie(l,1-d),new ie(u,1-f),new ie(_,1-y)]:[new ie(o,1-c),new ie(h,1-d),new ie(p,1-f),new ie(m,1-y)]}},$a=class r extends Bn{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Qa=class r extends Bn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},eo=class r extends qe{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],c=[],l=[],h=[],d=e,u=(t-e)/(i=Math.max(1,i)),p=new T,f=new ie;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let y=s+m/n*a;p.x=d*Math.cos(y),p.y=d*Math.sin(y),c.push(p.x,p.y,p.z),l.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}d+=u}for(let _=0;_<i;_++){let m=_*(n+1);for(let y=0;y<n;y++){let v=y+m,g=v,M=v+n+1,R=v+n+2,b=v+1;o.push(g,M,b),o.push(M,R,b)}}this.setIndex(o),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Si=class r extends qe{constructor(e=new vn([new ie(0,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let d=i.length/3,u=h.extractPoints(t),p=u.shape,f=u.holes;pn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,y=f.length;m<y;m++){let v=f[m];pn.isClockWise(v)===!0&&(f[m]=v.reverse())}let _=pn.triangulateShape(p,f);for(let m=0,y=f.length;m<y;m++){let v=f[m];p=p.concat(v)}for(let m=0,y=p.length;m<y;m++){let v=p[m];i.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let m=0,y=_.length;m<y;m++){let v=_[m],g=v[0]+d,M=v[1]+d,R=v[2]+d;n.push(g,M,R),c+=3}}this.setIndex(n),this.setAttribute("position",new be(i,3)),this.setAttribute("normal",new be(s,3)),this.setAttribute("uv",new be(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n}(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},Ei=class r extends qe{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new T,u=new T,p=[],f=[],_=[],m=[];for(let y=0;y<=n;y++){let v=[],g=y/n,M=0;y===0&&a===0?M=.5/t:y===n&&c===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){let b=R/t;d.x=-e*Math.cos(i+b*s)*Math.sin(a+g*o),d.y=e*Math.cos(a+g*o),d.z=e*Math.sin(i+b*s)*Math.sin(a+g*o),f.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(b+M,1-g),v.push(l++)}h.push(v)}for(let y=0;y<n;y++)for(let v=0;v<t;v++){let g=h[y][v+1],M=h[y][v],R=h[y+1][v],b=h[y+1][v+1];(y!==0||a>0)&&p.push(g,M,b),(y!==n-1||c<Math.PI)&&p.push(M,R,b)}this.setIndex(p),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},to=class r extends Bn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},no=class r extends qe{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new T,d=new T,u=new T;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let _=f/i*s,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(f/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let _=(i+1)*p+f-1,m=(i+1)*(p-1)+f-1,y=(i+1)*(p-1)+f,v=(i+1)*p+f;a.push(_,m,v),a.push(m,y,v)}this.setIndex(a),this.setAttribute("position",new be(o,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},io=class r extends qe{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],c=[],l=[],h=[],d=new T,u=new T,p=new T,f=new T,_=new T,m=new T,y=new T;for(let g=0;g<=n;++g){let M=g/n*s*Math.PI*2;v(M,s,a,e,p),v(M+.01,s,a,e,f),m.subVectors(f,p),y.addVectors(f,p),_.crossVectors(m,y),y.crossVectors(_,m),_.normalize(),y.normalize();for(let R=0;R<=i;++R){let b=R/i*Math.PI*2,w=-t*Math.cos(b),I=t*Math.sin(b);d.x=p.x+(w*y.x+I*_.x),d.y=p.y+(w*y.y+I*_.y),d.z=p.z+(w*y.z+I*_.z),c.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),l.push(u.x,u.y,u.z),h.push(g/n),h.push(R/i)}}for(let g=1;g<=n;g++)for(let M=1;M<=i;M++){let R=(i+1)*(g-1)+(M-1),b=(i+1)*g+(M-1),w=(i+1)*g+M,I=(i+1)*(g-1)+M;o.push(R,b,I),o.push(b,w,I)}function v(g,M,R,b,w){let I=Math.cos(g),P=Math.sin(g),U=R/M*g,q=Math.cos(U);w.x=b*(2+q)*.5*I,w.y=b*(2+q)*P*.5,w.z=b*Math.sin(U)*.5}this.setIndex(o),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Ht=class r extends qe{constructor(e=new ls(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,c=new T,l=new ie,h=new T,d=[],u=[],p=[],f=[];function _(m){h=e.getPointAt(m/t,h);let y=a.normals[m],v=a.binormals[m];for(let g=0;g<=i;g++){let M=g/i*Math.PI*2,R=Math.sin(M),b=-Math.cos(M);c.x=b*y.x+R*v.x,c.y=b*y.y+R*v.y,c.z=b*y.z+R*v.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)_(m);_(s===!1?t:0),function(){for(let m=0;m<=t;m++)for(let y=0;y<=i;y++)l.x=m/t,l.y=y/i,p.push(l.x,l.y)}(),function(){for(let m=1;m<=t;m++)for(let y=1;y<=i;y++){let v=(i+1)*(m-1)+(y-1),g=(i+1)*m+(y-1),M=(i+1)*m+y,R=(i+1)*(m-1)+y;f.push(v,g,R),f.push(g,M,R)}}()})(),this.setIndex(f),this.setAttribute("position",new be(d,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new hs[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},ro=class extends qe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new T,s=new T;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let d=c[l],u=d.start;for(let p=u,f=u+d.count;p<f;p+=3)for(let _=0;_<3;_++){let m=o.getX(p+_),y=o.getX(p+(_+1)%3);i.fromBufferAttribute(a,m),s.fromBufferAttribute(a,y),yc(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,d=3*o+(l+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,d),yc(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new be(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};dm=Object.freeze({__proto__:null,BoxGeometry:St,CapsuleGeometry:qa,CircleGeometry:Xa,ConeGeometry:ja,CylinderGeometry:tn,DodecahedronGeometry:Ya,EdgesGeometry:Za,ExtrudeGeometry:zn,IcosahedronGeometry:$a,LatheGeometry:us,OctahedronGeometry:Qa,PlaneGeometry:xi,PolyhedronGeometry:Bn,RingGeometry:eo,ShapeGeometry:Si,SphereGeometry:Ei,TetrahedronGeometry:to,TorusGeometry:no,TorusKnotGeometry:io,TubeGeometry:Ht,WireframeGeometry:ro}),nn=class extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},rn=class extends nn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};Ti=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},so=class extends Ti{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tl,endingEnd:Tl}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case wl:s=e,o=2*t-n;break;case Al:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case wl:a=e,c=2*n-t;break;case Al:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),_=f*f,m=_*f,y=-u*m+2*u*_-u*f,v=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*f+1,g=(-1-p)*m+(1.5+p)*_+.5*f,M=p*m-p*_;for(let R=0;R!==o;++R)s[R]=y*a[h+R]+v*a[l+R]+g*a[c+R]+M*a[d+R];return s}},ao=class extends Ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[l+u]*d+a[c+u]*h;return s}},oo=class extends Ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},It=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fr(t,this.TimeBufferType),this.values=Fr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fr(e.times,Array),values:Fr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new so(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case kr:t=this.InterpolantFactoryMethodDiscrete;break;case Hr:t=this.InterpolantFactoryMethodLinear;break;case zs:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return zs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Bd(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===zs,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,d=h-n,u=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[d+p]||f!==t[u+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[h+u]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};It.prototype.TimeBufferType=Float32Array,It.prototype.ValueBufferType=Float32Array,It.prototype.DefaultInterpolation=Hr;Cn=class extends It{};Cn.prototype.ValueTypeName="bool",Cn.prototype.ValueBufferType=Array,Cn.prototype.DefaultInterpolation=kr,Cn.prototype.InterpolantFactoryMethodLinear=void 0,Cn.prototype.InterpolantFactoryMethodSmooth=void 0;lo=class extends It{};lo.prototype.ValueTypeName="color";co=class extends It{};co.prototype.ValueTypeName="number";ho=class extends Ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Bt.slerpFlat(s,0,a,l-o,a,l,c);return s}},Wi=class extends It{InterpolantFactoryMethodLinear(e){return new ho(this.times,this.values,this.getValueSize(),e)}};Wi.prototype.ValueTypeName="quaternion",Wi.prototype.DefaultInterpolation=Hr,Wi.prototype.InterpolantFactoryMethodSmooth=void 0;Pn=class extends It{};Pn.prototype.ValueTypeName="string",Pn.prototype.ValueBufferType=Array,Pn.prototype.DefaultInterpolation=kr,Pn.prototype.InterpolantFactoryMethodLinear=void 0,Pn.prototype.InterpolantFactoryMethodSmooth=void 0;uo=class extends It{};uo.prototype.ValueTypeName="vector";po=class{constructor(e,t,n){let i=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){c++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,c),o===c&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let p=l[d],f=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},Fd=new po,mo=class{constructor(e){this.manager=e!==void 0?e:Fd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};mo.DEFAULT_MATERIAL_NAME="__DEFAULT";ds=class extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},da=new we,xc=new T,Mc=new T,ps=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yi,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;xc.setFromMatrixPosition(e.matrixWorld),t.position.copy(xc),Mc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mc),t.updateMatrixWorld(),da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(da),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(da)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bc=new we,Fi=new T,pa=new T,fo=class extends ps{constructor(){super(new rt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new Fe(2,1,1,1),new Fe(0,1,1,1),new Fe(3,1,1,1),new Fe(1,1,1,1),new Fe(3,0,1,1),new Fe(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Fi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fi),pa.copy(n.position),pa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pa),n.updateMatrixWorld(),i.makeTranslation(-Fi.x,-Fi.y,-Fi.z),bc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc)}},ms=class extends ds{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fo}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},go=class extends ps{constructor(){super(new ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fs=class extends ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new go}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},pm=new we,mm=new we,fm=new we,gm=new T,vm=new Bt,_m=new T,ym=new T,xm=new T,Mm=new Bt,bm=new T,Sm=new T,So="\\[\\]\\.:\\/",zd=new RegExp("["+So+"]","g"),ma="[^"+So+"]",kd="[^"+So.replace("\\.","")+"]",Hd=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",ma)+/(WCOD+)?/.source.replace("WCOD",kd)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ma)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ma)+"$"),Vd=["material","materials","bones","map"],ke=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zd,"")}static parseTrackName(e){let t=Hd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Vd.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ke.Composite=class{constructor(r,e,t){let n=t||ke.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray],ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Em=new Float32Array(1),Tm=new ie,wm=new T,Am=new T,Rm=new T,Cm=new T,Pm=new we,Lm=new we,Im=new T,Nm=new Se,Um=new Se,Dm=new T,Om=new T,Bm=new T,Fm=new T,zm=new ji,km=new Ft,Hm=new T;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fa}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fa)});function Ai(r){let e=new gn;return e.color.setScalar(r),e}var xs,qc=Ps(()=>{Eo();xs=class extends bi{constructor(e=null){super();let t=new St;t.deleteAttribute("uv");let n=new nn({side:st}),i=new nn,s=5;e!==null&&e._useLegacyLights===!1&&(s=900);let a=new ms(16777215,s,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new ye(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let c=new ye(t,i);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new ye(t,i);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new ye(t,i);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new ye(t,i);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let u=new ye(t,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let p=new ye(t,i);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let f=new ye(t,Ai(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);let _=new ye(t,Ai(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let m=new ye(t,Ai(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let y=new ye(t,Ai(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let v=new ye(t,Ai(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);let g=new ye(t,Ai(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});var Xc={};xh(Xc,{createGlasses:()=>Jd,webglAvailable:()=>Zd});function Hn(r,e,t,n=0){let i=r/2+n,s=e/2+n,a=2/(t*3.2),o=[];for(let c=0;c<96;c++){let l=c/96*Math.PI*2,h=Math.cos(l),d=Math.sin(l),u=s*Math.sign(d)*Math.pow(Math.abs(d),a),p=1-.07*(1-(u+s)/(2*s));o.push(new ie(i*p*Math.sign(h)*Math.pow(Math.abs(h),a),u))}return new vn(o)}function qd(){let r=[];for(let o=0;o<=40;o++){let c=o/40,l=-c*13,h=.15*c;r.push(new ie(l,h))}for(let o=1;o<=20;o++){let l=o/20*Math.PI*.42;r.push(new ie(-13-Math.sin(l)*3.2*.8,.15-(1-Math.cos(l))*3.2))}let n=[],i=[];for(let o=0;o<r.length;o++){let c=r[o],l=r[Math.min(o+1,r.length-1)],h=r[Math.max(o-1,0)],d=new ie().subVectors(l,h).normalize(),u=new ie(-d.y,d.x),p=_n.lerp(.62,.3,o/(r.length-1))/2;n.push(c.clone().addScaledVector(u,p)),i.push(c.clone().addScaledVector(u,-p))}let s=new vn([...n,...i.reverse()]),a=new zn(s,{depth:.22,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:3,curveSegments:4});return a.rotateY(-Math.PI/2),a}function Xd(r){let e=new gt,t=new rn({color:r.frame||"#0d0d0f",roughness:.28,metalness:0,clearcoat:1,clearcoatRoughness:.12}),n=new nn({color:"#d9dadc",metalness:1,roughness:.22}),i=new rn({color:To.clone(),transparent:!0,opacity:.2,roughness:.04,metalness:0,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.6,side:vo,depthWrite:!1}),s=5.4,a=4.1,o=1.35,c=1.5,l=s/2+c/2;[-1,1].forEach(u=>{let p=new gt;p.position.x=u*l,p.rotation.y=u*-.07;let f=Hn(s,a,o,.42);f.holes.push(Hn(s,a,o,0));let _=new zn(f,{depth:.38,bevelEnabled:!0,bevelThickness:.08,bevelSize:.07,bevelSegments:4,curveSegments:24});_.translate(0,0,-.19),p.add(new ye(_,t));let m=Hn(s,a,o,.06).getPoints().filter((I,P,U)=>P>U.length*.55&&P<U.length*.95).map(I=>new T(I.x,I.y,.22)),y=new Ht(new kt(m),80,.045,8,!1);p.add(new ye(y,n));let v=new Si(Hn(s,a,o,.02),32),g=v.attributes.position;for(let I=0;I<g.count;I++){let P=g.getX(I),U=g.getY(I);g.setZ(I,.25-(P*P+U*U)*.022)}v.computeVertexNormals(),p.add(new ye(v,i));for(let I of[0,.34]){let P=new ye(new tn(.1,.1,.06,16),n);P.rotation.x=Math.PI/2,P.position.set(u*(s/2-.15-I),a/2+.05,.3),p.add(P)}let M=new ye(new St(.55,.7,.75),t);M.position.set(u*(s/2+.55),a/2-.55,-.35),p.add(M);let R=new ye(new tn(.09,.09,.8,12),n);R.position.set(u*(s/2+.7),a/2-.55,-.72),p.add(R);let b=new ye(qd(),t);b.position.set(u*(s/2+.72)+.11,a/2-.55,-.65),b.rotation.y=u*.05,p.add(b);let w=new ye(new Ei(.28,16,12),new rn({color:"#ffffff",transparent:!0,opacity:.55,roughness:.1}));w.scale.set(.45,1,.3),w.position.set(-u*(s/2-.55),-.5,-.55),w.rotation.z=u*.35,p.add(w),e.add(p)});let h=new kt([new T(-c/2-.25,1.15,.05),new T(0,1.45,.25),new T(c/2+.25,1.15,.05)]),d=new ye(new Ht(h,24,.24,12,!1),t);return d.scale.y=1,e.add(d),e.userData.lensMat=i,e}function jd(){let r=new gt,e=new rn({color:"#0b0b0d",roughness:.18,metalness:0,clearcoat:1,clearcoatRoughness:.06}),t=new nn({color:"#d6d8db",metalness:1,roughness:.18}),n=new rn({color:"#ffffff",transparent:!0,opacity:.45,roughness:.08,clearcoat:1}),i=new rn({color:To.clone(),transparent:!0,opacity:.2,roughness:.04,metalness:0,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.6,side:vo,depthWrite:!1}),s=5.5,a=4.1,o=1,c=1.8,l=s/2,h=a/2,d=l+c/2,u=Hn(s,a,o,0).getPoints();function p(){let v=new gt,g=h+.32,M=-l-.05,R=h-.62,b=[new ie(M,h-.45),new ie(M,h+.12),new ie(M+.3,g),new ie(l-.75,g),new ie(l+.32,h-.3),new ie(l+.32,R)],w=u.slice(0,u.length/2).filter(O=>O.y>R),I=new zn(new vn([...b,...w]),{depth:.45,bevelEnabled:!0,bevelThickness:.07,bevelSize:.06,bevelSegments:4,curveSegments:12});I.translate(0,0,-.22),v.add(new ye(I,e));let P=Hn(s,a,o,.05).getPoints().map(O=>new T(O.x,O.y,.05));v.add(new ye(new Ht(new kt(P,!0),220,.075,10,!0),t));let U=new Si(Hn(s,a,o,.02),32),q=U.attributes.position;for(let O=0;O<q.count;O++){let Z=q.getX(O),ce=q.getY(O);q.setZ(O,.12-(Z*Z+ce*ce)*.02)}U.computeVertexNormals(),v.add(new ye(U,i));let C=l+.38;for(let O of[0,.18,.36]){let Z=new ye(new tn(.085,.085,1.2,14),t);Z.rotation.x=Math.PI/2,Z.position.set(C,R-.15-O,-.45),v.add(Z)}let k=new ye(new St(.16,.5,1.2),t);k.position.set(C-.1,R-.33,-.45),v.add(k);let H=new ye(new St(.5,.24,.6),e);H.position.set(C-.05,R-.68,-.15),v.add(H);let re=new gt;re.position.set(C,R-.33,-1),re.rotation.y=-.05;let oe=new ye(new tn(.07,.07,9.6,10),t);oe.rotation.x=Math.PI/2,oe.position.z=-4.8,re.add(oe);let W=new kt([new T(0,0,-9.4),new T(0,-.05,-12.2),new T(0,-.7,-13.8),new T(0,-2.1,-14.8)]);re.add(new ye(new Ht(W,48,.15,12,!1),e)),v.add(re);let Y=new kt([new T(-l+.05,.2,-.05),new T(-l+.35,-.05,-.35),new T(-l+.55,-.2,-.6)]);v.add(new ye(new Ht(Y,12,.035,6,!1),t));let $=new ye(new Ei(.4,20,14),n);return $.scale.set(.38,1,.22),$.position.set(-l+.62,-.45,-.68),$.rotation.z=.35,v.add($),v}let f=p();f.position.x=d,f.rotation.y=-.06;let _=p();_.scale.x=-1,_.position.x=-d,_.rotation.y=.06,r.add(f,_);let m=d-l+.15,y=new kt([new T(-m,h-.3,.02),new T(0,h-.12,.12),new T(m,h-.3,.02)]);return r.add(new ye(new Ht(y,24,.09,10,!1),t)),r.userData.lensMat=i,r}function Yd(){let r=document.createElement("canvas");r.width=r.height=256;let e=r.getContext("2d"),t=e.createRadialGradient(128,128,0,128,128,128);return t.addColorStop(0,"rgba(0,0,0,0.55)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new rs(r)}function Zd(){try{let r=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(r.getContext("webgl2")||r.getContext("webgl")))}catch{return!1}}function Jd(r,e={}){let t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=new Yi({canvas:r,antialias:!0,alpha:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.toneMapping=_o,n.outputColorSpace=je;let i=new bi,s=new Mi(n);i.environment=s.fromScene(new xs(n),.04).texture;let a=new fs("#ffffff",1.2);a.position.set(4,10,8),i.add(a);let o=new rt(28,1,.1,200),c=e.model==="t1"?jd():Xd(e),l=new gt;c.position.z=4.5,l.add(c),i.add(l);let h=new ye(new xi(18,9),new gn({map:Yd(),transparent:!0,depthWrite:!1,opacity:.35}));h.rotation.x=-Math.PI/2,h.position.y=-4.6,i.add(h);let d=c.userData.lensMat,u=0,p=e.tint||0,f=e.rotationY??-.55,_=e.rotationX??.12,m=f,y=_,v=f,g=!1,M=0,R=0,b=0,w=e.autoRotate!==!1&&!t;function I(){let oe=r.clientWidth,W=r.clientHeight;if(!oe||!W)return;n.setSize(oe,W,!1),o.aspect=oe/W;let Y=(e.fit||21)/(2*Math.tan(_n.degToRad(o.fov/2))*o.aspect),$=(e.fitH||17)/(2*Math.tan(_n.degToRad(o.fov/2))),O=Math.max(Y,$);o.position.set(0,O*.16,O),o.lookAt(0,-.4,0),o.updateProjectionMatrix()}function P(oe){d.color.copy(To).lerp(Wd,oe),d.opacity=_n.lerp(.18,.9,oe)}if(e.interactive!==!1){r.style.touchAction="pan-y",r.addEventListener("pointerdown",W=>{g=!0,M=W.clientX,R=W.clientY,r.setPointerCapture(W.pointerId),r.classList.add("grabbing")}),r.addEventListener("pointermove",W=>{g&&(m+=(W.clientX-M)*.01,y=_n.clamp(y+(W.clientY-R)*.005,-.4,.6),M=W.clientX,R=W.clientY,b=0)});let oe=()=>{g=!1,r.classList.remove("grabbing")};r.addEventListener("pointerup",oe),r.addEventListener("pointercancel",oe)}let U=!0,q=0,C=performance.now(),k=0;function H(oe){q=0;let W=Math.min((oe-C)/1e3,.05);C=oe,k+=W,b+=W,w&&!g&&b>2.5&&(m+=(v+Math.sin(k*.35)*.6-m)*Math.min(1,W*.8)),f+=(m-f)*Math.min(1,W*6),_+=(y-_)*Math.min(1,W*6),l.rotation.set(_,f,0),l.position.y=t?0:Math.sin(k*1.1)*.12,u+=(p-u)*Math.min(1,W*(e.tintSpeed||2.2)),P(u),n.render(i,o),U&&(q=requestAnimationFrame(H))}function re(){q||(C=performance.now(),q=requestAnimationFrame(H))}return new IntersectionObserver(([oe])=>{U=oe.isIntersecting,U&&re()}).observe(r),new ResizeObserver(I).observe(r),I(),P(u),re(),{setTint(oe){p=_n.clamp(oe,0,1)},setTintNow(oe){p=u=_n.clamp(oe,0,1)},setRotation(oe,W){m=oe,W!==void 0&&(y=W),b=-1e9}}}var To,Wd,jc=Ps(()=>{Eo();qc();To=new Se("#dfe7ec"),Wd=new Se("#15181b")});var Ls=[{ref:"T1",name:"Lunettes photochromique T1",price:7500,oldPrice:1e4,categories:["Photochromiques"],rating:"4,8",reviews:"1 787 avis v\xE9rifi\xE9s",short:"Des lunettes photochromiques \xE9l\xE9gantes qui s\u2019adaptent \xE0 la luminosit\xE9 pour vous accompagner aussi bien en int\xE9rieur qu\u2019en ext\xE9rieur.",long:"La T1 associe une monture rectangulaire noir et argent \xE0 des verres photochromiques qui s\u2019assombrissent lorsque l\u2019exposition lumineuse augmente. Son design polyvalent convient aussi bien au quotidien, au travail, aux \xE9crans qu\u2019aux d\xE9placements en ext\xE9rieur.",specs:["Verres photochromiques","Protection UV400","Filtre anti-lumi\xE8re bleue","Traitement anti-reflet","Monture noir & argent","Style rectangulaire"],colors:[],images:["img/products/t1-1.webp","img/products/t1-2.webp","img/products/t1-3.webp","img/products/t1-4.webp","img/products/t1-5.webp"]},{ref:"CH1",name:"Lunettes Chrome Hearts",price:1e4,oldPrice:15e3,categories:["Style"],rating:"4,5",reviews:"514 avis v\xE9rifi\xE9s",short:"Des lunettes Chrome Hearts \xE9l\xE9gantes avec filtre anti-lumi\xE8re bleue, pens\xE9es pour am\xE9liorer le confort visuel pendant vos journ\xE9es devant les \xE9crans.",long:"Le mod\xE8le CH1 associe un design affirm\xE9 \xE0 des verres avec filtre anti-lumi\xE8re bleue. Il accompagne le travail sur ordinateur, le t\xE9l\xE9phone, les \xE9tudes et les longues p\xE9riodes devant les \xE9crans, avec une monture confortable disponible en deux finitions.",specs:["Filtre anti-lumi\xE8re bleue","Traitement anti-reflet","Confort pour les \xE9crans","Monture l\xE9g\xE8re et \xE9l\xE9gante","Deux couleurs disponibles : transparent & noir"],colors:["Transparent","Noir"],images:["img/products/ch1-1.webp","img/products/ch1-2.webp","img/products/ch1-3.webp","img/products/ch1-4.webp"]},{ref:"T2",name:"Lunettes photochromique T2",price:1e4,oldPrice:13500,categories:["Photochromiques"],rating:"4,8",reviews:"300 avis v\xE9rifi\xE9s",short:"Une monture photochromique premium au design g\xE9om\xE9trique, con\xE7ue pour combiner \xE9l\xE9gance, confort visuel et transition automatique des verres selon la luminosit\xE9.",long:"Le mod\xE8le T2 se distingue par une silhouette g\xE9om\xE9trique contemporaine et une monture m\xE9tallique \xE0 la finition soign\xE9e. Ses verres photochromiques s\u2019assombrissent lorsque l\u2019exposition lumineuse augmente, puis retrouvent progressivement leur transparence en int\xE9rieur. Un mod\xE8le pens\xE9 pour ceux qui recherchent une allure plus structur\xE9e, un bon maintien et un usage polyvalent au quotidien.",specs:["Verres photochromiques","Protection UV400","Filtre anti-lumi\xE8re bleue","Traitement anti-reflet","Monture m\xE9tallique \xE0 finition premium","Design g\xE9om\xE9trique moderne","Plaquettes nasales r\xE9glables pour un meilleur confort"],colors:[],images:["img/products/t2-1.webp","img/products/t2-2.webp","img/products/t2-3.webp","img/products/t2-4.webp"]},{ref:"PX1",name:"Lunettes photochromique premium PX1",price:17e3,oldPrice:22e3,categories:["Photochromiques","Premium"],rating:"5",reviews:"plus de 143 avis v\xE9rifi\xE9s",short:"Mod\xE8le premium \xE0 haute photosensibilit\xE9, con\xE7u pour associer \xE9l\xE9gance, l\xE9g\xE8ret\xE9 et confort visuel. Ses verres photochromiques gris adaptent progressivement leur teinte \xE0 l\u2019intensit\xE9 lumineuse.",long:"Le PX1 appartient \xE0 la s\xE9lection Premium JUBRIKA. Sa monture associe TR90 et ac\xE9tate de cellulose pour rechercher l\xE9g\xE8ret\xE9, souplesse et finition soign\xE9e. Les verres photochromiques gris int\xE8grent une technologie \xE0 mol\xE9cules photoactives : ils s\u2019assombrissent sous l\u2019effet des UV et retrouvent progressivement une teinte plus claire lorsque l\u2019exposition diminue. La filtration s\xE9lective de la lumi\xE8re bleue et la protection UV compl\xE8tent un mod\xE8le pens\xE9 pour un usage quotidien haut de gamme.",specs:["Monture : TR90 & ac\xE9tate de cellulose","Verres : polycarbonate optique / r\xE9sine organique CR-39 selon d\xE9clinaison","Technologie photochromique \xE0 mol\xE9cules photoactives","Teinte photochromique grise","Filtration s\xE9lective de la lumi\xE8re bleue","Protection UV","Design Premium, l\xE9ger et confortable"],colors:[],images:["img/products/px1-1.webp","img/products/px1-2.webp","img/products/px1-3.webp","img/products/px1-4.webp","img/products/px1-5.webp","img/products/px1-6.webp","img/products/px1-7.webp","img/products/px1-8.webp"]},{ref:"TS1",name:"Lunettes photochromiques TS1",price:15e3,oldPrice:18500,categories:["Photochromiques"],rating:"4,3",reviews:"plus de 58 avis v\xE9rifi\xE9s",short:"Vous \xEAtes g\xEAn\xE9 par le soleil, les changements brusques de luminosit\xE9 ou vous cherchez une paire qui reste \xE9l\xE9gante du matin au soir ? Les TS1 associent verres photochromiques, protection UV et design rond affirm\xE9 pour vous accompagner aussi bien en int\xE9rieur qu\u2019en ext\xE9rieur.",long:"Le soleil vous oblige souvent \xE0 plisser les yeux ? Les verres photochromiques TS1 foncent sous l\u2019effet des UV afin de r\xE9duire la quantit\xE9 de lumi\xE8re visible re\xE7ue et d\u2019am\xE9liorer le confort \xE0 l\u2019ext\xE9rieur.",specs:["Verres photochromiques","Protection UV400","Filtre anti-lumi\xE8re bleue","Traitement anti-reflet","Monture ronde structur\xE9e","Branches larges pour une bonne tenue","Usage int\xE9rieur / ext\xE9rieur"],colors:[],images:["img/products/ts1-1.webp","img/products/ts1-2.webp","img/products/ts1-3.webp","img/products/ts1-4.webp","img/products/ts1-5.webp","img/products/ts1-6.webp"]},{ref:"T8",name:"Lunettes photochromiques T8",price:12e3,oldPrice:16500,categories:["Photochromiques"],rating:"4,1",reviews:"plus de 55 avis v\xE9rifi\xE9s",short:"Vous \xEAtes souvent g\xEAn\xE9 par le soleil, les reflets ou les changements rapides de luminosit\xE9 ? Les T8 combinent verres photochromiques, protection UV et une monture carr\xE9e affirm\xE9e pour vous accompagner confortablement de l\u2019int\xE9rieur vers l\u2019ext\xE9rieur.",long:"La forte luminosit\xE9 ext\xE9rieure vous g\xEAne ? Les verres photochromiques T8 s\u2019assombrissent sous l\u2019effet des UV afin de r\xE9duire la quantit\xE9 de lumi\xE8re visible re\xE7ue et d\u2019am\xE9liorer le confort \xE0 l\u2019ext\xE9rieur.",specs:["Verres photochromiques","Protection UV400","Filtre anti-lumi\xE8re bleue","Traitement anti-reflet","Monture carr\xE9e structur\xE9e","Branches incurv\xE9es pour une meilleure tenue","Usage int\xE9rieur / ext\xE9rieur"],colors:[],images:["img/products/t8-1.webp","img/products/t8-2.webp","img/products/t8-3.webp","img/products/t8-4.webp","img/products/t8-5.webp"]},{ref:"B1",name:"Lunettes photochromiques Blue Effect B1",price:15e3,oldPrice:19e3,categories:["Photochromiques"],rating:"4,5",reviews:"plus de 274 avis v\xE9rifi\xE9s",short:"Vous passez beaucoup de temps devant le t\xE9l\xE9phone, l\u2019ordinateur ou la t\xE9l\xE9vision et vous \xEAtes r\xE9guli\xE8rement expos\xE9 \xE0 la lumi\xE8re des \xE9crans ? Le mod\xE8le B1 Blue Effect combine un filtre anti-lumi\xE8re bleue, un traitement anti-reflet et une protection UV400. Ses verres photochromiques \xE0 effet bleu s\u2019adaptent \xE9galement \xE0 la lumi\xE8re ext\xE9rieure et prennent une teinte bleut\xE9e au soleil : une seule paire pens\xE9e pour accompagner vos journ\xE9es entre \xE9crans et ext\xE9rieur.",long:"Le soleil vous oblige souvent \xE0 plisser les yeux ? Les verres photochromiques B1 foncent sous l\u2019effet des UV afin de r\xE9duire la quantit\xE9 de lumi\xE8re visible re\xE7ue et d\u2019am\xE9liorer le confort \xE0 l\u2019ext\xE9rieur.",specs:["Verres photochromiques Blue Effect","Filtre anti-lumi\xE8re bleue \u2014 usage \xE9crans","Protection UV400","Traitement anti-reflet","Teinte bleut\xE9e activ\xE9e par la lumi\xE8re ext\xE9rieure","Monture m\xE9tallique fine et l\xE9g\xE8re","Plaquettes nasales pour un meilleur confort","Usage int\xE9rieur / \xE9crans / ext\xE9rieur"],colors:[],images:["img/products/b1-1.webp","img/products/b1-2.webp","img/products/b1-3.webp","img/products/b1-4.webp","img/products/b1-5.webp","img/products/b1-6.webp"]},{ref:"T4",name:"Lunettes photochromiques T4",price:1e4,oldPrice:13500,categories:["Photochromiques"],rating:"4,3",reviews:"plus de 350 avis v\xE9rifi\xE9s",short:"Vous \xEAtes g\xEAn\xE9 par le soleil, les \xE9crans ou les variations brusques de luminosit\xE9 ? Les T4 combinent photochromisme, protection UV et filtre anti-lumi\xE8re bleue pour vous accompagner au quotidien tout en r\xE9duisant l\u2019inconfort li\xE9 \xE0 la lumi\xE8re.",long:"Le soleil vous \xE9blouit rapidement lorsque vous sortez ? Les verres photochromiques T4 s\u2019assombrissent sous l\u2019effet des UV afin de r\xE9duire la quantit\xE9 de lumi\xE8re visible re\xE7ue et d\u2019am\xE9liorer le confort \xE0 l\u2019ext\xE9rieur.",specs:["Verres photochromiques","Protection UV400","Filtre anti-lumi\xE8re bleue","Traitement anti-reflet","Monture l\xE9g\xE8re et structur\xE9e","Confort int\xE9rieur / ext\xE9rieur"],colors:[],images:["img/products/t4-1.webp","img/products/t4-2.webp","img/products/t4-3.webp","img/products/t4-4.webp","img/products/t4-5.webp","img/products/t4-6.webp","img/products/t4-7.webp","img/products/t4-8.webp"]},{ref:"T6",name:"Lunettes photochromiques T6",price:1e4,oldPrice:14e3,categories:["Photochromiques"],rating:"5",reviews:"plus de 29 avis v\xE9rifi\xE9s",short:"Une paire photochromique au design rond, l\xE9g\xE8re et polyvalente, pens\xE9e pour accompagner les changements de luminosit\xE9 entre int\xE9rieur et ext\xE9rieur.",long:`Caract\xE9ristiques principales
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
   if(!Number.isFinite(q)||q`],colors:["Noir","Dor\xE9","Argent\xE9"],images:["img/products/rgb1-1.webp","img/products/rgb1-2.webp","img/products/rgb1-3.webp","img/products/rgb1-4.webp","img/products/rgb1-5.webp","img/products/rgb1-6.webp"]}];var lr={Akwa:1e3,"Ange Rapha\xEBl":1e3,"A\xE9roport / Texaco A\xE9roport":1e3,Bali:1500,Bassa:1500,Beedi:1e3,B\u00E9panda:1e3,Bilongu\u00E9:1e3,"Bois des Singes":1500,Bonab\u00E9ri:1500,Bonanjo:1500,Bonangang:1e3,Bonangando:1e3,Bonapriso:1500,Bonassama:1500,Bonamoussadi:1e3,Brazzaville:1e3,"Cit\xE9 des Palmiers":1e3,"Cit\xE9 SIC":1e3,De\u00EFdo:1e3,Dibom:1500,Japoma:1500,Kotto:1e3,Lendi:1500,Logbaba:1e3,Logbessou:1e3,Logpom:1e3,Madagascar:1e3,Mak\u00E9p\u00E9:1e3,Mambanda:1500,Ndogbati:1e3,Ndogbong:1e3,Ndoghem:1e3,Ndogpassi:1e3,Ndogsimbi:1e3,Ndobo:1500,Ndokoti:1e3,"New-Bell":1e3,Nyalla:1e3,Nylon:1e3,Oyack:1e3,Sodiko:1e3,Yassa:1500,"PK 8":1e3,"PK 9":1e3,"PK 10":1e3,"PK 11":1e3,"PK 12":1e3,"PK 13":1e3,"PK 14":1e3,"PK 15":1500,"PK 16":1500,"PK 17":1500,"PK 18":1500,"PK 19":1500},Mh={aeroport:"A\xE9roport / Texaco A\xE9roport","texaco aeroport":"A\xE9roport / Texaco A\xE9roport",texaco:"A\xE9roport / Texaco A\xE9roport",deido:"De\xEFdo",bepanda:"B\xE9panda",bonaberi:"Bonab\xE9ri",makepe:"Mak\xE9p\xE9",bilongue:"Bilongu\xE9","cite sic":"Cit\xE9 SIC","cite des palmiers":"Cit\xE9 des Palmiers","bois de singe":"Bois des Singes","bois des singes":"Bois des Singes","ange raphael":"Ange Rapha\xEBl","new bell":"New-Bell","ndog bongo":"Ndogbong"},qn={Bafoussam:2e3,Garoua:4e3,Maroua:4e3,Guider:4e3,Bertoua:3e3,Buea:2e3,Limb\u00E9:2e3,Kumba:2e3,Kribi:2e3,Ebolowa:2e3,Batouri:3e3,Foumban:2e3,Dschang:2e3,Nkongsamba:2e3,Ed\u00E9a:2e3,"Garoua-Boula\xEF":3e3};function Is(r){return String(r||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[-_/]+/g," ").replace(/\s+/g," ").trim()}var cr={Bastos:1e3,Cradat:1e3,Nlongkak:1e3,"Mvog-Ada":1e3,Essos:1e3,"Mvog-Mbi":1e3,Mimboman:1e3,Ekounou:1e3,Kondengui:1e3,Nkolndongo:1e3,Anguissa:1e3,Omnisports:1e3,Ngousso:1e3,Etoudi:1e3,Emana:1e3,Messassi:1e3,Olembe:1500,"Mballa II":1500,Manguier:1e3,"Elig-Essono":1e3,"Elig-Edzoa":1500,Tsinga:1500,Mokolo:1e3,Madagascar:1e3,Messa:1e3,Briqueterie:1e3,"Cit\xE9 Verte":1e3,Obili:1e3,"Ngoa-Ek\xE9l\xE9":1e3,Melen:1e3,Efoulan:1e3,Nsam:1500,Olezoa:1e3,Dakar:1e3,Ahala:1500,Obobogo:1e3,Mvan:1e3,Odza:1500,Messamendongo:1e3,Ekoumdoum:1e3,Awae:1500,Nkomo:1e3,Biteng:1e3,"Biyem-Assi":1e3,Mendong:1e3,"Etoug-Ebe":1e3,"Mvog-Betsi":1e3,Simbock:1e3,Nkolbikok:1e3,Etetak:1500,"Oyom-Abang":1500,Nkolbisson:1e3,Minkoameyos:1500,Nyom:1e3,Nkolondom:1e3,Nkolfoulou:1500,Acacias:1e3,Jouvence:1e3,Nsimeyong:1e3,Damas:1e3,Nkomkana:1e3,"Santa Barbara":1e3,"Mont\xE9e Jouvence":1e3,"Carrefour R\xE9gie":1e3,"Etoa-Meki":1e3,Ekie:1e3,Nkoabang:1e3,Soa:1500,Mbankomo:2e3,Febe:1e3,Dragages:1e3,Golf:1e3,"Mont F\xE9b\xE9":1e3,"Carrefour MEEC":1e3,"Tradex \xC9leveur":1e3,\u00C9leveur:1e3,Tongolo:1e3,"Mvog Atangana Mballa":1e3,"Carrefour Ahala":1500,"Carrefour Tropicana":1e3,"Carrefour Nkoabang":1e3,"Carrefour Mvog-Mbi":1e3,"Carrefour Nsam":1500,"Carrefour Obili":1e3,"Carrefour Etoug-Ebe":1e3,"Carrefour Mendong":1e3,"Carrefour Messassi":1e3,"Carrefour Emana":1e3,"Carrefour Olembe":1e3},bh={"vog ada":"Mvog-Ada","vog mbi":"Mvog-Mbi","mimbo man":"Mimboman",ekunu:"Ekounou",kodengui:"Kondengui",kondongo:"Nkolndongo",gouso:"Ngousso",etudi:"Etoudi","mala 2":"Mballa II",manguie:"Manguier","elike sono":"Elig-Essono","elik edjoa":"Elig-Edzoa",tinga:"Tsinga",biketeri:"Briqueterie",ngwaikele:"Ngoa-Ek\xE9l\xE9",melene:"Melen",foulane:"Efoulan",sam:"Nsam",ala:"Ahala",obogo:"Obobogo",van:"Mvan",oja:"Odza",epundum:"Ekoumdoum",awai:"Awae",biemassi:"Biyem-Assi",etugbebie:"Etoug-Ebe",vogbetsi:"Mvog-Betsi",kolbikok:"Nkolbikok",etekak:"Etetak","oyoma bank":"Oyom-Abang",kolbisson:"Nkolbisson",kemeyos:"Minkoameyos",myom:"Nyom",kolondom:"Nkolondom",akassi:"Acacias",simeo:"Nsimeyong",comkana:"Nkomkana","etoile meki":"Etoa-Meki",ekie:"Ekie",kouabang:"Nkoabang",konfolo:"Nkolfoulou",bancomo:"Mbankomo",dragage:"Dragages","mont febe":"Mont F\xE9b\xE9",tangolo:"Tongolo","vokatanga nambala":"Mvog Atangana Mballa","carrefour aala":"Carrefour Ahala","carrefour kouabang":"Carrefour Nkoabang","carrefour vogbe":"Carrefour Mvog-Mbi","carrefour smart":"Carrefour Nsam","carrefour etoubebe":"Carrefour Etoug-Ebe","carrefour mindong":"Carrefour Mendong","carrefour messa":"Carrefour Messassi","carrefour imana":"Carrefour Emana","carrefour olombe":"Carrefour Olembe"},Sh=Object.fromEntries(Object.keys(lr).map(r=>[Is(r),r])),Eh=Object.fromEntries(Object.keys(cr).map(r=>[Is(r),r]));function Ii(r,e){let t=Is(e);if(!t)return null;let n=null,i=null;if(r==="Douala")n=Sh,i=Mh;else if(r==="Yaound\xE9")n=Eh,i=bh;else return null;if(n[t])return n[t];if(i[t])return i[t];let s=Object.keys(n).filter(a=>a.startsWith(t)||t.startsWith(a));return s.length===1?n[s[0]]:null}function $o(r,e){let t=Ii(r,e);return r==="Douala"&&t?lr[t]:r==="Yaound\xE9"&&t?cr[t]:0}var Kd="237689748143",$d="+237652212999",at=r=>new Intl.NumberFormat("fr-FR").format(r)+" FCFA",ge=(r,e=document)=>e.querySelector(r),Qe=(r,e=document)=>[...e.querySelectorAll(r)],ot=r=>String(r).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Kc=r=>Math.round((1-r.price/r.oldPrice)*100),Qd=r=>{let e=r.name.replace(/^Lunettes /,"");return e[0].toUpperCase()+e.slice(1)},$c=r=>r.rating?`\u2605 ${r.rating} \xB7 ${r.reviews}`:"",Ao=ge("#menu-btn"),Ro=ge("#gnav-links");Ao.addEventListener("click",()=>{let r=Ro.classList.toggle("open");Ao.setAttribute("aria-expanded",r)});Ro.addEventListener("click",r=>{r.target.closest("a")&&(Ro.classList.remove("open"),Ao.setAttribute("aria-expanded","false"))});var Qc=ge("#grid");Qc.innerHTML=Ls.map(r=>`
  <article class="card" data-categories="${ot(r.categories.join(" "))}">
    <a class="card-media" href="#produit-${r.ref}"><img src="${r.images[0]}" alt="${ot(r.name)}" loading="lazy"></a>
    <p class="launch">${r.categories.includes("Premium")?"Premium":`Promo \u2212${Kc(r)} %`}</p>
    <h3>${ot(Qd(r))}</h3>
    <p class="rating">${ot($c(r))}</p>
    <p class="price">${at(r.price)}<s>${at(r.oldPrice)}</s></p>
    <div class="card-actions">
      <a class="pill pill-blue" href="#produit-${r.ref}">Acheter</a>
      <a class="text-link" href="#produit-${r.ref}">En savoir plus \u203A</a>
    </div>
  </article>`).join("");function eh(r){Qe(".filters .pill").forEach(e=>{let t=e.dataset.filter===r;e.classList.toggle("active",t),e.setAttribute("aria-selected",t)}),Qe(".card",Qc).forEach(e=>{e.hidden=r!=="Tous"&&!e.dataset.categories.split(" ").includes(r)})}Qe(".filters .pill").forEach(r=>r.addEventListener("click",()=>eh(r.dataset.filter)));Qe("a[data-filter]").forEach(r=>r.addEventListener("click",()=>eh(r.dataset.filter)));var Es=ge("#highlights"),tr=Qe(".hl-card",Es),th=ge("#hl-dots");th.innerHTML=tr.map(()=>"<i></i>").join("");var Io=()=>Math.round(Es.scrollLeft/(tr[0].offsetWidth+20)),nh=()=>Qe("i",th).forEach((r,e)=>r.classList.toggle("on",e===Math.min(Io(),tr.length-1))),ih=r=>Es.scrollTo({left:Math.max(0,Math.min(r,tr.length-1))*(tr[0].offsetWidth+20),behavior:"smooth"});Es.addEventListener("scroll",nh,{passive:!0});ge("#hl-prev").addEventListener("click",()=>ih(Io()-1));ge("#hl-next").addEventListener("click",()=>ih(Io()+1));nh();var Yc=ge("#photochromique"),ep=Qe(".story-steps .step"),tp=ge("#uv-fill"),Ms=null,Co=null;function np(){let r=Yc.getBoundingClientRect(),e=Yc.offsetHeight-window.innerHeight;return Math.max(0,Math.min(1,-r.top/e))}function No(){let r=np(),e=Math.max(0,Math.min(1,(r-.2)/.45)),t=r<.33?0:r<.72?1:2;ep.forEach((n,i)=>n.classList.toggle("active",i===t)),tp.style.width=e*100+"%",Ms&&(Ms.setTint(e),Ms.setRotation(-.6+r*.6,.12-r*.1))}window.addEventListener("scroll",No,{passive:!0});No();Promise.resolve().then(()=>(jc(),Xc)).then(({createGlasses:r,webglAvailable:e})=>{if(!e())throw new Error("webgl");let t=r(ge("#hero-canvas"),{model:"t1",rotationY:-.6,rotationX:.14});Qe(".light-toggle button").forEach(n=>n.addEventListener("click",()=>{Qe(".light-toggle button").forEach(i=>{i.classList.toggle("active",i===n),i.setAttribute("aria-pressed",i===n)}),t.setTint(Number(n.dataset.tint))})),Ms=r(ge("#story-canvas"),{model:"t1",autoRotate:!1,interactive:!1,tintSpeed:5,rotationY:-.6}),Co=()=>r(ge("#t1-canvas"),{model:"t1",rotationY:-.6,rotationX:.12}),No()}).catch(()=>{ge("#hero-canvas").hidden=!0,ge(".hero-fallback").hidden=!1,ge(".light-toggle").hidden=!0,ge(".drag-hint").hidden=!0,ge("#story-canvas").hidden=!0,ge(".story-fallback").hidden=!1,ge(".seg").hidden=!0});var bs=72,Vt=ge("#spin"),ip=ge("#spin-img"),Po=ge("#spin-range"),rh=Array.from({length:bs},(r,e)=>`img/t1-360/${String(e).padStart(2,"0")}.webp`),er=0,Uo=!1;function Do(r){er=(Math.round(r)%bs+bs)%bs,ip.src=rh[er],Po.value=er}rh.forEach(r=>{let e=new Image;e.src=r});var Ss=null,sh=0;Vt.addEventListener("pointerdown",r=>{Ss=r.clientX,sh=er,Uo=!0,Vt.setPointerCapture(r.pointerId),Vt.classList.add("grabbing")});Vt.addEventListener("pointermove",r=>{Ss!==null&&Do(sh-(r.clientX-Ss)/8)});var ah=()=>{Ss=null,Vt.classList.remove("grabbing")};Vt.addEventListener("pointerup",ah);Vt.addEventListener("pointercancel",ah);Po.addEventListener("input",()=>{Uo=!0,Do(Number(Po.value))});var oh=!1;new IntersectionObserver(([r])=>{oh=r.isIntersecting}).observe(Vt);window.matchMedia("(prefers-reduced-motion: reduce)").matches||setInterval(()=>{oh&&!Uo&&!Vt.hidden&&Do(er+1)},90);var Lo=null;Qe(".seg button").forEach(r=>r.addEventListener("click",()=>{let e=r.dataset.view==="model";Qe(".seg button").forEach(t=>{t.classList.toggle("active",t===r),t.setAttribute("aria-selected",t===r)}),Vt.hidden=e,ge("#spin-ctrl").hidden=e,ge("#t1-canvas").hidden=!e,ge("#t1-toggle").hidden=!e,e&&!Lo&&Co&&(Lo=Co())}));Qe("#t1-toggle button").forEach(r=>r.addEventListener("click",()=>{Qe("#t1-toggle button").forEach(e=>{e.classList.toggle("active",e===r),e.setAttribute("aria-pressed",e===r)}),Lo?.setTint(Number(r.dataset.tint))}));var Zc=ge("#compare-range");Zc.addEventListener("input",()=>{let r=Zc.value;ge("#compare-top").style.clipPath=`inset(0 0 0 ${r}%)`,ge("#compare-line").style.left=r+"%"});var wo=ge("#toast"),Jc;function rp(r){wo.textContent=r,wo.hidden=!1,clearTimeout(Jc),Jc=setTimeout(()=>{wo.hidden=!0},4200)}var Vn=ge("#sheet"),Ri=ge("#sheet-body"),sp=["Douala","Yaound\xE9",...Object.keys(qn),"Autre ville"],ap=r=>Object.keys(r==="Douala"?lr:cr).sort((e,t)=>e.localeCompare(t,"fr"));function op(r){let e=Ls.find(n=>n.ref.toLowerCase()===String(r).toLowerCase());if(!e)return;Ri.innerHTML=`
    <div class="gallery">
      <div class="gallery-main"><img id="g-main" src="${e.images[0]}" alt="${ot(e.name)}"></div>
      <div class="thumbs">${e.images.map((n,i)=>`<button class="${i?"":"on"}" data-src="${n}" aria-label="Photo ${i+1}"><img src="${n}" alt="" loading="lazy"></button>`).join("")}</div>
    </div>
    <div class="info">
      <p class="launch">${e.categories.includes("Premium")?"S\xE9lection Premium":`Promo \u2212${Kc(e)} %`} \xB7 R\xE9f. ${ot(e.ref)}</p>
      <h2 id="sheet-title">${ot(e.name)}</h2>
      <p class="rating">${ot($c(e))}</p>
      <p class="price">${at(e.price)}<s>${at(e.oldPrice)}</s></p>
      <p class="short">${ot(e.short)}</p>
      <details>
        <summary>Description et caract\xE9ristiques</summary>
        <p>${ot(e.long)}</p>
        <ul class="specs">${e.specs.map(n=>`<li>${ot(n)}</li>`).join("")}</ul>
      </details>

      <form class="order" novalidate>
        <h3>Commander</h3>
        ${e.colors.length?`
        <div class="field" data-f="color">
          <label>Couleur <em>*</em></label>
          <div class="swatches">${e.colors.map(n=>`<button type="button" class="pill pill-outline" data-color="${ot(n)}">${ot(n)}</button>`).join("")}</div>
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
          <select id="f-city"><option value="">S\xE9lectionnez votre ville</option>${sp.map(n=>`<option>${n}</option>`).join("")}</select>
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
          <div><span>${ot(e.ref)} \xD7 <b id="s-q">1</b></span><span id="s-sub">${at(e.price)}</span></div>
          <div><span id="s-dl-label">Livraison</span><span id="s-dl">\u2014</span></div>
          <div class="total"><span>Total</span><span id="s-total">${at(e.price)}</span></div>
        </div>
        <button type="submit" class="pill pill-blue btn-block">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z" fill="currentColor"/></svg>
          Commander sur WhatsApp
        </button>
        <a class="pill pill-outline btn-block btn-call" href="tel:${$d}">Commander par appel</a>
        <p class="note">Livraison \xE0 Douala et Yaound\xE9 avec paiement \xE0 la livraison. Pour les autres villes, exp\xE9dition par l\u2019agence de votre choix.</p>
      </form>
    </div>`;let t=ge("#g-main",Ri);Qe(".thumbs button",Ri).forEach(n=>n.addEventListener("click",()=>{t.src=n.dataset.src,Qe(".thumbs button",Ri).forEach(i=>i.classList.toggle("on",i===n))})),lp(e),Vn.open||Vn.showModal(),Ri.scrollTop=0}function lp(r){let e=ge("form.order",Ri),t=ge("#f-qty",e),n=ge("#f-name",e),i=ge("#f-phone",e),s=ge("#f-city",e),a=ge("#f-area",e),o=ge("#f-addr",e),c=ge("#dl-area",e),l="",h=()=>s.value==="Douala"||s.value==="Yaound\xE9",d=()=>Object.prototype.hasOwnProperty.call(qn,s.value),u=()=>s.value==="Autre ville",p=()=>h()?$o(s.value,a.value):d()?qn[s.value]:0;Qe("[data-color]",e).forEach(v=>v.addEventListener("click",()=>{l=v.dataset.color,Qe("[data-color]",e).forEach(g=>g.classList.toggle("active",g===v)),y("color")})),Qe("[data-q]",e).forEach(v=>v.addEventListener("click",()=>{t.value=Math.max(1,(parseInt(t.value,10)||1)+Number(v.dataset.q)),_()}));function f(){let v=ge("[data-f=area]",e);v.hidden=d(),h()?(ge("#l-area",e).innerHTML="Quartier <em>*</em>",a.placeholder="Commencez \xE0 taper votre quartier",c.innerHTML=ap(s.value).map(M=>`<option value="${ot(M)}">`).join("")):(c.innerHTML="",u()&&(ge("#l-area",e).innerHTML="Votre ville <em>*</em>",a.placeholder="Saisissez votre ville"));let g=d()||u();ge("#l-addr",e).textContent=g?"Agence ou compagnie de transport souhait\xE9e":"Adresse ou rep\xE8re de livraison",o.placeholder=g?"Ex : G\xE9n\xE9ral, Touristique, Overline\u2026":"Ex : immeuble, rue, carrefour, lieu connu\u2026",a.value="",_()}function _(){let v=Math.max(1,parseInt(t.value,10)||1),g=r.price*v;ge("#s-q",e).textContent=v,ge("#s-sub",e).textContent=at(g),ge("#s-dl-label",e).textContent=d()||u()?"Exp\xE9dition":"Livraison",!s.value||h()&&!Ii(s.value,a.value)?(ge("#s-dl",e).textContent="\u2014",ge("#s-total",e).textContent=at(g)):u()?(ge("#s-dl",e).textContent="\xC0 confirmer",ge("#s-total",e).textContent="\xC0 confirmer"):(ge("#s-dl",e).textContent=at(p()),ge("#s-total",e).textContent=at(g+p()))}function m(v,g){let M=ge(`[data-f=${v}]`,e);return M.classList.add("err"),ge(".msg",M)||M.insertAdjacentHTML("beforeend",`<span class="msg">${ot(g)}</span>`),M}function y(v){let g=ge(`[data-f=${v}]`,e);g&&(g.classList.remove("err"),ge(".msg",g)?.remove())}s.addEventListener("change",()=>{y("city"),y("area"),f()}),t.addEventListener("input",_),a.addEventListener("input",()=>{y("area"),_()}),n.addEventListener("input",()=>y("name")),i.addEventListener("input",()=>y("phone")),e.addEventListener("submit",v=>{v.preventDefault(),["color","name","phone","city","area"].forEach(y);let g=[];if(r.colors.length&&!l&&g.push(m("color","Choisissez une couleur.")),n.value.trim()||g.push(m("name","Votre nom est obligatoire.")),i.value.trim()||g.push(m("phone","Votre num\xE9ro est obligatoire.")),s.value?h()&&!a.value.trim()?g.push(m("area","Votre quartier est obligatoire.")):h()&&!Ii(s.value,a.value)?g.push(m("area",`Choisissez un quartier propos\xE9 pour ${s.value}.`)):u()&&!a.value.trim()&&g.push(m("area","Saisissez votre ville.")):g.push(m("city","Votre ville est obligatoire.")),g.length){g[0].scrollIntoView({behavior:"smooth",block:"center"}),rp("Veuillez compl\xE9ter les champs obligatoires (*).");return}let M=Math.max(1,parseInt(t.value,10)||1),R=r.price*M,b,w,I,P;h()?(b=at(p()),w=at(R+p()),I=`Quartier : ${Ii(s.value,a.value)}`,P=`Adresse / rep\xE8re : ${o.value.trim()}`):d()?(b=at(qn[s.value]),w=at(R+qn[s.value]),I="Mode : Exp\xE9dition",P=`Agence de pr\xE9f\xE9rence : ${o.value.trim()}`):(b="\xC0 confirmer avec le service client",w="\xC0 confirmer",I=`Ville d\u2019exp\xE9dition : ${a.value.trim()}`,P=`Agence de pr\xE9f\xE9rence : ${o.value.trim()}`);let U=["Bonjour, je souhaite commander chez JUBRIKA.","",`Produit : ${r.name} (R\xE9f. ${r.ref})`,l?`Couleur : ${l}`:null,`Quantit\xE9 : ${M}`,`Prix unitaire : ${at(r.price)}`,`Sous-total : ${at(R)}`,`Livraison / Exp\xE9dition : ${b}`,`TOTAL : ${w}`,"",`Nom : ${n.value.trim()}`,`T\xE9l\xE9phone : ${i.value.trim()}`,`Ville : ${u()?a.value.trim():s.value}`,I,P].filter(q=>q!==null);window.open(`https://wa.me/${Kd}?text=${encodeURIComponent(U.join(`
`))}`,"_blank","noopener")}),_()}function lh(){Vn.open&&Vn.close()}Vn.addEventListener("close",()=>{location.hash.startsWith("#produit-")&&history.replaceState(null,"",location.pathname+location.search)});ge("#sheet-close").addEventListener("click",lh);Vn.addEventListener("click",r=>{r.target===Vn&&lh()});function ch(){let r=location.hash.match(/^#produit-([\w]+)$/i);r&&op(r[1])}window.addEventListener("hashchange",ch);ch();})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
