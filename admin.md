## 安装

```nginx
npm i docsify-cli -g #安装脚手架
docsify init ./docs  #初始化
docsify g ./ 				#自动设置边栏路径
```

## 帮助文档

```bash
# docsify -help
Usage: docsify <init|serve> <path>

Commands:
  docsify init [path]      Creates new docs                         [aliases: i]
  docsify serve [path]     Run local server to preview site.        [aliases: s]
  docsify start <path>     Server for SSR
  docsify generate <path>  Docsify's generators                     [aliases: g]

Global Options
  --help, -h     Show help                                             [boolean]
  --version, -v  Show version number                                   [boolean]

Documentation:
  https://docsifyjs.github.io/docsify
  https://docsifyjs.github.io/docsify-cli

Development:
  https://github.com/docsifyjs/docsify-cli/blob/master/CONTRIBUTING.md
```



## 启动

```cmd
docsify serve docs
```

```cmd
cd docs && python -m http.server 3000
```

## 图床替换

### 文件路径

```
D:\MyProject\博客\docsify1\docs\

```

### 图片

```
../.*/repo/assets
../../../../repo/assets
assets

https://image.201068.xyz/assets

```

