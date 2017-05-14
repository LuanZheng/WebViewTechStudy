var handleId;

function refreshTest(tid) {
    handleId = setInterval(refreshByInterval(tid), 5000);
}

function refreshByInterval(tid) {
    $.ajax({
        url: "/Home/GetPreSelectionInfo",
        type: "POST",
        dataType: "json",
        data: { id: tid },
        success: function (result) {
            if (result.IsSuccess == "1") {
                for (var i = 0, length = result.returnList.length; i < length; i++) {
                    alert(result.returnList[i].UserId);
                    alert(result.returnList[i].UserName);
                    alert(result.returnList[i].Mobile);
                }
                if (length > 0) {
                    clearInterval(handleId);
                }
            } else {
                alert("The result is failed!");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("系统繁忙,请稍候");
        },
        //请求完成后回调函数 (请求成功或失败之后均调用)。参数： XMLHttpRequest 对象和一个描述成功请求类型的字符串
        complete: function (XMLHttpRequest, textStatus) {
            //this 调用本次AJAX请求时传递的options参数
            hideLoading();
            hideMask();
        },
        //一组数值的HTTP代码和函数对象，当响应时调用了相应的代码。例如，如果响应状态是404，将触发以下警报：
        statusCode: {
            404: function () {
                alert('404，页面不存在');
                hideLoading();
                hideMask();
            }
        }
    })
}

function getUserInfo() {
    showLoading();
    //alert('Test')
    $.ajax({
        url: "/Home/GetUserInfo",  //ajax请求地址
        type: "POST",//请求方式 "POST" 或 "GET"， 默认为 "GET"。注意：其它 HTTP 请求方法，如 PUT 和 DELETE 也可以使用，但仅部分浏览器支持。
        dataType: "json",    //根据返回数据类型可以有这些类型可选：xml html script json jsonp text
        //发送到服务器的数据，可以直接传对象{a:0,b:1}，如果是get请求会自动拼接到url后面，如：&a=0&b=1
        //如果为数组，jQuery 将自动为不同值对应同一个名称。如 {foo:["bar1", "bar2"]} 转换为 "&foo=bar1&foo=bar2"。
        data: { id: "22" },
        success: function (result) {
            //this 调用本次AJAX请求时传递的options参数 ,如果设置context来改变了this，那这里的this就是改变过的
            if (result.IsSuccess == "1") {
                //alert(result.userInfo.UserId);
                //alert(result.userInfo.UserName);
                //alert(result.userInfo.Mobile);
                var textId = $("#ID");
                var textId2 = $("#NAME");
                var textId3 = $("#MOBILE");
                textId.val(result.userInfo.UserId);
                textId2.val(result.userInfo.UserName);
                textId3.val(result.userInfo.Mobile);
                hideLoading();
                hideMask();
                //document.getElementById("ID") = result.userInfo.UserId;
                //document.getElementById("NAME").textContent = result.userInfo.UserName;
                //document.getElementById("MOBILE").textContent = result.userInfo.Mobile;
            } else {
                alert("The result is failed!");
                hideLoading();
                hideMask();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("系统繁忙,请稍候");
            hideLoading();
            hideMask();
        },
        //请求完成后回调函数 (请求成功或失败之后均调用)。参数： XMLHttpRequest 对象和一个描述成功请求类型的字符串
        complete: function (XMLHttpRequest, textStatus) {
            //this 调用本次AJAX请求时传递的options参数
            hideLoading();
            hideMask();
        },
        //一组数值的HTTP代码和函数对象，当响应时调用了相应的代码。例如，如果响应状态是404，将触发以下警报：
        statusCode: {
            404: function () {
                alert('404，页面不存在');
                hideLoading();
                hideMask();
            }
        }
    });
}

function showLoading() {
    var i = document.getElementById("loading");
    var left = ($(window).width() / 2) + $(document).scrollLeft();
    var top = ($(window).height() / 2) + $(document).scrollTop();
    i.style.top = top + "px";
    i.style.left = left + "px";
    i.style.display = "block";
}

function hideLoading() {
    var i = document.getElementById("loading");
    i.style.display = "none";
}