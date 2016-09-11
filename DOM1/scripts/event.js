// 跨浏览器事件处理程序
    	var eventUtil = {
    		// 添加句柄 注意：传type的时候传没on的事件
    		addHandler: function (element, type, handler) {
    			if (element.addEventListener) {
    				//DOM2 级判断完毕
    				element.addEventListener(type, handler, false);
    			}else if (element.attachEvent) {
    				//IE事件处理程序判断
    				element.attachEvent('on' +type, handler);
    			}else {
    				//DOM0级事件处理程序判断
    				element['on' + type] = handler;	
    			}
    		},
    		// 删除句柄 注意：传type的时候传没on的事件
    		removeHandler: function (element, type, handler) {
    			if (element.removeEventListener) {
    				//DOM2 级判断完毕
    				element.removeEventListener(type, handler, false);
    			}else if (element.detachEvent) {
    				//IE事件处理程序判断
    				element.detachEvent('on' +type, handler);
    			}else {
    				//DOM0级事件处理程序判断
    				element['on' + type] = null;	
    			}
    		},
            //得到触发事件
            getEvent:function () {
                return event?event:window.event;
            },
            //得到事件类型
            getType: function () {
                return event.stype;
            },
            //得到事件触发的元素
            getElement: function () {
                return event.target || event.srcElement;
            },
            //阻止事件默认行为
            preventDefault: function () {
                if (event.preventDefault) {
                    event.preventDefault();
                } else {
                    event.returnValue=false;
                }
            },
            //阻止事件冒泡
            //stopPropagation 是属性，不是函数，所以不能带括号
            stopPropagation: function () {
                if (event.stopPropagation) {
                    event.stopPropagation();    
                } else {
                    event.cancelBubble=true;
                }
            }


    	}