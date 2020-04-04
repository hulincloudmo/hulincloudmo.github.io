---
title: 现代前端授权机制
date: 2020/03/21 19:51
categories: 
 - 前端
tags: 
 - 前端浅谈
---
近几年前端工程化水平越来越高，带动着前端技术的高速革新，本文将介绍前端授权机制的进步与发展中的4大授权技术 => Cookie、Session、Token、JWT。并介绍对项目授权的思路
<!-- more -->

## 前端授权的发展

近几年前端技术的高速发展，授权机制也发生了较大的变革，大体上来说，实现授权的方式有：Cookie、Session、Token、OAuth等

## 获取操作的凭证

- 我们说授权授权，实际上就是获取用户的操作凭证，就像获取一个人的身份证一样，有了身份证，就可以确定一个人的唯一身份！

## Cookie与Session

1. Cookie是一个较小的无状态协议（一般不超过4KB），它储存在客户端之中，由服务器发送到前端储存起来，这样下次请求时，客户端就可以带上Cookie请求头，Cookie中可以由服务端指定一定量的信息（如用户ID），服务端就可以知道请求者的身份。但是Cookie是不可跨域的，每个Cookie必须绑定一个网站的顶级域名，且只能在该顶级域名的子域名下使用，在Chrome80版本下，默认取消了第三方Cookie，且在移动端的支持非常差，支持的数据类型也只有字符串。

2. Session相比于Cookie来说支持了更多的数据类型，储存量也远高于Cookie，它储存在服务端，但是Session的有效时间比较短

## Token => 令牌

token是一个无状态的，访问资源API时所需要的资源凭证

token的特点：

- 无状态
- 移动端适用
- 自定义性强
- 安全性较高，可跨程序使用

# 验证

![token](/token.jpg)

## 抽象的用户名与密码

在登录中，我们可能遇到多种登录方式，微信登录，工号登录，手机号登录…… 大量的登录方式，但他们的本质永远是账号与密码，比如微信登录中账户被抽象成code，密码被抽象成服务端的secret，为了统一他们的登录，我们可以把所有的登录方式统一成账户密码。

## 过程

1. 客户端使用用户名跟密码请求登录
2. 服务端收到请求，去验证用户名与密码
3. 验证成功后，服务端会签发一个 token 并把这个 token 发送给客户端
4. 客户端收到 token 以后，会把它存储起来，比如放在 cookie(token用在web端或不需要跨域名时) 里或者 localStorage(移动端选择)里
5. 客户端每次向服务端请求资源的时候需要带着服务端签发的 token
6. 服务端收到请求，然后去验证客户端请求里面带着的 token ，如果验证成功，就向客户端返回请求的数据

## access_token与refresh_Token

### 作用

- access_token：用户访问应用的接口、资源的凭证，access_token也是服务端对前端控制的唯一途径，它的有效时间较短，无状态

- refresh_Token：用于刷新用户的access_token,它不具备权限，唯一的作用就是刷新access_token，且refresh_token是有状态的，refresh_token的有效时间较长，但是服务器可单方面宣布无效

````json
{
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ0eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTg0ODY0Nzc3LCJ1c2VySWQiOiIxMjMiLCJpYXQiOjE1ODQ4NTc1NzcsInN0YXR1cyI6dHJ1ZX0.X_9Dfo4AMXfnRtqPjXiw_FClw1KPk8cCI9HSqeqCKrNWikncjQw7H_nB2dul0BlVfWRb3xOlgZ0yCLxj4cfm8w",
    "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ0eXBlIjoicmVmcmVzaCIsImV4cCI6MTU4NDk0Mzk3NywidXNlcklkIjoiMTIzIiwiaWF0IjoxNTg0ODU3NTc3LCJzdGF0dXMiOnRydWV9.T0vLWneRavhzQmXvfyb80aaWUezbpZObzh9N9WQ3vV6lsEAp8EXn06mYJrsNLeiXAEKY6d9zy5CHMPG8QP_FmA"
  }
````

### 是否存在漏洞？

我们可以假设这样一个场景，如果用户已经退出了登录，refresh_token可以用服务端状态转化将其失效，但是access_token还是有效的，这是会不会有人盗取了access_token来冒充用户呢？

这种情况是可能存在的，当然前端可以约定退出后就会主动清除access_token与refresh_token，而access_token的有效期又是很短的，如果你能接受这个时间，那么你可以这么设计。如果你不能接受这样的时间的话，你可以在服务端在access_token的`荷载`上附加上信息。

![token](/IMG_1143.PNG)



### token的传递

token的传递可以放在param中，也可以放在body中，也可以放在Header的`Authorization`中，但按照规范，你应该放在authorization中。

`Authorization: Bearer <token>`

### 动态盐

盐值的确定是本策略方案的重点，如果盐值被破解，那么整个安全机制都将崩溃，所以为了加密盐值，一定不能明文储存，在服务端，本系统使用了MD5+ENC混合加密模式，并在运行时动态注入了salt值，除非有人能够盗取到服务端程序，且花费非常大的力气去反编译源程序才有机会获取到salt值，但是如果你还需要更高的安全性，你可以使用动态的盐

动态的盐我们就可以选择一个天然的随机数种子--`时间戳`，时间戳每分每秒都在变化，这样我们就可以利用这一点，取出时间戳中的某几位，然后和用户ID进行混合加密，这样每个用户都得到了一个`唯一的盐`,这样就算攻击者截获了密码，如果不能在1分钟内破解，也是不能通过服务端的验证的，动态盐的设计思路也可以用在用户设备绑定、验证码有效期等方面。



