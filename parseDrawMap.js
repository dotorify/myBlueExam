// Parse & Draw Map library via IIFE
(function () {
  'use strict';

  var DATA_DELIMITER = '\n';
  var WIDTH_HEIGHT_DELIMITER = ',';

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
  function parseData(map_string) {
    var mapStrArr;
    var mapStrArrLen;
    var widthHeightSplits;
    var widthHeightString;
    var width;
    var height;
    var data;

    if (!map_string || map_string.indexOf(DATA_DELIMITER) === -1) {
      return {};
    }

    // split map_string
    mapStrArr = map_string.split(DATA_DELIMITER);

    data = '';
    mapStrArrLen = mapStrArr.length;
    for (var i = 1; i < mapStrArrLen; i++) {
      data += mapStrArr[i];
    }
    data = data.replace(/-/gi, ' ');

    widthHeightString = mapStrArr[0];
    widthHeightSplits = widthHeightString.split(WIDTH_HEIGHT_DELIMITER);

    width = widthHeightSplits[0];
    height= widthHeightSplits[1];

    return {
      width: width,
      height: height,
      data: data
    };
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
    var arr;
    var width;
    var height;
    var data;

    // check has width,height,data
    // TODO if (typeof json.width === 'undefined' ...)

    // json to array
    width = json.width;
    height = json.height;
    data = json.data;

    arr = [];
    for (var row = 0; row < height; row++) {
      arr[row] = [];
      for (var col = 0; col < width; col++) {
        arr[row][col] =  data[row*width + col];
      }
    }

    // print array
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i].join(''));
    }
  };

  // add to window
  window.parseData = parseData;
  window.drawMap = drawMap;
}());
