webpackJsonp([0],{0:function(e,exports,t){t(1),e.exports=t(299)},299:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}t(300);var s=t(304),a=n(s),r=t(306),d=n(r),l=t(312),i=n(l),o=t(314),u=(n(o),t(418)),c=n(u),m=t(419),j=n(m),f=t(420),g=n(f),p=t(422),h=n(p);a["default"].module("app",[d["default"],i["default"],j["default"],c["default"].name]).component("app",g["default"]).service("data",h["default"])},316:function(e,exports,t){function n(e){return t(s(e))}function s(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./af":317,"./af.js":317,"./ar":318,"./ar-ma":319,"./ar-ma.js":319,"./ar-sa":320,"./ar-sa.js":320,"./ar-tn":321,"./ar-tn.js":321,"./ar.js":318,"./az":322,"./az.js":322,"./be":323,"./be.js":323,"./bg":324,"./bg.js":324,"./bn":325,"./bn.js":325,"./bo":326,"./bo.js":326,"./br":327,"./br.js":327,"./bs":328,"./bs.js":328,"./ca":329,"./ca.js":329,"./cs":330,"./cs.js":330,"./cv":331,"./cv.js":331,"./cy":332,"./cy.js":332,"./da":333,"./da.js":333,"./de":334,"./de-at":335,"./de-at.js":335,"./de.js":334,"./dv":336,"./dv.js":336,"./el":337,"./el.js":337,"./en-au":338,"./en-au.js":338,"./en-ca":339,"./en-ca.js":339,"./en-gb":340,"./en-gb.js":340,"./en-ie":341,"./en-ie.js":341,"./en-nz":342,"./en-nz.js":342,"./eo":343,"./eo.js":343,"./es":344,"./es-do":345,"./es-do.js":345,"./es.js":344,"./et":346,"./et.js":346,"./eu":347,"./eu.js":347,"./fa":348,"./fa.js":348,"./fi":349,"./fi.js":349,"./fo":350,"./fo.js":350,"./fr":351,"./fr-ca":352,"./fr-ca.js":352,"./fr-ch":353,"./fr-ch.js":353,"./fr.js":351,"./fy":354,"./fy.js":354,"./gd":355,"./gd.js":355,"./gl":356,"./gl.js":356,"./he":357,"./he.js":357,"./hi":358,"./hi.js":358,"./hr":359,"./hr.js":359,"./hu":360,"./hu.js":360,"./hy-am":361,"./hy-am.js":361,"./id":362,"./id.js":362,"./is":363,"./is.js":363,"./it":364,"./it.js":364,"./ja":365,"./ja.js":365,"./jv":366,"./jv.js":366,"./ka":367,"./ka.js":367,"./kk":368,"./kk.js":368,"./km":369,"./km.js":369,"./ko":370,"./ko.js":370,"./ky":371,"./ky.js":371,"./lb":372,"./lb.js":372,"./lo":373,"./lo.js":373,"./lt":374,"./lt.js":374,"./lv":375,"./lv.js":375,"./me":376,"./me.js":376,"./mk":377,"./mk.js":377,"./ml":378,"./ml.js":378,"./mr":379,"./mr.js":379,"./ms":380,"./ms-my":381,"./ms-my.js":381,"./ms.js":380,"./my":382,"./my.js":382,"./nb":383,"./nb.js":383,"./ne":384,"./ne.js":384,"./nl":385,"./nl.js":385,"./nn":386,"./nn.js":386,"./pa-in":387,"./pa-in.js":387,"./pl":388,"./pl.js":388,"./pt":389,"./pt-br":390,"./pt-br.js":390,"./pt.js":389,"./ro":391,"./ro.js":391,"./ru":392,"./ru.js":392,"./se":393,"./se.js":393,"./si":394,"./si.js":394,"./sk":395,"./sk.js":395,"./sl":396,"./sl.js":396,"./sq":397,"./sq.js":397,"./sr":398,"./sr-cyrl":399,"./sr-cyrl.js":399,"./sr.js":398,"./ss":400,"./ss.js":400,"./sv":401,"./sv.js":401,"./sw":402,"./sw.js":402,"./ta":403,"./ta.js":403,"./te":404,"./te.js":404,"./th":405,"./th.js":405,"./tl-ph":406,"./tl-ph.js":406,"./tlh":407,"./tlh.js":407,"./tr":408,"./tr.js":408,"./tzl":409,"./tzl.js":409,"./tzm":410,"./tzm-latn":411,"./tzm-latn.js":411,"./tzm.js":410,"./uk":412,"./uk.js":412,"./uz":413,"./uz.js":413,"./vi":414,"./vi.js":414,"./x-pseudo":415,"./x-pseudo.js":415,"./zh-cn":416,"./zh-cn.js":416,"./zh-tw":417,"./zh-tw.js":417};n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id=316},420:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function s(e,t,n){function s(){a.average=void 0,a.linesCount=void 0,a.speedLimit=void 0,a.loading=!0,a.filter.dateBegin=(0,l["default"])(a.filter.$dateBegin,"L",!0).format("YYYY-MM-DDTHH:mm:ss"),a.filter.dateEnd=(0,l["default"])(a.filter.$dateEnd,"L",!0).format("YYYY-MM-DDTHH:mm:ss");var e;switch(a.filter.type){case"Limit":if(!a.filter.speed)return;e=t.getSpeedLimit(a.filter);break;case"Lines":e=t.getBusCount(a.filter);break;case"Average":e=t.getAverageSpeed(a.filter);break;default:return}e.then(function(e){"Limit"===a.filter.type,"Lines"===a.filter.type&&(a.linesCount=e.reduce(function(e,t){return e[t[0]]=t[1],e},{})),"Average"===a.filter.type&&(a.average=e.result),a.loading=!1},function(e){n.showSimple("Error!"),a.loading=!1})}var a=this;a.filter={speed:60,type:"Limit",lat1:"-22.92",lng1:"-43.18",lat2:"-22.93",lng2:"-43.17",$dateBegin:(0,l["default"])().toDate(),$dateEnd:(0,l["default"])().toDate()},a.search=s,e.getMap("map").then(function(e){console.log("map",e),a.map=e}),a.boundsChanged=function(){a.filter.lat1=this.getBounds().getSouthWest().lat(),a.filter.lng1=this.getBounds().getSouthWest().lng(),a.filter.lat2=this.getBounds().getNorthEast().lat(),a.filter.lng2=this.getBounds().getNorthEast().lng()}}Object.defineProperty(exports,"__esModule",{value:!0});var a=t(421),r=n(a),d=t(314),l=n(d),i={template:r["default"],controller:s};s.$inject=["NgMap","data","$mdToast"],exports["default"]=i},421:function(e,exports){e.exports='<div layout="column" flex>\n  <md-toolbar md-whiteframe="2">\n    <div class="md-toolbar-tools">\n      <h2>Rio Bus</h2>\n    </div>\n  </md-toolbar>\n\n  <div flex layout="row">\n    <div flex layout="column">\n      <div flex layout="row">\n        <div flex layout="column" layout-padding>\n          <ng-map center="-22.912534, -43.192880"\n                  zoom="13"\n                  id="map"\n                  flex>\n            <shape name="rectangle"\n                   editable="true"\n                   draggable="true"\n                   bounds="[[-22.92, -43.18],[-22.93, -43.17]]"\n                   on-bounds_changed="$ctrl.boundsChanged()">\n            </shape>\n          </ng-map>\n        </div>\n      </div>\n      <md-card>\n        <md-card-title>\n          <md-card-title-text>\n            <span class="md-headline">Filter</span>\n          </md-card-title-text>\n        </md-card-title>\n        <div flex layout="column" layout-margin>\n          <md-radio-group ng-model="$ctrl.filter.type" flex layout="row" ng-disabled="$ctrl.loading">\n            <md-radio-button value="Limit">Speed Limit</md-radio-button>\n            <md-radio-button value="Lines">Bus Lines</md-radio-button>\n            <md-radio-button value="Average">Average Speed</md-radio-button>\n          </md-radio-group>\n          <div flex layout="row">\n            <md-input-container ng-show="$ctrl.filter.type === \'Limit\'" class="md-block">\n              <input ng-model="$ctrl.filter.speed" type="number" placeholder="Speed" ng-required="$ctrl.filter.type === \'Limit\'" ng-disabled="$ctrl.loading">\n            </md-input-container>\n            <md-datepicker ng-model="$ctrl.filter.$dateBegin" md-placeholder="Start Date" ng-disabled="$ctrl.loading">\n            </md-datepicker>\n            <md-datepicker ng-model="$ctrl.filter.$dateEnd" md-placeholder="End Date" ng-disabled="$ctrl.loading">\n            </md-datepicker>\n          </div>\n          <md-button flex class="md-primary md-raised" ng-click="$ctrl.search()" ng-disabled="$ctrl.loading">\n            Search\n          </md-button>\n        </div>\n      </md-card>\n    </div>\n    <div flex layout="column">\n      <md-card flex>\n        <md-card-content layout="row" layout-align="center center" flex>\n            <div layout="column" layout-align="center center" ng-hide="true">\n              <md-icon style="font-size: 60px;">search</md-icon>\n              <h4 class="md-headline">Select the filters and search</h4>\n            </div>\n            <div ng-show="vm.average">\n              <h3 class="md-display-1">Average speed</h3>\n              <h4 class="md-headline">{{vm.average}}</h4>\n            </div>\n            <div ng-show="vm.lines">\n            </div>\n          </md-card-content>\n      </md-card>\n    </div>\n  </div>\n</div>\n'},422:function(e,exports,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var s=t(423),a=n(s),r=t(424),d=n(r),l=function(){function e(t){(0,a["default"])(this,e),this.$resource=t}return(0,d["default"])(e,[{key:"getSpeedLimit",value:function(e){return e.returnLength=100,this.$resource("http://64.137.217.119:3000/speedLimit/:dateBegin/:dateEnd/:lat1/:lng1/:lat2/:lng2/:speed/:returnLength",e).query().$promise.then(function(e){return e})}},{key:"getBusCount",value:function(e){return this.$resource("http://64.137.217.119:3000/busLineCount/:dateBegin/:dateEnd",e).query().$promise.then(function(e){return e})}},{key:"getAverageSpeed",value:function(e){return this.$resource("http://64.137.217.119:3000/averagespeed/:dateBegin/:dateEnd/:lat1/:lng1/:lat2/:lng2",e).query().$promise.then(function(e){return e})}}]),e}();l.$inject=["$resource"],exports["default"]=l}});
//# sourceMappingURL=app.bundle.js.map