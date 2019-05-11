//在当前数组内部，将指定位置的成员复制到其他位置,并返回这个数组。
//array.copyWithin(target, start = 0, end = this.length)
// -2相当于3号位，-1相当于4号位
[1, 2, 3, 4, 5].copyWithin(0, -2, -1)
// [4, 2, 3, 4, 5]
var a=['OB1','Koro1','OB2','Koro2','OB3','Koro3','OB4','Koro4','OB5','Koro5']
// 2位置开始被替换,3位置开始读取要替换的 5位置前面停止替换
a.copyWithin(2,3,5)
// ["OB1","Koro1","Koro2","OB3","OB3","Koro3","OB4","Koro4","OB5","Koro5"] 
