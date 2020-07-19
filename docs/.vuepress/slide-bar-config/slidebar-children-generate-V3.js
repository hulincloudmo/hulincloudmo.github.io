"use strict";
var fs = require('fs');
var path = require('path');
var os = require("os");
var osType = os.type();
var workFolder;
var generate;
(function (generate) {
    function resolve(basePath, resolvePath) {
        return path.resolve(basePath, resolvePath);
    }
    function start(basePath) {
        workFolder = "/" + basePath;
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
            throw TypeError("please check your directory " + dirPath + " config.json is exist?");
        }
    }
    function getChildren(path) {
        var children = [];
        readDirSync(path, children);
        return children.map(function (v) {
            var lastIndex;
            if (isWindows()) {
                lastIndex = v.lastIndexOf(workFolder);
            }
            else {
                lastIndex = v.lastIndexOf(workFolder);
            }
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
                    root.push(prefixPathHandler(path, ele));
                }
            }
        });
    }
    function checkFileType(filepath) {
        return path.extname(filepath) === ".md";
    }
    function isWindows() {
        return osType === "Windows_NT";
    }
    function prefixPathHandler(basePath, dirPath) {
        var index;
        if (isWindows()) {
            index = basePath.indexOf("\\");
        }
        else {
            index = basePath.indexOf("/");
        }
        basePath = basePath.slice(index, path.length);
        if (isWindows()) {
            return path.join(basePath, dirPath).replace(/\\/g, "/");
        }
        else {
            return path.join(basePath, dirPath);
        }
    }
})(generate || (generate = {}));
module.exports = {
    start: generate.start
};
