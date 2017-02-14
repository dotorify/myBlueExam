// Parse & Draw Map library via IIFE
(function () {
  'use strict';

  /**
   * map 문자열을 읽고, json으로 변환 후 반환한다.
   *
   * @param {string} map_string map 문자열
   * @example
   * // {
   * //   "width": 10,
   * //   "height": 5,
   * //   "data": "++++++++ P    ++     ... "
   * // }
   * parseMap("10,5\n++++++++++\n+-P------+\n+--------+\n+-----o--+\n++++++++++\n");
   * @returns {Object}
   */
  function parseMap(map_string) {
    // TODO
  };

  /**
   * json을 읽고, 2차원 배열로 변환 후 배열 값을 출력한다.
   *
   * @param {Object} json object
   * @param {number} json.width 가로 길이
   * @param {number} json.height 세로 길이
   * @param {string} json.data 실제 데이터
   */
  function drawMap(json) {
    // TODO
  };


  // add to window
  window.parseData = parseData;
  window.drawMap = drawMap;
}());

var jsonObj = parseMap("10,5\n++++++++++\n+-P------+\n+--------+\n+-----o--+\n++++++++++\n");
drawMap(jsonObj);
