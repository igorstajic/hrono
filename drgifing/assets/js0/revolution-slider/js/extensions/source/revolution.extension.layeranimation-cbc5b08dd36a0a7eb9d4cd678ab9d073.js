!function(a){function e(a,e,t,i,n,o,r){var d=a.find(e);d.css("borderWidth",o+"px"),d.css(t,0-o+"px"),d.css(i,"0px solid transparent"),d.css(n,r)}var t=jQuery.fn.revolution,i=t.is_mobile();jQuery.extend(!0,t,{animcompleted:function(a,e){var i=a.data("videotype"),n=a.data("autoplay"),o=a.data("autoplayonlyfirsttime");void 0!=i&&"none"!=i&&(1==n||"true"==n||"on"==n||"1sttime"==n||o?(t.playVideo(a,e),(o||"1sttime"==n)&&(a.data("autoplayonlyfirsttime",!1),a.data("autoplay","off"))):"no1sttime"==n&&a.data("autoplay","on"))},handleStaticLayers:function(a,e){var t=parseInt(a.data("startslide"),0),i=parseInt(a.data("endslide"),0);0>t&&(t=0),0>i&&(i=e.slideamount),0===t&&i===e.slideamount-1&&(i=e.slideamount+1),a.data("startslide",t),a.data("endslide",i)},animateTheCaptions:function(a,e,i,n){var o="carousel"===e.sliderType?0:e.width/2-e.gridwidth[e.curWinRange]*e.bw/2,r=0,d=a.data("index");e.layers=e.layers||new Object,e.layers[d]=e.layers[d]||a.find(".tp-caption"),e.layers["static"]=e.layers["static"]||e.c.find(".tp-static-layers").find(".tp-caption");var s=new Array;if(e.conh=e.c.height(),e.conw=e.c.width(),e.ulw=e.ul.width(),e.ulh=e.ul.height(),e.debugMode){a.addClass("indebugmode"),a.find(".helpgrid").remove(),e.c.find(".hglayerinfo").remove(),a.append('<div class="helpgrid" style="width:'+e.gridwidth[e.curWinRange]*e.bw+"px;height:"+e.gridheight[e.curWinRange]*e.bw+'px;"></div>');var l=a.find(".helpgrid");l.append('<div class="hginfo">Zoom:'+Math.round(100*e.bw)+"% &nbsp;&nbsp;&nbsp; Device Level:"+e.curWinRange+"&nbsp;&nbsp;&nbsp; Grid Preset:"+e.gridwidth[e.curWinRange]+"x"+e.gridheight[e.curWinRange]+"</div>"),e.c.append('<div class="hglayerinfo"></div>'),l.append('<div class="tlhg"></div>')}s&&jQuery.each(s,function(a){var e=jQuery(this);punchgs.TweenLite.set(e.find(".tp-videoposter"),{autoAlpha:1}),punchgs.TweenLite.set(e.find("iframe"),{autoAlpha:0})}),e.layers[d]&&jQuery.each(e.layers[d],function(a,e){s.push(e)}),e.layers["static"]&&jQuery.each(e.layers["static"],function(a,e){s.push(e)}),s&&jQuery.each(s,function(a){t.animateSingleCaption(jQuery(this),e,o,r,a,i)});var p=jQuery("body").find("#"+e.c.attr("id")).find(".tp-bannertimer");p.data("opt",e),void 0!=n&&setTimeout(function(){n.resume()},30)},animateSingleCaption:function(a,o,d,v,y,b,x){var T=b,L=c(a,o,"in",!0),W=a.data("_pw")||a.closest(".tp-parallax-wrap"),C=a.data("_lw")||a.closest(".tp-loop-wrap"),j=a.data("_mw")||a.closest(".tp-mask-wrap"),R=a.data("responsive")||"on",I=a.data("responsive_offset")||"on",k=a.data("basealign")||"grid",_="grid"===k?o.width:o.ulw,z="grid"===k?o.height:o.ulh,Q=jQuery("body").hasClass("rtl");if(a.data("_pw")||(a.data("_pw",W),a.data("_lw",C),a.data("_mw",j)),"fullscreen"==o.sliderLayout&&(v=z/2-o.gridheight[o.curWinRange]*o.bh/2),("on"==o.autoHeight||void 0!=o.minHeight&&o.minHeight>0)&&(v=o.conh/2-o.gridheight[o.curWinRange]*o.bh/2),0>v&&(v=0),o.debugMode){a.closest("li").find(".helpgrid").css({top:v+"px",left:d+"px"});var S=o.c.find(".hglayerinfo");a.on("hover, mouseenter",function(){var e="";a.data()&&jQuery.each(a.data(),function(a,t){"object"!=typeof t&&(e=e+'<span style="white-space:nowrap"><span style="color:#27ae60">'+a+":</span>"+t+"</span>&nbsp; &nbsp; ")}),S.html(e)})}var M=h(a.data("visibility"),o)[o.forcedWinRange]||h(a.data("visibility"),o)||"on";if("off"==M||_<o.hideCaptionAtLimit&&"on"==a.data("captionhidden")||_<o.hideAllCaptionAtLimit?a.addClass("tp-hidden-caption"):a.removeClass("tp-hidden-caption"),a.data("layertype","html"),0>d&&(d=0),void 0!=a.data("thumbimage")&&void 0==a.data("videoposter")&&a.data("videoposter",a.data("thumbimage")),a.hasClass("tp-videolayer")&&void 0!=a.data("videoposter")&&("on"==a.data("posterOnMobile")||"on"==a.data("posteronmobile"))&&i){var O=h(a.data("videowidth"),o)[o.curWinRange]||h(a.data("videowidth"),o)||"auto",H=h(a.data("videoheight"),o)[o.curWinRange]||h(a.data("videoheight"),o)||"auto";O=parseFloat(F),H=parseFloat(A),a.append('<div class="tp-videoposter" style="position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url('+a.data("videoposter")+'); background-size:cover;background-position:center center;"></div>'),"100%"!=O?a.css({minWidth:O+"px",minHeight:H+"px"}):a.css({width:"100%",height:"100%"}),a.removeClass("tp-videolayer")}if(a.find("img").length>0){var B=a.find("img");a.data("layertype","image"),0==B.width()&&B.css({width:"auto"}),0==B.height()&&B.css({height:"auto"}),void 0==B.data("ww")&&B.width()>0&&B.data("ww",B.width()),void 0==B.data("hh")&&B.height()>0&&B.data("hh",B.height());var F=B.data("ww"),A=B.data("hh"),D="slide"==k?o.ulw:o.gridwidth[o.curWinRange],P="slide"==k?o.ulh:o.gridheight[o.curWinRange],F=h(B.data("ww"),o)[o.curWinRange]||h(B.data("ww"),o)||"auto",A=h(B.data("hh"),o)[o.curWinRange]||h(B.data("hh"),o)||"auto",X="full"===F||"full-proportional"===F,Y="full"===A||"full-proportional"===A;if("full-proportional"===F){var V=B.data("owidth"),N=B.data("oheight");N/P>V/D?(F=D,A=N*(D/V)):(A=P,F=V*(P/N))}else F=X?D:parseFloat(F),A=Y?P:parseFloat(A);void 0==F&&(F=0),void 0==A&&(A=0),"off"!==R?("grid"!=k&&X?B.width(F):B.width(F*o.bw),"grid"!=k&&Y?B.height(A):B.height(A*o.bh)):(B.width(F),B.height(A))}if("slide"===k&&(d=0,v=0),a.hasClass("tp-videolayer")||a.find("iframe").length>0||a.find("video").length>0){if(a.data("layertype","video"),t.manageVideoLayer(a,o,b,T),!b&&!T){a.data("videotype");t.resetVideo(a,o)}var Z=a.data("aspectratio");void 0!=Z&&Z.split(":").length>1&&t.prepareCoveredVideo(Z,o,a);var B=a.find("iframe")?a.find("iframe"):B=a.find("video"),$=a.find("iframe")?!1:!0,G=a.hasClass("coverscreenvideo");B.css({display:"block"}),void 0==a.data("videowidth")&&(a.data("videowidth",B.width()),a.data("videoheight",B.height()));var U,F=h(a.data("videowidth"),o)[o.curWinRange]||h(a.data("videowidth"),o)||"auto",A=h(a.data("videoheight"),o)[o.curWinRange]||h(a.data("videoheight"),o)||"auto";F=parseFloat(F),A=parseFloat(A),void 0===a.data("cssobj")&&(U=m(a,0),a.data("cssobj",U));var q=u(a.data("cssobj"),o);if("auto"==q.lineHeight&&(q.lineHeight=q.fontSize+4),a.hasClass("fullscreenvideo")||G){d=0,v=0,a.data("x",0),a.data("y",0);var E=z;"on"==o.autoHeight&&(E=o.conh),a.css({width:_,height:E})}else punchgs.TweenLite.set(a,{paddingTop:Math.round(q.paddingTop*o.bh)+"px",paddingBottom:Math.round(q.paddingBottom*o.bh)+"px",paddingLeft:Math.round(q.paddingLeft*o.bw)+"px",paddingRight:Math.round(q.paddingRight*o.bw)+"px",marginTop:q.marginTop*o.bh+"px",marginBottom:q.marginBottom*o.bh+"px",marginLeft:q.marginLeft*o.bw+"px",marginRight:q.marginRight*o.bw+"px",borderTopWidth:Math.round(q.borderTopWidth*o.bh)+"px",borderBottomWidth:Math.round(q.borderBottomWidth*o.bh)+"px",borderLeftWidth:Math.round(q.borderLeftWidth*o.bw)+"px",borderRightWidth:Math.round(q.borderRightWidth*o.bw)+"px",width:F*o.bw+"px",height:A*o.bh+"px"});(0==$&&!G||1!=a.data("forcecover")&&!a.hasClass("fullscreenvideo")&&!G)&&(B.width(F*o.bw),B.height(A*o.bh))}a.find(".tp-resizeme, .tp-resizeme *").each(function(){f(jQuery(this),o,"rekursive",R)}),a.hasClass("tp-resizeme")&&a.find("*").each(function(){f(jQuery(this),o,"rekursive",R)}),f(a,o,0,R);var J=a.outerHeight(),K=a.css("backgroundColor");e(a,".frontcorner","left","borderRight","borderTopColor",J,K),e(a,".frontcornertop","left","borderRight","borderBottomColor",J,K),e(a,".backcorner","right","borderLeft","borderBottomColor",J,K),e(a,".backcornertop","right","borderLeft","borderTopColor",J,K),"on"==o.fullScreenAlignForce&&(d=0,v=0);var aa=a.data("arrobj");if(void 0===aa){var aa=new Object;aa.voa=h(a.data("voffset"),o)[o.curWinRange]||h(a.data("voffset"),o)[0],aa.hoa=h(a.data("hoffset"),o)[o.curWinRange]||h(a.data("hoffset"),o)[0],aa.elx=h(a.data("x"),o)[o.curWinRange]||h(a.data("x"),o)[0],aa.ely=h(a.data("y"),o)[o.curWinRange]||h(a.data("y"),o)[0]}var ea=0==aa.voa.length?0:aa.voa,ta=0==aa.hoa.length?0:aa.hoa,ia=0==aa.elx.length?0:aa.elx,na=0==aa.ely.length?0:aa.ely,oa=a.outerWidth(!0),ra=a.outerHeight(!0);0==oa&&0==ra&&(oa=o.ulw,ra=o.ulh);var da="off"!==I?parseInt(ea,0)*o.bw:parseInt(ea,0),sa="off"!==I?parseInt(ta,0)*o.bw:parseInt(ta,0),la="grid"===k?o.gridwidth[o.curWinRange]*o.bw:_,pa="grid"===k?o.gridheight[o.curWinRange]*o.bw:z;"on"==o.fullScreenAlignForce&&(la=o.ulw,pa=o.ulh),ia="center"===ia||"middle"===ia?la/2-oa/2+sa:"left"===ia?sa:"right"===ia?la-oa-sa:"off"!==I?ia*o.bw:ia,na="center"==na||"middle"==na?pa/2-ra/2+da:"top"==na?da:"bottom"==na?pa-ra-da:"off"!==I?na*o.bw:na,Q&&(ia+=oa);var ha=a.data("lasttriggerstate"),ca=a.data("triggerstate"),ga=a.data("start")||100,ma=a.data("end"),ua=x?0:"bytrigger"===ga||"sliderenter"===ga?0:parseFloat(ga)/1e3,va=ia+d,fa=na+v,wa=a.css("z-Index");x||("reset"==ha&&"bytrigger"!=ga?(a.data("triggerstate","on"),a.data("animdirection","in"),ca="on"):"reset"==ha&&"bytrigger"==ga&&(a.data("triggerstate","off"),a.data("animdirection","out"),ca="off")),punchgs.TweenLite.set(W,{zIndex:wa,top:fa,left:va,overwrite:"auto"}),0==L&&(T=!0),void 0==a.data("timeline")||T||(2!=L&&a.data("timeline").gotoAndPlay(0),T=!0),!b&&a.data("timeline_out")&&2!=L&&0!=L&&(a.data("timeline_out").kill(),a.data("outstarted",0)),x&&void 0!=a.data("timeline")&&(a.removeData("$anims"),a.data("timeline").pause(0),a.data("timeline").kill(),void 0!=a.data("newhoveranim")&&(a.data("newhoveranim").progress(0),a.data("newhoveranim").kill()),a.removeData("timeline"),punchgs.TweenLite.killTweensOf(a),a.unbind("hover"),a.removeClass("rs-hover-ready"),a.removeData("newhoveranim"));var ya=a.data("timeline")?a.data("timeline").time():0,ba=void 0!==a.data("timeline")?a.data("timeline").progress():0,xa=a.data("timeline")||new punchgs.TimelineLite({smoothChildTiming:!0});if(ba=jQuery.isNumeric(ba)?ba:0,xa.pause(),1>ba&&1!=a.data("outstarted")||2==L||x){var Ta=a;if(void 0!=a.data("mySplitText")&&a.data("mySplitText").revert(),void 0!=a.data("splitin")&&a.data("splitin").match(/chars|words|lines/g)||void 0!=a.data("splitout")&&a.data("splitout").match(/chars|words|lines/g)){var La=a.find("a").length>0?a.find("a"):a;a.data("mySplitText",new punchgs.SplitText(La,{type:"lines,words,chars",charsClass:"tp-splitted",wordsClass:"tp-splitted",linesClass:"tp-splitted"})),a.addClass("splitted")}void 0!==a.data("mySplitText")&&a.data("splitin")&&a.data("splitin").match(/chars|words|lines/g)&&(Ta=a.data("mySplitText")[a.data("splitin")]);var Wa=new Object,Ca=void 0!=a.data("transform_in")?a.data("transform_in").match(/\(R\)/gi):!1;if(!a.data("$anims")||x||Ca){var ja=n(),Ra=n(),Ia=r(),ka=void 0!==a.data("transform_hover")||void 0!==a.data("style_hover");Ra=l(Ra,a.data("transform_idle")),ja=l(Ra,a.data("transform_in"),1==o.sdir),ka&&(Ia=l(Ia,a.data("transform_hover")),Ia=g(Ia,a.data("style_hover")),a.data("hover",Ia)),ja.elemdelay=void 0==a.data("elementdelay")?0:a.data("elementdelay"),Ra.anim.ease=ja.anim.ease=ja.anim.ease||punchgs.Power1.easeInOut,ka&&!a.hasClass("rs-hover-ready")&&(a.addClass("rs-hover-ready"),a.hover(function(a){var e=jQuery(a.currentTarget),t=e.data("hover"),i=e.data("timeline");i&&1==i.progress()&&(void 0===e.data("newhoveranim")||"none"===e.data("newhoveranim")?e.data("newhoveranim",punchgs.TweenLite.to(e,t.speed,t.anim)):(e.data("newhoveranim").progress(0),e.data("newhoveranim").play()))},function(a){var e=jQuery(a.currentTarget),t=e.data("timeline");t&&1==t.progress()&&void 0!=e.data("newhoveranim")&&e.data("newhoveranim").reverse()})),Wa=new Object,Wa.f=ja,Wa.r=Ra,a.data("$anims")}else Wa=a.data("$anims");var _a=p(a.data("mask_in")),za=new punchgs.TimelineLite;if(Wa.f.anim.x=Wa.f.anim.x*o.bw||s(Wa.f.anim.x,o,oa,ra,fa,va,"horizontal"),Wa.f.anim.y=Wa.f.anim.y*o.bw||s(Wa.f.anim.y,o,oa,ra,fa,va,"vertical"),2!=L||x){if(Ta!=a){var Qa=Wa.r.anim.ease;xa.add(punchgs.TweenLite.set(a,Wa.r.anim)),Wa.r=n(),Wa.r.anim.ease=Qa}if(Wa.f.anim.visibility="hidden",za.eventCallback("onStart",function(){punchgs.TweenLite.set(a,{visibility:"visible"}),a.data("iframes")&&a.find("iframe").each(function(){punchgs.TweenLite.set(jQuery(this),{autoAlpha:1})}),punchgs.TweenLite.set(W,{visibility:"visible"});var e={};e.layer=a,e.eventtype="enterstage",e.layertype=a.data("layertype"),e.layersettings=a.data(),o.c.trigger("revolution.layeraction",e)}),za.eventCallback("onComplete",function(){var e={};e.layer=a,e.eventtype="enteredstage",e.layertype=a.data("layertype"),e.layersettings=a.data(),o.c.trigger("revolution.layeraction",e),t.animcompleted(a,o)}),"sliderenter"==ga&&o.overcontainer&&(ua=.6),xa.add(za.staggerFromTo(Ta,Wa.f.speed,Wa.f.anim,Wa.r.anim,Wa.f.elemdelay),ua),_a){var Sa=new Object;Sa.ease=Wa.r.anim.ease,Sa.overflow=_a.anim.overflow="hidden",Sa.x=Sa.y=0,_a.anim.x=_a.anim.x*o.bw||s(_a.anim.x,o,oa,ra,fa,va,"horizontal"),_a.anim.y=_a.anim.y*o.bw||s(_a.anim.y,o,oa,ra,fa,va,"vertical"),xa.add(punchgs.TweenLite.fromTo(j,Wa.f.speed,_a.anim,Sa,ja.elemdelay),ua)}else xa.add(punchgs.TweenLite.set(j,{overflow:"visible"},ja.elemdelay),0)}a.data("timeline",xa),L=c(a,o,"in"),0!==ba&&2!=L||"bytrigger"===ma||x||"sliderleave"==ma||(void 0==ma||-1!=L&&2!=L||"bytriger"===ma?punchgs.TweenLite.delayedCall(999999,t.endMoveCaption,[a,j,W,o]):punchgs.TweenLite.delayedCall(parseInt(a.data("end"),0)/1e3,t.endMoveCaption,[a,j,W,o])),xa=a.data("timeline"),"on"==a.data("loopanimation")&&w(C,o.bw),("sliderenter"!=ga||"sliderenter"==ga&&o.overcontainer)&&(-1==L||1==L||x||0==L&&1>ba&&a.hasClass("rev-static-visbile"))&&(1>ba&&ba>0||0==ba&&"bytrigger"!=ga&&"keep"!=ha||0==ba&&"bytrigger"!=ga&&"keep"==ha&&"on"==ca||"bytrigger"==ga&&"keep"==ha&&"on"==ca)&&xa.resume(ya)}"on"==a.data("loopanimation")&&punchgs.TweenLite.set(C,{minWidth:oa,minHeight:ra}),0==a.data("slidelink")||1!=a.data("slidelink")&&!a.hasClass("slidelink")?(punchgs.TweenLite.set(j,{width:"auto",height:"auto"}),a.data("slidelink",0)):(punchgs.TweenLite.set(j,{width:"100%",height:"100%"}),a.data("slidelink",1))},endMoveCaption:function(a,e,t,i){if(e=e||a.data("_mw"),t=t||a.data("_pw"),a.data("outstarted",1),a.data("timeline"))a.data("timeline").pause();else if(void 0===a.data("_pw"))return;var r=new punchgs.TimelineLite,d=new punchgs.TimelineLite,h=new punchgs.TimelineLite,c=l(n(),a.data("transform_in"),1==i.sdir),g=a.data("transform_out")?l(o(),a.data("transform_out"),1==i.sdir):l(o(),a.data("transform_in"),1==i.sdir),m=a.data("splitout")&&a.data("splitout").match(/words|chars|lines/g)?a.data("mySplitText")[a.data("splitout")]:a,u=void 0==a.data("endelementdelay")?0:a.data("endelementdelay"),v=a.innerWidth(),f=a.innerHeight(),w=t.position();a.data("transform_out")&&a.data("transform_out").match(/auto:auto/g)&&(c.speed=g.speed,c.anim.ease=g.anim.ease,g=c);var y=p(a.data("mask_out"));g.anim.x=g.anim.x*i.bw||s(g.anim.x,i,v,f,w.top,w.left,"horizontal"),g.anim.y=g.anim.y*i.bw||s(g.anim.y,i,v,f,w.top,w.left,"vertical"),d.eventCallback("onStart",function(){var e={};e.layer=a,e.eventtype="leavestage",e.layertype=a.data("layertype"),e.layersettings=a.data(),i.c.trigger("revolution.layeraction",e)}),d.eventCallback("onComplete",function(){punchgs.TweenLite.set(a,{visibility:"hidden"}),punchgs.TweenLite.set(t,{visibility:"hidden"});var e={};e.layer=a,e.eventtype="leftstage",e.layertype=a.data("layertype"),e.layersettings=a.data(),i.c.trigger("revolution.layeraction",e)}),r.add(d.staggerTo(m,g.speed,g.anim,u),0),y?(y.anim.ease=g.anim.ease,y.anim.overflow="hidden",y.anim.x=y.anim.x*i.bw||s(y.anim.x,i,v,f,w.top,w.left,"horizontal"),y.anim.y=y.anim.y*i.bw||s(y.anim.y,i,v,f,w.top,w.left,"vertical"),r.add(h.to(e,g.speed,y.anim,u),0)):r.add(h.set(e,{overflow:"visible",overwrite:"auto"},u),0),a.data("timeline_out",r)},removeTheCaptions:function(a,e){var i=a.data("index"),n=new Array;e.layers[i]&&jQuery.each(e.layers[i],function(a,e){n.push(e)}),e.layers["static"]&&jQuery.each(e.layers["static"],function(a,e){n.push(e)}),punchgs.TweenLite.killDelayedCallsTo(t.endMoveCaption),n&&jQuery.each(n,function(a){var i=jQuery(this),n=c(i,e,"out");0!=n&&(y(i),clearTimeout(i.data("videoplaywait")),t.stopVideo&&t.stopVideo(i,e),t.endMoveCaption(i,null,null,e),e.playingvideos=[],e.lastplayedvideos=[])})}});var n=function(){var a=new Object;return a.anim=new Object,a.anim.x=0,a.anim.y=0,a.anim.z=0,a.anim.rotationX=0,a.anim.rotationY=0,a.anim.rotationZ=0,a.anim.scaleX=1,a.anim.scaleY=1,a.anim.skewX=0,a.anim.skewY=0,a.anim.opacity=1,a.anim.transformOrigin="50% 50%",a.anim.transformPerspective=600,a.anim.rotation=0,a.anim.ease=punchgs.Power3.easeOut,a.anim.force3D="auto",a.speed=.3,a.anim.autoAlpha=1,a.anim.visibility="visible",a.anim.overwrite="all",a},o=function(){var a=new Object;return a.anim=new Object,a.anim.x=0,a.anim.y=0,a.anim.z=0,a},r=function(){var a=new Object;return a.anim=new Object,a.speed=.2,a},d=function(a,e){if(jQuery.isNumeric(parseFloat(a)))return parseFloat(a);if(void 0===a||"inherit"===a)return e;if(a.split("{").length>1){var t=a.split(","),i=parseFloat(t[1].split("}")[0]);t=parseFloat(t[0].split("{")[1]),a=Math.random()*(i-t)+t}return a},s=function(a,e,t,i,n,o,r){return!jQuery.isNumeric(a)&&a.match(/%]/g)?(a=a.split("[")[1].split("]")[0],"horizontal"==r?a=(t+2)*parseInt(a,0)/100:"vertical"==r&&(a=(i+2)*parseInt(a,0)/100)):(a="layer_left"===a?0-t:"layer_right"===a?t:a,a="layer_top"===a?0-i:"layer_bottom"===a?i:a,a="left"===a||"stage_left"===a?0-t-o:"right"===a||"stage_right"===a?e.conw-o:"center"===a||"stage_center"===a?e.conw/2-t/2-o:a,a="top"===a||"stage_top"===a?0-i-n:"bottom"===a||"stage_bottom"===a?e.conh-n:"middle"===a||"stage_middle"===a?e.conh/2-i/2-n:a),a},l=function(a,e,t){var i=new Object;if(i=jQuery.extend(!0,{},i,a),void 0===e)return i;var n=e.split(";");return n&&jQuery.each(n,function(a,e){var n=e.split(":"),o=n[0],r=n[1];t&&void 0!=r&&r.length>0&&r.match(/\(R\)/)&&(r=r.replace("(R)",""),r="right"===r?"left":"left"===r?"right":"top"===r?"bottom":"bottom"===r?"top":r,"["===r[0]&&"-"===r[1]?r=r.replace("[-","["):"["===r[0]&&"-"!==r[1]?r=r.replace("[","[-"):"-"===r[0]?r=r.replace("-",""):r[0].match(/[1-9]/)&&(r="-"+r)),void 0!=r&&(r=r.replace(/\(R\)/,""),("rotationX"==o||"rX"==o)&&(i.anim.rotationX=d(r,i.anim.rotationX)+"deg"),("rotationY"==o||"rY"==o)&&(i.anim.rotationY=d(r,i.anim.rotationY)+"deg"),("rotationZ"==o||"rZ"==o)&&(i.anim.rotation=d(r,i.anim.rotationZ)+"deg"),("scaleX"==o||"sX"==o)&&(i.anim.scaleX=d(r,i.anim.scaleX)),("scaleY"==o||"sY"==o)&&(i.anim.scaleY=d(r,i.anim.scaleY)),("opacity"==o||"o"==o)&&(i.anim.opacity=d(r,i.anim.opacity)),("skewX"==o||"skX"==o)&&(i.anim.skewX=d(r,i.anim.skewX)),("skewY"==o||"skY"==o)&&(i.anim.skewY=d(r,i.anim.skewY)),"x"==o&&(i.anim.x=d(r,i.anim.x)),"y"==o&&(i.anim.y=d(r,i.anim.y)),"z"==o&&(i.anim.z=d(r,i.anim.z)),("transformOrigin"==o||"tO"==o)&&(i.anim.transformOrigin=r.toString()),("transformPerspective"==o||"tP"==o)&&(i.anim.transformPerspective=parseInt(r,0)),("speed"==o||"s"==o)&&(i.speed=parseFloat(r)/1e3),("ease"==o||"e"==o)&&(i.anim.ease=r))}),i},p=function(a){if(void 0===a)return!1;var e=new Object;e.anim=new Object;var t=a.split(";");return t&&jQuery.each(t,function(a,t){t=t.split(":");var i=t[0],n=t[1];"x"==i&&(e.anim.x=n),"y"==i&&(e.anim.y=n),"s"==i&&(e.speed=parseFloat(n)/1e3),("e"==i||"ease"==i)&&(e.anim.ease=n)}),e},h=function(a,e,t){if(void 0==a&&(a=0),!jQuery.isArray(a)&&"string"===jQuery.type(a)&&(a.split(",").length>1||a.split("[").length>1)){a=a.replace("[",""),a=a.replace("]","");var i=a.match(/'/g)?a.split("',"):a.split(",");a=new Array,i&&jQuery.each(i,function(e,t){t=t.replace("'",""),t=t.replace("'",""),a.push(t)})}else{var n=a;jQuery.isArray(a)||(a=new Array,a.push(n))}var n=a[a.length-1];if(a.length<e.rle)for(var o=1;o<=e.curWinRange;o++)a.push(n);return a},c=function(a,e,t,i){var n=-1;if(a.hasClass("tp-static-layer")){var o=parseInt(a.data("startslide"),0),r=parseInt(a.data("endslide"),0),d=e.c.find(".processing-revslide").index(),s=-1!=d?d:e.c.find(".active-revslide").index();s=-1==s?0:s,"in"===t?a.hasClass("rev-static-visbile")?n=r==s||o>s||s>r?2:0:s>=o&&r>=s||o==s||r==s?(i||(a.addClass("rev-static-visbile"),a.removeClass("rev-static-hidden")),n=1):n=0:a.hasClass("rev-static-visbile")?o>s||s>r?(n=2,i||(a.removeClass("rev-static-visbile"),a.addClass("rev-static-hidden"))):n=0:n=2}return n},g=function(a,e){if(void 0===e)return a;e=e.replace("c:","color:"),e=e.replace("bg:","background-color:"),e=e.replace("bw:","border-width:"),e=e.replace("bc:","border-color:"),e=e.replace("br:","borderRadius:"),e=e.replace("bs:","border-style:"),e=e.replace("td:","text-decoration:");var t=e.split(";");return t&&jQuery.each(t,function(e,t){var i=t.split(":");i[0].length>0&&(a.anim[i[0]]=i[1])}),a},m=function(a,e){var t,i=new Object,n=!1;if("rekursive"==e&&(t=a.closest(".tp-caption"),t&&a.css("fontSize")===t.css("fontSize")&&(n=!0)),i.basealign=a.data("basealign")||"grid",i.fontSize=n?void 0===t.data("fontsize")?parseInt(t.css("fontSize"),0)||0:t.data("fontsize"):void 0===a.data("fontsize")?parseInt(a.css("fontSize"),0)||0:a.data("fontsize"),i.fontWeight=n?void 0===t.data("fontweight")?parseInt(t.css("fontWeight"),0)||0:t.data("fontweight"):void 0===a.data("fontweight")?parseInt(a.css("fontWeight"),0)||0:a.data("fontweight"),i.whiteSpace=n?void 0===t.data("whitespace")?t.css("whitespace")||"normal":t.data("whitespace"):void 0===a.data("whitespace")?a.css("whitespace")||"normal":a.data("whitespace"),i.lineHeight=n?void 0===t.data("lineheight")?parseInt(t.css("lineHeight"),0)||0:t.data("lineheight"):void 0===a.data("lineheight")?parseInt(a.css("lineHeight"),0)||0:a.data("lineheight"),i.letterSpacing=n?void 0===t.data("letterspacing")?parseFloat(t.css("letterSpacing"),0)||0:t.data("letterspacing"):void 0===a.data("letterspacing")?parseFloat(a.css("letterSpacing"))||0:a.data("letterspacing"),i.paddingTop=void 0===a.data("paddingtop")?parseInt(a.css("paddingTop"),0)||0:a.data("paddingtop"),i.paddingBottom=void 0===a.data("paddingbottom")?parseInt(a.css("paddingBottom"),0)||0:a.data("paddingbottom"),i.paddingLeft=void 0===a.data("paddingleft")?parseInt(a.css("paddingLeft"),0)||0:a.data("paddingleft"),i.paddingRight=void 0===a.data("paddingright")?parseInt(a.css("paddingRight"),0)||0:a.data("paddingright"),i.marginTop=void 0===a.data("margintop")?parseInt(a.css("marginTop"),0)||0:a.data("margintop"),i.marginBottom=void 0===a.data("marginbottom")?parseInt(a.css("marginBottom"),0)||0:a.data("marginbottom"),i.marginLeft=void 0===a.data("marginleft")?parseInt(a.css("marginLeft"),0)||0:a.data("marginleft"),i.marginRight=void 0===a.data("marginright")?parseInt(a.css("marginRight"),0)||0:a.data("marginright"),i.borderTopWidth=void 0===a.data("bordertopwidth")?parseInt(a.css("borderTopWidth"),0)||0:a.data("bordertopwidth"),i.borderBottomWidth=void 0===a.data("borderbottomwidth")?parseInt(a.css("borderBottomWidth"),0)||0:a.data("borderbottomwidth"),i.borderLeftWidth=void 0===a.data("borderleftwidth")?parseInt(a.css("borderLeftWidth"),0)||0:a.data("borderleftwidth"),i.borderRightWidth=void 0===a.data("borderrightwidth")?parseInt(a.css("borderRightWidth"),0)||0:a.data("borderrightwidth"),"rekursive"!=e){if(i.color=void 0===a.data("color")?"nopredefinedcolor":a.data("color"),i.whiteSpace=n?void 0===t.data("whitespace")?t.css("whiteSpace")||"nowrap":t.data("whitespace"):void 0===a.data("whitespace")?a.css("whiteSpace")||"nowrap":a.data("whitespace"),i.minWidth=void 0===a.data("width")?parseInt(a.css("minWidth"),0)||0:a.data("width"),i.minHeight=void 0===a.data("height")?parseInt(a.css("minHeight"),0)||0:a.data("height"),void 0!=a.data("videowidth")&&void 0!=a.data("videoheight")){var o=a.data("videowidth"),r=a.data("videoheight");o="100%"===o?"none":o,r="100%"===r?"none":r,a.data("width",o),a.data("height",r)}i.maxWidth=void 0===a.data("width")?parseInt(a.css("maxWidth"),0)||"none":a.data("width"),i.maxHeight=void 0===a.data("height")?parseInt(a.css("maxHeight"),0)||"none":a.data("height"),i.wan=void 0===a.data("wan")?parseInt(a.css("-webkit-transition"),0)||"none":a.data("wan"),i.moan=void 0===a.data("moan")?parseInt(a.css("-moz-animation-transition"),0)||"none":a.data("moan"),i.man=void 0===a.data("man")?parseInt(a.css("-ms-animation-transition"),0)||"none":a.data("man"),i.ani=void 0===a.data("ani")?parseInt(a.css("transition"),0)||"none":a.data("ani")}return i.styleProps=a.css(["background-color","border-top-color","border-bottom-color","border-right-color","border-left-color","border-top-style","border-bottom-style","border-left-style","border-right-style","border-left-width","border-right-width","border-bottom-width","border-top-width","text-decoration","font-style","border-radius"]),i},u=function(a,e){var t=new Object;return a&&jQuery.each(a,function(i,n){t[i]=h(n,e)[e.curWinRange]||a[i]}),t},v=function(a,e,t,i){return a=jQuery.isNumeric(a)?a*e+"px":a,a="full"===a?i:"auto"===a||"none"===a?t:a},f=function(a,e,t,i){var n;void 0===a.data("cssobj")?(n=m(a,t),a.data("cssobj",n)):n=a.data("cssobj");var o=u(n,e),r=e.bw,d=e.bh;if("off"===i&&(r=1,d=1),"auto"==o.lineHeight&&(o.lineHeight=o.fontSize+4),!a.hasClass("tp-splitted")){a.css("-webkit-transition","none"),a.css("-moz-transition","none"),a.css("-ms-transition","none"),a.css("transition","none");var s=void 0!==a.data("transform_hover")||void 0!==a.data("style_hover");if(s&&punchgs.TweenLite.set(a,o.styleProps),punchgs.TweenLite.set(a,{fontSize:Math.round(o.fontSize*r)+"px",fontWeight:o.fontWeight,letterSpacing:Math.floor(o.letterSpacing*r)+"px",paddingTop:Math.round(o.paddingTop*d)+"px",paddingBottom:Math.round(o.paddingBottom*d)+"px",paddingLeft:Math.round(o.paddingLeft*r)+"px",paddingRight:Math.round(o.paddingRight*r)+"px",marginTop:o.marginTop*d+"px",marginBottom:o.marginBottom*d+"px",marginLeft:o.marginLeft*r+"px",marginRight:o.marginRight*r+"px",borderTopWidth:Math.round(o.borderTopWidth*d)+"px",borderBottomWidth:Math.round(o.borderBottomWidth*d)+"px",borderLeftWidth:Math.round(o.borderLeftWidth*r)+"px",borderRightWidth:Math.round(o.borderRightWidth*r)+"px",lineHeight:Math.round(o.lineHeight*d)+"px",overwrite:"auto"}),"rekursive"!=t){var l="slide"==o.basealign?e.ulw:e.gridwidth[e.curWinRange],p="slide"==o.basealign?e.ulh:e.gridheight[e.curWinRange],h=v(o.maxWidth,r,"none",l),c=v(o.maxHeight,d,"none",p),g=v(o.minWidth,r,"0px",l),f=v(o.minHeight,d,"0px",p);punchgs.TweenLite.set(a,{maxWidth:h,maxHeight:c,minWidth:g,minHeight:f,whiteSpace:o.whiteSpace,overwrite:"auto"}),"nopredefinedcolor"!=o.color&&punchgs.TweenLite.set(a,{color:o.color,overwrite:"auto"})}setTimeout(function(){a.css("-webkit-transition",a.data("wan")),a.css("-moz-transition",a.data("moan")),a.css("-ms-transition",a.data("man")),a.css("transition",a.data("ani"))},30)}},w=function(a,e){if(a.hasClass("rs-pendulum")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var t=void 0==a.data("startdeg")?-20:a.data("startdeg"),i=void 0==a.data("enddeg")?20:a.data("enddeg"),n=void 0==a.data("speed")?2:a.data("speed"),o=void 0==a.data("origin")?"50% 50%":a.data("origin"),r=void 0==a.data("easing")?punchgs.Power2.easeInOut:a.data("ease");t*=e,i*=e,a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",rotation:t,transformOrigin:o},{rotation:i,ease:r})),a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",rotation:i,transformOrigin:o},{rotation:t,ease:r,onComplete:function(){a.data("loop-timeline").restart()}}))}if(a.hasClass("rs-rotate")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var t=void 0==a.data("startdeg")?0:a.data("startdeg"),i=void 0==a.data("enddeg")?360:a.data("enddeg");n=void 0==a.data("speed")?2:a.data("speed"),o=void 0==a.data("origin")?"50% 50%":a.data("origin"),r=void 0==a.data("easing")?punchgs.Power2.easeInOut:a.data("easing"),t*=e,i*=e,a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",rotation:t,transformOrigin:o},{rotation:i,ease:r,onComplete:function(){a.data("loop-timeline").restart()}}))}if(a.hasClass("rs-slideloop")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var d=void 0==a.data("xs")?0:a.data("xs"),s=void 0==a.data("ys")?0:a.data("ys"),l=void 0==a.data("xe")?0:a.data("xe"),p=void 0==a.data("ye")?0:a.data("ye"),n=void 0==a.data("speed")?2:a.data("speed"),r=void 0==a.data("easing")?punchgs.Power2.easeInOut:a.data("easing");d*=e,s*=e,l*=e,p*=e,a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",x:d,y:s},{x:l,y:p,ease:r})),a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",x:l,y:p},{x:d,y:s,onComplete:function(){a.data("loop-timeline").restart()}}))}if(a.hasClass("rs-pulse")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var h=void 0==a.data("zoomstart")?0:a.data("zoomstart"),c=void 0==a.data("zoomend")?0:a.data("zoomend"),n=void 0==a.data("speed")?2:a.data("speed"),r=void 0==a.data("easing")?punchgs.Power2.easeInOut:a.data("easing");a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",scale:h},{scale:c,ease:r})),a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(a,n,{force3D:"auto",scale:c},{scale:h,onComplete:function(){a.data("loop-timeline").restart()}}))}if(a.hasClass("rs-wave")&&void 0==a.data("loop-timeline")){a.data("loop-timeline",new punchgs.TimelineLite);var g=void 0==a.data("angle")?10:parseInt(a.data("angle"),0),m=void 0==a.data("radius")?10:parseInt(a.data("radius"),0),n=void 0==a.data("speed")?-20:a.data("speed"),o=void 0==a.data("origin")?"50% 50%":a.data("origin"),u=o.split(" "),v=new Object;u.length>=1?(v.x=u[0],v.y=u[1]):(v.x="50%",v.y="50%"),g*=e,m*=e;var f=0-a.height()/2+m*(-1+parseInt(v.y,0)/100),w=a.width()*(-.5+parseInt(v.x,0)/100),y={a:0,ang:g,element:a,unit:m,xoffset:w,yoffset:f};a.data("loop-timeline").append(new punchgs.TweenLite.fromTo(y,n,{a:360},{a:0,force3D:"auto",ease:punchgs.Linear.easeNone,onUpdate:function(){var a=y.a*(Math.PI/180);punchgs.TweenLite.to(y.element,.1,{force3D:"auto",x:y.xoffset+Math.cos(a)*y.unit,y:y.yoffset+y.unit*(1-Math.sin(a))})},onComplete:function(){a.data("loop-timeline").restart()}}))}},y=function(a){a.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function(){var a=jQuery(this);void 0!=a.data("loop-timeline")&&(a.data("loop-timeline").pause(),a.data("loop-timeline",null))})}}(jQuery);