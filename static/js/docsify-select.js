/*!
 * docsify-select
 * v1.1.0
 * https://jthegedus.github.io/docsify-select/
 * (c) 2020-2022 James Hegedus
 * MIT license
 */
(function() {
    "use strict";
    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }
    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }
    function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
    }
    function _iterableToArrayLimit(arr, i) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_n && _i["return"] != null) _i["return"]();
            } finally {
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
        var it;
        if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
            if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                if (it) o = it;
                var i = 0;
                var F = function() {};
                return {
                    s: F,
                    n: function() {
                        if (i >= o.length) return {
                            done: true
                        };
                        return {
                            done: false,
                            value: o[i++]
                        };
                    },
                    e: function(e) {
                        throw e;
                    },
                    f: F
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err;
        return {
            s: function() {
                it = o[Symbol.iterator]();
            },
            n: function() {
                var step = it.next();
                normalCompletion = step.done;
                return step;
            },
            e: function(e) {
                didErr = true;
                err = e;
            },
            f: function() {
                try {
                    if (!normalCompletion && it.return != null) it.return();
                } finally {
                    if (didErr) throw err;
                }
            }
        };
    }
    var version = "1.1.0";
    function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;
        if (!css || typeof document === "undefined") {
            return;
        }
        var head = document.head || document.getElementsByTagName("head")[0];
        var style = document.createElement("style");
        style.type = "text/css";
        if (insertAt === "top") {
            if (head.firstChild) {
                head.insertBefore(style, head.firstChild);
            } else {
                head.appendChild(style);
            }
        } else {
            head.appendChild(style);
        }
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }
    var css_248z = ":root{--docsifyselect-font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--docsifyselect-menu-container-margin:8px 4px 0 0;--docsifyselect-menu-label-font-size:14px;--docisfyselect-menu-label-text-transform:capitalize;--docsifyselect-menu-arrow:url(\"data:image/svg+xml;utf8,<svg fill='rgb(77, 77, 77)' height='16' width='16' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'></path></svg>\");--docsifyselect-menu-background:#f8f8f8;--docsifyselect-menu-border-color:#cbd5e0;--docsifyselect-menu-border-radius:4px;--docsifyselect-menu-border-width:1px;--docsifyselect-menu-box-shadow:rgba(0,0,0,0.1) 0px 1px 3px 0px,rgba(0,0,0,0.06) 0px 1px 2px 0px;--docsifyselect-menu-font-size:16px;--docsifyselect-menu-line-height:20px;--docsifyselect-menu-margin:0px;--docsifyselect-menu-padding:8px 32px 8px 16px;--docisfyselect-menu-width:256px;--docsifyselect-content-background:inherit;--docsifyselect-content-padding:0px}.docsify-select-menu{width:256px;width:var(--docisfyselect-menu-width)}.docsify-select-group{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.docsify-select__content{visibility:hidden;position:absolute;overflow:hidden;height:0;width:100%}.docsify-select__content--active{visibility:visible;position:relative;overflow:auto;height:auto}[class*=docsify-select--] .docsify-select-menu{width:256px;width:var(--docisfyselect-menu-width)}.docsify-select--classic .docsify-select-group{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.docsify-select--classic .docsify-select-menu-container{margin:8px 4px 0 0;margin:var(--docsifyselect-menu-container-margin)}.docsify-select--classic .docsify-select-menu-container label{font-size:14px;font-size:var(--docsifyselect-menu-label-font-size);font-weight:700;letter-spacing:.3px;line-height:19.5px;text-transform:capitalize;text-transform:var(--docisfyselect-menu-label-text-transform)}.docsify-select--classic .docsify-select-menu,.docsify-select--classic .docsify-select-menu-container label{color:inherit;font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-family:var(--docsifyselect-font-family)}.docsify-select--classic .docsify-select-menu{background:#f8f8f8 url(\"data:image/svg+xml;utf8,<svg fill='rgb(77, 77, 77)' height='16' width='16' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'></path></svg>\") calc(100% - 12px) 50%/12px no-repeat;background:var(--docsifyselect-menu-background) var(--docsifyselect-menu-arrow) calc(100% - 12px) 50%/12px no-repeat;border-color:#cbd5e0;border-radius:4px;border-radius:var(--docsifyselect-menu-border-radius);border-width:1px;border:var(--docsifyselect-menu-border-width) solid var(--docsifyselect-menu-border-color);box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);box-shadow:var(--docsifyselect-menu-box-shadow);box-sizing:border-box;display:block;font-size:16px;font-size:var(--docsifyselect-menu-font-size);line-height:20px;line-height:var(--docsifyselect-menu-line-height);margin:0;margin:var(--docsifyselect-menu-margin);padding:8px 32px 8px 16px;padding:var(--docsifyselect-menu-padding);text-align:start;text-transform:none;width:256px;width:var(--docisfyselect-menu-width);appearance:none;-webkit-appearance:none;-moz-appearance:none}.docsify-select--classic .docsify-select__content,.docsify-select--classic .docsify-select__content--active{padding:0;padding:var(--docsifyselect-content-padding);background:inherit;background:var(--docsifyselect-content-background)}";
    styleInject(css_248z, {
        insertAt: "top"
    });
    var commentReplaceMark = "select:replace";
    var classNames = {
        selectContainer: "content",
        selectBlock: "docsify-select",
        selectGroup: "docsify-select-group",
        selectMenuContainer: "docsify-select-menu-container",
        selectMenu: "docsify-select-menu",
        selectOption: "docsify-select__option",
        selectContent: "docsify-select__content",
        selectContentActive: "docsify-select__content--active"
    };
    var regex = {
        codeMarkup: /(```[\s\S]*?```)/gm,
        commentReplaceMarkup: new RegExp("\x3c!-- ".concat(commentReplaceMark, " (.*) --\x3e")),
        selectBlockMarkup: /[\r\n]*(\s*)(<!-+\s+select:\s*?start\s+-+>)[\r\n]+([\s|\S]*?)[\r\n\s]+(<!-+\s+select:\s*?end\s+-+>)/m,
        selectMenuLabelsMarkup: /[\r\n]*(\s*)(<!-+\s+select-menu-labels:\s*)([\s|\S]*?)(\s+-+>)/m,
        selectHeadingMarkup: /[\r\n]*(\s*)#{1,6}\s*[~-]{2}\s*(.*\S)\s*[~-]{2}[\r\n]+([\s\S]*?)(?=#{1,6}\s*[~-]{2}|<!-+\s+select:\s*?end\s+-+>)/m,
        selectHeadingComment: /[\r\n]*(\s*)#{1,6}\s*(.*?)\s*<!-+\s+select-option\s+-+>[\r\n]+([\s\S]*?)(?=#{1,6}\s*[^\r\n]*<!-+\s+select-option\s+-+>|<!-+\s+select:\s*?end\s+-+>)/m
    };
    var settings = {
        sync: false,
        useSelectHeadingComment: false,
        detectOperatingSystem: {
            enabled: false,
            menuId: "operating-system"
        },
        theme: "classic",
        selected: {}
    };
    function renderSelectGroupsStage1(content) {
        var codeBlockMatch = content.match(regex.codeMarkup) || [];
        var codeBlockMarkers = codeBlockMatch.map(function(item, i) {
            var codeMarker = "\x3c!-- ".concat(commentReplaceMark, " CODEBLOCK").concat(i, " --\x3e");
            content = content.replace(item, codeMarker);
            return codeMarker;
        });
        var selectTheme = settings.theme === "none" ? "" : "".concat(classNames.selectBlock, "--").concat(settings.theme);
        var selectBlockMatch;
        var selectMatch;
        var isFirst = true;
        while ((selectBlockMatch = regex.selectBlockMarkup.exec(content)) !== null) {
            var selectBlock = selectBlockMatch[0];
            var selectGroups = [];
            var selectStartReplacement = "";
            var selectEndReplacement = "";
            var hasSelectHeadings = regex.selectHeadingMarkup.test(selectBlock);
            var selectBlockIndent = selectBlockMatch[1];
            var selectBlockStart = selectBlockMatch[2];
            var selectBlockEnd = selectBlockMatch[4];
            var selectMenuLabelsMatch = regex.selectMenuLabelsMarkup.exec(selectBlock);
            var selectMenuLabels = selectMenuLabelsMatch[3].split(",");
            if (hasSelectHeadings) {
                var selectGroupOptions = [];
                while ((selectMatch = regex.selectHeadingMarkup.exec(selectBlock)) !== null) {
                    var selectOptions = selectMatch[2].trim().split(",");
                    var selectContent = (selectMatch[3] || "").trim();
                    var dataSelectContentAttribute = prepareDataSelectAttribute(selectOptions.toString().toLowerCase().trim().split(/[,\s]/g).join("-"));
                    var classAttribute = classNames.selectContent;
                    if (isFirst) {
                        classAttribute += " ".concat(classNames.selectContentActive);
                    }
                    selectBlock = selectBlock.replace(selectMatch[0], [ "\n".concat(selectBlockIndent, "\x3c!-- ").concat(commentReplaceMark, ' <div class="').concat(classAttribute, '" data-select-content="').concat(dataSelectContentAttribute, '"> --\x3e'), "\n\n".concat(selectBlockIndent).concat(selectContent), "\n\n".concat(selectBlockIndent, "\x3c!-- ").concat(commentReplaceMark, " </div> --\x3e") ].join(""));
                    var _iterator = _createForOfIteratorHelper(selectOptions.entries()), _step;
                    try {
                        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                            var _step$value = _slicedToArray(_step.value, 2), index = _step$value[0], selectOption = _step$value[1];
                            if (selectOption.toLowerCase().trim().split(" ").join("-") !== "docsify-select-default") {
                                var options = selectGroupOptions[index] || [];
                                options[selectOption] = "".concat(selectBlockIndent, ' <option value="').concat(selectOption.toLowerCase(), '">').concat(selectOption, "</option>");
                                selectGroupOptions[index] = options;
                            }
                        }
                    } catch (err) {
                        _iterator.e(err);
                    } finally {
                        _iterator.f();
                    }
                    isFirst = false;
                }
                var _iterator2 = _createForOfIteratorHelper(selectMenuLabels.entries()), _step2;
                try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                        var _step2$value = _slicedToArray(_step2.value, 2), _index = _step2$value[0], selectMenuLabel = _step2$value[1];
                        selectGroups = [].concat(_toConsumableArray(selectGroups), [ '<div class="'.concat(classNames.selectMenuContainer, '"> <label for="').concat(selectMenuLabel.toLowerCase(), '">').concat(selectMenuLabel, '</label> <select class="').concat(classNames.selectMenu, '" id="').concat(selectMenuLabel.toLowerCase().replace(/\s/g, "-"), '"> ').concat(Object.values(selectGroupOptions[_index]), " </select> </div>") ]);
                    }
                } catch (err) {
                    _iterator2.e(err);
                } finally {
                    _iterator2.f();
                }
                selectStartReplacement = "\x3c!-- ".concat(commentReplaceMark, ' <div class="').concat([ classNames.selectBlock, selectTheme ].join(" "), '"> <div class="').concat(classNames.selectGroup, '"> ').concat(selectGroups.toString().split(",").join(" "), " </div> --\x3e");
                selectEndReplacement = "\n".concat(selectBlockIndent, "\x3c!-- ").concat(commentReplaceMark, " </div> --\x3e");
            }
            selectBlock = selectBlock.replace(selectBlockStart, selectStartReplacement);
            selectBlock = selectBlock.replace(selectBlockEnd, selectEndReplacement);
            content = content.replace(selectBlockMatch[0], selectBlock);
        }
        var _iterator3 = _createForOfIteratorHelper(codeBlockMarkers.entries()), _step3;
        try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                var _step3$value = _slicedToArray(_step3.value, 2), _index2 = _step3$value[0], item = _step3$value[1];
                content = content.replace(item, codeBlockMatch[_index2]);
            }
        } catch (err) {
            _iterator3.e(err);
        } finally {
            _iterator3.f();
        }
        return content;
    }
    function renderSelectGroupsStage2(html) {
        var selectReplaceMatch;
        while ((selectReplaceMatch = regex.commentReplaceMarkup.exec(html)) !== null) {
            var selectComment = selectReplaceMatch[0];
            var selectReplacement = selectReplaceMatch[1] || "";
            html = html.replace(selectComment, selectReplacement);
        }
        return html;
    }
    function getOperatingSystemName() {
        var operatingSystemName = "Unknown";
        if (window.navigator.userAgent.includes("Win")) {
            operatingSystemName = "Windows";
        }
        if (window.navigator.userAgent.includes("Mac")) {
            operatingSystemName = "macOS";
        }
        if (window.navigator.userAgent.includes("X11")) {
            operatingSystemName = "UNIX";
        }
        if (window.navigator.userAgent.includes("Linux")) {
            operatingSystemName = "Linux";
        }
        return operatingSystemName;
    }
    function prepareDataSelectAttribute(string) {
        return string.toLowerCase().trim().split(/[,\s]/g).join("-");
    }
    function calculateSelectedContent(selectMenuList) {
        var newSelection = "";
        Array.prototype.forEach.call(selectMenuList, function(selectMenu) {
            newSelection = newSelection.length === 0 ? prepareDataSelectAttribute(selectMenu.value) : newSelection + "-" + prepareDataSelectAttribute(selectMenu.value);
        });
        return newSelection;
    }
    function setSelectedContent(newSelection, selectContentList) {
        var contentMatch = false;
        var _iterator4 = _createForOfIteratorHelper(selectContentList), _step4;
        try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                var selectContent = _step4.value;
                selectContent.classList.remove(classNames.selectContentActive);
                if (selectContent.getAttribute("data-select-content") === newSelection) {
                    selectContent.classList.add(classNames.selectContentActive);
                    contentMatch = true;
                }
            }
        } catch (err) {
            _iterator4.e(err);
        } finally {
            _iterator4.f();
        }
        return contentMatch;
    }
    function setDefaultContent(selectContentList) {
        var _iterator5 = _createForOfIteratorHelper(selectContentList), _step5;
        try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                var selectContent = _step5.value;
                if (selectContent.getAttribute("data-select-content") === "docsify-select-default") {
                    selectContent.classList.add(classNames.selectContentActive);
                }
            }
        } catch (err) {
            _iterator5.e(err);
        } finally {
            _iterator5.f();
        }
    }
    function setInitialSelection(selectMenuList, selectContentList) {
        if (settings.detectOperatingSystem.enabled) {
            var currentOperatingSystem = getOperatingSystemName();
            Array.prototype.forEach.call(selectMenuList, function(selectMenu) {
                if (selectMenu.id === settings.detectOperatingSystem.menuId) {
                    Array.prototype.forEach.call(selectMenu.options, function(option, index) {
                        if (option.value.toString().trim().toLowerCase().includes(currentOperatingSystem.toLowerCase())) {
                            selectMenu.selectedIndex = index;
                        } else {
                            selectMenu.selectedIndex = 0;
                        }
                    });
                }
            });
            var newSelection = calculateSelectedContent(selectMenuList);
            var contentMatch = setSelectedContent(newSelection, selectContentList);
            if (contentMatch === false) {
                setDefaultContent(selectContentList);
            }
        }
    }
    function changeSelection(event, selectMenuList, selectContentList) {
        var newSelection = calculateSelectedContent(selectMenuList);
        var contentMatch = setSelectedContent(newSelection, selectContentList);
        if (contentMatch === false) {
            setDefaultContent(selectContentList);
        }
    }
    function changeAllSyncedSelections(selectBlocks, selectMenuId, selectOption) {
        settings.selected[selectMenuId] = selectOption;
        var _iterator6 = _createForOfIteratorHelper(selectBlocks), _step6;
        try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                var selectBlock = _step6.value;
                var selectContentList = selectBlock.querySelectorAll(".".concat(classNames.selectContent));
                var selectMenuList = selectBlock.querySelectorAll(".".concat(classNames.selectMenu));
                var _iterator7 = _createForOfIteratorHelper(selectMenuList), _step7;
                try {
                    var _loop = function _loop() {
                        var selectMenu = _step7.value;
                        if (selectMenu.id === selectMenuId) {
                            Array.prototype.forEach.call(selectMenu.options, function(option, index) {
                                if (option.value === selectOption) {
                                    selectMenu.selectedIndex = index;
                                }
                            });
                        }
                    };
                    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                        _loop();
                    }
                } catch (err) {
                    _iterator7.e(err);
                } finally {
                    _iterator7.f();
                }
                var newSelection = calculateSelectedContent(selectMenuList);
                var contentMatch = setSelectedContent(newSelection, selectContentList);
                if (contentMatch === false) {
                    setDefaultContent(selectContentList);
                }
            }
        } catch (err) {
            _iterator6.e(err);
        } finally {
            _iterator6.f();
        }
    }
    function docsifySelect(hook, _) {
        var hasSelect = false;
        hook.beforeEach(function(content) {
            hasSelect = regex.selectBlockMarkup.test(content);
            if (hasSelect) {
                content = renderSelectGroupsStage1(content);
            }
            return content;
        });
        hook.afterEach(function(html, next) {
            if (hasSelect) {
                html = renderSelectGroupsStage2(html);
            }
            next(html);
        });
        hook.doneEach(function() {
            if (hasSelect) {
                (function() {
                    var selectContainer = document.querySelector(".".concat(classNames.selectContainer));
                    var selectBlocks = selectContainer.querySelectorAll(".".concat(classNames.selectBlock));
                    if (selectBlocks.length > 0) {
                        for (var _i = 0, _Object$keys = Object.keys(settings.selected); _i < _Object$keys.length; _i++) {
                            var x = _Object$keys[_i];
                            changeAllSyncedSelections(selectBlocks, x, settings.selected[x]);
                        }
                        var _iterator8 = _createForOfIteratorHelper(selectBlocks), _step8;
                        try {
                            var _loop2 = function _loop2() {
                                var selectBlock = _step8.value;
                                var selectMenuList = selectBlock.querySelectorAll(".".concat(classNames.selectMenu));
                                var selectContentList = selectBlock.querySelectorAll(".".concat(classNames.selectContent));
                                setInitialSelection(selectMenuList, selectContentList);
                                var _iterator9 = _createForOfIteratorHelper(selectMenuList), _step9;
                                try {
                                    for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
                                        var selectMenu = _step9.value;
                                        selectMenu.addEventListener("change", function(event) {
                                            if (settings.sync) {
                                                changeAllSyncedSelections(selectBlocks, event.target.id, event.target.value);
                                            } else {
                                                changeSelection(event, selectMenuList, selectContentList);
                                            }
                                        });
                                    }
                                } catch (err) {
                                    _iterator9.e(err);
                                } finally {
                                    _iterator9.f();
                                }
                            };
                            for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                                _loop2();
                            }
                        } catch (err) {
                            _iterator8.e(err);
                        } finally {
                            _iterator8.f();
                        }
                    }
                })();
            }
        });
        hook.mounted(function() {});
    }
    if (window) {
        window.$docsify = window.$docsify || {};
        window.$docsify.select = window.$docsify.select || {};
        for (var _i2 = 0, _Object$keys2 = Object.keys(window.$docsify.select); _i2 < _Object$keys2.length; _i2++) {
            var key = _Object$keys2[_i2];
            if (Object.prototype.hasOwnProperty.call(settings, key)) {
                settings[key] = window.$docsify.select[key];
            }
        }
        if (settings.useSelectHeadingComment) {
            regex.selectHeadingMarkup = regex.selectHeadingComment;
        }
        window.$docsify.select.version = version;
        window.$docsify.plugins = [].concat(docsifySelect, window.$docsify.plugins || []);
    }
})();
//# sourceMappingURL=docsify-select.js.map
