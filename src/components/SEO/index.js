/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql, withPrefix} from 'gatsby'

function SEO({description, lang, meta, keywords, title}) {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {name: 'msapplication-TileColor', content: '#da532c'},
        {name: 'theme-color', content: '#ffffff'},
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : [],
        )
        .concat(meta)}
    >
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={withPrefix('/favicons/apple-touch-icon.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={withPrefix('/favicons/favicon-32x32.png')}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={withPrefix('/favicons/favicon-16x16.png')}
      />
      <script type='text/javascript'>
        var WindowEvent,VisibilityType;(function(n){n.Load="load";n.BeforeUnload="beforeunload";n.Abort="abort";n.Error="error";n.Unload="unload"})(WindowEvent||(WindowEvent={})),function(n){n[n.Focus=0]="Focus";n[n.Blur=1]="Blur"}(VisibilityType||(VisibilityType={}));var AjaxTiming=function(){function n(n,t,i,r){var u=this;this.getPerformanceTimings=function(n){u.connect=n.connectEnd-n.connectStart;u.dns=n.domainLookupEnd-n.domainLookupStart;u.duration=n.duration;u.load=n.responseEnd-n.responseStart;u.wait=n.responseStart-n.requestStart;u.start=n.startTime;u.redirect=n.redirectEnd-n.redirectStart;n.secureConnectionStart&&(u.ssl=n.connectEnd-n.secureConnectionStart)};this.url=n;this.method=t;this.isAsync=i;this.open=r}return n}(),ProfilerJsError=function(){function n(n,t,i){this.count=0;this.message=n;this.url=t;this.lineNumber=i}return n.createText=function(n,t,i){return[n,t,i].join(":")},n.prototype.getText=function(){return n.createText(this.message,this.url,this.lineNumber)},n}(),ProfilerEventManager=function(){function n(){this.events=[];this.hasAttachEvent=!!window.attachEvent}return n.prototype.add=function(n,t,i){this.events.push({type:n,target:t,func:i});this.hasAttachEvent?t.attachEvent("on"+n,i):t.addEventListener(n,i,!1)},n.prototype.remove=function(n,t,i){this.hasAttachEvent?t.detachEvent(n,i):t.removeEventListener(n,i,!1);var r=this.events.indexOf({type:n,target:t,func:i});r!==1&&this.events.splice(r,1)},n.prototype.clear=function(){for(var t,n=0,i=this.events;n<i.length;n++)t=i[n],this.remove(t.type,t.target,t.func);this.events=[]},n}(),RProfiler=function(){function n(){function o(n){var t=n.target||n.srcElement;return t.nodeType==3&&(t=t.parentNode),r("N/A",t.src||t.URL,-1),!1}var n=this,r,u,e,t,i,f;this.restUrl="g.3gl.net/jp/3858/v3.2.7/M";this.startTime=(new Date).getTime();this.eventsTimingHandler=new EventsTimingHandler;this.inputDelay=new InputDelayHandler;this.version="v3.2.7";this.info={};this.hasInsight=!1;this.data={start:this.startTime,jsCount:0,jsErrors:[],loadTime:-1,loadFired:window.document.readyState=="complete",ajax:[]};this.eventManager=new ProfilerEventManager;this.startAjaxCapture=function(){var i=XMLHttpRequest.prototype,o=i.open,s=i.send,r=[],u={},e=n.data.ajax,h=25,f=typeof performance=="object"&&typeof window.performance.now=="function"&&typeof window.performance.getEntriesByType=="function",t;f&&typeof window.performance.setResourceTimingBufferSize=="function"&&window.performance.setResourceTimingBufferSize(300);t=function(){return f?window.performance.now():(new Date).getTime()};i.open=function(n,i,u,f,e){u===void 0&&(u=!0);this.rpIndex=r.length;r.push(new AjaxTiming(i,n,u,t()));o.call(this,n,i,u,f,e)};i.send=function(n){var i=this,c=this.onreadystatechange,o;(this.onreadystatechange=function(n){var o=r[i.rpIndex],l,s;if(o){l=i.readyState;switch(l){case 1:o.connectionEstablished=t();break;case 2:o.requestReceived=t();break;case 3:o.processingTime=t();break;case 4:o.complete=t();s=!!(i.response&&i.response!=null&&i.response!=undefined);switch(i.responseType){case"text":case"":typeof i.responseText=="string"&&(o.responseSize=i.responseText.length);break;case"json":s&&typeof i.response.toString=="function"&&(o.responseSize=i.response.toString().length);break;case"arraybuffer":s&&typeof i.response.byteLength=="number"&&(o.responseSize=i.response.byteLength);break;case"blob":s&&typeof i.response.size=="number"&&(o.responseSize=i.response.size)}(function(n){setTimeout(function(){var r,s,h,c,o;if(f){var i=n.url,t=[],l=performance.getEntriesByType("resource");for(r=0,s=l;r<s.length;r++)h=s[r],h.name==i&&t.push(h);if(e.push(n),t.length!=0){if(u[i]||(u[i]=[]),t.length==1){n.getPerformanceTimings(t[0]);u[i].push(0);return}c=u[i];for(o in t)if(c.indexOf(o)==-1){n.getPerformanceTimings(t[o]);c.push(o);return}n.getPerformanceTimings(t[0])}}},h)})(o,e)}typeof c=="function"&&c.call(i,n)}},o=r[this.rpIndex],o)&&(n&&!isNaN(n.length)&&(o.sendSize=n.length),o.send=t(),s.call(this,n))}};this.recordPageLoad=function(){n.data.loadTime=(new Date).getTime();n.data.loadFired=!0};this.addError=function(t,i,r){var s,f,u,e,o;for(n.data.jsCount++,s=ProfilerJsError.createText(t,i,r),f=n.data.jsErrors,u=0,e=f;u<e.length;u++)if(o=e[u],o.getText()==s){o.count++;return}f.push(new ProfilerJsError(t,i,r))};this.addInfo=function(t,i,r){if(!n.isNullOrEmpty(t)){if(n.isNullOrEmpty(r))n.info[t]=i;else{if(n.isNullOrEmpty(i))return;n.isNullOrEmpty(n.info[t])&&(n.info[t]={});n.info[t][i]=r}n.hasInsight=!0}};this.clearInfo=function(){n.info={};n.hasInsight=!1};this.clearErrors=function(){n.data.jsCount=0;n.data.jsErrors=[]};this.clearAjax=function(){n.data.ajax=[]};this.getInfo=function(){return n.hasInsight?n.info:null};this.getEventTimingHandler=function(){return n.eventsTimingHandler};this.getInputDelay=function(){return n.inputDelay};this.eventManager.add(WindowEvent.Load,window,this.recordPageLoad);r=this.addError;this.startAjaxCapture();window.opera?this.eventManager.add(WindowEvent.Error,document,o):"onerror"in window&&(u=window.onerror,window.onerror=function(n,t,i){return(r(n,t,i),!!u)?u(n,t,i):!1});!window.__cpCdnPath||(this.restUrl=window.__cpCdnPath.trim());e=window.location.protocol;t=document.createElement("iframe");t.src="about:blank";i=t.style;i.position="absolute";i.top="-10000px";i.left="-1000px";t.addEventListener("load",function(t){var r=t.currentTarget,u,i;r&&r.contentDocument&&(u=r.contentDocument,i=u.createElement("script"),i.type="text/javascript",i.src=e+"//"+n.restUrl,u.body.appendChild(i))});f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(t,f)}return n.prototype.isNullOrEmpty=function(n){if(n===undefined||n===null)return!0;if(typeof n=="string"){var t=n;return t.trim().length==0}return!1},n.prototype.dispatchCustomEvent=function(n){(function(n){function t(n,t){t=t||{bubbles:!1,cancelable:!1,detail:undefined};var i=document.createEvent("CustomEvent");return i.initCustomEvent(n,t.bubbles,t.cancelable,t.detail),i}if(typeof n.CustomEvent=="function")return!1;t.prototype=Event.prototype;n.CustomEvent=t})(window);var t=new CustomEvent(n);window.dispatchEvent(t)},n}(),InputDelayHandler=function(){function n(){var n=this;this.firstInputDelay=0;this.firstInputTimeStamp=0;this.startTime=0;this.delay=0;this.profileManager=new ProfilerEventManager;this.eventTypes=["click","mousedown","keydown","touchstart","pointerdown",];this.addEventListeners=function(){n.eventTypes.forEach(function(t){n.profileManager.add(t,document,n.onInput)})};this.now=function(){return(new Date).getTime()};this.removeEventListeners=function(){n.eventTypes.forEach(function(t){n.profileManager.remove(t,document,n.onInput)})};this.onInput=function(t){var i,r,u;t.cancelable&&(i=t.timeStamp>1e12,n.firstInputTimeStamp=n.now(),r=i||!window.performance,u=r?n.firstInputTimeStamp:window.performance.now(),n.delay=u-t.timeStamp,t.type=="pointerdown"?n.onPointerDown():(n.removeEventListeners(),n.updateFirstInputDelay()))};this.onPointerUp=function(){n.removeEventListeners();n.updateFirstInputDelay()};this.onPointerCancel=function(){n.removePointerEventListeners()};this.removePointerEventListeners=function(){n.profileManager.remove("pointerup",document,n.onPointerUp);n.profileManager.remove("pointercancel",document,n.onPointerCancel)};this.updateFirstInputDelay=function(){n.delay>=0&&n.delay<n.firstInputTimeStamp-n.startTime&&(n.firstInputDelay=Math.round(n.delay))};this.startSoftNavigationCapture=function(){n.resetSoftNavigationCapture()};this.resetSoftNavigationCapture=function(){n.resetFirstInputDelay();n.addEventListeners()};this.resetFirstInputDelay=function(){n.delay=0;n.firstInputDelay=0;n.startTime=0;n.firstInputTimeStamp=0};this.startTime=this.now();this.addEventListeners()}return n.prototype.onPointerDown=function(){this.profileManager.add("pointerup",document,this.onPointerUp);this.profileManager.add("pointercancel",document,this.onPointerCancel)},n.prototype.getFirstInputDelay=function(){return this.firstInputDelay},n}(),EventsTimingHandler=function(){function n(){var n=this;this.hiddenStrings=["hidden","msHidden","webkitHidden","mozHidden"];this.visibilityStrings=["visibilitychange","msvisibilitychange","webkitvisibilitychange","mozvisibilitychange"];this.captureSoftNavigation=!1;this.hidden="hidden";this.visibilityChange="visibilitychange";this.visibilityEvents=[];this.eventManager=new ProfilerEventManager;this.engagementTimeIntervalMs=1e3;this.engagementTime=0;this.firstEngagementTime=0;this.lastEventTimeStamp=0;this.timeoutId=undefined;this.now=function(){return(new Date).getTime()};this.startVisibilityCapture=function(){n.initializeVisibilityProperties();document.addEventListener(n.visibilityChange,n.captureFocusEvent,!1)};this.initializeVisibilityProperties=function(){for(var r=n.hiddenStrings,i=0,t=0;t<r.length;t++)typeof document[r[t]]!="undefined"&&(i=t);n.visibilityChange=n.visibilityStrings[i];n.hidden=n.hiddenStrings[i]};this.captureFocusEvent=function(){n.updateVisibilityChangeTime();document[n.hidden]||n.captureEngagementTime()};this.updateVisibilityChangeTime=function(){document[n.hidden]?n.captureVisibilityEvent(VisibilityType.Blur):n.captureVisibilityEvent(VisibilityType.Focus)};this.onBlur=function(){n.captureVisibilityEvent(VisibilityType.Blur)};this.onFocus=function(){n.captureVisibilityEvent(VisibilityType.Focus)};this.captureVisibilityEvent=function(t){n.visibilityEvents.push({type:t,time:n.now()})};this.captureEngagementTime=function(t){if(t===void 0&&(t=!0),!n.lastEventTimeStamp){n.engagementTime=n.engagementTimeIntervalMs;n.lastEventTimeStamp=n.now();return}var i=n.now()-n.lastEventTimeStamp;if(n.lastEventTimeStamp=n.now(),t&&n.firstEngagementTime===0&&(n.firstEngagementTime=n.now()),i>0&&i<n.engagementTimeIntervalMs){clearTimeout(n.timeoutId);n.engagementTime+=i;return}n.startTimer()};this.captureMouseMove=function(){n.captureEngagementTime(!1)};this.startTimer=function(){n.timeoutId=setTimeout(function(){n.engagementTime+=n.engagementTimeIntervalMs},n.engagementTimeIntervalMs)};this.getFocusAwayTime=function(){var i=n.visibilityEvents,t=-1,s,h,o;if(i.length===0)return 0;for(var r=t,u=0,f=t,e=0;u<i.length;)i[u].type===VisibilityType.Blur&&r===t&&(r=u),s=f===t&&r!==t,i[u].type===VisibilityType.Focus&&s&&(f=u),h=r!==t&&f!==t,h&&(o=i[f].time-i[r].time,o>0&&(e+=o),r=t,f=t),u=u+1;return r===i.length-1&&(e+=n.now()-i[r].time),e};this.getEngagementTime=function(){return n.engagementTime};this.getFirstEngagementTime=function(){return n.firstEngagementTime};this.startSoftNavigationCapture=function(){n.captureSoftNavigation=!0};this.resetSoftNavigationCapture=function(){n.resetEngagementMetrics();n.visibilityEvents=[]};this.resetEngagementMetrics=function(){n.engagementTime=0;n.lastEventTimeStamp=n.now();n.firstEngagementTime=0};this.clear=function(){n.eventManager.clear()};this.captureEngagementTime(!1);this.eventManager.add("scroll",document,this.captureEngagementTime);this.eventManager.add("resize",window,this.captureEngagementTime);this.eventManager.add("mouseup",document,this.captureEngagementTime);this.eventManager.add("keyup",document,this.captureEngagementTime);this.eventManager.add("mousemove",document,this.captureMouseMove);this.eventManager.add("focus",window,this.onFocus);this.eventManager.add("blur",window,this.onBlur);this.eventManager.add("focus",document,this.onFocus);this.eventManager.add("blur",document,this.onBlur)}return n}(),profiler=new RProfiler;window.RProfiler=profiler;window.WindowEvent=WindowEvent;profiler.dispatchCustomEvent("GlimpseLoaded");
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
