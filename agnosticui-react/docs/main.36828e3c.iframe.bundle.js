(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    '../node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./src/css/common.min.css':
      function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
            '../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
          ),
          content = __webpack_require__(
            './node_modules/css-loader/dist/cjs.js!./src/css/common.min.css'
          );
        'string' == typeof (content = content.__esModule ? content.default : content) &&
          (content = [[module.i, content, '']]);
        var options = { insert: 'head', singleton: !1 };
        api(content, options);
        module.exports = content.locals || {};
      },
    './.storybook/generated-stories-entry.js': function (module, exports, __webpack_require__) {
      'use strict';
      (function (module) {
        (0,
        __webpack_require__('../node_modules/@storybook/react/dist/esm/client/index.js').configure)(
          [
            __webpack_require__(
              './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$'
            ),
            __webpack_require__(
              './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$'
            ),
          ],
          module,
          !1
        );
      }.call(this, __webpack_require__('../node_modules/webpack/buildin/module.js')(module)));
    },
    './.storybook/preview.js-generated-config-entry.js': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(preview_namespaceObject, 'parameters', function () {
          return parameters;
        });
      var ClientApi = __webpack_require__(
          '../node_modules/@storybook/react/node_modules/@storybook/client-api/dist/esm/ClientApi.js'
        ),
        esm = __webpack_require__('../node_modules/@storybook/client-logger/dist/esm/index.js');
      const parameters = { actions: { argTypesRegex: '^on[A-Z].*' } };
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      __webpack_require__(
        '../node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./src/css/common.min.css'
      ),
        Object.keys(preview_namespaceObject).forEach(function (key) {
          var value = preview_namespaceObject[key];
          switch (key) {
            case 'args':
            case 'argTypes':
              return esm.a.warn(
                'Invalid args/argTypes in config, ignoring.',
                JSON.stringify(value)
              );
            case 'decorators':
              return value.forEach(function (decorator) {
                return Object(ClientApi.d)(decorator, !1);
              });
            case 'loaders':
              return value.forEach(function (loader) {
                return Object(ClientApi.e)(loader, !1);
              });
            case 'parameters':
              return Object(ClientApi.f)(
                (function _objectSpread(target) {
                  for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2
                      ? ownKeys(Object(source), !0).forEach(function (key) {
                          _defineProperty(target, key, source[key]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
                      : ownKeys(Object(source)).forEach(function (key) {
                          Object.defineProperty(
                            target,
                            key,
                            Object.getOwnPropertyDescriptor(source, key)
                          );
                        });
                  }
                  return target;
                })({}, value),
                !1
              );
            case 'argTypesEnhancers':
              return value.forEach(function (enhancer) {
                return Object(ClientApi.b)(enhancer);
              });
            case 'argsEnhancers':
              return value.forEach(function (enhancer) {
                return Object(ClientApi.c)(enhancer);
              });
            case 'render':
              return Object(ClientApi.g)(value);
            case 'globals':
            case 'globalTypes':
              var v = {};
              return (v[key] = value), Object(ClientApi.f)(v, !1);
            default:
              return console.log(key + ' was not supported :( !');
          }
        });
    },
    './.storybook/storybook-init-framework-entry.js': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__('../node_modules/@storybook/react/dist/esm/client/index.js');
    },
    './node_modules/css-loader/dist/cjs.js!./src/css/common.min.css': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__('./node_modules/css-loader/dist/runtime/api.js'),
        ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
        )()(!0);
      ___CSS_LOADER_EXPORT___.push([
        module.i,
        "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}html{box-sizing:border-box}*,*::before,*::after{box-sizing:inherit}ul{list-style:none}.width-full{width:100%}.screenreader-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}:root{--agnosticui-primary:#077acb;--agnosticui-primary-from:#0662a2;--agnosticui-primary-to:#2087d0;--agnosticui-primary-hover:#2087d0;--agnosticui-secondary:#c94d2b;--agnosticui-secondary-from:#a33e23;--agnosticui-secondary-to:#bc583d;--agnosticui-secondary-hover:#bc583d;--agnosticui-action:#2fb751;--agnosticui-action-from:#20913c;--agnosticui-action-to:#41d466;--agnosticui-action-hover:#3dd262;--agnosticui-error-color:#e42002;--agnosticui-gray-extra-light:#f8f8f8;--agnosticui-gray-light:#e9e9e9;--agnosticui-gray-mid:#d8d8d8;--agnosticui-gray-mid-dark:#ccc;--agnosticui-gray-dark:#757575;--agnosticui-dark:#333;--agnosticui-light:#fff;--agnosticui-disabled-bg:var(--agnosticui-gray-light);--agnosticui-disabled-color:var(--agnosticui-gray-dark);--agnosticui-focus-ring-color:rgba(55,149,225,0.5)}:root{--fluid-2:0.125rem;--fluid-4:0.25rem;--fluid-6:0.375rem;--fluid-8:0.5rem;--fluid-10:0.625rem;--fluid-12:0.75rem;--fluid-14:0.875rem;--fluid-16:1rem;--fluid-18:1.125rem;--fluid-20:1.25rem;--fluid-24:1.5rem;--fluid-32:2rem;--fluid-36:2.25rem;--fluid-40:2.5rem;--fluid-48:3rem;--fluid-56:3.5rem;--fluid-64:4rem;--fluid-72:4.5rem;--fluid-80:5rem;--agnosticui-line-height:var(--fluid-20);--agnosticui-side-padding:var(--fluid-12);--agnosticui-input-side-padding:var(--fluid-12);--agnosticui-vertical-pad:var(--fluid-8)}:root{--agnosticui-font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Open Sans','Ubuntu','Fira Sans',Helvetica,'Droid Sans','Helvetica Neue',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';--agnosticui-font-family-serif:Georgia,Cambria,'Times New Roman',Times,serif;--agnosticui-font-family-mono:SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace;--agnosticui-h1:64px;--agnosticui-h2:48px;--agnosticui-h3:36px;--agnosticui-h4:24px;--agnosticui-h5:18px;--agnosticui-h6:12px;--agnosticui-body:16px;--agnosticui-font-weight-bold:600;--agnosticui-font-weight-light:300;--agnosticui-font-color:#333}:root{--agnosticui-timing-fast:200ms;--agnosticui-timing-medium:300ms;--agnosticui-timing-slow:450ms}",
        '',
        {
          version: 3,
          sources: ['webpack://src/css/common.min.css'],
          names: [],
          mappings:
            'AAAA,kGAAkG,QAAQ,CAAC,SAAS,CAAC,KAAK,qBAAqB,CAAC,qBAAqB,kBAAkB,CAAC,GAAG,eAAe,CAAC,YAAY,UAAU,CAAC,mBAAmB,iBAAiB,CAAC,SAAS,CAAC,UAAU,CAAC,SAAS,CAAC,WAAW,CAAC,eAAe,CAAC,kBAAkB,CAAC,kBAAkB,CAAC,cAAc,CAAC,MAAM,4BAA4B,CAAC,iCAAiC,CAAC,+BAA+B,CAAC,kCAAkC,CAAC,8BAA8B,CAAC,mCAAmC,CAAC,iCAAiC,CAAC,oCAAoC,CAAC,2BAA2B,CAAC,gCAAgC,CAAC,8BAA8B,CAAC,iCAAiC,CAAC,gCAAgC,CAAC,qCAAqC,CAAC,+BAA+B,CAAC,6BAA6B,CAAC,+BAA+B,CAAC,8BAA8B,CAAC,sBAAsB,CAAC,uBAAuB,CAAC,qDAAqD,CAAC,uDAAuD,CAAC,kDAAkD,CAAC,MAAM,kBAAkB,CAAC,iBAAiB,CAAC,kBAAkB,CAAC,gBAAgB,CAAC,mBAAmB,CAAC,kBAAkB,CAAC,mBAAmB,CAAC,eAAe,CAAC,mBAAmB,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,eAAe,CAAC,kBAAkB,CAAC,iBAAiB,CAAC,eAAe,CAAC,iBAAiB,CAAC,eAAe,CAAC,iBAAiB,CAAC,eAAe,CAAC,wCAAwC,CAAC,yCAAyC,CAAC,+CAA+C,CAAC,wCAAwC,CAAC,MAAM,+MAA+M,CAAC,4EAA4E,CAAC,4GAA4G,CAAC,oBAAoB,CAAC,oBAAoB,CAAC,oBAAoB,CAAC,oBAAoB,CAAC,oBAAoB,CAAC,oBAAoB,CAAC,sBAAsB,CAAC,iCAAiC,CAAC,kCAAkC,CAAC,4BAA4B,CAAC,MAAM,8BAA8B,CAAC,gCAAgC,CAAC,8BAA8B',
          sourcesContent: [
            "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}html{box-sizing:border-box}*,*::before,*::after{box-sizing:inherit}ul{list-style:none}.width-full{width:100%}.screenreader-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}:root{--agnosticui-primary:#077acb;--agnosticui-primary-from:#0662a2;--agnosticui-primary-to:#2087d0;--agnosticui-primary-hover:#2087d0;--agnosticui-secondary:#c94d2b;--agnosticui-secondary-from:#a33e23;--agnosticui-secondary-to:#bc583d;--agnosticui-secondary-hover:#bc583d;--agnosticui-action:#2fb751;--agnosticui-action-from:#20913c;--agnosticui-action-to:#41d466;--agnosticui-action-hover:#3dd262;--agnosticui-error-color:#e42002;--agnosticui-gray-extra-light:#f8f8f8;--agnosticui-gray-light:#e9e9e9;--agnosticui-gray-mid:#d8d8d8;--agnosticui-gray-mid-dark:#ccc;--agnosticui-gray-dark:#757575;--agnosticui-dark:#333;--agnosticui-light:#fff;--agnosticui-disabled-bg:var(--agnosticui-gray-light);--agnosticui-disabled-color:var(--agnosticui-gray-dark);--agnosticui-focus-ring-color:rgba(55,149,225,0.5)}:root{--fluid-2:0.125rem;--fluid-4:0.25rem;--fluid-6:0.375rem;--fluid-8:0.5rem;--fluid-10:0.625rem;--fluid-12:0.75rem;--fluid-14:0.875rem;--fluid-16:1rem;--fluid-18:1.125rem;--fluid-20:1.25rem;--fluid-24:1.5rem;--fluid-32:2rem;--fluid-36:2.25rem;--fluid-40:2.5rem;--fluid-48:3rem;--fluid-56:3.5rem;--fluid-64:4rem;--fluid-72:4.5rem;--fluid-80:5rem;--agnosticui-line-height:var(--fluid-20);--agnosticui-side-padding:var(--fluid-12);--agnosticui-input-side-padding:var(--fluid-12);--agnosticui-vertical-pad:var(--fluid-8)}:root{--agnosticui-font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Open Sans','Ubuntu','Fira Sans',Helvetica,'Droid Sans','Helvetica Neue',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';--agnosticui-font-family-serif:Georgia,Cambria,'Times New Roman',Times,serif;--agnosticui-font-family-mono:SFMono-Regular,Menlo,Monaco,Consolas,'Liberation Mono','Courier New',monospace;--agnosticui-h1:64px;--agnosticui-h2:48px;--agnosticui-h3:36px;--agnosticui-h4:24px;--agnosticui-h5:18px;--agnosticui-h6:12px;--agnosticui-body:16px;--agnosticui-font-weight-bold:600;--agnosticui-font-weight-light:300;--agnosticui-font-color:#333}:root{--agnosticui-timing-fast:200ms;--agnosticui-timing-medium:300ms;--agnosticui-timing-slow:450ms}",
          ],
          sourceRoot: '',
        },
      ]),
        (__webpack_exports__.default = ___CSS_LOADER_EXPORT___);
    },
    './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$':
      function (module, exports, __webpack_require__) {
        var map = {
          './stories/Button.stories.tsx': './src/stories/Button.stories.tsx',
          './stories/ButtonGroup.stories.tsx': './src/stories/ButtonGroup.stories.tsx',
          './stories/ButtonIcon.stories.tsx': './src/stories/ButtonIcon.stories.tsx',
          './stories/Card.stories.tsx': './src/stories/Card.stories.tsx',
          './stories/ChoiceInput.stories.tsx': './src/stories/ChoiceInput.stories.tsx',
          './stories/Header.stories.tsx': './src/stories/Header.stories.tsx',
          './stories/Input.stories.tsx': './src/stories/Input.stories.tsx',
          './stories/Progress.stories.tsx': './src/stories/Progress.stories.tsx',
          './stories/Switch.stories.tsx': './src/stories/Switch.stories.tsx',
          './stories/Tabs.stories.tsx': './src/stories/Tabs.stories.tsx',
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$');
      },
    './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$':
      function (module, exports) {
        function webpackEmptyContext(req) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        (webpackEmptyContext.keys = function () {
          return [];
        }),
          (webpackEmptyContext.resolve = webpackEmptyContext),
          (module.exports = webpackEmptyContext),
          (webpackEmptyContext.id =
            './src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$');
      },
    './src/Button.tsx': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Button;
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function () {
          return ButtonGroup;
        });
      var _button_module_css__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__('./src/button.module.css'),
        _button_module_css__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          _button_module_css__WEBPACK_IMPORTED_MODULE_0__
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../node_modules/react/jsx-runtime.js'
        );
      const Button = ({
          children: children,
          mode: mode = '',
          size: size = '',
          isSkinned: isSkinned = !0,
          isBordered: isBordered = !1,
          isRounded: isRounded = !1,
          isCircle: isCircle = !1,
          isDisabled: isDisabled = !1,
          isRaised: isRaised = !1,
          isBlock: isBlock = !1,
          isBlank: isBlank = !1,
          css: css,
          type: type = 'button',
          ...rest
        }) => {
          const classes = [
            isSkinned
              ? _button_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.btn
              : _button_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.btnBase,
            mode ? _button_module_css__WEBPACK_IMPORTED_MODULE_0___default.a[`${mode}`] : '',
            size ? _button_module_css__WEBPACK_IMPORTED_MODULE_0___default.a[`${size}`] : '',
            isBordered ? _button_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.bordered : '',
            isRounded ? _button_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.rounded : '',
            isCircle ? _button_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.circle : '',
            isDisabled ? _button_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.disabled : '',
            isRaised ? _button_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.raised : '',
            isBlock ? _button_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.block : '',
            isBlank ? _button_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.blank : '',
            css ? `${css}` : '',
          ]
            .filter((klass) => klass.length)
            .join(' ');
          return 'faux' === type
            ? Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
                className: classes,
                children: children,
              })
            : Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('button', {
                type: type,
                className: classes,
                disabled: isDisabled,
                ...rest,
                children: children,
              });
        },
        ButtonGroup = ({ ariaLabel: ariaLabel, children: children, css: css = '' }) => {
          const props = {
            className: `${_button_module_css__WEBPACK_IMPORTED_MODULE_0___default.a.group} ${css}`,
            role: 'group',
            ...(ariaLabel && { 'aria-label': ariaLabel }),
          };
          return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
            ...props,
            children: children,
          });
        };
      try {
        (Button.displayName = 'Button'),
          (Button.__docgenInfo = {
            description: '',
            displayName: 'Button',
            props: {
              mode: {
                defaultValue: { value: '' },
                description: '',
                name: 'mode',
                required: !1,
                type: { name: 'string' },
              },
              size: {
                defaultValue: { value: '' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '""' }, { value: '"large"' }, { value: '"small"' }],
                },
              },
              isSkinned: {
                defaultValue: { value: 'true' },
                description: '',
                name: 'isSkinned',
                required: !1,
                type: { name: 'boolean' },
              },
              isBordered: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isBordered',
                required: !1,
                type: { name: 'boolean' },
              },
              isRounded: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isRounded',
                required: !1,
                type: { name: 'boolean' },
              },
              isCircle: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isCircle',
                required: !1,
                type: { name: 'boolean' },
              },
              isDisabled: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isDisabled',
                required: !1,
                type: { name: 'boolean' },
              },
              isRaised: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isRaised',
                required: !1,
                type: { name: 'boolean' },
              },
              isBlock: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isBlock',
                required: !1,
                type: { name: 'boolean' },
              },
              isBlank: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isBlank',
                required: !1,
                type: { name: 'boolean' },
              },
              css: {
                defaultValue: { value: '' },
                description: '',
                name: 'css',
                required: !1,
                type: { name: 'string' },
              },
              role: {
                defaultValue: null,
                description: '',
                name: 'role',
                required: !1,
                type: { name: 'string' },
              },
              type: {
                defaultValue: { value: 'button' },
                description: '',
                name: 'type',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"button"' },
                    { value: '"faux"' },
                    { value: '"reset"' },
                    { value: '"submit"' },
                  ],
                },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Button.tsx#Button'] = {
              docgenInfo: Button.__docgenInfo,
              name: 'Button',
              path: 'src/Button.tsx#Button',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (ButtonGroup.displayName = 'ButtonGroup'),
          (ButtonGroup.__docgenInfo = {
            description: '',
            displayName: 'ButtonGroup',
            props: {
              ariaLabel: {
                defaultValue: null,
                description: '',
                name: 'ariaLabel',
                required: !0,
                type: { name: 'string' },
              },
              css: {
                defaultValue: { value: '' },
                description: '',
                name: 'css',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Button.tsx#ButtonGroup'] = {
              docgenInfo: ButtonGroup.__docgenInfo,
              name: 'ButtonGroup',
              path: 'src/Button.tsx#ButtonGroup',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/button.module.css': function (module, exports, __webpack_require__) {
      module.exports = {
        btn: 'button_btn__3CldF button_btn__12vXR',
        btnBase: 'button_btnBase__1sFNH button_btn-base__2gef7',
        primary: 'button_primary__2B_L8 button_btn-primary__1ilWA',
        secondary: 'button_secondary__3sHXN button_btn-secondary__5rmkD',
        block: 'button_block__fv-MD button_btn-block__3_EQz',
        group: 'button_group__3BFeX button-group_btn-group__1L49p',
        raised: 'button_raised__2rQvj button_btn-raised__3tcN1',
        circle: 'button_circle__16jtj button_btn-circle__3WNmC',
        rounded: 'button_rounded__3_wFE button_btn-rounded__3QRkw',
        bordered: 'button_bordered__tEl55 button_btn-bordered__26B08',
        small: 'button_small__1Hlf_ button_btn-small__MuEla',
        large: 'button_large__36fkD button_btn-large__2oAa4',
        blank: 'button_blank__xzrsz button_btn-blank__3berd',
        iconLeft: 'button_iconLeft__2iWnm undefined',
        iconRight: 'button_iconRight__b8UDn undefined',
        disabled: 'button_disabled__1oNEb button_disabled__1Mlxp',
      };
    },
    './src/card.module.css': function (module, exports, __webpack_require__) {
      module.exports = {
        card: 'card_card__3m55h card_card__1GFrT',
        cardAnimated: 'card_cardAnimated__23RNu card_card-animated__3il6t',
        cardStacked: 'card_cardStacked__17lie card_card-stacked__MHa5G',
        cardBase: 'card_cardBase__25D3y card_card-base__2zZTl',
      };
    },
    './src/choice-input.module.css': function (module, exports, __webpack_require__) {
      module.exports = {
        'checkbox-group': 'choice-input_checkbox-group__1D0z6 choice-input_checkbox-group__vbhon',
        'radio-group': 'choice-input_radio-group__GlW3E choice-input_radio-group__CMLUO',
        'checkbox-group-large':
          'choice-input_checkbox-group-large__17FYK choice-input_checkbox-group-large__3j4Ix',
        'radio-group-large':
          'choice-input_radio-group-large__2Altx choice-input_radio-group-large__2qFnn',
        'checkbox-legend':
          'choice-input_checkbox-legend__YHUN4 choice-input_checkbox-legend__1FhCU',
        'radio-legend': 'choice-input_radio-legend__KdXLi choice-input_radio-legend__3YsVP',
        radio: 'choice-input_radio__2zqVA choice-input_radio__aAlDi',
        checkbox: 'choice-input_checkbox__2k3l9 choice-input_checkbox__1UPJv',
        'checkbox-small': 'choice-input_checkbox-small__180E5 choice-input_checkbox-small__8KluL',
        'radio-small': 'choice-input_radio-small__1TOOp choice-input_radio-small__1jThT',
        'checkbox-large': 'choice-input_checkbox-large__ZYeOu choice-input_checkbox-large__-yYeN',
        'radio-large': 'choice-input_radio-large__2KMw3 choice-input_radio-large__1SlyN',
        'checkbox-label-wrap':
          'choice-input_checkbox-label-wrap__2mvoN choice-input_checkbox-label-wrap__qkbMb',
        'radio-label-wrap':
          'choice-input_radio-label-wrap__mblT- choice-input_radio-label-wrap__39c7Q',
        'checkbox-label-wrap-inline':
          'choice-input_checkbox-label-wrap-inline__1cbVa choice-input_checkbox-label-wrap-inline__JGJpA',
        'radio-label-wrap-inline':
          'choice-input_radio-label-wrap-inline__iqnLZ choice-input_radio-label-wrap-inline__zpMzL',
        'checkbox-label': 'choice-input_checkbox-label__2kDzb choice-input_checkbox-label__3gK7F',
        'radio-label': 'choice-input_radio-label__YW0Vt choice-input_radio-label__refva',
        'checkbox-label-small':
          'choice-input_checkbox-label-small__ngDne choice-input_checkbox-label-small__QsWgM',
        'radio-label-small':
          'choice-input_radio-label-small__1h8gG choice-input_radio-label-small__3sqNB',
        'checkbox-label-large':
          'choice-input_checkbox-label-large__1kdf5 choice-input_checkbox-label-large__3KAhY',
        'radio-label-large':
          'choice-input_radio-label-large__18Mb6 choice-input_radio-label-large__3RfNp',
        'checkbox-group-hidden':
          'choice-input_checkbox-group-hidden__1j2ZG choice-input_checkbox-group-hidden__TxhYE',
        'radio-group-hidden':
          'choice-input_radio-group-hidden__1TgUn choice-input_radio-group-hidden__W5NNP',
      };
    },
    './src/header.module.css': function (module, exports, __webpack_require__) {
      module.exports = {
        headerBase: 'header_headerBase__1aTZf header_header-base__29S3w',
        header: 'header_header__3ZSjI header_header__3vJhF',
        headerContent: 'header_headerContent__2CSLo header_header-content__23PLV',
        sticky: 'header_sticky__SMFdH header_header-sticky__X_xnH',
        headerNav: 'header_headerNav__3JIcB headernav_header-nav__1uvoP',
        headerNavItem: 'header_headerNavItem__144a_ headernavitem_header-nav-item__19Ko3',
      };
    },
    './src/input.module.css': function (module, exports, __webpack_require__) {
      module.exports = {
        inputBase: 'input_inputBase__28GtJ input_input-base__15FoB',
        input: 'input_input__1iomh input_input__2dEho',
        rounded: 'input_rounded__3GpJt input_input-rounded__37_rT',
        underlined: 'input_underlined__1hhRc input_input-underlined__2tg5q',
        underlinedWithBackground:
          'input_underlinedWithBackground__1HfW9 input_input-underlined-bg__2oc1p',
        leftAddon: 'input_leftAddon__2bnBg input_input-addon-left__3Z4FD',
        inputHasLeftAddon: 'input_inputHasLeftAddon__2emA9 input_input-has-left-addon__3CfHm',
        rightAddon: 'input_rightAddon__3V0l6 input_input-addon-right__2tj5z',
        rightHasLeftAddon: 'input_rightHasLeftAddon__gzJXi input_input-has-right-addon__snUpK',
        inputSmall: 'input_inputSmall__G2FvJ input_input-small__1QZek',
        inputLarge: 'input_inputLarge__3qKL7 input_input-large__2jyu5',
        invalid: 'input_invalid__3YsWM input_input-error__2isdr',
        label: 'input_label__2ACSJ input_label__3oz8i',
        labelError: 'input_labelError__34Krg input_label-error__1GiX1',
        labelSmall: 'input_labelSmall__27V5q input_label-small__1HU8T',
        labelLarge: 'input_labelLarge__bc0cS input_label-large__1eaYI',
        inputAddonContainer: 'input_inputAddonContainer__31Moh input_input-addon-container__3xMdZ',
        fieldError: 'input_fieldError__lShGo input_field-error__Bm7iM',
        fieldErrorSmall: 'input_fieldErrorSmall__1JpDM input_field-error-small__3Ts34',
        fieldErrorLarge: 'input_fieldErrorLarge__2hNml input_field-error-large__1yzuZ',
        fieldHelp: 'input_fieldHelp__1EtVJ input_field-help__zVMda',
        fieldHelpSmall: 'input_fieldHelpSmall__11mFA input_field-help-small__FY1Jo',
        fieldHelpLarge: 'input_fieldHelpLarge__1f6fA input_field-help-large__UlxVs',
        disabled: 'input_disabled__1glh_ input_disabled__34VuT',
        labelInline: 'input_labelInline__2zdZA input_label-inline__1E5i6',
        inputInline: 'input_inputInline__2RuWD input_input-inline__1myP9',
      };
    },
    './src/progress.module.css': function (module, exports, __webpack_require__) {
      module.exports = { progressBar: 'progress_progressBar__2Zc_B progress_progress__1PlwV' };
    },
    './src/stories/Button.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary;
        }),
        __webpack_require__.d(__webpack_exports__, 'Secondary', function () {
          return Secondary;
        }),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return Default;
        }),
        __webpack_require__.d(__webpack_exports__, 'Sizes', function () {
          return Sizes;
        }),
        __webpack_require__.d(__webpack_exports__, 'DisabledAll', function () {
          return DisabledAll;
        }),
        __webpack_require__.d(__webpack_exports__, 'Types', function () {
          return Types;
        }),
        __webpack_require__.d(__webpack_exports__, 'Customizations', function () {
          return Customizations;
        });
      var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/@storybook/addon-actions/dist/esm/index.js'
        ),
        _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/Button.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../node_modules/react/jsx-runtime.js'
        );
      const actionsData = {
        click: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)('click'),
      };
      __webpack_exports__.default = {
        title: 'AG—React (Beta)/Button',
        component: _Button__WEBPACK_IMPORTED_MODULE_1__.a,
        on: { ...actionsData },
      };
      const Primary = () =>
          Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
            {
              children: [
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    mode: 'primary',
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    mode: 'primary',
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    isBordered: !0,
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    mode: 'primary',
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    isRounded: !0,
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    mode: 'primary',
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    isRounded: !0,
                    isBordered: !0,
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    mode: 'primary',
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    isRounded: !0,
                    isRaised: !0,
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    mode: 'primary',
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    isCircle: !0,
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    mode: 'primary',
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    isCircle: !0,
                    isBordered: !0,
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    mode: 'primary',
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    isBlock: !0,
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    mode: 'primary',
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    isBordered: !0,
                    isBlock: !0,
                    children: 'Go',
                  }
                ),
              ],
            }
          ),
        Secondary = () =>
          Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
            {
              children: [
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    mode: 'secondary',
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    mode: 'secondary',
                    isBordered: !0,
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    mode: 'secondary',
                    isRounded: !0,
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    mode: 'secondary',
                    isBordered: !0,
                    isRounded: !0,
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    mode: 'secondary',
                    isRaised: !0,
                    isRounded: !0,
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    mode: 'secondary',
                    isCircle: !0,
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    mode: 'secondary',
                    isCircle: !0,
                    isBordered: !0,
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    mode: 'secondary',
                    isBlock: !0,
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    mode: 'secondary',
                    isBordered: !0,
                    isBlock: !0,
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    children: 'Go',
                  }
                ),
              ],
            }
          ),
        Default = () =>
          Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
            {
              children: [
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    isBordered: !0,
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    isRounded: !0,
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    isBordered: !0,
                    isRounded: !0,
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    isRaised: !0,
                    isRounded: !0,
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    isCircle: !0,
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    isCircle: !0,
                    isBordered: !0,
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    isBlock: !0,
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    isBordered: !0,
                    isBlock: !0,
                    children: 'Go',
                  }
                ),
              ],
            }
          ),
        Sizes = () =>
          Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
            {
              children: [
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    size: 'small',
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    size: 'large',
                    children: 'Go',
                  }
                ),
              ],
            }
          ),
        DisabledAll = () =>
          Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
            {
              children: [
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  { isDisabled: !0, children: 'Go' }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    mode: 'primary',
                    isDisabled: !0,
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    mode: 'secondary',
                    isDisabled: !0,
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    mode: 'secondary',
                    isDisabled: !0,
                    isBordered: !0,
                    children: 'Go',
                  }
                ),
              ],
            }
          ),
        Types = () =>
          Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
            {
              children: [
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    type: 'reset',
                    children: 'Go',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    type: 'submit',
                    children: 'Go',
                  }
                ),
              ],
            }
          ),
        Customizations = () =>
          Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
            {
              children: [
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    css: 'my-custom-css-klass',
                    children: 'Inspect me to find custom classes',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    isBlank: !0,
                    children: 'Blank button',
                  }
                ),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                  _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                  {
                    onClick: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)(
                      'click'
                    ),
                    isSkinned: !1,
                    children: 'Unskinned',
                  }
                ),
              ],
            }
          );
      (Primary.parameters = {
        storySource: {
          source:
            '() => (\n  <>\n    <Button mode="primary" onClick={action(\'click\')}>\n      Go\n    </Button>\n    <Button mode="primary" onClick={action(\'click\')} isBordered>\n      Go\n    </Button>\n    <Button mode="primary" onClick={action(\'click\')} isRounded>\n      Go\n    </Button>\n    <Button mode="primary" onClick={action(\'click\')} isRounded isBordered>\n      Go\n    </Button>\n    <Button mode="primary" onClick={action(\'click\')} isRounded isRaised>\n      Go\n    </Button>\n    <Button mode="primary" onClick={action(\'click\')} isCircle>\n      Go\n    </Button>\n    <Button mode="primary" onClick={action(\'click\')} isCircle isBordered>\n      Go\n    </Button>\n    <Button mode="primary" onClick={action(\'click\')} isBlock>\n      Go\n    </Button>\n    <Button mode="primary" onClick={action(\'click\')} isBordered isBlock>\n      Go\n    </Button>\n  </>\n)',
        },
        ...Primary.parameters,
      }),
        (Secondary.parameters = {
          storySource: {
            source:
              '() => (\n  <>\n    <Button mode="secondary" onClick={action(\'click\')}>\n      Go\n    </Button>\n    <Button mode="secondary" isBordered onClick={action(\'click\')}>\n      Go\n    </Button>\n    <Button mode="secondary" isRounded onClick={action(\'click\')}>\n      Go\n    </Button>\n    <Button mode="secondary" isBordered isRounded onClick={action(\'click\')}>\n      Go\n    </Button>\n    <Button mode="secondary" isRaised isRounded onClick={action(\'click\')}>\n      Go\n    </Button>\n    <Button mode="secondary" isCircle onClick={action(\'click\')}>\n      Go\n    </Button>\n    <Button mode="secondary" isCircle isBordered onClick={action(\'click\')}>\n      Go\n    </Button>\n    <Button mode="secondary" isBlock onClick={action(\'click\')}>\n      Go\n    </Button>\n    <Button mode="secondary" isBordered isBlock onClick={action(\'click\')}>\n      Go\n    </Button>\n  </>\n)',
          },
          ...Secondary.parameters,
        }),
        (Default.parameters = {
          storySource: {
            source:
              "() => (\n  <>\n    <Button onClick={action('click')}>Go</Button>\n    <Button onClick={action('click')} isBordered>\n      Go\n    </Button>\n    <Button onClick={action('click')} isRounded>\n      Go\n    </Button>\n    <Button onClick={action('click')} isBordered isRounded>\n      Go\n    </Button>\n    <Button onClick={action('click')} isRaised isRounded>\n      Go\n    </Button>\n    <Button onClick={action('click')} isCircle>\n      Go\n    </Button>\n    <Button onClick={action('click')} isCircle isBordered>\n      Go\n    </Button>\n    <Button onClick={action('click')} isBlock>\n      Go\n    </Button>\n    <Button onClick={action('click')} isBordered isBlock>\n      Go\n    </Button>\n  </>\n)",
          },
          ...Default.parameters,
        }),
        (Sizes.parameters = {
          storySource: {
            source:
              '() => (\n  <>\n    <Button onClick={action(\'click\')} size="small">\n      Go\n    </Button>\n    <Button onClick={action(\'click\')} size="large">\n      Go\n    </Button>\n  </>\n)',
          },
          ...Sizes.parameters,
        }),
        (DisabledAll.parameters = {
          storySource: {
            source:
              '() => (\n  <>\n    <Button isDisabled>Go</Button>\n    <Button onClick={action(\'click\')} mode="primary" isDisabled>\n      Go\n    </Button>\n    <Button onClick={action(\'click\')} mode="secondary" isDisabled>\n      Go\n    </Button>\n    <Button onClick={action(\'click\')} mode="secondary" isDisabled isBordered>\n      Go\n    </Button>\n  </>\n)',
          },
          ...DisabledAll.parameters,
        }),
        (Types.parameters = {
          storySource: {
            source:
              '() => (\n  <>\n    <Button onClick={action(\'click\')} type="reset">\n      Go\n    </Button>\n    <Button onClick={action(\'click\')} type="submit">\n      Go\n    </Button>\n  </>\n)',
          },
          ...Types.parameters,
        }),
        (Customizations.parameters = {
          storySource: {
            source:
              "() => (\n  <>\n    <Button onClick={action('click')} css=\"my-custom-css-klass\">\n      Inspect me to find custom classes\n    </Button>\n    <Button onClick={action('click')} isBlank>\n      Blank button\n    </Button>\n    <Button onClick={action('click')} isSkinned={false}>\n      Unskinned\n    </Button>\n  </>\n)",
          },
          ...Customizations.parameters,
        });
    },
    './src/stories/ButtonGroup.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'All', function () {
          return All;
        });
      var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/@storybook/addon-actions/dist/esm/index.js'
        ),
        _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__('./src/Button.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          '../node_modules/react/jsx-runtime.js'
        );
      const actionsData = {
        click: Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action)('click'),
      };
      __webpack_exports__.default = {
        title: 'AG—React (Beta)/ButtonGroups',
        component: _Button__WEBPACK_IMPORTED_MODULE_1__.b,
        on: { ...actionsData },
      };
      const All = () =>
        Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,
          {
            children: [
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                _Button__WEBPACK_IMPORTED_MODULE_1__.b,
                {
                  ariaLabel: 'Appropriate label for your button group',
                  children: [
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'One',
                      }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Two',
                      }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Three',
                      }
                    ),
                  ],
                }
              ),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                _Button__WEBPACK_IMPORTED_MODULE_1__.b,
                {
                  ariaLabel: 'Appropriate label for your button group',
                  children: [
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        isRaised: !0,
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'One',
                      }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        isRaised: !0,
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Two',
                      }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        isRaised: !0,
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Three',
                      }
                    ),
                  ],
                }
              ),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                _Button__WEBPACK_IMPORTED_MODULE_1__.b,
                {
                  ariaLabel: 'Appropriate label for your button group',
                  children: [
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        isBordered: !0,
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'One',
                      }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        isBordered: !0,
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Two',
                      }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        isBordered: !0,
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Three',
                      }
                    ),
                  ],
                }
              ),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                _Button__WEBPACK_IMPORTED_MODULE_1__.b,
                {
                  ariaLabel: 'Appropriate label for your button group',
                  children: [
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'secondary',
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'One',
                      }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'secondary',
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Two',
                      }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'secondary',
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Three',
                      }
                    ),
                  ],
                }
              ),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                _Button__WEBPACK_IMPORTED_MODULE_1__.b,
                {
                  ariaLabel: 'Appropriate label for your button group',
                  children: [
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'secondary',
                        isRaised: !0,
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'One',
                      }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'secondary',
                        isRaised: !0,
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Two',
                      }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'secondary',
                        isRaised: !0,
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Three',
                      }
                    ),
                  ],
                }
              ),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                _Button__WEBPACK_IMPORTED_MODULE_1__.b,
                {
                  ariaLabel: 'Appropriate label for your button group',
                  children: [
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'secondary',
                        isBordered: !0,
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'One',
                      }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'secondary',
                        isBordered: !0,
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Two',
                      }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'secondary',
                        isBordered: !0,
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Three',
                      }
                    ),
                  ],
                }
              ),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                _Button__WEBPACK_IMPORTED_MODULE_1__.b,
                {
                  ariaLabel: 'Appropriate label for your button group',
                  children: [
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'primary',
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'One',
                      }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'primary',
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Two',
                      }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'primary',
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Three',
                      }
                    ),
                  ],
                }
              ),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                _Button__WEBPACK_IMPORTED_MODULE_1__.b,
                {
                  ariaLabel: 'Appropriate label for your button group',
                  children: [
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'primary',
                        isRaised: !0,
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'One',
                      }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'primary',
                        isRaised: !0,
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Two',
                      }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'primary',
                        isRaised: !0,
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Three',
                      }
                    ),
                  ],
                }
              ),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                _Button__WEBPACK_IMPORTED_MODULE_1__.b,
                {
                  ariaLabel: 'Appropriate label for your button group',
                  children: [
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'primary',
                        isBordered: !0,
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'One',
                      }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'primary',
                        isBordered: !0,
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Two',
                      }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'primary',
                        isBordered: !0,
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Three',
                      }
                    ),
                  ],
                }
              ),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                _Button__WEBPACK_IMPORTED_MODULE_1__.b,
                {
                  ariaLabel: 'Appropriate label for your button group',
                  children: [
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      { mode: 'primary', isDisabled: !0, children: 'One' }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'primary',
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Two',
                      }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'primary',
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Three',
                      }
                    ),
                  ],
                }
              ),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                _Button__WEBPACK_IMPORTED_MODULE_1__.b,
                {
                  ariaLabel: 'Appropriate label for your button group',
                  children: [
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      { mode: 'primary', isDisabled: !0, children: 'One' }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      {
                        mode: 'primary',
                        onClick: Object(
                          _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                        )('click'),
                        children: 'Two',
                      }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      { mode: 'primary', isDisabled: !0, children: 'Three' }
                    ),
                  ],
                }
              ),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(
                _Button__WEBPACK_IMPORTED_MODULE_1__.b,
                {
                  ariaLabel: 'Appropriate label for your button group',
                  children: [
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      { mode: 'primary', isDisabled: !0, children: 'One' }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      { mode: 'primary', isDisabled: !0, children: 'Two' }
                    ),
                    Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(
                      _Button__WEBPACK_IMPORTED_MODULE_1__.a,
                      { mode: 'primary', isDisabled: !0, children: 'Three' }
                    ),
                  ],
                }
              ),
            ],
          }
        );
      All.parameters = {
        storySource: {
          source:
            '() => (\n  <>\n    <ButtonGroup ariaLabel="Appropriate label for your button group">\n      <Button onClick={action(\'click\')}>One</Button>\n      <Button onClick={action(\'click\')}>Two</Button>\n      <Button onClick={action(\'click\')}>Three</Button>\n    </ButtonGroup>\n    <ButtonGroup ariaLabel="Appropriate label for your button group">\n      <Button isRaised onClick={action(\'click\')}>\n        One\n      </Button>\n      <Button isRaised onClick={action(\'click\')}>\n        Two\n      </Button>\n      <Button isRaised onClick={action(\'click\')}>\n        Three\n      </Button>\n    </ButtonGroup>\n    <ButtonGroup ariaLabel="Appropriate label for your button group">\n      <Button isBordered onClick={action(\'click\')}>\n        One\n      </Button>\n      <Button isBordered onClick={action(\'click\')}>\n        Two\n      </Button>\n      <Button isBordered onClick={action(\'click\')}>\n        Three\n      </Button>\n    </ButtonGroup>\n    <ButtonGroup ariaLabel="Appropriate label for your button group">\n      <Button mode="secondary" onClick={action(\'click\')}>\n        One\n      </Button>\n      <Button mode="secondary" onClick={action(\'click\')}>\n        Two\n      </Button>\n      <Button mode="secondary" onClick={action(\'click\')}>\n        Three\n      </Button>\n    </ButtonGroup>\n    <ButtonGroup ariaLabel="Appropriate label for your button group">\n      <Button mode="secondary" isRaised onClick={action(\'click\')}>\n        One\n      </Button>\n      <Button mode="secondary" isRaised onClick={action(\'click\')}>\n        Two\n      </Button>\n      <Button mode="secondary" isRaised onClick={action(\'click\')}>\n        Three\n      </Button>\n    </ButtonGroup>\n    <ButtonGroup ariaLabel="Appropriate label for your button group">\n      <Button mode="secondary" isBordered onClick={action(\'click\')}>\n        One\n      </Button>\n      <Button mode="secondary" isBordered onClick={action(\'click\')}>\n        Two\n      </Button>\n      <Button mode="secondary" isBordered onClick={action(\'click\')}>\n        Three\n      </Button>\n    </ButtonGroup>\n    <ButtonGroup ariaLabel="Appropriate label for your button group">\n      <Button mode="primary" onClick={action(\'click\')}>\n        One\n      </Button>\n      <Button mode="primary" onClick={action(\'click\')}>\n        Two\n      </Button>\n      <Button mode="primary" onClick={action(\'click\')}>\n        Three\n      </Button>\n    </ButtonGroup>\n    <ButtonGroup ariaLabel="Appropriate label for your button group">\n      <Button mode="primary" isRaised onClick={action(\'click\')}>\n        One\n      </Button>\n      <Button mode="primary" isRaised onClick={action(\'click\')}>\n        Two\n      </Button>\n      <Button mode="primary" isRaised onClick={action(\'click\')}>\n        Three\n      </Button>\n    </ButtonGroup>\n    <ButtonGroup ariaLabel="Appropriate label for your button group">\n      <Button mode="primary" isBordered onClick={action(\'click\')}>\n        One\n      </Button>\n      <Button mode="primary" isBordered onClick={action(\'click\')}>\n        Two\n      </Button>\n      <Button mode="primary" isBordered onClick={action(\'click\')}>\n        Three\n      </Button>\n    </ButtonGroup>\n    <ButtonGroup ariaLabel="Appropriate label for your button group">\n      <Button mode="primary" isDisabled>\n        One\n      </Button>\n      <Button mode="primary" onClick={action(\'click\')}>\n        Two\n      </Button>\n      <Button mode="primary" onClick={action(\'click\')}>\n        Three\n      </Button>\n    </ButtonGroup>\n    <ButtonGroup ariaLabel="Appropriate label for your button group">\n      <Button mode="primary" isDisabled>\n        One\n      </Button>\n      <Button mode="primary" onClick={action(\'click\')}>\n        Two\n      </Button>\n      <Button mode="primary" isDisabled>\n        Three\n      </Button>\n    </ButtonGroup>\n    <ButtonGroup ariaLabel="Appropriate label for your button group">\n      <Button mode="primary" isDisabled>\n        One\n      </Button>\n      <Button mode="primary" isDisabled>\n        Two\n      </Button>\n      <Button mode="primary" isDisabled>\n        Three\n      </Button>\n    </ButtonGroup>\n  </>\n)',
        },
        ...All.parameters,
      };
    },
    './src/stories/ButtonIcon.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'ButtonIcons', function () {
          return ButtonIcons;
        });
      var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('./src/Button.tsx'),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          '../node_modules/react/jsx-runtime.js'
        );
      __webpack_exports__.default = {
        title: 'AG—React (Beta)/ButtonIcons',
        component: _Button__WEBPACK_IMPORTED_MODULE_0__.a,
      };
      const SampleSvgIcon = () =>
          Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)('svg', {
            className: 'btn-icon',
            role: 'img',
            viewBox: '0 0 16 16',
            version: '1.1',
            width: '16',
            height: '16',
            'aria-hidden': 'true',
            children: [
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('desc', {
                children: 'Example icon graphic',
              }),
              Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('path', {
                fill: 'currentColor',
                fillRule: 'evenodd',
                d: 'M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z',
              }),
            ],
          }),
        ButtonIcons = () =>
          Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
            {
              children: [
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
                  children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                    _Button__WEBPACK_IMPORTED_MODULE_0__.a,
                    {
                      mode: 'primary',
                      children: [
                        Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          SampleSvgIcon,
                          {}
                        ),
                        'Icon Left',
                      ],
                    }
                  ),
                }),
                Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)('div', {
                  style: { marginTop: 16 },
                  children: Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                    _Button__WEBPACK_IMPORTED_MODULE_0__.a,
                    {
                      mode: 'primary',
                      children: [
                        'Icon Right',
                        Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                          SampleSvgIcon,
                          {}
                        ),
                      ],
                    }
                  ),
                }),
              ],
            }
          );
      ButtonIcons.parameters = {
        storySource: {
          source:
            '() => (\n  <>\n    <div>\n      <Button mode="primary">\n        <SampleSvgIcon />\n        Icon Left\n      </Button>\n    </div>\n    <div style={{ marginTop: 16 }}>\n      <Button mode="primary">\n        Icon Right\n        <SampleSvgIcon />\n      </Button>\n    </div>\n  </>\n)',
        },
        ...ButtonIcons.parameters,
      };
    },
    './src/stories/Card.stories.tsx': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'All', function () {
          return All;
        });
      var card_module = __webpack_require__('./src/card.module.css'),
        card_module_default = __webpack_require__.n(card_module),
        jsx_runtime = __webpack_require__('../node_modules/react/jsx-runtime.js');
      const Card = ({
        isAnimated: isAnimated = !1,
        isStacked: isStacked = !1,
        isSkinned: isSkinned = !0,
        css: css = '',
        children: children,
      }) => {
        const classes = [
          isSkinned ? card_module_default.a.card : card_module_default.a.cardBase,
          isAnimated ? card_module_default.a.cardAnimated : '',
          isStacked ? card_module_default.a.cardStacked : '',
          css ? `${css}` : '',
        ]
          .filter((klass) => klass.length)
          .join(' ');
        return Object(jsx_runtime.jsx)('div', { className: classes, children: children });
      };
      try {
        (Card.displayName = 'Card'),
          (Card.__docgenInfo = {
            description: '',
            displayName: 'Card',
            props: {
              css: {
                defaultValue: { value: '' },
                description: '',
                name: 'css',
                required: !1,
                type: { name: 'string' },
              },
              isSkinned: {
                defaultValue: { value: 'true' },
                description: '',
                name: 'isSkinned',
                required: !1,
                type: { name: 'boolean' },
              },
              isAnimated: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isAnimated',
                required: !1,
                type: { name: 'boolean' },
              },
              isStacked: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isStacked',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Card.tsx#Card'] = {
              docgenInfo: Card.__docgenInfo,
              name: 'Card',
              path: 'src/Card.tsx#Card',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = { title: 'AG—React (Beta)/Card', component: Card };
      const All = () =>
        Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [
            Object(jsx_runtime.jsx)(Card, {
              children: Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                  Object(jsx_runtime.jsx)('div', { style: { padding: 24 }, children: 'Default' }),
                  Object(jsx_runtime.jsx)('div', { style: { padding: 24 }, children: 'Card' }),
                ],
              }),
            }),
            Object(jsx_runtime.jsx)(Card, {
              isStacked: !0,
              children: Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                  Object(jsx_runtime.jsx)('div', { style: { padding: 24 }, children: 'Stacked' }),
                  Object(jsx_runtime.jsx)('div', { style: { padding: 24 }, children: 'Card' }),
                ],
              }),
            }),
            Object(jsx_runtime.jsx)(Card, {
              isAnimated: !0,
              isStacked: !0,
              children: Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                  Object(jsx_runtime.jsx)('div', {
                    style: { padding: 24 },
                    children: 'Animated & Stacked',
                  }),
                  Object(jsx_runtime.jsx)('div', { style: { padding: 24 }, children: 'Card' }),
                ],
              }),
            }),
            Object(jsx_runtime.jsx)(Card, {
              isSkinned: !1,
              children: Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                  Object(jsx_runtime.jsx)('div', { style: { padding: 24 }, children: 'Base Card' }),
                  Object(jsx_runtime.jsx)('div', { style: { padding: 24 }, children: 'No Skin' }),
                ],
              }),
            }),
            Object(jsx_runtime.jsx)(Card, {
              css: 'foo-bar',
              children: Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                  Object(jsx_runtime.jsx)('div', {
                    style: { padding: 24 },
                    children: 'Custom CSS Class',
                  }),
                  Object(jsx_runtime.jsx)('div', {
                    style: { padding: 24 },
                    children: 'Inspect to see foo-bar',
                  }),
                ],
              }),
            }),
          ],
        });
      All.parameters = {
        storySource: {
          source:
            '() => (\n  <>\n    <Card>\n      <>\n        <div style={{ padding: 24 }}>Default</div>\n        <div style={{ padding: 24 }}>Card</div>\n      </>\n    </Card>\n    <Card isStacked>\n      <>\n        <div style={{ padding: 24 }}>Stacked</div>\n        <div style={{ padding: 24 }}>Card</div>\n      </>\n    </Card>\n    <Card isAnimated isStacked>\n      <>\n        <div style={{ padding: 24 }}>Animated & Stacked</div>\n        <div style={{ padding: 24 }}>Card</div>\n      </>\n    </Card>\n    <Card isSkinned={false}>\n      <>\n        <div style={{ padding: 24 }}>Base Card</div>\n        <div style={{ padding: 24 }}>No Skin</div>\n      </>\n    </Card>\n    <Card css="foo-bar">\n      <>\n        <div style={{ padding: 24 }}>Custom CSS Class</div>\n        <div style={{ padding: 24 }}>Inspect to see foo-bar</div>\n      </>\n    </Card>\n  </>\n)',
        },
        ...All.parameters,
      };
    },
    './src/stories/ChoiceInput.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'All', function () {
          return All;
        });
      var esm = __webpack_require__('./node_modules/@storybook/addon-actions/dist/esm/index.js'),
        react = __webpack_require__('../node_modules/react/index.js'),
        v4 = __webpack_require__('../node_modules/uuid/dist/esm-browser/v4.js'),
        choice_input_module = __webpack_require__('./src/choice-input.module.css'),
        choice_input_module_default = __webpack_require__.n(choice_input_module),
        jsx_runtime = __webpack_require__('../node_modules/react/jsx-runtime.js');
      const Choice = ({
          id: id,
          name: name,
          value: value,
          disabled: disabled = !1,
          classes: classes = '',
          type: type = 'checkbox',
          checked: checked = !1,
          onChange: onChange,
        }) =>
          Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              Object(jsx_runtime.jsx)('label', {
                className: 'screenreader-only',
                htmlFor: id,
                children: `Choice input ${name}`,
              }),
              Object(jsx_runtime.jsx)('input', {
                id: id,
                className: classes,
                type: type,
                name: name,
                value: value,
                checked: checked,
                onChange: onChange,
                disabled: disabled,
              }),
            ],
          }),
        ChoiceInput = ({
          id: id,
          css: css,
          isInline: isInline = !1,
          legendLabel: legendLabel,
          isFieldset: isFieldset = !0,
          isSkinned: isSkinned = !0,
          isDisabled: isDisabled = !1,
          options: options,
          disabledOptions: disabledOptions = [],
          checkedOptions: checkedOptions = [],
          size: size = '',
          type: type = 'checkbox',
          onChange: onChange,
        }) => {
          const precheckedOptions = Array.from(checkedOptions),
            [checked, setChecked] = Object(react.useState)(precheckedOptions),
            handleChange = (e) => {
              const value = e.currentTarget.value;
              if ('checkbox' === type) {
                let checkedItemsUpdated;
                checked.includes(value)
                  ? ((checkedItemsUpdated = checked.filter((item) => item !== value)),
                    setChecked(checkedItemsUpdated))
                  : ((checkedItemsUpdated = [...checked, value]), setChecked(checkedItemsUpdated)),
                  onChange && onChange(checkedItemsUpdated);
              } else
                checked.includes(value) || (setChecked([value]), onChange && onChange([value]));
            },
            labelClasses = () => {
              let klasses = [
                choice_input_module_default.a[`${type}-label-wrap`],
                isInline ? choice_input_module_default.a[`${type}-label-wrap-inline`] : '',
              ];
              return (klasses = klasses.filter((klass) => klass.length)), klasses.join(' ');
            },
            labelSpanClasses = () => {
              let klasses = [
                choice_input_module_default.a[`${type}-label`],
                size ? choice_input_module_default.a[`${type}-label-${size}`] : '',
              ];
              return (klasses = klasses.filter((klass) => klass.length)), klasses.join(' ');
            },
            inputClasses = () => {
              let inputKlasses = [
                choice_input_module_default.a[`${type}`],
                size ? choice_input_module_default.a[`${type}-${size}`] : '',
                isDisabled ? 'disabled' : '',
              ];
              return (
                (inputKlasses = inputKlasses.filter((klass) => klass.length)),
                inputKlasses.join(' ')
              );
            };
          return Object(jsx_runtime.jsxs)('fieldset', {
            className: (() => {
              const skin = isSkinned ? choice_input_module_default.a[`${type}-group`] : '',
                sizeSkin =
                  isSkinned && 'large' === size
                    ? choice_input_module_default.a[`${type}-group-${size}`]
                    : '';
              let klasses = [
                css || '',
                skin,
                sizeSkin,
                !1 === isFieldset ? choice_input_module_default.a[`${type}-group-hidden`] : '',
              ];
              return (klasses = klasses.filter((klass) => klass.length)), klasses.join(' ');
            })(),
            children: [
              Object(jsx_runtime.jsx)('legend', {
                className: [
                  isSkinned ? choice_input_module_default.a[`${type}-legend`] : '',
                  !1 === isFieldset ? 'screenreader-only' : null,
                ].join(' '),
                children: legendLabel,
              }),
              options.map(({ name: name, value: value, label: label }, i) =>
                Object(jsx_runtime.jsxs)(
                  'label',
                  {
                    htmlFor: `${id}-${name}-${i}`,
                    className: labelClasses(),
                    children: [
                      Object(jsx_runtime.jsx)(Choice, {
                        id: `${id}-${name}-${i}`,
                        classes: inputClasses(),
                        type: type,
                        name: name,
                        value: value,
                        'aria-hidden': 'true',
                        disabled: isDisabled || disabledOptions.includes(value),
                        checked: checked.includes(value),
                        onChange: handleChange,
                      }),
                      Object(jsx_runtime.jsx)('span', {
                        className: labelSpanClasses(),
                        children: label,
                      }),
                    ],
                  },
                  Object(v4.a)()
                )
              ),
            ],
          });
        };
      try {
        (Choice.displayName = 'Choice'),
          (Choice.__docgenInfo = {
            description: '',
            displayName: 'Choice',
            props: {
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              name: {
                defaultValue: null,
                description: '',
                name: 'name',
                required: !0,
                type: { name: 'string' },
              },
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !1,
                type: { name: 'string' },
              },
              disabled: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              classes: {
                defaultValue: { value: '' },
                description: '',
                name: 'classes',
                required: !1,
                type: { name: 'string' },
              },
              type: {
                defaultValue: { value: 'checkbox' },
                description: '',
                name: 'type',
                required: !1,
                type: { name: 'enum', value: [{ value: '"checkbox"' }, { value: '"radio"' }] },
              },
              checked: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'checked',
                required: !1,
                type: { name: 'boolean' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !0,
                type: { name: 'ChangeEventHandler<HTMLInputElement> | undefined' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/ChoiceInput.tsx#Choice'] = {
              docgenInfo: Choice.__docgenInfo,
              name: 'Choice',
              path: 'src/ChoiceInput.tsx#Choice',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (ChoiceInput.displayName = 'ChoiceInput'),
          (ChoiceInput.__docgenInfo = {
            description: '',
            displayName: 'ChoiceInput',
            props: {
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              css: {
                defaultValue: null,
                description: '',
                name: 'css',
                required: !1,
                type: { name: 'string' },
              },
              legendLabel: {
                defaultValue: null,
                description: '',
                name: 'legendLabel',
                required: !0,
                type: { name: 'string' },
              },
              isInline: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isInline',
                required: !1,
                type: { name: 'boolean' },
              },
              isSkinned: {
                defaultValue: { value: 'true' },
                description: '',
                name: 'isSkinned',
                required: !1,
                type: { name: 'boolean' },
              },
              isFieldset: {
                defaultValue: { value: 'true' },
                description: '',
                name: 'isFieldset',
                required: !1,
                type: { name: 'boolean' },
              },
              isDisabled: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isDisabled',
                required: !1,
                type: { name: 'boolean' },
              },
              type: {
                defaultValue: { value: 'checkbox' },
                description: '',
                name: 'type',
                required: !1,
                type: { name: 'enum', value: [{ value: '"checkbox"' }, { value: '"radio"' }] },
              },
              size: {
                defaultValue: { value: '' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '""' }, { value: '"large"' }, { value: '"small"' }],
                },
              },
              options: {
                defaultValue: null,
                description: '',
                name: 'options',
                required: !0,
                type: { name: 'any[]' },
              },
              disabledOptions: {
                defaultValue: { value: '[]' },
                description: '',
                name: 'disabledOptions',
                required: !1,
                type: { name: 'any[]' },
              },
              checkedOptions: {
                defaultValue: { value: '[]' },
                description: '',
                name: 'checkedOptions',
                required: !1,
                type: { name: 'any[]' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !0,
                type: { name: '(checkedItems: any[]) => void' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/ChoiceInput.tsx#ChoiceInput'] = {
              docgenInfo: ChoiceInput.__docgenInfo,
              name: 'ChoiceInput',
              path: 'src/ChoiceInput.tsx#ChoiceInput',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const actionsData = { change: Object(esm.action)('change') };
      __webpack_exports__.default = {
        title: 'AG—React (Beta)/ChoiceInput',
        component: ChoiceInput,
        on: { ...actionsData },
      };
      const reusableOptions = [
          { name: 'frequency', value: 'daily', label: 'Daily' },
          { name: 'frequency', value: 'weekly', label: 'Weekly' },
          { name: 'frequency', value: 'monthly', label: 'Monthly' },
        ],
        ChoiceInput_stories_disabledOptions = ['weekly', 'monthly'],
        All = () =>
          Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              Object(jsx_runtime.jsx)(ChoiceInput, {
                id: '1',
                type: 'checkbox',
                options: reusableOptions,
                legendLabel: 'Checkbox legend',
                onChange: Object(esm.action)('change'),
              }),
              Object(jsx_runtime.jsx)(ChoiceInput, {
                id: '2',
                isDisabled: !0,
                type: 'checkbox',
                options: reusableOptions,
                legendLabel: 'Checkbox disabled',
                onChange: Object(esm.action)('change'),
              }),
              Object(jsx_runtime.jsx)(ChoiceInput, {
                id: '3',
                disabledOptions: ChoiceInput_stories_disabledOptions,
                type: 'checkbox',
                options: reusableOptions,
                legendLabel: 'Checkbox specific options disabled',
                onChange: Object(esm.action)('change'),
              }),
              Object(jsx_runtime.jsx)(ChoiceInput, {
                id: '4',
                type: 'checkbox',
                isFieldset: !1,
                options: reusableOptions,
                legendLabel: 'Checkbox fieldset hidden',
                onChange: Object(esm.action)('change'),
              }),
              Object(jsx_runtime.jsx)(ChoiceInput, {
                id: '5',
                type: 'checkbox',
                isInline: !0,
                options: reusableOptions,
                legendLabel: 'Checkbox inline',
                onChange: Object(esm.action)('change'),
              }),
              Object(jsx_runtime.jsx)(ChoiceInput, {
                id: '6',
                type: 'checkbox',
                isInline: !0,
                size: 'small',
                options: reusableOptions,
                legendLabel: 'Checkbox small',
                onChange: Object(esm.action)('change'),
              }),
              Object(jsx_runtime.jsx)(ChoiceInput, {
                id: '7',
                type: 'checkbox',
                isInline: !0,
                size: 'large',
                options: reusableOptions,
                legendLabel: 'Checkbox large',
                onChange: Object(esm.action)('change'),
              }),
              Object(jsx_runtime.jsx)(ChoiceInput, {
                id: '8',
                type: 'checkbox',
                isInline: !0,
                size: 'large',
                checkedOptions: ['daily', 'weekly'],
                options: reusableOptions,
                legendLabel: 'Checkbox prechecked options',
                onChange: Object(esm.action)('change'),
              }),
              Object(jsx_runtime.jsx)(ChoiceInput, {
                id: '8b',
                isInline: !0,
                isSkinned: !1,
                options: reusableOptions,
                legendLabel: 'Checkbox unskinned (fieldset and legend unstyled)',
                onChange: Object(esm.action)('change'),
              }),
              Object(jsx_runtime.jsx)(ChoiceInput, {
                id: '9',
                type: 'radio',
                options: reusableOptions,
                legendLabel: 'Radio legend',
                onChange: Object(esm.action)('change'),
              }),
              Object(jsx_runtime.jsx)(ChoiceInput, {
                id: '10',
                isDisabled: !0,
                type: 'radio',
                options: reusableOptions,
                legendLabel: 'Radio disabled',
                onChange: Object(esm.action)('change'),
              }),
              Object(jsx_runtime.jsx)(ChoiceInput, {
                id: '11',
                disabledOptions: ['two'],
                type: 'radio',
                options: [
                  { name: 'numbers', value: 'one', label: 'one' },
                  { name: 'numbers', value: 'two', label: 'two' },
                  { name: 'numbers', value: 'three', label: 'three' },
                ],
                legendLabel: 'Radio specific options disabled',
                onChange: Object(esm.action)('change'),
              }),
              Object(jsx_runtime.jsx)(ChoiceInput, {
                id: '12',
                type: 'radio',
                isFieldset: !1,
                options: [
                  { name: 'es', value: 'uno', label: 'uno' },
                  { name: 'es', value: 'dos', label: 'dos' },
                  { name: 'es', value: 'tres', label: 'tres' },
                ],
                legendLabel: 'Radio fieldset hidden',
                onChange: Object(esm.action)('change'),
              }),
              Object(jsx_runtime.jsx)(ChoiceInput, {
                id: '13',
                type: 'radio',
                isInline: !0,
                options: [
                  { name: 'colors', value: 'blue', label: 'Blue' },
                  { name: 'colors', value: 'red', label: 'Red' },
                  { name: 'colors', value: 'silver', label: 'Silver' },
                ],
                legendLabel: 'Radio inline',
                onChange: Object(esm.action)('change'),
              }),
              Object(jsx_runtime.jsx)(ChoiceInput, {
                id: '14',
                type: 'radio',
                isInline: !0,
                size: 'small',
                options: [
                  { name: 'shape', value: 'square', label: 'Square' },
                  { name: 'shape', value: 'circle', label: 'Circle' },
                ],
                legendLabel: 'Radio small',
                onChange: Object(esm.action)('change'),
              }),
              Object(jsx_runtime.jsx)(ChoiceInput, {
                id: '15',
                type: 'radio',
                isInline: !0,
                size: 'large',
                options: [
                  { name: 'bands', value: 'bonjovi', label: 'Bon Jovi' },
                  { name: 'bands', value: 'stones', label: 'Rolling Stones' },
                  { name: 'bands', value: 'isleybros', label: 'Isley Brothers' },
                ],
                legendLabel: 'Radio large',
                onChange: Object(esm.action)('change'),
              }),
              Object(jsx_runtime.jsx)(ChoiceInput, {
                id: '16',
                type: 'radio',
                isInline: !0,
                size: 'large',
                checkedOptions: ['charlie'],
                options: [
                  { name: 'solo', value: 'stevie', label: 'Stevie Wonder' },
                  { name: 'solo', value: 'charlie', label: 'Charlie Wilson' },
                  { name: 'solo', value: 'whitney', label: 'Whitney Houston' },
                ],
                legendLabel: 'Radio prechecked option',
                onChange: Object(esm.action)('change'),
              }),
              Object(jsx_runtime.jsx)(ChoiceInput, {
                id: '17',
                type: 'radio',
                isInline: !0,
                isSkinned: !1,
                options: [
                  { name: 'solo', value: 'stevie', label: 'Stevie Wonder' },
                  { name: 'solo', value: 'charlie', label: 'Charlie Wilson' },
                  { name: 'solo', value: 'whitney', label: 'Whitney Houston' },
                ],
                legendLabel: 'Radio unskinned (fieldset and legend unstyled)',
                onChange: Object(esm.action)('change'),
              }),
            ],
          });
      All.parameters = {
        storySource: {
          source:
            "() => (\n  <>\n    <ChoiceInput\n      id=\"1\"\n      type=\"checkbox\"\n      options={reusableOptions}\n      legendLabel=\"Checkbox legend\"\n      onChange={action('change')}\n    />\n    <ChoiceInput\n      id=\"2\"\n      isDisabled\n      type=\"checkbox\"\n      options={reusableOptions}\n      legendLabel=\"Checkbox disabled\"\n      onChange={action('change')}\n    />\n    <ChoiceInput\n      id=\"3\"\n      disabledOptions={disabledOptions}\n      type=\"checkbox\"\n      options={reusableOptions}\n      legendLabel=\"Checkbox specific options disabled\"\n      onChange={action('change')}\n    />\n    <ChoiceInput\n      id=\"4\"\n      type=\"checkbox\"\n      isFieldset={false}\n      options={reusableOptions}\n      legendLabel=\"Checkbox fieldset hidden\"\n      onChange={action('change')}\n    />\n    <ChoiceInput\n      id=\"5\"\n      type=\"checkbox\"\n      isInline\n      options={reusableOptions}\n      legendLabel=\"Checkbox inline\"\n      onChange={action('change')}\n    />\n    <ChoiceInput\n      id=\"6\"\n      type=\"checkbox\"\n      isInline\n      size=\"small\"\n      options={reusableOptions}\n      legendLabel=\"Checkbox small\"\n      onChange={action('change')}\n    />\n    <ChoiceInput\n      id=\"7\"\n      type=\"checkbox\"\n      isInline\n      size=\"large\"\n      options={reusableOptions}\n      legendLabel=\"Checkbox large\"\n      onChange={action('change')}\n    />\n    <ChoiceInput\n      id=\"8\"\n      type=\"checkbox\"\n      isInline\n      size=\"large\"\n      checkedOptions={['daily', 'weekly']}\n      options={reusableOptions}\n      legendLabel=\"Checkbox prechecked options\"\n      onChange={action('change')}\n    />\n    <ChoiceInput\n      id=\"8b\"\n      isInline\n      isSkinned={false}\n      options={reusableOptions}\n      legendLabel=\"Checkbox unskinned (fieldset and legend unstyled)\"\n      onChange={action('change')}\n    />\n    <ChoiceInput\n      id=\"9\"\n      type=\"radio\"\n      options={reusableOptions}\n      legendLabel=\"Radio legend\"\n      onChange={action('change')}\n    />\n    <ChoiceInput\n      id=\"10\"\n      isDisabled\n      type=\"radio\"\n      options={reusableOptions}\n      legendLabel=\"Radio disabled\"\n      onChange={action('change')}\n    />\n    <ChoiceInput\n      id=\"11\"\n      disabledOptions={['two']}\n      type=\"radio\"\n      options={[\n        {\n          name: 'numbers',\n          value: 'one',\n          label: 'one',\n        },\n        {\n          name: 'numbers',\n          value: 'two',\n          label: 'two',\n        },\n        {\n          name: 'numbers',\n          value: 'three',\n          label: 'three',\n        },\n      ]}\n      legendLabel=\"Radio specific options disabled\"\n      onChange={action('change')}\n    />\n    <ChoiceInput\n      id=\"12\"\n      type=\"radio\"\n      isFieldset={false}\n      options={[\n        {\n          name: 'es',\n          value: 'uno',\n          label: 'uno',\n        },\n        {\n          name: 'es',\n          value: 'dos',\n          label: 'dos',\n        },\n        {\n          name: 'es',\n          value: 'tres',\n          label: 'tres',\n        },\n      ]}\n      legendLabel=\"Radio fieldset hidden\"\n      onChange={action('change')}\n    />\n    <ChoiceInput\n      id=\"13\"\n      type=\"radio\"\n      isInline\n      options={[\n        {\n          name: 'colors',\n          value: 'blue',\n          label: 'Blue',\n        },\n        {\n          name: 'colors',\n          value: 'red',\n          label: 'Red',\n        },\n        {\n          name: 'colors',\n          value: 'silver',\n          label: 'Silver',\n        },\n      ]}\n      legendLabel=\"Radio inline\"\n      onChange={action('change')}\n    />\n    <ChoiceInput\n      id=\"14\"\n      type=\"radio\"\n      isInline\n      size=\"small\"\n      options={[\n        {\n          name: 'shape',\n          value: 'square',\n          label: 'Square',\n        },\n        {\n          name: 'shape',\n          value: 'circle',\n          label: 'Circle',\n        },\n      ]}\n      legendLabel=\"Radio small\"\n      onChange={action('change')}\n    />\n    <ChoiceInput\n      id=\"15\"\n      type=\"radio\"\n      isInline\n      size=\"large\"\n      options={[\n        {\n          name: 'bands',\n          value: 'bonjovi',\n          label: 'Bon Jovi',\n        },\n        {\n          name: 'bands',\n          value: 'stones',\n          label: 'Rolling Stones',\n        },\n        {\n          name: 'bands',\n          value: 'isleybros',\n          label: 'Isley Brothers',\n        },\n      ]}\n      legendLabel=\"Radio large\"\n      onChange={action('change')}\n    />\n    <ChoiceInput\n      id=\"16\"\n      type=\"radio\"\n      isInline\n      size=\"large\"\n      checkedOptions={['charlie']}\n      options={[\n        {\n          name: 'solo',\n          value: 'stevie',\n          label: 'Stevie Wonder',\n        },\n        {\n          name: 'solo',\n          value: 'charlie',\n          label: 'Charlie Wilson',\n        },\n        {\n          name: 'solo',\n          value: 'whitney',\n          label: 'Whitney Houston',\n        },\n      ]}\n      legendLabel=\"Radio prechecked option\"\n      onChange={action('change')}\n    />\n    <ChoiceInput\n      id=\"17\"\n      type=\"radio\"\n      isInline\n      isSkinned={false}\n      options={[\n        {\n          name: 'solo',\n          value: 'stevie',\n          label: 'Stevie Wonder',\n        },\n        {\n          name: 'solo',\n          value: 'charlie',\n          label: 'Charlie Wilson',\n        },\n        {\n          name: 'solo',\n          value: 'whitney',\n          label: 'Whitney Houston',\n        },\n      ]}\n      legendLabel=\"Radio unskinned (fieldset and legend unstyled)\"\n      onChange={action('change')}\n    />\n  </>\n)",
        },
        ...All.parameters,
      };
    },
    './src/stories/Header.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'HeaderAndNav', function () {
          return HeaderAndNav;
        }),
        __webpack_require__.d(__webpack_exports__, 'HeaderUnskinned', function () {
          return HeaderUnskinned;
        }),
        __webpack_require__.d(__webpack_exports__, 'HeaderSticky', function () {
          return HeaderSticky;
        });
      var header_module = __webpack_require__('./src/header.module.css'),
        header_module_default = __webpack_require__.n(header_module),
        jsx_runtime = __webpack_require__('../node_modules/react/jsx-runtime.js');
      const HeaderNav = ({ css: css = '', children: children }) => {
          const classes = [header_module_default.a.headerNav, css ? `${css}` : '']
            .filter((klass) => klass.length)
            .join(' ');
          return Object(jsx_runtime.jsx)('nav', {
            children: Object(jsx_runtime.jsx)('ul', { className: classes, children: children }),
          });
        },
        HeaderNavItem = ({ css: css = '', children: children }) => {
          const classes = [header_module_default.a.headerNavItem, css ? `${css}` : '']
            .filter((klass) => klass.length)
            .join(' ');
          return Object(jsx_runtime.jsx)('li', { className: classes, children: children });
        },
        Header = ({
          css: css = '',
          isSticky: isSticky = !1,
          isSkinned: isSkinned = !0,
          children: children,
        }) => {
          const classes = [
            isSkinned ? header_module_default.a.header : header_module_default.a.headerBase,
            isSticky ? header_module_default.a.sticky : '',
            css ? `${css}` : '',
          ]
            .filter((klass) => klass.length)
            .join(' ');
          return Object(jsx_runtime.jsx)('header', {
            className: classes,
            children: Object(jsx_runtime.jsx)('div', {
              className: header_module_default.a.headerContent,
              children: children,
            }),
          });
        };
      try {
        (HeaderNav.displayName = 'HeaderNav'),
          (HeaderNav.__docgenInfo = {
            description: '',
            displayName: 'HeaderNav',
            props: {
              css: {
                defaultValue: { value: '' },
                description: '',
                name: 'css',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Header.tsx#HeaderNav'] = {
              docgenInfo: HeaderNav.__docgenInfo,
              name: 'HeaderNav',
              path: 'src/Header.tsx#HeaderNav',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (HeaderNavItem.displayName = 'HeaderNavItem'),
          (HeaderNavItem.__docgenInfo = {
            description: '',
            displayName: 'HeaderNavItem',
            props: {
              css: {
                defaultValue: { value: '' },
                description: '',
                name: 'css',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Header.tsx#HeaderNavItem'] = {
              docgenInfo: HeaderNavItem.__docgenInfo,
              name: 'HeaderNavItem',
              path: 'src/Header.tsx#HeaderNavItem',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Header.displayName = 'Header'),
          (Header.__docgenInfo = {
            description: '',
            displayName: 'Header',
            props: {
              isSticky: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isSticky',
                required: !1,
                type: { name: 'boolean' },
              },
              isSkinned: {
                defaultValue: { value: 'true' },
                description: '',
                name: 'isSkinned',
                required: !1,
                type: { name: 'boolean' },
              },
              css: {
                defaultValue: { value: '' },
                description: '',
                name: 'css',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Header.tsx#Header'] = {
              docgenInfo: Header.__docgenInfo,
              name: 'Header',
              path: 'src/Header.tsx#Header',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = { title: 'AG—React (Beta)/Header', component: Header };
      const HeaderAndNav = () =>
          Object(jsx_runtime.jsxs)(Header, {
            css: 'custom-global-css-class',
            children: [
              Object(jsx_runtime.jsx)('div', { style: { padding: 8 }, children: 'LOGO' }),
              Object(jsx_runtime.jsxs)(HeaderNav, {
                children: [
                  Object(jsx_runtime.jsx)(HeaderNavItem, {
                    children: Object(jsx_runtime.jsx)('a', {
                      style: { color: '#333333', textDecoration: 'none' },
                      href: 'www.google.com',
                      children: 'Home',
                    }),
                  }),
                  Object(jsx_runtime.jsx)(HeaderNavItem, {
                    children: Object(jsx_runtime.jsx)('a', {
                      style: { color: '#333333', textDecoration: 'none' },
                      href: 'www.yahoo.com',
                      children: 'Services',
                    }),
                  }),
                  Object(jsx_runtime.jsx)(HeaderNavItem, {
                    children: Object(jsx_runtime.jsx)('a', {
                      style: { color: '#333333', textDecoration: 'none' },
                      href: 'www.aol.com',
                      children: 'About',
                    }),
                  }),
                  Object(jsx_runtime.jsx)(HeaderNavItem, {
                    children: Object(jsx_runtime.jsx)('a', {
                      style: { color: '#333333', textDecoration: 'none' },
                      href: 'www.bing.com',
                      children: 'Contact',
                    }),
                  }),
                ],
              }),
            ],
          }),
        HeaderUnskinned = () =>
          Object(jsx_runtime.jsx)(Header, {
            isSkinned: !0,
            children: Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                Object(jsx_runtime.jsx)('div', { style: { padding: 8 }, children: 'NO-Skinz' }),
                Object(jsx_runtime.jsx)(HeaderNav, {
                  children: Object(jsx_runtime.jsx)(HeaderNavItem, {
                    children: Object(jsx_runtime.jsx)('a', {
                      style: { color: '#333333', textDecoration: 'none' },
                      href: 'www.google.com',
                      children: 'Not Skinned',
                    }),
                  }),
                }),
              ],
            }),
          }),
        HeaderSticky = () =>
          Object(jsx_runtime.jsx)(Header, {
            isSticky: !0,
            children: Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                Object(jsx_runtime.jsx)('div', { style: { padding: 8 }, children: 'Logo' }),
                Object(jsx_runtime.jsx)(HeaderNav, {
                  children: Object(jsx_runtime.jsx)(HeaderNavItem, {
                    children: Object(jsx_runtime.jsx)('a', {
                      style: { color: '#333333', textDecoration: 'none' },
                      href: 'www.google.com',
                      children: 'Sticky',
                    }),
                  }),
                }),
              ],
            }),
          });
      (HeaderAndNav.parameters = {
        storySource: {
          source:
            "() => (\n  <Header css=\"custom-global-css-class\">\n    <div style={{ padding: 8 }}>LOGO</div>\n    <HeaderNav>\n      <HeaderNavItem>\n        <a style={{ color: '#333333', textDecoration: 'none' }} href=\"www.google.com\">\n          Home\n        </a>\n      </HeaderNavItem>\n      <HeaderNavItem>\n        <a style={{ color: '#333333', textDecoration: 'none' }} href=\"www.yahoo.com\">\n          Services\n        </a>\n      </HeaderNavItem>\n      <HeaderNavItem>\n        <a style={{ color: '#333333', textDecoration: 'none' }} href=\"www.aol.com\">\n          About\n        </a>\n      </HeaderNavItem>\n      <HeaderNavItem>\n        <a style={{ color: '#333333', textDecoration: 'none' }} href=\"www.bing.com\">\n          Contact\n        </a>\n      </HeaderNavItem>\n    </HeaderNav>\n  </Header>\n)",
        },
        ...HeaderAndNav.parameters,
      }),
        (HeaderUnskinned.parameters = {
          storySource: {
            source:
              "() => (\n  <Header isSkinned>\n    <>\n      <div style={{ padding: 8 }}>NO-Skinz</div>\n      <HeaderNav>\n        <HeaderNavItem>\n          <a style={{ color: '#333333', textDecoration: 'none' }} href=\"www.google.com\">\n            Not Skinned\n          </a>\n        </HeaderNavItem>\n      </HeaderNav>\n    </>\n  </Header>\n)",
          },
          ...HeaderUnskinned.parameters,
        }),
        (HeaderSticky.parameters = {
          storySource: {
            source:
              "() => (\n  <Header isSticky>\n    <>\n      <div style={{ padding: 8 }}>Logo</div>\n      <HeaderNav>\n        <HeaderNavItem>\n          <a style={{ color: '#333333', textDecoration: 'none' }} href=\"www.google.com\">\n            Sticky\n          </a>\n        </HeaderNavItem>\n      </HeaderNav>\n    </>\n  </Header>\n)",
          },
          ...HeaderSticky.parameters,
        });
    },
    './src/stories/Input.stories.tsx': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'AllInputs', function () {
          return AllInputs;
        }),
        __webpack_require__.d(__webpack_exports__, 'Textareas', function () {
          return Textareas;
        }),
        __webpack_require__.d(__webpack_exports__, 'ErrorAndHelpText', function () {
          return ErrorAndHelpText;
        });
      var esm = __webpack_require__('./node_modules/@storybook/addon-actions/dist/esm/index.js'),
        v4 = __webpack_require__('../node_modules/uuid/dist/esm-browser/v4.js'),
        input_module = __webpack_require__('./src/input.module.css'),
        input_module_default = __webpack_require__.n(input_module),
        jsx_runtime = __webpack_require__('../node_modules/react/jsx-runtime.js');
      const Input = ({
        id: id,
        label: label,
        size: size = '',
        labelCss: labelCss = '',
        placeholder: placeholder = '',
        helpText: helpText = '',
        invalidText: invalidText = '',
        addOnLeft: addOnLeft = '',
        addOnRight: addOnRight = '',
        hasLeftAddon: hasLeftAddon = !1,
        hasRightAddon: hasRightAddon = !1,
        css: css = '',
        isInvalid: isInvalid = !1,
        isRounded: isRounded = !1,
        isDisabled: isDisabled = !1,
        isInline: isInline = !1,
        isSkinned: isSkinned = !0,
        isUnderlined: isUnderlined = !1,
        isUnderlinedWithBackground: isUnderlinedWithBackground = !1,
        defaultValue: defaultValue = '',
        type: type = 'text',
        onChange: onChange,
        onFocus: onFocus,
        onBlur: onBlur,
        rows: rows,
        cols: cols,
        ...rest
      }) => {
        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1),
          inputClassesJoined = [
            isSkinned ? input_module_default.a.input : input_module_default.a.inputBase,
            isRounded ? input_module_default.a.rounded : '',
            isUnderlined ? input_module_default.a.underlined : '',
            isDisabled ? input_module_default.a.disabled : '',
            isInline ? input_module_default.a.inputInline : '',
            hasLeftAddon ? input_module_default.a.inputHasLeftAddon : '',
            hasRightAddon ? input_module_default.a.inputHasRightAddon : '',
            isInvalid ? input_module_default.a.invalid : '',
            isUnderlinedWithBackground ? input_module_default.a.underlinedWithBackground : '',
            css ? `${css}` : '',
            size ? input_module_default.a[`input${capitalize(size)}`] : '',
          ]
            .filter((klass) => (klass ? klass.length : null))
            .join(' '),
          labelClassesJoined = [
            input_module_default.a.label,
            isInvalid ? input_module_default.a.labelError : '',
            isInline ? input_module_default.a.labelInline : '',
            size ? input_module_default.a[`label${capitalize(size)}`] : '',
            labelCss,
          ]
            .filter((klass) => klass.length)
            .join(' '),
          invalidClasses = size
            ? input_module_default.a[`fieldError${capitalize(size)}`]
            : input_module_default.a.fieldError,
          helpClasses = size
            ? input_module_default.a[`fieldHelp${capitalize(size)}`]
            : input_module_default.a.fieldHelp,
          addonContainerClasses = input_module_default.a.inputAddonContainer,
          renderInput = () =>
            Object(jsx_runtime.jsx)('input', {
              id: id,
              name: id,
              defaultValue: defaultValue,
              type: type,
              disabled: isDisabled,
              className: inputClassesJoined,
              placeholder: placeholder,
              onChange: onChange,
              onFocus: onFocus,
              onBlur: onBlur,
              ...rest,
            });
        return Object(jsx_runtime.jsxs)('div', {
          className: 'width-full',
          children: [
            Object(jsx_runtime.jsx)('label', {
              className: labelClassesJoined,
              htmlFor: id,
              children: label,
            }),
            'textarea' === type
              ? Object(jsx_runtime.jsx)('textarea', {
                  id: id,
                  name: id,
                  placeholder: placeholder,
                  defaultValue: defaultValue,
                  className: inputClassesJoined,
                  disabled: isDisabled,
                  onChange: onChange,
                  onFocus: onFocus,
                  onBlur: onBlur,
                  rows: rows,
                  cols: cols,
                })
              : hasLeftAddon || hasRightAddon
              ? Object(jsx_runtime.jsxs)('div', {
                  className: addonContainerClasses,
                  children: [
                    addOnLeft &&
                      Object(jsx_runtime.jsx)('div', {
                        className: input_module_default.a.leftAddon,
                        children: addOnLeft,
                      }),
                    renderInput(),
                    addOnRight &&
                      Object(jsx_runtime.jsx)('div', {
                        className: input_module_default.a.rightAddon,
                        children: addOnRight,
                      }),
                  ],
                })
              : renderInput(),
            isInvalid &&
              Object(jsx_runtime.jsx)('span', {
                role: 'status',
                'aria-live': 'polite',
                className: invalidClasses,
                children: invalidText,
              }),
            helpText &&
              Object(jsx_runtime.jsx)('span', { className: helpClasses, children: helpText }),
          ],
        });
      };
      try {
        (Input.displayName = 'Input'),
          (Input.__docgenInfo = {
            description: '',
            displayName: 'Input',
            props: {
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !0,
                type: { name: 'string' },
              },
              size: {
                defaultValue: { value: '' },
                description: '',
                name: 'size',
                required: !1,
                type: { name: 'enum', value: [{ value: '"large"' }, { value: '"small"' }] },
              },
              labelCss: {
                defaultValue: { value: '' },
                description: '',
                name: 'labelCss',
                required: !1,
                type: { name: 'string' },
              },
              placeholder: {
                defaultValue: { value: '' },
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
              helpText: {
                defaultValue: { value: '' },
                description: '',
                name: 'helpText',
                required: !1,
                type: { name: 'string' },
              },
              invalidText: {
                defaultValue: { value: '' },
                description: '',
                name: 'invalidText',
                required: !1,
                type: { name: 'string' },
              },
              addOnLeft: {
                defaultValue: { value: '' },
                description: '',
                name: 'addOnLeft',
                required: !1,
                type: { name: 'ReactNode' },
              },
              addOnRight: {
                defaultValue: { value: '' },
                description: '',
                name: 'addOnRight',
                required: !1,
                type: { name: 'ReactNode' },
              },
              hasLeftAddon: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'hasLeftAddon',
                required: !1,
                type: { name: 'boolean' },
              },
              hasRightAddon: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'hasRightAddon',
                required: !1,
                type: { name: 'boolean' },
              },
              css: {
                defaultValue: { value: '' },
                description: '',
                name: 'css',
                required: !1,
                type: { name: 'string' },
              },
              isInvalid: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isInvalid',
                required: !1,
                type: { name: 'boolean' },
              },
              isRounded: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isRounded',
                required: !1,
                type: { name: 'boolean' },
              },
              isDisabled: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isDisabled',
                required: !1,
                type: { name: 'boolean' },
              },
              isInline: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isInline',
                required: !1,
                type: { name: 'boolean' },
              },
              isSkinned: {
                defaultValue: { value: 'true' },
                description: '',
                name: 'isSkinned',
                required: !1,
                type: { name: 'boolean' },
              },
              isUnderlined: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isUnderlined',
                required: !1,
                type: { name: 'boolean' },
              },
              isUnderlinedWithBackground: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isUnderlinedWithBackground',
                required: !1,
                type: { name: 'boolean' },
              },
              defaultValue: {
                defaultValue: { value: '' },
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string' },
              },
              type: {
                defaultValue: { value: 'text' },
                description: '',
                name: 'type',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '"number"' },
                    { value: '"search"' },
                    { value: '"text"' },
                    { value: '"tel"' },
                    { value: '"url"' },
                    { value: '"email"' },
                    { value: '"password"' },
                    { value: '"textarea"' },
                  ],
                },
              },
              rows: {
                defaultValue: null,
                description: '',
                name: 'rows',
                required: !1,
                type: { name: 'number' },
              },
              cols: {
                defaultValue: null,
                description: '',
                name: 'cols',
                required: !1,
                type: { name: 'number' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Input.tsx#Input'] = {
              docgenInfo: Input.__docgenInfo,
              name: 'Input',
              path: 'src/Input.tsx#Input',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const actionsData = {
        blur: Object(esm.action)('blur'),
        change: Object(esm.action)('change'),
        focus: Object(esm.action)('focus'),
      };
      __webpack_exports__.default = {
        title: 'AG—React (Beta)/Input',
        component: Input,
        on: { ...actionsData },
      };
      const AllInputs = () =>
          Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              Object(jsx_runtime.jsx)(Input, {
                id: `myid-${Object(v4.a)()}`,
                label: 'Default input',
                onChange: Object(esm.action)('change'),
                onFocus: Object(esm.action)('focus'),
                onBlur: Object(esm.action)('blur'),
              }),
              Object(jsx_runtime.jsx)(Input, {
                id: `myid-${Object(v4.a)()}`,
                label: 'Inline input',
                isInline: !0,
                onChange: Object(esm.action)('change'),
                onFocus: Object(esm.action)('focus'),
                onBlur: Object(esm.action)('blur'),
              }),
              Object(jsx_runtime.jsx)(Input, {
                id: `myid-${Object(v4.a)()}`,
                label: 'Rounded input',
                isRounded: !0,
                onChange: Object(esm.action)('change'),
                onFocus: Object(esm.action)('focus'),
                onBlur: Object(esm.action)('blur'),
              }),
              Object(jsx_runtime.jsx)(Input, {
                id: `myid-${Object(v4.a)()}`,
                label: 'Underlined input',
                isUnderlined: !0,
                onChange: Object(esm.action)('change'),
                onFocus: Object(esm.action)('focus'),
                onBlur: Object(esm.action)('blur'),
              }),
              Object(jsx_runtime.jsx)(Input, {
                id: `myid-${Object(v4.a)()}`,
                label: 'Underlined with background input',
                isUnderlined: !0,
                isUnderlinedWithBackground: !0,
                onChange: Object(esm.action)('change'),
                onFocus: Object(esm.action)('focus'),
                onBlur: Object(esm.action)('blur'),
              }),
              Object(jsx_runtime.jsx)(Input, {
                id: `myid-${Object(v4.a)()}`,
                label: 'Large input',
                size: 'large',
                onChange: Object(esm.action)('change'),
                onFocus: Object(esm.action)('focus'),
                onBlur: Object(esm.action)('blur'),
              }),
              Object(jsx_runtime.jsx)(Input, {
                id: `myid-${Object(v4.a)()}`,
                label: 'Small input',
                size: 'small',
                onChange: Object(esm.action)('change'),
                onFocus: Object(esm.action)('focus'),
                onBlur: Object(esm.action)('blur'),
              }),
              Object(jsx_runtime.jsx)(Input, {
                id: `myid-${Object(v4.a)()}`,
                label: 'Disabled',
                isDisabled: !0,
              }),
              Object(jsx_runtime.jsx)(Input, {
                id: `myid-${Object(v4.a)()}`,
                hasLeftAddon: !0,
                addOnLeft: Object(jsx_runtime.jsx)('div', {
                  children: Object(jsx_runtime.jsx)('span', { children: 'L' }),
                }),
                hasRightAddon: !0,
                addOnRight: Object(jsx_runtime.jsx)('div', {
                  children: Object(jsx_runtime.jsx)('span', { children: 'R' }),
                }),
                label: 'Input with addons',
              }),
            ],
          }),
        Textareas = () =>
          Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              Object(jsx_runtime.jsx)(Input, {
                id: `myid-${Object(v4.a)()}`,
                label: 'Textarea',
                type: 'textarea',
                onChange: Object(esm.action)('change'),
                onFocus: Object(esm.action)('focus'),
                onBlur: Object(esm.action)('blur'),
              }),
              Object(jsx_runtime.jsx)(Input, {
                id: `myid-${Object(v4.a)()}`,
                label: 'Textarea small',
                type: 'textarea',
                size: 'small',
                rows: 10,
                cols: 5,
                onChange: Object(esm.action)('change'),
                onFocus: Object(esm.action)('focus'),
                onBlur: Object(esm.action)('blur'),
              }),
              Object(jsx_runtime.jsx)(Input, {
                id: `myid-${Object(v4.a)()}`,
                label: 'Textarea large',
                type: 'textarea',
                size: 'large',
                onChange: Object(esm.action)('change'),
                onFocus: Object(esm.action)('focus'),
                onBlur: Object(esm.action)('blur'),
                cols: 5,
                rows: 10,
              }),
            ],
          }),
        ErrorAndHelpText = () =>
          Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              Object(jsx_runtime.jsx)(Input, {
                id: `myid-${Object(v4.a)()}`,
                label: 'Help text input',
                helpText: 'Some useful help text.',
              }),
              Object(jsx_runtime.jsx)(Input, {
                id: `myid-${Object(v4.a)()}`,
                label: 'Invalid input',
                invalidText: 'This field has errors.',
                isInvalid: !0,
              }),
              Object(jsx_runtime.jsx)(Input, {
                size: 'small',
                id: `myid-${Object(v4.a)()}`,
                label: 'Invalid small input',
                invalidText: 'This field has errors.',
                isInvalid: !0,
              }),
              Object(jsx_runtime.jsx)(Input, {
                size: 'large',
                id: `myid-${Object(v4.a)()}`,
                label: 'Invalid large input',
                invalidText: 'This field has errors.',
                isInvalid: !0,
              }),
            ],
          });
      (AllInputs.parameters = {
        storySource: {
          source:
            "() => (\n  <>\n    <Input\n      id={`myid-${uuidv4()}`}\n      label=\"Default input\"\n      onChange={action('change')}\n      onFocus={action('focus')}\n      onBlur={action('blur')}\n    />\n    <Input\n      id={`myid-${uuidv4()}`}\n      label=\"Inline input\"\n      isInline\n      onChange={action('change')}\n      onFocus={action('focus')}\n      onBlur={action('blur')}\n    />\n    <Input\n      id={`myid-${uuidv4()}`}\n      label=\"Rounded input\"\n      isRounded\n      onChange={action('change')}\n      onFocus={action('focus')}\n      onBlur={action('blur')}\n    />\n    <Input\n      id={`myid-${uuidv4()}`}\n      label=\"Underlined input\"\n      isUnderlined\n      onChange={action('change')}\n      onFocus={action('focus')}\n      onBlur={action('blur')}\n    />\n    <Input\n      id={`myid-${uuidv4()}`}\n      label=\"Underlined with background input\"\n      isUnderlined\n      isUnderlinedWithBackground\n      onChange={action('change')}\n      onFocus={action('focus')}\n      onBlur={action('blur')}\n    />\n    <Input\n      id={`myid-${uuidv4()}`}\n      label=\"Large input\"\n      size=\"large\"\n      onChange={action('change')}\n      onFocus={action('focus')}\n      onBlur={action('blur')}\n    />\n    <Input\n      id={`myid-${uuidv4()}`}\n      label=\"Small input\"\n      size=\"small\"\n      onChange={action('change')}\n      onFocus={action('focus')}\n      onBlur={action('blur')}\n    />\n    <Input id={`myid-${uuidv4()}`} label=\"Disabled\" isDisabled />\n    <Input\n      id={`myid-${uuidv4()}`}\n      hasLeftAddon\n      addOnLeft={\n        <div>\n          <span>L</span>\n        </div>\n      }\n      hasRightAddon\n      addOnRight={\n        <div>\n          <span>R</span>\n        </div>\n      }\n      label=\"Input with addons\"\n    />\n  </>\n)",
        },
        ...AllInputs.parameters,
      }),
        (Textareas.parameters = {
          storySource: {
            source:
              "() => (\n  <>\n    <Input\n      id={`myid-${uuidv4()}`}\n      label=\"Textarea\"\n      type=\"textarea\"\n      onChange={action('change')}\n      onFocus={action('focus')}\n      onBlur={action('blur')}\n    />\n    <Input\n      id={`myid-${uuidv4()}`}\n      label=\"Textarea small\"\n      type=\"textarea\"\n      size=\"small\"\n      rows={10}\n      cols={5}\n      onChange={action('change')}\n      onFocus={action('focus')}\n      onBlur={action('blur')}\n    />\n    <Input\n      id={`myid-${uuidv4()}`}\n      label=\"Textarea large\"\n      type=\"textarea\"\n      size=\"large\"\n      onChange={action('change')}\n      onFocus={action('focus')}\n      onBlur={action('blur')}\n      cols={5}\n      rows={10}\n    />\n  </>\n)",
          },
          ...Textareas.parameters,
        }),
        (ErrorAndHelpText.parameters = {
          storySource: {
            source:
              '() => (\n  <>\n    <Input id={`myid-${uuidv4()}`} label="Help text input" helpText="Some useful help text." />\n    <Input\n      id={`myid-${uuidv4()}`}\n      label="Invalid input"\n      invalidText="This field has errors."\n      isInvalid\n    />\n    <Input\n      size="small"\n      id={`myid-${uuidv4()}`}\n      label="Invalid small input"\n      invalidText="This field has errors."\n      isInvalid\n    />\n    <Input\n      size="large"\n      id={`myid-${uuidv4()}`}\n      label="Invalid large input"\n      invalidText="This field has errors."\n      isInvalid\n    />\n  </>\n)',
          },
          ...ErrorAndHelpText.parameters,
        });
    },
    './src/stories/Progress.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'All', function () {
          return All;
        });
      var progress_module = __webpack_require__('./src/progress.module.css'),
        progress_module_default = __webpack_require__.n(progress_module),
        jsx_runtime = __webpack_require__('../node_modules/react/jsx-runtime.js');
      const Progress = ({ value: value = 0, max: max, css: css = '' }) => {
        const classes = [progress_module_default.a.progressBar, css ? `${css}` : '']
          .filter((klass) => klass.length)
          .join(' ');
        return Object(jsx_runtime.jsx)('progress', { className: classes, value: value, max: max });
      };
      try {
        (Progress.displayName = 'Progress'),
          (Progress.__docgenInfo = {
            description: '',
            displayName: 'Progress',
            props: {
              max: {
                defaultValue: null,
                description: '',
                name: 'max',
                required: !0,
                type: { name: 'number' },
              },
              value: {
                defaultValue: { value: '0' },
                description: '',
                name: 'value',
                required: !1,
                type: { name: 'number' },
              },
              css: {
                defaultValue: { value: '' },
                description: '',
                name: 'css',
                required: !1,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Progress.tsx#Progress'] = {
              docgenInfo: Progress.__docgenInfo,
              name: 'Progress',
              path: 'src/Progress.tsx#Progress',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = { title: 'AG—React (Beta)/Progress', component: Progress };
      const All = () =>
        Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [
            Object(jsx_runtime.jsx)(Progress, { value: 30, max: 100 }),
            Object(jsx_runtime.jsx)(Progress, { value: 30, max: 100, css: 'foo-bar' }),
            Object(jsx_runtime.jsx)(Progress, { value: 0, max: 100, css: 'foo-bar' }),
            Object(jsx_runtime.jsx)(Progress, { value: 100, max: 100, css: 'foo-bar' }),
          ],
        });
      All.parameters = {
        storySource: {
          source:
            '() => (\n  <>\n    <Progress value={30} max={100} />\n    <Progress value={30} max={100} css="foo-bar" />\n    <Progress value={0} max={100} css="foo-bar" />\n    <Progress value={100} max={100} css="foo-bar" />\n  </>\n)',
        },
        ...All.parameters,
      };
    },
    './src/stories/Switch.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'All', function () {
          return All;
        });
      var esm = __webpack_require__('./node_modules/@storybook/addon-actions/dist/esm/index.js'),
        react = __webpack_require__('../node_modules/react/index.js'),
        switch_module = __webpack_require__('./src/switch.module.css'),
        switch_module_default = __webpack_require__.n(switch_module),
        jsx_runtime = __webpack_require__('../node_modules/react/jsx-runtime.js');
      const Switch = ({
        id: id,
        label: label,
        css: css,
        labelPosition: labelPosition = 'left',
        size: size = '',
        isChecked: isChecked = !1,
        isDisabled: isDisabled = !1,
        isBordered: isBordered = !1,
        isAction: isAction = !1,
        onChange: onChange,
      }) => {
        const [checked, setChecked] = Object(react.useState)(isChecked),
          switchLabel = () => switch_module_default.a['switch-label'];
        return Object(jsx_runtime.jsxs)('label', {
          className: [
            switch_module_default.a['switch-container'],
            'right' === labelPosition ? switch_module_default.a['switch-right'] : '',
            isDisabled ? switch_module_default.a.disabled : '',
            css || '',
          ]
            .filter((klass) => klass.length)
            .join(' '),
          htmlFor: id,
          children: [
            'left' === labelPosition &&
              Object(jsx_runtime.jsx)('span', { className: switchLabel(), children: label }),
            Object(jsx_runtime.jsx)('input', {
              type: 'checkbox',
              className: switch_module_default.a['switch-input'],
              id: id,
              checked: checked,
              disabled: isDisabled,
              onChange: onChange,
              onClick: (evt) => {
                const el = evt.target;
                'true' === el.getAttribute('aria-checked')
                  ? (el.setAttribute('aria-checked', 'false'), setChecked(!1))
                  : (el.setAttribute('aria-checked', 'true'), setChecked(!0));
              },
              onKeyPress: (evt) => {
                if (13 === (evt.keyCode || evt.which)) {
                  evt.preventDefault();
                  evt.target.click();
                }
              },
              role: 'switch',
            }),
            Object(jsx_runtime.jsx)('span', {
              className: [
                switch_module_default.a.switch,
                isBordered ? switch_module_default.a['switch-border'] : '',
                isAction ? switch_module_default.a['switch-action'] : '',
                size ? switch_module_default.a[`switch-${size}`] : '',
              ]
                .filter((klass) => klass.length)
                .join(' '),
              'aria-hidden': 'true',
            }),
            'right' === labelPosition &&
              Object(jsx_runtime.jsx)('span', { className: switchLabel(), children: label }),
          ],
        });
      };
      try {
        (Switch.displayName = 'Switch'),
          (Switch.__docgenInfo = {
            description: '',
            displayName: 'Switch',
            props: {
              id: {
                defaultValue: null,
                description: '',
                name: 'id',
                required: !0,
                type: { name: 'string' },
              },
              label: {
                defaultValue: null,
                description: '',
                name: 'label',
                required: !0,
                type: { name: 'string' },
              },
              css: {
                defaultValue: null,
                description: '',
                name: 'css',
                required: !1,
                type: { name: 'string' },
              },
              labelPosition: {
                defaultValue: { value: 'left' },
                description: '',
                name: 'labelPosition',
                required: !1,
                type: { name: 'enum', value: [{ value: '"left"' }, { value: '"right"' }] },
              },
              size: {
                defaultValue: { value: '' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [{ value: '""' }, { value: '"large"' }, { value: '"small"' }],
                },
              },
              isChecked: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isChecked',
                required: !1,
                type: { name: 'boolean' },
              },
              isAction: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isAction',
                required: !1,
                type: { name: 'boolean' },
              },
              isBordered: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isBordered',
                required: !1,
                type: { name: 'boolean' },
              },
              isDisabled: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isDisabled',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Switch.tsx#Switch'] = {
              docgenInfo: Switch.__docgenInfo,
              name: 'Switch',
              path: 'src/Switch.tsx#Switch',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      const actionsData = { change: Object(esm.action)('change') };
      __webpack_exports__.default = {
        title: 'AG—React (Beta)/Switch',
        component: Switch,
        on: { ...actionsData },
      };
      const All = () =>
        Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [
            Object(jsx_runtime.jsx)(Switch, {
              id: '1',
              label: 'Switch small',
              size: 'small',
              onChange: Object(esm.action)('change'),
            }),
            Object(jsx_runtime.jsx)(Switch, {
              id: '3',
              label: 'Switch default',
              onChange: Object(esm.action)('change'),
            }),
            Object(jsx_runtime.jsx)(Switch, {
              id: '4',
              label: 'Switch large',
              size: 'large',
              onChange: Object(esm.action)('change'),
            }),
            Object(jsx_runtime.jsx)(Switch, {
              id: '5',
              label: 'Switch prechecked',
              size: 'large',
              isChecked: !0,
              onChange: Object(esm.action)('change'),
            }),
            Object(jsx_runtime.jsx)(Switch, {
              id: '6',
              label: 'Switch disabled',
              size: 'large',
              isChecked: !0,
              isDisabled: !0,
            }),
            Object(jsx_runtime.jsx)(Switch, {
              id: '7',
              label: 'Switch action',
              size: 'large',
              isAction: !0,
              onChange: Object(esm.action)('change'),
            }),
            Object(jsx_runtime.jsx)(Switch, {
              id: '8',
              label: 'Switch bordered',
              size: 'large',
              isBordered: !0,
              onChange: Object(esm.action)('change'),
            }),
            Object(jsx_runtime.jsx)(Switch, {
              id: '9',
              label: 'Switch bordered action',
              size: 'large',
              isAction: !0,
              isBordered: !0,
              onChange: Object(esm.action)('change'),
            }),
            Object(jsx_runtime.jsx)(Switch, {
              id: '10',
              label: 'Switch label on right',
              labelPosition: 'right',
              onChange: Object(esm.action)('change'),
            }),
            Object(jsx_runtime.jsx)(Switch, {
              id: '11',
              label: 'Switch right bordered',
              labelPosition: 'right',
              isBordered: !0,
              onChange: Object(esm.action)('change'),
            }),
            Object(jsx_runtime.jsx)(Switch, {
              id: '12',
              label: 'Switch right action',
              labelPosition: 'right',
              isAction: !0,
              onChange: Object(esm.action)('change'),
            }),
            Object(jsx_runtime.jsx)(Switch, {
              id: '13',
              label: 'Switch right action bordered',
              labelPosition: 'right',
              isAction: !0,
              isBordered: !0,
              onChange: Object(esm.action)('change'),
            }),
            Object(jsx_runtime.jsx)(Switch, {
              id: '14',
              label: 'Switch right action bordered disabled',
              isDisabled: !0,
              labelPosition: 'right',
              isAction: !0,
              isBordered: !0,
            }),
          ],
        });
      All.parameters = {
        storySource: {
          source:
            '() => (\n  <>\n    <Switch id="1" label="Switch small" size="small" onChange={action(\'change\')} />\n    <Switch id="3" label="Switch default" onChange={action(\'change\')} />\n    <Switch id="4" label="Switch large" size="large" onChange={action(\'change\')} />\n    <Switch id="5" label="Switch prechecked" size="large" isChecked onChange={action(\'change\')} />\n    <Switch id="6" label="Switch disabled" size="large" isChecked isDisabled />\n    <Switch id="7" label="Switch action" size="large" isAction onChange={action(\'change\')} />\n    <Switch id="8" label="Switch bordered" size="large" isBordered onChange={action(\'change\')} />\n    <Switch\n      id="9"\n      label="Switch bordered action"\n      size="large"\n      isAction\n      isBordered\n      onChange={action(\'change\')}\n    />\n    <Switch\n      id="10"\n      label="Switch label on right"\n      labelPosition="right"\n      onChange={action(\'change\')}\n    />\n    <Switch\n      id="11"\n      label="Switch right bordered"\n      labelPosition="right"\n      isBordered\n      onChange={action(\'change\')}\n    />\n    <Switch\n      id="12"\n      label="Switch right action"\n      labelPosition="right"\n      isAction\n      onChange={action(\'change\')}\n    />\n    <Switch\n      id="13"\n      label="Switch right action bordered"\n      labelPosition="right"\n      isAction\n      isBordered\n      onChange={action(\'change\')}\n    />\n    <Switch\n      id="14"\n      label="Switch right action bordered disabled"\n      isDisabled\n      labelPosition="right"\n      isAction\n      isBordered\n    />\n  </>\n)',
        },
        ...All.parameters,
      };
    },
    './src/stories/TabButtonCustom.module.css': function (module, exports, __webpack_require__) {
      module.exports = {
        customTabButton: 'TabButtonCustom_customTabButton__2_4DZ',
        reactButton: 'TabButtonCustom_reactButton__1KnLu',
        vueButton: 'TabButtonCustom_vueButton__dPpis',
        angularButton: 'TabButtonCustom_angularButton__1V6F9',
        svelteButton: 'TabButtonCustom_svelteButton__3qo1G',
      };
    },
    './src/stories/Tabs.stories.tsx': function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Default', function () {
          return Default;
        }),
        __webpack_require__.d(__webpack_exports__, 'Disabled', function () {
          return Disabled;
        }),
        __webpack_require__.d(__webpack_exports__, 'DisabledOptions', function () {
          return DisabledOptions;
        }),
        __webpack_require__.d(__webpack_exports__, 'Large', function () {
          return Large;
        }),
        __webpack_require__.d(__webpack_exports__, 'Jumbo', function () {
          return Jumbo;
        }),
        __webpack_require__.d(__webpack_exports__, 'Borderless', function () {
          return Borderless;
        }),
        __webpack_require__.d(__webpack_exports__, 'CustomButtonsExample', function () {
          return CustomButtonsExample;
        }),
        __webpack_require__.d(__webpack_exports__, 'CustomSVGTabButtons', function () {
          return CustomSVGTabButtons;
        });
      var react = __webpack_require__('../node_modules/react/index.js'),
        tabs_module = __webpack_require__('./src/tabs.module.css'),
        tabs_module_default = __webpack_require__.n(tabs_module),
        jsx_runtime = __webpack_require__('../node_modules/react/jsx-runtime.js');
      const TabHeader = ({
          isBorderless: isBorderless = !1,
          isSkinned: isSkinned,
          children: children,
        }) =>
          Object(jsx_runtime.jsx)('div', {
            className: `${
              isSkinned ? tabs_module_default.a.tabList : tabs_module_default.a.tabListBase
            } ${isBorderless ? tabs_module_default.a.tabListBorderless : ''}`,
            role: 'tablist',
            'aria-label': 'Tabs',
            children: children,
          }),
        TabPanel = ({ title: title, children: children }) =>
          Object(jsx_runtime.jsx)('div', {
            className: tabs_module_default.a.pane,
            'aria-label': title,
            role: 'tabpanel',
            children: children,
          }),
        TabButton = ({
          size: size = '',
          isBorderless: isBorderless = !1,
          isSkinned: isSkinned,
          isDisabled: isDisabled = !1,
          disabledOptions: disabledOptions = [],
          index: index = 0,
          selectedTab: selectedTab = 0,
          onClick: onClick,
          children: children,
        }) => {
          return Object(jsx_runtime.jsx)(
            'button',
            {
              onClick: () => onClick && onClick(index),
              className:
                ((isActive = selectedTab === index),
                [
                  tabs_module_default.a.tabItem,
                  isSkinned ? tabs_module_default.a.tabButton : tabs_module_default.a.tabButtonBase,
                  isActive ? tabs_module_default.a.active : '',
                  isBorderless ? tabs_module_default.a.tabButtonBorderless : '',
                  'large' === size ? tabs_module_default.a.tabButtonLarge : '',
                  'jumbo' === size ? tabs_module_default.a.tabButtonJumbo : '',
                ]
                  .filter((klass) => klass.length)
                  .join(' ')),
              disabled: isDisabled || disabledOptions.includes(index),
              role: 'tab',
              'aria-selected': selectedTab === index,
              children: children,
            },
            `${index}`
          );
          var isActive;
        },
        Tabs = ({
          size: size = '',
          isBorderless: isBorderless = !1,
          disabledOptions: disabledOptions = [],
          isDisabled: isDisabled = !1,
          isSkinned: isSkinned = !0,
          tabButtons: tabButtons,
          tabPanels: tabPanels,
        }) => {
          const [selectedTab, setSelectedTab] = Object(react.useState)(0),
            selectTab = Object(react.useCallback)(
              (index) => {
                setSelectedTab(index);
              },
              [setSelectedTab]
            );
          return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              Object(jsx_runtime.jsx)(TabHeader, {
                isBorderless: isBorderless,
                isSkinned: isSkinned,
                children: tabButtons.map((btn, i) =>
                  Object(react.cloneElement)(
                    btn,
                    {
                      key: i,
                      title: btn.props.title,
                      size: size,
                      isBorderless: isBorderless,
                      isDisabled: isDisabled,
                      disabledOptions: disabledOptions,
                      isSkinned: isSkinned,
                      index: i,
                      selectedTab: selectedTab,
                      onClick: selectTab,
                      children: btn.props.children,
                    },
                    btn.props.children
                  )
                ),
              }),
              tabPanels[selectedTab],
            ],
          });
        };
      try {
        (TabHeader.displayName = 'TabHeader'),
          (TabHeader.__docgenInfo = {
            description: '',
            displayName: 'TabHeader',
            props: {
              isBorderless: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isBorderless',
                required: !1,
                type: { name: 'boolean' },
              },
              isSkinned: {
                defaultValue: { value: 'true' },
                description: '',
                name: 'isSkinned',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Tabs.tsx#TabHeader'] = {
              docgenInfo: TabHeader.__docgenInfo,
              name: 'TabHeader',
              path: 'src/Tabs.tsx#TabHeader',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (TabPanel.displayName = 'TabPanel'),
          (TabPanel.__docgenInfo = {
            description: '',
            displayName: 'TabPanel',
            props: {
              title: {
                defaultValue: null,
                description: '',
                name: 'title',
                required: !0,
                type: { name: 'string' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Tabs.tsx#TabPanel'] = {
              docgenInfo: TabPanel.__docgenInfo,
              name: 'TabPanel',
              path: 'src/Tabs.tsx#TabPanel',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (TabButton.displayName = 'TabButton'),
          (TabButton.__docgenInfo = {
            description: '',
            displayName: 'TabButton',
            props: {
              index: {
                defaultValue: { value: '0' },
                description: '',
                name: 'index',
                required: !1,
                type: { name: 'number' },
              },
              isBorderless: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isBorderless',
                required: !1,
                type: { name: 'boolean' },
              },
              isSkinned: {
                defaultValue: { value: 'true' },
                description: '',
                name: 'isSkinned',
                required: !1,
                type: { name: 'boolean' },
              },
              disabledOptions: {
                defaultValue: { value: '[]' },
                description: '',
                name: 'disabledOptions',
                required: !1,
                type: { name: 'number[]' },
              },
              isDisabled: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isDisabled',
                required: !1,
                type: { name: 'boolean' },
              },
              size: {
                defaultValue: { value: '' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '""' },
                    { value: '"large"' },
                    { value: '"small"' },
                    { value: '"jumbo"' },
                  ],
                },
              },
              selectedTab: {
                defaultValue: { value: '0' },
                description: '',
                name: 'selectedTab',
                required: !1,
                type: { name: 'number' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '((activeIndex: number) => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Tabs.tsx#TabButton'] = {
              docgenInfo: TabButton.__docgenInfo,
              name: 'TabButton',
              path: 'src/Tabs.tsx#TabButton',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (Tabs.displayName = 'Tabs'),
          (Tabs.__docgenInfo = {
            description: '',
            displayName: 'Tabs',
            props: {
              isBorderless: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isBorderless',
                required: !1,
                type: { name: 'boolean' },
              },
              isDisabled: {
                defaultValue: { value: 'false' },
                description: '',
                name: 'isDisabled',
                required: !1,
                type: { name: 'boolean' },
              },
              disabledOptions: {
                defaultValue: { value: '[]' },
                description: '',
                name: 'disabledOptions',
                required: !1,
                type: { name: 'number[]' },
              },
              isSkinned: {
                defaultValue: { value: 'true' },
                description: '',
                name: 'isSkinned',
                required: !1,
                type: { name: 'boolean' },
              },
              size: {
                defaultValue: { value: '' },
                description: '',
                name: 'size',
                required: !1,
                type: {
                  name: 'enum',
                  value: [
                    { value: '""' },
                    { value: '"large"' },
                    { value: '"small"' },
                    { value: '"jumbo"' },
                  ],
                },
              },
              tabButtons: {
                defaultValue: null,
                description: '',
                name: 'tabButtons',
                required: !0,
                type: { name: 'ReactElement<any, string | JSXElementConstructor<any>>[]' },
              },
              tabPanels: {
                defaultValue: null,
                description: '',
                name: 'tabPanels',
                required: !0,
                type: { name: 'ReactElement<any, string | JSXElementConstructor<any>>[]' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/Tabs.tsx#Tabs'] = {
              docgenInfo: Tabs.__docgenInfo,
              name: 'Tabs',
              path: 'src/Tabs.tsx#Tabs',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var Button = __webpack_require__('./src/Button.tsx'),
        TabButtonCustom_module = __webpack_require__('./src/stories/TabButtonCustom.module.css'),
        TabButtonCustom_module_default = __webpack_require__.n(TabButtonCustom_module);
      const TabButtonCustom = ({
        css: css = '',
        index: index = 0,
        selectedTab: selectedTab = 0,
        onClick: onClick,
        children: children,
      }) =>
        Object(jsx_runtime.jsx)(
          Button.a,
          {
            isBordered: !0,
            onClick: () => onClick && onClick(index),
            role: 'tab',
            'aria-selected': selectedTab === index,
            css: `\n      ${TabButtonCustom_module_default.a.customTabButton} ${
              TabButtonCustom_module_default.a.active
            } ${css || ''}\n    `,
            children: children,
          },
          `${index}`
        );
      try {
        (TabButtonCustom.displayName = 'TabButtonCustom'),
          (TabButtonCustom.__docgenInfo = {
            description: '',
            displayName: 'TabButtonCustom',
            props: {
              css: {
                defaultValue: { value: '' },
                description: '',
                name: 'css',
                required: !1,
                type: { name: 'string' },
              },
              index: {
                defaultValue: { value: '0' },
                description: '',
                name: 'index',
                required: !1,
                type: { name: 'number' },
              },
              selectedTab: {
                defaultValue: { value: '0' },
                description: '',
                name: 'selectedTab',
                required: !1,
                type: { name: 'number' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '((activeIndex: number) => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/stories/TabButtonCustomExample.tsx#TabButtonCustom'] = {
              docgenInfo: TabButtonCustom.__docgenInfo,
              name: 'TabButtonCustom',
              path: 'src/stories/TabButtonCustomExample.tsx#TabButtonCustom',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = { title: 'AG—React (Beta)/Tabs', component: Tabs };
      const buttons = [
          Object(jsx_runtime.jsx)(TabButton, { children: 'Tab 1' }, 1),
          Object(jsx_runtime.jsx)(TabButton, { children: 'Tab 2' }, 2),
          Object(jsx_runtime.jsx)(TabButton, { children: 'Tab 3' }, 3),
          Object(jsx_runtime.jsx)(TabButton, { children: 'Tab 4' }, 4),
          Object(jsx_runtime.jsx)(TabButton, { children: 'Tab 5' }, 5),
        ],
        panels = [
          Object(jsx_runtime.jsx)(
            TabPanel,
            {
              title: 'Tab 1',
              children: Object(jsx_runtime.jsx)('p', { children: 'Tab 1 content' }),
            },
            1
          ),
          Object(jsx_runtime.jsx)(
            TabPanel,
            {
              title: 'Tab 2',
              children: Object(jsx_runtime.jsx)('p', { children: 'Tab 2 content' }),
            },
            2
          ),
          Object(jsx_runtime.jsx)(
            TabPanel,
            {
              title: 'Tab 3',
              children: Object(jsx_runtime.jsx)('p', { children: 'Tab 3 content' }),
            },
            3
          ),
          Object(jsx_runtime.jsx)(
            TabPanel,
            {
              title: 'Tab 4',
              children: Object(jsx_runtime.jsx)('p', { children: 'Tab 4 content' }),
            },
            4
          ),
          Object(jsx_runtime.jsx)(
            TabPanel,
            {
              title: 'Tab 5',
              children: Object(jsx_runtime.jsx)('p', { children: 'Tab 5 content' }),
            },
            5
          ),
        ],
        Default = () => Object(jsx_runtime.jsx)(Tabs, { tabButtons: buttons, tabPanels: panels }),
        Disabled = () =>
          Object(jsx_runtime.jsx)(Tabs, { isDisabled: !0, tabButtons: buttons, tabPanels: panels }),
        DisabledOptions = () =>
          Object(jsx_runtime.jsx)(Tabs, {
            tabButtons: buttons,
            tabPanels: panels,
            disabledOptions: [1, 3],
          }),
        Large = () =>
          Object(jsx_runtime.jsx)(Tabs, { size: 'large', tabButtons: buttons, tabPanels: panels }),
        Jumbo = () =>
          Object(jsx_runtime.jsx)(Tabs, { size: 'jumbo', tabButtons: buttons, tabPanels: panels }),
        Borderless = () =>
          Object(jsx_runtime.jsx)(Tabs, {
            size: 'large',
            isBorderless: !0,
            tabButtons: buttons,
            tabPanels: panels,
          }),
        customButtons = [
          Object(jsx_runtime.jsx)(TabButtonCustom, { children: 'Tab 1' }, 1),
          Object(jsx_runtime.jsx)(TabButtonCustom, { children: 'Tab 2' }, 2),
          Object(jsx_runtime.jsx)(TabButtonCustom, { children: 'Tab 3' }, 3),
        ],
        CustomButtonsExample = () =>
          Object(jsx_runtime.jsx)(Tabs, {
            isBorderless: !0,
            tabButtons: customButtons,
            tabPanels: panels,
          }),
        customExpandedButtons = [
          Object(jsx_runtime.jsxs)(
            TabButtonCustom,
            {
              index: 1,
              css: TabButtonCustom_module_default.a.reactButton,
              children: [
                Object(jsx_runtime.jsx)('svg', {
                  width: '96',
                  xmlns: 'http://www.w3.org/2000/svg',
                  viewBox: '0 0 841.9 595.3',
                  children: Object(jsx_runtime.jsxs)('g', {
                    fill: '#61DAFB',
                    children: [
                      Object(jsx_runtime.jsx)('path', {
                        d: 'M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z',
                      }),
                      Object(jsx_runtime.jsx)('circle', { cx: '420.9', cy: '296.5', r: '45.7' }),
                      Object(jsx_runtime.jsx)('path', { d: 'M520.5 78.1z' }),
                    ],
                  }),
                }),
                'React framework tab button trigger',
              ],
            },
            1
          ),
          Object(jsx_runtime.jsxs)(
            TabButtonCustom,
            {
              index: 2,
              css: TabButtonCustom_module_default.a.vueButton,
              children: [
                Object(jsx_runtime.jsxs)('svg', {
                  width: '54',
                  viewBox: '0 0 261.76 226.69',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    Object(jsx_runtime.jsx)('path', {
                      d: 'M161.096.001l-30.224 52.35L100.647.002H-.005L130.872 226.69 261.749 0z',
                      fill: '#41b883',
                    }),
                    Object(jsx_runtime.jsx)('path', {
                      d: 'M161.096.001l-30.224 52.35L100.647.002H52.346l78.526 136.01L209.398.001z',
                      fill: '#34495e',
                    }),
                  ],
                }),
                'Vue framework tab button trigger',
              ],
            },
            2
          ),
          Object(jsx_runtime.jsxs)(
            TabButtonCustom,
            {
              index: 3,
              css: TabButtonCustom_module_default.a.angularButton,
              children: [
                Object(jsx_runtime.jsxs)('svg', {
                  width: '68',
                  viewBox: '0 0 250 250',
                  children: [
                    Object(jsx_runtime.jsx)('path', {
                      fill: '#dd0031',
                      d: 'M125 30L31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1z',
                    }),
                    Object(jsx_runtime.jsx)('path', {
                      fill: '#c3002f',
                      d: 'M125 30v22.2-.1V230l78.9-43.7 14.2-123.1L125 30z',
                    }),
                    Object(jsx_runtime.jsx)('path', {
                      d: 'M125 52.1L66.8 182.6h21.7l11.7-29.2h49.4l11.7 29.2H183L125 52.1zm17 83.3h-34l17-40.9 17 40.9z',
                      fill: '#fff',
                    }),
                  ],
                }),
                'Angular framework tab button trigger',
              ],
            },
            3
          ),
          Object(jsx_runtime.jsxs)(
            TabButtonCustom,
            {
              index: 4,
              css: TabButtonCustom_module_default.a.svelteButton,
              children: [
                Object(jsx_runtime.jsxs)('svg', {
                  width: '48',
                  viewBox: '0 0 98.1 118',
                  children: [
                    Object(jsx_runtime.jsx)('path', {
                      d: 'M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5',
                      fill: '#ff3e00',
                    }),
                    Object(jsx_runtime.jsx)('path', {
                      d: 'M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5',
                      fill: '#fff',
                    }),
                  ],
                }),
                'Svelte framework tab button trigger',
              ],
            },
            4
          ),
        ],
        customPanels = [...panels];
      customPanels.push(
        Object(jsx_runtime.jsx)(
          TabPanel,
          { title: 'Tab 4', children: Object(jsx_runtime.jsx)('p', { children: 'Tab 4 content' }) },
          4
        )
      );
      const CustomSVGTabButtons = () =>
        Object(jsx_runtime.jsx)(Tabs, {
          isBorderless: !0,
          tabButtons: customExpandedButtons,
          tabPanels: customPanels,
        });
      (Default.parameters = {
        storySource: { source: '() => <Tabs tabButtons={buttons} tabPanels={panels} />' },
        ...Default.parameters,
      }),
        (Disabled.parameters = {
          storySource: {
            source: '() => <Tabs isDisabled tabButtons={buttons} tabPanels={panels} />',
          },
          ...Disabled.parameters,
        }),
        (DisabledOptions.parameters = {
          storySource: {
            source:
              '() => (\n  <Tabs tabButtons={buttons} tabPanels={panels} disabledOptions={[1, 3]} />\n)',
          },
          ...DisabledOptions.parameters,
        }),
        (Large.parameters = {
          storySource: {
            source: '() => <Tabs size="large" tabButtons={buttons} tabPanels={panels} />',
          },
          ...Large.parameters,
        }),
        (Jumbo.parameters = {
          storySource: {
            source: '() => <Tabs size="jumbo" tabButtons={buttons} tabPanels={panels} />',
          },
          ...Jumbo.parameters,
        }),
        (Borderless.parameters = {
          storySource: {
            source:
              '() => (\n  <Tabs size="large" isBorderless tabButtons={buttons} tabPanels={panels} />\n)',
          },
          ...Borderless.parameters,
        }),
        (CustomButtonsExample.parameters = {
          storySource: {
            source:
              '() => (\n  <Tabs isBorderless tabButtons={customButtons} tabPanels={panels} />\n)',
          },
          ...CustomButtonsExample.parameters,
        }),
        (CustomSVGTabButtons.parameters = {
          storySource: {
            source:
              '() => (\n  <Tabs isBorderless tabButtons={customExpandedButtons} tabPanels={customPanels} />\n)',
          },
          ...CustomSVGTabButtons.parameters,
        });
    },
    './src/switch.module.css': function (module, exports, __webpack_require__) {
      module.exports = {
        'switch-container': 'switch_switch-container__1Z8Ws switch_switch-container__3RwqH',
        switch: 'switch_switch__FOkcE switch_switch__9ktqH',
        'switch-label': 'switch_switch-label__2A3r4 switch_switch-label__35F4z',
        'switch-small': 'switch_switch-small__2l7iM switch_switch-small__2CtU5',
        'switch-large': 'switch_switch-large__3NVGW switch_switch-large__3rcqW',
        'switch-border': 'switch_switch-border__22soc switch_switch-border__3bYCh',
        'switch-action': 'switch_switch-action__8RpU4 switch_switch-action__didZp',
        'switch-input': 'switch_switch-input__2hVrZ switch_switch-input__3WuoX',
        'switch-right': 'switch_switch-right__3Bnus switch_switch-right__2Tx4l',
        disabled: 'switch_disabled__1uPV7 switch_disabled__1al1i',
      };
    },
    './src/tabs.module.css': function (module, exports, __webpack_require__) {
      module.exports = {
        tabList: 'tabs_tabList__2gvhq tabs_tab-list__1BElH',
        tabListBase: 'tabs_tabListBase__30txV tabs_tab-list-base__1QGbT',
        tabListBorderless: 'tabs_tabListBorderless__14kkY tabs_tab-borderless__3Qry3',
        tabButtonBorderless: 'tabs_tabButtonBorderless__38qI_ tabs_tab-borderless__3Qry3',
        tabItem: 'tabs_tabItem__28BKy tabs_tab-item__3COFL',
        tabButtonBase: 'tabs_tabButtonBase__YbGqF tabs_tab-button-base__33pDp',
        tabButton: 'tabs_tabButton__ehx3e tabs_tab-button__26tAj',
        tabButtonLarge: 'tabs_tabButtonLarge__2jpOn tabs_tab-button-large__3EvkH',
        tabButtonJumbo: 'tabs_tabButtonJumbo__2CpfC tabs_tab-button-jumbo__2F--a',
        pane: 'tabs_pane__24yQZ tabs_pane__1IId9',
        active: 'tabs_active__1Z0Ff tabs_active__3AW1f',
      };
    },
    0: function (module, exports, __webpack_require__) {
      __webpack_require__(
        '../node_modules/@storybook/react/node_modules/@storybook/core-client/dist/esm/globals/polyfills.js'
      ),
        __webpack_require__(
          '../node_modules/@storybook/react/node_modules/@storybook/core-client/dist/esm/globals/globals.js'
        ),
        __webpack_require__('./.storybook/storybook-init-framework-entry.js'),
        __webpack_require__(
          './node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__(
          '../node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-a11y/dist/esm/a11yRunner.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-a11y/dist/esm/a11yHighlight.js-generated-config-entry.js'
        ),
        __webpack_require__('./.storybook/preview.js-generated-config-entry.js'),
        (module.exports = __webpack_require__('./.storybook/generated-stories-entry.js'));
    },
    1: function (module, exports) {},
    10: function (module, exports) {},
    11: function (module, exports) {},
    2: function (module, exports) {},
    3: function (module, exports) {},
    4: function (module, exports) {},
    5: function (module, exports) {},
    6: function (module, exports) {},
    7: function (module, exports) {},
    8: function (module, exports) {},
    9: function (module, exports) {},
  },
  [[0, 3, 4]],
]);
