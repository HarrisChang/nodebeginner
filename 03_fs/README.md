### fs（文件系统）
`fs` 模块提供了一个 API，用以模仿标准 POSIX 函数的方式与文件系统进行交互。
```
const fs = require('fs');
```
所有文件系统操作都具有同步和异步的形式，`但不建议使用同步，因为会阻塞整个进程`。
**异步的形式总是将完成回调作为其最后一个参数，传给完成回调的参数取决于具体方法，但第一个参数始终预留用于异常。如果操作成功完成，则第一个参数将为 null 或 undefined。**
