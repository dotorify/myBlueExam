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
})();
