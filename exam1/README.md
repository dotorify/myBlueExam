# 1240Nara Library

1, 2, 4, 0 네 개의 숫자만 쓰는 1240 나라가 있습니다. 1240 나라에서 사용하는 숫자는 다음과 같이 변환됩니다.

- 10진법의 1 → 1
- 10진법의 2 → 2
- 10진법의 3 → 4
- 10진법의 4 → 10
- 10진법의 5 → 11
- 10진법의 6 → 12
- 10진법의 7 → 14
- 10진법의 8 → 20
- 10진법의 9 → 21

## Feature

- to1240(10진법)
    - 10진수 숫자를 1240 나라에서 쓰는 숫자로 변환하여 반환해 주는 함수 (리턴 타입은 문자열)
- toDec(1240나라 문자열)
    - 반대 변환 함수 - 1240 나라 문자열을 입력받아 10진수로 변환해 주는 함수

## Live DEMO

Check a live Demo here http://codepen.io/dotorify/pen/jyXRdZ

(Codepen의 콘솔창 또는 브라우저의 개발자도구에서 콘솔창을 확인해주세요.)

## Installation

* github CDN

      https://cdn.rawgit.com/dotorify/myBlueExam/e38fe38d/exam1/1240nara.js


## Client-side Usage

```html
<script src="https://cdn.rawgit.com/dotorify/myBlueExam/e38fe38d/exam1/1240nara.js" />
```

## Quick Example

### Browser

```js
var test1;
var test2;

// Use Case1. 10진법 10을 1240나라의 문자열로 변환
test1 = to1240(10);
// "22"
console.log(test1);


// Use Case2. 1240나라의 문자열 "22"를 10진법으로 변환
test2 = toDec('22');
// 10
console.log(test2);
```
