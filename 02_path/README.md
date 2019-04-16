### path（路径）
`path` 路径提供用于处理文件路径和目录路径的工具，它可以使用以下方式访问：
```
const path = require('path');
```
#### Windows 与 POSIX
path 模块的默认操作因 Node.js 应用程序运行所在的操作系统而异。因此，使用 path.basename() 可能会在 POSIX 和 Windows 上产生不同的结果：
在 POSIX 上：
```
path.basename('C:\\temp\\myfile.html');
// 返回：'C:\\temp\\myfile.html'
```
在 Windows 上：
```
path.basename('C:\\temp\\myfile.html');
// 返回：'myfile.html'
```
要在任何操作系统上使用 Window 文件路径时获得一致的结果，则使用 `path.win32`:
在 POSIX 和 Windows 上：
```
path.win32.basename('C:\\temp\\myfile.html');
// 返回：'myfile.html'
```
要在任何操作系统上使用 POSIX 文件路径时获得一致的结果，则使用 path.posix:
在 POSIX 和 Windows 上：
```
path.posix.basename('/temp/myfile.html');
// 返回：'myfile.html'
```