在开发过程中，随着程序代码越写越多，在一个文件里代码就会越来越长。

为了便于维护，我们会把函数拆分到不同的文件里。这样，每个文件包含的代码较少，在 NodeJS 中，一个 .js 文件称为一个模块。

> 使用模块化的好处
>
> 1. 提高代码可维护性；
> 2. 编写代码不必从零开始，当一个模块编写完毕，就可以被其他地方引用。我们也可以直接引用其它模块，包含 Node 内置模块和第三方模块；
> 3. 使用模块还可以避免函数名和变量名冲突，相同名字的函数和变量可以分别存在于不同的模块中。

下面来看一个简单的模块：

```javascript
// 模块 hello.js
function greet(name) {
  console.log(`Hello, ${name} !`);
}
module.exports = greet;

// index.js
var greet = require('./hello');
greet('Harris');  // Hello, Harris !
```

请注意，在使用 require() 引入模块的时候，需要使用相对路径。如果只写模块名，那么 NodeJS 会依次在内置模块、全局模块和当前模块下查找该文件。

### CommonJS 规范
以上模块加载机制被称为 CommonJS 规范，在该规范下，每个 .js 文件都是一个模块。
要在模块中对外输出变量，使用：
```javascript
module.exports = variable;
```
输出的变量可以是任意对象、函数等。
想要在模块中引入其它模块，使用：
```javascript
var ref = require('module_name')
```











