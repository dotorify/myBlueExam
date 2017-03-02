# Parse&Draw Map Library

구조를 갖는 문자열을 입력받아 JSON 객체로 반환하는 기능과 JSON 객체를 콘솔에 출력하는 기능 제공합니다.

문자열 구조:
```
{너비},{높이}\ㅜn{실제데이터}
```

문자열 예시:
```
"10,5\n++++++++++\n+-P------+\n+--------+\n+-----o--+\n++++++++++\n";
```

## Functions

- parseData(map_string)
    - 위의 예시와 같이 규칙을 갖는 문자열 데이터를 입력받아 하나의 구조화된 json 객체를 반환

    ```js
    // 반환되는 JSON 객체 구조
    {
      width: {너비},
      height: {높이},
      data: {실제데이터}
    }
    ```

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
