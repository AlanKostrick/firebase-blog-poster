// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/components/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

function Header() {
  return "\n          <nav class= 'nav'>\n              <h1 class= 'nav-logo'>BlogPage</h1>\n              <ul class= 'nav-list'>\n                  <li class= 'nav-list__home'>Home</li>\n                  <li class= 'nav-list__posts'>Posts</li>\n              </ul>\n          </nav>\n      ";
}
},{}],"src/components/Home.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

function Home() {
  return "\n      <div class='main-content'>\n      <h1 class='main-content__welcome'>Welcome to this SPA demo</h1>\n      <p class='main-content__text'>Thanks for joining us</p>\n      <div>\n      ";
}
},{}],"src/components/Posts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Posts;

function Posts(posts) {
  return "\n      <div>\n      ".concat(posts.map(function (post) {
    return "\n              <section class='main-content__posts'>\n                  <h3>".concat(post.title, "</h3>\n                  <p>").concat(post.content, "</p>\n                  <input class='delete-post__id' type='hidden' value=\"").concat(post._id, "\">\n                  <button class='delete-post__submit'>&times</button>\n                  <button class='edit-post__submit'>...</button>\n              </section>\n          ");
  }).join(""), "\n      </div>\n      \n      <section class='add-post'>\n          <input class='add-post__postTitle' type='text' placeholder='post title'>\n          <input class='add-post__postBody type='text' placeholder='post content'>\n          <button class='add-post__submit'>Submit</button>\n      </section>\n  \n      ");
}
},{}],"src/components/Post.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Post;

function Post(post) {
  return "\n      <section class='main-content__posts'>\n          <h3>".concat(post.title, "</h3>\n          <p>").concat(post.content, "</p>\n      </section>\n          \n      <section class='update-post'>\n          <input class='update-post__postTitle' type='text' placeholder='edit title'>\n          <input class='update-post__postBody' type='text' placeholder='edit content'>\n          <button class='update-post__submit'>Edit</button>\n          <input class='update-post__id' type='hidden' value=\"").concat(post._id, "\">\n      </section>\n  \n      ");
}
},{}],"src/components/Footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

function Footer() {
  return "\n          <small>&copy wcci 2019</small>\n      ";
}
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/PostUpdate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PostUpdate;

require("../../css/style.css");

function PostUpdate() {
  return "\n    <h2 class='main-content__update'>Post successfully sent</h2>\n    ";
}
},{"../../css/style.css":"css/style.css"}],"src/api/api-actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getRequest(location, callback) {
  fetch(location).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

function postRequest(location, requestBody, callback) {
  fetch(location, {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

function deleteRequest(location, callback) {
  fetch(location, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

function updateRequest(location, requestBody, callback) {
  fetch(location, {
    method: "PUT",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

var _default = {
  getRequest: getRequest,
  postRequest: postRequest,
  deleteRequest: deleteRequest,
  updateRequest: updateRequest
};
exports.default = _default;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _Header = _interopRequireDefault(require("./src/components/Header"));

var _Home = _interopRequireDefault(require("./src/components/Home"));

var _Posts = _interopRequireDefault(require("./src/components/Posts"));

var _Post = _interopRequireDefault(require("./src/components/Post"));

var _Footer = _interopRequireDefault(require("./src/components/Footer"));

var _PostUpdate = _interopRequireDefault(require("./src/components/PostUpdate"));

var _apiActions = _interopRequireDefault(require("./src/api/api-actions"));

require("./css/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

pageBuild();

function pageBuild() {
  header();
  navHome(); // navPosts();

  footer();
}

function header() {
  var header = document.querySelector("#header");
  header.innerHTML = (0, _Header.default)(); //send component into our html
}

function footer() {
  var footer = document.querySelector("#footer");
  footer.innerHTML = (0, _Footer.default)();
}

function navHome() {
  var homeButton = document.querySelector(".nav-list__home");
  homeButton.addEventListener("click", function () {
    document.querySelector("#app").innerHTML = (0, _Home.default)();
  });
}

function navPosts() {
  //get request
  var postsButton = document.querySelector(".nav-list__posts");
  postsButton.addEventListener("click", function () {
    _apiActions.default.getRequest("http://localhost:3000/posts", function (posts) {
      document.querySelector("#app").innerHTML = (0, _Posts.default)(posts);
    });

    editPost();
  }); //post request

  var app = document.querySelector("#app");
  app.addEventListener("click", function () {
    if (event.target.classList.contains("add-post__submit")) {
      var postTitle = event.target.parentElement.querySelector(".add-post__postTitle").value;
      var postContent = event.target.parentElement.querySelector(".add-post__postBody").value;
      var postData = {
        title: postTitle,
        content: postContent
      };

      _apiActions.default.postRequest("http://localhost:3000/posts", postData, function (post) {
        console.log(post);
        document.querySelector("#app").innerHTML = (0, _PostUpdate.default)();
        setTimeout(function () {
          document.querySelector("#app").innerHTML = (0, _Post.default)(post);
        }, 3000);
      });
    }
  }); //delete request

  app.addEventListener("click", function () {
    if (event.target.classList.contains("delete-post__submit")) {
      var postId = event.target.parentElement.querySelector(".delete-post__id").value;
      console.log(postId);

      _apiActions.default.deleteRequest("http://localhost:3000/posts/".concat(postId), function (posts) {
        document.querySelector("#app").innerHTML = (0, _Posts.default)(posts);
      });
    }
  }); //update request

  app.addEventListener("click", function () {
    if (event.target.classList.contains("update-post__submit")) {
      var postId = event.target.parentElement.querySelector(".update-post__id").value;
      var postTitle = event.target.parentElement.querySelector(".update-post__postTitle").value;
      var postContent = event.target.parentElement.querySelector(".update-post__postBody").value;
      var postData = {
        title: postTitle,
        content: postContent
      };
      console.log(postData);

      _apiActions.default.updateRequest("http://localhost:3000/posts/".concat(postId), postData, function (post) {
        document.querySelector("#app").innerHTML = (0, _Post.default)(post);
      });
    }
  });
}

function editPost() {
  var app = document.querySelector("#app");
  app.addEventListener("click", function () {
    if (event.target.classList.contains("edit-post__submit")) {
      var postId = event.target.parentElement.querySelector(".delete-post__id").value;
      console.log(postId);

      _apiActions.default.getRequest("http://localhost:3000/posts/".concat(postId), function (post) {
        document.querySelector("#app").innerHTML = (0, _Post.default)(post);
      });
    }
  });
}
},{"./src/components/Header":"src/components/Header.js","./src/components/Home":"src/components/Home.js","./src/components/Posts":"src/components/Posts.js","./src/components/Post":"src/components/Post.js","./src/components/Footer":"src/components/Footer.js","./src/components/PostUpdate":"src/components/PostUpdate.js","./src/api/api-actions":"src/api/api-actions.js","./css/style.css":"css/style.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54526" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/spa-demo.e31bb0bc.js.map