# myBlueExam
코드스쿼드 마스터즈코스 블루레벨 레벨테스트 공간입니다.


## 문제1: 1240나라

[문제 보기](https://github.com/code-squad/homepage/wiki/Blue-Exam#%EB%AC%B8%EC%A0%9C1-1240-%EB%82%98%EB%9D%BC)

[codepen 코드 및 결과 보기](http://codepen.io/dotorify/pen/jyXRdZ)

```js
// 1240Nara library via IIFE
(function () {
  'use strict';

  // 1240Nara Members
  var members = ['1', '2', '4', '0'];

  /**
   * 10진법 숫자를 입력받아 1240나라의 문자열로 반환한다.
   *
   * @param {number} num 10진법 숫자
   * @example
   * // returns 22
   * to1240(10);
   * @returns {string}
   */
  function to1240(num) {
    var ret,
        seq,
        remainder,
        idx;

    if (!_isDecimal(num)) {
      return '-1';
    }

    seq = Math.floor(num / 4);
    if (seq === 0) {
      idx = num - 1;
      ret = members[idx];
    } else {
      remainder = num % 4;
      idx = remainder === 0 ? 3:(remainder - 1);
      ret = seq + members[idx];
    }

    return ret;
  };


  /**
   * 1240나라의 문자열을 입력받아 10진법의 숫자를 반환한다.
   *
   * @param {string} str 1240나라 문자열
   * @example
   * // returns 10
   * toDec('22');
   * @returns {number}
   */
  function toDec(str) {
    var ret,
        num,
        seq,
        units;

    if (!_is1240(str)) {
      return -1;
    }

    num = parseInt(str),
    seq = Math.floor(num / 10),

    units = seq === 0 ? num:(num - (seq * 10));
    if (units === 4) {
      ret = (seq * 4) + (units - 1);
    } else {
      ret = (seq * 4) + units;
    }

    return ret;
  };


  /**
   * 값을 입력받아 10진수 여부를 반환한다.
   *
   * @private
   * @param {Object} val 값
   * @example
   * // returns true
   * isDecimal(10);
   * @returns {boolean}
   */
  function _isDecimal(val) {
    var isValid = false;

    if (typeof val === 'number') {
      if (parseFloat(val) === parseInt(val)) {
        isValid = true;
      }
    }

    return isValid;
  };


  /**
   * 값을 입력받아 1240나라의 문자열 여부를 반환한다.
   *
   * @private
   * @param {Object} val 값
   * @example
   * // returns true
   * is1240('22');
   * @returns {boolean}
   */
  function _is1240(val) {
    var isValid = false;

    if (typeof val === 'string' && !isNaN(val)) {
      if (parseFloat(val) === parseInt(val)) {
        isValid = true;
      }
    }

    return isValid;
  };

  window.to1240 = to1240; // add to window
  window.toDec = toDec; // add to window
}());

console.log('10진법의 1 => ' + to1240(1) + ' => 10진법의 ' + toDec('1')); // 10진법의 1 => 1 => 10진법의 1
console.log('10진법의 2 => ' + to1240(2) + ' => 10진법의 ' + toDec('2')); // 10진법의 2 => 2 => 10진법의 2
console.log('10진법의 3 => ' + to1240(3) + ' => 10진법의 ' + toDec('4')); // 10진법의 3 => 4 => 10진법의 3
console.log('10진법의 4 => ' + to1240(4) + ' => 10진법의 ' + toDec('10')); // 10진법의 4 => 10 => 10진법의 4
console.log('10진법의 5 => ' + to1240(5) + ' => 10진법의 ' + toDec('11')); // 10진법의 5 => 11 => 10진법의 5
console.log('10진법의 6 => ' + to1240(6) + ' => 10진법의 ' + toDec('12')); // 10진법의 6 => 12 => 10진법의 6
console.log('10진법의 7 => ' + to1240(7) + ' => 10진법의 ' + toDec('14')); // 10진법의 7 => 14 => 10진법의 7
console.log('10진법의 8 => ' + to1240(8) + ' => 10진법의 ' + toDec('20')); // 10진법의 8 => 20 => 10진법의 8
console.log('10진법의 9 => ' + to1240(9) + ' => 10진법의 ' + toDec('21')); // 10진법의 9 => 21 => 10진법의 9
console.log('10진법의 10 => ' + to1240(10) + ' => 10진법의 ' + toDec('22')); // 10진법의 10 => 22 => 10진법의 10
console.log('문자열 aa => ' + to1240('aa') + ' => 1240나라 문자열이아닌 숫자 ' + toDec(11)); // 문자열 aa => -1 => 1240나라 문자열이아닌 숫자 -1
```
