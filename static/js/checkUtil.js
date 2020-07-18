export default {
	// isCardNo: function(num) {
	// 	var len = num.length;
	// 	if (len < 15 || len > 18) {
	// 		// uni.showToast({
	// 		// 	title: '输入的身份证号码长度不正确！应为15位或18位',
	// 		// 	icon: 'none'
	// 		// });
	// 		return false;
	// 	}
	// 	var re15 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
	// 	var re18 =
	// 		/^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;;
	// 	var res = (re15.test(num) || re18.test(num));
	// 	if (res == false) {
	// 		// uni.showToast({
	// 		// 	title: '输入的身份证号格式不正确',
	// 		// 	icon: 'none'
	// 		// });
	// 		return false;
	// 	}
	// 	return res;
	// },
	isCardNo: function(num,sexValue) {
		// 长度校验
		var len = num.length;
		if (!num || typeof (num) != 'string' || len != 15 && len != 18
			|| !num.match(/^[0-9]{15}$/) && !num.match(/^[0-9]{17}[0-9xX]$/) || "111111111111111" == num) {
			//this.error = '输入不是15位或者18位有效字符串';
			return false;
		}
		// 前2位的省份校验
		var area = {11 : "北京",12 : "天津",13 : "河北",14 : "山西",15 : "内蒙古",21 : "辽宁",22 : "吉林",23 : "黑龙江",31 : "上海",
		            32 : "江苏",33 : "浙江",34 : "安徽",35 : "福建",36 : "江西",37 : "山东",41 : "河南",42 : "湖北",43 : "湖南",44 : "广东",
		            45 : "广西",46 : "海南",50 : "重庆",51 : "四川",52 : "贵州",53 : "云南",54 : "西藏",61 : "陕西",62 : "甘肃",63 : "青海",
		            64 : "宁夏",65 : "新疆",71 : "台湾",81 : "香港",82 : "澳门",91 : "国外"};
		if (!area[num.substr(0, 2)]) {
			//this.error = '前2位不是有效的行政区划代码';
			return false;
		}
		
		// 出生日期的校验
		var year = ''
		var month = ''
		var day = ''
		if (num.length == 15) {
			year = parseInt(num.substr(6, 2));
			month = parseInt(num.substr(8, 2));
			day = parseInt(num.substr(10, 2));
		}
		else {
			year = parseInt(num.substr(6, 4));
			month = parseInt(num.substr(10, 2));
			day = parseInt(num.substr(12, 2));
		}
		if (month > 12) {
		return false;
		}
		if (day > 31) {
			return false;
		}
		if ((month == 2) && (day > 29)) {
			return false;
		}
		if ((month == 4) || (month == 6) || (month == 9)
		|| (month == 11)) {
			if (day > 30) {
				return false;
			}
		}
		if (year < 100) {
			year += 1900;
		}
		if (year > 9999) {
			return false;
		}
		if ((month == 2) && (day == 29)) {
			var div4 = year % 4;
			var div100 = year % 100;
			var div400 = year % 400;
			// if not divisible by 4, then not a leap year so Feb 29 is invalid
			if (div4 != 0) {
				return false;
			}
			// at this point, year is divisible by 4. So if year is divisible by
			// 100 and not 400, then it's not a leap year so Feb 29 is invalid
			if ((div100 == 0) && (div400 != 0)) {
				return false;
			}
		}
		var yearStr = '' + year;
		var monthStr = (month < 10 ? '0' : '') + month;
		var dayStr = (day < 10 ? '0' : '') + day;

		// date is valid
		var birthDay = new Date(year, month - 1, day);

		if (birthDay - new Date() >= 0 || birthDay - new Date(1850, 1, 1) <= 0) {
			return false;
		}
		
		// 倒数第二位校验
		var lastNum = len == '15' ? num.substr(14, 1) : num.substr(16, 1);
		var sex = (lastNum == '1' || lastNum == '3' || lastNum == '5'
		                || lastNum == '7' || lastNum == '9') ? '1' : '0';
		//var sexName = sex == '1' ? '男' : '女';
		
		if (sexValue && sex != sexValue) {
			return false
		}
		
		// 最后一位校验
		var getLastValidationLetter = function(str) {
			var strArray = new Array(17); 
			// 存储身份证的前17为数字
			var Wi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2,1); 
			// 表示第i位置上的加权因子
			var Y = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'); 
			// 校验码值
			var S = 0; 
			// 十七位数字本体码加权求和
			var jym = 0; 
			// 校验码
			for ( var i = 16; i >= 0; i -= 1) {
				strArray[i] = Number(str.charAt(i));
			}
			for ( var j = 16; j >= 0; j -= 1) {
				S += strArray[j] * Wi[j];
			}
			jym = S % 11;
			return Y[jym];
		};

		if (num.substr(17, 1) != getLastValidationLetter(num.substr(0, 17))) {
			//this.error = '18位身份证编码最后一位校验码不正确';
			return false;
		}
		
		return true;
	},	

	//只能包含字母和数字
	checkWord: function(value) {
		var reg = /^[A-Za-z0-9]+$/;
		var res = (reg.test(value));
		return res;
	},

	getUUID: function() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
			return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
		})
	},

	//比较日期大小
	compareDate: function(beginDate, endDate) {
		//将字符串转换为日期
		var begin = new Date(beginDate);
		var end = new Date(endDate);
		//js判断日期
		if (begin.getTime() - end.getTime() > 0) {
			return false;
		} else {
			return true;
		}
	},
	//判断班级是否为正整数并小于100
	checkIntNumber: function(number) {
		if (number == null || number == "") {
			uni.showToast({
				title: '请输入所在班级',
				icon: 'none'
			});
			return false;
		} else if (!(/(^[1-9]\d*$)/.test(number))) {
			uni.showToast({
				title: '请输入小于100的正整数',
				icon: 'none'
			});
			return false;
		} else {
			if (number > 100) {
				uni.showToast({
					title: '班级不能大于100',
					icon: 'none'
				});
				return false;
			}
		}
		return true;
	},
	isEmpty: function(source) {
		var str = source.replace(/(^\s*)|(\s*$)/g, "");
		if (str == "" || str.length <= 0 || source == null) {
			return true;
		} else {
			return false;
		}
	},

	specialChar: function(value) {
		var patrn = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/im;
		if (!patrn.test(value)) { // 如果包含特殊字符返回false
			return false;
		}
		return true;
	},
	specialCharExcept: function(value) {
		var patrn = /[`~!@#$%^&*_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*——\-+={}|《》？：“”【】、；‘'，。、]/im;
		if (!patrn.test(value)) { // 如果包含特殊字符返回false
			return false;
		}
		return true;
	},

	//  身份证号
	checkCard: function(idCard) {
		if (idCard == "" || idCard == undefined || idCard == null || (idCard.length > 0 && idCard.trim().length == 0)) {
			uni.showToast({
				title: '身份证不能为空',
				icon: 'none'
			});
			return false;
		}
		if (idCard.length == 15) {
			if (!isValidityBrithBy15IdCard(idCard)) { //进行15位身份证的验证
				uni.showToast({
					title: '请输入正确的身份证',
					icon: 'none'
				});
				return false;
			} else {
				return true;
			}
		} else if (idCard.length == 18) {
			var a_idCard = idCard.split(""); // 得到身份证数组
			if (!isValidityBrithBy18IdCard(idCard) || !isTrueValidateCodeBy18IdCard(a_idCard)) { //进行18位身份证的基本验证和第18位的验证
				uni.showToast({
					title: '请输入正确的身份证',
					icon: 'none'
				});
				return false;
			} else {
				return true;
			}
		} else {
			uni.showToast({
				title: '身份证长度不正确',
				icon: 'none'
			});
			return false;
		}
	},

	//  手机号
	checkPhone: function(value) {
		const reg = /^((13[0-9]|14[56789]|15[0-3,5-9]|16[5-6]|17[012345678]|18[0-9]|19[189])\d{8})$/
		if (value == "" || value == undefined || value == null || (value.length > 0 && value.trim().length == 0)) {
			uni.showToast({
				title: '紧急联络人联系方式不能为空',
				icon: 'none'
			});
			return false;
		} else if (!reg.test(value)) {
			uni.showToast({
				title: '紧急联络人联系方式不合法',
				icon: 'none'
			});
			return false;
		} else {
			return true;
		}
	},

	//生成uuid
	guid: function() {
		return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
	},

	setTime: function(interval, number, date) {
		
		/* 
		 *   功能:实现VBScript的DateAdd功能. 
		 *   参数:interval,字符串表达式，表示要添加的时间间隔. 
		 *   参数:number,数值表达式，表示要添加的时间间隔的个数. 
		 *   参数:date,时间对象. 
		 *   返回:新的时间对象. 
		 *   var   now   =   new   Date(); 
		 *   var   newDate   =   DateAdd( "d ",5,now); 
		 *---------------   DateAdd(interval,number,date)   ----------------- 
		 */
		switch (interval) {
			case "y ":
				{
					date.setFullYear(date.getFullYear() + number);
					return date;
					break;
				}
			case "q ":
				{
					date.setMonth(date.getMonth() + number * 3);
					return date;
					break;
				}
			case "m ":
				{
					date.setMonth(date.getMonth() + number);
					return date;
					break;
				}
			case "w ":
				{
					date.setDate(date.getDate() + number * 7);
					
					return date;
					break;
				}
			case "d ":
				{
					date.setDate(date.getDate() + number);
				let res =	date.getFullYear() + '-' + ptime((date.getMonth() + 1)) + '-' + ptime(date.getDate())
					return res;
					break;
				}
			case "h ":
				{
					date.setHours(date.getHours() + number);
					return date;
					break;
				}
			case "m ":
				{
					date.setMinutes(date.getMinutes() + number);
					return date;
					break;
				}
			case "s ":
				{
					date.setSeconds(date.getSeconds() + number);
					return date;
					break;
				}
			default:
				{
					date.setDate(d.getDate() + number);
					return date;
					break;
				}
		}
	}
}

function S4() {
	return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
/**
 * 验证15位数身份证号码中的生日是否是有效生日
 * @param idCard15 15位书身份证字符串
 * @return
 */
function isValidityBrithBy15IdCard(idCard15) {
	var year = idCard15.substring(6, 8);
	var month = idCard15.substring(8, 10);
	var day = idCard15.substring(10, 12);
	var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
	// 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
	if (temp_date.getYear() != parseFloat(year) ||
		temp_date.getMonth() != parseFloat(month) - 1 ||
		temp_date.getDate() != parseFloat(day)) {
		return false;
	} else {
		return true;
	}
}

/**
 * 验证18位数身份证号码中的生日是否是有效生日
 * @param idCard 18位书身份证字符串
 * @return
 */
function isValidityBrithBy18IdCard(idCard18) {
	var year = idCard18.substring(6, 10);
	var month = idCard18.substring(10, 12);
	var day = idCard18.substring(12, 14);
	var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
	// 这里用getFullYear()获取年份，避免千年虫问题
	if (temp_date.getFullYear() != parseFloat(year) ||
		temp_date.getMonth() != parseFloat(month) - 1 ||
		temp_date.getDate() != parseFloat(day)) {
		return false;
	} else {
		return true;
	}
}

/**
 * 判断身份证号码为18位时最后的验证位是否正确
 * @param a_idCard 身份证号码数组
 * @return
 */
function isTrueValidateCodeBy18IdCard(a_idCard) {
	var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]; // 加权因子
	var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; // 身份证验证位值.10代表X
	var sum = 0; // 声明加权求和变量
	if (a_idCard[17].toLowerCase() == 'x') {
		a_idCard[17] = 10; // 将最后位为x的验证码替换为10方便后续操作
	}
	for (var i = 0; i < 17; i++) {
		sum += Wi[i] * a_idCard[i]; // 加权求和
	}
	var valCodePosition = sum % 11; // 得到验证码所位置
	if (a_idCard[17] == ValideCode[valCodePosition]) {
		return true;
	} else {
		return false;
	}
}

//去掉字符串头尾空格
function trim(str) {
	return str.replace(/(^\s*)|(\s*$)/g, "");
}
// 不够10添加0的函数
function ptime(s) {
      return s < 10 ? '0' + s : s
}