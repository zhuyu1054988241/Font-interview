/*
 * @Description: 实现apply方式。
 * @version: 
 * @Author: 朱宇
 * @Date: 2019-08-22 10:45:31
 * @LastEditTime: 2019-08-22 10:53:39
 */
Function.prototype.myApply = function (context) {
  var context = context || window
  context.fn = this

  var result
  // 需要判断是否存储第二个参数
  // 如果存在，就将第二个参数展开
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }

  delete context.fn
  return result
}