---
layout: post
title: "Go Channels in deep" 
categories: golang concurrency
tags:
  - golang
  - concurrency
---

> 閱讀此篇之前，我假設讀者已具備`Go`和部分CS常識

說起`Go`的`channel`，要從[CSP](http://www.usingcsp.com/cspbook.pdf)(Communicating Sequential Process)模型說起

在電腦科學中，CSP是一種形式語言，描述非同步系統中各種[interaction](https://en.wikipedia.org/wiki/Interaction)的模式

而interaction則指影響兩個以上物件的動作(action)

### References

#### [CSP book](http://www.usingcsp.com/cspbook.pdf)

#### [CSP wiki](https://en.wikipedia.org/wiki/Communicating_sequential_processes)