"use strict";
var fs = require('fs');
var path = require('path');
var generate;
(function (generate) {
    function resolve(basePath, resolvePath) {
        return path.resolve(basePath, resolvePath);
    }
    function start(basePath) {
        basePath = resolve(__dirname, "../../" + basePath);
        var result = [];
        var dirList = fs.readdirSync(basePath);
        for (var _i = 0, dirList_1 = dirList; _i < dirList_1.length; _i++) {
            var item = dirList_1[_i];
            var DirPath = resolve(basePath, item);
            var info = fs.statSync(DirPath);
            if (info.isDirectory()) {
                result.push(articleModuleFactory(DirPath));
            }
        }
        return result;
    }
    generate.start = start;
    function articleModuleFactory(dirPath) {
        var mes = getMessage(resolve(dirPath, "./config.json"));
        var categoryName = mes.categoryName;
        var collapsable = mes.collapsable;
        return {
            title: categoryName,
            collapsable: collapsable,
            children: getChildren(dirPath)
        };
    }
    function getMessage(dirPath) {
        try {
            return JSON.parse(fs.readFileSync(dirPath).toString());
        }
        catch (e) {
            throw TypeError("please check your path " + dirPath + " config.json is exist?");
        }
    }
    function getChildren(path) {
        var children = [];
        readDirSync(path, children);
        return children.map(function (v) {
            var lastIndex = v.lastIndexOf("/docs") + 5;
            return v.substr(lastIndex);
        });
    }
    function readDirSync(path, root) {
        var pa = fs.readdirSync(path);
        pa.forEach(function (ele, index) {
            var elePath = resolve(path, ele);
            var info = fs.statSync(elePath);
            if (info.isDirectory()) {
                readDirSync(elePath, root);
            }
            else {
                if (checkFileType(ele)) {
                    root.push(prefixPath(path, ele));
                }
            }
        });
    }
    function checkFileType(path) {
        return path.includes(".md");
    }
    function prefixPath(basePath, dirPath) {
        var index = basePath.indexOf("/");
        basePath = basePath.slice(index, path.length);
        return path.join(basePath, dirPath).replace(/\\/g, "/");
    }
})(generate || (generate = {}));
module.exports = {
    start: generate.start
};
