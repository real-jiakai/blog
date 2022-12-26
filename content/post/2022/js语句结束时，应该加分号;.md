---
title: "js语句结束时，应该加分号;"
date: 2022-09-28T19:27:33+08:00
tags: ['前端']
slug: you-should-add-a-semicolon-when-a-statement-end-in-js
summary: 深究newsletter里面js代码的细节，让我知道了js中添加`;`的重要性。
---


## 1.故事背景

今天上午，整理邮箱时，被一份newsletter里面的`spot the bug`专栏给吸引住了。

```javascript
const newsletter = "Bytes"
const tagline = "Your weekly dose of JavaScript"

[newsletter, tagline].forEach((el) => console.log(el))
```

短短的三行代码，暗藏玄机。在vscode中新建了一个js文件，使用`node xxx.js`命令去执行这段js代码时，竟然报错了。

最后，在newsletter的末尾找到了产生报错的原因以及解决方法。

+ 原因：

> 由于第2句js代码没有加分号的缘故，js解释执行的2、3行代码会归为1行执行。如下：

```javascript
const tagline = "Your weekly dose of JavaScript"[newsletter, tagline].forEach((el) => console.log(el))
```

首先会执行赋值语句右边的代码，访问字符串，并循环遍历输出序列。

这边访问字符串的写法是错误的。`Your weekly dose of JavaScript"[newsletter, tagline]`

对于字符串而言，通过str[indexNum]的方式仅仅能访问到单个字符，其中indexNum应是一个数字。

由于第二句js语句末尾没有加分号的缘故，导致js解释执行的流程与原本的预想产生了分歧。


+ 解决方法：
 + 在`[newsletter, tagline]`前添加一个`+`号
 + 在`const tagline = "Your weekly dose of JavaScript"`语句后添加一个`;`

其中添加`;`的方法，在vscode中得到了验证。第1条解决办法【添加`+`的方法】一开始并没有奏效。

后来和作者沟通以及自己查阅资料后，第一种方式在vscode中也得到了验证。

这次`spot bug`的过程，让我对于js中的`;`以及`+`号有了进一步的认识。

## 2.知识点总结

1)js中在函数前加诸如`+`的一元运算符，会将符号后面的部分视为表达式。
这正好能弥补js因分号而产生错误解析执行的漏洞。

2)表达式一般需用一个变量来接收其返回值。
这份newsletter作者给出的第1种解决方案，一开始在vscode中并不奏效，但当我用1个变量去接收表达式的返回值时，代码正常运行。


## 3.参考资料

[JavaScript plus sign in front of function expression](https://stackoverflow.com/questions/13341698/javascript-plus-sign-in-front-of-function-expression)

[MDN Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

[MDN String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## 4.邮件材料

[2022-09-27-newsletter](https://static.gujiakai.top/static/blog/email/2022-09-27-newsletter.html)