---
layout: post
title: "NOTE: a little bit Z3 solver"
categories:
  - cs
tags:
  - smt
  - z3
---

> Satisfiability Modulo Theories(SMT) problem is a decision problem for logical formulas with respect to combinations of background theories such as arithmetic, bit-vectors, arrays, and uninterpreted functions. Z3 is an efficient SMT solver with specialized algorithms for solving background theories.

Wow, many words. But for me, right now, Z3 is a theorem prover from Microsoft. Use SMT-LIB this lisp-like language.

```lisp
(declare-const x Int)
(declare-const y Int)
(assert (= 5 (+ x y 3)))
(check-sat)
```

The program produce: `sat` as result. If we didn't provide a possible constraint:

```lisp
(declare-const x Int)
(assert (= 5 (+ x 3)))
(assert (= 5 (+ x 2)))
(check-sat)
```

The result would be `unsat`, not surprising.

As title, **a little bit** z3, this is the end, I hadn't know where can I use z3, XD.
