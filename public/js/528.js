(self.webpackChunk=self.webpackChunk||[]).push([[528],{3801:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=l(a(7294));t.default=function(e){var t=e.children;return r.default.createElement("div",{className:"container-fluid"},r.default.createElement("div",{className:"container"},t))}},8528:function(e,t,a){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=a(9680),n=l(a(7294)),u=l(a(3801));t.default=function(e){var t=e.bookmarks;return n.default.createElement(u.default,null,n.default.createElement("div",{className:"row"},n.default.createElement("div",{className:"col-md-6"},t.title&&n.default.createElement("div",{className:"card"},n.default.createElement("div",{className:"card-header"},t.title),n.default.createElement("div",{className:"card-body"},n.default.createElement("p",null,t.description),n.default.createElement("div",{className:"mt-3 mb-3"},n.default.createElement("img",{src:t.image_url,alt:t.title,className:"img-fluid"})),n.default.createElement("button",{className:"btn btn-small btn-primary mt-2",onClick:function(e){e.preventDefault(),r.Inertia.post("/bookmark/make-active",{id:t.id})}},"save"))))))}}}]);