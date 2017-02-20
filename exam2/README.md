# Parse&Draw Map Library

- 문자열 구조
    - 첫번째 줄: width, height
    - 두번째 줄 ~ 끝 줄: 실제 데이터

예시:
```js
// width,height\n실제데이터
var map = "10,5\n++++++++++\n+-P------+\n+--------+\n+-----o--+\n++++++++++\n";
```

위와 같은 문자열 구조를 갖는 데이터를 입력받아

## Feature

- parseData(map_string)
    - 위의 예시와 같이 규칙을 갖는 문자열 데이터를 입력받아 하나의 구조화된 json 객체를 반환
- drawMap(json)
    - width, height, data의 속성을 갖는 json 데이터를 입력받아 콘솔에 data를 출력

## Live DEMO

Check a live Demo here http://codepen.io/dotorify/pen/YNBeRV

(Codepen의 콘솔창 또는 브라우저의 개발자도구에서 콘솔창을 확인해주세요.)

## Installation

* github CDN

      https://cdn.rawgit.com/dotorify/myBlueExam/fddb3ef9/exam2/parseDrawMap.js


## Client-side Usage

```html
<script src="https://cdn.rawgit.com/dotorify/myBlueExam/fddb3ef9/exam2/parseDrawMap.js" />
```

## Quick Example

### Browser

```js
var map_data;
var json;

map_data = "10,5\n++++++++++\n+-P------+\n+--------+\n+-----o--+\n++++++++++\n";
json = parseData(map_data);

drawMap(json);
```
