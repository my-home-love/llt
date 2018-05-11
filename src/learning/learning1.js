$(function(){
    $('#username').focus(function(){
        $(this).after('设置后不可更改<br/>中英文均可,最长14个英文或7个汉字');
    });
    $('#username').blur(function(){
        $(this).after('设置后不可更改<br/>中英文均可,最长14个英文或7个汉字');
    });
})