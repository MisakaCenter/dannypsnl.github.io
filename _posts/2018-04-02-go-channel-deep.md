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

細節無須深入，只是讓讀者了解技術的起源

現在我們從一個簡單的案例開始說明Concurrency為什麼困難，而高階的抽象技術又解決了什麼難題

```go
func main() {
    i := 0
    go func() {
        i++
    }
    if i == 1 {
       fmt.Println("你給我翻譯翻譯，什麼他媽的是他媽的驚喜")
    }
}
```

> p.s. 省略一些引入

這支程式通常是不會有問題的，也就是說子彈可能飛不起來，但是這只是通常，而Concurrency之所以難搞，問題恰恰出在他平常沒有問題

以上面的程式為例，我測試過大約1000次只會出現3次的驚喜，而不確定的行為給除錯帶來了巨大的麻煩，更不幸的是，現實世界中的錯誤往往並沒有這麼顯而易見

現在假設我們想讓子彈飛，有幾種技術可以達到，讓我們從最糟糕的方式開始解決這個問題，有趣的是這也是同步問題的演進史
，可見程式思想總是一貫的以簡單為上，致使一直以來的思考都有相似之處

- 首先上場的是：等

不錯，既然go func把i++放到未來執行，那麼我們只要等到它執行完畢也自然就能夠得到驚喜了吧！

Code:

```go
// ...
i := 0
go func() {
    i++
}
time.Sleep(1000 * time.Millsecond)
if i == 1 {
    // ...
}
// ...
```

然而眼尖的讀者應該已經發現這個解法暗藏陷阱了吧

這個解法之所以不行，是因為它依然沒有可確定的行為，我們只是假設等個一秒‘應該’就有驚喜了吧

### References

#### [CSP book](http://www.usingcsp.com/cspbook.pdf)

#### [CSP wiki](https://en.wikipedia.org/wiki/Communicating_sequential_processes)
